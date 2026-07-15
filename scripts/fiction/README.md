# Fiction EPUB Builder

`build_epub.py` is the single EPUB packaging and validation path for Aetheria fiction. It derives the title, movements, chapter order, navigation, and spine from the promoted manuscript while taking the output path and stable public identifier explicitly.

It accepts both live manuscript heading schemes:

- `# Title`, `## Movement`, `### Chapter`
- `# Title`, `# Movement`, `## Chapter`

Build the published books from the repository root:

```powershell
python scripts/fiction/build_epub.py --source "Aetheria/Fiction/The Burden of Proof.md" --output "Aetheria/static/fiction/the-burden-of-proof.epub" --identifier-url "https://aetheria.gamecult.org/Fiction/The-Burden-of-Proof" --expected-chapters 28 --expected-title "The Burden of Proof"

python scripts/fiction/build_epub.py --source "Aetheria/Fiction/The Body That Asks.md" --output "Aetheria/static/fiction/the-body-that-asks.epub" --identifier-url "https://aetheria.gamecult.org/Fiction/The-Body-That-Asks" --expected-chapters 69 --expected-title "The Body That Asks"
```

Use the same arguments with `--check` to validate an existing artifact without rebuilding it. Set `SOURCE_DATE_EPOCH` when byte-for-byte reproducibility across filesystems is required.
