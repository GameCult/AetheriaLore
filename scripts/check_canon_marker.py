#!/usr/bin/env python3
"""Canon/proposal marker check. Usage: check_canon_marker.py <base-ref>

Checks .md files under Aetheria/ added or modified against <base-ref>.
Proves the form and presence of ruling ids, not that the ruling exists.
"""
import re, subprocess, sys

ID = re.compile(r"^[a-z0-9][a-z0-9-]*:ruling:[a-z0-9][a-z0-9._-]*$")


def git(*a):
    return subprocess.run(["git", *a], check=True, capture_output=True, text=True).stdout


def frontmatter(text):
    """Return (kind, rulings or None, error). Only the two keys we need."""
    if not text.startswith("---\n"):
        return None, None, None
    end = text.find("\n---", 4)
    if end < 0:
        return None, None, "unterminated frontmatter"
    kind, rulings, in_rul = None, None, False
    for line in text[4:end].splitlines():
        m = re.match(r"^kind:\s*(\S+)\s*$", line)
        if m:
            kind, in_rul = m.group(1), False
        elif re.match(r"^rulings:\s*$", line):
            rulings, in_rul = [], True
        elif re.match(r"^rulings:\s*\[(.*)\]\s*$", line):
            rulings, in_rul = [s.strip() for s in line.split("[", 1)[1].rstrip("] \n").split(",") if s.strip()], False
        elif in_rul and (m := re.match(r"^\s+-\s*(\S+)\s*$", line)):
            rulings.append(m.group(1))
        elif not line.startswith((" ", "\t")):
            in_rul = False
    return kind, rulings, None


def main(base):
    status = git("diff", "--name-status", "--diff-filter=AM", f"{base}...HEAD", "--", "Aetheria")
    failed = False
    for row in status.splitlines():
        st, path = row.split("\t", 1)
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
    sys.exit(main(sys.argv[1]))
