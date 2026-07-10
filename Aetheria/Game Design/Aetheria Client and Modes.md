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
   economic movement, logistics, community warfare, and broader simulation
   experiments. This is where Profits Rising corporation-management gameplay
   is introduced and developed season by season.
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

## Commander Progression

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

### Barracks V1

The V1 commander progression target is the **Barracks**.

The Hangar stores machines. The Barracks stores people and minds. Pilots tune
ships and loadouts. Commanders build a bridge crew, put that crew under
pressure, and live with what the pressure does to them.

The emotional model is closer to Darkest Dungeon than a collectible card game.
Every run puts command staff against the grindstone. They gain skill,
procedures, bonds, familiarity with pilots, and enemy-pattern memory. They also
accumulate stress, injuries, burnout, trauma, moral damage, faction pressure,
firmware scars, illegal habits, and strange command fixations.

The V1 presentation should stay contained:

- roster cards and staff dossiers;
- active bridge slots;
- recovery, treatment, and training slots;
- relationship and conflict summaries;
- after-action changes;
- staff-linked procedures and automation;
- no animated portraits;
- no walk-around RimWorld-style barracks simulation.

The most important visual outcome is not seeing staff wander around. It is
seeing staff change.

### Staff Roles

Command staff should affect how the commander operates the scenario's provided
station, not which station nouns exist. They can modify warnings, procedures,
automation, resource handling, and emergency options while the scenario still
owns equipment, salvage, technology, and enemy pressure.

Candidate staff roles:

- thermal officer;
- fabrication lead;
- drone marshal;
- fire-control officer;
- quartermaster;
- rescue coordinator;
- signal/witness officer;
- faction liaison;
- morale/comms officer;
- neuromorphic or ship-self advisor;
- illegal firmware specialist.

Staff do not need to be only ordinary humans. Aetheria can include trained
officers, faction specialists, embodied ship-selves, advisory firmware,
compliance engines, damaged station minds, and other legal or illegal minds
allowed onto the command side of the war table.

### Stress, Growth, And Decay

Staff progression should create attachment and hesitation.

After runs, staff can gain:

- XP and promotions;
- new or improved procedures;
- better enemy/faction familiarity;
- bonds with other staff;
- bonds with specific pilots or ships;
- commendations and titles;
- faction credentials;
- black-box insights.

Staff can also suffer:

- acute stress;
- fatigue and leave requirements;
- heat trauma;
- overclock addiction;
- radiator dread;
- rescue obsession;
- salvage fixation;
- witness compulsion;
- illegal firmware dependence;
- faction loyalty drift;
- contempt for cautious or reckless commanders;
- rivalry with another staff member;
- refusal to work a specific scenario class;
- breakdown, retirement, or loss.

This is the commander's risk economy. Pilots bring hulls back scorched.
Commanders bring minds back altered.

### Generated Interactions

The Barracks should use a limited authored pool of releasable characters, with
live interactions procedurally generated from character state, run history,
relationships, scenario pressure, and faction context.

Ghostlight, VoidBot, and Epiphany persona turns can generate staff interactions
as structured narrative events rather than freeform noise. The generated layer
should know the character's stable identity, current stress, relationships,
recent failures, recent saves, faction background, and available event type.
It should output bounded dialogue, relationship changes, event flags, and
operator-facing summaries that the game can store as typed state.

Weksa vocals can give these interactions voice once the text event is accepted
and bounded. Voice should reinforce staff presence without requiring animated
portraits or a full barracks life sim.

Generated outputs must be cached as content artifacts. Persona turns, accepted
dialogue, Weksa voicing, and possible Vili acting or gesture data should not be
recomputed every time a player opens the Barracks. Weksa interlingua tends to
carry gesture information, so the cache should be able to store text, vocal
performance, timing, expression, gesture intent, provenance, and the state keys
that produced the event.

This gives the live service a sane cost curve. Early players can expensively
"discover" fresh staff interactions when a character, scenario, relationship,
or trauma state has not been seen before. As the cache fills, common situations
resolve to existing artifacts and only noteworthy state changes need new model
work. The Barracks should feel alive without turning every hover, debrief, or
minor stress tick into a model call.

The cache key should include enough typed context to preserve continuity:

- character id and variant;
- event type;
- scenario id and faction context;
- relevant run facts;
- current stress, injuries, scars, and traits;
- relationships and bonds involved;
- language, voice, and presentation policy;
- model/prompt/pipeline version.

Cached artifacts may be reused exactly, remixed through bounded templates, or
invalidated when character state crosses a meaningful threshold. The important
rule is that generation happens at moments of narrative consequence, not as a
constant renderer dependency.

V1 should treat generated interactions as authored-bounded events:

- post-run debriefs;
- stress breaks;
- bond formation;
- rivalry escalation;
- staff requesting leave;
- staff refusing or demanding assignment;
- procedure discovery;
- faction contact;
- black-box confession;
- memorial or recovery moments.

The generation system must serve continuity. Characters are not disposable
text fountains. Their state changes should persist, be inspectable, and affect
future runs.

### Character Release Model

Aetheria can release a limited pool of command staff over time in a
gacha-style cadence: named officers, specialists, firmware advisors, faction
liaisons, illegal contractors, and strange command minds. The collection pull
is real, but the design should avoid making the commander role depend on
predatory availability or opaque power chasing.

Safer release principles:

- every commander has a competent baseline staff;
- premium or rare staff create style, story, and specialization, not mandatory
  access to basic command competence;
- scenario completion, seasons, faction reputation, and achievements can unlock
  staff alongside any monetized channel;
- staff power is legible through role, stress profile, procedures, and
  compatibility rather than hidden rarity math;
- duplicate pulls, if used, should become training, memories, cosmetics, or
  safe progression currency rather than a slot-machine cliff.

The product can borrow the release cadence and excitement of character
collection without designing the Barracks as a little extraction engine in a
hat.

### Shelved: Real-Time Command Deck

The real-time command deck remains a viable alternate or later procedure layer,
but it is not the V1 commander progression target.

In that model, the commander has a deck, hand, draw pile, cooldown pile, and
cadence-based draw. Cards install equipment, upgrade equipment, deploy drones
and turrets, activate item behaviors, trigger procedures, and spend emergency
protocols. The scenario contributes part of the deck so scenario authorship
remains intact.

The four-resource model remains useful even without cards:

- **Power**: electrical capacity, routing, shields, sensors, weapon systems,
  drone charging, and immediate station activity.
- **Mass**: salvage, material throughput, structure, ammunition, replacement
  parts, and physical installation.
- **Heat**: thermal capacity, cooling budget, radiator availability,
  overclocking, fabrication haste, and emergency thermal debt.
- **Cognition**: command bandwidth, staff attention, signal clarity, Verse
  authority, operator focus, predictive modeling, witness activity, and the
  stranger Aetheria-specific forms of semantic or neuromorphic strain.

Cards may come back later as staff-authored procedures, emergency protocol
bundles, or rig-like command scripts. For V1, the sticky sentence is:

> Pilots build ships. Commanders build crews.

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

These seasons are the current development path for **Profits Rising** gameplay.
Players may control corporations ranging from inherited small operations to
stealth startups and larger producers, managing blueprints, licenses, supply
chains, manufacturing, transport, labor, contracts, and market position in
support of community warfare. The corporation layer should grow through real
seasonal pressures rather than appearing all at once as a detached management
game.

The long-term destination remains synthesis: corporation-scale Profits Rising
play and embodied Terminus-style play inhabiting the same persistent economy.
Starbridge establishes shared combat and command infrastructure; Conquest
seasons progressively establish the logistics, economic, territorial, and
organizational machinery needed for that merger.

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
