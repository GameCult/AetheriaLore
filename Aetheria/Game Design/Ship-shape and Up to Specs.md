---
title: Ship-shape and Up to Specs
description: "Design-lineage assembly specification for ship identity, material refit, durable condition, and bounded operating authority."
---

# Ship-shape and Up to Specs

> **Status: design-lineage assembly specification.** This note defines a ship-building and refit contract. It does not establish current implementation, setting canon, or a promised equipment catalogue.

<figure class="aetheria-media-card">
  <img src="../media/aetheria/longinus.png" alt="Historical Aetheria prototype artwork showing a customized ship." />
  <p>Historical prototype art. The depicted hull and fittings are not canonical or evidence of a current customization interface.</p>
</figure>

Ships are tools, homes, workplaces, and material arguments. Customization matters when it changes which pressures a vessel survives and which dependencies it accepts.

<figure class="aetheria-media-card is-portrait">
  <img src="../media/aetheria/adrasteia-ship.png" alt="Historical Adrasteia prototype render against a blue nebular field." />
  <p>Historical prototype render. Its visual identity remains useful design evidence; its materials, configuration, and surrounding environment are not current canon or implementation proof.</p>
</figure>

## Ship Identity

A durable ship record should join several facts without pretending they are interchangeable:

- a stable **ship or body key** for the continuing material vessel;
- the current hull body and its structural condition;
- installed item-instance references and their fitted locations;
- configuration, control, calibration, and software state;
- accumulated damage, repair, replacement, and calibration history;
- the maintenance network able to keep the assembly working.

Ordinary refit preserves continuity through changed components. Replacing a radiator differs from rebuilding a destroyed hull around a registry entry. At that boundary, the scenario must distinguish the same body, a legal successor, a reconstructed design, and crew recognition.

## Distinct Authorities

Several identifiers and relationships may disagree:

- **entity key:** the simulation identity used to address current state;
- **hull body:** the physical structure carrying equipment, damage, and occupants;
- **registry identity:** the name, serial, jurisdictional record, and certified configuration recognized by a gate;
- **possessor:** whoever physically controls access to the vessel;
- **operator:** whoever has authority to issue current movement or system commands;
- **title holder:** whoever a receiving office currently recognizes as owning a legal interest in the hull.

Possession does not prove title; title does not grant competent operation. Registry cannot erase an embodied occupant, lien, rescue limitation, or disputed evidence. Interfaces must name the authority behind a command instead of reducing these relationships to `owned`.

## Assembly And Tradeoffs

A build makes geometry, compatibility, mass, power, heat, propulsion, sensors, weapons, cargo, durability, and maintenance interact. Capacity consumes margin elsewhere: stealth may owe a dangerous heat dump; combat may erase profitable cargo; premium assemblies may require inaccessible calibration or parts.

Production and repair history remain relevant because nominally equivalent components can arrive with different condition, quality, provenance, compatibility, and support. The player should be able to inspect those facts before committing a refit and see which claims are missing or contested.

## Refit Commit

A refit is one durable operation, not a visual slot change followed by later reconciliation:

1. identify the ship body and proposed item instances;
2. inspect possession, use and alteration authority, title, liens, licenses, expressed consent or refusal, and adverse claims without treating any one as proof of the others;
3. validate geometry, hardpoint, power, thermal, control, and scenario constraints;
4. reserve labor, tools, facilities, time, and consumables;
5. remove and transfer old items without deleting their histories;
6. install and calibrate the accepted configuration;
7. commit the resulting installed state through the durable ship owner and issue a receipt or partial-work record.

The inventory owner authorizes item transfer. Compatibility validation decides whether the assembly can work. Neither grants lawful alteration or clean title. An illicit physical refit remains illicit and carries its claims forward. The durable ship-state owner commits the fitted result.

A receipt records the before and after assembly states, item transfers, consumed work, authority used, unfinished work, and recovery path. Failure remains material and inspectable rather than disappearing into a corrected configuration.

## Embodied Ship Minds

For an embodied ship mind, refit may be treatment, ordinary maintenance, restraint, evidence preservation, or injury. [[Worldbuilding/Post-Elysium/Concepts/Ship Mind Custody|Ship Mind Custody]] owns that bounded dispute. This note creates no universal consent law and no generic custody owner. The mind's expressed consent or refusal, medical need, emergency authority, crew safety, title, maintenance access, and command claims remain separately recorded. Possession, title, rescue, or repair access cannot silently authorize sale, disassembly, confinement, copying, destructive removal, command reassignment, or overwrite of the embodied mind.

## Smallest Proof

Use one persistent hull and two viable builds. The first favors cargo and cooling; the second sacrifices both for weapons or acceleration. The player inspects component history and compatibility, commits one refit, takes damage during a short encounter, repairs selectively, then returns to the other build.

The proof succeeds when the hull retains identity, damage and repair history survive both configurations, removed items remain accounted for, invalid fits fail before commit, and the player can explain how each build changed risk. It requires no broad catalogue, manufacturing game, or canonical class.
