# AetheriaLore

Aetheria is an open science-fantasy setting built to hold radically different stories inside one causal world: black-magic hard SF and noir before Elysium, giant mecha and cultivation epics after it, Ratfolk first contact, cockpit action, corporate logistics, and whatever pressure point another writer finds next. Technologies have histories, institutions have incentives, and consequences survive the stories that create them.

Writers do not need custody of the whole universe. Shared notes own their stated constraints; finished stories own their cast, place, depicted sequence, and immediate consequences. Developmental notes, game designs, and brainstorming may test possibilities without silently changing shared physics, faction history, or practice. A local claim becomes shared canon when the relevant owner note explicitly incorporates it.

`AetheriaLore` is the source vault for [aetheria.gamecult.org](https://aetheria.gamecult.org). It contains setting material, fiction, game design, articles, media, and the Aetheria-specific site overlay.

## Start Here

- **Readers:** begin with [`Aetheria/index.md`](Aetheria/index.md), then browse [`Lore`](Aetheria/Lore/index.md), [`Worldbuilding`](Aetheria/Worldbuilding/index.md), or [`Fiction`](Aetheria/Fiction/index.md).
- **Writers:** read [`Narrative Themes`](Aetheria/Narrative%20Themes.md), the relevant owner notes, and the public [`branch-and-fold process`](Aetheria/Stories/How%20Branching%20Stories%20Are%20Made.md). Finished work lives under [`Fiction`](Aetheria/Fiction/index.md); [`Stories`](Aetheria/Stories/index.md) includes shorter and developmental work.
- **Maintainers:** site-specific configuration lives under `site/`; the shared Quartz engine and build behavior live in `GameCult-Quartz`.

## Repository Map

- `Aetheria/`: source vault content and media; publication is filtered by the site configuration
- `site/`: Aetheria-specific Quartz configuration, layout, components, and styles
- `scripts/quartz/quartz.ps1`: local build and development launcher
- `quartz-site/public/`: generated static output
- `.github/workflows/deploy-quartz.yml`: deployment workflow using the shared engine
- `AGENTS.md`: contribution, continuity, and writing conventions

Internal `Brainstorming/` and `Inspiration/` branches are excluded from publication. They are working material, not automatic canon.

## Local Development

Local builds expect `GameCult-Quartz` either at the sibling path `E:\Projects\GameCult-Quartz` or at the path supplied through `GAMECULT_QUARTZ_ROOT`.

Install the shared engine dependencies first:

```powershell
cd E:\Projects\GameCult-Quartz
npm ci
```

Then run from this repository root:

```powershell
.\scripts\quartz\quartz.ps1 dev
```

For a one-off production build:

```powershell
.\scripts\quartz\quartz.ps1 build
```

The launcher stages the shared engine under `.quartz-build/engine` and writes the finished site to `quartz-site/public`.
