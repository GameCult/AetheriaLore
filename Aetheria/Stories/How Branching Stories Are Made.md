---
title: How Branching Stories Are Made
description: "An inspectable tour of Ghostlight's branch-and-fold production process, from Aetheria lore and character-local state to playable Ink, review receipts, and illustrated replay."
---

# How Branching Stories Are Made

Aetheria's interactive stories are built through **Ghostlight**, a character-state and procedural-drama system developed alongside the setting. The aim is not to ask a model for a dramatic scene and preserve whatever comes back. The aim is to make choices emerge from what characters know, misread, want, fear, control, and can physically do—and to retain enough evidence to explain how the finished branch acquired its shape.

The resulting archive is deliberately less tidy than a conventional manuscript folder. It contains lore digests, scene state, character-local context, coordinator decisions, generated responses, appraisals, mutations, editable Ink, review reports, and records of human or coordinator repair. These are production receipts: a history of which organ knew what, which decisions it owned, and where judgment entered the process.

## The Production Line

### 1. Ground the scene

The process begins with existing Aetheria material: factions, technologies, historical pressures, institutions, bodies, and the practical geometry of the scene. That source material is distilled into a bounded lore digest and an initial state packet.

The packet establishes more than premise. It names what each participant can perceive, the resources and objects in reach, institutional pressures already acting on the room, unresolved hooks, and constraints the story must not quietly violate. A differently embodied protagonist must receive affordances appropriate to that body. An uplifted raven may fly a short indoor route, cache an object, mimic a sound, work a contact pad, or manipulate a human through learned leverage; it does not become a small feathered office worker with omniscient facility access.

### 2. Project local awareness

Ghostlight separates canonical state from perceived state. What is true, what a character believes, and what the model is allowed to see for one turn are different surfaces.

For each acting character, the system projects a temporary local context: memories currently active, relationships as that character understands them, visible evidence, available actions, emotional and physical load, and the parts of the institution pressing directly on them. Private motives belonging to someone else are withheld. A responder receives observable speech, gesture, movement, silence, or object use—not the hidden intention behind it.

This allows characters to misunderstand one another without the machinery confusing misunderstanding with canon.

### 3. Generate and record turns

A sandboxed responder proposes a bounded action from that local context. Speech is only one kind of action. A turn may involve moving, waiting, displaying evidence, withholding access, transferring custody, touching a control, spending a resource, or refusing to perform.

The raw response is retained. So are the exact input packet, consulted sources, reviewed version, leakage audit, and any coordinator intervention. If a supervising agent repairs a response, that repair is labeled rather than laundered into the fiction as untouched model output.

Other participants then appraise the observable event from their own local state. Accepted consequences can update memory, belief, relationship stance, physical condition, institutional pressure, resources, and the set of actions available next. These mutations remain reviewed decisions; evocative prose does not get to promote itself into durable truth.

### 4. Coordinate continuity

The coordinator selects the next useful actor and beat from the reviewed state. It owns continuity, unresolved hooks, reaction windows, recovery time, and the decision to preserve or close a branch.

The coordinator is itself treated as an inspectable organ. Its packet, output, rejected alternatives, and interventions are captured. This matters because a hidden omniscient coordinator can otherwise make every character appear coherent by quietly supplying knowledge the scene never earned.

### 5. Branch locally, fold structurally

The Interactive Fiction Weaver turns reviewed scene material into playable [Ink](https://www.inklestudios.com/ink/). Ink owns the choices, variables, knots, conditions, and compiled story. Ghostlight owns the state and consequence rationale around it.

The working method is **branch and fold**. Choices diverge long enough to incur consequences, then usually return to shared later scenes that read compact state. Earlier decisions can change available options, trust, evidence quality, timing, legal exposure, object custody, visual details, and endings without requiring a permanently separate manuscript for every combination.

A route remains separate when convergence would lie: someone has died or left, a location has become inaccessible, evidence has been destroyed, authority has changed hands, or the playable world is otherwise materially incompatible.

The fold is not permission to forget. If a choice changes a variable, something later must read it. A value that merely sits in the story wearing an important name is not consequence.

### 6. Compile and review

The Weaver emits an editable `.ink` manuscript and a training sidecar connecting each material branch to its source state, actor intent, consequences, and later callbacks. Illustrated stories also receive a separate visual plan containing scene anchors, character references, prompt material, and state-dependent visual changes.

Independent reviewers then inspect different failure surfaces:

- Narrative review asks whether the scene works as fiction and whether choices remain legible.
- Lore review checks the artifact against its Aetheria sources and identifies proposed additions that still require promotion.
- Spatial review checks bodies, objects, routes, sightlines, and physical continuity.
- Interactive-fiction review looks for cosmetic choices, unused variables, dishonest folds, unjustified route splits, and endings that ignore the story's major state.
- Visual review checks whether the images preserve the scene rather than quietly rewriting its geometry or canon.

Passing compilation proves that Ink can run. It does not prove that the choices matter. Review exists for the much more embarrassing category of failure where the machine works exactly as written and the story is still lying.

## Two Worked Artifacts

### [[Lucent Hostage Feed]]

The Lucent fixture preserves the fullest receipt chain. Its production archive includes turn-by-turn projected contexts, responder packets, raw captures, events, participant appraisals, reviewed mutations, coordinator decisions, clean and polished transcripts, Weaver inputs and outputs, editable Ink, and initial and final narrative, lore, and spatial reviews.

The playable branch was not generated directly from the clean transcript. A sandboxed coordinator and Interactive Fiction Weaver transformed reviewed scene state into a negotiator-perspective structure, after which labeled repairs corrected syntax, action labels, sidecar structure, and spatial problems. The archive therefore records both generative labor and editorial intervention.

[Inspect the Lucent production receipts on GitHub](https://github.com/GameCult/Ghostlight/tree/main/experiments/lucent-hostage-feed-v0) or [read the editable Ink source](https://github.com/GameCult/Ghostlight/blob/main/examples/ink/lucent-hostage-feed.negotiator-branch.v1.ink).

### [[Corvid Collective First Exodus]]

The Corvid fixture begins with a lore-grounded founding constraint: Kesh-of-Three-Clicks may use human allies, guilt, access, and institutional confusion, but humans cannot become the true founders of the Corvid Collective. Its packet establishes Kesh's embodied affordances, the flock's priorities, concrete objects in the aviary, fallible human leverage, and four founding pressures: flock safety, public proof, human leverage, and clean disappearance.

A sandboxed coordinator selected the opening branch hub. A sandboxed Weaver compiled four choice layers and state-gated endings. Narrative, lore, spatial, and visual reviewers then tested the result, with coordinator repairs retained as part of its provenance. The illustrated replay adds a visual plan and generated scene sequence without granting those images authority over the underlying setting.

[Inspect the Corvid production receipts on GitHub](https://github.com/GameCult/Ghostlight/tree/main/experiments/corvid-collective-founding-v0), [read the editable Ink source](https://github.com/GameCult/Ghostlight/blob/main/examples/ink/corvid-collective-founding.branch-and-fold.v0.ink), or [inspect its branch provenance](https://github.com/GameCult/Ghostlight/blob/main/examples/ink/corvid-collective-founding.branch-and-fold.v0.training.json).

## What the Receipts Do Not Prove

The archive makes the process inspectable; it does not make every artifact training-ready, canonical, or reproducible from a single command. Some fixtures are reference stories. Some are receipt-chain experiments. Some contain labeled coordinator repair. Room-scale details may remain draft elaboration until promoted into the lore vault.

That distinction is intentional. A branching story can be useful before every production organ is automated, provided the archive says what actually happened. The receipts are not a certificate of machine purity. They are the means by which later writers, researchers, and reviewers can disagree with the machine precisely.

## Further Inspection

- [Ghostlight repository](https://github.com/GameCult/Ghostlight)
- [Branching-scene architecture](https://github.com/GameCult/Ghostlight/blob/main/docs/architecture/ink-branching-scenes.md)
- [Interactive Fiction Weaver prompt](https://github.com/GameCult/Ghostlight/blob/main/prompts/interactive-fiction-weaver.md)
- [Illustrated interactive-fiction pipeline](https://github.com/GameCult/Ghostlight/blob/main/docs/architecture/illustrated-if-visual-pipeline.md)
