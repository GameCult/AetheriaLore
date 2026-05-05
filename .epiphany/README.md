# AetheriaLore Epiphany Workspace

This directory is the repo-local Epiphany state surface for the Aetheria website and lore vault.

The Aetheria vault is treated like a codebase: Markdown notes are source files, wiki links are cross-references, index notes are module maps, rendered Quartz pages are runtime artifacts, and lore continuity is the domain contract.

## State Surfaces

- `state/map.yaml`: compact workspace map and current swarm orientation.
- `state/project-state.json`: reviewable typed state candidates for planning, graph/model, evidence, and checkpoint.
- `state/evidence.jsonl`: distilled belief-changing records for this workspace.
- `state/scratch.md`: disposable working scratch for one bounded subgoal.
- `state/agents/*.agent-state.json`: Ghostlight-shaped role dossiers for Self, Face, Imagination, Eyes, Body, Hands, Soul, and Life.
- `prompts/aetheria-swarm-bootstrap.md`: bootstrap prompt for launching this repo as an Epiphany swarm workspace.

## Boundaries

- Role memory is not lore truth.
- The vault remains authoritative for setting content.
- RAG is the default orientation tool, but returned notes must be opened and read before edits.
- Imported roadmaps and content gaps are planning candidates until the human adopts an objective.
- Site edits require rendered-page or link/build evidence before Soul should bless them.
