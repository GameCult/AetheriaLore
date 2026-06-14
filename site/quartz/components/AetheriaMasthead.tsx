import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { FullSlug, resolveRelative } from "../util/path"
import { AetheriaPageContext } from "./aetheria"

type Route = {
  label: string
  slug: FullSlug
  matches: string[]
}

const githubUrl = "https://github.com/GameCult/Aetheria"

const routes: Route[] = [
  {
    label: "Home",
    slug: "index" as FullSlug,
    matches: ["index"],
  },
  {
    label: "Lore",
    slug: "Lore/index" as FullSlug,
    matches: ["Lore", "Worldbuilding", "Introduction", "Narrative-Themes"],
  },
  {
    label: "Game Design",
    slug: "Game-Design/index" as FullSlug,
    matches: ["Game-Design"],
  },
  {
    label: "Stories",
    slug: "Stories/index" as FullSlug,
    matches: ["Stories"],
  },
  {
    label: "Articles",
    slug: "Articles/index" as FullSlug,
    matches: ["Articles"],
  },
]

function isMatch(currentSlug: string, prefix: string) {
  return currentSlug === prefix || currentSlug.startsWith(`${prefix}/`)
}

function pickActiveRoute(currentSlug: string) {
  return routes
    .flatMap((route) =>
      route.matches
        .filter((prefix) => isMatch(currentSlug, prefix))
        .map((prefix) => ({
          route,
          prefixLength: prefix.length,
        })),
    )
    .sort((a, b) => b.prefixLength - a.prefixLength)[0]?.route
}

export default (() => {
  const AetheriaMasthead: QuartzComponent = ({
    fileData,
    aetheria,
  }: QuartzComponentProps & { aetheria?: AetheriaPageContext }) => {
    const currentSlug = fileData.slug ?? ("index" as FullSlug)
    const tagline = aetheria?.headerTagline
    const activeRoute = pickActiveRoute(currentSlug)

    return (
      <section class="aetheria-titlebar">
        <div class="aetheria-titlebar-copy">
          <p class="aetheria-titlebar-title">
            <a href={resolveRelative(currentSlug, "index" as FullSlug)}>
              Aetheria
            </a>
          </p>
          {tagline && <p class="aetheria-titlebar-tagline">{tagline}</p>}
        </div>
        <nav class="aetheria-titlebar-nav" aria-label="Aetheria sections">
          {routes.map((route) => {
            const active = activeRoute?.slug === route.slug
            return (
              <a
                href={resolveRelative(currentSlug, route.slug)}
                class={active ? "aetheria-nav-chip active" : "aetheria-nav-chip"}
              >
                {route.label}
              </a>
            )
          })}
          <a
            href={githubUrl}
            class="aetheria-nav-chip"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </nav>
      </section>
    )
  }

  return AetheriaMasthead
}) satisfies QuartzComponentConstructor
