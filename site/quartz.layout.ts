import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import AetheriaAuthorMeta from "./quartz/components/AetheriaAuthorMeta"
import AetheriaEpubReader, { isAetheriaEpubReaderPage } from "./quartz/components/AetheriaEpubReader"
import AetheriaMasthead from "./quartz/components/AetheriaMasthead"
import AetheriaOverviewSidebar from "./quartz/components/AetheriaOverviewSidebar"
import AetheriaThemeLock from "./quartz/components/AetheriaThemeLock"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [AetheriaThemeLock(), AetheriaMasthead(), Component.Search()],
  afterBody: [],
  footer: Component.Footer({
    links: {},
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs({
        rootName: "Aetheria",
        showCurrentPage: false,
        showRoot: false,
      }),
      condition: (page) => page.fileData.slug !== "index" && !isAetheriaEpubReaderPage(page.fileData.slug),
    }),
    Component.ConditionalRender({
      component: Component.ArticleTitle(),
      condition: (page) =>
        !page.fileData.slug?.endsWith("/index") &&
        page.fileData.slug !== "index" &&
        !isAetheriaEpubReaderPage(page.fileData.slug),
    }),
    Component.ConditionalRender({
      component: AetheriaAuthorMeta(),
      condition: (page) =>
        !page.fileData.slug?.endsWith("/index") &&
        page.fileData.slug !== "index" &&
        !isAetheriaEpubReaderPage(page.fileData.slug),
    }),
    Component.ConditionalRender({
      component: Component.ContentMeta(),
      condition: (page) =>
        !page.fileData.slug?.endsWith("/index") &&
        page.fileData.slug !== "index" &&
        !isAetheriaEpubReaderPage(page.fileData.slug),
    }),
    Component.ConditionalRender({
      component: AetheriaEpubReader(),
      condition: (page) => isAetheriaEpubReaderPage(page.fileData.slug),
    }),
  ],
  afterBody: [
    Component.ConditionalRender({
      component: Component.AutoIndexFolder({
        rootSlug: "Articles",
        classPrefix: "aetheria-article",
        hideFrontmatterKey: "hideFromArticleIndex",
        defaultAuthor: "Aetheria",
        emptyDescription: "A field note with teeth, filed before it could become polite.",
        sidebarTagline: "Bylined field notes, arguments, and interpretive knives.",
        sidebarSummary: (count) => `${count} Aetheria articles, newest pressure first.`,
      }),
      condition: (page) => page.fileData.slug === "Articles/index",
    }),
  ],
  left: [
    Component.ConditionalRender({
      component: AetheriaOverviewSidebar(),
      condition: (page) => !isAetheriaEpubReaderPage(page.fileData.slug),
    }),
  ],
  right: [
    Component.ConditionalRender({
      component: Component.DesktopOnly(Component.TableOfContents()),
      condition: (page) => !isAetheriaEpubReaderPage(page.fileData.slug),
    }),
    Component.ConditionalRender({
      component: Component.Backlinks(),
      condition: (page) => !isAetheriaEpubReaderPage(page.fileData.slug),
    }),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs({
      rootName: "Aetheria",
      showCurrentPage: false,
      showRoot: false,
    }),
  ],
  left: [],
  right: [],
}
