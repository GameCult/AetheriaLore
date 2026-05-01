import { Root } from "hast"
import { QuartzComponentProps } from "./types"
import { buildAetheriaPageContext } from "./aetheria"

export function injectSitePageContext(componentData: QuartzComponentProps, root: Root) {
  componentData.aetheria = buildAetheriaPageContext(
    root,
    componentData.fileData,
    componentData.allFiles,
  )
}
