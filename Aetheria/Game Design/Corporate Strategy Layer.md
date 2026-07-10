# Corporate Strategy Layer

The corporate strategy layer is Aetheria from the distance at which people become allocation problems. It is the part of the design that asks what happens when players do not merely buy from the economy, but become one of the entities producing scarcity, infrastructure, labor discipline, and opportunity for everyone else.

## Player Role

The player corporation defines population roles, gathers resources, builds infrastructure, researches technology, manufactures items, expands into territory, and competes for money and influence. This is the **Profits Rising** gameplay lineage: the logistics and supply-chain game in which the player controls an entire corporation.

The corporation is not assumed to be a [[Mega]]. Scenario premises can begin with an inherited family workshop, a distressed freight cooperative, a regional manufacturer, a licensed franchise, a stealth startup built around one hot disruptive technology, or an established firm trying to survive a standards war. Different starting ownership, debt, workforce, intellectual property, supplier access, and reputation should produce materially different games before any corporation becomes large.

A corporation does not have to personally fire a shot to hurt people. It can underfund route security, overproduce disposable ships, monopolize a resource node, lock a settlement into maintenance dependence, or price repairs just high enough that desperate pilots accept worse contracts.

The original `Profits Rising` model starts some scenarios with capital, a colonist population, and population traits that shape what people demand and what they produce well. That is one scenario family, not the universal opening. Every corporation still begins as a social design problem wearing a finance hat. Naturally everyone involved insists this is normal.

## Strategic Outputs

The strategy layer should produce conditions the action layer can feel:

- resource shortages
- surplus goods and cheap equipment
- patrol density and security zones
- contested stations and vulnerable routes
- local faction influence
- research unlocks and prototype gear
- contracts, bounties, sabotage, rescue, and courier work

These outputs are the meeting point between the spreadsheet and the cockpit. If the strategy layer cannot create pressure the field layer understands, it is just a second game standing next to the first one in an expensive coat.

## Population And Labor

Population roles should be more than production slots. Aetheria's setting is obsessed, correctly and unpleasantly, with how institutions turn personhood into categories. Workers, specialists, pilots, researchers, security personnel, administrators, uploads, uplifted labor, and engineered crews should all carry different costs, risks, legal statuses, and political consequences.

See [[Colonies and Population]] for the population model recovered from the planning docs: personality attributes, satisfaction, actualization, demand profiles, influence profiles, and production affinity.

## Research And Production

Research should not be a clean ladder of bigger numbers. It should alter what a corporation can build, which materials it needs, what risks it externalizes, and which factions become rivals or suppliers. Production should inherit quality, material origin, blueprint design, labor conditions, and manufacturing doctrine where the game can support it without turning every bolt into a tax filing.

A blueprint expresses a technology and arrangement of components, not a branded inventory good. It may be patented, licensed, proprietary, public domain, stolen, expired, or independently discovered. The actual branded or unbranded object is a manufactured item instance. Its crafting recipe and manufacturing run carry the supply-chain provenance: real input lots and components, producer, facility, substitutions, quality, licensing claim, and process history. Strategy-scale production should create those instances rather than minting a new item-data definition for every brand and quality tier.

The planning docs give research a patent window: completed technologies grant exclusive rights for a time before becoming licensable by others. That is much more interesting than permanent unlock hoarding. It lets research create temporary monopoly, licensing revenue, arms races, and the brief corporate ecstasy of mistaking first-mover advantage for virtue.

## Conflict

Strategy conflict is economic before it is military. Route denial, contract manipulation, supply interruption, standards capture, sabotage, insurance pricing, infrastructure enclosure, and hostile acquisition all fit Aetheria better than simple conquest. Open violence still exists, but the setting is strongest when coercion comes with invoices.

The strategy GDD also includes police protocol, pirates/privateers, independent traders, AI corporations, and alien escalation. The current design may rename, replace, or cut them, but the actor roles are still useful: they keep the corporate layer from becoming a closed optimization puzzle. The market has predators, referees, parasites, and the occasional existential correction.

## Strategic Combat Simulation

The large strategy game needs hundreds of battles to progress across the local galaxy without requiring every engagement to run frame by frame. A fast deterministic combat kernel in the daemon resolves offscreen engagements from the same native hulls, manufactured item instances, loadouts, condition, cognition, observations, orders, and campaign state used by live play.

The kernel is also the combat-design laboratory. New mechanics should be cheap to prototype there: run many matchups, vary blueprints and supply chains, expose counters, and decide which dynamics deserve to exist. Once those dynamics are accepted, the live frame-by-frame simulation builds them out as animated game-world behavior. Paired conformance scenarios then keep offscreen and observed combat aligned as both implementations evolve.

An observed battle transfers advancement authority to the live simulation at an explicit synchronization checkpoint. A battle leaving observation returns to the kernel the same way. Crossing that boundary must not repair damage, cool components, duplicate ammunition, change provenance, reset cognition, or reroll committed events.

This architecture belongs to Aetheria's large corporate strategy/RTS layer. [[Aetheria Starbridge|Starbridge]] may consume shared combat machinery, but its scoped cooperative defense sessions are not the reason hundreds of persistent battles must run faster than realtime.

Profits Rising remains the name of the corporation-management gameplay, not the entire Aetheria strategy layer and not a discarded prototype. The original long-term plan was to use it to solidify the economic model, prove logistics and supply chains at scale, and eventually merge that play with [[End of the Line|Terminus]]-style embodied play in the MMO-scale persistent world. With Starbridge now providing the first shared-combat foundation, Profits Rising systems should instead be introduced and developed as a layer of the community-warfare seasons described under [[Aetheria Client and Modes#Conquest|Conquest]]. Those seasons can add production, procurement, transport, corporate coordination, and market consequence incrementally while feeding real wars.
