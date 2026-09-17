# Transponder Credentials

A **transponder credential** is the registered identity a ship broadcasts to anyone whose sensors can pick it up. Once another crew has detected your ship, it can read your credential and know which registered hull it is dealing with. It can also see whether that hull currently treats it as hostile or neutral.

For a working crew, the credential decides almost everything that happens at a gate or in a fight. It is how a port decides whether to give you a berth and how an insurer decides whether you are covered. When somebody opens fire, it tells everyone watching who did it. Flying without one is possible. It also makes you the most suspicious object in the sky.

## What a Crew Sees in an Encounter

Detection comes first. A heat trace does not identify itself: it could be a ship, a drone, a decoy or a hulk (see [[Worldbuilding/Politics/Thermal Signature Warfare|Thermal Signature Warfare]]). Only after sensors have gathered enough on a contact does its transponder become readable. Then the crew learns which registered hull it is and what stance that hull has taken toward them.

Stance is part of the broadcast. A crew that declares another ship hostile does so openly: the target can read that declaration as soon as it detects the declaring ship. Switching back to neutral safes the crew's own weapons. It does not make the other side forget. Most crews and most automated defenses treat a hostile declaration as an attack in progress, and they keep treating the declaring hull as an enemy long after it has changed its broadcast.

## Drones Carry Their Launcher's Credential

Drones do not fly anonymously. Each drone carries a credential delegated from the ship that launched it, and its broadcast names that ship. Weapons fire is hard to hide, so a crew attacked by a drone usually sees the drone. The moment it reads that drone's transponder, it knows which hull sent it.

This is why drone swarms are such an effective way to hunt. A captain can find, pin down and destroy a target without ever coming close enough to be detected. The target learns the attacker's identity from the drones, but it cannot see where the launching ship is. Drones can also mask their heat signatures, so the swarm itself may be hard to count.

## Why Anyone Trusts the Code

A transponder signs each broadcast with a key bound to its hull. The key is issued through a registrar that participates in the [[Worldbuilding/Post-Elysium/Reference/Port-Insurer Compact|Port-Insurer Compact]]. Forging a valid credential from nothing is not realistic. What the credential proves is narrower than people sometimes assume. It proves which registered key produced the broadcast. It does not prove who is holding that key today.

That gap is where outlaws work. A crew that wants to fire without being named cannot fake a credential, but it can use someone else's real one. Keys get stolen from captured ships, borrowed from accomplices, bought from failing operators, or issued to a front company that exists for a single job. A known gambit uses two unconnected credentials. The crew attacks a merchant with a swarm under one of them, then arrives under the other to "rescue" the merchant. The merchant correctly blames the first credential and has no way, in the moment, of linking it to the rescuer.

Running dark is not a better option. A drone or ship broadcasting no valid credential is treated as unregistered hardware: hostile to everyone, refused at every berth, excluded from every policy. Outlaws therefore carry transponders like everyone else. The dishonest version is a real identity in the wrong hands.

## What a Burned Credential Costs

Every credential that fires on someone collects reports. Victims, witnesses, ports and insurers file them, and registrars act on them through the Compact. A credential used for piracy is surcharged, restricted and eventually revoked. The ship behind it can no longer dock or insure itself under that identity.

A laundered credential is therefore a consumable, and a valuable one. Crews spend them on operations and then discard them. A stolen key from a clean, well-insured hull is worth real money, and taking one is a reason to board a ship instead of destroying it. That makes crews that fly clean credentials into targets for theft. The ships they deal with rarely learn that until a report comes back naming a hull that was in dock at the time.

## Valid but Incoherent

Some credentials check out cryptographically but tell an impossible story. The issuance record may not connect to any registrar session. A hull may broadcast a key registered to a different class of ship. A credential's history may place it in two places at once. After the Rupture, contradictory records are common enough (see [[Worldbuilding/Post-Elysium/Reference/Continuity Admissibility Finding|Continuity Admissibility Finding]]) that an incoherent history does not prove fraud on its own.

Careful crews treat such contradictions as warnings rather than verdicts. With a good sensor suite and enough time on a contact, a crew can notice that a transponder is valid while what it can see of the ship does not match. That is often the only clue that a rescue ship and the swarm it chased off belong to the same crew.
