# AGENTS.md

## Purpose

This repository is an Obsidian vault for the Aetheria setting. Contributions should preserve it as a coherent worldbuilding knowledge base rather than treating it like generic prose storage.

## Project Conventions

- Prefer Markdown notes organized by setting domain, era, faction, technology, concept, species, or timeline event.
- Keep files in the existing folder hierarchy unless there is a strong structural reason to introduce a new branch.
- Name notes in Title Case, usually matching the in-universe proper noun or concept exactly.
- Preserve Obsidian-style wiki links such as `[[Aether]]`, `[[Timeline]]`, and `[[Pan-Solar Consortium]]`.
- Favor creating or strengthening links between notes over repeating the same explanation in multiple places.
- Avoid YAML frontmatter unless the repository begins using it consistently in the future.

## Writing Style

- Write in clear, polished Markdown prose.
- Default to a serious, analytical, high-concept science-fantasy / science-fiction voice.
- Treat the setting as materially grounded: economics, ideology, infrastructure, labor, warfare, governance, class power, and technological constraints should feel causally connected.
- Keep speculative elements legible by anchoring them in social, political, or physical consequences.
- Use vivid phrasing when appropriate, but avoid empty flourish that does not add setting information, mood, or ideological texture.
- Use evocative emotional language when it sharpens the reader's sense of lived experience inside a system. A good phrase can crystallize how a regime feels from within, especially around labor, desire, status, fear, debt, or the false promise of escape.
- When writing about cruel institutions or morally intolerable systems, prefer sober description and emotionally resonant detail over openly condemnatory wording. Let workflow, euphemism, routine, and material consequence carry the horror where possible.
- When revising, preserve unusually strong lines that reveal lived experience with precision. If a phrase makes the reader feel a system in their body or names longing, shame, relief, or self-deception with unusual force, keep it unless there is a clear reason to remove it.
- Maintain internal consistency with existing terminology, institutions, factions, and timeline beats.

## Tone

- The project's dominant tone is sober, reflective, and politically aware.
- Many notes frame technology and institutions in terms of incentives, domination, exploitation, regulation, resistance, and material tradeoffs. Preserve that lens.
- Avoid slipping into overt editorial condemnation when a note is stronger with colder language. In many cases, bureaucratic phrasing, product language, and the calm description of ordinary procedure will hit harder than calling something monstrous outright.
- When expanding factions or concepts, avoid flattening them into pure heroes, villains, or aesthetic stereotypes. Emphasize tensions, contradictions, and historical pressures.
- Keep the writing attentive to how systems shape lived experience, not just to spectacle or lore trivia.

## Note Structure

- Match the local structure of neighboring notes before introducing a new pattern.
- Many notes begin with a short orienting paragraph, while others begin with a heading such as `### <Topic>`. Either is acceptable if used intentionally.
- Use short thematic sections with Markdown headings when a note benefits from subdivision.
- Timeline and index notes should stay scannable, with compact summaries and linked entries.
- Faction, technology, and concept notes should explain what the subject is, how it functions, who it affects, and why it matters in the broader setting.
- Prefer concise paragraphs over oversized blocks when clarity would benefit.

## Content Expectations

- New material should deepen the setting rather than merely decorate it.
- Ask of each addition: what pressures produced this, who benefits, who is constrained, what contradictions does it create, and how does it interact with other parts of the setting?
- Be mindful of continuity across Pre-Elysium, Post-Elysium, politics, technology, and factional history.
- When possible, connect abstract concepts to institutions, everyday life, and conflict.
- For factions and territories, make daily routines, currencies, status traps, family structures, and life-cycle expectations palpable and distinct. A reader should be able to imagine childhood, work, aspiration, compromise, aging, and failure under each system.
- When a setting element relies on euphemism, preserve the euphemism as part of the worldbuilding rather than flattening it into a blunt summary. Corporate, legal, and technical language should often reveal how a system survives public knowledge.
- In notes about labor, cognition, or institutional cruelty, pay attention to boring routine: dashboards, quotas, metrics, scheduling, paperwork, and professional pride are often more revealing than dramatic villainy.

## Core Narrative Themes

- Always consider the recurring themes collected in `[[Narrative Themes]]` when adding or revising material.
- In particular, keep an eye on rampant accelerationism, identity as a classed administrative category, consciousness as a contested political threshold, mutability without liberation, alienation through managed reality, and care, sanctuary, and maintenance as the setting's major counter-theme.
- These themes should function as interpretive lenses rather than a rigid checklist. New material does not need to foreground all of them, but it should remain compatible with them and ideally sharpen at least one of them.

## Cultural And Historical Guidance

- Always be mindful of the societal and cultural impact of technology.
- Always be mindful of the historical dialectic: institutions, ideologies, and technologies should be understood as emerging from conflict, material conditions, and changing power relations.
- Treat technological change as socially embedded, not neutral or autonomous.
- Consider how class, labor, governance, identity, colonial dynamics, media, and infrastructure mediate the effects of any technology or social system added to the setting.
- Prefer writing that reveals contradiction, contingency, and historical development over writing that treats the world as static.

## Vault Navigation

- Default to the local RAG tool for vault discovery and concept navigation before broad manual searching.
- From the repository root, use `./scripts/rag/rag.ps1 query "<topic or question>"` to locate the most relevant notes and sections quickly.
- Use `./scripts/rag/rag.ps1 stats` to confirm the index exists and covers the current vault.
- If the index is missing, dependencies are not installed, or the vault has changed substantially since the last build, run `./scripts/rag/rag.ps1 install` and then `./scripts/rag/rag.ps1 build`.
- Treat RAG as the default navigation layer, but still open and read the returned notes directly before making substantial edits.
- Prefer `rg` or direct file reads when you need exact filename matching, exact string matching, or repository-wide regex searches that semantic retrieval may miss.
- In Windows PowerShell 5.1, always read and write vault Markdown with explicit UTF-8 handling. Do not rely on bare `Get-Content` or `Set-Content` defaults for note files, especially when notes contain non-ASCII characters such as `Framgång`.
- Run `build` and `query` one at a time; local Qdrant locks the on-disk store while a command is active.

## Editing Guidance For Future Agents

- Read adjacent notes before making substantial additions so new material matches local vocabulary and structure.
- Preserve existing links and add new ones where they genuinely improve navigation.
- Do not remove ambiguity or tension unless the note is clearly meant to resolve a question.
- If you encounter malformed characters from prior encoding issues, fix them carefully and only where you can do so confidently without changing meaning.
- Keep prose fully in-world and topic-facing. Do not mention templates, repetition, drafting strategy, or the fact that a passage is avoiding a pattern. Notes should never sound aware of the prompt behind them.
- Be careful with words like `atrocity`, `horror`, `creepy`, `monstrous`, `twisted`, or similar overt moral labels. Use them only if the local note already supports that register. Otherwise prefer language that lets the reader feel the system through procedure, implication, and lived effect.
- When differentiating related notes, vary both the substance and the rhetoric. Do not solve one repeated structure by leaning on another repeated move such as "`X` exists, but the real thing is `Y`", "what matters more is", or other self-justifying contrast formulas across every note.
- After revising a cluster of similar notes, reread the edited passages together and remove any repeated pivots, especially recurring `, but` clauses, "the real X" constructions, or lines that read like editorial commentary rather than setting material.
