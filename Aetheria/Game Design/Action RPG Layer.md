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

Combat is built around ship equipment rather than character stats floating in a vacuum. The legacy implementation exposes distinct weapon systems, hardpoints, shields, radiators, thrusters, reactors, capacitors, aether drives, visibility, sensors, heat storage, mines, projectiles, lasers, lightning, guided weapons, and weapon group assignment.

The design opportunity is to make combat read as engineering under stress. A fight is not just health bars and cooldowns. It is heat debt, power draw, visibility, velocity, durability, weapon arcs, shield timing, cargo risk, and the sick little moment when a clever build becomes a maintenance liability.

The archival ARPG GDD makes the combat premise sharper: shields can absorb far more than armor, so combat is largely about overwhelming the enemy's heat dissipation capacity. Ballistics, missiles, lasers, warp projectors, area effects, cryo variants, and damage types are all ways of attacking the target's ability to remain functional.

## Ship Management

The ship is the action RPG's character sheet. Hull shape, grid placement, hardpoint type, equipment quality, cargo layout, and behavior interactions should matter. The schematic display and inventory/trade interfaces in the old codebase point toward a game where the player understands the ship as a working object, not just a skin wrapped around numbers.

## Mission Pressure

Missions should not feel pasted onto the galaxy after the fact. Ink narrative, zone constraints, faction presence checks, route selection, and location binding all point toward missions that can be placed into generated space according to political and spatial logic.

The ideal mission is specific in story and systemic in placement: a smuggler rendezvous where the faction actually has reach, a rescue near a contested route, a sabotage job that makes sense because the local supply chain is already strained.

The planning docs also point to contracts, NPCs, repeatable stories, once-per-reset narrative events, station contacts, and dangerous subspace dungeons reached through peculiar wormholes. Those ideas should be treated as recoverable patterns, not binding feature promises. The design should keep the useful shape: one mission ecology rather than separate content bins.

## Terminus Slice

[[End of the Line|Aetheria: Terminus]] focuses this layer into a rogue-lite route across hostile space. It does not need every corporate system online. It does need every run to feel like a compressed encounter with the wider setting: travel, risk, salvage, pursuit, factional texture, and the possibility that freedom is just another product tier.
