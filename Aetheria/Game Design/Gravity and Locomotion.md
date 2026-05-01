# Gravity and Locomotion

Aetheria's movement model begins with the Grid: a two-dimensional play surface where the vertical axis visualizes gravitational potential. Ships glide across that surface while stars, planets, wormholes, projectors, and other bodies deform it.

This is not hard realism. It is a playable translation of gravity into terrain.

## The Grid

The Grid makes gravitational force readable. Slopes pull ships. Wells become terrain. Field lines, contour lines, minimap shaders, and dynamic displacement all help turn invisible physics into something the player can steer through.

The shader planning document treats this as one of Aetheria's signature ideas: where other games might place static environmental art, Aetheria paints gravity into render textures and renders the environment from dynamic fields.

## Thrusters

Conventional thrusters change ship direction and velocity. Mass matters through inertia. Some ships thrust mostly forward; others can strafe more freely. That difference should make hull identity tactile. A heavy ship should feel committed. A nimble ship should feel expensive in all the ways nimble things usually are.

## Warp Locomotion

Warp drives and projectors alter velocity by creating localized gravity fields. A ship can push itself, bend the local field, or project force at range. This gives movement and combat the same grammar: gravity is terrain, engine, weapon, and hazard.

## Grid Traction

Some hulls can grip the Grid, rotating their velocity vector forward and producing a flight feel closer to atmospheric maneuvering. At higher levels, traction can let ships park or maneuver on gravity slopes in ways other ships cannot.

Design implication: traction is not merely easier steering. It is a tactical identity, useful for ambush, silent movement, positional control, and weird maneuvers around wells.

## Wormholes And Fast Travel

Special wormholes can connect distant parts of the galaxy. The older GDD makes fast travel costly: the required item consumes major energy and produces crippling heat. The exact implementation can change, but the principle is worth preserving: keep the punishment attached to the miracle.

Fast travel should solve distance while creating exposure. If a jump is always clean, it is a menu button. If it leaves the ship hot, visible, drained, or dependent on rare infrastructure, it becomes a decision.
