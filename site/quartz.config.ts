import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Aetheria Lore",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "en-GB",
    baseUrl: "aetheria.gamecult.org",
    ignorePatterns: [
      "private",
      "templates",
      ".obsidian",
      "Brainstorming",
      "Brainstorming/**",
      "Inspiration",
      "Inspiration/**",
    ],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: {
          name: "Montserrat",
          weights: [100, 200, 300, 400, 600],
        },
        title: {
          name: "Montserrat",
          weights: [100, 200, 300],
        },
        body: {
          name: "Ubuntu",
          weights: [300, 400, 500, 700],
          includeItalic: true,
        },
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#07111a",
          lightgray: "#16212c",
          gray: "#63758a",
          darkgray: "#b7c7d9",
          dark: "#eef5ff",
          secondary: "#ff8a2a",
          tertiary: "#59b7ff",
          highlight: "rgba(89, 183, 255, 0.14)",
          textHighlight: "#ff8a2a55",
        },
        darkMode: {
          light: "#07111a",
          lightgray: "#16212c",
          gray: "#63758a",
          darkgray: "#b7c7d9",
          dark: "#eef5ff",
          secondary: "#ff8a2a",
          tertiary: "#59b7ff",
          highlight: "rgba(89, 183, 255, 0.14)",
          textHighlight: "#ff8a2a55",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-dark",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.ContentIndex({
        enableSiteMap: false,
        enableRSS: false,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
