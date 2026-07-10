# Combat Model

## Purpose And Authority

This document specifies Aetheria's deterministic **heuristic combat kernel**. It is a second execution model by design: a fast approximation of the frame-by-frame full simulation used for live gameplay. The fine-grained live simulation is the reference ground truth. The daemon kernel resolves offscreen combat and runs balance or training batches many times faster than realtime.

Compatible native combat state crosses between the two execution models. While a battle is observed, the frame-by-frame loop owns advancement. While it is offscreen, the daemon kernel owns advancement. Clocks and tactical summaries are derived inside the heuristic model; they do not independently write either simulation's state merely because a forecast expired.

The model is idealized, not impoverished. It omits continuous collision geometry, individual projectile paths, and cosmetic motion while preserving the decisions those systems make important: whether a track resolves in time, whether a firing solution remains valid, where heat and cognition are spent, what a munition can still reach, and which subsystem takes the first meaningful hit.

## Smallest Useful Machine

The smallest machine that turns two matchups into a tactical heuristic has six parts:

1. Two native platform states instantiated from manufactured items and loadout blueprints.
2. One shared environment and initial geometry.
3. One policy per side mapping its observation state to an order bundle.
4. The daemon kernel's fast transition function.
5. A clock-based policy and explanation surface operating on observation-compatible state.
6. A paired fine-grained run used to measure heuristic error where conformance is being tested.

Run policy A against policy B, then swap one doctrine, blueprint, manufactured instance set, supply chain, or opening condition and run again. The useful output is not a scalar combat rating. It is a **clock card**:

`advantage = earliest credible own effect - earliest enemy interruption`, with signs reported separately for track, terminal, heat, cognition, economic, and escape pressure.

A tactic is locally favored when its decisive effect matures before the opponent can interrupt it and when the margin survives one plausible counterfactual. The heuristic should say, for example, “recoverable PDC pressure wins the track clock by 41 seconds against a sparse picket screen, but loses the recovery/terminal clock by 73 seconds against heterogeneous bait with lane loiterers.” It should not say “drone build: 82.”

The kernel uses those clock estimates to advance abstracted combat and choose policy actions; they are therefore part of the heuristic simulator rather than a separate spectator model. The conformance harness compares the kernel's predicted clocks, decisions, state deltas, and outcome against a paired fine-grained run. A kernel that narrates the completed live trace perfectly but cannot make the right abstract decision in time has still failed.

## Blueprint, Manufacture, And Scenario Authority

Scenario variety must be expressed through Aetheria's economy and crafting state rather than scenario-local stat blocks.

A **blueprint** expresses a technology: an arrangement of components, behavior relationships, manufacturing tolerances, and performance derivations that makes a thing happen. Its history may include a corporate patent, licensed implementation, proprietary control, public-domain release, theft, expiry, or independent discovery. Two legally unrelated blueprints may implement similar technology without becoming the same commercial object.

A blueprint is not a branded good and not an individual weapon. A **manufactured item instance** is the actual hull, radiator, sensor, gun, cognition core, drone component, or complete product that enters inventory and combat. Brand, model presentation, quality, durability, substitutions, defects, serial history, and chain of custody belong to the instance or its manufacturing record, not to a proliferation of near-identical item-data definitions.

The instance's crafting recipe is its supply-chain provenance. It records the blueprint revision used, actual component and commodity inputs, input instance or lot identities, producer, facility, manufacturing run, substitutions, process quality, licensing claim, timestamps, and resulting performance. A pristine licensed Cryonix emitter and a pirate-built emitter derived from the same leaked arrangement can share technological ancestry while producing materially and legally different instances.

Pass 5 requires a database fixture population with enough variety to express every doctrine through native objects:

- component technologies and blueprint revisions;
- patent, license, proprietary, public-domain, and independent-discovery relationships;
- corporations, yards, workshops, and illicit producers;
- commodity lots and component instances with quality and provenance;
- manufacturing recipes and runs producing branded and unbranded item instances;
- complete ship and small-hull loadout blueprints referencing those instances;
- maintenance, damage, ammunition, propellant, and thermal starting state;
- scenario, policy, and observation fixtures referencing durable native IDs.

The population should be deliberately factorial where useful. A doctrine must be testable with the same blueprint manufactured well or badly, competing blueprints built from similar inputs, and one branded line produced through different supply chains. This distinguishes technology advantage, arrangement advantage, manufacturing quality, maintenance condition, and market access.

No candidate doctrine receives bespoke “Hot gun,” “stealth drone,” or “premium cognition” item data merely to make a scenario work. If a capability cannot be assembled from the database's technologies, blueprints, recipes, instances, and loadouts, the content model is incomplete.

## Determinism Contract

- Time advances in fixed 250-millisecond combat quanta. Long quiet intervals may be skipped to the next scheduled event only when the same transition order and integer tick result are preserved.
- All quantities use fixed-point integers in declared units. No platform-dependent floating-point branch may decide an outcome.
- Entity, component, contact, order, and event iteration use stable identifiers and explicit sort order.
- There is no hidden random roll. A scenario contains physical truth, noise sources, initial errors, and adversarial patterns. Sensors deterministically produce observations from them.
- A seeded scenario generator may create varied initial states for bulk training, but the seed is part of the scenario identity. Replaying the same state and orders produces the same trace.
- Simultaneous effects resolve by phase, then declared priority, then stable entity ID. Priority is a rule of the model, not a covert initiative roll.
- Policies may be deterministic models or recorded action tapes. Stochastic training policies must publish the sampled action before transition; the kernel remains deterministic given that action.

## Canonical State

### Scenario State

| Field | Meaning |
| --- | --- |
| `tick` | Integer 250 ms quantum. |
| `environment` | Background radiance by band and bearing, occlusion, debris, gravity, traffic, legal zones, and communication latency. |
| `objectives` | Capture, destroy, protect, transit, escape, identify, rescue, or delay conditions. |
| `truth_entities` | Actual platforms, small hulls, projectiles, sinks, debris, and civilians. |
| `faction_observations` | What each side currently believes, including unresolved and false contacts. |
| `event_queue` | Launch completion, weapon cycle, lock maturation, impact, recovery capture, service completion, heat dump, and other delayed effects. |
| `ledger` | Ammunition, consumables, damage, casualties, legal exposure, recoverable assets, and committed replacement cost. |

### Platform State

Every ship, drone, mine, relay, beacon, Remora, heat ferry, spotter, interceptor, and loitering munition is the same kind of component-built platform. Role is current capability plus orders, not hull caste.

| Domain | Stateful values |
| --- | --- |
| Geometry | position, velocity, facing, angular rate, acceleration limit, propellant, maneuver reserve, docking relation |
| Structure | hull cells, armor, durability, compartment state, redundancy graph, crew/cognition locations |
| Power | reactor output, reactor load, capacitor charge, conversion efficiency, bus limits, priority mode |
| Thermal | component temperatures, thermal mass, conductivity edges, loop capacity, stored heat, sink state, radiator area/emissivity/aspect |
| Signature | emitted power by band and bearing, reflected/active return, thrust history, telemetry, claimed identity, shaping envelope |
| Sensing | sensitivity by band, aperture, scan mode, angular resolution, active power, noise rejection, information retention |
| Cognition | quality, available throughput, task queue, load, latency, architecture, adversarial exposure, confidence calibration |
| Weapons | mount state, ammunition, charge, reload, lock, range, cycle, projectile velocity, heat, recoil/signature, fire-control assignment |
| Small hull operations | launch lanes, recovery throats, service rails, cooling ports, magazine/fuel couplings, queue, task package |
| Control | current policy, orders, authority limits, surrender state, evacuation state, communication links |
| Economics | acquisition cost, launch cost, service cost, recoverable value, insurer exposure, evidence burden |

### Component State

The common native layer is retained: mass, size, draw, thermal conductivity, specific heat, temperature-performance curve, ruggedness, durability, hardpoint location, quality, and behavior payloads. A component also carries current temperature, current durability, supplied power, assigned cooling, behavior progress, and operational mode.

This keeps three important truths alive. Heat is local before it is global. Damage removes capabilities according to placement rather than a generic health bar. Premium integration can improve ordinary performance while concentrating service or failure paths.

## Observation And Track State

Physical truth and believed truth are separate. Each faction stores contacts, not privileged entity references.

| Field | Meaning |
| --- | --- |
| `contact_id` | Observer-local identity; several contacts may describe one object or one contact may conflate several. |
| `state_estimate` | Estimated position, velocity, acceleration, covariance envelope, and timestamp. |
| `existence_confidence` | Confidence that a physical object exists. |
| `class_distribution` | Weighted plausible roles or hull envelopes. |
| `identity_claims` | Telemetry, legal identity, behavior history, and contradictions. |
| `subsystem_estimates` | Possible sensors, weapons, drives, thermal plant, cognition, cargo, and damage. |
| `solution_quality` | Whether a weapon can be placed where fire control intends at arrival time. |
| `adversarial_flags` | Evidence of shaping, replay, cognitive exploit, compromised relay, or bait. |

Information decays when unsupported. Position uncertainty expands according to the contact's plausible maneuver envelope. Class and identity confidence decay according to observation age, contradiction, and known shaping capability. A cold ballistic object may remain positionally predictable while becoming less classifiable; a high-thrust contact may remain obvious while its future position becomes uncertain.

## Cognition Across The Stack

Cognition is not one initiative bonus. Every cognitive task consumes throughput and has a quality requirement, deadline, and consequence for lateness.

| Task | Better cognition changes |
| --- | --- |
| Sensor processing | Detects weaker structure, rejects clutter, fuses bearings, and preserves useful information longer. |
| Classification | Maintains more hypotheses, recognizes bounded signature lies, and calibrates confidence. |
| Electronic warfare | Identifies architecture-specific bait, constructs adversarial emissions, and limits contamination. |
| Command | Evaluates more action branches before the commitment deadline and notices policy contradictions. |
| Fire control | Cycles more engagements **on target**: higher assignment throughput and higher solution quality at shot release. |
| Guidance | Preserves intercept options, coordinates observations, evades defenses, and times thrust expenditure. |
| Terminal discrimination | Decides whether to abort, which object is real, and which subsystem produces the desired result. |
| Damage control | Diagnoses coupled failures, allocates power and cooling, and preserves essential control paths. |

At every tick, tasks are ordered by explicit doctrine and deadline. Available work is:

`work = quality_factor × healthy_compute × power_factor × thermal_performance × link_factor`.

Load is queued demanded work divided by available work. Above load 1.0, low-priority work waits. Deadline misses reduce track updates, firing-solution freshness, guidance options, or command branch depth according to the task that starved. Architecture-specific adversarial patterns add contaminated work and may bias a result if they cross the architecture's resistance threshold. More cognition helps until power, heat, bandwidth, or service dependencies become the shortest clock.

Human command remains meaningful because authority decides objectives, acceptable risk, and refusal boundaries. It cannot personally adjudicate millisecond terminal choices. Those choices are delegated through policy envelopes whose quality is itself part of the build.

## Signature And Masking

Emission shaping is available only after the Cold Wake material threshold. It never invents arbitrary energy or motion.

For each observation band and bearing, a platform has a **physical emission envelope** derived from current temperature fields, radiator geometry, thrust history, surface controls, stored heat, active emitters, and any detached thermal carriers. A claimed signature is feasible only if:

- emitted energy remains within the platform's routable power and heat;
- apparent direction fits surface and radiator steering limits;
- apparent motion fits actual or relay-supported geometry;
- temporal history can be produced without exceeding storage, sink, or actuator limits;
- mandatory leakage and prior observations do not make the claim impossible.

`mask_check(observer, contact, claim)` is deterministic. It returns four values:

1. physical feasibility of the claim;
2. observer-relative residual after noise and aspect;
3. cognitive work required to test the claim;
4. whether architecture-specific adversarial structure enters the observer's processing path.

A heat ferry may spend carried heat to perform a wounded ship, radiator dump, drive transient, or several lower-energy objects. A hiding ship may imitate a plausible cousin within its envelope. Neither can perform a cold rock while thrusting hard in full view. Repeated observations consume the lie's degrees of freedom, which is why distributed sensors and patient loiterers matter.

## Fire Control And Weapons

Fire control has two distinct outputs:

- **throughput:** how many mounts, bursts, targets, and correction cycles can be scheduled;
- **solution quality:** whether each round travels through the intended intercept volume when it arrives.

Ballistic weapons export stored mass, momentum, and much of their energy generation. Their shipboard costs are ammunition mass, recoil handling, magazines, loading labor, and firing signature. Energy weapons create precision at light-speed or near-light-speed engagement scales by paying reactor, capacitor, optical, and heat costs aboard the firing platform. Particle beams, plasma devices, and laser-ion-channel lightning occupy different points on the same power/heat/precision argument rather than becoming free “energy damage.”

A shot event records target contact, aim volume, solution age, projectile or beam properties, fire-control quality, and intended effect. At impact, actual geometry determines whether the effect intersects. Cognition does not curve a ballistic round after firing; it improves the solution and, for guided hulls, later decisions.

Guided small hulls retain thrust as a time-distributed option. Every terminal engagement is a game over when to spend the last maneuver reserve. Early expenditure tightens intercept and may defeat a current dodge; retained reserve preserves response to a later countermaneuver. Guidance quality controls how many future branches remain viable and how accurately the munition infers the defender's reserve. At terminal range, sufficient discrimination and control can redirect from generic hull intersection to reactor controls, radiator roots, sensors, datanet, life support, crew spaces, or other task-relevant subsystems. Poor discrimination produces armor splash, wrong-target impact, or an abort after the useful window.

## Damage, Capture, And First-Hit Lethality

There are no shields in this period. A penetrating first hit can be lethal, but armor, compartmentation, redundancy, geometry, and damage control determine what “lethal” means and how quickly it becomes irreversible.

Impact resolves against the intersected hull cell and path:

1. armor and sacrificial structure absorb or redirect effect;
2. residual effect damages components, conductors, coolant, data, atmosphere, or occupants along the path;
3. the redundancy graph recomputes available capability;
4. new heat, power faults, signatures, casualties, and control latency enter state;
5. surrender, evacuation, rescue, or autonomous continuation policies reevaluate.

Remorae use the same process with attachment and subsystem payloads. Their design objective is non-destructive seizure: make resistance or habitation fail while preserving the prize. Reactor interference, life-support pressure, datanet intrusion, sensor blinding, safing attacks, and crew-environment dosing are distinct payload effects with different moral and material risks.

## Transition Order

Each tick resolves in this order:

1. **Admit orders:** validate authority, communication, component availability, and policy envelopes.
2. **Allocate cognition:** enqueue sensing, classification, EW, command, fire-control, guidance, and damage-control work.
3. **Allocate power and cooling:** apply priorities, bus limits, coolant routing, and thermal performance curves.
4. **Advance motion:** thrust, propellant use, attitude, ballistic movement, docking and recovery approach.
5. **Emit and observe:** produce physical signatures, apply feasible shaping, gather passive and active observations.
6. **Update contacts:** fuse evidence, decay unsupported information, run mask checks, update firing solutions.
7. **Advance behaviors:** charge, lock, reload, launch, loiter, guide, radiate, pump heat, service, and repair.
8. **Resolve due effects:** beams, projectile intersections, attachment, collision, cyber arrival, and subsystem damage.
9. **Recompute networks:** power, thermal, data, atmosphere, control, redundancy, and communication connectivity.
10. **Apply consequence:** casualties, surrender, evacuation, rescue status, legal evidence, expenditure, recoverability, and objective state.
11. **Derive clocks:** forecast pressure from the resulting state for explanation and policy input.

Damage due during phase 8 does not retroactively cancel a shot released earlier in the same tick. It does affect all later phases and the next tick. This makes simultaneity inspectable.

## The Six Clocks

Clocks are forecasts under current policy and known state. Each reports time, confidence, cause, and the event that would invalidate it.

### `track_clock`

Time until a contact reaches the information threshold required by the contemplated action: existence, intercept, class, equipment, identity, or legal confidence. It depends on visibility, sensor sensitivity, baseline, information decay, mask residual, cognition allocation, and target maneuver.

### `terminal_clock`

Time until an already launched or immediately launchable effect reaches an irreversible commitment point or target. It includes launch readiness, travel, remaining thrust, defender countermaneuver, point-defense opportunity, guidance cognition, and terminal discrimination.

### `heat_clock`

Time until a component, loop, crew environment, or signature posture crosses a chosen threshold. Several heat clocks coexist: loss of quiet, performance degradation, damage, forced dump, crew casualty, and recovery rejection.

### `cognition_clock`

Time until queued work misses a tactically relevant deadline, contaminated processing crosses resistance, or a cognition-dependent capability thermally/power throttles. It explains why “smarter” can still lose to saturation or architecture-specific bait.

### `economic_clock`

Time or event count until the policy's expected recoverable value falls below expenditure, replacement exposure, insurer penalty, dependant obligations, or campaign runway. Recoverability changes this clock after launch; it does not grant extra muzzle velocity, armor, or immediate tactical power.

### `mask_check`

This is a test rather than a countdown. The clock card records time until repeated evidence is forecast to make the current performance infeasible or cognitively resolved.

An escape/capture deadline is reported as an objective constraint on these clocks rather than a seventh universal clock. If the prize reaches a protected berth in eight minutes, every useful clock is judged against eight minutes.

## Orders And Policies

An order bundle may set:

- maneuver objective and reserve floor;
- emission and radiator mode;
- sensor allocation and active-ping authority;
- contact confidence thresholds;
- cognition task priorities and contamination limits;
- weapon assignment, release threshold, and intended subsystem effect;
- small-hull role, autonomy, loiter box, recovery rule, and self-neutralization;
- surrender, rescue, capture, abort, and evacuation boundaries.

Policies act only on faction observation state plus their own internal state. They cannot inspect truth entities. This allows the kernel to produce both its omniscient internal trace and the partial observation stream used to train a decision model; paired live simulation remains the conformance ground truth.

## Outcome Vector

Every run returns:

| Dimension | Measures |
| --- | --- |
| Objective | capture, destruction, escape, delay, identification, rescue, or protection achieved |
| Survival | people, shipminds, hulls, and critical subsystems surviving or recoverable |
| Information | track thresholds reached, false commitments, evidence preserved, architecture compromise |
| Material | ammunition, propellant, sinks, drones, damage, repair labor, prize condition |
| Thermal | peak temperatures, forced dumps, quiet time consumed, damaged loops |
| Cognition | work completed, deadline misses, saturation, contamination, throttling |
| Economic | direct cost, recoverable assets, insurer exposure, replacement delay, campaign runway delta |
| Conduct | surrender timing, post-disable effects, rescue response, consent and authority violations |

The tactical heuristic is lexicographic by scenario objective and conduct boundary, then weighted by campaign policy. A pirate does not maximize destroyed tonnage when the objective is an intact prize. Luce's life-over-property invariant is a hard constraint, not a sentimental utility bonus.

## First-Hull Mapping

_The Sum of Our Parts_ enters Pass 5 with the following model commitments:

- sixteen Courtesy platforms with 38 minutes high-thrust endurance, 3.5 hours low-thrust loiter, ninety controlled bursts, 410 MJ usable thermal sink, and a 96 MJ recovery reserve;
- four launch/recovery throats, two service rails, four concurrent service positions, and shared coolant/magazine/fuel infrastructure;
- two capture cannon, twelve hull PDC mounts, eight configurable Remorae, six passive pickets, and four relay/illuminator hulls;
- premium sensing, cognition integration, fire-control throughput, and crew practice;
- finite Pal, Sable, and Twelvefold cognition connected by links that can saturate, heat, fail, or be distrusted;
- no shields, no immunity to a correctly placed first hit, and no cognitive method for manufacturing physical service capacity.

Exact normalized component values belong to Pass 5 scenario cards. Pass 4 fixes meanings and transition rules so later tuning changes numbers rather than ontology.

## Dual-Simulation Boundary

Both execution models consume Aetheria's typed catalog, economy, crafting, and compatible entity state:

- item references, hull grid, equipment slots, weapon groups, behavior payloads, stat grids, temperature, armor, durability, velocity, target state, visibility, behavior progress, weapon state, and cargo/docking state remain native inputs;
- cognition, signature shaping, observation contacts, small-hull autonomy, service topology, conduct state, and campaign economics are additive typed state where the current game lacks the mechanic;
- blueprints own technological arrangements and derivation rules; manufacturing recipes own provenance; item instances own the actual material incarnation used by the entity;
- the frame-by-frame full simulation owns advancement while a battle is live and observed;
- the daemon heuristic kernel owns advancement while a battle is offscreen;
- promotion to live simulation materializes fine-grained game-world state from a kernel synchronization checkpoint;
- demotion to offscreen simulation projects live state into the kernel at a synchronization checkpoint;
- changing observation may change execution model, rendering, and available player input, but must not create a tactically advantageous discontinuity.

The conformance harness runs paired scenarios and records three synchronized products:

1. the fine-grained frame-by-frame trace and final state;
2. the daemon kernel's abstract state transitions, clocks, decisions, and final state;
3. each actor's observation stream and issued orders under both execution models.

Tests score kernel replay determinism, state-transition error, clock error, confidence calibration, action divergence, time-to-kill or capture error, damage-location error, resource-consumption error, conduct-boundary agreement, and final-outcome agreement. Exact frame agreement is neither expected nor useful; tactical invariants and bounded aggregate error are. Promotion and demotion tests must prove that repeated observation changes cannot heal damage, duplicate ammunition, reset heat, reroll a decision, lose provenance, or alter an already committed event.

Bulk kernel runs populate balance and decision-training datasets from native instance IDs and provenance, allowing results to be grouped by blueprint, manufacturer, recipe input, quality, doctrine, or condition without confusing those categories. The performance target is many times faster than realtime with hundreds of concurrent battles across the local galaxy. This is infrastructure for Aetheria's large strategic/RTS game, not the scoped [[Aetheria Starbridge]] mode and not merely a restatement of the older `Profits Rising` document.

## Mechanics Development Contract

New combat mechanics normally begin in the heuristic kernel because it is cheap enough to explore rather than merely validate. The development sequence is:

1. propose native state, orders, candidate invariants, and observable consequences;
2. implement the candidate mechanic in the heuristic kernel;
3. use fast batches, matchup sweeps, and counterfactuals to compare game-design options;
4. lock the desired dynamics, material costs, counterplay, and state contract;
5. build the mechanic as fine-grained animated game-world behavior in the live simulation loop;
6. add paired conformance fixtures across ordinary, edge, damage, and observation-transition cases;
7. tune abstractions where necessary without teaching the kernel scenario identities or bypassing manufacturing provenance.

Before the live implementation exists, heuristic results are design experiments rather than claims about frame-level reality. Once the desired dynamics are accepted, they become the implementation target for the live simulator. Once that simulator exists, it becomes execution ground truth: unexpected fine-grained consequences may force an honest revision of the mechanic or the heuristic rather than being averaged away.

A mechanic is strategically complete only when both execution models exchange its state and their divergence is characterized. The kernel should preserve accepted decisions and material consequences, not imitate every projectile frame.

The abstraction boundary is deliberate: continuous presentation may interpolate positions and effects, while every decision-bearing event is committed on deterministic ticks and can be replayed from state plus orders.
