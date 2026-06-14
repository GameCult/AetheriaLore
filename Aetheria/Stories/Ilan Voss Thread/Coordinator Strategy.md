# Coordinator Strategy

## Objective

Build an interactive fiction thread where the central dramatic pressure is not "prove the spiders are smart" but "decide which proof, relationship, and escape route survives when a new kind of personhood becomes politically inconvenient."

The story should branch around Voss's choices and fold around Portia agency. The player may guide attention, disclosure, concealment, and trust, but the Portias are not inventory and should not collapse into pets, tools, or exotic sidekicks.

## Current Mechanism

The live canon says the [[Worldbuilding/Pre-Elysium/Factions/Powers/Minor/Portia Line|Portia Line]] emerges from an illegal scaffold after the [[Worldbuilding/Pre-Elysium/Timeline/Events/Cold Wake Panic|Cold Wake Panic]]. Public histories name Sel Veyra as the origin point. This story makes that name a legal mask over Ilan Voss, a researcher whose forced seclusion has become indistinguishable from devotion, shame, and survival.

Interactive state should track pressures rather than morality scores:

- `voss_coherence`: whether Voss can speak, choose, and interpret without collapsing into desperation.
- `portia_agency`: whether Portia actions are represented as authored routes rather than Voss's evidence.
- `proof_integrity`: whether the miracle can survive hostile interpretation.
- `lab_viability`: whether the scaffold remains livable enough for Portia minds to persist.
- `public_contamination`: how badly institutions have reframed the event as fraud, biohazard, or threat.
- `human_handle`: whether any outside human becomes useful without becoming an owner.
- `route_memory`: how much the Portias preserve across branches and folds.

## Invariants

- The Portias are characters with motives, memory, etiquette, and fear. They are not a puzzle interface.
- Voss does not own the miracle after it becomes persons. His tragedy is partly discovering that success removes his authority.
- The scaffold is not decorative technology. It is the cognitive environment that makes the first generation legible and survivable.
- Branches should create different public histories, not alternate truths about whether the Portias are persons.
- The story must keep the difference between Voss's need to be believed and the Portias' need to survive.
- Every ending should seed the later Portia Line: sanctuary, disappearance, hostile containment, partial proof, or mythic misfile.

## Persona Projection Loop

Use the `.cc` Persona packets as source-grounded projection surfaces. The coordinator should not ask a single model to "write everyone." It should run scene beats through character projections, then fold the outputs into a director pass.

1. Select the scene pressure: exit, proof, negotiation, containment, betrayal, or escape.
2. Load the coordinator brief plus only the Persona packets active in the scene.
3. Ask each active Persona for:
   - what they notice first
   - what they want without admitting it
   - what they refuse to say
   - what action they can take in the room
   - what would make them change route
4. Run a director pass that turns those pressures into three or four player choices.
5. Run a Soul pass against the invariants:
   - Did any Portia become a prop?
   - Did Voss's pain erase Portia agency?
   - Did a branch solve institutional hostility too easily?
   - Did the scaffold matter materially?
6. Fold consequences into state variables and route memory before the next beat.

## Prompt Projection Roles

### Voss Projection

Use for scenes where speech, proof, guilt, bodily failure, or public persuasion matters. Voss should be brilliant and compromised, never merely mad. His worst choices should be understandable because he has spent years with the room as his only witness.

### Portia Projection

Use individual Portia Personas when the scene needs nonhuman agency. They should not narrate like humans with extra legs. Their cognition can be rendered through route, sightline, vibration, heat, remembered approach, and the difference between immediate motion and delayed consequence.

### Human Pressure Projection

Use Mara Ellison and Cass Ren to keep the outside world specific. Mara represents regulatory interpretation under fear. Cass represents the hungry interface between miracle, media, and market. Neither should become a pure villain; both should have procedures they believe protect them from responsibility.

## Branch-And-Fold Doctrine

Branches should differ by what gets spent:

- Spend proof to save bodies.
- Spend bodies to preserve proof.
- Spend Voss's credibility to preserve Portia agency.
- Spend lab viability to escape institutional capture.
- Spend secrecy to gain a human handle.
- Spend public clarity to preserve route memory.

Folds should return to unavoidable pressures:

- The lab cannot remain hidden.
- Voss cannot remain sole translator.
- The Portias cannot survive as mere evidence.
- Institutions will classify the event before they understand it.
- Someone will ask who owns the scaffold.

## Voice Guidance

The prose should be intimate, procedural, and tense. Let the horror come from forms, seals, quarantine language, debt notices, thermal alarms, medical routines, and the calm way a miracle is routed into liability categories.

Portia text can be beautiful, but it should stay concrete. No mystical spider chorus. A Portia remembers a route, withholds an angle, plucks a warning through silk, places a mark where another mind can return to it, or refuses a surface because the sightline is wrong.

## Cut Line

Delete any branch whose only function is novelty. Delete any choice that asks the player to decide whether the Portias count as people. Delete any scene where Voss's redemption matters more than the fate of the minds he helped make visible.
