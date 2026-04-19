import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { FullSlug, resolveRelative } from "../util/path"
import { AetheriaPageContext } from "./aetheria"

type Route = {
  label: string
  slug: FullSlug
  matches: string[]
}

const routes: Route[] = [
  {
    label: "Home",
    slug: "index" as FullSlug,
    matches: ["index"],
  },
  {
    label: "Worldbuilding",
    slug: "Worldbuilding/index" as FullSlug,
    matches: ["Worldbuilding"],
  },
  {
    label: "Pre-Elysium",
    slug: "Worldbuilding/Pre-Elysium/index" as FullSlug,
    matches: ["Worldbuilding/Pre-Elysium"],
  },
  {
    label: "Post-Elysium",
    slug: "Worldbuilding/Post-Elysium/index" as FullSlug,
    matches: ["Worldbuilding/Post-Elysium"],
  },
  {
    label: "Politics",
    slug: "Worldbuilding/Politics/index" as FullSlug,
    matches: ["Worldbuilding/Politics"],
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
        </nav>
      </section>
    )
  }

  return AetheriaMasthead
}) satisfies QuartzComponentConstructor
