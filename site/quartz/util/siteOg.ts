import { QuartzPluginData } from "../plugins/vfile"

export type SocialImageRef =
  | {
      kind: "static"
      path: string
      alt?: string
    }
  | {
      kind: "relative"
      path: string
      alt?: string
    }
  | {
      kind: "absolute"
      path: string
      alt?: string
    }

export type SiteSocialMetadata = {
  section?: string
  deck?: string
  image?: SocialImageRef
}

type SectionKey = "aetheria" | "lore" | "gameDesign" | "stories" | "worldbuilding"

const sectionMetadata: Record<SectionKey, SiteSocialMetadata> = {
  aetheria: {
    section: "Aetheria",
    deck: "Galaxy-scale social experiment disguised as science-fantasy.",
    image: {
      kind: "static",
      path: "social/aetheria-space.png",
      alt: "A stylized Aetheria space scene.",
    },
  },
  lore: {
    section: "Lore",
    deck: "A sealed domain, a transplanted civilization, and all the administrative damage it dragged in with it.",
    image: {
      kind: "static",
      path: "social/lore-elysium.png",
      alt: "Aetheria concept art showing Elysium.",
    },
  },
  gameDesign: {
    section: "Game Design",
    deck: "Cockpit action, spreadsheet predation, and one doomed universe generous enough to host both.",
    image: {
      kind: "static",
      path: "social/game-design-longinus.png",
      alt: "Aetheria concept art showing ship customization imagery.",
    },
  },
  stories: {
    section: "Stories",
    deck: "Fiction from a universe where ordinary longing has to survive industrial-scale bad decisions.",
    image: {
      kind: "static",
      path: "social/stories-catastrophe.jpg",
      alt: "Aetheria concept art showing catastrophe imagery.",
    },
  },
  worldbuilding: {
    section: "Worldbuilding",
    deck: "Infrastructure, ideology, war, and the long administrative road to catastrophe.",
    image: {
      kind: "static",
      path: "social/worldbuilding-galaxy-map.jpg",
      alt: "Aetheria concept art showing a galaxy map.",
    },
  },
}

function sectionForSlug(slug: string): SectionKey {
  if (slug.startsWith("Lore/")) {
    return "lore"
  }

  if (slug.startsWith("Game-Design/")) {
    return "gameDesign"
  }

  if (slug.startsWith("Stories/")) {
    return "stories"
  }

  if (slug.startsWith("Worldbuilding/")) {
    return "worldbuilding"
  }

  return "aetheria"
}

export function resolveSiteSocialMetadata(fileData: QuartzPluginData): SiteSocialMetadata {
  const slug = typeof fileData.slug === "string" ? fileData.slug : "index"
  return sectionMetadata[sectionForSlug(slug)]
}
