# Simulation Seam Log

This ledger records mechanics suggested by narrative work. It is not story canon, executable simulation evidence, or an implementation backlog by default. Prose records what happened in the accepted story. This ledger records what a future combat model may need to represent if the maneuver proves important beyond its scene.

## Tactical Status

- **Established:** Supported by setting canon, accepted coarse invariants, or executable simulation.
- **Provisional:** Narratively admissible under known constraints but not represented or validated by formal simulation.
- **Contested:** Depends on an uncertain interaction. Prose may preserve that uncertainty, but the interaction cannot exclusively decide an engagement.

A provisional maneuver may decide an engagement when the outcome follows from coarse, insensitive constraints. A recovery queue that cannot physically clear before already-positioned loiterers arrive is admissible. A seeker defeating a mask because of an untested three-percent sensitivity advantage is not.

## Promotion Standard

Recommend promotion into simulation state when at least two conditions apply:

1. The mechanic decides more than one engagement.
2. A player or AI should deliberately invoke or counter it.
3. It consumes or preserves state the kernel cannot currently conserve.
4. It creates a new observable signal, cue, or information threshold.
5. It changes viable loadouts, manufacturing, or campaign economics.
6. Its numerical boundary materially affects balance.
7. It must survive observed/offscreen synchronization.

Promotion means the mechanic deserves explicit state, orders, costs, observables, and counterplay. It does not mean the novella waits for implementation.

## Entry Template

| Field | Record |
| --- | --- |
| Candidate | Short maneuver or mechanic name |
| Narrative use | Scene, doctrine, reversal, or character decision served |
| Existing state consumed | Heat, thrust, ammunition, cognition, geometry, labor, authority, money, or other established state |
| Missing state or transition | What the current kernel may not represent |
| Conservation constraints | What cannot be created, erased, reset, or silently moved |
| Counterplay | Previously available interruption or avoidance |
| Observable cues | What participants or players can notice |
| Outcome sensitivity | Robust, bounded, or numerical knife edge |
| Current status | Established, Provisional, or Contested |
| Promotion trigger | Which promotion conditions are met |

## Pass 5 Candidates

Exact schemas and database fixtures remain deferred.

| Candidate | Narrative use | Existing state consumed | Missing state or transition | Conservation and counterplay | Cues and sensitivity | Status / promotion |
| --- | --- | --- | --- | --- | --- | --- |
| Recovery-lane occupation | Defeat reusable drones without winning every drone exchange | Loiter time, terminal thrust, return arcs, recovery queue, heat, ammunition | Predicted recovery volumes and lane-denial orders | Loiterers spend time/impulse; stagger, relocate, fake return, abandon | Patient contacts near return fans; robust once arrival beats queue clear | **Provisional**; recurring player/AI choice and loadout effect meet promotion |
| Service labor as combat state | Make premium integration and heroic deck work materially consequential | Crew allocation, rails, ports, tools, stock, damage, fatigue | Labor assignment and casualty-dependent turnaround | Labor cannot service simultaneous tasks; distribute plant or reduce sortie density | Open panels, queues, deferred work; exact timing usually bounded | **Provisional**; campaign economics and synchronization justify promotion |
| Cold Choir | Preserve observation under deep-quiet network austerity through embodied Corvid carriage | Flight, optical exchange, isolated sensors, time, consent | Intermittent embodied communication and delayed fusion | Ravens spend location/time and risk; intercept or isolate routes | Missing updates and brief optical flashes; coarse result robust | **Provisional**; promote if repeated beyond one quiet campaign |
| Cross-platform signature narrative | Let several bounded emitters perform one coherent false event | Heat, aspect, motion, timing, links, cognition | Shared mask claims and historical consistency | Every claim pays real heat/motion; baselines and aspect forcing collapse it | Residual mismatches; robust for delay, contested at exact thresholds | **Provisional**; repeated player-facing counterplay meets promotion |
| Adversarial cognition attraction | Nerd-snipe a known architecture with expensive plausible interpretation | Emissions, architecture knowledge, cognition load, bandwidth | Task attraction, quarantine, graceful degradation | Attacker must know architecture and spend envelope; diversity/refusal counters | Branch growth and delayed assignments; behavior compulsion is sensitive | Load effect **Provisional**; guaranteed response **Contested** |
| Distributed subsystem authority | Let Remorae coerce several local systems without a universal hack | Attachment, network topology, power, local control, cognition | Per-subsystem authority and competing command provenance | No command crosses disconnected hardware; isolation/manual control counters | Conflicting acknowledgements and actuator delay; medium sensitivity | **Provisional**; recurring capture play and synchronization justify promotion |
| Dependency-coupled intrusion risk | Make technically successful control unacceptable because protected people share plant | Compartments, pressure, power, refuge state, control topology | Explicit dependency graph from action to inhabited spaces | Consequences follow real shared machinery; inspect or isolate to counter | Pressure anomalies and contradictory safety responses; high consequence | **Provisional**; promote if collateral assessment becomes deliberate play |
| Confidence fuses and Slow Vote | Stop classifier certainty silently becoming firing certainty under attack | Independent observations, authority, cognition isolation, geometry confidence | Typed confidence provenance and isolated decision path | Slower decisions consume terminal time; saturation remains counter | Divergent confidence and quarantined tasks; robust as authority mechanism | **Provisional**; promote if cognition attacks recur |
| Consequence-volume defense | Counter mixed clouds by acting on what any object can do in a region | Geometry, possible envelopes, area weapons, conduct policy, ammunition | Policy evaluation over regions rather than identities | Wide defense spends coverage, heat, ammunition, legal tolerance | Region-wide fire and ignored identities; strategically robust | **Provisional**; reusable anti-cloud doctrine merits promotion |
| Protected rescue reserve | Give operational value to deliberately withheld capability | Available craft, casualty state, authority floor, recovery geometry | Reserved-capability policy protected from ordinary allocation | Reserve is unavailable elsewhere and can be attacked or baited | Denied task requests and held-back craft; low combat, high survival sensitivity | **Provisional**; AI conduct and offscreen consistency justify promotion |
| Persistent cold ballistic hazard | Let Hot doctrine shape likely maneuver volumes without guidance emissions | Ammunition, muzzle solution, ballistic motion, time, navigation knowledge | Durable hazard-volume representation | Rounds cannot correct; maneuver, patience, or route change counters | Predicted coast volumes; exact density may be sensitive | **Provisional**; promote if volume fire recurs |
| Objective clock independent of destruction | Allow a ship to win exchanges and lose convoy, route, or contract | Geometry, mission deadline, protected actors, commitment | Explicit objective maturation and opportunity cost | One ship cannot occupy two volumes; refuse pursuit or split assets | Threat leaves defended objective; robust | **Established** narratively; kernel state promotion recommended |
