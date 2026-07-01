---
title: "Aetheria Client and Modes"
description: "The Aetheria desktop client is the cross-mode shell: Hangar, parties, Verse selection, Starbridge sessions, Arena downtime, and seasonal Conquest campaigns."
---

# Aetheria Client and Modes

Aetheria is not a single queue with a prettier launcher. It is the shell around
multiple playable proofs of the same underlying simulation: player-owned
loadouts, typed Verse state, ship mastery, faction pressure, economic
consequence, and role-specific clients looking into one shared machine.

The desktop Aetheria app should be the player's durable home. It starts
Starbridge sessions, advertises coming modes, manages parties, selects the
active Verse, launches Unity pilot clients with the correct session target, and
keeps the command-facing surfaces available when a player is acting as
commander. It is also the place where the Hangar lives, because the Hangar cuts
across every mode.

## Product Spine

The product spine is:

1. **Aetheria client**: the shell, account surface, party surface, Hangar, mode
   selection, Verse selection, reconnect surface, and commander-capable desktop
   UI.
2. **Aetheria: Starbridge**: the first public co-op mode, built around one RTS
   commander and one to four Unity pilots defending a station through waves.
3. **Arena**: the controlled competitive environment for proving
   witness-authoritative quorum consensus under real player pressure.
4. **Conquest**: the seasonal campaign layer for territory, faction struggle,
   economic movement, logistics, and broader simulation experiments.
5. **Persistent world**: the later synthesis, after the smaller vessels have
   proven sync, loadouts, economy, territory, and faction consequence.

The launcher should not present these as equal buttons in a buffet. Multiplayer
queues are an ecosystem. Aetheria should concentrate attention around the mode
that currently serves the health of the product and the experiment being run.

## The Hangar

The Hangar is the player's continuity layer.

Modes rotate, seasons end, experiments change, and scenario rules mutate. The
ship collection persists. Players continue unlocking hulls, equipment,
cockpits, support gear, cosmetics, presets, and build identities from the
Aetheria client. A ship mastered in Starbridge can be brought into Arena. A
Conquest season can make a faction's logistics valuable without making that
ship stop being the player's ship.

The rule:

> A ship is persistent. A mode decides how that ship is contextualized.

Starbridge can apply run-local quality scaling, recovered technologies,
temporary station stock, and boss loot because it is a rogue-lite adjacent
co-op scenario. Arena should show the build as it was meant to be seen: no
Starbridge quality scaling, no run-local distortion, no flattening every ship
into an embarrassed average. Matchmaking balances teams by danger level instead
of pretending all builds are equal.

The Hangar should be a shared Eve/CultUI surface over typed player state, not a
menu owned by one runtime. The desktop client, website, Unity client, future
companion surfaces, operator tools, and compact TUI views should lower the same
composition graph where the user's context permits it. Storefront purchases,
season rewards, and scenario unlocks may add entitlement or inventory
documents; the Hangar remains the projection over player-owned ships and
equipment.

## Commander Progression Candidates

The commander needs a progression layer as sticky as pilot loadout
customization. It cannot simply be a persistent station loadout. Scenario
authorship must remain intact: the scenario owns starting station equipment,
available technologies, salvage ecology, faction mix, wave shape, boss loot,
and infrastructure constraints.

The commander progression rule:

> Scenarios own nouns. Commanders own the operating language.

Commander progression candidates should be judged by whether they create real
identity, mastery, and buildcraft without smuggling forbidden station assets
into a scenario.

### Real-Time Command Deck

The strongest current candidate is a real-time card-command game.

The commander has a deck, hand, draw pile, cooldown pile, and cadence-based
draw. Cards are played during the Starbridge defense to install equipment,
upgrade equipment, deploy drones and turrets, activate item behaviors, trigger
procedures, and spend emergency protocols. Played cards go into cooldown,
discard, exhaust, or debt depending on their type and effect.

This makes the commander role a full game in the chair:

> Pilots fly loadouts. Commanders play decks.

Part of the deck comes from the scenario. That scenario deck represents the
starting station, local technology, available equipment, faction constraints,
damage state, emergency procedures, and salvage context. Part of the deck comes
from the commander: persistent command cards, learned procedures, faction
licenses, staff habits, and command rig choices. A run can then add temporary
cards through boss technology recovery, field salvage, malfunctions, debt, or
emergency improvisation.

Possible card classes:

- **Install**: place equipment into valid station hull grid cells, still
  respecting physical cells, adjacency, power, fabrication, and scenario tech.
- **Upgrade**: improve, tune, reinforce, or add a behavior mode to installed
  equipment.
- **Deploy**: launch drones, turrets, decoys, sensor buoys, salvage tugs,
  repair craft, or temporary field structures allowed by the scenario.
- **Activate**: trigger item behaviors and arbitrary effects using the same
  behavior concept as consumables and equipment.
- **Procedure**: change priorities, retask automation, reroute power, alter
  shield behavior, reclassify targets, or issue multi-system commands.
- **Emergency**: produce strong saves at the cost of heat, damage, debt,
  future draw pollution, score penalties, or maintenance consequences.
- **Debt/Malfunction**: cards injected by damage, overheating, hacking,
  under-crewing, illegal shortcuts, or desperate repairs.

The resource model should use four command resources:

- **Power**: electrical capacity, routing, shields, sensors, weapon systems,
  drone charging, and immediate station activity.
- **Mass**: salvage, material throughput, structure, ammunition, replacement
  parts, and physical installation.
- **Heat**: thermal capacity, cooling budget, radiator availability,
  overclocking, fabrication haste, and emergency thermal debt.
- **Cognition**: command bandwidth, staff attention, signal clarity, Verse
  authority, operator focus, predictive modeling, witness activity, and the
  stranger Aetheria-specific forms of semantic or neuromorphic strain.

Four resources are enough to create deck identity without making the commander
read a tax form while missiles are arriving. Power is what the station can
energize. Mass is what it can physically become. Heat is what it can survive
doing. Cognition is what it can understand and coordinate.

### Command Rigs As Basis Decks

Command rigs are a companion idea to the command deck. A rig is the commander
equivalent of a hull: a faction or manufacturer themed basis deck plus
resource bias and a small set of mechanical affordances.

The first useful version should go straight to mechanics and skip bespoke UI
skins or audio. Cosmetic identity can come later after the rig earns it.

A V1 command rig defines:

- basis card ids;
- resource bias across Power, Mass, Heat, and Cognition;
- compatible card tags;
- forbidden or awkward card tags;
- one or two signature mechanics;
- optional rig-specific debt or malfunction cards;
- unlock requirements.

Example V1 rigs:

- **AU Industrial Command Rig**: Power/Mass bias. Install, repair, turret, and
  fabrication cards. First install each wave gets a Mass discount; fabrication
  cards cool down faster after a clean defensive interval.
- **Cryonix Thermal Command Rig**: Heat/Cognition bias. Cooling, prediction,
  thermal triage, and purge cards. Can preview heat debt and convert some Heat
  cost into delayed debt once per draw cycle.
- **Zhestokost Siege Command Rig**: Mass/Heat bias. Armor, heavy turret,
  ammunition, rugged repair, and emergency venting cards. Can install into
  damaged cells; defenses gain durability but create more Heat while firing.
- **PSC Compliance Command Rig**: Power/Cognition bias. Witness, legal target
  classification, protected corridors, and telemetry cards. Witness/authority
  cards cost less Cognition; pod protection and surrender events improve score.
- **Pirate Salvage Command Rig**: Mass/Cognition bias. Salvage theft, spoofing,
  wreck preservation, and dirty conversion cards. Can convert wreck claims into
  temporary Mass; illegal plays add Heat, Cognition debt, or reputation risk.

The scenario still injects the actual station and available tech. A Cryonix
commander defending an AU station operates AU machinery through Cryonix thermal
doctrine; they do not replace the station with a Cryonix station.

### Other Sticky Directions To Explore

Cards are strong because they create collection, draw tension, buildcraft,
streamable decisions, and visible clutch moments. Other commander progression
ideas need to be just as sticky before they deserve to compete.

Promising alternatives:

- **Living Staff**: commanders collect, train, and shape semi-autonomous staff
  officers who change priorities, warnings, automation, and failure habits.
  Staff become a persistent crew with scars, preferences, and operational
  culture rather than passive perk slots.
- **Command Language**: commanders build custom named procedures that package
  pings, drone orders, shield priorities, pilot alerts, and target classes.
  Friend groups learn a commander's vocabulary: "Spine", "Lantern",
  "Blackout", "No One Burns".
- **Battle Memory**: commanders accumulate tactical ghosts from previous runs:
  breach points, heat disasters, saves, bad chases, common pirate vectors, and
  recurring crew habits. The command surface can project learned annotations
  without giving universal knowledge to a fresh commander.
- **Black Box Career**: every commander carries a persistent after-action
  record of saves, abandoned modules, recovered pods, missiles intercepted,
  stations lost, and ugly tradeoffs. Unlocks come from demonstrated command
  style and mastery, not only currency.
- **Command Room As Place**: a persistent deck or war room evolves with
  trophies, black-box scars, faction certifications, pilot patches, recovered
  artifacts, and visible campaign history. This is identity-heavy but should
  wait until the mechanical progression proves it deserves a room.
- **Emergency Possession**: rare protocols let the commander briefly take
  direct simplified control of a drone, turret, rescue craft, or subsystem.
  The chair becomes hands for a dramatic moment, with cost and risk.
- **Commander As Witness**: Arena and later Conquest can let advanced
  commanders serve as witnesses, referees, operators, or dispute analysts for
  quorum matches. This turns command progression into trusted Verse authority,
  not only Starbridge base management.

The design test for all of these is emotional. A pilot should say, "I want to
tune my ship." A commander needs an equally strong sentence. "I want to tune my
deck" is currently the cleanest candidate. Keep looking for others with that
kind of gravity.

## Starbridge

Starbridge is the co-op product wedge. It is always understandable:

- one player commands the base;
- other players fly ships;
- the team survives waves;
- bosses drop technologies;
- the station lets players dock, refit, exchange equipment, and recover.

Starbridge proves mixed-runtime cooperation without requiring the whole world
to be alive. The commander can remain in the Aetheria desktop UI. Pilots launch
into Unity clients that already know which Verse, session, role, and player
identity to connect to.

Starbridge is also the friendly on-ramp for persistent loadout attachment. It
lets players love a ship while the run still changes around them.

## Arena

Arena is the consensus crucible.

To players, Arena is competitive ship combat. Internally, it is where Aetheria
masters witness-authoritative quorum consensus in a controlled environment:

- small maps;
- known player counts;
- constrained match duration;
- clear loadout entry;
- adversarial player intent;
- replayable combat facts;
- witness roles;
- prediction and reconciliation pressure;
- disconnect and reconnect handling;
- evidence for anti-cheat and dispute resolution.

Arena should be the downtime competitive activity when Conquest is not live.
Its purpose is not to become the always-available deathmatch gravity well that
starves every richer mode. Its purpose is to keep pilots sharp, generate useful
combat data, and harden consensus under conditions that are small enough to
understand.

Arena uses persistent Hangar builds without Starbridge run scaling. Danger
level matchmaking should balance teams around the real threat of the assembled
ships rather than making customization cosmetic.

## Conquest

Conquest is the halfway point to a persistent world.

It lets Aetheria simulate broader economic shifts, factional struggles,
territorial pressure, logistics, stockpiles, industry, and strategic objectives
without requiring every sector to be active all the time. The world does not
need to breathe at full resolution everywhere. It can pulse through campaigns,
fronts, windows, and resolved aftermath.

Conquest should run in seasons. Each season is an experiment:

- which faction pressures matter;
- how territory changes hands;
- how markets and production react;
- which logistics constraints create good play;
- how player corporations or clans coordinate;
- how much world-state persistence creates drama without becoming homework.

When Conquest is active, it should be the PvP focus. If a low-friction
deathmatch queue is available at the same time, many players will choose the
short dopamine path and the strategic campaign will wither. Aetheria should not
fragment its own playerbase just to look feature-rich. Arena exists for
downtime. Conquest owns the war window.

## Client Responsibilities

The Aetheria desktop client should own the cross-mode surfaces:

- home/front page;
- account and profile identity;
- party state and invites;
- active Verse selection and diagnostics;
- reconnect and crash recovery;
- Hangar;
- Starbridge scenario/session entry;
- Arena matchmaking and recent-match context;
- Conquest season map and campaign status;
- settings that apply across runtimes.

Unity should own the pilot cockpit runtime: flight, combat presentation,
effects, input, audio, docking transitions, and ship/escape-pod embodiment.
Unity should not own the product shell. It should launch with the session
contract it needs and then connect to typed CultMesh state.

The daemon owns game truth. The desktop client and Unity client are
role-specific views into typed Verse state. That is the architectural fantasy
and the product fantasy saying the same thing without having to apologize to
each other.
