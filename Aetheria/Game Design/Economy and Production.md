---
title: Economy and Production
description: "Design-lineage specification for obligations, production commitments, item provenance, markets, inventory possession, and maintenance records."
---

# Economy and Production

> **Status: design-lineage economy and production specification.** This note defines shared economic objects and player-facing production pressure. Surviving code and older planning documents are evidence, not current implementation or authority.

Aetheria's economy should expose how an object came to exist, who committed resources, its condition, and the claims following it. Production is a sequence of obligations whose records survive transfer.

## Causal Chain

The minimum production chain is:

1. **Obligation:** a contract, allocation, repair need, public order, or emergency creates demand. It names an issuer, result, schedule, acceptance terms, and known consequences of failure.
2. **Blueprint and revision:** a technical design identifies required interfaces, tolerances, production steps, and acceptable inputs. A revision is not an object, patent, license, or promise that any facility can build it.
3. **Scoped permission:** a license, owner authorization, public-domain status, emergency power, or disputed claim may permit use. Permission has an issuer, scope, jurisdiction, duration, and exceptions. Technical access does not create legal permission; permission does not create competence.
4. **Production commitment:** a producer reserves a facility, labor under a named agreement, actual input lots, permitted substitutions, process, quality checks, and schedule. Commitment makes opportunity cost and responsibility visible before completion.
5. **Item instance:** production emits a particular object whose past events are not rewritten. Its provenance record carries claimed blueprint revision, producer, facility, input lots, substitutions, process, completion time, and permissions; those claims may be incomplete, forged, or contested. Condition and location change through later records.
6. **Inventory record:** an inventory records who or what presently possesses the instance, where it is stored, and which access controls govern it. Possession and access are not clean title, custody, consent, or unrestricted authority to use, alter, reproduce, or sell.
7. **Maintenance action:** inspection, service, repair, refit, cannibalization, or modification consumes time, labor, tools, parts, and authority. It changes condition and adds a record. Maintaining an instance does not grant reproduction rights or erase prior claims.

Their separation is the invariant. A blueprint must not become stock; an order must not consume imaginary inputs; a transfer must not rewrite provenance; repair must not replace history with a fresh default.

## Player Evidence

Players should make economic decisions from records rather than omniscient truth. A contract, market listing, inventory entry, inspection, or production report should expose, where relevant:

- issuer or reporting source;
- observation or record time;
- object, lot, facility, or obligation referenced;
- known gaps and substitutions;
- confidence or verification state;
- adverse claims and restrictions;
- facts that remain unknown.

Records may disagree. A seller may assert licensed origin while serial history conflicts. A station may record possession while a creditor asserts title. A maintenance log may confirm safe operation without proving permission to alter. Interfaces must preserve those distinctions.

Provenance can affect compatibility, failure, service, warranty, inspection, market access, and institutional acceptance. It must not become decorative lore attached after price and performance are decided.

## Markets And Contracts

Markets match offers, needs, capacity, and access under unequal conditions. Terms include quantity, delivery, deadline, inspection, payment security, substitution, liability, service, and recognized claimant. Scarcity may mean high price, no lawful supplier, longer routes, bad evidence, predatory credit, or refusal.

A trade commit moves only the possession, access, funds, obligations, or records authorized by their named owners. A successful interface action does not certify clean title. The buyer may receive the object together with a lien, disputed salvage history, export restriction, warranty exclusion, custody problem, or obligation to present it for inspection. The seller cannot transfer authority they do not hold merely because the market accepted a button press.

Contracts remain active after agreement. Production can run late, inputs fail inspection, substitutions require consent, and acceptance be contested. Settlement identifies delivery, accepted evidence, remaining obligations, and the receiving authority.

## Maintenance And Material Consequence

Wear, damage, contamination, missing records, obsolete interfaces, and substitutions change safe use and service access. Maintenance preserves reliability and evidence; deferral preserves liquidity by spending future options.

Maintenance also creates economic relationships. A pilot may possess a component but lack tools, parts, documentation, labor agreement, port access, or authority to service it. For an embodied ship mind, alteration may be treatment or injury. No generic custody owner decides that boundary. The mind's expressed consent or refusal and any medical, emergency, title, or maintenance authorities remain separate explicit claims. Hull possession or access is insufficient.

## Smallest Coherent Proof

A minimum proof needs one obligation, two revisions, one constrained facility, two distinct input lots, one labor or schedule tradeoff, one produced instance, and one user. The player commits production, inspects the record, transfers possession, then responds to a condition or claim problem.

The proof succeeds when the player can explain:

- which obligation justified production;
- which inputs and substitutions entered the instance;
- who authorized each commitment;
- what the inventory transfer changed and did not change;
- why condition, provenance, or an adverse claim altered the next decision.

Player economic failure may include missed delivery, rejected goods, unsafe substitution, lost access, damaged trust, debt, or an obligation that costs more to honor than to breach.

The model fails when goods appear without commitments, provenance is rewritten during transfer, the market manufactures title, maintenance resets condition, or a dashboard presents an institutional claim as physical truth.

## Handoffs

[[Corporate Strategy Layer]] chooses allocations and production commitments within its constitution. [[Colonies and Population]] owns population-scale pressure and representation; production consumes labor only through explicit agreements and authority. [[Ship-shape and Up to Specs]] owns how item instances are assembled into a working ship. [[Progression, Claims, and Consequence]] owns playable disputes over possession, claims, and recognized consequence. Setting owners determine actual institutions, laws, technologies, and faction practices.
