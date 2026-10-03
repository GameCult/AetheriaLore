---
title: Faction Play
description: "Candidate design for making factions play differently through NPC behavior, loadouts, resource distribution, visuals, and narrative hooks on the legacy Unity tree."
---

# Faction Play

> **Status: candidate design, Imagination pass of 2026-10-03.** Not canon and not adopted. It proposes how faction identity reaches play through five levers the legacy game already has or nearly has. Setting owners are the faction notes linked below; where this note bends lore, the bend is listed under [[#Lore Change Proposals]]. Code references were checked against the `F:\Projects\Aetheria` checkout, branch `codex/fire-control-12`, commit `d3075eb0`, on 2026-10-03. They are evidence for implementability, not authority (see [[Implementation Signals]]).

Operator brief, 2026-10-03: "Navigating through the map should involve navigating lots of incidental power dynamics between factions, internalizing how they operate and adjusting your approach to compensate for their quirks. We do that through NPC behavior trees, loadouts, resource distribution, visuals and narrative hooks."

## The Rule

**One faction, one learnable rule, one forced adjustment.** Every faction below gets a single headline quirk that a player can learn by watching, can state in one sentence, and must change what they do to survive or profit from. Each quirk is tested by naming the adjustment it forces. A quirk that changes nothing the player does is decoration and is cut; the cuts are listed in [[#Cut List]].

Three supporting rules keep the quirks honest:

- **The quirk comes from how the faction operates, not from a stat bonus.** Zhestokost keeps a supply tail because its power is coordinated supply, not because heavy ships are "tanky". A stat difference that has no reason in the lore teaches nothing about the faction.
- **Every quirk has a tell at sensor range before it has a consequence.** The legacy game renders no faction identity in space, so tells are carried by behavior and signature: who runs hot, who pings, how a formation moves, what a contact does while unidentified. This matches [[Visual and Sensory Direction]]: an uncertain trace must not get a faction color it has not earned.
- **The quirk has an exploit and a price.** A player who has learned it can beat the faction cheaply; a player who ignores it pays. That is what makes the knowledge worth having.

## Flags and Brands

The lore separates [[Worldbuilding/Pre-Elysium/Megas|Megas]], which hold and defend territory, from specialist suppliers, which sell into everyone's territory. The game should keep that distinction, because it gives two different ways to express a faction:

- A **flag** is a faction whose ships, stations, and space the player meets. Flags are expressed through all five levers.
- A **brand** is a faction whose products the player meets on other people's ships and in other people's shops. Brands are expressed mainly through loadouts and resource distribution; what a brand's gear does in a fight is part of how its customers play.

The catalog today holds twelve `Faction` records, all corporations with territory: Zhestokost, Lucent Media, NiteLife Energy, Lightsail Express, Finch Cybernetics, Aeronautics Unlimited, Alakrita, Adrasteia, Ewan Hart, Rossum & Douglas, Death Monkey Explosives, and Miss Terri's. The territorial powers Sol Dominion, Cryonix, Cetacean Navigators, Aya Collective, Framgång, the Pirate Coalition, and Megiddo have no catalog record yet. This note therefore has two tiers:

- **In the catalog now.** Designed for the next authoring pass. For the minor powers among them, in-game "territory" means company settlements and facilities, not a sovereign order: few warships, low security, many haulers. That keeps the lore's Mega distinction while using the territory code that exists.
- **Needs a `Faction` record.** Designed fully, so that creating the record is the only blocker. Creating a record is authoring data, not a new system.

## Prior Art

Established games that made factions play differently, what worked, and what failed:

- **EVE Online, NPC pirate factions.** Each pirate faction deals a consistent damage profile and uses one kind of electronic warfare: Guristas jam, Serpentis dampen sensors, Angels paint targets, Blood Raiders neutralize capacitors. Players learn the pairing and refit before they undock. *Worked:* one stable quirk per faction, learnable and worth refitting for. *Failed:* the quirk lives entirely in the fitting screen; the NPCs themselves are static and farmable, so faction knowledge became a spreadsheet rather than a reading of behavior. Lesson: pair the loadout quirk with a behavior quirk the player sees in flight.
- **EVE security status and CONCORD.** Space is graded by how reliably force punishes crime, and players change route and conduct by grade. *Worked:* consequence attached to place is learnable and shapes navigation. The legacy `SecurityLevel { Open, Secure, Critical }` is the same idea at station scale.
- **Starsector faction doctrine.** Every faction's fleets come from one AI, varied by authored doctrine: aggression, ship size, quality against numbers, the mix of warships, carriers, and phase ships, plus the faction's blueprint roster. *Worked:* cheap and strong; one AI with per-faction parameters makes fleets read and fight differently. *Failed, per player reports:* some doctrines contradict the rosters they fly (an aggressive doctrine on fragile ships), which reads as a bug rather than a character. Lesson: behavior parameters and loadout must come from the same operating logic. This is the closest model for the legacy tree, because `Faction.Personality` is already a per-faction parameter dictionary that nothing reads.
- **Elite Dangerous Powerplay.** Powers are expressed mostly as contribution meters and merit activities. Both the original and the 2024 rework drew criticism that powers feel like grind targets: the player optimizes merit per hour and rarely meets a power's character in what its ships do. Lesson: a faction expressed as a progress bar is not a faction in play.
- **Mount & Blade.** Each kingdom's troop tree forces a counter: horse archers on open steppe, shield walls against archers, heavy cavalry needing room to charge. *Worked:* the loadout is the faction, and the player changes army composition and terrain choice to face it.
- **Escape Velocity.** Governments carry ally and enemy lists and per-government legal records; a crime against one government changes how its allies treat you. *Worked:* a small relationship table produces border politics without scripting. (From play knowledge; the primary documentation was not re-fetched for this pass.)
- **Freelancer.** Lawful houses patrol trade lanes and scan cargo for contraband; a reputation web ties factions together. *Worked:* the patrol scan is a learnable ritual that changes cargo and route choice. *Failed:* the web made allegiance feel arbitrary, and bribes reduced it to arithmetic. (From play knowledge.)
- **RimWorld.** Factions arrive differently: drop pods, sieges, sappers, mechanoid clusters. The player builds different defenses for each. *Worked:* the arrival pattern is the tell and the counter is a material choice. (From play knowledge.)
- **Shadow of Mordor, Nemesis system.** Individual orcs carry strengths, fears, scars, and memories of the player. *Worked:* named enemies who remember produce stories. *Failed:* enemies progress only through player deaths or explicit time skips, and the content cost of traits is high. Lesson for Aetheria: use it narrowly, for pirate crews, with a name, one rolled quirk, and a grudge, and nothing more.

The shared lesson: **parameters on one AI, a loadout that agrees with the parameters, and a consequence tied to place.** Every faction below is built that way.

## Lever Map

What exists on the legacy tree, and how each lever is used here. Tags in the faction sections say which kind of work a quirk needs:

- **[data]** Authoring only: faction fields, `Personality` weights, `Allegiance`, product roles, settings.
- **[state]** A state or transition on the existing `Agent`/`BaseState` machine. The tutorial sketch (`docs/tutorial-script-sketch.md`) already needs four of these: follow or escort, drift cold, flee, and sweep. This design reuses exactly those four and adds no others.
- **[rule]** A small rule in an existing owner, named where used.
- **[content]** A product, hull, or Ink story.

### NPC behavior

Every NPC ship today is a `Minion` (`SS/Agents/Minion.cs`) that patrols orbits and enters `CombatState` against the first visible enemy. `CombatState` already picks a preferred range from its weapons and aims at the target's most dangerous revealed weapon. Its tuning is global in `GameplaySettings`.

The design moves that tuning onto the faction and gives `Minion` a small vocabulary of transitions, all read from `Faction.Personality` (a float per `PersonalityAttribute`, already on the record and unread). `Zone.CreateAgent` is where the profile is applied. Each attribute is a `PersonalityAttribute` record; the multi-way ones (`engage_on`, `target_priority`) are encoded as float bands. The attribute vocabulary:

| Attribute | Meaning | Consumer |
|---|---|---|
| `engage_on` | Engage on detection, on identification (gear revealed), only when provoked (grudge), or on trespass (presence not permitted) | `Minion` target acquisition [state] |
| `preferred_range` | Per-faction replacement for the global `AgentRangeExponent` | `CombatState.SampleDps` [data] |
| `fire_discipline` | Per-faction `AgentMinHitProbability`: spray or wait for the sure shot | `FireControl.AgentFires` [data] |
| `target_priority` | Weapons (today's behavior), drives, cargo, or stations | `TrySelectTargetItem` [rule] |
| `break_off_hull` | Durability fraction at which the ship flees | flee [state] |
| `break_off_heat` | Hull temperature fraction at which the ship disengages or drifts cold | flee or drift cold [state] |
| `break_off_ammo` | Ammunition or charge fraction at which the ship returns to its anchor | follow [state] |
| `leash` | Maximum pursuit distance from an anchor (station, tender, or route) | `CombatState` exit [state] |
| `pack` | How many same-faction ships may engage one target at once; others hold | target acquisition [rule] |
| `share_track` | One ship's detection or grudge propagates to its faction in the zone | `WatchForGrudge` [rule] |
| `answer_call` | Respond to a same-faction or allied ship's combat or distress within range | follow [state] |
| `jettison` | Drop cargo when threatened | flee [state] |
| `quiet_until_commit` | Radiators off and thrust minimal until firing | drift cold [state] |
| `grace` | Seconds between detection and firing, during which a hail bark plays | `Entity.SetMessage` [rule] |

Sticky grudges (`Entity.WatchForGrudge`) and stance gating already exist and carry most "memory" below. Grudges clear when the entity leaves the zone; that limit is used deliberately.

### Relationships

Player standing (`Galaxy.FactionRelationships`) is generated as Neutral and never changes, and reputation is out of the current scope (`docs/three-gates-scope.md`). NPC factions are Neutral to each other (`Entity.GetFactionRelationship`, marked `// TODO: Inter-faction relationships`). The design is built so that **every headline quirk works with relationships frozen**, carried by grudges, security levels, and stance. Quirks that need standing to move are marked *after reputation*.

Cross-faction dynamics need NPC factions to dislike each other. See [[#Fork: Inter-Faction Relations]].

### Loadouts

`LoadoutGenerator` picks products weighted by `Faction.Allegiance` over the distance to each manufacturer's headquarters. Product roles carry a mean and a deviation, which is already how the content pass encodes brand character (`docs/content-batch-one.md`: Zhestokost's 100-kelvin hull plateau, Finch's variance, Megiddo's no-weak-part shield). Ammunition is real: `InstantWeapon` draws magazines from cargo through `AmmoType`. So a faction's loadout identity is `Allegiance` (whose gear) plus the roles of its own products (how well made, how consistent).

Gap: `DamageType` (Kinetic, Corrosive, Electric, Thermal, Optical, Ionizing) is carried on every shot and read by nothing. Two quirks below (Miss Terri's corrosion, Death Monkey cascade) want one **[rule]** in `FireControl`: a damage type modifies what it damages. Both have fallbacks that work without it.

### Resource Distribution

Mining yields nothing yet (`Zone.MineAsteroid` is a TODO; `BodyData.Resources` is never written). Today, resource distribution is carried by: station stock (each station holds 16 products drawn by the owner's allegiance), the cargo NPC ships carry and drop on death, the loot drop rate, station count and security level per zone, the owner's `InfluenceDistance`, and which factions appear as neutral wanderers. The faction sections use these. When `docs/faction-territory-target.md` lands (sectors and stations with supply-chain roles and a readable territory shape), the same per-faction design applies to roles; each faction section names its shape.

### Visuals

In space, faction identity is invisible today: hull prefab is the only visual difference, the project has two ship prefabs, and faction colors render only on the sector map. Three levers are available without a new system:

- **Signature behavior** [state/data]: what a faction does with radiators, thrust, and active pings is visible through the existing `Visibility` sources. This is the primary tell in this design.
- **Livery tint** [rule]: tint ship materials by the owner's existing `PrimaryColor`/`SecondaryColor` in `ZoneRenderer`, so a faction reads at visual range.
- **Earned HUD identity** [rule]: show the faction's `ShortName` and color on a target indicator only once the contact's gear is revealed (`FireControl.IsRevealed` at `TargetGearInfoThreshold`). Before that the marker stays anonymous, as [[Visual and Sensory Direction]] requires.

Hull art per faction is the long pole; the visual sections below describe what each hull should say, consistent with [[Brainstorming/Faction Ship Concept Prompts|Faction Ship Concept Prompts]].

### Narrative Hooks

Ink location stories play at docked stations through `LocalMenu`, and `StoryProcessor` can place them by `FactionOwner`, `FactionPresent`, and security tags, although its call is commented out. `Entity.SetMessage` can carry a one-line bark. Hooks below are of two kinds: **barks** (one line when a ship detects you, used as the hail before `grace` runs out) and **dock stories** (short repeatable Ink situations at a faction's stations). No quest chains.

## The Factions

Each section gives the operating logic in one line, then the quirk and its adjustment, then the five levers.

### Zhestokost

*Operating logic: force is whatever the supply tail can keep firing.* [[Worldbuilding/Pre-Elysium/Factions/Powers/Major/Zhestokost|Zhestokost]], [[Worldbuilding/Politics/Why Zhestokost’s Heavy-Weapons Specialization Works|heavy-weapons doctrine]].

**Quirk.** Zhestokost warships fly as a column around a tender carrying ammunition. They fight head-on and never break for damage or heat, but when their magazines run low they fall back to the tender, rearm, and come back. They will not pursue beyond the tender's leash.
**Adjustment.** Do not trade blows with the column. Find the slow contact at the back and kill or chase off the tender, or make them waste magazines (break line of sight, stay at the edge of range) until they go home. Outrunning a column is easy; outlasting one is not.

- **Behavior.** `engage_on` trespass, or on refusal of a hail. `grace` long: a column hails "Cut thrust and hold for inspection" and fires only when the player keeps thrusting. `break_off_hull` and `break_off_heat` zero; `break_off_ammo` high, with the tender as anchor. `leash` short around the tender. `fire_discipline` low: they fire on poor odds because ammunition is the faction's abundance. `pack` all-in. The tender itself has `jettison` off and `break_off_hull` high: it flees early and the column follows it. [state ×2: follow, flee] [data]
- **Loadout.** Zhestokost ballistics, the Noka MKI heavy hull, the Manhattan reactor, deep ammunition cargo, armor everywhere. Flak and shrapnel (MFer, DeathCluster) make guided and dumbfire missiles poor against a column, which pushes R&D and AU users to switch weapons. No sensors worth the name: columns find you by your heat, so a cold ship that holds still is hard for them to engage. [data, content]
- **Resources.** Foundry space: ammunition, armor, and ballistic weapons are plentiful and cheap; sensors, cooling, and luxury goods are scarce; stations rarely stock non-allied brands. High security near stations. Territory shape: a fortified frontier with depth behind it. [data]
- **Visuals and tells.** Low, broad, stepped hull; charcoal and oxide red. At sensor range: a rigid group of bright, steady contacts (radiators always open) with one slower contact behind them. The shape of the formation is the tell before any identification.
- **Hooks.** *Bark:* "Cut thrust and hold for inspection." *Dock stories:* a quartermaster sells reserve ammunition if you will report it lost to pirates; a deserter asks for a berth on your ship and does not say where to; a column whose tender died asks you to tow them home, out of ammunition and furious about it.

### Miss Terri's Sugariffic Snack Company

*Operating logic: everything is a treat until it starts working.* No faction note yet; see [[Brainstorming/Faction Flavor and Visual Identity#Miss Terri's Sugariffic Snack Company|Faction Flavor]]. The legacy tutorial makes Miss Terri's the protagonist faction opposite Zhestokost, so it is designed as a flag here. See [[#Lore Change Proposals]].

**Quirk.** Miss Terri's ships swarm in close with continuous spray weapons, make one pass, and pull away to let the corrosion work. Damage they leave keeps eating armor after they have gone.
**Adjustment.** After a Miss Terri's pass, your armor keeps failing; turn the damaged face away, repair before the next fight, and do not wait for them to come back. Thick armor buys time but does not save you, which is why Zhestokost columns hate them.

- **Behavior.** `engage_on` provoked; they are friendly by default and greet before anything else. `preferred_range` short, `pack` all-in, `break_off_hull` moderate. After a set time in combat they flee to an anchor point and wait out the corrosion before re-engaging. [state: flee] [data]
- **Loadout.** Continuous weapons with `DamageType.Corrosive` (Fries With That, gnrrrr-gnrrr style sprays), SodaPop! reactors. Consumables (BitsyBytes Snackz) once that item class exists. The corrosion needs the damage-type **[rule]**: corrosive damage keeps applying to the struck component for a few seconds. *Fallback without the rule:* high-damage continuous weapons at very short range; the quirk weakens to "they swarm and spray", which still forces keeping range.
- **Resources.** Stations sell consumables and corrosive weapons cheaply and give samples. Territory sits at the strange edge of the map, furthest from the stable core, per the 2021 placement discussion and [[Worldbuilding/Post-Elysium/Concepts/Pseudospace|Pseudospace]].
- **Visuals and tells.** Strawberry pink, mint, cream; capsule hulls. At sensor range: many small contacts closing fast and close together, with continuous-weapon heat when they open up.
- **Hooks.** *Bark:* a cheerful greeting with an ingredient list. *Dock stories:* a free sample with side effects listed after you accept; a taste-tester wanted for a new reactor; a Zhestokost inspection officer has defected over a sauce.

### Lucent Media

*Operating logic: every fight is content, and the headliner must look good.* [[Worldbuilding/Pre-Elysium/Factions/Powers/Major/Lucent Media|Lucent Media]].

**Quirk.** Lucent ships announce themselves, light you up with active sensors, and fight one at a time: one headliner engages while the others hold position and watch. The headliner opens with a heavy laser burst and then must open its radiators, which leaves it bright, hot, and weak for several seconds. A headliner that is losing breaks off early, and the next one steps in.
**Adjustment.** Survive the opening burst (armor facing, break line of sight, or bait it with something else), then punish the radiator window. The watching ships are sitting targets for anyone with missiles. Do not try to sneak through Lucent space: their pings reveal everything nearby.
**Weakness: the need for glory.** Lucent can be baited into a duel, the way a Clan warrior in BattleTech honours *zellbrigen*. A player who closes on a Lucent group alone, without firing on the holding ships, is answered by a single headliner, and the rest hold however that duel goes. This is the lever that splits a Lucent pack: challenge, win one fight at a time, and leave before the next headliner steps in. Break the duel's form (fire on a holding ship, bring a wingman, or let a third party join) and the form is gone: every holding ship engages at once. So the player has two moves: honour the duel and pick the pack apart, or stage someone else's interference so that the pack turns on that interloper. [rule: pack, plus a duel-broken flag]

- **Behavior.** `engage_on` detection. `grace` short with a sponsor bark. `pack` one. `break_off_hull` moderate (protect the brand). Holding ships run a hold-position state at range. Active pings on a regular cadence. [state: follow as hold] [rule: pack] [data]
- **Loadout.** Lucent lasers with large capacitors (NiteLife allegiance), the EyesOnME active sensor, the OK Disperser heat pump, Alakrita thrusters on premium hulls, Corriedales weapons on cheap hulls. The burst-then-radiate rhythm comes from capacitor size and heat, not a special mechanic. [data, content]
- **Resources.** The buffer state between blocs: docking open to almost everyone, low prices on lasers, sensors, and luxury goods, food expensive. Many wanderers from other factions pass through. [data]
- **Visuals and tells.** Gold, white, lavender, cobalt; layered shells whose outline changes when the radiator shutters open. At sensor range: regular active pings, which reveal the pinging ship as much as its target.
- **Hooks.** *Bark:* "You're live." *Dock stories:* a pilot whose sponsor will drop him after another loss offers to pay you to lose; a camera drone asks to follow your next fight (its pings come along); a fan wants your autograph on a Corriedales gun.

### Aeronautics Unlimited

*Operating logic: crews build the frontier; the company decides whether it was worth it.* [[Worldbuilding/Pre-Elysium/Factions/Powers/Major/Aeronautics Unlimited|Aeronautics Unlimited]].

**Quirk.** AU ships are working crews. Threatened, they dump their cargo and run for the nearest station, while their escorts fire dumbfire swarms at the first contact they see, decoys included.
**Adjustment.** You do not need to destroy an AU hauler to take its cargo: threaten it and collect. To get past AU escorts, give them something else to shoot first. Dodge their swarms by moving across their line of fire rather than away from it.

- **Behavior.** Haulers: `engage_on` never, `jettison` on detection of a hostile, `break_off_hull` high, flee toward the station. Escorts: `engage_on` detection, `fire_discipline` low, `preferred_range` medium, `leash` short around the worksite. [state: flee] [data]
- **Loadout.** Jason hulls, Leonid dumbfire swarms, Earp guns, Ranger active sensors ("haunted by all the ghosts it picks up"), mining tools, Vulcan reactors. Mid-quality, consistent: the all-rounder brand. [data, content]
- **Resources.** The extraction belt feeding a few refineries. Ore, tools, and salvage plentiful; finished goods and premium parts scarce; few stations, low security, half-built names. Lots of hauler cargo in space to scare loose. [data]
- **Visuals and tells.** Chalk white, slate blue, simple geometry. At sensor range: clusters of small, slow contacts around an asteroid field, with a few faster ones circling.
- **Hooks.** *Dock stories:* the ramp administration is deciding whether to abandon the station and wants a survey run; a claimshare holder pays for passage before the vote; a contractor pays you to scare a rival crew off a field.

### Finch Cybernetics

*Operating logic: notice first; service is priced by coverage.* [[Worldbuilding/Pre-Elysium/Factions/Powers/Major/Finch Cybernetics|Finch Cybernetics]].

**Quirk.** A Finch ship tailing you at the edge of sensor range is not hunting you itself. It shares your track with every hostile ship in the zone, so other attackers arrive knowing where you are.
**Adjustment.** Treat a Finch shadow as a countdown. Break its track (go cold, use clutter, change aspect) or kill it before the others arrive. Finch ships are fragile; the hard part is noticing them.

- **Behavior.** `engage_on` provoked only. A follow state holds just inside its own passive detection range. `quiet_until_commit` on. Track sharing to every ship hostile to the target in the zone. *Fallback while relations are frozen:* Finch shares only with its own faction and with the zone owner. [state: follow, drift cold] [rule: share_track] *Proposal:* Finch selling tracks is not established lore; see [[#Lore Change Proposals]].
- **Loadout.** Galapagos hulls, ChirOptos passive sensors, light low-signature weapons, Prokope thrusters. High variance in role quality: a great Finch item is excellent and a bad one is erratic, which is the brand as the content pass encodes it. [data, content]
- **Resources.** Clinic stations stock premium components and repair gear; Finch gear is repaired cheaply only at Finch stations (*after reputation*: repair priority by standing, the in-game face of Grace). [data]
- **Visuals and tells.** Pearl ceramic, celadon indicators, continuous curves. At sensor range: a faint contact matching your speed and holding range.
- **Hooks.** *Dock stories:* a mechanic with a lagging Finch hand cannot get an appointment and offers parts for transport to a better clinic; a technician sells you the track log of whoever followed you in.

### Rossum & Douglas

*Operating logic: a measurable improvement, guaranteed (conditions apply).* [[Worldbuilding/Pre-Elysium/Factions/Powers/Minor/Rossum & Douglas|Rossum & Douglas]].

**Quirk.** R&D pickets keep their distance and launch guided missiles that are guaranteed to hit, where the target is whatever they strike first. They back away from anyone who closes.
**Adjustment.** Put something between you and the launcher, such as an asteroid, a wreck, or another faction's ship. Close the distance and the picket stops fighting.

- **Behavior.** `preferred_range` long, `fire_discipline` high, `break_off` when the range falls below a threshold (flee to regain range, not to escape). Boring and consistent. [state: flee] [data]
- **Loadout.** Standard Model 42 wedges, the GT 1K and MIRV lines, compute. Also appears as contractor pickets in other factions' fleets through allegiance. [data, content]
- **Resources.** Certification and compute stations; guided launchers and targeting systems stocked everywhere R&D has allegiance. Few warships of its own. [data]
- **Visuals and tells.** The flying wedge in blue-gray. At sensor range: a stationary contact at long range followed by launch flares.
- **Hooks.** *Bark:* muzak, then a disclaimer. *Dock stories:* a certification inspector will sign off your refit for a fee, scope limited by an asterisk; a claims adjuster wants witnesses to a missile that hit the wrong ship.

### NiteLife Energy

*Operating logic: we keep the lights on, and we own the cartridge.* [[Worldbuilding/Pre-Elysium/Factions/Powers/Minor/NiteLife Energy|NiteLife Energy]].

**Quirk.** NiteLife's best reactor needs a reservoir that only NiteLife stations sell. NiteLife guard ships never leave their stations.
**Adjustment.** If you fly a MoveOnPro, plan routes through NiteLife space and carry spare reservoirs. In combat, a fight one orbit away from a NiteLife station draws no response.

- **Behavior.** `leash` very tight around stations; `engage_on` trespass. Utility haulers carry reservoirs. [data]
- **Loadout.** ChargeBlast and FastBlast energy weapons, capacitors (Cottage-pi), MoveOnPro reactors. [content: the reservoir as an `AmmoType`-style consumable the reactor draws from cargo]
- **Resources.** Power infrastructure stations; reactors, capacitors, and reservoirs cheap here and absent elsewhere. Reservoirs are the faction's real export. [data]
- **Visuals and tells.** Midnight blue, teal, lime release catches. At sensor range: stations with tight rings of patrol contacts that never leave them.
- **Hooks.** *Dock stories:* a settlement's reactor is running on the last reservoir and the next delivery is late; a lifestyle promotion offers a free upgrade with a subscription.

### Lightsail Express

*Operating logic: we'll lose our lives before we lose your cargo.* [[Worldbuilding/Pre-Elysium/Factions/Powers/Minor/Lightsail Express|Lightsail Express]].

**Quirk.** Lightsail haulers never drop their cargo. Threatened, they run and fight with it.
**Adjustment.** Demands and threats do not work on Lightsail. Either disable the hauler or leave it alone. Escorting one is reliable pay, because it will not abandon the load to save itself.

- **Behavior.** `jettison` off, `break_off_hull` zero, flee toward the nearest station while firing. [state: flee] [data]
- **Loadout.** Freight hulls, Store-All Plus bays, ClearPath machine guns, True North thrusters. [data, content]
- **Resources.** Corridors between other factions' markets: Lightsail zones are thin strings of stations linking other territories. Trade goods of every brand pass through; prices are middling everywhere. [data]
- **Visuals and tells.** Faded fleet blue, cream, vermilion route stripes. At sensor range: a long, slow contact on a straight line between stations.
- **Hooks.** *Dock stories:* a delivery is overdue and the client is threatening; a driver wants company on a run through pirate space; a load nobody will describe needs moving.

### Alakrita

*Operating logic: speed and elegance, spares not included.* [[Worldbuilding/Pre-Elysium/Factions/Powers/Minor/Alakrita|Alakrita]].

**Quirk.** Alakrita ships make one fast pass and leave as soon as they are scratched. They do not come back to the same fight.
**Adjustment.** Do not chase them. Armor up for the first pass, land a single hit, and they are gone. If you fly Alakrita gear yourself, buy spares where you can find them.

- **Behavior.** `preferred_range` medium, `break_off_hull` very high, and a grudge that does not return to combat after a flee in the same zone. [state: flee] [data]
- **Loadout.** Light, fragile, excellent thrusters (Victoire, Arctica) and hulls; the lowest durability in the catalog. [data, content]
- **Resources.** Alakrita and Lucent stations alone stock spare parts. Few ships, high quality, expensive loot. [data]
- **Visuals and tells.** Ivory lacquer, wine red, gold inlay, long creased hulls. At sensor range: the fastest thrust signature in the zone.
- **Hooks.** *Dock stories:* an owner offers a reward for a replacement fin nobody has in stock; a racing wager.

### Ewan Hart

*Operating logic: people need dinner.* [[Worldbuilding/Pre-Elysium/Factions/Powers/Minor/Ewan Hart|Ewan Hart]].

Ewan Hart has no combat quirk, and none is invented. Its ships are tractors and haulers that flee when threatened (`jettison`, flee). It is expressed through resources: food and agricultural equipment are cheap in Ewan Hart zones, and its gear appears on AU and Aya ships through allegiance. Its zones are low-security resupply stops that every other faction buys from. The player adjustment is a resource one: hungry stations elsewhere pay for what Ewan Hart sells.

### Death Monkey Explosives

*Operating logic: break the dependency and make sure it stays broken.* [[Worldbuilding/Post-Elysium/Factions/Death Monkey Explosives|Death Monkey Explosives]].

**Quirk.** DME cells attack infrastructure, not ships: stations, mining rigs, power sites. They ignore you unless you defend the target or are docked or tethered to it. Their attacks spread damage into whatever is connected to the thing they hit, and they run so hot that some of them cook themselves.
**Adjustment.** Decide whether the target is yours to defend. If you fight them, kite them: their overheated ships are failing. Never fight DME while docked or close to something you depend on.

- **Behavior.** `target_priority` stations and stationary structures; `engage_on` provoked otherwise. `break_off_heat` off: they override their safeties. [rule: target_priority] [data]
- **Loadout.** DME thermal weapons with large blast radii (blast detonation is positional and already damages neighboring cells), deep space burnout thrusters, rarely the cold like my heart heat pump as valuable loot. *Cascade with the damage-type rule:* thermal damage keeps spreading to adjacent components for a few seconds. *Fallback:* large blast radius alone, which still forces distance. [data, content]
- **Resources.** No real territory: a few workshop-venues with small `InfluenceDistance`, appearing near the monopolies they hate. Workshops repair heat damage cheaply and sell the most aggressive gear. [data]
- **Visuals and tells.** Blackened steel, spikes, scorched red, acid yellow. At sensor range: the hottest contacts on the board, heading for the station rather than for you.
- **Hooks.** *Bark:* a lyric. *Dock stories:* a veteran who never fully came back sits at the bar and asks your name repeatedly; a cell asks you to carry a severance kit; someone wants a captured Monkey Eidolon recovered from a dealer.

### Adrasteia

*Operating logic: the best defense is not to need one, and the bill is a consumable.* [[Worldbuilding/Post-Elysium/Technology/Running Cold|Running Cold]], `docs/negent-weapons-concept.md`.

**Quirk.** A contact colder than its surroundings is either dead or Adrasteian. Adrasteian ships grow quieter while they fire, because their weapons consume heat; to fire again they must deliberately overheat, and that reload is the loud, visible part of their cycle.
**Adjustment.** When something reads too cold, assume it is armed. Do not shoot at the silence: wait for the reheat flare and hit that. A long fight starves them of heat.

- **Behavior.** `quiet_until_commit` on, `fire_discipline` high, `break_off` when out of charges. [state: drift cold] [data]
- **Loadout.** Negent weapons whose firing removes heat (the one sign-flip the concept doc names), DarkMatter X reactors, charged strange-matter consumables. [content, rule as in the concept doc]
- **Resources.** Scattered deniable nodes with no obvious center, reached through narrative clearance rather than open borders. Charges drop as rare loot. [data]
- **Visuals and tells.** Matte graphite, faceted wedges. At sensor range: a hole in the background, then a flare.
- **Hooks.** *Dock stories:* an Enigma Device arrives in an unmarked box; a crew member feels fine, and that is the problem.

### Sol Dominion

*Needs a `Faction` record.* *Operating logic: identify, classify, then act through the record.* [[Worldbuilding/Pre-Elysium/Factions/Powers/Major/Sol Dominion|Sol Dominion]].

**Quirk.** Dominion ships never fire before they have identified you, and once one of them identifies you, every Dominion ship in the zone knows you. They shoot to disable drives, not to kill.
**Adjustment.** If you are doing something they will not like, never let them reach identification: stay at range, stay cold, break the track before they close. Protect your drives, because losing propulsion means capture, not death.

- **Behavior.** `engage_on` identified. `grace` medium with a classification bark. `share_track` on. `target_priority` drives. `leash` at the zone border: they do not pursue out of jurisdiction. [rule: share_track, target_priority] [data]
- **Loadout.** Mandate cutters with sensor fusion, disabling weapons, point-defense interceptors; R&D pickets through allegiance. [content]
- **Resources.** Everything is available and fairly priced, but stations sit at Secure and Critical security, so docking turns on clearance (*after reputation*). Contraband sells high just outside Dominion space. [data]
- **Visuals and tells.** Pale gray, axial spines, crimson marks. At sensor range: a slow, steady approach that stops at a fixed distance.
- **Hooks.** *Bark:* "Contact is being classified." *Dock stories:* a flagged transit scheduler needs her father's prescription carried across the border; a clerk offers to reclassify a record.

### Cryonix

*Needs a `Faction` record.* *Operating logic: the first trace is yours to find.* [[Worldbuilding/Pre-Elysium/Factions/Powers/Major/Cryonix|Cryonix]].

**Quirk.** Cryonix scouts sit cold and passive, take one precise shot, then unfold their emitters to dump the stored heat, becoming the brightest thing in the zone, and withdraw. A damaged Cryonix ship leaves at once.
**Adjustment.** An unexplained hit means a scout is close and is about to light up. Do not chase blindly; turn to the flare and shoot it. Moving fast gives them no sure shot.

- **Behavior.** `quiet_until_commit` on, `fire_discipline` very high, `break_off_hull` very high, `break_off_heat` high. [state: drift cold, flee] [data]
- **Loadout.** Stillwater scouts, single precision weapons, emitter radiators and signature-managed surfaces; premium role quality with tight deviation. [content]
- **Resources.** Thermal gear (radiators, heat storage, signature reduction) is premium and stocked mainly here. Few ships, valuable loot. Clean, narrow enclaves.
- **Visuals and tells.** Blue-black and silver-cyan, folded emitter planes. At sensor range: nothing, then a sudden flare.
- **Hooks.** *Dock stories:* a contamination crew needs a rejected batch hauled away quietly; a production slot is for sale to the right customer.

### Cetacean Navigators

*Needs a `Faction` record.* *Operating logic: obligations without consequences are advertising.* [[Worldbuilding/Pre-Elysium/Factions/Powers/Major/Cetacean Navigators|Cetacean Navigators]].

**Quirk.** Navigator escorts drop any fight to answer a distress call within range. On their corridors, an attack on anyone draws every Navigator ship nearby; off the corridor, they do not intervene. They tow disabled ships away.
**Adjustment.** Travel on the corridor for safety, and accept that you will be asked to help. Fight off the corridor. A distress call pulls escorts away from a convoy, so they are a tool for pirates and a trap for you (*after reputation:* refusing calls or faking them closes corridors to you). Collect salvage fast before a Navigator tows it.

- **Behavior.** `answer_call` very high, overriding current combat. `engage_on` provoked on corridor zones only. Towing uses the planned `StationTowing` task once a follow state exists. [state: follow] [data]
- **Loadout.** Waykeeper escorts, point defense, tractor tools, rescue beacons; little offensive weaponry. Lightsail haulers through allegiance. [content]
- **Resources.** Waystations sell fuel, repair, and medical service cheaply and stock almost no weapons. Territory shape: corridors, shared with Lightsail.
- **Visuals and tells.** Blue-green twin pressure hulls, amber locks. At sensor range: contacts strung along a line between stations, pinging softly.
- **Hooks.** *Bark:* "No one crosses alone." *Dock stories:* a Corridor Court wants your sensor log as testimony; a sanctuary council is hiding someone you were paid to find.

### Aya Collective

*Needs a `Faction` record.* *Operating logic: no system is inevitable if people can still keep one another alive.* [[Worldbuilding/Pre-Elysium/Factions/Powers/Major/Aya Collective|Aya Collective]].

**Quirk.** Aya never fires first and never pursues, but its ships carry heavy point defense and cover one another. A long fight against an Aya convoy is lost, and missiles barely reach it.
**Adjustment.** Leave the missile racks at home if you must fight Aya, and finish one ship quickly. Better still, do not: Aya space is where a damaged or hunted pilot goes to recover.

- **Behavior.** `engage_on` provoked. `leash` short around the convoy or settlement. `answer_call` high among its own ships. [state: follow] [data]
- **Loadout.** Open Hand escorts with four point-defense mounts and one conventional gun, Orbital Forge-standard weapons through allegiance, Ewan Hart and Aya life support and repair gear. Moderate quality, tight deviation, cheap to repair. [content]
- **Resources.** Food, life support, medicine, and repair parts cheap; weapons scarce and simple. Repair is priced at cost. Stations Secure but permissive (*after reputation:* refuge for pilots who are Hated elsewhere).
- **Visuals and tells.** Terracotta, cream, deep green, rounded frames. At sensor range: tight groups with point-defense fire visible when anything approaches.
- **Hooks.** *Dock stories:* the sanctuary is full and refugees need passage to the next site; an assembly argues over whether to buy guns or a clinic and asks you to testify which they need.

### Framgång and Odla Framgång

*Needs a `Faction` record.* *Operating logic: you are not broken, you are under-invested.* [[Worldbuilding/Pre-Elysium/Factions/Powers/Major/Framgång|Framgång]].

**Quirk.** Odla affiliates never attack. They approach, hail, follow you, and pitch, and their chrome and useless active sensor make you easier to see while they are near. Their goods are mostly junk, and very occasionally the best item in the game.
**Adjustment.** When you are trying to stay hidden, shake the salesperson or buy something to make them leave. When shopping, inspect quality before paying: Odla is a gamble.

- **Behavior.** `engage_on` never; a follow state on the player; a leave condition triggered by a purchase. An active ping that adds visibility to everything nearby. [state: follow] [data]
- **Loadout.** Knockoffs of other brands with very wide role deviation, rare excellent shields. [content]
- **Resources.** Pilgrimage and retreat stations with inflated prices, consumer goods, and knockoffs. [data]
- **Visuals and tells.** Avocado, peach, chrome fins. At sensor range: a contact pinging constantly and steering toward you.
- **Hooks.** *Bark:* a pitch. *Dock stories:* an affiliate one sale short of quota; a debtor-pilgrim who wants passage out of a retreat contract; the same salesman, again, everywhere.

### Pirate Coalition

*Needs a `Faction` record* (the roster names pirates per run). *Operating logic: possession has a maintenance schedule.* [[Worldbuilding/Pre-Elysium/Factions/Powers/Major/Pirate Coalition|Pirate Coalition]].

**Quirk.** Pirate crews want your cargo, not your death. They demand a drop, stop to collect what you jettison, aim for your drives, and leave fights they are losing. Each crew has a name and an emblem, and within a zone it remembers what you did to it.
**Adjustment.** Jettison to buy an escape, or carry less through pirate space. Protect your drives. Read every distress call for a transponder that does not match the ship you can see.

- **Behavior.** `grace` with a demand bark; jettisoned cargo becomes a collection target that interrupts combat. `target_priority` drives and cargo. `break_off_hull` moderate. Crew name and one rolled quirk (cowardly, greedy, vengeful) from the run seed, Nemesis-lite. Grudges persist for the zone visit. [state: follow (to cargo)] [rule: target_priority] [data]
- **Loadout.** Every brand at once: stolen gear with wide quality spread, through an allegiance map that touches everyone at low weight. Second Owner raiders. [data, content]
- **Resources.** Hidden bases in nebulae and abandoned stations; black markets that buy anything and repair nothing well. Open security everywhere they dock.
- **Visuals and tells.** Mixed donor hulls, primer, emoji marks. At sensor range: a freighter's transponder with a gunship's heat.
- **Hooks.** *Bark:* "Drop it and go." *Dock stories:* a crew you spared sends a tip; a credential for sale, used once; a rescue station that is not one.

### Megiddo

*Needs a `Faction` record* (also blocks the Migdal shield; `docs/content-batch-one.md` F2). *Operating logic: hold the boundary until the question is answered.* [[Worldbuilding/Post-Elysium/Factions/Megiddo|Megiddo]].

**Quirk.** A Megiddo fleet is a moving boundary. It warns at a perimeter, fires on anyone inside it who keeps closing or scans actively, and never pursues past it. Active scanning of an inert, cold object inside its volume turns it hostile at once.
**Adjustment.** Go passive near Megiddo, respect the perimeter, and never ping a cold rock in their space. Trade with them by approaching slowly and openly.

- **Behavior.** `engage_on` trespass or active ping within the perimeter; `leash` equals the perimeter. Placed in a different unclaimed zone each run, so its space moves. [data, rule: ping as provocation]
- **Loadout.** Shields (the Migdal), layered armor, point defense, decoys, passive sensors; the highest and most consistent role quality in the catalog. [content]
- **Resources.** Sells defensive equipment to outsiders; buys food and volatiles.
- **Visuals and tells.** Blue-black, warm pale ceramic, silver constellations. At sensor range: many contacts spread across a wide volume, some of them decoys.
- **Hooks.** *Dock stories:* an attendant needs one leg of a journey whose next leg nobody knows; a dealer elsewhere offers good money for coordinates of cold rocks you have scanned.

### Brands Without Flags

- **Corriedales** is a Lucent family brand, not a flag. Its weapons appear on cheap Lucent hulls. No quirk of its own; see [[#Cut List]].
- **Orbital Forge** is Aya's supplier through allegiance, with no record proposed.

## Quirk Test

Every headline quirk, its tell, and the adjustment it forces:

| Faction | Tell at sensor range | Quirk | Forced adjustment |
|---|---|---|---|
| Zhestokost | Bright rigid group, slow contact behind | Column fights until magazines run low, then returns to its tender | Hit the tender or drain magazines; never trade blows |
| Miss Terri's | Small fast contacts closing together | One spray pass, then corrosion works | Turn the damaged face away, repair before the next fight |
| Lucent | Regular active pings | One headliner at a time; burst, then radiators open | Survive the burst, punish the window; avoid sneaking here |
| AU | Clusters around rocks, fast escorts circling | Haulers dump cargo; escorts shoot first contact | Threaten instead of kill; feed escorts a decoy |
| Finch | Faint contact holding range | Shares your track with attackers | Break the track or kill the shadow quickly |
| R&D | Stationary contact far off, launch flares | Guaranteed missile hits whatever is first in line | Put something in between; close the distance |
| NiteLife | Patrols ringed tightly on stations | Proprietary reservoir; guards never leave | Route through their space; fight one orbit away |
| Lightsail | Long slow contact on a line | Never drops cargo | Disable or ignore; escort for reliable pay |
| Alakrita | Fastest thrust in the zone | One pass, leaves when scratched | Armor the first pass; do not chase |
| DME | Hottest contacts, heading for the station | Attacks infrastructure; damage spreads | Choose whether to defend; never fight docked; kite |
| Adrasteia | Colder than background | Quieter while firing, loud on reheat | Hit the reheat flare |
| Sol Dominion | Steady approach that stops at a fixed range | No fire before identification; shared record; drive shots | Prevent identification; protect drives |
| Cryonix | Nothing, then a flare | One precise shot, then a bright heat dump | Turn to the flare; keep moving |
| Navigators | Contacts on a line between stations | Drop everything for distress; corridor law | Fight off-corridor; use or beware distress calls |
| Aya | Point-defense fire at approach | Never first, never pursue, out-endures you | Guns not missiles, kill fast, or rest there |
| Odla | Constant pinging, steering toward you | Follows and reveals you | Shake or buy off when sneaking; inspect before buying |
| Pirates | Freighter transponder, gunship heat | Want cargo, hit drives, remember you | Jettison or carry less; protect drives |
| Megiddo | Wide volume of contacts and decoys | Moving boundary; ping-triggered | Go passive, respect the perimeter |

## Power Dynamics

### Fork: Inter-Faction Relations

Cross-faction play needs NPC factions to tolerate, police, and fight each other, and today they cannot: every NPC faction is Neutral to every other. Two ways to fill the existing `// TODO: Inter-faction relationships` in `Entity.GetFactionRelationship`:

- **A. Derive relations from `Allegiance`.** No new field. Fails on the cases that matter most: pirates buy everyone's gear and are hostile to all; Zhestokost and Miss Terri's could buy from each other and still be at war.
- **B. Add a `Relations` map to `Faction`** (next free MessagePack key 16), reusing the existing `FactionRelationship` ladder, read by `GetFactionRelationship`. One authored field in the slot the code already reserves.

**Recommendation: B**, with fair confidence. Allegiance answers "whose gear do we buy" and relations answer "whom do we shoot"; the pirate case shows they are different facts, and folding them together would make the first loadout rebalance start a war. Escape Velocity and Freelancer both kept a separate relationship table for the same reason. The operator rules on this.

The dynamics below assume B. Where an NPC faction is Hostile to another, owner-faction ships treat the other's wanderers as trespassers, which is already how `IsHostileTo` treats anyone not permitted presence.

### Stance Table

Who does what to whom, in one line each. *Tolerate:* coexists, trades. *Exploit:* profits from the other's weakness. *Police:* enforces its rules on the other. *Shadow:* watches and sells or waits.

| Faction | Tolerates | Exploits | Polices | Shadows |
|---|---|---|---|---|
| Zhestokost | Sol Dominion, NiteLife, R&D | — | Miss Terri's, DME, Aya, Pirates | — |
| Miss Terri's | Lucent, Ewan Hart | — | — | — |
| Lucent | Everyone who docks | Every fight, as content | — | — |
| AU | Lightsail, Ewan Hart | — | — | — |
| Finch | Cryonix (its supplier) | — | — | Everyone (sells tracks) |
| Sol Dominion | Zhestokost | — | Everyone in its space | — |
| DME | Aya, Pirates | — | — | — (attacks NiteLife, Dominion, Finch infrastructure) |
| Navigators | Lightsail, Aya | — | Pirates on corridors | — |
| Pirates | DME | Lightsail, AU, Navigators | — | Every convoy |
| Megiddo | Aya, Navigators | — | Its own perimeter | — |
| Odla | Everyone | — | — | — |

### Pairs That Matter

Each situation must arise from the levers above. None is scripted.

**Zhestokost and Miss Terri's.** The war the legacy tutorial is built around.
1. *Corrosion against slabs.* A Zhestokost column meets a Miss Terri's swarm in a border zone. The swarm makes its pass and pulls back; the column's armor keeps failing, and the column will not chase past its tender. The player arriving finds a column standing still, bleeding armor, and a swarm waiting at range. Either side will pay for help.
2. *The tender gap.* Miss Terri's ships do not target tenders, because their spray range is short and they swarm the nearest ship. A player who kills the tender ends the fight in Miss Terri's favor, and the column falls back with nothing to fall back to.
3. *Deserter in the hold.* A deserter from a Zhestokost dock story is aboard. In Zhestokost space the hail becomes hostile at once (*after reputation*, or by a story-set grudge); in Miss Terri's space you are greeted with candy.

**Lucent between the blocs.** The buffer state.
1. *Everyone's camera.* Lucent pings reveal every contact in a buffer zone, including Zhestokost and Miss Terri's ships hiding from each other. A fight that would never have started elsewhere starts here, because Lucent made everyone visible.
2. *Spectators as targets.* While a Lucent headliner duels someone, the holding Lucent ships sit still at range. A third party with missiles can take one out unchallenged; Lucent's one-at-a-time rule means the rest keep holding until the headliner loses.

**Sol Dominion and Zhestokost.** Allies with different doctrines. *Needs records.*
1. *Identification as the trigger.* In a zone where both are present, a Dominion cutter identifies you and shares the track; the Zhestokost column, which needs no identification, gets your position and opens fire. The Dominion's grace window is the real danger: break the track before the cutter completes identification.
2. *Surrender to the clerk.* A Dominion cutter has disabled your drive to capture you, and a Zhestokost column is approaching to finish you. Staying disabled near the cutter keeps you alive; the cutter's target priority means it will not destroy what it is impounding.

**Cetacean Navigators, Lightsail, and the Pirates.**
1. *The false call.* A pirate crew's distress bark pulls Navigator escorts off a Lightsail convoy; the pirates demand the cargo, and the Lightsail haulers refuse, because they never drop it. The player arrives to a hauler fighting alone.
2. *Tow race.* A disabled ship on a corridor: pirates want its cargo, the Navigators want to tow it to a waystation, and the player wants the salvage. Whoever reaches it first decides.
3. *Corridor edge.* Pirates wait one zone off the corridor, where Navigators do not intervene. Players learn that the corridor's protection stops at its edge, and plan stops accordingly.

**Aeronautics Unlimited and the Pirates.**
1. *Free cargo.* Scared AU haulers dump ore; a pirate crew and the player race to collect it. The pirate crew stops to collect and leaves the haulers alone, which the AU escorts read as a chance to shoot the pirates.
2. *The ramp nest.* A low-security AU zone with abandoned stations hosts pirate wanderers. AU escorts, with a short leash around worksites, never clear them out.

**Finch and everyone.**
1. *The countdown.* A Finch shadow shares your track with whatever is hostile in the zone. In Zhestokost space that means a column; in pirate space, a crew that now knows where your cargo is.
2. *Cold contacts break the tail.* Finch passive sensors lose cold targets, so a Cryonix or Adrasteian zone is where a player shakes a Finch shadow, at the price of entering a zone full of cold hunters.

**Death Monkey Explosives and the infrastructure owners** (NiteLife, Sol Dominion, Finch).
1. *Not your fight, until it is.* A DME cell attacks a NiteLife station while you are docked to buy a reservoir. Undock and leave, and they ignore you; stay to defend, and you are in a fight where damage spreads into everything near the station.
2. *Cooked attackers.* DME ships override their heat safeties. A NiteLife guard that cannot leave the station holds it long enough for the cell to cook itself, leaving hot wrecks and rare loot for whoever arrives next.
3. *Incidental identification.* A DME attack on Dominion infrastructure puts every Dominion ship in the zone into identification mode, and the player, passing through, is identified incidentally.

**Aya and Zhestokost.** Mars, carried into Elysium. *Needs a record for Aya.*
1. *Inspection standoff.* A Zhestokost column hails an Aya convoy for inspection. Aya does not comply and does not fire first. The column fires, its shells meet heavy point defense, its magazines drain, and it returns to its tender. The standoff repeats until someone breaks it, for instance by killing the tender.
2. *Refuge across the border.* A player Hated by Zhestokost crosses into Aya space and is safe from pursuit, because the column's leash stops at the tender and Aya does not pursue anyone.

**Megiddo and the necrotech market.** *Needs a record.*
1. *The cold rock.* A dock story elsewhere offers money for coordinates of cold objects in Megiddo space. Actively scanning a cold rock there turns the fleet hostile; a passive pass takes longer and might find nothing. The player chooses which risk to sell.

**Odla and anyone hiding.**
1. *The salesman ruins your ambush.* An Odla affiliate follows the player into a zone where the player is lying cold in wait, and its pings reveal both of them. Buying something makes it leave, and the purchase is probably junk.

### Reading a Border

A player crossing between two factions' space should see the change before any identification:

- **Formation and tempo.** Rigid hot groups (Zhestokost), lines between stations (Lightsail, Navigators), clusters on rocks (AU), single fast contacts (Alakrita), stationary contacts far off (R&D).
- **Signature behavior.** Who pings (Lucent, Odla, Dominion), who runs hot (Zhestokost, DME), who is missing from the background (Cryonix, Adrasteia).
- **Who hails and how.** Inspection demand, classification notice, sponsor line, sales pitch, threat, or silence.
- **What wanders.** A zone's two neutral wanderers come from neither the owner nor the nearest faction. In a contested zone those wanderers are where incidental dynamics happen: a Finch shadow in Zhestokost space, an Odla salesman at a Dominion station.
- **What stations sell.** Station stock follows the owner's allegiance, so the shop shelf names the faction even when the hull art cannot.

## Cut List

Quirks considered and cut, because the player would not do anything differently:

- **Corriedales matching-set bonus.** No set mechanic exists, and collecting a set changes no decision in a fight. Corriedales stays a brand on Lucent's cheap hulls.
- **Lucent aggression scaled by player fame.** There is no fame or reputation state to read. Replaced by the one-at-a-time rule, which the player can see and use.
- **Cryonix license inspection at docking.** No inspection lever exists, and without one the player cannot tell it is happening. Revisit with reputation.
- **Ewan Hart combat behavior.** Anything invented would be decoration; Ewan Hart is expressed through resources only.
- **NiteLife burst-then-drain weapons as a behavior quirk.** Too close to Lucent's burst window; two factions teaching the same lesson dilutes both. NiteLife keeps the reservoir and the tight leash.
- **Zhestokost reporting refusals to the next zone.** Needs standing to propagate across zones. Kept as an *after reputation* note, not a headline.

## Lore Change Proposals

These bend or extend the faction notes. Each needs the setting owner's ruling:

1. **Miss Terri's as a territorial faction at the strange edge of the map.** The vault has no Miss Terri's note and no territory for it. The legacy game makes it the protagonist faction, and the 2021 design discussion placed it furthest into pseudospace ("colonizing Wonderland"). Proposal: a Miss Terri's note establishing it as a settler power at the edge of stable space.
2. **Finch sells tracks.** The lore gives Finch passive sensing and the Quiet Sense hunter, not a trade in other people's positions. Proposal: Finch sensor operators sell track data as a service, consistent with its pattern of turning a capability into a continuing dependency.
3. **Minor powers hold company space in game.** NiteLife, Lightsail, Alakrita, R&D, Ewan Hart, and DME own zones in the legacy game, while the lore withholds Mega status from them. Proposal: in-game territory for a minor power means company settlements under someone else's wider order, shown through low security and few warships. This keeps the Mega distinction intact.
4. **Megiddo's fleet moves between runs.** Consistent with the lore's mobile fleets; recorded here because the game places it in a different zone each run.
5. **Lucent's one-at-a-time duel.** A playable reading of Lucent's spectacle, not stated in the lore. Accepted by the operator on 2026-10-03, with an addition: their weakness is their need for glory, so they can be baited into a duel "like a Clanner in Battletech" (see the Lucent weakness above).

## Implementation Order

Ordered by how much distinct play each step unlocks, using only the levers above:

1. **Read `Faction.Personality` in `Zone.CreateAgent`** and move `AgentRangeExponent` and `AgentMinHitProbability` onto it. This alone makes R&D, Zhestokost, and Cryonix fight at different ranges and with different fire discipline. [data, small rule]
2. **The four tutorial states** (follow, drift cold, flee, sweep), with the break-off and leash transitions. These carry Zhestokost's tender, AU's haulers, Lightsail, Alakrita, Finch, Cryonix, and Adrasteia. They are shared with the tutorial work, so they are bought once.
3. **Hail barks through `Entity.SetMessage`** with `grace`. Every faction gets a voice at first contact.
4. **Earned HUD identity and livery tint.** Factions become visible without new art.
5. **`Relations` on `Faction`** (if the fork goes to B). Turns on every cross-faction dynamic.
6. **Faction records** for Sol Dominion, Aya, Navigators, Pirates, Megiddo, Cryonix, and Framgång, with their products.
7. **The damage-type rule** for corrosion and cascade.
8. **Turn on `StoryProcessor` placement** for dock stories constrained by `FactionOwner`.

Smallest proof: three factions (Zhestokost, Lucent, AU) in one run with steps 1 to 3. The proof passes when a playtester, without being told, can describe how each faction fights and what they did differently to beat it.

## Sources

- EVE University Wiki, [NPC damage types](https://wiki.eveuniversity.org/NPC_damage_types) and [Ratting](https://wiki.eveuniversity.org/Ratting).
- Fractal Softworks, [Blueprints, Doctrine, and Production](https://fractalsoftworks.com/2018/02/12/blueprints-doctrine-and-production/) (not retrievable during this pass; cited from prior knowledge), and the forum thread [Some factions' doctrines seem incompatible with their ship rosters](https://fractalsoftworks.com/forum/index.php?topic=31252.0).
- Frontier forums, [Powerplay 2.0 update thread](https://forums.frontier.co.uk/threads/elite-dangerous-powerplay-2-0-update.630423/), and the [Powerplay wiki entry](https://elite-dangerous.fandom.com/wiki/Powerplay).
- GamesRadar, [Shadow of Mordor's Nemesis system](https://www.gamesradar.com/shadow-mordor-nemesis-system-amazing-how-works/).
- Mount & Blade, Escape Velocity, Freelancer, and RimWorld are cited from play knowledge; their primary sources were not re-fetched for this pass.
- Archived GameCult design discussion (2021–2022): faction placement by strangeness, Miss Terri's as protagonist and Zhestokost as antagonist, loadouts weighted by allegiance and proximity, Adrasteia's gear reached through narrative.
