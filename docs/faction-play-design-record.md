# Faction Play: Design Record

Design and implementation record split out of [[Faction Play]] on 2026-11-09 on Nibu's ruling (#minds). This is not lore and not canon: it holds the prior-art survey, the lever map against the legacy Unity tree, the list of cut quirks, the implementation order, and the Prior Art sources. The sections below are moved verbatim, with one exception: the same-page link to the Inter-Faction Relations fork under Relationships now names [[Faction Play]], so it still resolves. This record is not published (the site builds from `Aetheria/` only), so its other wikilinks do not resolve from `docs/`; read them as names of vault pages.

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

Cross-faction dynamics need NPC factions to dislike each other. See [[Faction Play#Fork: Inter-Faction Relations]].

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

## Cut List

Quirks considered and cut, because the player would not do anything differently:

- **Corriedales matching-set bonus.** No set mechanic exists, and collecting a set changes no decision in a fight. Corriedales stays a brand on Lucent's cheap hulls.
- **Lucent aggression scaled by player fame.** There is no fame or reputation state to read. Replaced by the one-at-a-time rule, which the player can see and use.
- **Cryonix license inspection at docking.** No inspection lever exists, and without one the player cannot tell it is happening. Revisit with reputation.
- **Ewan Hart combat behavior.** Anything invented would be decoration; Ewan Hart is expressed through resources only.
- **NiteLife burst-then-drain weapons as a behavior quirk.** Too close to Lucent's burst window; two factions teaching the same lesson dilutes both. NiteLife keeps the reservoir and the tight leash.
- **Zhestokost reporting refusals to the next zone.** Needs standing to propagate across zones. Kept as an *after reputation* note, not a headline.

## Implementation Order

Ordered by how much distinct play each step unlocks, using only the levers above:

1. ~~**Read `Faction.Personality` in `Zone.CreateAgent`** and move `AgentRangeExponent` and `AgentMinHitProbability` onto it.~~ **Superseded, not pending.** Range and fire discipline now live in `FactionDoctrine` and `RoleDoctrine` (`Doctrine.cs:28-74`), reached through `Faction.Doctrine` (`Corporations.cs:62-63`) and applied in `Zone.cs:318-326`. `Faction.Personality` (`Corporations.cs:28-29`) has no readers; it is not the live path. [code references as of the 2026-11-05 check]
2. **The four tutorial states** (follow, drift cold, flee, sweep), with the break-off and leash transitions. These carry Zhestokost's tender, AU's haulers, Lightsail, Alakrita, Finch, Cryonix, and Adrasteia. They are shared with the tutorial work, so they are bought once.
3. **Hail barks through `Entity.SetMessage`** with `grace`. Every faction gets a voice at first contact.
4. **Earned HUD identity and livery tint.** Factions become visible without new art.
5. **`Relations` on `Faction`** (if the fork goes to B). Turns on every cross-faction dynamic.
6. **Faction records** for Sol Dominion, Aya, Navigators, Pirates, Megiddo, Cryonix, and Framgång, with their products.
7. **The damage-type rule** for corrosion and cascade.
8. **Turn on `StoryProcessor` placement** for dock stories constrained by `FactionOwner`.

Smallest proof: three factions (Zhestokost, Lucent, AU) in one run with steps 1 to 3. The proof passes when a playtester, without being told, can describe how each faction fights and what they did differently to beat it.

## Sources

Sources for the Prior Art section, moved from Faction Play.

- EVE University Wiki, [NPC damage types](https://wiki.eveuniversity.org/NPC_damage_types) and [Ratting](https://wiki.eveuniversity.org/Ratting).
- Fractal Softworks, [Blueprints, Doctrine, and Production](https://fractalsoftworks.com/2018/02/12/blueprints-doctrine-and-production/) (not retrievable during this pass; cited from prior knowledge), and the forum thread [Some factions' doctrines seem incompatible with their ship rosters](https://fractalsoftworks.com/forum/index.php?topic=31252.0).
- Frontier forums, [Powerplay 2.0 update thread](https://forums.frontier.co.uk/threads/elite-dangerous-powerplay-2-0-update.630423/), and the [Powerplay wiki entry](https://elite-dangerous.fandom.com/wiki/Powerplay).
- GamesRadar, [Shadow of Mordor's Nemesis system](https://www.gamesradar.com/shadow-mordor-nemesis-system-amazing-how-works/).
- Mount & Blade, Escape Velocity, Freelancer, and RimWorld are cited from play knowledge; their primary sources were not re-fetched for this pass.
