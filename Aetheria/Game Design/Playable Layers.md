# Playable Layers

Aetheria's oldest design ambition is not just "big MMO, but in space." It is two different game fantasies sharing one persistent context: cockpit-scale action and boardroom-scale exploitation, both pretending they are the main character while the universe quietly sharpens the knife.

## Action RPG Layer

The ARPG layer is the player's embodied experience of the galaxy. It covers ship control, combat, missions, trade, travel, exploration, salvage, docking, crew-facing narrative, and the constant practical question of whether the next jump is worth the damage it may cost.

This layer is where [[End of the Line|Aetheria: Terminus]] made the first major retreat from the full persistent galaxy: route-first, rogue-lite, still system-heavy enough to make a producer start quietly reviewing their life choices. [[Call of the Void]] is the deeper cut below that: fewer generated systems, more curated cases, stronger character continuity, and less temptation to rebuild the entire galaxy because the coffee tasted optimistic.

## Corporate Strategy Layer

The strategy layer lets players operate as corporations rather than lone operators. The dated but still dangerous `Profits Rising` planning line points toward corporations defining population roles, gathering resources, building infrastructure, researching technology, producing items, and competing for economic dominance.

This layer should create the material conditions the ARPG layer has to inhabit. A corporate decision is not only a menu choice. It becomes a shortage, a patrol, a cheap weapon flooding the market, a station that needs protection, a new route worth raiding, or a worker population trapped inside somebody else's growth plan.

## Shared Persistent World

The shared world is the hard part, naturally. The active `Aetheria-Economy` work surface gestures toward it with shared server/client simulation code, common serialization, factions, zones, galaxies, generated routes, cargo, equipment, narrative placement, and a server process intended to own persistent state.

The design problem is to decide which interactions must be live and which can be summarized. Not every corporate decision needs to spawn a bespoke cockpit encounter. Not every player dogfight needs to update a quarterly report. The useful overlap is where one layer creates pressure the other layer can understand.

## Near-Term Shape

The release path should keep the layers honest without requiring them all to ship at once:

1. Treat [[End of the Line|Terminus]] as the first reduced ARPG slice: route pressure, combat, ship builds, and procedural survival.
2. Treat [[Call of the Void]] as the further step down if Terminus remains too large: PI cases, taxi fares, station districts, faction pressure, and the early Elysium revelation.
3. Preserve the design language of corporate pressure even when the first playable build is single-player or limited-scope.
4. Keep data models and content categories compatible with later economy simulation.
5. Introduce strategy-scale systems only when their outputs create better field play.
6. Let the full persistent loop emerge from working slices instead of demanding worship from a cathedral made of TODO comments.
