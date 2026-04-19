# AetheriaLore

AetheriaLore is an Obsidian vault for the Aetheria setting and the source for the live Quartz-powered site at `https://aetheria.gamecult.org`.

The setting is a politically charged science-fantasy / science-fiction world shaped by corporate power, technological escalation, ideological struggle, and the long consequences of social collapse. The repository is both:

- a readable worldbuilding vault under `Aetheria/`
- a customized static site implementation under `quartz-site/`

## Repository Map

The most important top-level paths are:

- `Aetheria/`: the actual vault content
- `quartz-site/`: the vendored Quartz site source and custom UI code
- `scripts/quartz/quartz.ps1`: beginner-friendly helper for local builds and the dev server
- `.github/workflows/deploy-quartz.yml`: GitHub Pages deployment workflow
- `AGENTS.md`: project writing and editing conventions

Within the vault, most published setting material lives under `Aetheria/Worldbuilding/`:

- `Pre-Elysium`: solar-system-era history, factions, technologies, movements, and timeline notes
- `Post-Elysium`: transformed-era concepts, species, and technologies
- `Politics`: strategic, legal, and institutional notes about power and warfare

If you want to read the setting in sequence, start with:

1. `Aetheria/Introduction.md`
2. `Aetheria/Narrative Themes.md`
3. `Aetheria/Worldbuilding/Pre-Elysium/Timeline.md`

## Local Development Quick Start

### The easiest path on Windows

From the repository root, run:

```powershell
.\scripts\quartz\quartz.ps1 dev
```

That command:

- starts the local Quartz development server
- watches the vault for changes
- rebuilds automatically as you edit notes or site files
- uses the bundled portable Node.js runtime in `.tools/` if it exists

Quartz will print the local address when it starts. In this repo it is usually `http://localhost:8080`.

When you are done, stop it with `Ctrl+C`.

### Build a static output locally

To do a one-off production-style build:

```powershell
.\scripts\quartz\quartz.ps1 build
```

The generated site goes to:

```text
quartz-site/public
```

That folder is build output, not source of truth.

### Important beginner note

Do **not** test the site by double-clicking `quartz-site/public/index.html` and opening it as a `file://` page. Quartz features such as search, explorer behavior, and some client-side routing expect a real HTTP server. Use the dev host instead.

## Direct npm Workflow

If you prefer to work directly inside `quartz-site/` instead of using the helper script:

```powershell
cd quartz-site
npm ci
npm run dev
```

For a one-off build:

```powershell
cd quartz-site
npm run build
```

This is the more portable path on non-Windows systems. The PowerShell helper is mainly there to make local development smoother on Windows and to hide the bundled-runtime setup.

## Testing And Verification

The fastest useful smoke test is a full site build:

```powershell
.\scripts\quartz\quartz.ps1 build
```

If you are changing Quartz TypeScript logic, you can also run the vendored Quartz test suite from `quartz-site/`:

```powershell
cd quartz-site
npm test
```

Useful additional checks:

```powershell
cd quartz-site
npm run check
```

## Where To Edit Things

### Setting content

- `Aetheria/**/*.md`

This is where the worldbuilding actually lives. If you are changing lore, faction descriptions, timelines, concepts, or overview notes, you are probably editing here.

### Site-wide Quartz settings

- `quartz-site/quartz.config.ts`

Use this for:

- site title
- base URL
- ignored vault paths
- theme colors and fonts
- Quartz plugins and emitters

### Page layout and which UI pieces appear where

- `quartz-site/quartz.layout.ts`

Use this when you need to change the overall shell for note pages: header, breadcrumbs, sidebars, footer, and which components are rendered before or after the note body.

### Main site-specific styling

- `quartz-site/quartz/styles/custom.scss`

This is the primary place to adjust Aetheria-specific look and feel:

- dark-only theme behavior
- layout spacing and panel treatment
- title bar styling
- sidebar styling
- breadcrumb appearance
- note chrome and atmosphere

Quartz base styles also live nearby in `quartz-site/quartz/styles/`, but `custom.scss` is the intended first stop for project-specific visual changes.

### Aetheria-specific custom components

These are the most important custom UI files:

- `quartz-site/quartz/components/AetheriaMasthead.tsx`: the top title bar and major section navigation
- `quartz-site/quartz/components/AetheriaOverviewSidebar.tsx`: the left navigation sidebar
- `quartz-site/quartz/components/AetheriaThemeLock.tsx`: dark-mode lock
- `quartz-site/quartz/components/aetheria.ts`: note/tagline/overview parsing logic used by the custom shell

### Custom behavior worth knowing about

- `quartz-site/quartz/components/Breadcrumbs.tsx`: breadcrumb rendering
- `quartz-site/quartz/util/fileTrie.ts`: path and ancestry logic used by breadcrumbs and folder-like navigation
- `quartz-site/quartz/components/Head.tsx`: page titles and metadata behavior
- `quartz-site/quartz/components/renderPage.tsx`: page assembly

### Deployment

- `.github/workflows/deploy-quartz.yml`

Pushes to `main` trigger the GitHub Actions build and deploy the static site to GitHub Pages.

## Working With The Vault

If you open the repository in Obsidian, internal wiki links such as `[[Megas]]`, `[[Aether]]`, or `[[Pan-Solar Consortium]]` give the best reading and editing experience.

Published overview/navigation notes are usually `index.md` files inside their branch folders. In this repo they are not throwaway placeholders: they drive navigation, taglines, and sidebar behavior in the generated site.

Some vault paths are intentionally excluded from the published site, including:

- `Brainstorming/`
- `Inspiration/`

They can still exist in the vault for internal work.

## Contributor Notes

Start with `AGENTS.md` before making broad writing changes. It documents the tone, structural conventions, navigation expectations, and thematic lenses used across the setting.

If you need semantic vault navigation support while editing locally, the repo also includes a local RAG helper under `scripts/rag/`.

## Troubleshooting

### `npm` was not found

The helper script will use the bundled Windows runtime in `.tools/node-v24.15.0-win-x64` if present. If that folder is missing, install Node.js and npm locally.

### Build warnings about inaccurate dates

Quartz can warn that dates are inaccurate for notes that are not yet tracked by Git. That usually means you need to commit the new file before Git-backed modified dates become meaningful.

### The dev site looks broken but the build succeeded

Make sure you opened the served URL from `npm run dev` or `.\scripts\quartz\quartz.ps1 dev`, not a raw file from `quartz-site/public`.

## License

See `LICENSE` for repository licensing details.
