// The Concept Mill viewer. Reads the manifest embedded by AetheriaConceptMill,
// renders the menu (top left), the readout (bottom right) and the corner
// readouts, and owns the selection: URL hash #ship or #ship/variant.

type Hardpoint = { qty: string; size: string; mount: string }
type Variant = {
  id: string
  round: string
  image: string
  thumb: string
  prompt: string
  hypothesis?: string
  verdict?: string
  operator?: string
  pick: boolean
}
type Ship = {
  id: string
  name: string
  code: string
  faction: string
  role: string
  desig: string
  crew: string
  mass: string
  hardpoints: Hardpoint[]
  loadout: string[]
  concept: string
  notes: string
  beaten: string
  status: { kind: "pass" | "new" | "scrap"; stamp: string; verdict: string }
  variants: Variant[]
  defaultVariant: string
}
type Manifest = {
  sections: { kind: Ship["status"]["kind"]; title: string }[]
  votes: { enabled: boolean; endpoint?: string | null; bifrostUrl?: string | null }
  ships: Ship[]
}

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!)
const pad = (n: number, w = 2) => String(n).padStart(w, "0")
const glyphFor = (kind: Ship["status"]["kind"]) => ({ pass: "◆", new: "◇", scrap: "✕" })[kind]

// Hardpoint size to a glyph class: weapons scale with size, gear gets a shape.
function hardpointGlyph(size: string) {
  const s = size.toLowerCase()
  if (s === "heavy" || s === "oversized") return "w3"
  if (s === "medium") return "w2"
  if (s === "small" || s === "light" || s === "cell") return "w1"
  if (s === "sensor") return "sensor"
  if (s === "built-in") return "built"
  return "gear"
}

// Decorative coordinates: stable per ship, playful, never data.
function bearing(id: string) {
  let h = 2166136261
  for (const c of id) h = Math.imul(h ^ c.charCodeAt(0), 16777619)
  const x = ((h >>> 0) % 2000) / 10 - 100
  const y = (((h >>> 11) >>> 0) % 2000) / 10 - 100
  return `${x >= 0 ? "+" : ""}${x.toFixed(1)} ${y >= 0 ? "+" : ""}${y.toFixed(1)}`
}

function setup(root: HTMLElement) {
  const data: Manifest = JSON.parse(root.querySelector(".cm-data")!.textContent ?? "{}")
  const ships = data.ships
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
  const narrow = window.matchMedia("(max-width: 800px)")
  const stage = root.querySelector<HTMLElement>(".cm-stage")!
  const live = stage.querySelector<HTMLImageElement>(".cm-render")!
  const next = live.cloneNode() as HTMLImageElement
  next.classList.remove("is-live")
  next.removeAttribute("src")
  stage.insertBefore(next, live.nextSibling)
  const sweep = stage.querySelector<HTMLElement>(".cm-sweep")!

  const sectionTitle = (kind: string) => data.sections.find((s) => s.kind === kind)?.title ?? kind
  const counts = data.sections.map((s) => `${ships.filter((x) => x.status.kind === s.kind).length} ${s.title.toLowerCase()}`)

  // ---------- menu ----------
  let menuHtml = ""
  for (const section of data.sections) {
    const inSection = ships.filter((s) => s.status.kind === section.kind)
    if (!inSection.length) continue
    menuHtml += `<section class="cm-group is-${section.kind}"><h2>${esc(section.title)} <span>${inSection.length}</span></h2>`
    for (const faction of [...new Set(inSection.map((s) => s.faction))]) {
      menuHtml += `<h3>${esc(faction)}</h3><ul>`
      for (const ship of inSection.filter((s) => s.faction === faction)) {
        const i = ships.indexOf(ship)
        const v = ship.variants.find((x) => x.id === ship.defaultVariant)!
        menuHtml += `<li><button type="button" class="cm-item is-${ship.status.kind}" data-ship="${i}"><img src="${v.thumb}" alt="" loading="lazy" width="720" height="540" /><span class="cm-item-name">${esc(ship.name)}</span><span class="cm-item-role">${esc(ship.role)}${ship.variants.length > 1 ? ` · ${ship.variants.length} renders` : ""}</span></button></li>`
      }
      menuHtml += `</ul>`
    }
    menuHtml += `</section>`
  }

  root.insertAdjacentHTML(
    "beforeend",
    `<aside class="cm-panel cm-menu" aria-label="Ship index">
      <button type="button" class="cm-bar" data-toggle="menu" aria-expanded="true"><span class="cm-bar-label">Ship index</span><span class="cm-bar-meta">${ships.length} on file</span><span class="cm-bar-caret" aria-hidden="true"></span></button>
      <div class="cm-body"><p class="cm-banner"><b>Brainstorming, not canon.</b> Values come from the working prompt benches. TBD means never set.</p><p class="cm-tally">${counts.join(" · ")}</p>${menuHtml}</div>
    </aside>
    <section class="cm-panel cm-readout" aria-label="Technical readout" aria-live="polite">
      <button type="button" class="cm-bar" data-toggle="readout" aria-expanded="true"><span class="cm-bar-label">Technical readout</span><span class="cm-bar-meta cm-readout-tag"></span><span class="cm-bar-caret" aria-hidden="true"></span></button>
      <div class="cm-body cm-readout-body"></div>
    </section>
    <div class="cm-corner cm-corner-bl" aria-hidden="true">
      <span class="cm-glyph"></span>
      <span>FRM <b class="cm-frame-count">000000</b></span>
      <span>BRG <b class="cm-bearing"></b></span>
      <span>RND <b class="cm-round"></b></span>
      <span class="cm-canon">Brainstorming · not canon</span>
    </div>
    <nav class="cm-dock" aria-label="Ship navigation">
      <button type="button" data-step="-1" aria-label="Previous ship">‹</button>
      <span class="cm-dock-name"></span>
      <button type="button" data-step="1" aria-label="Next ship">›</button>
      <button type="button" class="cm-dock-toggle" data-toggle="menu">Ships</button>
      <button type="button" class="cm-dock-toggle" data-toggle="readout">Readout</button>
    </nav>`,
  )

  const menu = root.querySelector<HTMLElement>(".cm-menu")!
  const readout = root.querySelector<HTMLElement>(".cm-readout")!
  const readoutBody = readout.querySelector<HTMLElement>(".cm-readout-body")!
  const readoutTag = readout.querySelector<HTMLElement>(".cm-readout-tag")!
  const items = Array.from(menu.querySelectorAll<HTMLButtonElement>(".cm-item"))
  const panels = { menu, readout }

  // Selection state: the ship by index into the menu order, and its render.
  let shipIndex = 0
  let variantId = ""
  let frame = 0

  // ---------- panels ----------
  function setOpen(name: keyof typeof panels, open: boolean) {
    const panel = panels[name]
    const wasOpen = panel.classList.contains("is-open")
    panel.classList.toggle("is-open", open)
    if (open && !wasOpen && name === "menu") revealCurrent()
    root.querySelectorAll(`[data-toggle="${name}"]`).forEach((b) => b.setAttribute("aria-expanded", String(open)))
    // On a phone the panels are bottom sheets: one at a time.
    if (open && narrow.matches) setOpen(name === "menu" ? "readout" : "menu", false)
  }
  const isOpen = (name: keyof typeof panels) => panels[name].classList.contains("is-open")
  setOpen("menu", !narrow.matches)
  setOpen("readout", !narrow.matches)

  // Scroll only the menu body: scrollIntoView would also move the fixed root.
  function revealCurrent() {
    const b = items.find((x) => Number(x.dataset.ship) === shipIndex)
    const body = menu.querySelector<HTMLElement>(".cm-body")!
    if (!b || !isOpen("menu")) return
    const top = b.offsetTop - body.offsetTop
    if (top < body.scrollTop || top + b.offsetHeight > body.scrollTop + body.clientHeight) {
      body.scrollTop = top - body.clientHeight / 2
    }
  }

  // ---------- votes slot (hidden until configured) ----------
  let tallies: Record<string, { up: number; down: number; members?: { up: number; down: number } }> | null = null
  const votesOn = Boolean(data.votes?.enabled && data.votes.endpoint)
  if (votesOn) {
    fetch(data.votes.endpoint!, { credentials: "omit" })
      .then((r) => (r.ok ? r.json() : null))
      .then((t) => {
        tallies = t
        render(false)
      })
      .catch(() => {})
  }

  // ---------- selection ----------

  function parseHash() {
    const [shipId, vId] = decodeURIComponent(location.hash.replace(/^#/, "")).split("/")
    // Old card anchors named the image (e.g. #vasuki2); map them to the ship.
    const i = ships.findIndex((s) => s.id === shipId || s.variants.some((v) => v.image.endsWith(`/${shipId}.webp`)))
    return i < 0 ? null : { i, v: ships[i].variants.some((x) => x.id === vId) ? vId : ships[i].defaultVariant }
  }

  function select(i: number, vId?: string, writeHash = true) {
    const changedShip = i !== shipIndex || !variantId
    shipIndex = (i + ships.length) % ships.length
    const ship = ships[shipIndex]
    variantId = vId && ship.variants.some((v) => v.id === vId) ? vId : ship.defaultVariant
    if (writeHash) {
      const hash = `#${ship.id}${variantId === ship.defaultVariant ? "" : `/${variantId}`}`
      if (location.hash !== hash) history.replaceState(history.state, "", hash)
    }
    show(changedShip)
  }

  function step(delta: number) {
    select(shipIndex + delta)
  }

  function stepVariant(delta: number) {
    const ship = ships[shipIndex]
    const at = ship.variants.findIndex((v) => v.id === variantId)
    const to = at + delta
    if (to >= 0 && to < ship.variants.length) select(shipIndex, ship.variants[to].id)
  }

  let liveRef = live
  let nextRef = next
  function swap(variant: Variant, ship: Ship) {
    if (liveRef.getAttribute("src") === variant.image) {
      liveRef.classList.add("is-live")
      return
    }
    const target = nextRef
    target.alt = `Concept render of the ${ship.name}, ${variant.round}`
    target.src = variant.image
    const token = (target.dataset.token = String(Date.now()))
    const done = () => {
      if (target.dataset.token !== token) return
      liveRef.classList.remove("is-live")
      target.classList.add("is-live")
      nextRef = liveRef
      liveRef = target
    }
    target.decode().then(done, done)
    if (!reduce) {
      sweep.classList.remove("is-running")
      void sweep.offsetWidth
      sweep.classList.add("is-running")
    }
  }

  function show(changedShip: boolean) {
    const ship = ships[shipIndex]
    const variant = ship.variants.find((v) => v.id === variantId)!
    swap(variant, ship)
    items.forEach((b) => {
      const on = Number(b.dataset.ship) === shipIndex
      b.classList.toggle("is-current", on)
      b.setAttribute("aria-current", on ? "true" : "false")
    })
    if (changedShip) revealCurrent()
    root.querySelector(".cm-dock-name")!.textContent = ship.name
    root.querySelector(".cm-glyph")!.textContent = glyphFor(ship.status.kind)
    root.querySelector(".cm-bearing")!.textContent = bearing(ship.id)
    root.querySelector(".cm-round")!.textContent = variant.round
    readout.dataset.code = ship.code
    readout.dataset.kind = ship.status.kind
    readoutTag.textContent = `MILL-${pad(shipIndex + 1)} · ${ship.code}`
    render(changedShip)
    // Warm the neighbours so stepping feels instant.
    for (const d of [1, -1]) {
      const n = ships[(shipIndex + d + ships.length) % ships.length]
      new Image().src = n.variants.find((v) => v.id === n.defaultVariant)!.image
    }
  }

  function render(animate: boolean) {
    const ship = ships[shipIndex]
    const variant = ship.variants.find((v) => v.id === variantId)!
    const glyphs = ship.hardpoints
      .flatMap((h) => {
        const n = /^\d+$/.test(h.qty) ? Math.min(Number(h.qty), 12) : 1
        return Array.from({ length: n }, () => `<i class="cm-hp-${hardpointGlyph(h.size)}" title="${esc(`${h.size} · ${h.mount}`)}"></i>`)
      })
      .join("")
    const rows = ship.hardpoints
      .map((h) => `<tr><td>${esc(h.qty)}</td><td>${esc(h.size)}</td><td>${esc(h.mount)}</td></tr>`)
      .join("")
    const variantStrip =
      ship.variants.length > 1
        ? `<div class="cm-rounds" role="group" aria-label="Render rounds">${ship.variants
            .map(
              (v) =>
                `<button type="button" data-variant="${esc(v.id)}" class="${v.id === variant.id ? "is-current" : ""}${v.pick ? " is-pick" : ""}" aria-pressed="${v.id === variant.id}"><img src="${v.thumb}" alt="" loading="lazy" width="720" height="540" /><span>${esc(v.round)}</span></button>`,
            )
            .join("")}</div>`
        : ""
    const note =
      variant.hypothesis || variant.verdict || variant.operator
        ? `<div class="cm-variant-note">${variant.hypothesis ? `<p><span class="cm-k">Hypothesis</span>${esc(variant.hypothesis)}</p>` : ""}${variant.verdict ? `<p><span class="cm-k">Lab verdict</span>${esc(variant.verdict)}</p>` : ""}${variant.operator ? `<p class="cm-operator"><span class="cm-k">Operator</span>“${esc(variant.operator)}”</p>` : ""}</div>`
        : ""
    const tally = votesOn && tallies?.[ship.id]
    const votes = votesOn
      ? `<div class="cm-votes" data-votes><span class="cm-k">Votes</span>${tally ? `<span>▲ ${tally.up}</span><span>▼ ${tally.down}</span>` : `<span>—</span>`}${data.votes.bifrostUrl ? `<a href="${esc(`${data.votes.bifrostUrl}/${ship.id}`)}" target="_blank" rel="noopener">Vote on Bifrost ↗</a>` : ""}</div>`
      : `<!-- votes slot: shown when votes.enabled and votes.endpoint are set in scripts/concept-mill/ships.yaml -->`

    readoutBody.innerHTML = `
      <div class="cm-head" style="--i:0">
        <p class="cm-label">${esc(ship.faction)} · ${esc(ship.role)}</p>
        <h1>${esc(ship.name)}</h1>
        <p class="cm-stamps"><span class="cm-stamp is-${ship.status.kind}">${esc(ship.status.stamp)}</span>${variant.pick ? `<span class="cm-pick" title="The lab's choice among the renders, not the operator's">Lab pick</span>` : ""}<span class="cm-round-tag">${esc(variant.round)}</span></p>
      </div>
      <div class="cm-row" style="--i:1">${variantStrip}${note}</div>
      <dl class="cm-spec cm-row" style="--i:2">
        <div><dt>Designation</dt><dd>${esc(ship.desig)}</dd></div>
        <div><dt>Maker</dt><dd>${esc(ship.faction)}</dd></div>
        <div><dt>Class</dt><dd>${esc(ship.role)}</dd></div>
        <div><dt>Crew</dt><dd>${esc(ship.crew)}</dd></div>
        <div><dt>Mass class</dt><dd>${esc(ship.mass)}</dd></div>
        <div class="cm-wide"><dt>Status</dt><dd>${esc(ship.status.verdict)}</dd></div>
      </dl>
      <div class="cm-row" style="--i:3">
        <p class="cm-label">Hardpoints <span class="cm-glyphs" aria-hidden="true">${glyphs}</span></p>
        <table class="cm-hp"><thead><tr><th>Qty</th><th>Size</th><th>Mount · arc</th></tr></thead><tbody>${rows}</tbody></table>
      </div>
      <div class="cm-row" style="--i:4"><p class="cm-label">Default loadout</p><ul class="cm-loadout">${ship.loadout.map((x) => `<li>${esc(x)}</li>`).join("")}</ul></div>
      <div class="cm-row" style="--i:5"><p class="cm-label">Play concept</p><p>${esc(ship.concept)}</p></div>
      <div class="cm-row" style="--i:6"><p class="cm-label">Notes</p><p>${esc(ship.notes)}</p></div>
      <div class="cm-row cm-beaten" style="--i:7"><p class="cm-label">Beaten by</p><p>${esc(ship.beaten)}</p></div>
      ${votes}
      <p class="cm-links cm-row" style="--i:8"><a href="${variant.prompt}" target="_blank" rel="noopener" data-router-ignore data-no-popover="true">Prompt record ↗</a><a href="${variant.image}" target="_blank" rel="noopener" data-router-ignore data-no-popover="true">Full render ↗</a></p>`
    if (animate && !reduce) {
      readoutBody.classList.remove("is-revealing")
      void readoutBody.offsetWidth
      readoutBody.classList.add("is-revealing")
    }
    if (animate) readoutBody.scrollTop = 0
  }

  // ---------- events ----------
  function onClick(e: MouseEvent) {
    const t = e.target as HTMLElement
    const item = t.closest<HTMLElement>("[data-ship]")
    if (item) {
      select(Number(item.dataset.ship))
      if (narrow.matches) setOpen("menu", false)
      return
    }
    const v = t.closest<HTMLElement>("[data-variant]")
    if (v) return select(shipIndex, v.dataset.variant)
    const s = t.closest<HTMLElement>("[data-step]")
    if (s) return step(Number(s.dataset.step))
    const tog = t.closest<HTMLElement>("[data-toggle]")
    if (tog) {
      const name = tog.dataset.toggle as keyof typeof panels
      setOpen(name, !isOpen(name))
    }
  }

  function onKey(e: KeyboardEvent) {
    if (e.defaultPrevented || e.altKey || e.ctrlKey || e.metaKey) return
    const t = e.target as HTMLElement
    if (t.closest("input, textarea, select, [contenteditable], .search")) return
    const inPanel = Boolean(t.closest(".cm-body"))
    if (e.key === "ArrowRight") step(1)
    else if (e.key === "ArrowLeft") step(-1)
    else if (e.key === "]" || (e.key === "ArrowDown" && !inPanel)) stepVariant(1)
    else if (e.key === "[" || (e.key === "ArrowUp" && !inPanel)) stepVariant(-1)
    else if (e.key === "Escape") {
      setOpen("menu", false)
      setOpen("readout", false)
    } else if (e.key === "m" || e.key === "M") setOpen("menu", !isOpen("menu"))
    else if (e.key === "r" || e.key === "R") setOpen("readout", !isOpen("readout"))
    else return
    e.preventDefault()
  }

  function onHash() {
    const h = parseHash()
    if (h) select(h.i, h.v, false)
  }

  // Horizontal swipe on the stage steps through ships.
  let touch: { x: number; y: number } | null = null
  const onTouchStart = (e: TouchEvent) => {
    touch = { x: e.touches[0].clientX, y: e.touches[0].clientY }
  }
  const onTouchEnd = (e: TouchEvent) => {
    if (!touch) return
    const dx = e.changedTouches[0].clientX - touch.x
    const dy = e.changedTouches[0].clientY - touch.y
    touch = null
    if (Math.abs(dx) > 48 && Math.abs(dx) > Math.abs(dy) * 1.5) step(dx < 0 ? 1 : -1)
  }

  // The one ambient element: a frame counter, still under reduced motion.
  const counter = root.querySelector<HTMLElement>(".cm-frame-count")!
  let raf = 0
  let last = 0
  const tick = (t: number) => {
    if (t - last > 80) {
      last = t
      counter.textContent = pad(++frame % 1000000, 6)
    }
    raf = requestAnimationFrame(tick)
  }
  if (!reduce) raf = requestAnimationFrame(tick)

  root.addEventListener("click", onClick)
  document.addEventListener("keydown", onKey)
  window.addEventListener("hashchange", onHash)
  stage.addEventListener("touchstart", onTouchStart, { passive: true })
  stage.addEventListener("touchend", onTouchEnd, { passive: true })

  // The server-rendered ship stays dark unless it is the one the hash asks
  // for, so a slow deep link never shows the wrong ship first.
  live.classList.remove("is-live")
  const initial = parseHash()
  select(initial?.i ?? 0, initial?.v, Boolean(initial))
  root.classList.add("is-ready")

  return () => {
    cancelAnimationFrame(raf)
    root.removeEventListener("click", onClick)
    document.removeEventListener("keydown", onKey)
    window.removeEventListener("hashchange", onHash)
  }
}

document.addEventListener("nav", () => {
  const root = document.querySelector<HTMLElement>("[data-concept-mill]")
  if (!root || root.classList.contains("is-ready")) return
  const cleanup = setup(root)
  window.addCleanup(cleanup)
})
