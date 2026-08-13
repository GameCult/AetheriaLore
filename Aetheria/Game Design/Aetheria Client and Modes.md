---
title: "Aetheria Client and Modes"
description: "Concept specification for Aetheria's cross-mode shell, shared player continuity, and runtime boundaries."
---

# Aetheria Client and Modes

> **Status: concept specification, not a release roadmap.** [[Aetheria Starbridge|Starbridge]] has a developed draft GDD. Arena and Conquest remain historical hypotheses. The [[Persistent Universe and Reset Loop|persistent world]] is the long-horizon design north star, not a claim about sequence, funding, availability, or current implementation.

The Aetheria client is the proposed durable home around multiple playable views of one simulation. It should manage identity, parties, sessions, shared player possessions, and recovery when a role-specific runtime disconnects. A mode may change the immediate rules without quietly becoming the owner of the player's account or equipment.

## Shell Responsibilities

The desktop client should own the cross-mode surfaces:

- account and profile identity;
- party state, invitations, and role selection;
- session creation, joining, and reconnect;
- settings shared across runtimes;
- the Hangar and commander continuity surfaces;
- launch context for role-specific clients.

The shell should show only experiences that actually exist in the connected environment. It may advertise developed or future modes separately, but an aspirational design must not masquerade as a playable queue.

## Hangar

The Hangar is the player's machine-continuity surface. It contains owned ships, equipment, saved loadouts, component access, cosmetics, names, and the maintenance state that persists beyond one scenario. Modes consume approved loadouts and may apply their own starting conditions, temporary stock, damage, or normalization. They do not fork the inventory.

The invariant is:

> Player inventory and loadout state have one durable owner. Every client and mode is a view or bounded consumer of that state.

This prevents a website inventory, desktop inventory, pilot inventory, and scenario inventory from becoming four accounts that reconcile only after somebody loses a ship. Renderer caches and scene objects may represent equipment without becoming durable truth.

Starbridge can contextualize a ship through scenario stock, recovered technology, repairs, and run-local pressure. A future competitive mode might validate the same assembly under different entry rules. Persistent ownership defines which machine the player has built; the mode defines what that machine may bring into the current problem.

## Commander Continuity

Commanders need continuity comparable to a pilot's attachment to a ship, but they should not carry a custom station into every scenario. The scenario owns its base, starting equipment, available technology, salvage ecology, enemies, and infrastructure constraints. The commander owns an operating history.

The current Barracks concept represents that history through a bounded bridge crew. A small roster of officers, specialists, or advisory minds can affect warnings, procedures, automation, resource handling, and emergency options without adding forbidden station equipment. Staff may gain experience, working relationships, stress, injury, leave requirements, or refusal after runs. Those changes should remain inspectable and consequential rather than becoming disposable flavor text.

The compact rule is:

> Scenarios own the available machinery. Commander continuity owns the roster relationships and operating practices carried between scenarios.

Barracks is one candidate progression design. Its exact roster, presentation, and rules are unresolved and are not client architecture.

## Mode Status

| Mode | Status | Relationship to the client |
| --- | --- | --- |
| [[Aetheria Starbridge|Starbridge]] | **Developed draft GDD** | Asymmetric cooperative defense. A shell could form the party, select roles and scenario, expose continuity context, and recover from disconnects. |
| **Arena** | **Historical hypothesis** | A bounded competitive environment proposed to test persistent ship builds, matchmaking, records, and reconciliation. |
| **Conquest** | **Historical hypothesis** | Seasonal campaigns proposed to test territory, logistics, production, faction pressure, and community warfare. |
| [[Persistent Universe and Reset Loop|Persistent world]] | **Long-horizon north star** | The final-form ambition to join embodied and corporation-scale play in one shared history whose extinction loops preserve community knowledge. |

These modes need not coexist or appear in this order. A mode earns promotion through a playable proof and an explicit decision, not by surviving in a planning document.

## Runtime Boundaries

The implementation invariant is narrower than any particular runtime split: every consequential state change has one named authority, and every client is either that authority or a bounded requester and view. Docking, inventory transfer, equipment changes, rewards, and post-session persistence must commit through their durable owner rather than scene-local state.

The boundary should remain visible enough to diagnose. A player who reconnects should be able to learn which session they are joining, which role they hold, which loadout was accepted, and whether an action is pending, rejected, or committed. The client is not merely a launcher. It is the place where several runtimes remain one intelligible product without becoming several competing truths.
