import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

function normalizeAuthor(author: unknown) {
  if (typeof author === "string" && author.trim().length > 0) {
    return author.trim()
  }

  if (Array.isArray(author)) {
    const names = author
      .filter((value): value is string => typeof value === "string" && value.trim().length > 0)
      .map((value) => value.trim())

    if (names.length > 0) {
      return names.join(", ")
    }
  }

  return undefined
}

const AetheriaAuthorMeta = ({ fileData, displayClass }: QuartzComponentProps) => {
  const author = normalizeAuthor(fileData.frontmatter?.author ?? fileData.frontmatter?.authors)

  if (!author) {
    return null
  }

  return <p class={classNames(displayClass, "aetheria-author-meta")}>{author}</p>
}

export default (() => AetheriaAuthorMeta) satisfies QuartzComponentConstructor
