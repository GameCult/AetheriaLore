// Builds the Concept Mill's manifest and render derivatives from ships.yaml.
//
//   node scripts/concept-mill/build.mjs [--renders <dir>] [--force]
//
// For every variant with a `source`, it writes a 1600 px WebP and a thumbnail
// into Aetheria/media/concept-mill/ and publishes the render's .md record as
// prompts/<image>.txt. Originals are only read. Existing derivatives are kept
// unless --force is given, so a run without the renders on disk still works.
// It then reads each variant's hypothesis and verdict from its published
// record and writes the manifest the page component imports.
//
// js-yaml and sharp come from GameCult-Quartz, which the site build already
// requires beside this repo (or at GAMECULT_QUARTZ_ROOT).

import { createRequire } from "node:module"
import fs from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"

const here = path.dirname(fileURLToPath(import.meta.url))
const repoRoot = path.resolve(here, "..", "..")
const quartzRoot = process.env.GAMECULT_QUARTZ_ROOT ?? path.resolve(repoRoot, "..", "GameCult-Quartz")
const quartzRequire = createRequire(path.join(quartzRoot, "package.json"))
const yaml = quartzRequire("js-yaml")
const sharp = quartzRequire("sharp")

const args = process.argv.slice(2)
const flag = (name) => args.includes(name)
const option = (name, fallback) => {
  const i = args.indexOf(name)
  return i >= 0 ? args[i + 1] : fallback
}

const rendersRoot = path.resolve(option("--renders", path.join(repoRoot, "Aetheria", "Brainstorming", "Renders")))
const force = flag("--force")
const mediaDir = path.join(repoRoot, "Aetheria", "media", "concept-mill")
const promptDir = path.join(mediaDir, "prompts")
const manifestPath = path.join(repoRoot, "site", "quartz", "components", "data", "conceptMill.json")
const mediaUrl = "/media/concept-mill/"

const FULL_WIDTH = 1600
const THUMB_WIDTH = 720
const SECTIONS = [
  { kind: "pass", title: "Kept" },
  { kind: "new", title: "Unreviewed" },
  { kind: "scrap", title: "Scrap bin" },
]

const exists = (p) => fs.access(p).then(() => true, () => false)

async function ingest(variant) {
  const full = path.join(mediaDir, `${variant.image}.webp`)
  const thumb = path.join(mediaDir, `${variant.image}-thumb.webp`)
  const record = path.join(promptDir, `${variant.prompt}.txt`)
  const png = path.join(rendersRoot, `${variant.source}.png`)
  const md = path.join(rendersRoot, `${variant.source}.md`)
  const have = (await exists(full)) && (await exists(thumb)) && (await exists(record))
  if (have && !force) return false
  if (!(await exists(png)) || !(await exists(md))) {
    throw new Error(`${variant.image}: derivatives missing and source not found at ${png}`)
  }
  await sharp(png).resize({ width: FULL_WIDTH }).webp({ quality: 82 }).toFile(full)
  await sharp(png).resize({ width: THUMB_WIDTH }).webp({ quality: 72 }).toFile(thumb)
  await fs.copyFile(md, record)
  return true
}

// A render record is Markdown with "## Hypothesis" and "## Agent verdict"
// (or "## Agent observation", the round 4-5 heading) sections.
function section(text, headings) {
  const lines = text.split(/\r?\n/)
  const start = lines.findIndex((l) => l.startsWith("## ") && headings.includes(l.slice(3).trim().toLowerCase()))
  if (start < 0) return undefined
  const body = []
  for (const line of lines.slice(start + 1)) {
    if (line.startsWith("## ")) break
    body.push(line)
  }
  const out = body.join(" ").replace(/`/g, "").replace(/\s+/g, " ").trim()
  return out || undefined
}

function fail(message) {
  console.error(`concept-mill: ${message}`)
  process.exit(1)
}

const data = yaml.load(await fs.readFile(path.join(here, "ships.yaml"), "utf8"))
await fs.mkdir(promptDir, { recursive: true })

const shipIds = new Set()
let ingested = 0
const ships = []
for (const ship of data.ships) {
  if (shipIds.has(ship.id)) fail(`duplicate ship id ${ship.id}`)
  shipIds.add(ship.id)
  if (!SECTIONS.some((s) => s.kind === ship.status?.kind)) fail(`${ship.id}: unknown status kind`)
  if (!ship.variants?.length) fail(`${ship.id}: no variants`)
  const picks = ship.variants.filter((v) => v.pick || v.default)
  if (picks.length > 1) fail(`${ship.id}: more than one pick or default variant`)

  const variants = []
  const variantIds = new Set()
  for (const v of ship.variants) {
    if (variantIds.has(v.id)) fail(`${ship.id}: duplicate variant id ${v.id}`)
    variantIds.add(v.id)
    const variant = { ...v, prompt: v.prompt ?? v.image }
    if (variant.source && (await ingest(variant))) ingested++
    for (const file of [`${variant.image}.webp`, `${variant.image}-thumb.webp`, `prompts/${variant.prompt}.txt`]) {
      if (!(await exists(path.join(mediaDir, file)))) fail(`${ship.id}/${v.id}: missing ${file}`)
    }
    const record = await fs.readFile(path.join(promptDir, `${variant.prompt}.txt`), "utf8")
    variants.push({
      id: v.id,
      round: String(v.round),
      image: `${mediaUrl}${variant.image}.webp`,
      thumb: `${mediaUrl}${variant.image}-thumb.webp`,
      prompt: `${mediaUrl}prompts/${variant.prompt}.txt`,
      hypothesis: v.hypothesis ?? section(record, ["hypothesis"]),
      verdict: v.verdict ?? section(record, ["agent verdict", "agent observation"]),
      operator: v.operator,
      pick: Boolean(v.pick),
    })
  }
  const { variants: _, ...readout } = ship
  ships.push({
    ...readout,
    crew: String(ship.crew),
    hardpoints: ship.hardpoints.map(([qty, size, mount]) => ({ qty: String(qty), size, mount })),
    variants,
    defaultVariant: variants[ship.variants.findIndex((v) => v.pick || v.default)]?.id ?? variants[variants.length - 1].id,
  })
}

// Menu order: section, then faction in first-seen order, then file order.
const ordered = SECTIONS.flatMap(({ kind }) => {
  const inSection = ships.filter((s) => s.status.kind === kind)
  const factions = [...new Set(inSection.map((s) => s.faction))]
  return factions.flatMap((f) => inSection.filter((s) => s.faction === f))
})

const manifest = {
  sections: SECTIONS,
  votes: data.votes ?? { enabled: false },
  ships: ordered,
}
await fs.mkdir(path.dirname(manifestPath), { recursive: true })
await fs.writeFile(manifestPath, JSON.stringify(manifest, null, 1) + "\n")

const variantCount = ordered.reduce((n, s) => n + s.variants.length, 0)
console.log(`concept-mill: ${ordered.length} ships, ${variantCount} variants, ${ingested} renders ingested`)
console.log(`concept-mill: wrote ${path.relative(repoRoot, manifestPath)}`)
