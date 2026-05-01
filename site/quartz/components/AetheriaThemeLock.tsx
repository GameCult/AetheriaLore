import { QuartzComponent, QuartzComponentConstructor } from "./types"

const themeLockScript = `
document.documentElement.setAttribute("saved-theme", "dark")
document.documentElement.style.colorScheme = "dark"
try {
  localStorage.setItem("theme", "dark")
} catch {}
`

export default (() => {
  const AetheriaThemeLock: QuartzComponent = () => null
  AetheriaThemeLock.beforeDOMLoaded = themeLockScript
  return AetheriaThemeLock
}) satisfies QuartzComponentConstructor
