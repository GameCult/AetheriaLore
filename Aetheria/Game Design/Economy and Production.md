# Economy and Production

Aetheria's economy is not a vendor table with lore wallpaper. It is the main pressure system. The world should make the player feel that every weapon, hull, route, station, repair, and contract came from somewhere, passed through someone's control, and left someone else with the risk.

## Commodities And Cargo

The active implementation already contains simple and compound commodity categories, cargo bays, cargo transfer, docking bays, trade UI, inventory UI, and item storage geometry. That points toward an economy where goods are physical enough to matter. Cargo is not just a number. It occupies volume, constrains ship design, invites theft, and turns travel into exposure.

## Blueprints And Quality

Blueprints define ingredients for craftable items, and ingredients can influence performance stats. That is a quietly excellent foundation. It means production can carry history: a weapon's quality can reflect material choice, manufacturing chain, supplier competence, and corporate doctrine instead of appearing fully formed from the sacred vending fog.

`Profits Rising` adds production tradeoffs directly: every piece of infrastructure can choose between speed and quality, while cost depends on ingredient spending. Fast, cheap, good. Pick your poison and then advertise it as innovation.

## Performance As Material History

The codebase's `PerformanceStat` model connects item performance to durability, temperature, and crafting quality. This is exactly the kind of mechanic Aetheria should protect. It ties engineering, combat, economics, and maintenance together. A cheap reactor should not merely have smaller numbers. It should fail differently, run hotter, wear harder, and make its owner's options narrower.

## Markets And Leverage

Markets should express power. Prices, availability, quality, legal access, docking permission, route safety, and repair capacity are all ways factions exert control. A poor pilot does not just pay more. They get pushed toward worse risks and worse obligations.

The strategy GDD models local demand, station stock, active transfers, arbitrage, independent traders, and prices that respond to supply and demand rather than allowing infinite profit loops. Independent traders explore, collect market data, then calculate profitable cyclic paths. That is exactly the kind of background activity that can make a galaxy feel economically alive without requiring every hauler to be hand-authored.

## Production Doctrine

Different corporations should produce different kinds of compromise. [[Worldbuilding/Pre-Elysium/Factions/Powers/Major/Zhestokost|Zhestokost]] favors rugged force and controlled deprivation. [[Worldbuilding/Pre-Elysium/Factions/Powers/Major/Aeronautics Unlimited|Aeronautics Unlimited]] favors frontier expansion and scalable logistics. [[Worldbuilding/Pre-Elysium/Factions/Powers/Major/Cryonix|Cryonix]] makes thermal margins political. [[Worldbuilding/Pre-Elysium/Factions/Powers/Major/Finch Cybernetics|Finch]] turns care and enhancement into dependency.

The economy layer should make those identities playable through supply chains, item behavior, market access, and maintenance expectations.
