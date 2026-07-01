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

