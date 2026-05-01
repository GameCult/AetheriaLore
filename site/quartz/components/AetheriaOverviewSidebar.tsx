import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { AetheriaPageContext, isSidebarLinkActive } from "./aetheria"
import { FullSlug, resolveRelative } from "../util/path"

export default (() => {
  const AetheriaOverviewSidebar: QuartzComponent = ({
    fileData,
    aetheria,
  }: QuartzComponentProps & { aetheria?: AetheriaPageContext }) => {
    const currentSlug = fileData.slug ?? ("index" as FullSlug)
    const sidebar = aetheria?.sidebar

    if (!sidebar || sidebar.groups.length === 0) {
      return null
    }

    return (
      <section class="aetheria-overview-sidebar">
        <div class="aetheria-overview-sidebar-inner">
          <p class="aetheria-overview-branch">
            <a href={resolveRelative(currentSlug, sidebar.slug)}>{sidebar.title}</a>
          </p>
          <nav class="aetheria-overview-nav" aria-label={`${sidebar.title} navigation`}>
            {sidebar.groups.map((group) => (
              <section class="aetheria-overview-group">
                <p class="aetheria-overview-group-title">{group.title}</p>
                <ul class="aetheria-overview-links">
                  {group.links.map((link) => {
                    const active = isSidebarLinkActive(currentSlug, link.slug)
                    return (
                      <li class={active ? "active" : undefined}>
                        <a
                          href={resolveRelative(currentSlug, link.slug)}
                          class={active ? "active" : undefined}
                        >
                          {link.label}
                        </a>
                      </li>
                    )
                  })}
                </ul>
              </section>
            ))}
          </nav>
        </div>
      </section>
    )
  }

  return AetheriaOverviewSidebar
}) satisfies QuartzComponentConstructor
