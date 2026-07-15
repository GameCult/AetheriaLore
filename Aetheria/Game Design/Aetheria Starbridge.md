---
title: "Aetheria: Starbridge"
description: "A draft asymmetric co-op defense design: one station commander and several pilots operating the same war machine."
---

# Aetheria: Starbridge

> **Status:** Developed draft GDD; concept-stage, not shipped or a release roadmap. Existing code supplies design evidence, not proof of the loop described here.

**Aetheria: Starbridge is a 2–5 player asymmetric co-op defense game where one player operates a vulnerable space station from an RTS interface while one to four pilots fly ships in real time, surviving escalating attacks through communication, construction, thermal control, salvage, and repair.**

## Target Experience

Starbridge makes several players inhabit different parts of one tactical problem. The commander sees infrastructure, reserves, threats, and failure chains. Pilots feel distance, momentum, incoming fire, local visibility, and the time required to reach anything the commander has marked. Neither view is complete.

A good session should produce requests rather than orders: cool the eastern radiator before fabrication stalls; intercept the bomber before it reaches torpedo range; recover a pod before the next wave. Players should disagree about priority because they possess different information and risk different assets, then discover whether their coordination was good enough.

The defended station is not scenery. It fabricates, senses, shields, cools, repairs, launches, stores, and gives damaged ships somewhere to return. Pilots extend its reach; the commander turns their salvage and attention into continued capacity. Victory should feel like keeping a complicated workplace alive under attack, not clearing enemies from a neutral arena.

## Design Pillars

### Asymmetric Clarity

Commander and pilot interfaces expose different work without hiding the shared state that connects it. A pilot can see where cooling, repair, docking, salvage, or interception is physically possible. The commander can see why those actions matter to station survival. Role differences should create coordination, not an information tax that requires one player to narrate the whole UI aloud.

### One Shared War Machine

Power, heat, fabrication, defenses, ships, salvage, and support equipment are parts of one operating system. A choice in one layer must create legible consequences elsewhere. Rushing fabrication may consume power and thermal margin. A pilot carrying coolant gear sacrifices another loadout opportunity. Salvage left outside the perimeter is unavailable for repairs. The station and ships should never feel like separate games sharing a scoreboard.

### Communication Without Command Custody

The commander allocates station resources, places structures, exposes priorities, marks targets, and requests support. The commander does not author pilot movement or seize a pilot's ship. Pilots decide whether, when, and how to answer. They may refuse a task because their route is unsafe, their ship cannot perform it, they judge another threat more urgent, or they simply disagree.

Refusal must remain playable rather than becoming sabotage by definition. Marks should convey purpose and urgency without turning into compulsory waypoints. The resulting social contract is cooperation among roles with bounded authority, not one player treating the others as cursor-operated units.

### Support Changes Outcomes

Cooling, repair, rescue, sensing, hauling, anchoring, and target marking must be capable of saving a run. They should require position, timing, equipment, and exposure rather than becoming passive auras. Combat ships also need reasons to protect support work, and support pilots need tactical decisions beyond following the most damaged health bar.

### Readable Pressure Before Content Volume

The first useful Starbridge proof needs a small vocabulary with strong interactions. Players should understand which attack is arriving, what system is failing, what intervention remains possible, and why the group lost. More factions, ships, structures, and technology are valuable only after the basic pressure is readable.

## Player Roles And Contract

### Station Commander

The commander operates the station map and its constrained reserves. Their work includes routing power, managing heat debt, scheduling fabrication, placing or restoring infrastructure, assigning automated defenses, exposing sensor information, marking priorities, and choosing where scarce salvage is committed.

The commander owns station actions, not the pilots. A construction request can project a site into space, but a pilot chooses whether to anchor it. A rescue priority can identify a pod, but it cannot redirect a ship already screening a bomber. Commander mastery comes from making the situation intelligible, preserving options, and asking for work the team can physically perform.

### Pilots

Pilots fly persistent or scenario-provided ships through the local battlefield. They fight, scout, haul salvage, recover pods, cool or repair station systems, anchor construction, change equipment while docked, and contest threats beyond the station's direct reach.

Pilots own their movement and immediate tactical commitments. Loadout creates opportunity costs: a ship equipped for coolant transfer, towing, field repair, or sensing gives up space or performance elsewhere. Support remains a choice with visible value, not an assumed obligation imposed by matchmaking role.

### Shared Decisions

Some decisions do not yet have a settled owner. Recovered technologies, contested station stock, and scarce replacement ships may affect the whole run while being acquired by one pilot or exposed through the command interface. Whether these use commander selection, pilot possession, group vote, first claim, or a contextual rule remains an open design decision. The final mechanism must show who decides and permit disagreement without freezing the session.

## Session Loop

### Briefing And Loadout

The group selects a scenario and sees the defended site's purpose, starting condition, known attackers, environmental pressure, and immediate objective. Pilots choose ships and equipment within scenario constraints. The commander reviews station systems and available procedures. The briefing should reveal enough provenance to make the attack specific without solving later surprises.

### Build Window

The commander spends limited stock on initial infrastructure, defense, sensing, or fabrication. Pilots launch, inspect the perimeter, collect nearby resources, test routes, and anchor projected structures. Preparation is short enough that incomplete knowledge and imperfect coverage remain part of the run.

### Attack Wave

Enemies pressure several systems at once. Fast craft test interception, siege units create deadlines, missile or boarding threats demand point defense, and salvage-oriented attackers may exploit wrecks rather than merely damage the core. The commander tracks the station-wide pattern while pilots act inside local geometry and travel time.

### Stabilization

The surviving group recovers pods and wreckage, repairs or replaces equipment, vents accumulated heat, restores station functions, and chooses how to spend recovered technology or salvage. Stabilization is not a risk-free shop screen: remaining threats, damaged routes, limited docking space, and the next-wave clock can preserve urgency.

### Escalation And Finale

Later waves recombine known pressures, introduce command units, and attack the team's established habits. A finale should test the infrastructure and relationships built during the run rather than introduce an unrelated boss grammar. Victory preserves the defended objective and records a legible aftermath; defeat should identify the chain of failures that reached the station.

## The Shared War Machine

### Station Capacity

The station converts reserves into tactical capacity through power, shielding, sensing, defense, fabrication, cooling, docking, and repair. This is a functional vocabulary, not a promised catalog.

Three pressures organize the first prototype:

- **Power** runs active systems and makes simultaneous demand visible.
- **Mass** represents salvage, ammunition, parts, and fabrication stock.
- **Heat** limits sustained activity and turns overclocking into shared debt.

Heat is the most distinctive shared pressure. Weapons, shields, fabrication, damage, and overclocking can consume thermal margin. Radiators expose vulnerable infrastructure. Pilots may carry coolant or help vent a threatened system, buying time at the cost of position and loadout. Heat should create spatial work and tactical deadlines, not merely fill another bar.

### Salvage And Recovery

Destroyed enemies and structures leave recoverable mass, components, records, or technologies. Salvage has a location, travel cost, and claim on pilot attention. The commander may need it for immediate repair while a pilot sees an exposed technology worth risking the ship to retrieve. Enemy doctrine can also target wreckage, turning recovery into a contested objective.

Ship destruction should usually produce a survival pod rather than remove the player from the session. Another pilot or station system can recover the pod; replacement craft depend on available stock and docking capacity. Loss therefore damages group resources and position while creating rescue work. It should hurt without converting one mistake into spectator mode.

### Construction And Field Support

The commander projects a construction ghost from available station plans. A pilot reaches the site and holds or performs an anchoring action while exposed. The station then commits mass, power, and fabrication time. This keeps RTS placement tied to physical space and gives pilots agency over whether a proposed site is reachable.

Repair, coolant transfer, towing, sensing, and rescue follow the same rule: the capability must be equipped, the target must be reachable, and the action should expose the ship to a meaningful tradeoff. Automation can assist routine work without erasing the player decisions that make support a role.

## Scenarios And Provenance

A Starbridge scenario is a bounded remix of six elements:

1. a defended site with a material purpose;
2. its starting infrastructure, stock, and damage;
3. an environment that shapes movement, sensing, or heat;
4. attackers with a production history and tactical doctrine;
5. a wave or objective structure that tests particular dependencies;
6. recovered technology and an aftermath tied to what occurred.

Faction provenance should change play. An attacker shaped by thermal engineering should pressure cooling and yield different recoveries from raiders seeking intact hulls, automated siege machines, or an unknown probe ecology. The GDD does not select a canonical first attacker. Named setting factions may support later scenarios only after their owner notes justify the doctrine, motive, location, and technology being used.

Representative enemy jobs include scouts that expose weak routes, skirmishers that screen heavier units, bombers or siege craft that create deadlines, boarding or breach units that attack internal function, missile platforms that test interception, and recovery units that steal wrecks. These are mechanical roles, not a committed roster.

The environment should also be playable. Aetheria's luminous nebulae can form gravitational terrain: ridges, valleys, currents, and surfaces that shape approach vectors and visibility rather than serving as wallpaper. Other scenarios may use debris, station geometry, weather, or orbital relationships, provided the terrain remains readable to both interfaces.

## Progression And Continuity

Within a run, recovered technologies can alter structures, equipment, automation, or operating limits. Choices should create visible divergence without requiring a large permanent tech tree. Exceptional recoveries should reflect the defeated system's provenance and the risk required to obtain them.

Between runs, Starbridge may hand bounded results to the broader [[Aetheria Client and Modes|Aetheria client]]. The [[Aetheria Client and Modes#Hangar|Hangar]] may retain ships, equipment, presets, and cosmetic identity. [[Aetheria Client and Modes#Commander Continuity|Commander continuity]] may retain roster relationships, stress, scars, refusals, and learned procedures. Neither continuity system is required to prove the core session loop, and this document does not promise implementation order.

Persistence must not make scenarios decorative. A veteran player may bring identity and options, but the defended site still owns its material constraints. Likewise, staff progression should change command decisions rather than exist only as flavor generated after a match.

## Presentation Invariants

The commander interface is map-first and operational. Power, heat, shields, fabrication, incoming vectors, pilot position, build sites, and damaged systems must be readable without digging through decorative panels. Warnings should point to the affected place and explain the threatened function.

The pilot HUD preserves the physical act of flying. It prioritizes ship and thermal state, objective, marked threats, base direction, nearby support opportunities, docking or salvage prompts, and spatial warnings. It should not become a miniature RTS display.

Art should communicate industrial survival in luminous deep space. Structures need legible functions; ships and enemy jobs need distinct silhouettes; shields, coolant, repair, construction, and attack vectors need different visual languages. Spectacle serves tactical reading. The nebular surface should carry depth and motion without hiding threats.

Audio carries role-specific information. Command audio emphasizes system completion, power or shield failure, fabrication, and wave direction. Pilot audio emphasizes engine strain, thermal danger, impact direction, locks, support tools, and commander marks. Shared events—core breach, bomber arrival, shield collapse, pod launch, final escalation—should be recognizable to the whole group.

## State Authority Invariant

Every consequential action must have one visible authority boundary. The commander decides station allocation and station-system commands. Each pilot decides ship movement and chosen actions. Shared inventory, docking, recovery, and technology decisions require an explicit session authority rather than competing client-local truths.

This is a design invariant, not a networking prescription. Any implementation must make its actual authority map and failure behavior inspectable. An action that lacks authority should fail visibly rather than rely on later reconciliation to hide split ownership.

## Success Tests

The concept earns further production work if a small prototype can demonstrate that:

- new players can identify the station's immediate danger and their role in answering it;
- commander and pilots remain meaningfully occupied without performing the same work through different cameras;
- pilots can refuse or redirect requests without the interface treating refusal as loss of control;
- cooling, repair, rescue, hauling, sensing, or construction can prevent defeat as decisively as direct damage;
- ship loss creates recoverable tactical and resource pressure rather than prolonged spectator time;
- in-run technology choices make two sessions diverge in ways the group can explain;
- groups lose through readable failures in coverage, heat, resources, travel time, or coordination rather than opaque rules;
- shared actions resolve under one visible authority boundary without inventory or station state splitting between clients.

## Open Decisions

1. Who resolves contested recovered-technology and station-stock choices: commander, possessor, vote, claim rule, or scenario-specific authority?
2. Which station pressures belong in the first prototype beyond power, mass, and heat; does cognition produce play or only another meter?
3. How should pod recovery balance rescue risk, persistent hull attachment, and the station's replacement stock without turning loss into spectator time or trivial replacement?
4. What smallest scenario proves attack, thermal support, salvage, construction, recovery, and readable defeat without requiring a faction campaign or persistent progression?
