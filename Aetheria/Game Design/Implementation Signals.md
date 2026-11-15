---
title: Implementation Signals
description: "Dated source snapshot separating Aetheria's current Terminus demo design, inspected scenario contract, and unverified release goals."
---

# Implementation Signals

> **Source snapshot, inspected 2026-11-15:** `F:\Projects\Aetheria`, branch `master`, commit `a4be037a4`. The repository has local asset changes; this inspection did not edit it. Source tests were read but not run. The operator's current release plan is a Terminus demo in December 2026; that timing comes from the operator, not from the source release document.

This note separates three kinds of evidence: the release design, the scenario contract visible in source, and behavior that still needs a played build or a test run. It is a snapshot, not a promise that the source will stay at this revision.

## Current Product and Release Plan

`docs/aetheria-release-target.md` calls the first release a demo named **Terminus (Demo)**. It scopes the demo to one fixed region, one gate, one boss, and four factions: the Pirates, Zhestokost, Lucent Media, and Aeronautics Unlimited. The complete game remains larger: three procedurally generated regions with enough faction variety to create different challenges and stories.

The release target describes a full run from New Game to victory or defeat. It calls for a boss-locked gate, docking services to buy, sell, and repair, credits that persist across save and Continue, faction behavior players can distinguish, readable and audible combat feedback, and enough faction hulls and equipment to make the choices matter. The document calls these release requirements; its presence does not prove each item is complete.

## Scenario Contract In Source

`Assets/Scripts/ServerShared/Scenarios/Scenarios.cs` lists `DemoTerminus` as the only release mode. Tutorial and main galaxies are development scenarios; the remaining entries are system-test scenarios.

`Assets/Scripts/ServerShared/Scenarios/DemoTerminus.cs` defines a 64-zone region with links thinned to half density. The cast is fixed: Pirates as protagonist faction, Zhestokost as antagonist, Lucent Media as buffer, and Aeronautics Unlimited as neutral. It places the gate at the antagonist's home and sets the player to Friendly with the Pirates, Hated by Zhestokost, and Neutral with the other two factions.

The player starts in a Longinus hull at the entrance. `tests/Aetheria.Shared.Tests/DemoTerminusTests.cs` asserts the fixed cast, gate and boss-zone placement, region size and link density, and Longinus start. The test source also asserts that release mode is named `Terminus (Demo)`. These are inspected assertions, not a report that the test suite was run during this pass.

`Assets/Scripts/Gameplay/ActionGameManager.cs` names a successful escape as the demo and says the whole game is still to come. This matches the release distinction: Terminus is the product; Terminus (Demo) is its first release.

## Scope Boundary

The release target explicitly leaves authored narrative, storylets, Ink beats, multiplayer, and the full three-region game outside the demo. Ink files in the repository are not by themselves evidence that their stories play in the release build.

The game-design pages in this vault describe broader system intent. [[End of the Line|Aetheria: Terminus]] owns the product and demo description; [[Action RPG Layer]], [[Heat, Stealth, and Detection]], [[Gravity and Locomotion]], [[Faction Play]], and [[Economy and Production]] own the relevant play systems. Treat details in those design notes as design unless this dated source map records the behavior as inspected and the relevant test or build has actually been checked.

## Open Source/Design Mismatch

The release target says the New Game ship is made by the Pirates. The inspected scenario test instead requires a Longinus made by Alakrita, with no player faction assigned. Resolve this with the product owner before writing player-facing release copy about the starting hull or changing either claim. The source test describes the current scenario contract; it does not silently rewrite the release target.
