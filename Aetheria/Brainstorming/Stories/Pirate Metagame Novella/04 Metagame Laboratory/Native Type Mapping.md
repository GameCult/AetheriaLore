# Native Type Mapping

## Sources Inspected

Pass 4 inspected the Aetheria typed runtime and behavior surfaces alongside [[Heat, Stealth, and Detection]], [[Ship-shape and Up to Specs]], [[Combat Doctrine]], and [[Thermal Signature Warfare]].

The current implementation already exposes more useful combat state than a conventional aggregate wargame model would preserve. The novella workbench adopts that shape rather than inventing a detached spreadsheet ontology.

## Existing Native Inputs

| Native surface | Model use |
| --- | --- |
| Item mass and specific heat | Thermal mass, maneuver burden, ammunition and logistics cost |
| Conductivity and hull grid | Local heat flow, component neighborhood, damage paths |
| Minimum/maximum temperature and thermal performance curve | Output degradation and thermal failure |
| Durability, armor, thermal resilience | Penetration, wear, heat damage, repair state |
| Reactor draw/load | Power allocation and signature |
| Capacitor charge/capacity/efficiency | Burst energy and recharge clock |
| Radiator temperature, emissivity, pumped and waste heat | Heat rejection and directional signature |
| Sensor ping state, radius, cooldown, contact count | Active sensing behavior and reveal cost |
| Visibility and visibility-source count | Observation input, never sufficient identification by itself |
| Weapon cooldown, charge, reload, ammunition, lock and target | Fire-control and terminal readiness |
| Turret shot speed and predictive-aim flag | Solution model and ballistic arrival |
| Thruster input, thrust and torque | Maneuver envelope, propellant demand, signature history |
| Equipment/cargo/docking slots and child entities | Small-hull inventory, launch relation and recoverability |
| Armor, temperature and other stat grids | Component-local damage and heat rather than one hull bar |
| Target persistence and information decay settings | Contact aging and confidence thresholds |

## Additive State Needed

| New surface | Why the current state is insufficient |
| --- | --- |
| Observer-local contact hypotheses | An entity target reference cannot represent uncertainty, conflation, false contacts, or competing classifications. |
| Cognition task queues and architecture | Generic AI presence cannot express sensing, command, fire-control, guidance, saturation, or adversarial attack. |
| Signature envelope and shaped-emission claim | Visibility magnitude cannot represent band, bearing, history, bounded imitation, or nerd-sniping payloads. |
| Fire-control throughput and solution quality | Predictive aim alone does not distinguish cycling assignments from putting rounds where the solution intends. |
| Small-hull autonomy and role orders | Drone, mine, relay, Remora and loiterer must remain component-defined capability bundles. |
| Launch/recovery/service topology | Docking capacity alone does not express throats, queues, cooling ports, reload labor, or shared service neighborhoods. |
| Guidance maneuver reserve and terminal discrimination | Guided projectiles need the final-thrust game and subsystem aim selection. |
| Conduct and legal evidence | Capture, surrender, rescue, post-disable action and insurer exposure require durable event state. |
| Campaign economics | Recoverability and replacement delay matter across sorties without altering immediate physics. |

## Economy And Crafting Corrections

The combat workbench requires a sharper content boundary than the surviving legacy `ItemData` and construction-blueprint vocabulary currently guarantees.

| Concept | Authority |
| --- | --- |
| Technology blueprint | Component arrangement, behavior relationships, tolerances, performance derivation, revision ancestry, patent and licensing status |
| Crafting recipe / manufacturing run | Actual input commodities and component instances, lots, producer, facility, substitutions, process, quality, license claim, date, and supply-chain provenance |
| Item instance | The manufactured object, brand/model presentation, quality, durability, serial and custody history, current condition, and recipe/run reference |
| Loadout blueprint | Placement and configuration of actual equipment required to instantiate a ship or small hull; it does not manufacture the equipment it references |
| Entity snapshot | Live placement, behavior progress, temperature, armor, ammunition, damage, cargo, children, and control state after instantiation |

Blueprints may be corporate-patented, licensed, proprietary, public domain, stolen, expired, or independently discovered. Those relationships affect access, price, legal exposure, and diffusion without turning every branded incarnation into new item data.

The Pass 5 fixture database must contain technological and manufactured variety, not merely a catalog row per desired scenario role. Scenario definitions reference native instance and loadout IDs. They may set condition and geometry, but may not override derived equipment statistics.

## Mapping Rule

Native state remains authoritative wherever it already describes the same fact. Additive combat state may reference native blueprint, recipe, item-instance, entity, component, and behavior IDs but may not duplicate provenance, temperature, armor, durability, ammunition, power, position, or docking truth under a second owner.

For example, `heat_clock` reads native temperature, thermal mass, conductivity, behavior heat, and radiator state. It does not own a second “heat points” pool. `track_clock` reads emitted visibility evidence and observer state; it does not set target visibility because its forecast reached zero.

## Gear Variables The Story Room Had Not Yet Named

- component temperature-performance curves;
- thermal conductivity and placement neighborhood;
- ruggedness, durability, and thermal resilience as separate properties;
- capacitor charge and conversion efficiency;
- active sensor cooldown and reveal state;
- information persistence and thresholded disclosure;
- charged, burst, constant, reload, ammunition-interval, and lock progress;
- shot speed and predictive solution capability;
- torque and angular authority, not thrust alone;
- cargo and docking geometry;
- current behavior progress as durable combat state.

These variables are now part of the model vocabulary. Not all need equal narrative prominence. They must be available when a matchup turns on them.
