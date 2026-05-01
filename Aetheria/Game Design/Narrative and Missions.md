# Narrative and Missions

Aetheria's narrative systems should let authored story inhabit generated space without turning the galaxy into a row of cardboard quest booths. The codebase already points in that direction with Ink files, location data, quest data, a `StoryProcessor`, zone constraints, faction resolvers, and selectors that can place content according to distance, ownership, and faction presence.

## Mission Placement

The best mission placement starts from conditions:

- which faction owns or influences the zone
- how far it is from a named point
- whether a route is contested
- whether a station, resource, or population is present
- what local security allows
- what the current economy has made scarce or valuable

This lets authored missions feel less like stickers. A spy rendezvous, extraction job, factory incident, sabotage request, or rescue should appear where the setting says such a thing would plausibly happen.

## Authored Pressure

The Ink material in `GameData/Narrative` suggests a tone that can be sharp, funny, dangerous, and politically messy without becoming weightless. Missions should preserve that bite. Aetheria can have jokes. It should also remember who gets billed for them.

The ARPG GDD describes scattered interactive stories, some repeatable and some happening only once per reset with consequences that echo through the timeline. Many begin through station NPCs but can remain active after undocking or even follow the player indefinitely.

## Faction Voice

Faction missions are one of the cleanest ways to teach the setting. A job from [[Worldbuilding/Pre-Elysium/Factions/Powers/Major/Lucent Media|Lucent Media]] should not feel like a job from [[Worldbuilding/Pre-Elysium/Factions/Powers/Major/Sol Dominion|Sol Dominion]], [[Worldbuilding/Pre-Elysium/Factions/Powers/Major/Framgång]], or the [[Worldbuilding/Pre-Elysium/Factions/Powers/Major/Pirate Coalition|Pirate Coalition]]. The objective, payment structure, euphemisms, risk transfer, and failure language should all expose the institution behind the request.

## Consequence

Narrative consequence does not always need a branching cinematic. Sometimes consequence is a market shift, a new patrol, a closed dock, a cheaper weapon, a hostile faction, a worker population displaced into another system, or a rumor that changes how a station greets the player.

## Campaign And Rogue-Lite Use

[[End of the Line|Terminus]] can use narrative as run texture and long-form campaign memory: route events, faction encounters, mission chains, shipboard conversations, and recurring obligations. The full persistent game can use the same grammar at larger scale, where corporate actions create the mission ecology field players keep mistaking for bad luck.

Subspace dungeons from the older GDD are especially useful for Terminus-scale structure: dangerous wormholes leading into chaotic maze-like space, with escalating enemies, exits, bosses, and rewards. They should be adapted carefully into current cosmology rather than copied as a loose arcade appendage.
