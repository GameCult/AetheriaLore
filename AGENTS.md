# AGENTS.md

## Purpose

This repository is an Obsidian vault for the Aetheria setting. Make it accessible to a curious reader who knows neither the setting nor its institutional vocabulary. The reader should understand the people, stakes, and causal mechanism on a first reading. Accessibility governs the prose even when existing notes model a more abstract or self-consciously clever style.

## Next Action

Operator priority, 2026-09-05: complete the accessibility rewrite of every article across AetheriaLore, Delvehold, Kalsa, and Zyphos before further elaboration. An existing pass uses one article per Astra low call, eight concurrent workers, and one sampled article per wave to review results and adapt prompts. Inspect that pass before launching duplicate work: controller and working records are in `C:/Users/Meta/Documents/Codex/2026-09-04/c-users-meta-claude-worlds-readme/work/accessibility`; progress is in `outputs/accessibility-progress.md` under the same task directory. Each repo has a pushed `codex/accessibility-2026-09-05` branch; main integration remains owed. Preserve source facts, chronology, uncertainty, links, and setting distinctions. Make lived stakes and causal steps comprehensible, with a grounded tone and occasional feral or self-deprecating understatement; do not impose a uniform template. Keep approved-but-unintegrated additions A2 and D1–D3 separate; A1 is demoted, and K1/K2/Z1–Z3 remain pending. Other work follows this cleanup.

## Project Conventions

- Prefer Markdown notes organized by setting domain, era, faction, technology, concept, species, or timeline event.
- Keep files in the existing folder hierarchy unless there is a strong structural reason to introduce a new branch.
- Name notes in Title Case, usually matching the in-universe proper noun or concept exactly.
- Preserve Obsidian-style wiki links such as `[[Aether]]`, `[[Timeline]]`, and `[[Pan-Solar Consortium]]`.
- Favor creating or strengthening links between notes over repeating the same explanation in multiple places.
- Avoid YAML frontmatter unless the repository begins using it consistently in the future.

## Epiphany Swarm Boundary

- This workspace may expose its Epiphany internals for inspection: state,
  evidence, graph/model material, role memories, artifacts, and heartbeat output
  are valid operator surfaces.
- Another Epiphany may not inspect or edit this vault directly, and this
  Epiphany may not inspect or edit another workspace. Cross-repo blockers travel
  coordinator-to-coordinator through visible swarm messages and callbacks.
- Humans converse with Persona. Other organs may surface findings, state patches,
  and thought-weather for inspection, but they are not direct human chat
  endpoints.
- API affordances should mirror that story: asking is first-class; rummaging
  across workspace borders should fail.

## Writing Style

- Write plain, direct prose. Use familiar words, concrete subjects, and verbs that say what happens. Put the difficulty in the situation people face; do not make deciphering the sentence another task.
- Lead with lived experience. Show what someone wants, what changes in their life, and what they stand to lose or gain before explaining the institution that causes it. A reader should grasp the stakes without understanding every legal or technical detail.
- Explain cause and effect explicitly. Name the decision, who makes it, what it changes, and why the next consequence follows. "A suspended work clearance costs the family its district housing, which breaks an elder's access to their clinic" teaches more than an unexplained "administrative cascade."
- Introduce a setting term after its plain-language meaning, or explain it immediately. Develop one unfamiliar idea at a time. Do not require readers to follow several wiki links to understand the paragraph in front of them.
- Keep the politics, economics, and speculative mechanisms precise. Use concrete examples to explain complexity; retain the distinctions that actually change someone's choices. Avoid compressed lists of abstractions offered as explanation.
- Let specific images and human consequences carry emotional force. Preserve a striking line when it helps the reader understand or feel the situation. Cut or rewrite it when its cleverness obscures the meaning, even if it sounds impressive.
- Treat mystery as something the people in the world may not know. Make clear what is observed, believed, or disputed; obscurity in the prose does not create useful mystery.
- Maintain established facts, terminology, relationships, and chronology. Existing wording has no authority over a clearer explanation of the same facts.

## Tone

- The tone is sober, humane, and politically aware. Readers should feel invited into the world, not examined on their ability to interpret it.
- Give corporate euphemisms and bureaucratic language to the institutions using them. Explain their practical meaning in the surrounding prose: what a "service consolidation" closes, how far the family must travel, or which care becomes an extra charge. The narrator must not adopt the institution's evasiveness.
- Show cruelty through decisions and their effects, and give cooperation, affection, humour, and ordinary competence the same specificity. Characters and institutions need motives beyond illustrating a thesis.
- Avoid a clever reversal, balanced moral ledger, or concluding aphorism when the example has already made the point. Preserve memorable language that earns its place through clarity and lived detail.

## Note Structure

- Open with a short explanation of the subject and why it matters to someone. For an unfamiliar institution, put a section about how affected people live through it near the top, before its offices, procedures, and legal history. A compact note can do this in its opening paragraphs; no mandatory template or invented scene is needed.
- Use neighboring notes to locate facts, vocabulary, and ownership. Organize the explanation for the reader even when nearby notes bury the stakes or begin with abstract machinery.
- Use short thematic sections with Markdown headings when a note benefits from subdivision.
- Timeline and index notes should stay scannable, with compact summaries and linked entries.
- Once the reader understands the lived stakes, explain the mechanism, how it arose, and the disputes or choices it creates. A plain account must still explain why an institution persists and how its promised benefits or escape routes actually work.
- Prefer concise paragraphs over oversized blocks when clarity would benefit.

## Content Expectations

- New material should deepen the setting rather than merely decorate it.
- Ask of each addition: what pressures produced this, who benefits, who is constrained, what contradictions does it create, and how does it interact with other parts of the setting?
- Be mindful of continuity across Pre-Elysium, Post-Elysium, politics, technology, and factional history.
- For factions and territories, make daily routines, currencies, status traps, family structures, and life-cycle expectations palpable and distinct. A reader should be able to imagine childhood, work, aspiration, compromise, aging, and failure under each system.
- Make costs and benefits specific enough to explain people's behaviour. If a family makes a sustained sacrifice, show what it reliably buys, why the opportunity exists, and where its protection ends. Do not rescue an implausible idea by adding vague exceptions or unexplained rules.

## Core Narrative Themes

- Always consider the recurring themes collected in `[[Narrative Themes]]` when adding or revising material.
- In particular, keep an eye on rampant accelerationism, identity as a classed administrative category, consciousness as a contested political threshold, mutability without liberation, reality drift, institutional misalignment, and care, sanctuary, and maintenance as the setting's major counter-theme.
- These themes should function as interpretive lenses rather than a rigid checklist. New material does not need to foreground all of them, but it should remain compatible with them and ideally sharpen at least one of them.

## Cultural And Historical Guidance

- Always be mindful of the societal and cultural impact of technology.
- Always be mindful of the historical dialectic: institutions, ideologies, and technologies should be understood as emerging from conflict, material conditions, and changing power relations.
- Treat technological change as socially embedded, not neutral or autonomous.
- Consider how class, labor, governance, identity, colonial dynamics, media, and infrastructure mediate the effects of any technology or social system added to the setting.
- Prefer writing that reveals contradiction, contingency, and historical development over writing that treats the world as static.

## Vault Navigation

- Default to the global `voidbot` MCP server for vault discovery, concept navigation, and semantic recall. VoidBot owns the canonical retrieval surface for Aetheria lore.
- Prefer `search_sources` for lore/source discovery and `get_source_context` for adjacent passages before broad manual searching.
- Do not rebuild or maintain a separate local semantic index for this vault. A previous local `scripts/rag` Qdrant/FastEmbed toolchain was retired because it duplicated VoidBot's authority and created split-brain freshness risk.
- Still open and read returned notes directly before making substantial edits. Retrieval locates context; it does not replace source inspection.
- Prefer `rg` or direct file reads when you need exact filename matching, exact string matching, or repository-wide regex searches that semantic retrieval may miss.
- In Windows PowerShell 5.1, always read and write vault Markdown with explicit UTF-8 handling. Do not rely on bare `Get-Content` or `Set-Content` defaults for note files, especially when notes contain non-ASCII characters such as `Framgång`.

## Editing Guidance For Future Agents

- Read adjacent notes before making substantial additions to establish facts, terminology, and unresolved questions. Do not imitate their stylistic density when it conflicts with the accessibility guidance above.
- Preserve existing links and add new ones where they genuinely improve navigation.
- Do not remove ambiguity or tension unless the note is clearly meant to resolve a question.
- If you encounter malformed characters from prior encoding issues, fix them carefully and only where you can do so confidently without changing meaning.
- Keep prose fully in-world and topic-facing. Do not mention templates, repetition, drafting strategy, or the fact that a passage is avoiding a pattern. Notes should never sound aware of the prompt behind them.
- Read the complete note from the position of an interested newcomer. Can they explain who wants what, what happens to them, and why, without translating the prose into ordinary language first? If the explanation given in conversation is clearer than the note, put that explanation in the note.
- Review prose through meaning and reading experience, not forbidden-word lists, sentence-pattern counts, or readability scores. Reread related notes together for repeated rhetorical performances, then repair the explanation rather than swapping synonyms.
