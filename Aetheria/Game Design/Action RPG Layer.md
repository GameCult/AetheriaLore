---
description: "Cockpit-scale Aetheria: travel, contracts, ship management, tactical combat, salvage, and the practical question of whether the next jump is worth the repair bill."
---

# Action RPG Layer

The action RPG layer is Aetheria at human speed: the ship on screen, the route ahead, the damaged component, the hostile contact, the suspicious contract, the cargo bay that is suddenly too small, and the faction whose logo makes the local dockmaster change tone.

## Core Loop

The player accepts or discovers a reason to move through space, prepares a ship, travels through generated sectors, resolves combat or avoidance, manages damage and cargo, makes narrative choices, and returns with money, parts, information, obligations, or a worse problem wearing nicer clothes.

The loop should be legible even when the simulation under it is deep:

- choose a route
- prepare a loadout
- survive the space between points
- exploit or endure what the local economy produced
- upgrade, repair, sell, betray, report, or run

## Tactical Combat

Combat is built around ship equipment rather than character stats floating in a vacuum. The active implementation exposes distinct weapon systems, hardpoints, shields, radiators, thrusters, reactors, capacitors, aether drives, visibility, sensors, heat storage, mines, projectiles, lasers, lightning, guided weapons, and weapon group assignment.

The design opportunity is to make combat read as engineering under stress. A fight is not just health bars and cooldowns. It is heat debt, power draw, visibility, velocity, durability, weapon arcs, shield timing, cargo risk, and the sick little moment when a clever build becomes a maintenance liability.

The older ARPG GDD makes the combat premise sharper: shields can absorb far more than armor, so combat is largely about overwhelming the enemy's heat dissipation capacity. Ballistics, missiles, lasers, warp projectors, area effects, cryo variants, and damage types are all ways of attacking the target's ability to remain functional.

Weapon families should also express different resource economies. Lasers are the ideal energy weapon: ship power and ship heat become precise energy on target, rewarding pointing, fire control, cooling, and capacitor rhythm. Particle beams, plasma bolts, and lightning guns belong near that family even when they add extra conversion steps, channeling problems, or environmental dependencies. Ballistics and other material deployments make a different trade: carried mass becomes delivered effect, moving part of the burden into ammunition, magazines, recoil, logistics, interception risk, and supply chains. Missiles, mines, drones, and remorae extend that material logic by carrying guidance, cognition, loiter time, or thermal payloads away from the firing ship.

Cognition should sit beside heat and power as a combat resource. A ship may have enough sensors to gather traces and enough weapons to kill, yet still lose if its targeting computer, fire-control stack, missile guidance, or battle computer cannot turn that information into correct action before the window closes. Smarter systems should make better use of gathered info, cycle more rounds onto valid targets while preserving the firing solution, peer through noisier signature masks, evade point defense, and decide when to commit loitering munitions under millisecond pressure. At the munition scale, cognition should also affect terminal quality: a smart missile can learn more at point-blank range than the launcher knew, time its last thrust against a countermaneuver, and hit an exposed subsystem instead of wasting itself on armor.

That matters because cognition is commoditized in Aetheria. A high-end fire-control suite, AGI core, [[Neuromorphic Firmware]] package, or illegal adaptive munition mind is not just a stat stick. It is purchased judgment, with heat costs, maintenance dependencies, provenance problems, autonomy limits, and failure modes. Cognitive overload should be playable: too many tracks, decoys, locks, legal signals, and incoming threats can make a cheap command stack late, brittle, or dangerous even when the hull still has power and ammunition.

## Ship Management

The ship is the action RPG's character sheet. Hull shape, grid placement, hardpoint type, equipment quality, cargo layout, and behavior interactions should matter. The schematic display and inventory/trade interfaces in the current game repo point toward a game where the player understands the ship as a working object, not just a skin wrapped around numbers.

## Mission Pressure

Missions should not feel pasted onto the galaxy after the fact. Ink narrative, zone constraints, faction presence checks, route selection, and location binding all point toward missions that can be placed into generated space according to political and spatial logic.

The ideal mission is specific in story and systemic in placement: a smuggler rendezvous where the faction actually has reach, a rescue near a contested route, a sabotage job that makes sense because the local supply chain is already strained.

The planning docs also point to contracts, NPCs, repeatable stories, once-per-reset narrative events, station contacts, and dangerous subspace dungeons reached through peculiar wormholes. Those ideas should be treated as recoverable patterns, not binding feature promises. The design should keep the useful shape: one mission ecology rather than separate content bins.

## Era Pressure

Era should be a gameplay input, not only a lore label. A Corporate Exodus fight should not feel like a late-Sol drone engagement with worse numbers. It should feel close, infrastructural, and repair-fragile: dock control, convoy timing, sabotage, boarding, and the terror of damaging the thing everyone needs to keep breathing. An Age of Automation fight should feel patrolled, automated, and compliance-shaped. An Identity Abyss fight should feel cognitively saturated, full of adaptive munitions, target-classification disputes, and command systems whose provenance is part of the danger. An Existential Collapse fight should make repair, salvage, food, coolant, rescue, and route credibility as important as damage.

Content generation can express this by changing what each era makes cheap or scarce: sensors, drones, cognition, heat capacity, repair access, legal enforcement, fuel, spare parts, autonomy, and trustworthy telemetry. The same hull or weapon family should therefore play differently depending on the historical pressure around it.

## Terminus Slice

[[End of the Line|Aetheria: Terminus]] focuses this layer into a rogue-lite route across hostile space. It does not need every corporate system online. It does need every run to feel like a compressed encounter with the wider setting: travel, risk, salvage, pursuit, factional texture, and the possibility that freedom is just another product tier.
