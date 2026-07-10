type ReaderSettings = {
  version: number
  cfi?: string
  theme: "dark" | "light" | "sepia"
  font: "serif" | "sans"
  fontSize: number
  lineHeight: number
  flow: "paginated" | "scrolled-doc"
  spread: "auto" | "always" | "none"
}

declare global {
  interface Window {
    ePub?: (source: string) => any
    JSZip?: unknown
  }
}

const cookieName = "aetheria_tbp_reader"
const settingsVersion = 5
const defaults: ReaderSettings = {
  version: settingsVersion,
  theme: "dark",
  font: "serif",
  fontSize: 100,
  lineHeight: 165,
  flow: "paginated",
  spread: "auto",
}

function readSettings(): ReaderSettings {
  try {
    const raw = document.cookie.split("; ").find((entry) => entry.startsWith(`${cookieName}=`))?.split("=").slice(1).join("=")
    const saved = raw ? JSON.parse(decodeURIComponent(raw)) : {}
    return {
      ...defaults,
      version: settingsVersion,
      cfi: typeof saved.cfi === "string" ? saved.cfi : undefined,
      theme: ["dark", "light", "sepia"].includes(saved.theme) ? saved.theme : defaults.theme,
      font: ["serif", "sans"].includes(saved.font) ? saved.font : defaults.font,
      fontSize: Number.isFinite(saved.fontSize) ? Math.min(150, Math.max(80, saved.fontSize)) : defaults.fontSize,
      lineHeight: Number.isFinite(saved.lineHeight) ? Math.min(210, Math.max(130, saved.lineHeight)) : defaults.lineHeight,
      flow: ["paginated", "scrolled-doc"].includes(saved.flow) ? saved.flow : defaults.flow,
      spread: saved.version === settingsVersion && ["auto", "always", "none"].includes(saved.spread) ? saved.spread : defaults.spread,
    }
  } catch {
    return { ...defaults }
  }
}

function saveSettings(settings: ReaderSettings) {
  document.cookie = `${cookieName}=${encodeURIComponent(JSON.stringify(settings))}; Max-Age=31536000; Path=/; SameSite=Lax`
}

function loadScript(src: string, ready: () => boolean): Promise<void> {
  if (ready()) return Promise.resolve()
  return new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[src="${src}"]`) as HTMLScriptElement | null
    const script = existing ?? Object.assign(document.createElement("script"), { src })
    script.addEventListener("load", () => resolve(), { once: true })
    script.addEventListener("error", () => reject(new Error(`Could not load ${src}`)), { once: true })
    if (!existing) document.head.appendChild(script)
  })
}

function chapterHrefFor(locationHref: string): string {
  return locationHref.replace(/chapter-(\d+)-p\d+\.xhtml$/, "chapter-$1.xhtml")
}

async function initReader(root: HTMLElement) {
  if (root.dataset.readerReady === "true") return
  root.dataset.readerReady = "true"
  const status = root.querySelector<HTMLElement>("[data-reader-status]")!
  const progress = root.querySelector<HTMLElement>("[data-reader-progress]")!
  const viewport = root.querySelector<HTMLElement>("[data-reader-viewport]")!
  const settings = readSettings()

  try {
    await loadScript("/static/vendor/epubjs/jszip.min.js", () => Boolean(window.JSZip))
    await loadScript("/static/vendor/epubjs/epub.min.js", () => Boolean(window.ePub))
    if (!window.ePub) throw new Error("The EPUB renderer did not initialise")

    const book = window.ePub(root.dataset.epubSrc!)
    const rendition = book.renderTo(viewport, {
      width: "100%",
      height: "100%",
      flow: settings.flow,
      spread: settings.spread,
    })

    const themes = {
      dark: { body: { color: "#e8edf2", background: "#11161b" }, a: { color: "#62bfff" } },
      light: { body: { color: "#202124", background: "#f5f6f7" }, a: { color: "#00659c" } },
      sepia: { body: { color: "#302a23", background: "#f2ead9" }, a: { color: "#865017" } },
    }
    Object.entries(themes).forEach(([name, rules]) => rendition.themes.register(name, rules))

    function applyTypography() {
      rendition.themes.select(settings.theme)
      rendition.themes.override("font-family", settings.font === "serif" ? "Georgia, serif" : "Arial, sans-serif")
      rendition.themes.override("font-size", `${settings.fontSize}%`)
      rendition.themes.override("line-height", String(settings.lineHeight / 100))
    }

    function resizeRendition() {
      const width = Math.max(320, Math.floor(viewport.clientWidth))
      const height = Math.max(320, Math.floor(viewport.clientHeight))
      if (rendition.manager && typeof rendition.resize === "function") rendition.resize(width, height)
    }

    function clampRenditionDom() {
      viewport.style.width = "100%"
      viewport.style.maxWidth = "100%"
      viewport.style.overflow = "hidden"
    }

    async function displayLocation(target?: string) {
      status.textContent = "Loading chapter"
      await rendition.display(target)
      clampRenditionDom()
      resizeRendition()
      clampRenditionDom()
      status.textContent = "Ready"
    }

    root.querySelectorAll<HTMLInputElement | HTMLSelectElement>("[data-reader-setting]").forEach((control) => {
      const key = control.dataset.readerSetting as keyof ReaderSettings
      if (key !== "chapter" && settings[key] !== undefined) control.value = String(settings[key])
    })

    applyTypography()
    await displayLocation(settings.cfi)
    status.textContent = settings.cfi ? "Position restored" : "Ready"

    const chapterSelect = root.querySelector<HTMLSelectElement>('[data-reader-setting="chapter"]')!
    const navigation = await book.loaded.navigation
    chapterSelect.replaceChildren(...navigation.toc.map((item: any) => new Option(item.label.trim(), item.href)))
    const currentLocation = rendition.currentLocation() as any
    if (currentLocation?.start?.href) chapterSelect.value = chapterHrefFor(currentLocation.start.href)
    else chapterSelect.selectedIndex = -1
    chapterSelect.addEventListener("change", () => void displayLocation(chapterSelect.value))

    const previousChapter = root.querySelector<HTMLButtonElement>('[data-reader-action="previous-chapter"]')!
    const nextChapter = root.querySelector<HTMLButtonElement>('[data-reader-action="next-chapter"]')!

    function syncChapterButtons() {
      previousChapter.disabled = chapterSelect.selectedIndex <= 0
      nextChapter.disabled = chapterSelect.selectedIndex === chapterSelect.options.length - 1
    }

    function seekChapter(offset: -1 | 1) {
      const current = chapterSelect.selectedIndex
      const target = current < 0 ? (offset > 0 ? 0 : -1) : current + offset
      if (target < 0 || target >= chapterSelect.options.length) return
      chapterSelect.selectedIndex = target
      syncChapterButtons()
      void displayLocation(chapterSelect.value)
    }

    previousChapter.addEventListener("click", () => seekChapter(-1))
    nextChapter.addEventListener("click", () => seekChapter(1))
    syncChapterButtons()

    void book.ready.then(() => book.locations.generate(1200))
    rendition.on("relocated", (location: any) => {
      clampRenditionDom()
      settings.cfi = location.start.cfi
      saveSettings(settings)
      const percentage = book.locations?.length() ? book.locations.percentageFromCfi(settings.cfi) : null
      progress.textContent = percentage == null ? "Position saved" : `${Math.round(percentage * 100)}% - position saved`
      if (location.start.href) {
        chapterSelect.value = chapterHrefFor(location.start.href)
        syncChapterButtons()
      }
    })

    const mutationObserver = new MutationObserver(() => clampRenditionDom())
    mutationObserver.observe(viewport, { attributes: true, childList: true, subtree: true, attributeFilter: ["style"] })

    root.querySelectorAll('[data-reader-action="previous"]').forEach((control) => {
      control.addEventListener("click", () => {
        void rendition.prev().then(() => clampRenditionDom())
      })
    })
    root.querySelectorAll('[data-reader-action="next"]').forEach((control) => {
      control.addEventListener("click", () => {
        void rendition.next().then(() => clampRenditionDom())
      })
    })
    root.querySelector('[data-reader-action="fullscreen"]')?.addEventListener("click", () => {
      if (document.fullscreenElement) void document.exitFullscreen()
      else void root.requestFullscreen()
    })
    root.addEventListener("keydown", (event) => {
      if ((event.target as HTMLElement).matches("input, select")) return
      if (event.key === "ArrowLeft") void rendition.prev().then(() => clampRenditionDom())
      if (event.key === "ArrowRight") void rendition.next().then(() => clampRenditionDom())
    })

    root.querySelectorAll<HTMLInputElement | HTMLSelectElement>("[data-reader-setting]").forEach((control) => {
      if (control.dataset.readerSetting === "chapter") return
      control.addEventListener("change", () => {
        const key = control.dataset.readerSetting as keyof ReaderSettings
        if (key === "fontSize" || key === "lineHeight") settings[key] = Number(control.value)
        else (settings as any)[key] = control.value
        if (key === "flow") {
          rendition.flow(settings.flow)
          void displayLocation(settings.cfi)
        } else if (key === "spread") {
          rendition.spread(settings.spread)
          resizeRendition()
        } else applyTypography()
        saveSettings(settings)
      })
    })

    window.addCleanup(() => {
      mutationObserver.disconnect()
      book.destroy()
    })
  } catch (error) {
    root.dataset.readerReady = "false"
    status.textContent = error instanceof Error ? error.message : "The reader could not open this book."
    root.classList.add("reader-error")
  }
}

document.addEventListener("nav", () => {
  document.querySelectorAll<HTMLElement>(".aetheria-epub-reader").forEach((reader) => void initReader(reader))
})

export {}
