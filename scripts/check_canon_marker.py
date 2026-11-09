#!/usr/bin/env python3
"""Canon/proposal marker check. Usage: check_canon_marker.py <base-ref>

Checks .md files under Aetheria/ added, modified or renamed against <base-ref>.
Proves the form and presence of ruling ids, not that the ruling exists.
"""
import re, subprocess, sys

import yaml

ID = re.compile(r"^[a-z0-9][a-z0-9-]*:ruling:[a-z0-9][a-z0-9._-]*$")


def git(*a):
    return subprocess.run(["git", *a], check=True, capture_output=True, text=True).stdout


def frontmatter(text):
    """Return (kind, rulings or None, error). Frontmatter is real YAML."""
    if not text.startswith("---\n"):
        return None, None, None
    end = text.find("\n---", 4)
    if end < 0:
        return None, None, "unterminated frontmatter"
    try:
        data = yaml.safe_load(text[4:end])
    except yaml.YAMLError as e:
        return None, None, f"frontmatter is not valid YAML ({type(e).__name__})"
    if data is None:
        data = {}
    if not isinstance(data, dict):
        return None, None, "frontmatter must be a mapping"
    kind, rulings = data.get("kind"), data.get("rulings")
    if kind is not None and not isinstance(kind, str):
        return None, None, "kind must be a string"
    if rulings is not None and not (isinstance(rulings, list) and all(isinstance(r, str) for r in rulings)):
        return None, None, "rulings must be a list of strings"
    return kind, rulings, None


def changed(base):
    """(status letter, path) for each page added, modified or renamed (the new path)."""
    out = git("diff", "-z", "--name-status", "--diff-filter=AMR", f"{base}...HEAD", "--", "Aetheria")
    fields = out.split("\0")
    rows, i = [], 0
    while i < len(fields) and fields[i]:
        st = fields[i]
        if st[0] == "R":
            rows.append(("R", fields[i + 2]))
            i += 3
        else:
            rows.append((st[0], fields[i + 1]))
            i += 2
    return rows


def main(base):
    failed = False
    for st, path in changed(base):
        if not path.endswith(".md"):
            continue
        kind, rulings, err = frontmatter(open(path, encoding="utf-8").read())
        problem = None
        if err:
            problem = err
        elif kind is None:
            if st == "A":
                problem = "new page needs `kind: canon` or `kind: proposal`"
            else:
                print(f"notice: {path} has no kind (legacy); tag it when you next touch it")
        elif kind == "canon":
            bad = [r for r in (rulings or []) if not ID.match(r)]
            if not rulings or bad:
                problem = ("kind: canon requires `rulings:` with at least one id of the form "
                           f"<campaign>:ruling:<label>\n  (found: {bad or 'none'})")
        elif kind == "proposal":
            if rulings:
                problem = "kind: proposal may not carry `rulings:`"
        else:
            problem = f"kind must be canon or proposal (found: {kind})"
        if problem:
            failed = True
            print(f"CANON CHECK FAILED: {path}\n  {problem}\n"
                  "  A ruling must exist before its text enters a canon page. "
                  "Put the text in a `kind: proposal` page until it does.")
    return 1 if failed else 0


if __name__ == "__main__":
    sys.stdout.reconfigure(encoding="utf-8")
    sys.exit(main(sys.argv[1]))
