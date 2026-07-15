---
title: Gravity and Locomotion
description: "Historical movement and visualization concept for making facing, velocity, force, and route commitment readable in flight."
---

# Gravity and Locomotion

> **Status: historical movement and visualization concept.** This note preserves a playable flight language. It does not establish physical canon, a current control model, or implementation status.

## The Grid Is An Instrument

The Grid is a projected two-dimensional play surface whose displacement can visualize gravitational potential, environmental pressure, or other scenario-owned fields. It is not a literal membrane in space. Ships do not grip it, slide down a physical shader, or acquire atmospheric traction because the renderer draws a slope.

A useful flight view must keep five things distinct:

- **facing:** where the hull and its directional equipment point;
- **velocity:** where the ship is actually moving;
- **force:** what is currently changing that velocity;
- **predicted path:** where the present motion and known forces lead;
- **field estimate:** the instrument-derived model of local conditions being projected.

Contours, arrows, trails, and predicted-path marks may overlap the Grid, but the player must be able to tell observation from forecast and forecast from command.

## Movement Loop

The player reads facing, velocity, nearby bodies, field cues, and the projected path; chooses thrust, attitude, braking, or a route around the pressure; then watches the prediction change before committing again. Good movement creates decisions about arrival geometry rather than merely shortening distance.

Hull identity comes from inertia and actuator layout. A heavy ship preserves momentum and punishes late corrections. A lighter or more laterally capable hull can change attitude or velocity sooner, usually by paying through mass allocation, heat, power, durability, or cargo capacity. Facing and motion need not agree, and equipment arcs make that disagreement tactically meaningful.

The projection must not invent certainty. If mass, position, or a field source is only estimated, its deformation and predicted path should carry the same uncertainty. A display may exaggerate height or curvature for legibility; labels and consistent cues must prevent that exaggeration from becoming a false physical measurement.

## Era Boundary

Pre-Elysium flight uses conventional observation, navigation models, thrust, reaction mass where required, and instrument projections of ordinary physical conditions. The Grid may visualize those conditions, but it is not a pre-Elysium technology acting on the ship.

Post-Elysium scenarios may depict expressive or literal field effects only where current canon supports them. An [[Worldbuilding/Post-Elysium/Technology/Aetheric Drive|Aetheric Drive]] exchanges commanded momentum with the [[Worldbuilding/Post-Elysium/Concepts/Aether|Aether]] through phased coupling. It does not create a private gravity field or grip the Grid. Any anomaly, pseudospace transition, or terrain-like force remains owned by its scenario and setting source.

## Smallest Coherent Proof

A local-motion proof needs one ship, one nearby body or field source, visible facing and velocity, a predicted path, and one destination whose arrival geometry matters. The player must be able to thrust, coast, turn, brake, and revise a maneuver before commitment.

The proof succeeds when the player can distinguish facing from motion, explain which force changed the path, and arrive through deliberate correction. It fails when the Grid implies false certainty, when steering silently cancels inertia, or when success depends on rapid travel or galaxy-scale navigation outside the local scenario.
