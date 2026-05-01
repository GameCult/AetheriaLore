# AetheriaLore

`AetheriaLore` is the source vault for `https://aetheria.gamecult.org`: lore, design notes, stories, and the sort of worldbuilding that thrives when nobody forces it into a CMS shaped like office software.

The site now builds against the shared `GameCult-Quartz` engine instead of carrying its own private Quartz clone. This repo owns the vault content and the Aetheria-specific overlay; the engine lives next door.

## Repository Map

- `Aetheria/`: the actual vault content
- `site/`: Aetheria-specific Quartz overlay
  - `quartz.config.ts`
  - `quartz.layout.ts`
  - custom components
  - custom styles
  - static assets
- `quartz-site/public/`: generated static output
- `scripts/quartz/quartz.ps1`: local build/dev launcher
- `.github/workflows/deploy-quartz.yml`: Pages deploy workflow, delegated to `GameCult-Quartz`
- `AGENTS.md`: writing and editing conventions

## Shared Engine Dependency

Local builds expect the shared engine repo to exist either:

- as a sibling checkout at `E:\\Projects\\GameCult-Quartz`, or
- at the path provided through `GAMECULT_QUARTZ_ROOT`

Install dependencies in `GameCult-Quartz` first:

```powershell
cd E:\Projects\GameCult-Quartz
npm ci
```

## Local Development

From the repository root:

```powershell
.\scripts\quartz\quartz.ps1 dev
```

For a one-off production build:

```powershell
.\scripts\quartz\quartz.ps1 build
```

The shared engine stages a runtime under `.quartz-build/engine` and writes the finished static site to `quartz-site/public`.

## Vault Structure

Most published material lives under `Aetheria/`, especially these branches:

- `Lore/`
- `Game Design/`
- `Stories/`

If you want the setting in sequence, start with:

1. `Aetheria/index.md`
2. `Aetheria/Lore/index.md`
3. `Aetheria/Stories/index.md`

Some vault paths remain intentionally unpublished, including internal brainstorming and inspiration dumps. They can stay messy in private instead of oozing onto the public site.
