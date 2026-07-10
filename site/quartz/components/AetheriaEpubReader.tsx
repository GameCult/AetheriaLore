import { QuartzComponent, QuartzComponentConstructor } from "./types"
// @ts-ignore
import script from "./scripts/aetheriaEpubReader.inline"
import style from "./styles/aetheriaEpubReader.scss"

export default (() => {
  const AetheriaEpubReader: QuartzComponent = () => (
    <section
      class="aetheria-epub-reader"
      data-epub-src="/static/fiction/the-burden-of-proof.epub?v=reader-pages-2"
      aria-label="The Burden of Proof ebook reader"
    >
      <div class="aetheria-reader-heading">
        <div>
          <p class="aetheria-reader-kicker">Ebook edition</p>
          <h2>Read The Burden of Proof</h2>
        </div>
        <a class="aetheria-reader-download" href="/static/fiction/the-burden-of-proof.epub" download>
          Download EPUB
        </a>
      </div>
      <div class="aetheria-reader-toolbar" aria-label="Reader controls">
        <button type="button" data-reader-action="previous" aria-label="Previous page" title="Previous page">&larr;</button>
        <button type="button" data-reader-action="next" aria-label="Next page" title="Next page">&rarr;</button>
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
          <select data-reader-setting="spread"><option value="none">Single</option><option value="auto">Auto</option></select>
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

  AetheriaEpubReader.css = style
  AetheriaEpubReader.afterDOMLoaded = script
  return AetheriaEpubReader
}) satisfies QuartzComponentConstructor
