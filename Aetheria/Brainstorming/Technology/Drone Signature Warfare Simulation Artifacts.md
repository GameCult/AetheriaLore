# Drone Signature Warfare Simulation Artifacts

This note games out drone warfare under [[Thermal Stealth and Signature Warfare]] and [[Thermal Signature Warfare]]. It is not final prose. It is a doctrine workbench: assumptions, payoff logic, timeline traces, and pressure-tested implications.

## Core Assumptions

- Pre-Elysium combat has no mature science-fiction shields. Armor, redundancy, and point defense exist, but a clean first hit by a serious weapon is often decisive.
- Detection is faster than identification. A sensor trace can be tactically meaningful before it is legally or materially resolved.
- Every action has signature cost: thrust, active scan, radiator use, point defense, heat transfer, weapons charging, drone launch, drone correction, and emergency maneuver.
- Thermal stealth is heat debt. Quiet platforms are borrowing time from future dump windows.
- Signature shaping is not timeless. Before the Cold Wake metamaterial threshold, actors hide, delay, dump, and throw crude decoys. After it, ships and drones can spend heat to imitate other plausible signatures inside their physical envelope.
- Loitering systems have option value. They let a commander commit mass, position, and sensor coverage before committing final lethality.
- PSC-regulated actors care about admissible telemetry and legal exposure. Pirates and covert operators care about reputation, salvage value, and avoiding traceable intent.

## Era Dial Settings

The same heuristic should not produce the same war in every century. Each era changes the cost of information, cognition, heat, bodies, repair, law, and mobility. Tune those dials first; the tactical behavior follows.

| Era | Cheap / Available | Scarce / Fragile | Dominant Tactical Feel |
| --- | --- | --- | --- |
| [[Corporate Exodus]] | human security teams, basic sensors, dockside control, contract muscle, industrial tools | transport margin, habitat redundancy, public law, spare parts, independent food and fuel | boarding, berth seizure, convoy escort, strikebreaking, sabotage, pump-room war |
| [[Age of Automation]] | cheap coordination, predictive patrols, basic drones, AGI logistics, compliance telemetry | legitimacy, audit clarity, swarm restraint, safe autonomy | perimeter swarms, automated interdiction, escort screens, permit-shaped violence |
| Cold Wake period | better sensors, Cold Wake metamaterials, probes, radiator discipline, insurer attention | trustworthy heat history, quiet-running certification, corridor patience, classification certainty | cold stalking, forced scans, decoy plumes, early signature shaping, heat dumps as battle events |
| [[Identity Crisis]] | uploads, BCIs, biodrones, uplift specialists, long-memory command | stable personhood law, consent, trust in weapon labor, command legitimacy | fast cognition with ugly custody questions; sabotage and targeting become personhood disputes |
| [[Identity Abyss]] | commoditized cognition, [[Neuromorphic Firmware]], shaped-emission attacks, media spin, deniable command tools | moral credibility, firmware stability, clean evidence, public trust, classifier robustness | cognitive overload warfare, target-classification fights, adversarial signatures, adaptive munitions, reality-management after the shot |
| [[Existential Collapse]] | salvage, black-market refits, pirate doctrine, local militias, rescue networks, old stockpiles | food, coolant, radiator capacity, clinics, repair infrastructure, PSCC stability | convoy war, thermal capture, loitering ambushes, maintenance denial, strategic rescue |
| Early Elysium | displaced fleets, old doctrines, desperate crews, strange terrain, inherited grudges | maps, fuel assumptions, stable law, known physics, supply chains | triage combat, doctrine mismatch, improvisation, old weapons under new failure conditions |
| Mature Post-Elysium | shields, aetheric mobility, esper cognition, oracular tools, Parallax procedures | admissible reality, clean continuity, certified operators, uncontaminated records | protected first-hit windows, prediction contests, residue management, wars over what the battle legally was |

This table is a design control surface. If drones feel too modern in an early era, raise autonomy cost and lower sensor density. If hot doctrine feels too weak in late Sol, raise thermal capacity, repair redundancy, and point-defense throughput while lowering reveal cost. If Post-Elysium feels like late Sol with glowing nouns, change the evidence and mobility dials, not just the weapon names.

## Gameplay-Shape From Current Gear

The active Aetheria behavior layer already points to the right variables. The doctrine model should use these terms before inventing new ones:

| Existing gameplay surface | Tactical meaning for drone warfare |
| --- | --- |
| `VisibilitySources`, `VisibilityDecay`, `Visibility` | how bright the platform is right now, including thrust, weapons, pings, radiators, reflectors, and persistent visibility behaviors |
| `Sensitivity`, `SensitivityCurve`, `PingBoost`, `PingEnergy`, `PingVisibility`, `PingRange`, `PingCooldown`, `PingDuration` | passive and active sensor tempo; how quickly a trace becomes usable and how much the observer exposes itself to get there |
| `TargetDetectionInfoThreshold`, `TargetArmorInfoThreshold`, `TargetGearInfoThreshold`, `TargetInfoDecay`, `TargetPersistenceDuration` | detection is layered; target, armor, and gear knowledge should become separate tactical thresholds |
| `LockSpeed`, `SensorImpact`, `LockAngle`, `DirectionImpact`, `Decay` | weapon lock is its own clock, driven by gathered target info, pointing quality, and lock decay |
| `ThermalMass`, `Emissivity`, `PumpedHeat`, `WasteHeat`, `EnergyUsage`, radiator temperature | heat capacity and heat rejection; the quiet-time budget before a dump, degradation, or radiator exposure |
| `Thrust`, `Heat`, `EnergyUsage`, `Visibility`, `Torque`, `Mass` | movement has tactical cost; thrust can solve geometry while creating a trace |
| `Damage`, `Penetration`, `DamageSpread`, `MinRange`, `Range`, `Energy`, `Heat`, `Visibility`, `Spread`, `Velocity` | weapon commitment, firing signature, and lethality |
| guided projectile `Thrust`, `MissileVelocity`, guidance/lift/thrust curves, dodge frequency | munition geometry; whether a package can arrive, loiter, correct, dodge, or force point defense |
| `Cooldown`, `BurstTime`, `Count`, `MagazineSize`, `ReloadTime`, ammo key | salvo rhythm and how expensive it is to spend uncertainty |
| active consumable `Duration` / `RemainingDuration` | useful prototype surface for loiter time, decoy life, heat-ferry endurance, or temporary signature masking |
| cognitive components, AI cores, neuromorphic firmware, battle computers | how much usable inference, attention, target sorting, fire-control scheduling, and commitment judgment the platform can apply before overload |

## Signature Shaping Threshold

Treat signature shaping as an era-gated capability rather than a universal stealth stat. Early stealth can reduce visibility, delay a dump, hide behind background heat, or release a crude false plume. Mature shaping appears after Cold Wake metamaterials make thermal release programmable enough to imitate class features. The result is not invisibility. It is false classification bounded by heat capacity, emitter bandwidth, aspect, thrust history, radiator geometry, telemetry behavior, and what the observer already thinks should be in the volume.

A ship trying to hide can make itself look like something thermally nearby. A drone can do the same if it has thermal mass, emitters, and enough cognition to keep the lie coherent. A heat ferry is the cleanest example because it already carries the parent hull's debt: it can move that heat away, then spend it as service traffic, a legal dump, a false radiator bloom, a wounded shuttle, a larger drive plume, or the signature that makes some other object look harmless by comparison.

Useful shaping stats:

| Stat | Meaning |
| --- | --- |
| `ShapeBandwidth` | how many independent signature features can be controlled at once: intensity, spectrum, direction, pulse rhythm, apparent radiator geometry, ping response, or decay curve |
| `ThermalEnvelope` | set of plausible classes the platform can imitate without violating heat, thrust, geometry, or telemetry constraints |
| `ImitationLibrary` | known target, service, industrial, legal, debris, and emergency signatures the platform can perform convincingly |
| `CoherenceMaintenance` | heat, cognition, and control cost required to keep the apparent signature consistent as observers gather more data |
| `ClassifierAttackStrength` | ability to generate shaped emissions that overload, bias, or split a specific cognitive architecture's inference |
| `ClassifierRobustness` | observer resistance to adversarial signatures, including training diversity, sensor fusion, and refusal to overcommit |

This is where stealth stops being only submarine warfare and becomes a hidden-object puzzle. The trace is not merely faint. It is asking to be classified as the wrong member of a crowded scene.

## Weapon Economy Axis

Weapon families should not differ only by damage type. They trade different resources for different kinds of certainty.

Lasers are the cleanest energy-weapon ideal: ship power and ship heat become precise energy on target at light speed. The tactical price is paid inside the firing platform through reactor draw, capacitor rhythm, cooling load, firing signature, optical train quality, and beam dwell. If the ship can solve the heat and pointing problem, lasers reward cognition and fire control with extremely direct expression: know where to aim, keep the solution, put energy exactly there.

Other energy weapons keep the same conceptual bargain with messier delivery. Particle beams, energized plasma bolts, and lightning guns all spend power and heat to impose energy at range, but with extra conversion steps, environmental requirements, beam/plasma stability problems, or lower effective specific impulse. A lightning gun that uses lasers to form an ion channel before dumping current through it is still part of the same family: precision and energy delivery bought through power, heat, and control complexity.

Ballistics and other material deployments make a different bargain. They move some of the energy budget into carried mass: ammunition, penetrators, missiles, mines, drones, pellets, shrapnel, or physical payloads. The firing ship still pays heat, recoil management, targeting, loading, and launch signature, but the destructive package carries mass, momentum, chemistry, embedded cognition, or terminal maneuver authority with it. The advantage is that the projectile can do work after launch. The cost is logistics, magazine depth, cargo volume, reload infrastructure, interception risk, and the fact that missed mass is gone.

That gives another metagame dimension:

| Weapon economy | Pays with | Rewards | Vulnerable to |
| --- | --- | --- | --- |
| laser / ideal energy | power, heat, optical quality, pointing | precision, instant delivery, firing-solution quality, subsystem targeting | heat saturation, masking, armor rotation, reflective/ablative surfaces, power disruption |
| particle / plasma / lightning | power, heat, channel stability, conversion complexity | specialized damage effects, shield interaction in later eras, subsystem disruption | range loss, environmental constraints, heat burden, control failure |
| ballistic / kinetic | ammunition mass, recoil, launch signature, magazine logistics | armor defeat, burst damage, low onboard energy draw after manufacture | point defense, ammo depletion, spread, travel time, supply-chain pressure |
| missile / drone / mine | carried mass, onboard cognition, loiter time, command envelope | terminal maneuver, inspection, subsystem selection, remote risk, delayed commitment | interception, spoofing, autonomy limits, telemetry liability, recovery by enemy |
| heat-transfer / capture payload | contact geometry, clamp time, thermal coupling | salvage, crew coercion, radiator/cooling defeat | point defense, loop entanglement, fragile cargo, legal telemetry |

The doctrine question becomes: which resource is cheaper for this actor in this era? A hot industrial power with reactors and radiators may prefer energy weapons because power is cheap and heat is manageable. A frontier pirate with salvage access but poor cooling may prefer material payloads, remorae, and drones because ammunition and ugly hulls are easier to scavenge than premium emitters. A cognition-rich power may prefer smart munitions because it can turn onboard decision quality into terminal effect.

Two stats are not explicit enough yet, but the doctrine wants them:

- `SignatureMasking`: ability to shape emissions so the observer classifies the trace as something else within the platform's thermal and visibility envelope. Before Cold Wake materials, this is mostly crude hiding and decoy work. After the threshold, it becomes active imitation bounded by heat, radiator direction, ping behavior, thrust history, and legal telemetry.
- `LoiterTime`: how long a munition, decoy, heat ferry, or spotter can remain useful before fuel, heat, computation, visibility, or self-neutralization ends the question.

The cognition layer should be explicit because Aetheria commoditizes minds. [[Neuromorphic Firmware]] already points toward target-acquisition layers, piloting assists, logistics search routines, and adaptive munitions packages. A smarter battle computer is not just a lore adjective. It changes how much information a platform can use before the relevant clock runs out.

## Cognition And Cognitive Load

Cognition is the resource that turns gathered information into timely action. Sensors may collect traces, but cognition decides what the traces probably mean, which ones deserve scarce attention, when a mask is breaking, whether a loiterer should commit, and which salvo pattern can be cycled without wasting the firing window.

Different cognitive components improve different parts of the machine:

| Cognitive component | Improves | Gameplay effect |
| --- | --- | --- |
| sensor processor | noise rejection, anomaly detection, class inference | raises effective `Sensitivity`, reduces false tracks, improves `mask_credibility` tests against deception |
| targeting computer | conversion of target info into lock quality | improves `LockSpeed`, lowers practical `SensorImpact`, reduces lock decay under clutter |
| fire-control system | weapon scheduling, firing-solution quality, and salvo discipline | improves burst timing, target switching, round cycling on target, predictive aim, spread control, recoil/heat-drift compensation, and multi-weapon synchronization |
| guidance cognition | missile evasion, terminal maneuvering, and subsystem selection | improves effective closure, dodge behavior, final correction, point-defense evasion, thrust timing, and the chance of striking a vulnerable subsystem instead of hull plating |
| battle computer | commitment judgment under time pressure | lowers decision latency, compares clocks, allocates attention, and chooses launch/hold/abort in milliseconds |
| neuromorphic firmware | specialized intuition or overclocked pattern work | improves one domain sharply while adding provenance, stability, ethics, and failure-mode pressure |

This creates cognitive load. A platform can have excellent sensors and weapons while still losing because its battle computer cannot resolve enough simultaneous questions. Every unresolved object in the battlespace asks for attention:

- Is this trace real, decoy, debris, service traffic, heat ferry, or weapon?
- Is the current mask still credible?
- Which target needs active scan?
- Which lock should be preserved under decay?
- Which loiterer is close enough to commit?
- Which point-defense shot leaks too much information?
- Which surrender, rescue, telemetry, or corridor-law signal changes the legal threshold?

### Cognitive Matchup Stats

| Stat | Meaning |
| --- | --- |
| `CognitiveBandwidth` | how many simultaneous tracks, locks, masks, and commit decisions can be handled without penalty |
| `InferenceQuality` | how well ambiguous traces become correct class probabilities |
| `DecisionLatency` | time between enough evidence and actual command/action |
| `AttentionFlexibility` | how quickly the system can retask sensors, weapons, and loiterers without losing state |
| `CommitJudgment` | quality of launch/hold/abort decisions under uncertainty |
| `FireControlThroughput` | number of weapons or munitions that can be meaningfully cycled while preserving a valid firing solution |
| `FiringSolutionQuality` | ability to put rounds where the current solution says they should go under motion, heat drift, recoil, spread, and target maneuver |
| `TerminalDiscrimination` | ability to identify vulnerable subsystems during final approach |
| `ThrustTimingJudgment` | ability to decide when to spend remaining maneuver authority against evasive targets |
| `AutonomyStability` | how well cognition performs under jamming, contradictory telemetry, or missing command link |
| `AdversarialSignatureResistance` | how well the cognitive stack avoids being baited by shaped emissions tuned to its classifier habits |
| `PuzzleLoadTolerance` | how many contradictory-but-plausible signatures the system can hold without brittle overcommitment |
| `CognitiveHeat` | heat, power, or signature cost of running the cognition hard |
| `MoralThresholding` | whether the system respects surrender, rescue, protected infrastructure, and autonomy-class limits |
| `CognitionProvenance` | conventional software, AGI core, upload-derived firmware, uplift-derived model, illegal Cognitum package, or faction-certified stack |

`CognitiveBandwidth` should behave like a soft cap. Below the cap, the platform uses its sensors and weapons cleanly. Above the cap, it does not simply become stupid. It becomes late, brittle, or morally dangerous:

- target info decays before it is used;
- locks drop during retasking;
- decoys consume premium attention;
- fire control overkills one target while missing the real window;
- loiterers commit on stale classification;
- point defense fires at the obvious object and reveals the protected body;
- legal beacons, surrender codes, or rescue telemetry arrive too late to change action.

That last failure is extremely Aetheria. A cheap battle computer does not merely do less damage. It creates liability, atrocity risk, salvage disputes, and reputation damage because it cannot understand the battlespace quickly enough to remain civilized.

Cognition quality applies across the whole kill chain. A carrier battle computer may make the first launch decision, a sensor processor may turn faint traces into a probability field, a fire-control suite may decide which weapons can cycle without wasting the opening, and the munition's own cognition may learn something in the final instant that the launcher never knew. At point-blank range, a smart missile can see actual radiator geometry, armor scars, thrust vector changes, emergency venting, point-defense posture, or a suddenly exposed command antenna. If it is smart enough, it does not merely hit the target. It chooses what part of the target deserves to stop existing.

The terminal phase is its own little game. A missile with remaining thrust must decide when to spend it. Burn too early and a countermaneuvering ship or point-defense screen can read the correction. Burn too late and the missile may lack enough authority to shift from hull splash to radiator trunk, sensor mast, exposed coolant route, thruster bell, shield emitter, docking collar, or command antenna. The target plays the opposite game: maneuver, flare, dump heat, rotate armor, spoof subsystem signatures, or fire point defense in a way that makes the munition waste its last correction. Better guidance cognition does not just raise hit chance. It changes what "hit" means.

### Cognitive Load Formula

Use a rough load model rather than a full mind simulator:

```text
cognitive_load =
  unresolved_tracks * track_complexity
  + active_locks * lock_complexity
  + controlled_munitions * autonomy_supervision_cost
  + active_masks * deception_maintenance_cost
  + adversarial_signatures * classifier_attack_strength / adversarial_signature_resistance
  + incoming_threats * reaction_cost
  + legal_signals * thresholding_cost

cognition_margin =
  cognitive_bandwidth - cognitive_load

decision_latency =
  base_decision_latency * overload_multiplier(cognition_margin)
```

Then feed cognition back into the clocks:

```text
effective_track_clock =
  raw_track_clock / inference_quality + decision_latency

effective_lock_clock =
  raw_lock_clock / targeting_quality + decision_latency

effective_terminal_clock =
  raw_terminal_clock / guidance_quality

effective_subsystem_hit_chance =
  terminal_discrimination * thrust_timing_judgment * remaining_maneuver_authority * target_exposure

effective_fire_window =
  weapon_window * fire_control_quality

effective_on_target_rate =
  nominal_cycle_rate * fire_control_throughput * firing_solution_quality

effective_commit_threshold =
  base_commit_threshold / commit_judgment

effective_mask_credibility =
  signature_masking * shape_bandwidth * imitation_library_match * coherence_maintenance
  / classifier_robustness
```

The clean heuristic becomes four clocks:

1. `track_clock`: can the platform know enough in time?
2. `terminal_clock`: can the munition arrive in time?
3. `heat_clock`: can the platform remain thermally plausible in time?
4. `cognition_clock`: can the command stack decide, retask, and commit in time?

If `cognition_clock` is longer than the tactical event, the rest of the build is ornamental. Beautiful sensors, elegant masks, and perfect loiterers still fail if the battle computer cannot spend them before the moment closes.

## Munition Hulls, Not Projectile Effects

Loitering munitions should not be implemented as smarter guided projectiles once they become central to the metagame. A guided projectile is a weapon effect: it inherits a launcher profile, flies, hits, expires. That is appropriate for ordinary missiles, mines, and simple terminal packages. It is too small for the terrifying version of loitering warfare.

The stronger model is an alternate hull type: `Munition` or `DroneMunition`. A munition hull is built from the same grammar as a ship, just compressed into smaller, cheaper, harsher components. It has a hull shape, hardpoints, mass, thermal mass, armor, visibility sources, sensors, thrusters, heat storage, radiator or dump behavior, warhead payload, autonomy package, telemetry package, and self-neutralization rules. The launcher does not fully define the weapon. The launcher deploys a prebuilt little vehicle.

Ownership becomes clean:

| Owner | Owns |
| --- | --- |
| carrier ship / launcher | storage, launch cost, deployment impulse, initial command envelope, reload logistics |
| munition hull | movement, heat, visibility, masking, sensing, loiter, onboard cognition, target updates, terminal commit, self-neutralization |
| warhead component | damage, penetration, blast behavior, disabling/capture effect, legal payload class |
| autonomy component | allowed target classes, confirmation threshold, jamming response, retreat/abort behavior |
| telemetry component | PSC compliance record, command provenance, legal beaconing, spoofability |

This preserves the existing Aetheria instinct that the build is the character sheet. A loitering munition becomes dangerous because of its loadout, not because "loiter" is a single missile flag. A cheap pirate Remora can carry a weak motor, a clamp, a bad sensor, a dirty autonomy package, and whatever non-destructive subsystem payload the crew expects to monetize. Heat-transfer clamps are only one variant. Other Remorae can spoof reactor controls, pressure life-support routing, tap internal data networks, degrade sensor masts, interfere with command antennas, unlock docking collars, spoof cargo locks, or dose crew environmental feeds. A Cryonix cold loiterer can spend most of its budget on thermal mass, signature masking, and a patient sensor. A Zhestokost assault loiterer can be hot, blunt, audited, armored, and willing to be seen because it is there to force defenders to answer.

### Capability Bundles, Not Clean Categories

The line between drone and loitering munition should remain vague. These are not clean species of object. They are capability bundles mounted on small hulls, then interpreted through current posture, payload, command authority, and intent. A spotter becomes a munition if it carries a terminal package and receives permission to spend itself. A mine becomes a drone if it can reposition, share tracks, and refuse bad targets. A relay becomes a threat if it can illuminate, jam, ram, or call terminal fire. A beacon becomes coercive when shooting it creates legal evidence and ignoring it lets the enemy's lattice mature.

The useful question is not "what is this thing?" but "what can it do from here, and what will I reveal by answering it?"

The same hull architecture can produce several battlefield questions:

| Role | Key components | Tactical use |
| --- | --- | --- |
| spotter | sensor, relay, cold thruster, low payload | improve parallax and target info without lighting the parent ship |
| loitering munition | sensor, autonomy, thruster, warhead, thermal buffer | occupy terminal geometry before final commitment |
| heat ferry | thermal mass, heat pump interface, radiator/dump control | carry heat debt away from a quiet platform or become a false dump |
| decoy | signature masker, reflector/emitter, scripted heat behavior | imitate ship classes, service traffic, junk, or legal telemetry |
| Remora | clamp, short-range thruster, sensor, non-destructive subsystem payload | attach to radiators, reactor control runs, life-support feeds, internal network taps, cargo loops, sensor masts, docking collars, command antennas, or crew environmental systems without wrecking the prize |
| interceptor | sensor, high thrust, point-defense payload | kill other unresolved objects while leaking as little parent information as possible |
| PDC drone | point-defense weapon, sensor, high-thrust repositioning, relay | shoot down enemy drones, force defensive reveals, or lock down a local volume |
| compliance witness | telemetry, sensor, legal beacon, low payload | make a regulated package admissible and make jamming politically expensive |
| illuminator | active sensor, short-life power store, telemetry | spend its own signature to turn ambiguity into a targetable track |
| beacon | transmitter, legal identity, sensor, low-thrust station-keeping | mark territory, preserve evidence, or make enemy interference expensive |

These are not separate bespoke systems. They are loadout patterns on small hulls. The same chassis may launch as a relay, become an illuminator, switch to interception, then die as a kinetic obstruction. The category changes because the tactical situation changes.

The metagame is deep enough that a usually secondary capability can become the matchup plan. Point defense is the easy example because it sounds defensive until it is mounted on small mobile hulls. A carrier could launch PDC drones to seize local authority over the unresolved-object layer: some hold near the parent as an interception screen, some push forward to hunt enemy spotters, relays, heat ferries, and loiterers, some fire just enough to force the enemy to answer, and some spend themselves as blockers when spoiling terminal geometry matters more than killing the incoming object.

That does not make all-in PDC drones the universal meta. It means capabilities are contextual weapons. A relay-heavy cloud can win if command continuity is the bottleneck. Illuminators can win if the enemy's mask collapses under forced classification. Beacons can win if legal pressure changes what the opponent is willing to shoot. Remorae can win if an exposed subsystem matters more than hull damage: cooling for thermal capture, reactor safing for rapid evacuation, life support for surrender pressure, datanet access for boarding, or environmental feeds for crew-directed chemical coercion. Mines can win if the opponent must cross predictable dump or rescue geometry. Point defense can win if removing the enemy's small hulls collapses their sensor lattice faster than they can threaten the carrier. The doctrine question is always: which capability attacks the opponent's shortest clock?

### Required Munition Stats

A munition hull should share ship stats where possible and add only the fields that protect a real invariant:

| Stat | Why it exists |
| --- | --- |
| `LoiterTime` | explicit lifetime budget for fuel, heat, computation, legal self-neutralization, or battery endurance |
| `CommandEnvelope` | maximum range or condition under which the carrier may update orders |
| `AutonomyClass` | what the munition may decide without live confirmation |
| `CommitThreshold` | target-info or lock threshold required for terminal attack |
| `AbortThreshold` | uncertainty, jamming, surrender, rescue beacon, or legal signal that forces abort/hold |
| `CognitiveBandwidth` | number of tracks, masks, commands, and commit checks the munition or carrier can handle |
| `DecisionLatency` | time between evidence crossing threshold and command execution |
| `GuidanceCognition` | quality of evasive, pursuit, and terminal maneuvering under countermeasures |
| `TerminalDiscrimination` | ability to choose a subsystem or vulnerable surface during the final approach |
| `RemainingManeuverAuthority` | final thrust, attitude control, or vector-change budget available after loiter and evasion |
| `ThrustTimingJudgment` | quality of the munition's final burn timing against countermaneuvering targets |
| `SignatureMasking` | false classification strength inside physical emission limits |
| `TelemetryIntegrity` | how credible the munition's record is to PSC, insurers, courts, or factions |
| `SelfNeutralization` | how reliably the hull de-arms, vents, parks, returns, or destroys itself after expiry |
| `Recoverability` | whether unused, aborting, or surviving hulls can return, land, dock, be retrieved, be repaired, be spoofed, be stolen, or become evidence |
| `RecoveryAndRefuelCycle` | turnaround time and infrastructure cost to recover, inspect, refuel, cool, rearm, and relaunch the hull |
| `SubsystemPayload` | what the hull is built to do after contact without wrecking the prize: heat transfer, reactor safing interference, life-support pressure, datanet intrusion, sensor degradation, cargo-lock spoofing, crew-environment dosing, tracker, beacon, or reversible disablement |
| `AttachmentPersistence` | how long the hull can remain clamped, hidden, powered, and useful while the target maneuvers, heats, repairs, or sends removal drones |

Everything else should try to reuse existing ship/component language: mass, hardpoint fit, thermal mass, conductivity, armor, thrust, visibility, heat, sensor sensitivity, ping exposure, lock behavior, damage, penetration, cooldown, ammo, quality, durability, and manufacturer doctrine.

### Launcher Relationship

The launcher should act more like a docking bay or deployment rack than a complete weapon definition. It answers:

- which munition hull classes fit;
- how many can be carried;
- how quickly they can be powered, cooled, armed, and launched;
- how much launch signature and heat the carrier pays;
- whether the munition starts cold, hot, charged, masked, passive, or already under command;
- whether the carrier can recover, refuel, rearm, or retask it.

This lets carrier builds matter. A stealth carrier may launch fewer, colder, slower munitions from masked racks. A hot assault carrier may spit heavy packages quickly with obvious telemetry. A pirate rack may accept ugly mixed hulls and pay for it in maintenance, legality, and accidental heat behavior. The rack is logistics and interface. The munition remains the actor.

### Terminal Behavior

A munition hull should support multiple terminal modes:

- direct kill: warhead detonation, penetrator strike, radiator kill, or shield overload in later eras;
- precision subsystem strike: spend final maneuver authority to hit radiator trunks, sensor masts, exposed coolant routes, thruster bells, shield emitters, docking collars, command antennas, or other essential geometry instead of splashing against armor;
- disabling strike: sensor blinding, thruster kill, coolant sabotage, command-link severing;
- attachment: remora behavior, heat-transfer clamp, tracker, beacon, or legal witness;
- forced reaction: close enough to make point defense, maneuver, active scan, or surrender likely;
- abort/park: self-neutralize, coast inert, return, or become recoverable evidence.

This is why the hull model matters. The terminal act may be only one behavior among many, and the most valuable munition in a fight may be the one that never detonates because it made the enemy reveal what mattered. When it does detonate, the quality of its final cognition should decide whether it merely intersects the target or understands the target well enough to hurt the part that matters.

## Matchup Card

The simplest useful simulation object is a matchup card. It reduces a loadout pair to the clocks and ratios a commander actually cares about.

| Field | Meaning | Pull From |
| --- | --- | --- |
| `signature_now` | current visible signature | summed `VisibilitySources` |
| `masked_signature` | apparent signature after shaping | `signature_now`, `SignatureMasking`, active heat/radiator/thrust envelope |
| `mask_credibility` | chance the false class survives observation | overlap between apparent signature and plausible target classes |
| `shape_bandwidth` | how much of the signature can be controlled at once | emitter quality, metamaterial surface, heat routing, cognition |
| `thermal_envelope` | which false classes are physically plausible | heat capacity, radiator geometry, thrust history, aspect, telemetry |
| `classifier_attack_pressure` | cognitive load imposed by an adversarially shaped signature | `ClassifierAttackStrength`, observer cognition provenance, `ClassifierRobustness` |
| `passive_track_rate` | target info gained per second without ping | target signature, `Sensitivity`, angle curve, range, `TargetInfoDecay` |
| `active_track_burst` | info gained by pinging | `PingBoost`, `PingRange`, `PingDuration`, ping geometry |
| `active_scan_exposure` | visibility cost of pinging | `PingVisibility`, `PingCooldown`, enemy sensor sensitivity |
| `lock_rate` | weapon lock gained per second | `LockSpeed * info^SensorImpact * angle_factor - Decay` |
| `quiet_time` | time before the platform must dump, slow, or degrade | heat capacity margin / net hidden heat gain |
| `dump_signature` | visibility if the platform vents or radiates | radiator `Emissivity`, temperature, `PumpedHeat`, direction |
| `munition_terminal_time` | time from launch/loiter position to impact geometry | range, `Velocity`, guided thrust, target motion |
| `munition_loiter_time` | maximum useful waiting time | explicit `LoiterTime` or consumable duration proxy |
| `munition_signature` | how easy the package is to see while waiting/correcting | munition visibility, thrust heat, sensor activity |
| `pd_reveal_cost` | signature and information leaked by interception | point-defense `Visibility`, heat, firing arc, lock/ping behavior |
| `first_hit_value` | expected value of landing first | damage, penetration, target durability, cargo/legal objective |
| `false_positive_cost` | cost of killing the wrong thing | ammo, legal exposure, reputation, collateral, lost position |

This card can be filled coarsely. It does not need exact physics to become useful. It needs consistent comparisons.

## Three-Clock Heuristic

The smallest machine is three clocks plus one deception check, with cognition pressure added when the era supports shaped-emission attacks:

1. `track_clock`: how long until I can classify or lock the target enough to act?
2. `terminal_clock`: how long until my munition can reach terminal geometry?
3. `heat_clock`: how long until either side must reveal, dump, slow down, or stop masking?
4. `mask_check`: does the current signature plausibly look like a lower-value, legally safer, or tactically misleading class inside the thermal envelope?
5. `classifier_pressure`: if shaped emissions are mature, does the apparent signature consume enough enemy cognition to delay the correct commitment?

Approximate formulas:

```text
passive_track_rate =
  max(0, target_effective_signature * sensor_sensitivity * aspect_factor / range - target_info_decay)

track_clock =
  info_needed / (passive_track_rate + optional_ping_burst / ping_duration)

lock_clock =
  lock_needed / max(0, lock_speed * gathered_info^sensor_impact * angle_factor - lock_decay)

heat_clock =
  heat_capacity_margin / max(hidden_heat_generation - hidden_heat_absorption, epsilon)

terminal_clock =
  distance_to_terminal_geometry / effective_munition_closure

loiter_margin =
  munition_loiter_time - terminal_clock
```

Use thresholds, not exact answers:

| Condition | Heuristic |
| --- | --- |
| `terminal_clock < enemy_track_clock` | preposition or launch; the munition can mature before they know enough |
| `track_clock < enemy_terminal_clock` | wait, classify, or force them to spend first |
| `heat_clock < track_clock` | do not wait for certainty; someone will dump or break the mask first |
| `loiter_margin > track_clock` | loitering munition is strong; launch now, decide later |
| `loiter_margin < 0` | this is a missile, not a loitering weapon; use only after resolution |
| `mask_credibility high` and `enemy active_scan_exposure high` | decoy and slow-play; make them reveal to classify |
| `classifier_attack_pressure high` and `enemy cognition_margin low` | shape the emission as a cognitive trap; make the battle computer spend the moment classifying |
| `pd_reveal_cost high` | cheap loiterers and spotters are valuable even when intercepted |
| `false_positive_cost high` and `mask_credibility low` | use spotters/illuminators before terminal commitment |
| `own_heat_clock huge` and `pd_reveal_cost low` | stop being clever; scan, advance, and make the hidden actor solve a visible industrial problem |

The machine turns two matchups into doctrine by comparing who owns the shorter clock. If my munition clock is shorter than your track clock, I launch. If my heat clock is shorter than my track clock, I force action before my own concealment collapses. If your point defense tells me more than my spotter cost me, I send the question even when I expect you to answer it.

## The Radiator-Sun Strategy

The "moron strategy" must remain valid. In setting terms it is not actually stupid. It is a doctrine that deliberately refuses the fragile parts of the stealth game.

The build is simple: big reactor, big guns, thick armor, redundant loops, spare control paths, oversized heat capacity, and radiators bright enough to make subtle operators mutter expensive prayers at their procurement screens. It does not win by hiding. It wins by making hiding insufficient.

Its tactical virtues are real:

- It has a huge `heat_clock`, so it can keep fighting after quiet platforms are reaching dump pressure.
- It has low `pd_reveal_cost`, because the enemy already knows where it is. Point defense, active scans, and weapon cycling do not spoil a secret that never existed.
- It has low cognitive complexity. The command stack is not trying to maintain fifteen lies at once; it is sorting threats, holding formation, and putting fire through the largest confirmed problem.
- It punishes fragile loiterers with dense point defense and debris fields even when individual shots are not elegant.
- It forces stealth craft to attack hard targets instead of soft logistics, which often means closing, thrusting, pinging, or spending premium munitions.
- It turns legal compliance into armor. A declared hot assault package can broadcast telemetry and dare the quiet actor to explain why all its little cold objects were already in terminal geometry.

The game-theory point is that brute force changes the opponent's objective function. Against a quiet raider, the raider wants time, ambiguity, selective commitment, and clean escape. The radiator-sun platform denies that by advancing, scanning, and threatening enough volume that waiting becomes its own form of losing. A hidden enemy that never fires has conceded the route. A hidden enemy that fires has entered the visible heat economy.

The strategy fails when the opponent can make the hot platform's obvious dependencies into terminal geometry faster than the hot platform can resolve the threat. Exposed radiators, ammunition barges, reactor trunks, command antennas, and repair tenders become the real targets. This keeps the doctrine from becoming a stat wall. The moron strategy is valid because it compresses the problem, not because it ignores consequences.

### Hot Doctrine Heuristic

```text
if own_heat_clock >> enemy_heat_clock
   and own_pd_reveal_cost is low
   and armor_redundancy absorbs expected small-loiter damage:
       active_scan
       advance
       cycle_point_defense
       force_enemy_commitment
elif enemy_terminal_clock_against_radiators < own_track_clock:
       protect_radiators_or_break_geometry
elif logistics_tail_exposed:
       slow_down_or_screen_support
else:
       keep_shining_death
```

This doctrine is especially important for [[Zhestokost]], frontier siege craft, convoy breakers, and any faction that can afford to make visibility boring. It should feel crude from the outside and disciplined from the inside. The bridge crew is not drooling on the console. They are obeying a doctrine whose whole promise is that fewer subtle decisions can be made faster, audited cleaner, repaired cheaper, and sustained longer.

## Launch Rule

A commander launches a loitering package when:

`first_hit_value * probability_real + pressure_value + pd_reveal_value > launch_cost + exposure_cost + false_positive_cost`

The terminal strike decision can wait until later:

`first_hit_value * probability_hostile > legal_exposure + collateral_risk + munition_loss + retaliation_risk`

This split is the whole point. The launch decision and kill decision are no longer the same decision. That is why loitering munitions dominate unresolved thermal battlespaces.

The historical policy anchor is the [[Callisto Trace Shootdown]]. Conventional interceptors forced escorts to make launch and kill into one commitment while the trace was still unresolved. The post-incident insurer regime rewards munitions that separate those steps: launch into suspicion, inspect from close range, share sensor data, then decide or abort at the last possible instant.

Recoverable and refuelable drone hulls change the economics of that launch decision without changing the local matchup calculus very much. A reusable interceptor, spotter, or loiterer still has to win the same clocks: track, terminal, heat, cognition, mask, and point-defense reveal. What changes is the expected cost of being wrong. If an interceptor can miss, abort, land, refuel, and return to inventory, the commander can rationally launch it on thinner suspicion than a single-use missile. That does not make the launch tactically free. It adds recovery risk, turnaround time, retrieval exposure, inspection labor, fuel and coolant demand, and the possibility that the enemy captures the hull or its logs.

For launch economics, model reuse as a cost offset rather than a new combat clock:

```text
expected_recovery_credit =
  recovery_probability * recovered_hull_value
  - retrieval_exposure_cost
  - turnaround_cost
  - capture_or_evidence_risk

effective_launch_cost =
  launch_cost - expected_recovery_credit
```

The design precedent is visible even in contemporary weapons marketing: Anduril's [Roadrunner](https://www.anduril.com/roadrunner) is sold around the idea that an autonomous interceptor can be recovered and reused when it does not spend itself. Aetheria should treat that as a capability flag on the hull or launcher, not as a separate weapon species.

## Basic Payoff Matrix

Attacker choices assume a faint trace at range: enough to suspect, not enough to identify.

| Attacker / Defender | Defender stays quiet | Defender maneuvers | Defender releases decoys | Defender fires point defense |
| --- | --- | --- | --- | --- |
| Wait for resolution | Defender may escape, dump, or fire first. Attacker preserves legality but loses tempo. | Attacker gains resolution but may be late. | Attacker may resolve the wrong object. | Attacker gains location data if alive. |
| Active scan | Track improves fast. Attacker lights itself up. | Track improves; both sides now visible. | Scanner may classify decoys, but becomes targetable. | Point defense plus scan creates a hot public event. |
| Launch spotters | Slow pressure. Parent stays quieter. | Spotters may force motion and improve parallax. | Spotters split attention and may waste time. | Defender reveals capability by killing cheap assets. |
| Launch loitering munitions | Best tempo. Weapon reaches geometry before certainty. | Munition may already be close enough for terminal correction. | Munition can be wasted on false heat unless supported by spotters. | Defender must choose between revealing and risking first hit. |
| Launch mixed cloud | Highest option value, highest cost. | Best response to maneuver. | Best response to decoy fields. | Forces defender to disclose doctrine under pressure. |

The equilibrium is ugly and stable: both sides prefer unresolved objects because certainty is expensive and often arrives too late.

## Artifact A: No-Drone Baseline

Scenario: quiet raider stalks a convoy in a pre-shield late-Sol corridor. Both sides have passive sensors, active scanners, and conventional missiles.

| Turn | Raider State | Convoy State | Result |
| --- | --- | --- | --- |
| 0 | Raider coasts cold, `H=45`, `S=6`. | Convoy radiates predictably, `S=38`. | Raider sees first. |
| 1 | Raider waits for identification. | Convoy sensor net catches a faint transient, `R=18`. | Both sides have suspicion, neither has commitment. |
| 2 | Raider charges weapon, `S=22`. | Convoy active-scans, `S=55`, `R=46`. | Convoy improves track but exposes itself. |
| 3 | Raider fires from partial solution. | Convoy launches point defense and maneuvers, `S=72`. | First hit probability is high for raider, but firing solution is brittle. |
| 4 | Convoy survives or dies based on one compressed exchange. | Legal record is clear enough to price. | Combat is decisive but tactically thin. |

Doctrine implication: without drones, the engagement collapses into a short race between detection, active scan, and first launch. It is lethal, but less interesting. The first platform to accept exposure usually controls tempo.

## Artifact B: Spotter-Only Cloud

Scenario: the convoy uses passive spotter drones before entering a suspected ambush region.

| Turn | Raider State | Convoy State | Result |
| --- | --- | --- | --- |
| 0 | Raider coasts cold near a likely radiator dump lane. | Convoy has three cold spotters offset by wide baseline. | Convoy has distributed eyes without increasing parent `S`. |
| 1 | Raider detects one spotter but not the parent geometry. | Spotters improve `R` from 18 to 34. | Raider must decide whether killing the spotter is worth reveal. |
| 2 | Raider releases a cold sink to split tracks. | Spotters disagree: one follows sink, two hold original. | False targets buy time but not safety. |
| 3 | Convoy active-scans from a spotter, not the parent hull. | Raider sees the illuminator, not the command ship. | Scan cost is externalized into expendable mass. |
| 4 | Raider fires at the spotter or breaks. | Convoy parent remains less resolved. | Spotters turn detection into survivable ambiguity. |

Doctrine implication: spotters improve survival, but they do not by themselves solve terminal timing. They are eyes without teeth unless paired with weapons or relays.

## Artifact C: Loitering-Munition Dominance

Scenario: the raider launches on suspicion before resolving the convoy's valuable body.

| Turn | Raider State | Convoy State | Result |
| --- | --- | --- | --- |
| 0 | Raider detects scheduled convoy emissions, `R=22`, `C=40`. | Convoy enters corridor with decoy heat schedule. | Trace is plausible but unresolved. |
| 1 | Raider launches two cold loitering munitions, `L=35`, parent `S=9`. | Convoy does not yet know which trace matters. | Raider buys geometry without full exposure. |
| 2 | Convoy releases service drones and a heat ferry. | Loiterers adjust passively; `R=38`, `C=48`. | The cloud now has too many possible truths. |
| 3 | Convoy kills one loiterer with point defense, `S=63`. | Raider's surviving loiterer gains location from intercept geometry. | Defense reveals the thing it protects. |
| 4 | Raider pings with a sacrificial illuminator. | Convoy maneuvers to protect the crewed hull. | Maneuver distinguishes decoy from value. |
| 5 | Surviving loiterer commits terminally. | Convoy point defense is hot and partly spent. | First hit lands if terminal correction beats final spoof. |

Doctrine implication: loitering munitions are strong because they force the defender to answer before the attacker has perfect information. The defender's answer becomes part of the attacker's sensor stack.

## Artifact D: Mixed Cloud Against Decoy Doctrine

Scenario: a mature convoy expects loitering attacks and travels with false thermal histories.

| Turn | Attacker Cloud | Defender Cloud | Result |
| --- | --- | --- | --- |
| 0 | Two spotters, two loiterers, one heat-ferry decoy. | Three service drones, two cold sinks, one low-signature interceptor. | Both sides enter with unresolved objects. |
| 1 | Spotter A follows the strongest heat trace. | Defender sink blooms like an overworked radiator. | Attacker is invited to kill the wrong future. |
| 2 | Loiterer B shadows a weaker trace instead. | Defender interceptor kills Spotter A, revealing `P`. | Loss gives attacker doctrine data. |
| 3 | Attacker heat-ferry decoy dumps away from the fight. | Defender briefly tracks it as possible parent hull. | Attacker buys time with a fake mistake. |
| 4 | Spotter C performs short active pulse. | Defender splits: convoy body maneuvers, decoy continues. | Value and decoy diverge. |
| 5 | Loiterer B commits against maneuvering body. | Defender spends final interceptor. | Outcome depends on whether the defender preserved enough hidden point defense. |

Doctrine implication: the best cloud is not a swarm of identical weapons. It is a portfolio of questions. Homogeneous swarms are easier to classify and price; mixed clouds keep the enemy making doctrinal admissions.

## Artifact E: PSC-Regulated Engagement

Scenario: a licensed corporate interdiction uses declared loiter packages under corridor law.

| Requirement | Tactical Effect | Perverse Incentive |
| --- | --- | --- |
| Geofenced loiter zone | Reduces collateral and permit cost. | Targets maneuver toward protected edges. |
| Self-neutralization clock | Limits persistent hazard. | Attackers launch earlier to preserve terminal time. |
| Compliance telemetry | Makes post-action settlement possible. | Telemetry drones become high-value legal targets. |
| Declared autonomy class | Clarifies command responsibility. | Operators hide agency in "sensor fusion" layers. |
| Registered heat behavior | Discounts lawful packages. | Covert packages imitate lawful thermal grammar. |

Doctrine implication: regulation does not remove loitering munitions. It teaches them to wear paperwork. The legal version is cleaner, more expensive, and still terrifying.

## Artifact F: First-Hit Lethality Threshold

Loitering munitions become decisive when four thresholds overlap:

| Threshold | If Low | If High |
| --- | --- | --- |
| First-hit lethality | Defender can absorb mistakes; loitering is harassment. | Defender must answer every credible object. |
| Identification delay | Conventional fire control is enough. | Prepositioned weapons dominate. |
| Point-defense reveal cost | Defender shoots freely. | Every interception leaks value. |
| Legal exposure cost | Everyone fires early. | Drones carry option value because terminal commitment can be delayed. |

This is the Aetheria sweet spot: high first-hit lethality, high identification delay, high point-defense reveal cost, and high legal exposure. Under those conditions, loitering munitions are not a flavor of missile. They are the rational middle layer between sensor and shot.

## Artifact G: Two-Matchup Heuristic Output

This is the minimum useful output format. Take two possible matchups, reduce each to clocks, then pick doctrine.

### Matchup 1: Quiet Raider Versus Merchant Convoy

| Clock / Check | Raider | Convoy |
| --- | --- | --- |
| `signature_now` | low; radiators suppressed | moderate; routine convoy heat |
| `masked_signature` | maintenance drone / cold junk plausible | bulk freighter plausible but valuable body ambiguous |
| `passive_track_rate` | high against convoy heat | low against raider mask |
| `active_scan_exposure` | costly; breaks ambush | costly; exposes convoy geometry |
| `heat_clock` | short; raider is borrowing silence | long; convoy can radiate legally |
| `munition_terminal_time` | medium if launched now | long unless escorts already have interceptors out |
| `munition_loiter_time` | long enough to wait through one convoy reaction | escort interceptors short but fast |
| `pd_reveal_cost` | low for raider if using expendable package | high for convoy; point defense reveals protected hull |
| `mask_credibility` | good until raider maneuvers or charges | good if convoy has decoy service traffic |

Heuristic output:

The raider should launch loiterers before full resolution, then force the convoy to distinguish the valuable body through reaction. Waiting loses because the raider's `heat_clock` is shorter than its perfect-identification clock. The convoy should avoid immediate point defense unless terminal geometry is confirmed; it should release decoys, alter formation slowly, and make the loiterer's `loiter_margin` expire before firing hot.

### Matchup 2: Hot Assault Group Versus Quiet Picket

| Clock / Check | Hot Assault Group | Quiet Picket |
| --- | --- | --- |
| `signature_now` | high and honest | very low |
| `masked_signature` | poor; nobody mistakes the radiator wall | strong; can look like debris or service noise |
| `passive_track_rate` | low against picket | high against assault group |
| `active_scan_exposure` | acceptable; already visible | dangerous; ruins picket value |
| `heat_clock` | long; radiators and mass support endurance | short to medium; silence is finite |
| `munition_terminal_time` | short for heavy guided packages once bearing exists | medium; light weapons may not stop assault mass |
| `munition_loiter_time` | medium; heavy packages are not patient | long; small cold packages can wait |
| `pd_reveal_cost` | low; assault group is already declared | very high; picket survives by not confessing location |
| `mask_credibility` | low | high until forced to maneuver |

Heuristic output:

The assault group should active-scan, flood probable approaches with spotters, and accept visibility because it has a long `heat_clock` and low `pd_reveal_cost`. It does not need elegance; it needs to shrink the picket's mask space. The picket should not trade shots. It should use cold loiterers, false tracks, and relay drones to delay assault resolution while threatening support assets. If the picket's `terminal_clock` against the assault group's vulnerable radiators is shorter than the assault group's `track_clock`, it attacks. If not, it leaves.

### Machine Output Template

```text
if loiter_margin > track_clock and terminal_clock < enemy_track_clock:
    launch_loitering_package_now
elif heat_clock < track_clock:
    force_reaction_or_disengage
elif mask_credibility > enemy_classification_power and enemy_active_scan_exposure_high:
    decoy_and_bleed_time
elif own_track_clock < enemy_terminal_clock:
    classify_then_commit
else:
    reposition_or_spend_active_scan
```

The important property is not numerical precision. The important property is that the same variables can explain AI behavior, equipment value, faction doctrine, and lore. A ship with better `SignatureMasking` buys classification delay. A munition with better `LoiterTime` turns that delay into threat. A fleet with better radiators can ignore subtlety and make everyone else solve the ugly visible problem.

## Doctrine Results

1. The dominant late-Sol package is mixed: passive spotters, relay nodes, heat ferries, decoys, illuminators, low-signature interceptors, and loitering munitions.
2. Pure stealth is weaker than managed ambiguity. A cold ship with no external objects has only one body to lose.
3. Pure swarm saturation is politically and thermally expensive. Homogeneous mass works for desperate actors, poor actors, or legal systems already failing.
4. The best operators launch before certainty, then use the enemy's defensive reactions to manufacture certainty.
5. Point defense becomes an intelligence decision, not only a weapons decision.
6. Convoys survive by making the valuable body non-obvious, not by making every object invisible.
7. PSC law creates drone classes, telemetry rituals, and insurance discounts, but also teaches covert actors what lawful behavior looks like well enough to imitate it.
8. The Post-Elysium shield era changes terminal survivability, but keeps the same decision structure: unresolved objects still force reactions, and reactions still leak truth.

## Factional Reads

- [[Zhestokost]] uses drones reluctantly but competently: rugged spotters, compliance relays, interceptor screens, and heavy loiterers that support visible advance rather than replace it.
- [[Cryonix]] sells premium cold loiterers, signature-managed skins, and heat-ferry platforms whose value is not explosive yield but how long they can remain a question.
- [[Pan-Solar Consortium]] prices loiter packages through autonomy class, geofence, thermal profile, telemetry integrity, and neutralization clock.
- [[Pirate Coalition]] favors Remora drones with non-destructive subsystem payloads, false service traffic, salvage-preserving loiterers, and packages that force surrender, boarding, or ejection without ruining cargo.
- [[Aya Collective]] and [[Cetacean Navigators]] bias toward interceptors, rescue relays, pod shielding, decoy convoy logic, and point defense that protects lives without turning corridors into indiscriminate hazard fields.
- [[Sol Dominion]] likes the administrative version: predictive launch authorization, command-authenticated drone clouds, lawful-looking escalation, and telemetry that proves obedience while hiding coercion.

## Open Questions

- How long can a cold loiterer remain tactically useful before station-keeping, computation, and sensor work make it visible?
- What is the minimum autonomy needed for terminal commitment under communication delay, jamming, and legal audit?
- Which factions allow a loitering munition to decide that a trace is hostile without human confirmation?
- How do rescue beacons, surrender codes, and pod telemetry interact with loitering munitions already in terminal geometry?
- What Post-Elysium shield signatures become equivalent to thermal dump windows?
