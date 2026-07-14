# Character Persistence

Long-form character continuity uses one revisioned Persona state per principal character and an append-only stream of accepted scene deltas. Persona state is the character's current narrative self. Scene deltas are the evidence of how that self changed.

The portable snapshot contract is `gamecult.persona_state.v0`, maintained by Epiphany and mirrored by participating runtimes. A story room may store richer native state, but its projections must preserve the contract's distinction between durable disposition, current activation, memory, belief, relationship reading, agency pressure, and candidate action.

## Authority Map

- **Owner:** each character's accepted delta stream owns that character's narrative history. Folding the stream at a branch head produces the current Persona revision.
- **Inputs:** the parent Persona revision, scene and branch identity, story-order coordinate, observable events available to the character, participant-local appraisal, and coordinator adjudication.
- **Outputs:** an immutable character delta, a validated derived Persona revision, and continuity findings for review.
- **Derived state:** current Persona snapshots, cross-character continuity tables, relationship summaries, prompt projections, active-memory retrieval, and end-state reports.
- **Forbidden writers:** prose, model responses, scene cards, retrieval systems, candidate actions, and specialist proposals cannot directly mutate accepted Persona state. Another character's private motive and narrator-only truth cannot enter a character ledger without an earned perception or disclosure.
- **Shared path:** initial replay, scene acceptance, redraft, reorder, branch fork, branch reconciliation, revision-council integration, and final promotion all use the same delta acceptance operation.
- **Cut line:** the Character State Ledger is an audit projection generated from Persona revisions and accepted deltas. It does not own character state and is not independently edited.

World chronology, material custody, legal fact, institutional state, and externally observable events remain in their existing ledgers. Persona state may reference those facts or contain a character's belief about them; it does not replace their owners.

## Persona Baseline And Revision

Pass 2 establishes a baseline Persona for each principal character. The Cast Bible remains a readable index and source for baseline authoring, not a parallel state owner. Named support characters receive a Persona when their private continuity materially affects causality; aggregate actors remain governed by [[State Contracts|Aggregate Actors]] unless individuation becomes necessary.

A Persona revision may contain:

- identity, embodiment, capacities, voice, values, doctrine, and durable tendencies;
- present needs, fears, desires, pressures, boundaries, and refusals;
- memories, beliefs, questions, tensions, distortions, and status reads;
- directional social bonds as this character experiences them;
- current mood, physical and cognitive load, and activated dispositions;
- candidate actions and available action shapes.

Stable traits distinguish baseline from current activation. Baseline movement should be rare, evidence-bearing, and proportionate to the story's elapsed time. A frightening afternoon may activate suspicion without rewriting a lifetime disposition. Numeric changes exist only where they steer projection or permit useful comparison; prose evidence remains mandatory.

Persona timestamps record artifact production. Story chronology uses explicit narrative coordinates in character deltas.

## Character Delta

Every consequential scene proposes one delta for each materially affected character, including non-POV participants when the event reaches them through an observable or otherwise earned path.

Each delta records:

- character ID, branch ID, scene or event ID, narrative coordinate, and parent Persona revision;
- observations available to the character and the source beat for each observation;
- participant-local interpretation, including uncertainty and misreading;
- operations on memory, belief, goal, value stance, need, trait activation, mood, physical or cognitive load, refusal, candidate action, social bond, and status read;
- for each operation: `add`, `update`, or `retire`; stable target ID; before and after state or bounded patch; reason; confidence; and evidence reference;
- immediate residue, latent pressure, deferred consequence, and visibility class;
- proposal provenance and coordinator ruling: `accepted`, `repaired`, `rejected`, or `deferred`.

A generated scene or specialist appraisal proposes deltas. The coordinator accepts, repairs, rejects, or defers them. Only accepted or explicitly repaired operations advance the Persona revision.

## Scene Transaction

```text
parent Persona revision
+ scene-local world and material state
+ POV and perception boundary
  -> projected character context
  -> proposed action or drafted scene
  -> observable event
  -> participant-local appraisal
  -> proposed character delta
  -> coordinator adjudication
  -> accepted delta
  -> next Persona revision
```

The acting character receives a projection of its own state and relevant scene stimulus, not the entire Persona document and never another participant's private state. Observable action is resolved before appraisal. Different characters may derive incompatible deltas from the same event without corrupting world truth.

Candidate actions are possibilities, not events. A thought is not knowledge merely because it is vivid. Retrieval is a prompt aid, not mutation authority.

## Relationships

Relationships have three useful surfaces:

- Character A's directional bond and status read of Character B in A's Persona.
- Character B's independent bond and status read of Character A in B's Persona.
- The [[State Contracts|Relationship Matrix]] as a generated audit view of evidence, authority, dependency, debt, and known asymmetry.

These surfaces need not agree. The matrix identifies contradictions and displays externally established relationship facts from their proper ledgers; it cannot overwrite a character's subjective state or write back into a Persona revision.

## Branches, Reordering, And Revision

A branch inherits an explicit parent Persona revision for every affected character. Accepted deltas advance only that branch. Sibling branches cannot mutate one another or their common ancestor.

Reordering or materially redrafting a scene invalidates descendants whose parent revision or evidence no longer exists. Replay begins at the last valid parent. A merge is a semantic reconciliation of causal histories, never fieldwise arithmetic.

Revision may discover stronger character truth than planning anticipated. The coordinator first accepts the manuscript change, then records replacement deltas and replays dependent revisions. Editing a snapshot to make it agree after the fact is prohibited.

## Inspection And Verification

The room should provide generated human-readable views rather than requiring writers to inspect raw typed state:

- per-character revision history;
- scene entrance and exit diff;
- active and latent memory view;
- directional relationship comparison;
- knowledge and belief divergence report;
- stale-parent and cross-branch contamination warnings;
- endpoint reconciliation against the accepted manuscript.

Verification checks that every accepted operation cites an event or decision, every child names a valid parent revision, generated snapshots validate against the Persona contract, POV knowledge remains earned, rejected proposals have no downstream effect, and the manuscript's final character state can be replayed from the baseline.
