# Economy and Production

Aetheria's economy is not a vendor table with lore wallpaper. It is the main pressure system. The world should make the player feel that every weapon, hull, route, station, repair, and contract came from somewhere, passed through someone's control, and left someone else with the risk.

## Commodities And Cargo

The active implementation already contains simple and compound commodity categories, cargo bays, cargo transfer, docking bays, trade UI, inventory UI, and item storage geometry. That points toward an economy where goods are physical enough to matter. Cargo is not just a number. It occupies volume, constrains ship design, invites theft, and turns travel into exposure.

Cargo should also have thermal capture properties. The same pirate tactic that cleanly seizes ore or hardened components destroys volatiles, batteries, wetware, seed stock, uploads, precision optics, luxury organics, and fragile medical freight. This gives every manifest a defensive meaning, not just a resale price.

Thermal fragility creates market play:

- merchants advertise fragile cargo, sometimes truthfully and sometimes as deterrence;
- pirates scan cargo bays, coolant topology, and temperature history before committing to a heat squeeze;
- insurers reward authenticated pod corridors, tamper-proof temperature logs, and anti-capture thermal coupling;
- stations discount or reject recovered goods with suspicious thermal exposure;
- smugglers hide rugged contraband behind cold-chain manifests or hide fragile contraband inside hardened decoys.

The result is an economy where cargo identity changes combat behavior. A valuable shipment is not always a good target. Sometimes the safest way to steal it is not to fire.

## Blueprints And Quality

Blueprints define ingredients for craftable items, and ingredients can influence performance stats. That is a quietly excellent foundation. It means production can carry history: a weapon's quality can reflect material choice, manufacturing chain, supplier competence, and corporate doctrine instead of appearing fully formed from the sacred vending fog.

`Profits Rising` adds production tradeoffs directly: every piece of infrastructure can choose between speed and quality, while cost depends on ingredient spending. Fast, cheap, good. Pick your poison and then advertise it as innovation.

Blueprints should be recursive. A finished item can require raw materials,
crafted assemblies, and subassemblies which are themselves instances of their
own blueprints. This continues down to raw materials. The useful unit is not
only "laser cannon" or "reactor," but the focusing lattice, capacitor bank,
coolant collar, actuator cluster, regulator, firmware core, casing, feed
assembly, and every other part whose material history can matter.

Two different finished blueprints can share one assembly. A pirate laser and a
player's laser may have different completed item blueprints while both depend
on the same capacitor bank or focusing lattice family. Salvage therefore is not
generic loot paste. Tearing down a wreck can recover compatible assemblies that
may be installed into another item, consumed by a repair, or used as a pattern
source for fabrication when the local station has the required tools and
inputs.

This gives upgrades a material path:

1. A player owns or fields an item with a known assembly graph.
2. An enemy, station stock item, or recovered wreck contains one or more
   compatible assemblies.
3. Salvage, teardown, or inspection identifies the assembly, its quality, its
   provenance, and any unusual technology hooks.
4. The player can swap that assembly into their own item if the interface,
   size, hardpoint, thermal, firmware, legal, and maintenance constraints are
   satisfied.
5. The finished item's performance changes according to the upgraded
   assembly's quality and stat-scaling hooks.

Quality is not just a single item-level number. Assemblies can carry different
quality, manufacturer doctrine, material inputs, thermal behavior, durability,
failure modes, legality, firmware assumptions, and performance hooks. A higher
quality enemy assembly might make a player's weapon more efficient, more
fragile, colder, louder, more accurate, easier to maintain, harder to repair at
cheap stations, or better at a stat the original manufacturer did not optimize.
That is the good filth: every improvement has ancestry.

Owning a finished component can also act as a practical pattern right. If a
pilot brings a strange laser, the crew does not need to rediscover the whole
technology just to maintain that exact assembly family during a run. They still
need materials, fabrication access, time, and compatible parts, but the owned
component supplies enough shape knowledge to repair, reproduce, or improve its
known assemblies when the economy supports it. This is not universal research
mastery. It is maintenance and fabrication access to a concrete object lineage.

## Performance As Material History

The codebase's `PerformanceStat` model connects item performance to durability, temperature, and crafting quality. This is exactly the kind of mechanic Aetheria should protect. It ties engineering, combat, economics, and maintenance together. A cheap reactor should not merely have smaller numbers. It should fail differently, run hotter, wear harder, and make its owner's options narrower.

## Markets And Leverage

Markets should express power. Prices, availability, quality, legal access, docking permission, route safety, and repair capacity are all ways factions exert control. A poor pilot does not just pay more. They get pushed toward worse risks and worse obligations.

The strategy GDD models local demand, station stock, active transfers, arbitrage, independent traders, and prices that respond to supply and demand rather than allowing infinite profit loops. Independent traders explore, collect market data, then calculate profitable cyclic paths. That is exactly the kind of background activity that can make a galaxy feel economically alive without requiring every hauler to be hand-authored.

## Production Doctrine

Different corporations should produce different kinds of compromise. [[Worldbuilding/Pre-Elysium/Factions/Powers/Major/Zhestokost|Zhestokost]] favors rugged force and controlled deprivation. [[Worldbuilding/Pre-Elysium/Factions/Powers/Major/Aeronautics Unlimited|Aeronautics Unlimited]] favors frontier expansion and scalable logistics. [[Worldbuilding/Pre-Elysium/Factions/Powers/Major/Cryonix|Cryonix]] makes thermal margins political. [[Worldbuilding/Pre-Elysium/Factions/Powers/Major/Finch Cybernetics|Finch]] turns care and enhancement into dependency.

The economy layer should make those identities playable through supply chains, item behavior, market access, and maintenance expectations.
