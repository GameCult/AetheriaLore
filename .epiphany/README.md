# AetheriaLore Epiphany Workspace

This directory is the repo-local Epiphany state surface for the Aetheria website and lore vault.

The Aetheria vault is treated like a codebase: Markdown notes are source files, wiki links are cross-references, index notes are module maps, rendered Quartz pages are runtime artifacts, and lore continuity is the domain contract.

## State Surfaces

- `state/repo-initialization.msgpack`: accepted startup birth records for this repo-local Epiphany.
- `state/agent-dossiers.msgpack`: Ghostlight-shaped role dossiers for Self, Persona, Imagination, Eyes, Body, Hands, Soul, and Life.
- `state/agent-heartbeats.msgpack`: heartbeat continuity state for the active lanes.
- `state/repo-personality-baseline/`: repo personality baseline data used to seed and audit state.
- `prompts/aetheria-swarm-bootstrap.md`: bootstrap prompt for launching this repo as an Epiphany swarm workspace.

## Boundaries

- Role memory is not lore truth.
- The vault remains authoritative for setting content.
- RAG is the default orientation tool, but returned notes must be opened and read before edits.
- Imported roadmaps and content gaps are planning candidates until the human adopts an objective.
- Site edits require rendered-page or link/build evidence before Soul should bless them.
