# Implementation Signals

This note records what the legacy `Aetheria-Economy` codebase reveals about the design, without pretending old implementation detail is sacred canon. Code is evidence. Sometimes embarrassing evidence. Still evidence.

## Shared Simulation

The repository has a Unity client, a .NET server, and a substantial `Assets/Scripts/ServerShared` layer. Shared classes cover entities, ships, zones, galaxies, factions, items, behaviors, serialization, player settings, saved games, network messages, and world generation.

Design implication: Aetheria has long wanted a common simulation substrate rather than separate bespoke logic for client, server, and tools.

## Data-Driven Content

Persistent game data is built around database entries, GUIDs, MessagePack, JSON serialization, RethinkDB tooling, item managers, database inspectors, and local backups. Items, behaviors, factions, commodities, galaxies, and settings are all treated as editable data.

Design implication: the game should preserve a content pipeline where designers can create ships, gear, commodities, factions, map layers, and behavior combinations without hardcoding every variant.

## Ships And Behaviors

Ships are entities with hulls, equipment, cargo bays, docking bays, heat maps, durability, visibility, faction hostility, and behavior-driven components. Behaviors cover weapons, shields, radiators, reactors, capacitors, aether drives, thrusters, sensors, mining tools, stat modifiers, switches, triggers, heat storage, velocity limits, and more.

Design implication: ship identity should emerge from component interaction. The system already wants builds to be physical, thermal, spatial, and economic.

## Economy Surface

The code includes cargo transfer, simple and compound commodities, crafted item instances, blueprints, performance stats, quality, durability, inventory, trade menus, and database-backed item data.

Design implication: Aetheria's economy should be more than price lists. Materials, manufacturing quality, cargo geometry, and maintenance condition can all become playable.

## Galaxy And Missions

Galaxy generation, map layers, star links, faction home zones, zone generation, wormholes, map rendering, sector rendering, Ink stories, quest files, story processing, zone constraints, and faction-aware mission placement all exist or are sketched.

Design implication: the game should keep connecting procedural structure to authored context. Generated space becomes useful when missions and factions know how to inhabit it.

## Near-Term Lesson

The current work should not try to expose every old system immediately. The sane path is to use [[End of the Line|Terminus]] as the playable test chamber, keep the data model compatible with the larger dream where that still helps, and only promote a system into the design hierarchy when it creates better player pressure.

## Planning-Time Coverage

The exported GDDs are broad enough to justify the current section hierarchy as an archival map. They cover gravity, environmental entities, locomotion, heat, stealth, identification, energy, item classes, combat, death, looting, scavenging, progression, licenses, contracts, dungeons, NPCs, trading, drones, station management, building, mining, gas harvesting, crafting, defense, colony management, population attributes, production profiles, demand and influence profiles, research patents, independent traders, pirates, privateers, police, AI corporations, user interface tabs, and shader-driven gravitational terrain.

Design implication: the game design section should stay hierarchical. A flat pile of notes would be a crime scene with links.
