import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { FullSlug, resolveRelative } from "../util/path"

type NavLink = {
  label: string
  slug: FullSlug
  summary: string
}

type Section = {
  matches: string[]
  eyebrow: string
  title: string
  description: string
  links: NavLink[]
}

const sections: Section[] = [
  {
    matches: ["index", "Introduction", "Narrative-Themes"],
    eyebrow: "Orientation",
    title: "Read outward from pressure, not trivia",
    description:
      "Start with the premise, then trace the institutions, technologies, and historical ruptures that make the rest of the archive legible.",
    links: [
      {
        label: "Home",
        slug: "index" as FullSlug,
        summary: "The archive's front door and main reading routes.",
      },
      {
        label: "Introduction",
        slug: "Introduction" as FullSlug,
        summary: "Broad premise and the setting's central pressure lines.",
      },
      {
        label: "Narrative Themes",
        slug: "Narrative-Themes" as FullSlug,
        summary: "Recurring interpretive lenses across the vault.",
      },
      {
        label: "Pre-Elysium Timeline",
        slug: "Worldbuilding/Pre-Elysium/Timeline" as FullSlug,
        summary: "The historical arc from privatized expansion to rupture.",
      },
      {
        label: "Politics",
        slug: "Worldbuilding/Politics/index" as FullSlug,
        summary: "How violence and order are made administratively legible.",
      },
      {
        label: "Aether",
        slug: "Worldbuilding/Post-Elysium/Concepts/Aether" as FullSlug,
        summary: "One of the setting's deepest post-rupture constraints.",
      },
    ],
  },
  {
    matches: ["Worldbuilding"],
    eyebrow: "Worldbuilding",
    title: "History, institutions, and transformed conditions",
    description:
      "This branch ties the setting together as a system rather than a pile of disconnected lore categories.",
    links: [
      {
        label: "Worldbuilding",
        slug: "Worldbuilding/index" as FullSlug,
        summary: "Overview of the archive's main structural field.",
      },
      {
        label: "Pre-Elysium",
        slug: "Worldbuilding/Pre-Elysium/index" as FullSlug,
        summary: "Late Sol under corporate sovereignty and managed acceleration.",
      },
      {
        label: "Post-Elysium",
        slug: "Worldbuilding/Post-Elysium/index" as FullSlug,
        summary: "The altered world that inherits older political habits.",
      },
      {
        label: "Politics",
        slug: "Worldbuilding/Politics/index" as FullSlug,
        summary: "Doctrine, regulation, and the pricing of conflict.",
      },
    ],
  },
  {
    matches: ["Worldbuilding/Pre-Elysium/Factions"],
    eyebrow: "Factions",
    title: "Power blocs, movements, and organized survival projects",
    description:
      "Late Sol produces formal powers, insurgent tendencies, reform projects, and reactionary currents that all emerge from the same material crises.",
    links: [
      {
        label: "Factions",
        slug: "Worldbuilding/Pre-Elysium/Factions/index" as FullSlug,
        summary: "Overview of how formal power and social agitation interlock.",
      },
      {
        label: "Powers",
        slug: "Worldbuilding/Pre-Elysium/Factions/Powers/index" as FullSlug,
        summary: "Megas, consortiums, and the firms that set terms for ordinary life.",
      },
      {
        label: "Movements",
        slug: "Worldbuilding/Pre-Elysium/Factions/Movements/index" as FullSlug,
        summary: "Collective projects that answer or intensify the late-Sol order.",
      },
      {
        label: "Pan-Solar Consortium",
        slug: "Worldbuilding/Pre-Elysium/Factions/Powers/Major/Pan-Solar-Consortium" as FullSlug,
        summary: "Market stabilization as quasi-government.",
      },
      {
        label: "Zhestokost",
        slug: "Worldbuilding/Pre-Elysium/Factions/Powers/Major/Zhestokost" as FullSlug,
        summary: "Heavy force as a durable strategic niche.",
      },
      {
        label: "Awakened Labor Front",
        slug: "Worldbuilding/Pre-Elysium/Factions/Movements/Awakened-Labor-Front" as FullSlug,
        summary: "One of the clearest worker responses to cognitive exploitation.",
      },
    ],
  },
  {
    matches: ["Worldbuilding/Pre-Elysium/Technology"],
    eyebrow: "Pre-Elysium Technology",
    title: "Infrastructure that reorganized labor, cognition, and flesh",
    description:
      "These notes track the systems through which late Sol optimized life into productivity, dependency, and managed recognition.",
    links: [
      {
        label: "Technology",
        slug: "Worldbuilding/Pre-Elysium/Technology/index" as FullSlug,
        summary: "Overview of the branch's main technical pressures.",
      },
      {
        label: "Artificial General Intelligence",
        slug: "Worldbuilding/Pre-Elysium/Technology/Artificial-General-Intelligence" as FullSlug,
        summary: "The automation stack that changes governance and labor together.",
      },
      {
        label: "Mind Uploading",
        slug: "Worldbuilding/Pre-Elysium/Technology/Mind-Uploading" as FullSlug,
        summary: "Continuity, class, and the monetization of personhood.",
      },
      {
        label: "Algorithmic Social Control",
        slug: "Worldbuilding/Pre-Elysium/Technology/Algorithmic-Social-Control" as FullSlug,
        summary: "Optimization as predictive discipline.",
      },
      {
        label: "Brain-Computer Interfaces",
        slug: "Worldbuilding/Pre-Elysium/Technology/Brain-Computer-Interfaces" as FullSlug,
        summary: "Thought itself becomes administratively legible territory.",
      },
      {
        label: "Wireheading",
        slug: "Worldbuilding/Pre-Elysium/Technology/Wireheading" as FullSlug,
        summary: "Immersion and reward capture as social breakdown.",
      },
    ],
  },
  {
    matches: ["Worldbuilding/Pre-Elysium"],
    eyebrow: "Pre-Elysium",
    title: "Late Sol before the rupture",
    description:
      "This branch tracks the long corporate age in which extraction, logistics, uploading, uplift, and media systems remake everyday life before the FTL discontinuity.",
    links: [
      {
        label: "Pre-Elysium",
        slug: "Worldbuilding/Pre-Elysium/index" as FullSlug,
        summary: "Overview of the era and its linked institutional pressures.",
      },
      {
        label: "Timeline",
        slug: "Worldbuilding/Pre-Elysium/Timeline" as FullSlug,
        summary: "Era sequence from corporate ascent to catastrophe.",
      },
      {
        label: "Colonizing Sol",
        slug: "Worldbuilding/Pre-Elysium/Colonizing-Sol" as FullSlug,
        summary: "Why settlement began as a privatized labor regime.",
      },
      {
        label: "Historical Events",
        slug: "Worldbuilding/Pre-Elysium/Historical-Events" as FullSlug,
        summary: "Named conflicts, scandals, and political inflection points.",
      },
      {
        label: "Factions",
        slug: "Worldbuilding/Pre-Elysium/Factions/index" as FullSlug,
        summary: "Powers, movements, and competing social projects.",
      },
      {
        label: "Technology",
        slug: "Worldbuilding/Pre-Elysium/Technology/index" as FullSlug,
        summary: "The systems that stratified labor, cognition, and embodiment.",
      },
    ],
  },
  {
    matches: ["Worldbuilding/Post-Elysium/Concepts"],
    eyebrow: "Post-Elysium Concepts",
    title: "The altered grammar of reality",
    description:
      "These notes define the terms readers need in order to follow how the setting becomes stranger without becoming less political.",
    links: [
      {
        label: "Concepts",
        slug: "Worldbuilding/Post-Elysium/Concepts/index" as FullSlug,
        summary: "Overview of the branch's central metaphysical terms.",
      },
      {
        label: "Aether",
        slug: "Worldbuilding/Post-Elysium/Concepts/Aether" as FullSlug,
        summary: "The namesake medium and one of the archive's deepest constraints.",
      },
      {
        label: "Esper",
        slug: "Worldbuilding/Post-Elysium/Concepts/Esper" as FullSlug,
        summary: "A political threshold for mind, power, and recognition.",
      },
      {
        label: "Spirits",
        slug: "Worldbuilding/Post-Elysium/Concepts/Spirits" as FullSlug,
        summary: "Persistence, personhood, and altered states of continuation.",
      },
      {
        label: "Pseudospace",
        slug: "Worldbuilding/Post-Elysium/Concepts/Pseudospace" as FullSlug,
        summary: "Spatial logic after old assumptions fail.",
      },
      {
        label: "Temporal Nonlinearity",
        slug: "Worldbuilding/Post-Elysium/Concepts/Temporal-Nonlinearity" as FullSlug,
        summary: "History itself starts to behave differently.",
      },
    ],
  },
  {
    matches: ["Worldbuilding/Post-Elysium/Technology"],
    eyebrow: "Post-Elysium Technology",
    title: "Gatekept miracles and unstable infrastructures",
    description:
      "These notes follow the tools that operate on stranger substrates while preserving older questions of custody, maintenance, and exclusion.",
    links: [
      {
        label: "Technology",
        slug: "Worldbuilding/Post-Elysium/Technology/index" as FullSlug,
        summary: "Overview of the branch's main technical fault lines.",
      },
      {
        label: "Necrotech",
        slug: "Worldbuilding/Post-Elysium/Technology/Necrotech" as FullSlug,
        summary: "Consciousness politics continued by other means.",
      },
      {
        label: "Oracular Computing",
        slug: "Worldbuilding/Post-Elysium/Technology/Oracular-Computing" as FullSlug,
        summary: "Prediction, authority, and sealed interpretive elites.",
      },
      {
        label: "Aetheric Drive",
        slug: "Worldbuilding/Post-Elysium/Technology/Aetheric-Drive" as FullSlug,
        summary: "Mobility through a newly constrained medium.",
      },
      {
        label: "Aethernet",
        slug: "Worldbuilding/Post-Elysium/Technology/Aethernet" as FullSlug,
        summary: "Networked reality under altered conditions.",
      },
      {
        label: "Cognitive Interfacing",
        slug: "Worldbuilding/Post-Elysium/Technology/Cognitive-Interfacing" as FullSlug,
        summary: "Minds routed through technical mediation and control.",
      },
    ],
  },
  {
    matches: ["Worldbuilding/Post-Elysium/Species"],
    eyebrow: "Species",
    title: "Embodiment, kinship, and recognition after the rupture",
    description:
      "Species notes are where altered bodies become social facts with rights, stigma, labor roles, and institutional handling attached to them.",
    links: [
      {
        label: "Species",
        slug: "Worldbuilding/Post-Elysium/Species/index" as FullSlug,
        summary: "Overview of embodiment as a political category.",
      },
      {
        label: "Ratfolk",
        slug: "Worldbuilding/Post-Elysium/Species/Ratfolk" as FullSlug,
        summary: "The current species note in this branch.",
      },
      {
        label: "Post-Elysium",
        slug: "Worldbuilding/Post-Elysium/index" as FullSlug,
        summary: "Return to the broader branch overview.",
      },
    ],
  },
  {
    matches: ["Worldbuilding/Post-Elysium"],
    eyebrow: "Post-Elysium",
    title: "The transformed world after the discontinuity",
    description:
      "The world grows stranger here, but not cleaner. New substrates and ontologies still arrive through old political habits.",
    links: [
      {
        label: "Post-Elysium",
        slug: "Worldbuilding/Post-Elysium/index" as FullSlug,
        summary: "Overview of the altered era and its main tensions.",
      },
      {
        label: "Aether",
        slug: "Worldbuilding/Post-Elysium/Concepts/Aether" as FullSlug,
        summary: "A core concept for the post-rupture world.",
      },
      {
        label: "Concepts",
        slug: "Worldbuilding/Post-Elysium/Concepts/index" as FullSlug,
        summary: "The archive's main metaphysical and political vocabulary.",
      },
      {
        label: "Technology",
        slug: "Worldbuilding/Post-Elysium/Technology/index" as FullSlug,
        summary: "Miracles routed through ownership and expert custody.",
      },
      {
        label: "Species",
        slug: "Worldbuilding/Post-Elysium/Species/index" as FullSlug,
        summary: "Embodiment and recognition under altered conditions.",
      },
      {
        label: "Necrotech",
        slug: "Worldbuilding/Post-Elysium/Technology/Necrotech" as FullSlug,
        summary: "A sharp continuation of the setting's struggle over mind.",
      },
    ],
  },
  {
    matches: ["Worldbuilding/Politics"],
    eyebrow: "Politics",
    title: "Stability as an administrative technology",
    description:
      "These notes track the institutions that keep violence, logistics, and sovereignty legible to systems that cannot tolerate open collapse.",
    links: [
      {
        label: "Politics",
        slug: "Worldbuilding/Politics/index" as FullSlug,
        summary: "Overview of the archive's political branch.",
      },
      {
        label: "Politics Note",
        slug: "Worldbuilding/Politics/Politics" as FullSlug,
        summary: "The overarching logic of managed sovereignty in late Sol.",
      },
      {
        label: "Restrictions on Warfare",
        slug: "Worldbuilding/Politics/Restrictions-on-Warfare" as FullSlug,
        summary: "Why limits on violence endure as market-preservation rules.",
      },
      {
        label: "Thermal Signature Warfare",
        slug: "Worldbuilding/Politics/Thermal-Signature-Warfare" as FullSlug,
        summary: "Heat, detection, and stealth as strategic administration.",
      },
      {
        label: "PSCC",
        slug: "Worldbuilding/Politics/PSCC" as FullSlug,
        summary: "A key institutional node in the setting's regulatory order.",
      },
      {
        label: "Zhestokost Doctrine",
        slug: "Worldbuilding/Politics/Why-Zhestokost’s-Heavy-Weapons-Specialization-Works" as FullSlug,
        summary: "A concrete example of doctrine shaped by material constraints.",
      },
    ],
  },
]

function normalizeSlug(slug: string) {
  return slug.replace(/\/index$/, "")
}

function matchesPrefix(currentSlug: string, prefix: string) {
  const normalizedCurrent = normalizeSlug(currentSlug)
  const normalizedPrefix = normalizeSlug(prefix)
  return (
    normalizedCurrent === normalizedPrefix ||
    normalizedCurrent.startsWith(`${normalizedPrefix}/`)
  )
}

function pickSection(currentSlug: string) {
  const ranked = sections
    .map((section) => {
      const matchingPrefix = section.matches.find((prefix) => matchesPrefix(currentSlug, prefix))
      return {
        section,
        prefixLength: matchingPrefix?.length ?? -1,
      }
    })
    .filter((item) => item.prefixLength >= 0)
    .sort((a, b) => b.prefixLength - a.prefixLength)

  return ranked[0]?.section
}

export default (() => {
  const AetheriaSectionNav: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
    const currentSlug = fileData.slug ?? ("index" as FullSlug)
    const section = pickSection(currentSlug)

    if (!section) {
      return null
    }

    return (
      <section class="aetheria-section-nav">
        <div class="aetheria-section-copy">
          <p class="aetheria-section-eyebrow">{section.eyebrow}</p>
          <h2 class="aetheria-section-title">{section.title}</h2>
          <p class="aetheria-section-description">{section.description}</p>
        </div>
        <div class="aetheria-section-grid">
          {section.links.map((link) => {
            const active = matchesPrefix(currentSlug, link.slug)
            return (
              <a
                href={resolveRelative(currentSlug, link.slug)}
                class={active ? "aetheria-section-card active" : "aetheria-section-card"}
              >
                <span class="aetheria-section-card-label">{link.label}</span>
                <span class="aetheria-section-card-summary">{link.summary}</span>
              </a>
            )
          })}
        </div>
      </section>
    )
  }

  return AetheriaSectionNav
}) satisfies QuartzComponentConstructor
