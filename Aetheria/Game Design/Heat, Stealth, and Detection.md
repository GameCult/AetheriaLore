---
title: Heat, Stealth, and Detection
description: "Design-lineage mechanic specification for heat debt, uncertain contacts, staged identification, and commitment under observation."
---

# Heat, Stealth, and Detection

> **Status: design-lineage mechanic specification.** This note defines a player-facing heat and information loop. [[Worldbuilding/Pre-Elysium/Technology/Thermal Management|Thermal Management]] owns the physical substrate, [[Worldbuilding/Politics/Thermal Signature Warfare|Thermal Signature Warfare]] owns its history and strategic use, and [[Worldbuilding/Politics/Combat Doctrine|Combat Doctrine]] owns force employment. No mechanic below establishes current implementation.

Heat binds endurance, performance, stealth, damage, and timing. The player should decide what to reveal, what capacity to spend, and how long a temporary advantage can remain unpaid.

## Player Loop

One information-and-heat exchange follows seven steps:

1. **Receive uncertain evidence:** a passive sensor trace, prior report, emission, maneuver, occlusion, or absence suggests that something may be present.
2. **Interpret it:** inspect confidence, age, source, geometry, and competing explanations. A fresh narrow trace and an old fused estimate do not deserve equal trust.
3. **Choose how to learn:** remain passive, change position, share an observation with its observer, time, and confidence intact, deploy a bounded probe, or scan actively.
4. **Manage exposure:** sensing, thrust, computation, weapons, cooling, and damage control alter heat and signature.
5. **Commit or avoid:** approach, fire, intercept, flee, conceal, negotiate, or preserve distance while uncertainty remains.
6. **Pay the consequence:** stored heat narrows margins; emitted heat improves an observer's evidence; reduced activity surrenders capability or time.
7. **Reassess:** contacts change state as evidence ages, geometry shifts, signatures disappear, or the target reveals itself.

The player should understand why a contact became credible and why their own ship became legible.

## Thermal State And Action

Thermal state needs only enough structure to make decisions causal:

- current load and remaining margin;
- where important heat is held or rejected;
- which actions are generating it;
- which capabilities degrade or fail as margins close;
- what emission a chosen cooling action creates.

Thrusting, active scanning, computation, firing, repair, and damaged equipment may increase load. Coasting, reducing output, storing heat, changing aspect, using clutter, or rejecting heat may restore margin or alter observation. Exact transfer models belong to implementation.

Thermal failure must be readable before it is terminal. Rising load can reduce output, force shutdowns, damage systems, expose radiators, or prevent an answer to a new threat. The player should know which decision created the debt and which action could contain it.

## Stealth As Heat Debt

Stealth does not erase activity. It delays, limits, redirects, masks, or times what an observer can infer. Withholding emission creates **heat debt**: the ship borrows a quiet interval from future operating margin. Remaining quiet may require reduced thrust, sensing, computation, comfort, repair, or weapons readiness. Rejecting the stored heat restores capacity while making the ship easier to detect or track.

The rhythm is simple: hide to improve position, decide whether evidence justifies commitment, then choose when exposure is survivable.

## Contact States

Contacts progress through evidence, not fixed revelation timers:

1. **Detected:** enough evidence suggests a source at an estimated position.
2. **Classified:** evidence supports a broad operational class or several plausible classes.
3. **Identified:** the observer has enough confidence to associate the contact with a specific platform, actor, condition, or claim.
4. **Lost:** evidence has aged or diverged enough that the contact can no longer support the same decisions.

Later states are not permanent. A maneuver can break geometry, a quiet target can outlive the track, and new evidence can expose a confident classification as bait. The interface should show confidence and age without pretending uncertainty is precision.

A fused track is a derived estimate, not a replacement for its sources. It retains the contributing observers, observation times, confidence, and disagreement so later evidence can revise the inference without rewriting what anyone actually saw.

Every contact change needs an explanation such as emission, thrust, radiator exposure, shared observation, changed geometry, occlusion, or stale evidence. “Detected” without a cause teaches superstition.

This mechanic owns contact confidence and age as state. [[Visual and Sensory Direction]] owns how that state is displayed without granting the player knowledge their instruments do not possess.

## Optional Thermal Capture

One optional application is capture through thermal pressure. An attacker may constrain cooling until a crew must reduce capability, surrender, or abandon a hull. It uses the same heat, evidence, commitment, and post-disable choices as other encounters.

## Smallest Coherent Proof

A minimum proof needs two ships, uncertain initial contact, passive observation, active scanning, maneuver, one heat-producing commitment, one cooling or concealment choice, and the possibility of losing a track. It succeeds when a player can answer:

- What evidence did I have, and how old was it?
- Which action revealed me or improved my contact?
- What capability did quiet operation cost?
- Why did the contact change state?
- Which thermal decision caused failure or preserved escape?

If those answers require reading a debug log, the mechanic has produced numbers rather than understanding.

## Era Boundary

Pre-Elysium and post-Elysium encounters may expose different sensors, propulsion, emissions, and countermeasures. Those differences come from the linked canon owners. The player loop remains bounded: evidence creates choices, action creates exposure, and every quiet interval eventually asks what the ship stopped doing to buy it.
