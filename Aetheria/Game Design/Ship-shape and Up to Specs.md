# Ship-shape and Up to Specs

<figure class="aetheria-media-card">
  <img src="../media/aetheria/longinus.png" alt="Aetheria ship customization artwork." />
</figure>

Ships in Aetheria are tools, homes, status symbols, and compressed ideological arguments with engines attached.

Customization goes deep: components with distinct behavior, megacorporate manufacturers with their own priorities and specialties, and plenty of room to tune a vessel for violence, trade, survival, logistics, or prestige. The point is not only personal expression. It is to make every ship feel like a material compromise between who built it, who owns it, what it must survive, and what sort of life it is expected to enforce.

<figure class="aetheria-media-card is-portrait">
  <img src="../media/aetheria/adrasteia-ship.png" alt="Adrasteia ship render against a blue nebula field." />
  <p>A later Adrasteia ship render from the prototype era, with the material model more fully resolved: sharp, luxurious, predatory, and far too pleased with itself. Correct energy.</p>
</figure>

## Mechanical Identity

The active implementation treats ships as entities built from hulls, equipped items, behaviors, cargo bays, docking bays, heat maps, durability, visibility, faction relationships, and weapon groups. That is the correct disease. Keep it.

A ship build should express:

- hull shape and hardpoint layout
- power generation and storage
- heat production, routing, buffering, and radiation
- weapon timing, range, and damage profile
- shield behavior and vulnerability windows
- cargo and docking capacity
- sensor range, visibility, and stealth tradeoffs
- manufacturer doctrine and material quality

## Design Consequence

Aetheria's best ship customization is not "more slots means more better." It is choosing what kind of trouble the vessel is allowed to survive. A combat ship can become logistically useless. A trader can become a slow coffin. A stealth build can win one encounter and then cook itself in silence. A luxury hull can be exquisite right up until it discovers what cheap repair infrastructure thinks of exquisite people.

## Link To Economy

Ships should carry production history. Blueprints, component quality, commodity inputs, corporate standards, and maintenance access should affect performance. A cheap gun, a premium radiator, a copied hull plan, and a black-market reactor all belong to the same argument: every advantage came from somewhere, and somewhere usually wants payment.

## Planned Item Families

The planning docs define a broad ship equipment grammar: hulls, weapons, shields, coolers, reactors, thrusters, warp thrusters, sensors, heatsinks, AI cores, jammers, ship scanners, planet scanners, anchors, mining tools, and cargo infrastructure. The final list can change, but the shared attribute layer is still valuable: mass, size, draw, tech level, rarity, thermal conductivity, specific heat, performance curves, ruggedness, and durability.

That common attribute layer is what lets equipment belong to one simulation instead of becoming a zoo of unrelated exceptions.

## Munition Hulls

Loitering munitions should use that same grammar once they become more than simple missiles. The current implementation can treat ordinary guided weapons as projectile effects, but the setting's real loitering munition is a small built entity: an alternate hull type with its own hardpoints, heat budget, thrusters, sensors, autonomy, warhead, telemetry, signature masking, and self-neutralization behavior.

The launcher should own storage, arming, launch signature, reload logistics, and command interface. The munition hull should own flight, loitering, sensing, masking, heat, target confirmation, terminal commitment, abort behavior, and whether it can be recovered as salvage or evidence. That split keeps the weapon from becoming a pile of special flags. A cold Cryonix loiterer, a pirate remora, a PSC-compliant witness package, and a Zhestokost assault munition can all be different loadouts on the same small-hull architecture.

The same architecture should also blur "drone" and "munition." A PDC drone, spotter, relay, beacon, illuminator, mine, Remora, or loitering package is a role produced by components and current orders, not a sealed item category. If the hull has sensors, thrust, cognition, telemetry, and a point-defense weapon, it can defend the carrier, hunt enemy drones, force reveals, or spend itself to ruin an incoming munition's terminal geometry. That is one example of a broader rule: a capability that usually reads as support or defense can become the matchup plan when it attacks the opponent's shortest clock. Build surface first; battlefield role second.

This also preserves the playable promise of shipbuilding at smaller scale. The player is not merely buying "missile, better." They are choosing what kind of unanswered question to release into the battlespace.
