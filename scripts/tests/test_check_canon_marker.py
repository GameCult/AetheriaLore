"""Tests for scripts/check_canon_marker.py: each builds a throwaway git repo
with a main branch, adds pages on a branch, and runs the check against main."""
import os
import subprocess
import tempfile
import unittest

SCRIPT = os.path.join(os.path.dirname(__file__), "..", "check_canon_marker.py")
RULING = "aetheria-lore:ruling:megiddo-origin"


def git(cwd, *args):
    subprocess.run(["git", "-c", "user.email=t@t", "-c", "user.name=t", *args],
                   cwd=cwd, check=True, capture_output=True)


class Repo:
    def __init__(self):
        self.tmp = tempfile.TemporaryDirectory()
        self.dir = self.tmp.name
        git(self.dir, "init", "-b", "main")
        os.makedirs(os.path.join(self.dir, "Aetheria"))
        self.write("Aetheria/Legacy.md", "old page, no marker\n" + "line of lore\n" * 20)
        git(self.dir, "add", "-A")
        git(self.dir, "commit", "-m", "base")
        git(self.dir, "checkout", "-b", "pr")

    def write(self, path, text):
        full = os.path.join(self.dir, path)
        os.makedirs(os.path.dirname(full), exist_ok=True)
        with open(full, "w", encoding="utf-8") as f:
            f.write(text)

    def commit(self):
        git(self.dir, "add", "-A")
        git(self.dir, "commit", "-m", "pr")

    def check(self):
        p = subprocess.run(["python3", SCRIPT, "main"], cwd=self.dir,
                           capture_output=True, text=True)
        return p.returncode, p.stdout + p.stderr


def canon(rulings, kind="canon"):
    return f"---\nkind: {kind}\nrulings:\n{rulings}---\nbody\n"


class CanonMarker(unittest.TestCase):
    def run_pages(self, pages, after=None):
        r = Repo()
        for path, text in pages.items():
            r.write(path, text)
        if after:
            after(r)
        r.commit()
        return r.check()

    def test_a_canon_page_with_a_ruling_id_passes(self):
        code, out = self.run_pages({"Aetheria/A.md": canon(f"  - {RULING}\n")})
        self.assertEqual(code, 0, out)

    def test_a_canon_page_without_a_ruling_fails(self):
        code, out = self.run_pages({"Aetheria/A.md": "---\nkind: canon\n---\nx\n"})
        self.assertEqual(code, 1, out)

    def test_a_non_ascii_path_is_checked_not_skipped(self):
        code, out = self.run_pages({"Aetheria/Framgång.md": "---\nkind: canon\n---\nx\n"})
        self.assertEqual(code, 1, out)
        self.assertIn("Framgång.md", out)

    def test_a_renamed_page_is_checked(self):
        def rename(r):
            git(r.dir, "mv", "Aetheria/Legacy.md", "Aetheria/Moved.md")
            r.write("Aetheria/Moved.md", "---\nkind: canon\n---\n" + "old page, no marker\n" + "line of lore\n" * 20)
        code, out = self.run_pages({}, after=rename)
        self.assertEqual(code, 1, out)
        self.assertIn("Moved.md", out)

    def test_quoted_values_parse(self):
        text = f'---\nkind: "canon"\nrulings:\n  - "{RULING}"\n---\nx\n'
        code, out = self.run_pages({"Aetheria/A.md": text})
        self.assertEqual(code, 0, out)

    def test_a_trailing_comment_on_a_ruling_is_not_part_of_the_id(self):
        code, out = self.run_pages({"Aetheria/A.md": canon(f"  - {RULING}  # megiddo\n")})
        self.assertEqual(code, 0, out)

    def test_a_flow_list_of_rulings_parses(self):
        text = f"---\nkind: canon\nrulings: [{RULING}, weksa:ruling:other]\n---\nx\n"
        code, out = self.run_pages({"Aetheria/A.md": text})
        self.assertEqual(code, 0, out)

    def test_cross_campaign_ruling_ids_count(self):
        code, out = self.run_pages({"Aetheria/A.md": canon("  - weksa-body:ruling:faction-play-1\n")})
        self.assertEqual(code, 0, out)

    def test_a_malformed_ruling_id_fails(self):
        code, out = self.run_pages({"Aetheria/A.md": canon("  - megiddo-origin\n")})
        self.assertEqual(code, 1, out)

    def test_a_proposal_may_not_carry_rulings(self):
        code, out = self.run_pages({"Aetheria/A.md": canon(f"  - {RULING}\n", kind="proposal")})
        self.assertEqual(code, 1, out)

    def test_a_proposal_without_rulings_passes(self):
        code, out = self.run_pages({"Aetheria/A.md": "---\nkind: proposal\n---\nx\n"})
        self.assertEqual(code, 0, out)

    def test_an_unknown_kind_fails(self):
        code, out = self.run_pages({"Aetheria/A.md": "---\nkind: draft\n---\nx\n"})
        self.assertEqual(code, 1, out)

    def test_a_new_untagged_page_fails(self):
        code, out = self.run_pages({"Aetheria/A.md": "no frontmatter\n"})
        self.assertEqual(code, 1, out)

    def test_a_touched_legacy_page_passes_with_a_notice(self):
        code, out = self.run_pages({"Aetheria/Legacy.md": "old page, edited\n" + "line of lore\n" * 20})
        self.assertEqual(code, 0, out)
        self.assertIn("notice", out)

    def test_invalid_yaml_fails_instead_of_crashing(self):
        code, out = self.run_pages({"Aetheria/A.md": "---\nkind: [canon\n---\nx\n"})
        self.assertEqual(code, 1, out)
        self.assertNotIn("Traceback", out)

    def test_a_non_mapping_frontmatter_fails(self):
        code, out = self.run_pages({"Aetheria/A.md": "---\n- canon\n---\nx\n"})
        self.assertEqual(code, 1, out)
        self.assertNotIn("Traceback", out)

    def test_pages_outside_aetheria_are_not_checked(self):
        code, out = self.run_pages({"README2.md": "---\nkind: canon\n---\nx\n"})
        self.assertEqual(code, 0, out)


if __name__ == "__main__":
    unittest.main()
