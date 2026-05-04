(function () {
  let inkRuntimePromise = null

  function createElement(tag, className, text) {
    const element = document.createElement(tag)
    if (className) element.className = className
    if (text !== undefined) element.textContent = text
    return element
  }

  function ensureInkRuntime() {
    if (window.inkjs && window.inkjs.Story) return Promise.resolve()
    if (inkRuntimePromise) return inkRuntimePromise

    inkRuntimePromise = new Promise((resolve, reject) => {
      const existing = document.querySelector('script[data-aetheria-ink-runtime="true"]')
      if (existing) {
        existing.addEventListener("load", resolve, { once: true })
        existing.addEventListener("error", () => reject(new Error("inkjs runtime failed to load")), {
          once: true,
        })
        return
      }

      const script = document.createElement("script")
      script.src = "/static/interactive/ink.js"
      script.defer = true
      script.dataset.aetheriaInkRuntime = "true"
      script.addEventListener("load", resolve, { once: true })
      script.addEventListener("error", () => reject(new Error("inkjs runtime failed to load")), {
        once: true,
      })
      document.head.appendChild(script)
    })

    return inkRuntimePromise
  }

  function formatVariableValue(value) {
    if (value === true) return "true"
    if (value === false) return "false"
    if (value === null || value === undefined) return "unset"
    return String(value)
  }

  function collectVariables(story) {
    const state = story.variablesState || {}
    return Object.keys(state)
      .filter((name) => !name.startsWith("_") && name !== "$" && typeof state[name] !== "function")
      .sort()
      .map((name) => ({
        name,
        value: state[name],
      }))
  }

  function renderVariables(story, target) {
    const variables = collectVariables(story)
    target.replaceChildren()
    if (variables.length === 0) return

    for (const variable of variables) {
      const chip = createElement("span", "aetheria-ink-variable")
      chip.append(createElement("span", "aetheria-ink-variable-name", variable.name))
      chip.append(
        createElement("span", "aetheria-ink-variable-value", formatVariableValue(variable.value)),
      )
      target.append(chip)
    }
  }

  function appendParagraphs(story, transcript) {
    let advanced = false
    let safety = 0

    while (story.canContinue && safety < 1000) {
      const text = story.Continue().trim()
      safety += 1
      if (text.length > 0) {
        transcript.append(createElement("p", "aetheria-ink-line", text))
        advanced = true
      }
    }

    if (safety >= 1000) {
      transcript.append(
        createElement(
          "p",
          "aetheria-ink-error",
          "The story did not settle before the safety limit. Something in the Ink is looping.",
        ),
      )
    }

    if (advanced) {
      transcript.scrollTop = transcript.scrollHeight
    }
  }

  function renderChoices(story, choices, variables) {
    choices.replaceChildren()

    if (story.currentChoices.length === 0) {
      choices.append(createElement("p", "aetheria-ink-end", "End of branch. The feed stops blinking."))
      return
    }

    story.currentChoices.forEach((choice, index) => {
      const button = createElement("button", "aetheria-ink-choice", choice.text)
      button.type = "button"
      button.addEventListener("click", () => {
        story.ChooseChoiceIndex(index)
        appendParagraphs(story, choices.closest(".aetheria-ink-player").querySelector(".aetheria-ink-transcript"))
        renderVariables(story, variables)
        renderChoices(story, choices, variables)
      })
      choices.append(button)
    })
  }

  async function initialisePlayer(container) {
    if (container.dataset.inkInitialised === "true") return
    container.dataset.inkInitialised = "true"

    const storySrc = container.dataset.inkStory
    if (!storySrc) {
      container.textContent = "Ink player is missing data-ink-story."
      return
    }

    const status = createElement("p", "aetheria-ink-status", "Loading story...")
    const transcript = createElement("div", "aetheria-ink-transcript")
    const choices = createElement("div", "aetheria-ink-choices")
    const variables = createElement("div", "aetheria-ink-variables")
    const restart = createElement("button", "aetheria-ink-restart", "Restart")
    restart.type = "button"

    container.replaceChildren(status, transcript, choices, variables, restart)

    try {
      await ensureInkRuntime()

      const response = await fetch(storySrc)
      if (!response.ok) {
        throw new Error(`could not fetch ${storySrc}: ${response.status}`)
      }

      const storyJson = await response.json()

      function reset() {
        const story = new window.inkjs.Story(JSON.stringify(storyJson))
        status.textContent = container.dataset.inkTitle || "Interactive story"
        transcript.replaceChildren()
        appendParagraphs(story, transcript)
        renderVariables(story, variables)
        renderChoices(story, choices, variables)
      }

      restart.addEventListener("click", reset)
      reset()
    } catch (error) {
      status.textContent = "Ink player failed to load."
      transcript.append(createElement("p", "aetheria-ink-error", error.message || String(error)))
    }
  }

  function initialiseAllPlayers() {
    document.querySelectorAll(".aetheria-ink-player").forEach(initialisePlayer)
  }

  document.addEventListener("nav", initialiseAllPlayers)
  if (document.readyState !== "loading") initialiseAllPlayers()
})()
