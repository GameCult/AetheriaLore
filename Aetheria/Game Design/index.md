---
title: Game Design
description: "Aetheria's design is two different games sharing one doomed universe: cockpit-scale action and spreadsheet-scale corporate predation feeding the same persistent galaxy."
---

# Game Design

*"The setting is a machine. The playable problem is deciding which gears the player gets to touch first."*

Aetheria's design begins from an old, unreasonable ambition and then tries to make it survivable: two different games sharing the same doomed universe. One layer is a tactical action RPG about ships, crews, missions, routes, and violence up close. The other is a corporate strategy game about production, infrastructure, population roles, research, and economic dominance. Both are meant to feed the same persistent galaxy, where field players collide with shortages and opportunities created by the people running the machinery.

That is the full beast. The first major scope cut was [[End of the Line|Aetheria: Terminus]], a rogue-lite ARPG slice designed to prove combat, traversal, ship customization, narrative pressure, and the setting's corporate logic before the project tried to swallow the whole sun and ask politely for seconds. When even that looked too large, [[Call of the Void]] became the last-ditch smaller target: curated cases, taxi work, station life, and one exhausted private investigator discovering that the rupture is not politely undoing itself.

## Design Stack

- [[Design Pillars]] - the compact doctrine for what the game is trying to make playable.
- [[Playable Layers]] - how the ARPG, corporate strategy layer, and shared world are supposed to meet.
- [[Action RPG Layer]] - cockpit-scale play: travel, combat, loadouts, risk, quests, and survival.
- [[Corporate Strategy Layer]] - spreadsheet-scale play: corporations, labor, production, research, logistics, and market pressure.
- [[Persistent Universe and Reset Loop]] - the long campaign structure, alien escalation, extinction, and temporal reset.

## Systems

- [[Economy and Production]] - commodities, blueprints, crafting quality, supply chains, and corporate leverage.
- [[Colonies and Population]] - colony vessels, station populations, demographic attributes, production affinity, demand, and influence.
- [[Galaxy and Navigation]] - generated stars, map layers, zone links, routes, sectors, and frontier topology.
- [[Gravity and Locomotion]] - the Grid, gravitational terrain, thrusters, warp fields, traction, wormholes, and fast travel heat costs.
- [[Heat, Stealth, and Detection]] - thermal performance, emissions, sensors, scanning, jamming, and identification.
- [[Ship-shape and Up to Specs]] - ships as loadouts, homes, status objects, and thermal compromises with weapons attached.
- [[Progression, Claims, and Consequence]] - licenses, death, escape pods, wreck claims, looting, scavenging, and station exposure.
- [[Narrative and Missions]] - Ink-driven quests, location constraints, faction presence, and story inside generated space.
- [[A Different Sort of Space]] - the visual and physical feel of Aetheria's non-hard-SF void.
- [[Visual and Sensory Direction]] - shaders, clouds, weapon effects, audio, and readable spectacle.
- [[Volumetric Nebulae]] - atmospheric prototype clips showing the nebula renderer as moving terrain, not wallpaper.
- [[Implementation Signals]] - what the active `Aetheria-Economy` work surface reveals about the design.

## Release Path

- [[End of the Line]]
- [[Call of the Void]]
- [[../Lore/Welcome to Elysium|Welcome to Elysium]]
- [[A Different Sort of Space]]
- [[Ship-shape and Up to Specs]]

## Planning Sources

The active `Aetheria-Economy` repository points to three planning-time documents:

- [Aetheria GDD](https://docs.google.com/document/d/1iULu1WsbuQoUM3c87XkGseb1P-8R5xlruoiyg03TsSE/edit?usp=sharing) - the action RPG design document.
- [Profits Rising](https://docs.google.com/document/d/1U3uGFqQboAiFJ_Y-nUOGpyixbXUHRbc5DiCuB59GM4w/edit?usp=sharing) - the corporate strategy / RTS design document.
- [Aetheria Shader Implementation](https://docs.google.com/document/d/1AFycvCtW6hA1jkKq1ZmYd3k6_uEWaaCqcZ4fYj4vU6A/edit?usp=sharing) - shader and rendering notes.
- [Call of the Void / L'appel du Vide brainstorm](https://docs.google.com/document/d/1YWn5RWsciBxuaQ4l5TN2lAEz4okaQes-aiyx1E9NAxA/edit?usp=sharing) - the last-ditch post-Terminus scope cut built around Cat Marrigan, PI cases, taxi fares, and the point-of-no-return revelation. It predates the current Elysium continuity and still assumes a colonization-fleet frame.

These documents and the repository README are dated planning maps, not current marching orders. They are useful because they preserve mechanic intent: the time loop, tactical ship combat, heat and stealth, licenses, contracts, dungeons, drones, station management, production, population attributes, demand profiles, market arbitrage, research patents, independent traders, police protocol, AI corporations, and shader-driven gravitational terrain. They are also very much the sort of documents a person writes before reality, money, health, and the calendar arrive with tools.

The live hierarchy treats them as inherited design pressure, then filters them through the current canonical vault and the project direction now in front of us. The active game repo's shape is evidence, but not law: shared simulation classes, `ServerShared` data models, galaxy generation, equipment behaviors, cargo and trade UI, Ink narrative processing, map rendering, debug tools, and the server architecture show long-running ambitions that still need current judgment.

## Setting Pressures

- [[Introduction]]
- [[Narrative Themes]]
- [[Worldbuilding/Pre-Elysium/Timeline|Timeline]]
- [[Worldbuilding/Politics/Restrictions on Warfare|Restrictions on Warfare]]
