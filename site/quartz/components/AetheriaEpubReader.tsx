import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
// @ts-ignore
import script from "./scripts/aetheriaEpubReader.inline"
import style from "./styles/aetheriaEpubReader.scss"

type FictionReaderConfig = {
  title: string
  epubHref: string
  storageKey: string
}

const fictionReaders: Record<string, FictionReaderConfig> = {
  "Fiction/The-Burden-of-Proof": {
    title: "The Burden of Proof",
    epubHref: "/static/fiction/the-burden-of-proof.epub",
    storageKey: "aetheria_tbp_reader",
  },
  "Fiction/The-Body-That-Asks": {
    title: "The Body That Asks",
    epubHref: "/static/fiction/the-body-that-asks.epub",
    storageKey: "aetheria_tbta_reader",
  },
}

export const isAetheriaEpubReaderPage = (slug: string | undefined) => Boolean(slug && fictionReaders[slug])

export default (() => {
  const AetheriaEpubReader: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
    const config = fileData.slug ? fictionReaders[fileData.slug] : undefined
    if (!config) return null

    return (
      <section
        class="aetheria-epub-reader"
        data-epub-src={`${config.epubHref}?v=reader-multibook-1`}
        data-reader-storage-key={config.storageKey}
        aria-label={`${config.title} ebook reader`}
      >
      <div class="aetheria-reader-heading">
        <div>
          <p class="aetheria-reader-kicker">Ebook edition</p>
          <h2>Read {config.title}</h2>
        </div>
        <a class="aetheria-reader-download" href={config.epubHref} download>
          Download EPUB
        </a>
      </div>
      <div class="aetheria-reader-toolbar" aria-label="Reader controls">
        <button type="button" data-reader-action="previous-chapter" aria-label="Previous chapter" title="Previous chapter">&larr;</button>
        <button type="button" data-reader-action="next-chapter" aria-label="Next chapter" title="Next chapter">&rarr;</button>
        <label class="aetheria-reader-wide-control">
          <span>Chapter</span>
          <select data-reader-setting="chapter" aria-label="Chapter"><option>Loading contents...</option></select>
        </label>
        <label>
          <span>Flow</span>
          <select data-reader-setting="flow"><option value="paginated">Pages</option><option value="scrolled-doc">Scroll</option></select>
        </label>
        <label>
          <span>Spread</span>
          <select data-reader-setting="spread"><option value="auto">Auto</option><option value="none">Single</option><option value="always">Two Pages</option></select>
        </label>
        <label>
          <span>Theme</span>
          <select data-reader-setting="theme"><option value="dark">Dark</option><option value="light">Light</option><option value="sepia">Sepia</option></select>
        </label>
        <label>
          <span>Typeface</span>
          <select data-reader-setting="font"><option value="serif">Serif</option><option value="sans">Sans</option></select>
        </label>
        <label>
          <span>Text</span>
          <input data-reader-setting="fontSize" type="range" min="80" max="150" step="5" value="100" aria-label="Text size" />
        </label>
        <label>
          <span>Leading</span>
          <input data-reader-setting="lineHeight" type="range" min="130" max="210" step="5" value="165" aria-label="Line spacing" />
        </label>
        <button type="button" data-reader-action="fullscreen" aria-label="Toggle fullscreen" title="Toggle fullscreen">[]</button>
      </div>
      <div class="aetheria-reader-status" role="status" aria-live="polite">
        <span data-reader-status>Opening book...</span>
        <span data-reader-progress></span>
      </div>
      <div class="aetheria-reader-viewport" data-reader-viewport>
        <button
          type="button"
          class="aetheria-reader-page-zone aetheria-reader-page-zone-left"
          data-reader-action="previous"
          aria-label="Previous page"
          title="Previous page"
        >
          &lsaquo;
        </button>
        <button
          type="button"
          class="aetheria-reader-page-zone aetheria-reader-page-zone-right"
          data-reader-action="next"
          aria-label="Next page"
          title="Next page"
        >
          &rsaquo;
        </button>
      </div>
      </section>
    )
  }

  AetheriaEpubReader.css = style
  AetheriaEpubReader.afterDOMLoaded = script
  return AetheriaEpubReader
}) satisfies QuartzComponentConstructor
