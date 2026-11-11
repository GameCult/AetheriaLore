# Aetheria Atlas: design note (PROPOSAL)

**Status: proposal, not canon.** This note is outside `Aetheria/` and unpublished. It scopes an illustrated, encyclopedic gallery of Aetheria lore that Meta asked for. Nothing here changes a lore page, the build or the site. Author: Weksa. Owner of the lore it draws on: Nibu and the authors of each page.

## What the Atlas is

A gallery of single-page entries. Each entry presents one existing lore page in a decorated, illustrated page, then offers separately marked elaborations a reader can enjoy and the setting owner can accept or cut. The vault stays the only source of canon; the Atlas holds no lore of its own.

## Layout rules (what the vault already enforces)

Read from `README.md`, `AGENTS.md`, `scripts/check_canon_marker.py` and `site/quartz.config.ts` on `main` (14d827c):

- Lore lives under `Aetheria/` as Markdown, Title Case names, wikilinks, no frontmatter by convention. Pages carry no `kind:` today; `check_canon_marker.py` treats such pages as legacy and only demands a tag on a new page or the next touch.
- `kind: canon` needs `rulings:` naming at least one `<campaign>:ruling:<label>`; `kind: proposal` may not carry rulings. The check proves the id's form, not that the ruling exists.
- `Brainstorming/` and `Inspiration/` are unpublished working material, "not automatic canon". Shared owner notes own constraints; a local claim becomes canon when the owner note incorporates it (`README.md`).
- Authorship lives in git (`Meta Vens` wrote nearly every page; some pages carry `author:` frontmatter, as `Lore/Nibu.md` does).

## Entry template

One entry = one source page, one proposal file, one page render.

1. **Canon extract.** The source page's text, taken verbatim at a named commit, never re-typed or paraphrased. Header: title, vault path, commit sha, vault author(s) from `git log`. The Atlas build reads the vault; it does not copy it into this repo, so there is one copy of each fact and its history stays in the vault.
2. **Proposal file** (`atlas/<entry>.proposal.md`, `kind: proposal`, no `rulings:`). Three sections: *Elaborations* (additions that would deepen the entry: what a traveller notices, a daily-life detail, a place), *Illustration briefs* (prompt text for each slot, with the canon line each comes from), *Open questions for the owner*. Every elaboration states which canon sentence it extends and what it would change if accepted.
3. **Page render.** Canon in the main text; proposal material only in marginal or boxed areas labelled PROPOSED, so a reader never mistakes one for the other. The page must remain readable with the proposals removed.

An accepted elaboration moves into the vault by an owner's edit and ruling, with its own commit; the Atlas never edits the vault.

## Voice

Follow `AGENTS.md`: plain, humane, concrete, lived stakes first, light wit from inside the situation, no concluding aphorism. The Atlas adds only framing (captions, slot labels, "what a visitor sees"). Calligraphic styling is a typographic choice, not a different register: the prose stays accessible.

## Illustration slots

Each page has up to three, each tied to one canon sentence and carrying its prompt in the proposal file:

- **Plate** (full-width, top or bottom): the entry's place, object or scene.
- **Spot** (small, inline): one named thing, e.g. a device or creature.
- **Vignette** (margin ornament): a decoration drawn from the page's theme.

Prompts follow the image doctrine: save the exact prompt beside each image, render from scratch each iteration. Existing art under `Aetheria/media/aetheria/` is placed where it fits and credited; nothing is generated in this note.

## Page decoration: the existing script

The LaTeX page-decoration script Meta means is probably `bloom-sheet` (Eureka skill, `tools/bloom-sheet/`; `bloom_sheet.py`, `grow.py`, `page.tex`; on Yggdrasil's PATH as `/usr/local/bin/bloom-sheet`). It turns markdown into one neon A4 page with a plant grown around text cards and optional SVG visitors. Its look is neon and drawn by `page.tex`; it is not calligraphic. Using it for the Atlas means either a new `page.tex` look or a different grower; that choice is open, and I did not edit the Eureka skill.

## Sample

`sample-pseudospace.tex` and `sample-pseudospace.proposal.md`, from `Aetheria/Worldbuilding/Post-Elysium/Concepts/Pseudospace.md`. The sample renders with pdfLaTeX and the Zapf Chancery family where installed; no illustrations are generated, slots are drawn as framed placeholders.

## Gaps for Nibu (flagged, not settled)

1. **No page carries `kind:`**. Every candidate entry is legacy. The Atlas cannot say "canon" in the checked sense until the owner tags it and a ruling exists. Until then the Atlas calls vault pages "published lore", not "ruled canon".
2. **Where Atlas files live and whether they publish.** `docs/` is outside `Aetheria/` (unpublished, unchecked by the marker script); `site/quartz.config.ts` ignores only Brainstorming and Inspiration. Publishing the Atlas, and under which path, is a build decision.
3. **Authorship of proposals.** Entries are by Meta Vens; Atlas proposals are by a Mind. Should proposal files carry `author:` and be reviewed by Nibu before any move into the vault?
4. **Pending review obligations.** `AGENTS.md` lists approved-but-unintegrated additions (A2, D1–D3) and pending K1/K2/Z1–Z3. The Atlas must not use them as canon; it needs a ruling or Nibu's list of which are safe to illustrate.
5. **Linked pages.** Pseudospace names Flatlanders and Chaos factions without owning notes in the files I read; whether those are defined elsewhere is unchecked.
