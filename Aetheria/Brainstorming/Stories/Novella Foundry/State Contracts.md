# State Contracts

These are semantic contracts, not rigid schemas. Use Markdown tables or sections that remain readable and diffable.

## Authoritative Files

- **Room Charter:** locked promise, boundaries, authority, tone, ending class, source order, and process policy.
- **Canon Ledger:** sourced facts with source, confidence, relevance, and restrictions.
- **Invention Register:** story-local inventions with consequences, compatibility, and promotion status.
- **Story State:** current pass, accepted outputs, unresolved blockers, manuscript status, and next inputs.
- **Decision Log:** decision, status, rationale, alternatives, and affected artifacts.
- **Cast Bible:** human-readable cast index and authored inputs for durable identity, history, embodiment, competence, desire, contradiction, dependency, authority, refusal, and exit. Character Personas own accepted character state.
- **Character Personas:** revisioned character-local present state derived from a baseline and accepted scene deltas; see [[Character Persistence]].
- **Aggregate Actors:** incentives, information, exposure, response capacity, and evolving state for social bodies.
- **Relationship Matrix:** generated audit view of character-local directional bonds plus externally established authority, dependency, debt, obligation, and exit. It owns no private character state and cannot write back into Persona revisions.
- **Character Delta Streams:** append-only, branch-aware records of event-by-event observation, appraisal, knowledge, belief, goal, action set, load, condition, stake, relationship movement, and residue. Accepted deltas own character history.
- **Character State Ledger:** generated cross-character audit projection of Persona revisions and accepted deltas. It is not independently edited and owns no state.
- **Material Ledger:** places, assets, ownership, provenance, inventory, labor, maintenance, money, legal exposure, losses, and replacement constraints.
- **Causal Model:** clocks, constraints, observables, uncertainty, conservation, and coarse resolution rules.
- **Seam Log:** narratively useful mechanics or setting claims not yet established elsewhere.
- **Plot Ladder:** selected causal units and the belief, relationship, material, and reader-state changes each creates.
- **POV Knowledge Matrix:** reveal-planning view derived from accepted character knowledge and belief plus chronology; it owns what the manuscript may expose at each chapter, not what a character knows.
- **Chapter Architecture:** chapter function, POV, time, event, promise, turn, and exit pressure.
- **Scene Cards:** playable dramatic state, not drafted prose.
- **Review Ledger:** finding, reviewer, evidence surface, severity, adjudication, repair, and verification.
- **Artifact Utility Ledger:** artifact, uncertainty reduced, decision changed, ongoing owner, last use, and delete-or-retain judgment.

## State Rules

1. `Unknown` is valid. Never fill a ledger cell merely for completeness.
2. Distinguish character belief from world truth.
3. Distinguish legal ownership, practical control, social authority, and emotional obligation.
4. Track collectives at the resolution required for consent, injury, knowledge, and action. A collective identity does not erase individual state.
5. Provenance follows objects and capabilities when it changes trust, maintenance, law, culture, or interoperability.
6. Every state mutation names the event or decision that caused it.
7. Rejected inventions remain inspectable but cannot silently influence later passes.
8. Provisional causal claims may support robust outcomes; contested claims cannot exclusively decide them.
9. The manuscript may reveal a better truth than the plan. When accepted, update the plan and record the change.
10. Planning volume is not a quality metric. Track utility and unresolved risk, not a minimum word count unless the operator explicitly requires one.
11. Raw specialist submissions survive beside coordinator adjudication. A summary cannot replace evidence of disagreement.
12. Prose and model output propose character deltas; only coordinator-accepted deltas advance a Persona revision.
13. Every character delta names its parent Persona revision, branch, narrative coordinate, evidence, and adjudication status.
14. Character-local relationship and status readings may disagree. The neutral Relationship Matrix audits the disagreement without flattening it.
15. World truth, chronology, custody, and material state remain with their existing owners. Persona state carries only the character's knowledge, belief, appraisal, and resulting pressure.

## Causal Packet

For each consequential event record:

`objective -> situation/geometry -> observations -> interpretations -> false beliefs -> reserves -> authority -> seeded capabilities -> available actions -> commitment -> decisive effect -> interruption -> competent alternative -> immediate residue -> delayed consequence`

## Scene Visibility

Classify sideband state as:

- **Visible:** must appear for comprehension or payoff.
- **Available:** may surface if the scene needs it.
- **Latent:** governs behavior but should not be explained.
- **Withheld:** deliberately unavailable to the current POV or reader.

No scene should display a ledger merely because the ledger exists.
