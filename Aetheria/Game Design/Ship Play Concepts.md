---
title: Ship Play Concepts
description: "A catalogue of play concepts a ship can be designed around: what each asks of the pilot, what it pays, what beats it, what systems it needs, which factions it fits, and how it shows on the hull."
---

# Ship Play Concepts

> **Status: candidate catalogue, Imagination pass of 2026-10-04.** Not canon and not adopted. It is written for the operator's review, so it favours breadth over polish. Systems tags were taken from an Eyes pass over the `F:\Projects\Aetheria` checkout on 2026-10-04 and are evidence for implementability, not authority (see [[Implementation Signals]]). Nothing here commits the game to building a concept; many entries need systems that do not exist yet, and they are listed because they deserve design consideration, not because they are scheduled.

Operator brief, 2026-10-04:

- "what I can't help but notice is a distinct lack of intentionality with regard to how a ship is meant to be *played*. Where's the broadside designs, where the player has a rack of fixed hardpoints to one or both sides, requiring intentional maneuvering to get the guns into their firing arcs?"
- "Broadside is just one gameplay concept I came up with off the top of my head as an example of something you might design a ship around, I would want to see more ideas than just that one. My point was the ships currently lack such concepts altogether."
- "Don't be too restrictive about tying the concept to the gameplay, there's plenty of gameplay that's not in yet but absolutely deserves design consideration, like all the many ways a ship can exploit drones and loitering munitions"
- "The first Aetheria novella was even explicitly about the protagonist exploring different options for pirate combat doctrine (and mostly failing)"

[[Ship-shape and Up to Specs]] owns hull identity and hardpoints; this note is linked from its Play Concepts section. [[Faction Play]] owns faction doctrine, and [[Brainstorming/Ship Design Language|Ship Design Language]] owns faction registers.

## For the Operator

The forks met while writing this, each with a recommended reading. Confidence is stated. None is decided here.

1. **How a player steers a ship whose guns do not point forward.** Today the ship turns its nose toward the cursor (`Ship.cs` turn-toward-look, master) and each weapon fires along its mount, so a flank battery fires where the cursor is not. Without a change, every broadside, stern-chaser and one-sided concept below is unplayable by hand. *Options:* (a) the ship turns so that the active weapon group's mount bearing, not the nose, points at the cursor; (b) keep nose-to-cursor and leave side guns to strafing and manual play; (c) decouple aim from heading with a separate steering input. *Recommendation:* (a). It derives the facing from geometry the hull already has (mount rotation and, on fire-control, arc), it is one offset in the turn-toward-look target, and switching weapon group becomes the act of "presenting the other side". Starsector and Cosmoteer both make the player hold a favoured heading per hull ([[#Evidence Key|PA]] 2.1 A); this makes that heading automatic per group. Medium-high confidence.
2. **Whether ships carry wide-arc turrets, and what they cost.** Fire-control has a per-hardpoint `FiringArc` override and a 120 degree default; 360 is used only for the turret hull type. If any heavy gun can take a wide arc for free, facing stops mattering: Elite's turrets trade damage for coverage, and a Starfield review says manoeuvring there is "all but useless" ([snippet], PA 2.3). *Recommendation:* arc width is a property of the mount item, paid for in calibre or damage, so the heaviest guns exist only on narrow arcs and wide arcs carry light guns and point defence. High confidence that the trade must exist; low on its exact shape.
3. **Whether drones are ships or weapons.** Starsector models fighters as a weapon-like replacement bar with no individual control; EVE, Endless Sky and X4 model them as bodies that launch, travel, take damage and dock (PA 2.1 C, 2.3). *Recommendation:* drones are `Entity` bodies launched from and recovered into the parent, flown by the same agent inputs as any ship (the same-inputs invariant in `docs/locomotion-cut.md`), and ordered as a group through a small set of plays, never one by one. Every lesson the novella paid for (recovery throats, drone heat, link loss, loiterers in the return lane) needs drones to be bodies, and the Perdix programme and Starsector both found per-craft control overwhelming (PA 2.1 E). Medium-high confidence; the cost is simulation load, which EVE documented (PA 2.3, drone assist).
4. **Which budget limits drones.** Candidates: bay volume (what you carry), control bandwidth (what is active at once), control range (the leash), recovery throughput (how fast they come home), and power or heat. EVE separates bay from bandwidth; the novella's whole first campaign turns on recovery throughput. *Recommendation:* carry bay, bandwidth and recovery throughput as three separate numbers, with control range as a property of the link. That is enough to make carrier, swarm, sentry and loitering-munition hulls differ, and fewer would collapse them into one "drone ship". Medium confidence.
5. **Whether recovery is modelled at all.** Expendable drones are simpler; recoverable ones make the parent's throat a target. *Recommendation:* model it, as a hardpoint with throughput, because "recovery is revealed as work" is the novella's first verdict and the most Aetheria-specific drone lesson in the evidence. Expendable munitions (loitering munitions, decoys, mines) simply skip it. Medium confidence.
6. **Whether shields get a facing.** Shields are omnidirectional on master: a reserve pool, a cost in energy per point of damage absorbed, heat per point absorbed into the shield item itself, and a break when one hit exceeds the reserve (`Shield.cs`). Per-cell armour already makes hit direction matter. *Options:* (a) keep shields omnidirectional and let armour carry facing; (b) give the shield item an arc, tested by the same arc rule fire control uses for weapons, and pay for coverage in reserve, so a narrow shield is a stronger shield; (c) separate shield panels per face. *Recommendation:* (a) as the default, with (b) as the only form a facing shield should take if one is wanted, because it reuses one arc mechanism rather than inventing a second, and it gives broadside and armoured-prow hulls a real choice (shield the gun side, or the blind side). Starsector's frontal and omni shields are the obvious precedent; they are from general knowledge, not the evidence file. Medium-low confidence; see [[#Facing Shield]].
7. **Whether factions own concepts.** *Recommendation:* each faction's doctrine favours one or two concepts (the fit table in [[#Faction Fit]]), as tendencies that inform loadouts, AI and hull art, never as exclusive rights. The pirates in particular should be able to field anything they can steal.
8. **Whether the global prompt block's protection line holds for the release.** *Answered, operator 2026-10-04.* The line said "Protection is armour, because pre-Elysium combat uses armour, heat and point defence rather than shields"; it was wrong for the Elysium setting, and [[Brainstorming/Ship Design Language|Ship Design Language]] now says armour is the baseline with any other protection in a visible housing. Her words: "Depends on the faction of course. Shields aren't a universal solution, there's different technologies which can deflect or mitigate specific damage types but a shield that can block anything would be counterbalanced by being prohibitively expensive to run, so all the turtling you're doing just means you drain your capacitors and then die to thermals. Armor is almost always still a good idea." Reading for this catalogue: protection is plural and faction-dependent; the universal shield (the one on master, which ignores damage type) is the expensive one, and its cost is capacitor drain followed by thermal death, not a free layer. Armour stays the default. Every shield concept in group I needs a visible housing on the hull (an emitter, a projector ring, a panel array), not a glowing bubble. Type-specific protection is design intent without code: damage types travel on events but are not used in the damage math today (the evidence file; `DamageType` is "carried on every shot and read by nothing" in [[Faction Play]]), so it needs new systems.

## How to Read an Entry

Each concept gives:

- **Asks:** what the pilot must do to make it work.
- **Pays:** what the ship gets for that.
- **Beaten by:** its counters, and the hidden dependency they attack. The novella found that every doctrine "wins a real matchup and then loses to a counter that attacks the doctrine's hidden dependency"; each entry names its dependency.
- **Evidence:** pointers into the prior-art file and the novella (see [[#Evidence Key]]).
- **Systems:** **exists**, **partly** or **new**, with the branch where the code lives.
- **Fits:** factions whose doctrine and register suit it.
- **On the hull:** how the concept reads in the bench's standard view (three-quarter front, slightly above, dorsal surface and one side), so that a later bench revision can put it in a prompt.

Systems branch labels: **M** is `master`; **FC** is `codex/fire-control-12` (fire control, arcs, power bus, targeting); **MIND** is a spec admitted in the Eureka mind but not code; **DOC** is a design document in the Aetheria repo; **new** means no code or spec exists.

A concept is a way of playing, not a hull class. A hull can combine two (a stern-chasing tug) and the most interesting ones often do.

### Sol Evidence, Elysium Game

The novella is set in the Sol timeline, which has no shields and no negent. Operator, 2026-10-04: "Worth noting that that novella takes place in the Sol timeline, they don't have space magic like shields and negent which are available in the Elysium setting we're currently building for". Its verdicts are therefore Sol-timeline evidence. Where a novella counter depended on there being no shields or negent, the entry carries an **Elysium note** saying how they would change it. The short version:

- **Shields change first hits, for the ships that carry them.** Protection in Elysium is plural and faction-dependent: armour is the baseline almost everywhere, most other technologies deflect or mitigate one damage type, and the shield that blocks anything is prohibitively expensive to run (fork 8). The shield entries below describe that universal shield and its counters. The novella's first hull had "no immunity to a correctly placed first hit" (`Combat Model.md`). In Elysium, a ship carrying a universal shield absorbs a hit smaller than its reserve, and only a hit larger than the reserve breaks through, leaving the hull exposed for the restore window. Precision and terminal munitions therefore have to break the shield and then follow through, or arrive together.
- **Shields do not change topology, attention or objectives.** Recovery throats, link capacity, cognition load, the observer's patience and the geometry of the objective are untouched. Most of the novella's lessons survive, because most of them were about dependencies, not about damage.
- **Negent changes heat debt.** Doctrines that failed on stored heat (Deep Quiet) or on the heat cost of masking (heat ferries) would last as long as their charges and their gear in Elysium. The limit moves from the heat budget to a supply line, wear, and the crew's own body heat ([[Worldbuilding/Post-Elysium/Technology/Running Cold|Running Cold]]).
- **Shields make heat a damage channel.** Every point a shield absorbs heats the shield item (`Shield.cs`, `AddHeat(damage / Efficiency)`), so sustained fire that never breaks a shield can still cook it. This couples group B and group I.

## A. Weapon Layout and Arcs

These are the concepts the operator's broadside example belongs to. All of them depend on fork 1 (steering) and fork 2 (turret cost). Fixed mounts with four facings exist on M; per-hardpoint arcs, arc-clamped aim and free refusal of out-of-arc shots exist on FC only.

### Broadside, Two-Sided

- **Asks:** turn perpendicular to the target to bring a row of fixed side mounts to bear, and turn again to present the other side.
- **Pays:** the most guns per hull, because the flank is the longest edge; two independent batteries, so one can cool, reload or be repaired while the other fires. The per-cell heat grid (M) makes this native to Aetheria: a battery that has been firing heats its own flank, and rolling to the cool side is both a firing choice and a thermal one.
- **Beaten by:** anything that stays off the beam: a fast ship sitting on the bow or stern, where only the few end mounts reach. Its dependency is turn rate and the room to turn. Raking (fire along the long axis, from the end) punishes it hardest because a broadside hull is long.
- **Evidence:** Starsector Conquest (PA 2.1 A, [wiki]); Cosmoteer broadsides that "flip to a fresh side when shields or ammo run out" ([snippet]); crossing the T (PA 2.1 F). The novella's hull four ran hot ballistic commitment, not a broadside layout.
- **Systems:** partly. Fixed side mounts exist on M (an item placed with `Clockwise` or `CounterClockwise` rotation fires 90 degrees off the heading). Arcs exist on FC. Needs fork 1 for the player and a bearing-aware AI (Combat state samples range from weapon ranges today, not bearing).
- **Fits:** Zhestokost (a piece of the arsenal that learned to fly; squat turrets already in its block), Sol Dominion (straight spine, repeated module bands: a ship of the line).
- **On the hull:** a long body with a tall flank and a row of three or more identical mounts at one height along the side facing the camera, all muzzles pointing outward square to the spine, none forward. The mirrored row on the far side shows as muzzle tips just past the dorsal edge. The bow carries little or nothing. The prompt must say which way the muzzles point, or the image model will turn them forward.

### Broadside, One-Sided (Gun Deck)

- **Asks:** circle the target with one flank inward, holding range and bearing, usually turning in one direction only.
- **Pays:** a denser battery than a two-sided ship of the same size, and a blind side that can carry what the battery would otherwise expose: radiators, cargo, a hangar, the cockpit, thick armour.
- **Beaten by:** getting to the blind side and staying there, or two attackers from opposite bearings. Its dependency is that the fight happens on one side; any second threat breaks it.
- **Evidence:** extrapolated from the broadside entries (PA 2.1 A). The novella offers no direct test. Gunship aircraft orbiting a target on one side are the real-world analogue (not in the evidence file; from general knowledge).
- **Systems:** partly, as two-sided. AI needs a turn-direction preference.
- **Fits:** Miss Terri's (a crop duster sprays from booms on one side as it passes), Pirate Coalition (guns bolted onto the one side of a stolen hull that could take them), Ewan Hart (a working arm on one side, a gun on the same side because that is where the operator looks).
- **On the hull:** all the guns on the side facing the camera, in a row; the far side visibly different (smooth armour, a radiator fold, a cargo door), so the asymmetry reads. The bench's Pirate convention already puts asymmetric additions on the camera side.

### Spinal Mount

- **Asks:** point the whole ship at the target and hold it there through a charge; the gun's arc is the ship's turn rate.
- **Pays:** the largest single gun the hull can carry, because the gun runs its full length; one decisive shot, often charged.
- **Beaten by:** lateral movement during the charge, ships that close inside its minimum range, and anything on its flank. Its dependency is the charge window and the target's predictability. The novella's premium-cognition hull lost to "cheap contradictory events" and saturation: "smarter can still lose to saturation".
- **Evidence:** Cosmoteer's 0-degree ion beam (PA 2.1 A); Starsector Onslaught's built-in frontal cannons; novella doctrine 6, precision energy (PA 3.1, [[Brainstorming/Stories/Pirate Metagame Novella/Failure Ladder|Failure Ladder]]).
- **Elysium note:** against shields the spinal gun becomes the shield breaker: its single hit is the one most likely to exceed a reserve. The novella's precision ship lost to saturation, which shields do not change. See [[#Shield Breaker]].
- **Systems:** exists in parts on M: `ChargedWeapon` (charge time, charge heat, early fire, failure damage), a forward mount, extra-large calibre. FC adds arcs and the hit-roll resolution that makes a long charge a real gamble.
- **Fits:** Cryonix (one precise shot from cold, then dump the heat), Lucent headliners (the opening laser burst), Alakrita (couture speed: one lance, then gone).
- **On the hull:** one long barrel or emitter laid along the centreline from the stern machinery to a muzzle at the bow, with the hull built around it; capacitors or a charge housing as the largest masses beside it; nothing else armed. The muzzle should be the bow.

### Forward-Fixed Fighter

- **Asks:** turn and burn: point the nose and fire, with all guns on the nose.
- **Pays:** the cheapest control (aim is heading), maximum concentration, and nothing to steer around.
- **Beaten by:** anything faster on the turn, and point defence it must fly into. Its dependency is getting the nose on target at all.
- **Evidence:** Elite's fixed mounts (most skill, highest damage per hit, [snippet], PA 2.3); Cosmoteer notes most designs point forward (PA 2.1 A).
- **Systems:** exists on M. This is what the game plays like now, which is why ships currently feel alike.
- **Fits:** Miss Terri's spray fighters, Corriedales mascots (wand barrels at the limbs, pointing forward), Alakrita.
- **On the hull:** barrels at the nose, all parallel to the spine, and a cockpit that looks straight down them.

### Turret Platform

- **Asks:** little aim; it asks the pilot to manage position, range and power rather than heading.
- **Pays:** fire in every direction, which suits ships whose real job is elsewhere (hauling, towing, escorting).
- **Beaten by:** heavier guns on narrow arcs, if fork 2 makes wide arcs carry light guns. Its dependency is that nothing it meets needs a heavy gun.
- **Evidence:** Elite turrets (least skill, lowest damage per hit, [snippet]); Avorion multi-slot turrets with lower rotation ([snippet], [U]); turret hull type with 360 arc on M and FC.
- **Systems:** partly. Turret hulls exist (M), per-hardpoint arc override on FC. A turret mount item for ships is new, and needs fork 2.
- **Fits:** Aya Collective (point defence on standard shoulder mounts), Lightsail Express, Cetacean Navigators: escorts and workers.
- **On the hull:** small domed or boxy turrets on raised rings at the shoulders and corners, each clearly able to turn; light barrels.

### Stern Chaser

- **Asks:** fight while running away, with the guns on the stern.
- **Pays:** the ship never has to turn toward danger. A pursuer flies into its fire and has to out-run it to escape it.
- **Beaten by:** ships that do not chase (missiles from stand-off, a picket ahead of its route), and anything that can match speed outside its arc. Its dependency is being pursued.
- **Evidence:** Elite's shock mines laid behind a chased ship ([snippet], PA 2.3); Rossum & Douglas pickets back away from anyone who closes, and Pirates leave fights they are losing ([[Faction Play]]).
- **Systems:** exists on M (a `Reversed` mount fires aft). Needs fork 1 for the player.
- **Fits:** Lightsail Express (a hauler that never drops its cargo and fights with it), Rossum & Douglas, Pirate Coalition.
- **On the hull:** guns at the tail pointing aft beside the drive nozzles, visible past the dorsal edge in a front view; the bow plain or armoured. The prompt should name the rear guns explicitly, because a three-quarter front view shows the stern least.

### Armoured Prow

- **Asks:** keep the bow toward the enemy and fight end-on, presenting the narrowest and thickest face.
- **Pays:** per-cell armour (M) means most hits land on the bow cells, which can carry hardpoint armour far above the hull's average. The ship trades blows it would otherwise lose.
- **Beaten by:** flanking, and by penetration that walks through the bow cells (FC: penetration decides how many cells a shot crosses). Its dependency is that the threat stays in front.
- **Evidence:** per-cell armour and hit position (PA 1.6); Starsector Onslaught's "vulnerable rear" (PA 2.1 A, [wiki]).
- **Systems:** exists on M (per-hardpoint armour, hit position). AI holding a bow-on bearing is new.
- **Fits:** Zhestokost, Megiddo, Death Monkey Explosives (heavy slab armour forward of the charge-feed section).
- **On the hull:** visibly thicker, stepped armour on the bow face, thinning toward the stern, with the guns set back behind the armour lip.

### Rotating Battery

- **Asks:** keep the hull turning, so that fixed guns on several faces sweep past the target in turn.
- **Pays:** each mount fires in a short window and cools for the rest of the turn, so the ship sustains fire that would cook a single fixed battery; incoming hits spread over all faces.
- **Beaten by:** anything that punishes the fixed rotation rate (timing a heavy shot to the face that has just fired), and drive damage that stops the spin. Its dependency is its spin.
- **Evidence:** extrapolated from Cosmoteer's side-flipping (PA 2.1 A) and the per-cell heat grid. The `AetherDrive` stores rotation as momentum: spin-up costs power, discharging it is free (PA 1.7).
- **Systems:** partly. Mounts on four faces and the flywheel drive exist on M; firing the right mount at the right moment needs fire control that picks among in-arc mounts, which FC's arc test allows. Holding a spin is new for the AI.
- **Fits:** Lucent Media (a spinning stage looks good on camera), Framgång (a showroom turntable).
- **On the hull:** a round or radially symmetric body with identical mounts at regular intervals around its rim, and a prominent flywheel housing at its centre.

## B. Heat and Signature

The per-cell heat grid, radiator pumps, heat storage, item temperature bands and heat-as-visibility all exist on M. Heat is the system Aetheria already has in more depth than most space games, which makes these concepts cheap to build relative to their payoff. See [[Heat, Stealth, and Detection]] and [[Worldbuilding/Post-Elysium/Technology/Running Cold|Running Cold]].

### Burst and Break Off

- **Asks:** close, dump a heavy burst from capacitors and stored cold, then leave before the heat bill comes due.
- **Pays:** damage far above the ship's sustained rate, at a moment of the pilot's choosing.
- **Beaten by:** surviving the burst (shields with reserve, armour on the facing it comes from), then punishing the hot, bright, slow window afterwards. Its dependency is ending the fight in one pass.
- **Evidence:** Lucent headliners and Cryonix scouts in [[Faction Play]]; Starsector combat readiness and peak time (PA 2.1 B, [wiki]); novella doctrine 6 lost when its precision could not keep pace with saturation.
- **Systems:** exists on M (capacitors, charged weapons, heat storage, radiators); FC's power bus gives instant draws their own capacitors.
- **Fits:** Lucent Media, Cryonix, Alakrita.
- **On the hull:** capacitor or charge masses as the swollen, broadest parts of the body; radiators folded flat and closed; the guns small relative to what powers them.

### Quiet Approach

- **Asks:** close cold: radiators shut, thrust minimal, heat soaked into storage, sensors passive; then commit before the stored heat or the patience runs out.
- **Pays:** first shot, or no fight at all.
- **Beaten by:** a target that keeps moving and never needs to find you; time; active sensing. Its dependency is patience and consumables. The novella's verdict on Deep Quiet: the next target kept transiting, and the crew accumulated stale tracks, heat debt and atmosphere strain until a medical abort.
- **Evidence:** novella doctrine 2 (PA 3.1; [[Brainstorming/Stories/Pirate Metagame Novella/Failure Ladder|Failure Ladder]]); submarine endurance submerged (PA 2.1 F); Children of a Dead Earth's argument that stealth is impossible in space ([primary], PA 2.1 B); cockpit heatstroke on M.
- **Elysium note:** Deep Quiet failed on heat debt and patience. With negent, the heat debt can be paid down while the charges last, so the cold wait is limited by the charge supply, gear wear and the crew's own heat (negent removes it without warning; [[Worldbuilding/Post-Elysium/Technology/Running Cold|Running Cold]]), not by stored heat. A target that keeps transiting still beats it.
- **Systems:** exists on M (heat storage, thermotoggle, radiators, visibility decay, directional passive sensors). FC's `quiet_until_commit` doctrine attribute is in [[Faction Play]] as a design.
- **Fits:** Adrasteia, Cryonix, Pirate Coalition ambushers.
- **On the hull:** closed surfaces, recessed apertures, no visible radiator; a large heat-storage mass (a tank or block with insulation bands) as the biggest internal volume; matte, light-drinking finish.

### Heat Ferry

- **Asks:** carry detachable thermal carriers, load them with heat, and let them go, either to cool the parent or to perform a false signature (a wounded ship, a radiator dump, a drive transient) while the parent performs something else.
- **Pays:** the parent sheds heat it could not radiate, or splits the observer's attention.
- **Beaten by:** repeated observation from several bearings. The novella's verdict on shaped heat ferries: separated passive observers and patient ballistic patterns meant the opponent never had to decide which ship was real; "repeated observations consume the lie's degrees of freedom". A ferry cannot perform a cold rock while thrusting hard in view.
- **Evidence:** novella doctrine 5 (PA 3.1; `Combat Model.md`, `mask_check`); towed and air-launched decoys (PA 2.1 D).
- **Elysium note:** negent lets the parent run genuinely cold, so a ferry no longer has to cover for a hot parent, and a negent-cooled ferry can perform a cold rock. Repeated observation from several bearings still consumes the lie, because that counter attacks the observer's patience, not the heat budget.
- **Systems:** new. Needs detachable bodies (fork 3) that carry heat out of the parent's grid.
- **Fits:** Adrasteia, Pirate Coalition, Cryonix (sealed sinks that leave with the heat).
- **On the hull:** a row of identical canisters or slabs clamped into cradles along the dorsal surface or flank, each with a release catch and its own small radiator fin; at least one cradle empty.

### Radiator Gambler

- **Asks:** fight with radiators retracted, and open them only when safe, or open them mid-fight and accept that they are the largest, softest target on the ship.
- **Pays:** a low signature and protected radiators when closed; a very high sustained fire rate when open.
- **Beaten by:** anything that hits radiators (drones especially), and seeing the opening. Its dependency is the choice of when to open.
- **Evidence:** Children of a Dead Earth on retractable radiators as IR-signature trade ([primary], PA 2.1 B); radiators as kinetic targets; drones as "nasty against radiators" ([snippet], [U]); Cryonix unfolds its emitters to dump heat ([[Faction Play]]).
- **Systems:** partly. Radiators (pump, floor, emissivity) exist on M. A retracted state is new.
- **Fits:** Cryonix (emitter panels folded flat like closed scales, already in its block), Lucent headliners (radiators open after the burst), NiteLife Energy.
- **On the hull:** large folded panels lying flat against the hull in overlapping layers, with visible hinge lines; a prompt can show one panel half-open to make the fold read.

### Furnace

- **Asks:** run hot on purpose: big reactor, big guns, armour, radiators glowing, no masking contest; trust that visible danger is a threat in itself.
- **Pays:** dominance of one engagement volume; anyone in it is outgunned.
- **Beaten by:** a distributed opponent with two objectives. The novella's verdict on hot ballistic commitment: the hull "can dominate one engagement volume, not occupy two"; a decoy worthy of pursuit drew it while the real objective matured elsewhere, and its ammunition and propellant could not be replaced.
- **Evidence:** novella doctrine 7 (PA 3.1); the Dreadnought's all-big-gun case and British magazine flash at Jutland (PA 2.1 F).
- **Systems:** exists on M (reactor overload, radiators, heat grid); ballistic rounds from cargo are MIND (InForce spec).
- **Fits:** Zhestokost, Death Monkey Explosives (they run so hot some of them cook themselves).
- **On the hull:** large radiator wings or fins standing proud of the body and glowing at their roots; soot at gun mouths; heavy magazine hatches. The heat should be the loudest feature.

### Heat Eater

- **Asks:** fire weapons whose ammunition is the ship's own heat, grow quieter while fighting, and then deliberately overheat to reload: run drives, pump heat in, be seen.
- **Pays:** a fight in which the ship's signature falls as it engages, and the gunner is hardest to see while shooting.
- **Beaten by:** watching for the reheat flare, and long fights: with everything spent downrange and no heat left, the best weapon aboard is inert. Its dependency is the loud reload and the charge supply; wear punishes the temperature swing, so the gun eats itself.
- **Evidence:** `docs/negent-weapons-concept.md` (the inversion, the reload, "the crew is the leak"); the negent ruling in `docs/stats-and-power-target.md` (a consumable charge is the balance); Adrasteia in [[Faction Play]].
- **Systems:** DOC. `WeaponModifiers.NegativeEntropy` exists as a flag on M; no behaviour subtracts heat.
- **Fits:** Adrasteia.
- **On the hull:** cold, faceted, closed; weapons with frosted or blackened intake throats rather than hot muzzles; one heater or reheat chamber that is the only feature built to be hot.

## C. Drones and Loitering Munitions

The operator asked for depth here. Aetheria has no drones, fighters or loitering munitions in code: `LauncherCaliber.Fighter`, `MicroMissile` and `SplitMissile` are enum names nothing reads (M). The substrate exists: ships are `Entity` bodies in a zone with a parent and child relation, docking bays hold ships as children that add to the host's mass, and AI drives ships through the same inputs as the player (PA 1.9). Every concept in this group is therefore **new** unless noted, and forks 3, 4 and 5 apply to all of it.

### The Drone Budget

What separates one drone concept from another is which of these the hull invests in. A catalogue entry should name its position on each.

- **Bay:** how many drones the hull carries. EVE separates this from what is active (PA 2.3, [wiki]).
- **Bandwidth:** how many are active at once. EVE's Tristan carries eight light drones and launches five.
- **Control range:** how far from the parent a drone stays under command. Beyond it, a drone holds, returns, or acts on its last order. EVE drones on an attack order chase past the leash.
- **Link:** what control travels over, and what jamming does to it. Ukraine's FPV hit rates fell under jamming, and fibre-optic tethers removed the radio emission at the cost of range and tangling ([snippet] on the rates, PA 2.1 E). In Aetheria a tether is a physical line, which is a design in itself (see Tethered Drone).
- **Recovery throughput:** how fast drones come home and turn around. The novella's first hull had four throats each capturing one drone every 70 seconds and four service positions with a 24-minute turnaround; sixteen drones returning at once queued hot and low on fuel in a lane that identified the parent ([[Brainstorming/Stories/Pirate Metagame Novella/Ship And Refit Ledger|Ship And Refit Ledger]]).
- **Drone heat and fuel:** each drone is a small body with its own heat grid and propellant. The novella's drones returned above their thermal limit and had to loiter, dump a sink, or be abandoned.
- **Operator load:** who decides what each drone does. One operator cannot fly a hundred drones; the Perdix fact sheet says operators call "plays" (PA 2.1 E). In the novella, retasking cost cognition, authorization delay and link dependence.
- **Recoverable or expendable:** a recoverable drone is cheaper per use and exposes the parent at recovery; an expendable one is a munition.

Counters common to the whole group: point defence (no PD behaviour exists in Aetheria; Cosmoteer's dev notes say clustering low-accuracy fast guns gives coverage); area bursts (FC has airburst fuses and blast radius, which are the natural anti-swarm tool, as EVE's smartbombs are); jamming or cutting the link; killing the parent; and attacking the recovery lane, which is how the novella's opponent beat the corrected drone doctrine.

### Carrier

- **Asks:** stay back, launch strike drones in waves, keep them supplied, and recover them before they run dry; decide when to commit the bay.
- **Pays:** damage delivered at range without exposing the hull, and losses taken by drones rather than crew.
- **Beaten by:** attrition faster than replacement (Starsector's replacement-rate spiral: once wings are down, the rate keeps falling), PD, and an enemy that reaches the carrier itself. Its dependency is its bay and its throats. Endless Sky found that carriers spend their own energy and repairs in combat and docked fighters stay unrepaired; EVE in March 2026 said carriers had been "outperformed by cheaper alternatives" ([secondary summary], PA 2.3).
- **Evidence:** PA 2.1 C (Starsector, Endless Sky, Highfleet, Homeworld, Sins II), PA 2.3 (EVE fighters, X4); carrier history and the Forrestal deck fire (PA 2.1 F).
- **Systems:** new; docking bays (M) are the nearest substrate.
- **Fits:** Zhestokost (a supply tail with teeth), Megiddo, Pirate Coalition (as the novella's crew learned the hard way).
- **On the hull:** launch and recovery throats as large, dark, framed openings on the dorsal surface or the camera-side flank, with guide rails or capture arms at their lips, and a deck or hangar volume that is plainly the biggest part of the ship. Guns are few and small.

### Swarm Boat

- **Asks:** launch many cheap, expendable drones at once and accept that most will die.
- **Pays:** saturation. Defences have finite magazines, cooling and attention; every round spent on one drone is unavailable for the next (the Phalanx case). The Shahed campaign used volume and unarmed dummies to drain defences, at a cost ratio heavily in the attacker's favour ([snippet] on the ratio, PA 2.1 E).
- **Beaten by:** area weapons, and an opponent who does not need to shoot them (cheap armour, or a target that simply leaves). Its dependency is volume and cheap production.
- **Evidence:** Shahed and Gerbera (PA 2.1 E, CSIS); Reassembly's launcher blocks ([community], PA 2.1 C); Children of a Dead Earth on staggered launches to saturate PD ([primary]); AU escorts' dumbfire swarms ([[Faction Play]]).
- **Elysium note:** against shields a swarm drains the reserve rather than reaching the hull, and every absorbed hit heats the shield item; a swarm that cannot break a shield can still cook it (see [[#Shield Cooker]]).
- **Systems:** new for drones; launchers with guided and seeking missiles exist on M and are the nearest substrate, and `SplitMissile` is an unread enum.
- **Fits:** Aeronautics Unlimited, Rossum & Douglas (a photocopier with a missile rack), Miss Terri's (a bag of sweets thrown at once).
- **On the hull:** a dense grid of identical small launch cells or tubes across the dorsal surface, like a honeycomb or an egg carton, many more than any gun ship would carry.

### Point-Defence Escort Drones

- **Asks:** keep a ring of armed drones around the parent or a convoy, investigating unresolved contacts and killing incoming munitions.
- **Pays:** a defensive layer that meets threats before they reach the hull, and forces the attacker to reveal its own correction traffic.
- **Beaten by:** heterogeneous cheap contacts and passive observers that "consume thrust, heat, ammunition, and cognition", and an attack on recovery. The novella's verdict on Reversible Superiority: "Recovery is not defeated in combat. It is revealed as work." It won against a sparse picket screen and lost ten weeks to staggered repair.
- **Evidence:** novella doctrines 1 and 4 (PA 3.1); X4 defence drones that auto-launch when attacked (PA 2.3, [primary wiki]).
- **Elysium note:** hull one had no shields, so every leak through the drone screen was a hit on the hull. A shielded parent absorbs leaks below its reserve, which makes a thinner screen viable. It does not widen the recovery throats, and shielding the drones themselves costs each small body power and heat it cannot spare. The recovery verdict stands.
- **Systems:** new.
- **Fits:** Aya Collective (heavy point defence that covers everyone), Cetacean Navigators (escort duty), Megiddo.
- **On the hull:** small drones docked in cradles around the hull's rim, visible as a ring of identical shapes clipped on; a few cradles empty.

### Spotter

- **Asks:** send a drone forward to look, so the parent can fire at what it cannot see itself.
- **Pays:** sensor reach without exposing the hull. Aetheria's sensors are directional and accrue information over time divided by distance (M), so a spotter closer to the target, pointed at it, reveals armour and then gear (reveal tiers on FC) long before the parent could.
- **Beaten by:** killing or blinding the spotter, which is cheap, and reading where its track is being sent. Its dependency is the link back.
- **Evidence:** Homeworld sensor probes ([snippet], PA 2.1 C); Nebulous shared tracks over a datalink ([snippet], PA 2.1 D); the arsenal ship relied on sensors from other platforms (PA 2.1 F); novella relays "preserve track" (doctrine 8).
- **Systems:** partly. Directional sensors and the per-target information model exist on M; reveal tiers and subsystem aim on FC. A drone body and track sharing (Finch's `share_track` in [[Faction Play]]) are new.
- **Fits:** Finch Cybernetics (sells noticing), Lucent Media (camera drones are spotters), Sol Dominion.
- **On the hull:** a small sensor drone with a big eye, docked at the nose or on a mast like a falcon on a glove; the parent's own sensors modest.

### Decoy Drone

- **Asks:** launch drones that look like the parent, or like something worth shooting, and let them draw fire, locks and pursuit.
- **Pays:** the opponent spends munitions and attention on nothing. Nebulous point defence targets decoys first; MALD mimics an aircraft's signature ([snippet]; PA 2.1 D).
- **Beaten by:** a second sensor that discriminates (Nebulous's secondary seeker), patience, and multiple bearings. Its dependency is that the observer must decide quickly.
- **Evidence:** PA 2.1 D (MALD, ALE-55, Nebulous EA99); the Gerbera dummies (PA 2.1 E); the novella's corrected doctrine used false return leaders (doctrine 4). AU escorts in [[Faction Play]] fire at decoys first.
- **Systems:** new. The visibility model (M) is ready to give a decoy a signature: a body with a large `Visibility` source and a `Reflector` cross-section.
- **Fits:** Adrasteia, Megiddo (a wide volume of contacts and decoys), Pirate Coalition.
- **On the hull:** racks of identical small canisters, each a scale model of the parent's silhouette or a bright reflector shape.

### Repair Drone

- **Asks:** keep drones out working on the hull, or on an ally, during the fight.
- **Pays:** sustained repair without docking. FTL players rate repair drones strong (PA 2.1 C, [primary thread]).
- **Beaten by:** burst damage that outpaces repair (EVE's light repair drones are slow; PA 2.3), and area weapons that kill drones working on the hull. Its dependency is time.
- **Evidence:** FTL, EVE repair drones, X4 repair drones, Endless Sky carriers repairing docked fighters (PA 2.1 C, 2.3).
- **Systems:** new. Item durability and wear exist on M.
- **Fits:** Aya Collective (everyone comes home), Aeronautics Unlimited, Ewan Hart, Cetacean Navigators.
- **On the hull:** small drones with manipulator arms parked on rails along the hull, beside numbered access panels.

### Tug Drone

- **Asks:** use drones to grab, tow and push: loose cargo, a disabled prize, a wreck, an asteroid, an enemy's drone.
- **Pays:** moving mass without moving the hull. Cosmoteer's tractor beam applies equal and opposite recoil to its operator ([primary], PA 2.1 A); a drone takes that recoil instead.
- **Beaten by:** anything that kills or cuts the tug; mass beyond its thrust. Its dependency is thrust per drone.
- **Evidence:** Cosmoteer tractor beams; Elite limpets (collector, fuel transfer, hatch breaker; PA 2.3); `HullData.CanTow` and the station-towing AI task (M).
- **Systems:** partly. Towing exists on M; the tractor exists in Unity only. A tug drone is new.
- **Fits:** Ewan Hart, Lightsail Express, Aeronautics Unlimited, Cetacean Navigators (they tow disabled ships away).
- **On the hull:** a cluster of small, chunky drones with grapples or clamp pads, docked like tugboats nested against the hull.

### Minelayer

- **Asks:** lay a field ahead of an enemy's route or behind the ship's own retreat, and fight where the field shapes movement.
- **Pays:** area denial that persists after the ship has left. Mines are cheap to lay and slow to clear; history ranks ordinary minefields above Q-ships against submarines (PA 2.1 D, F).
- **Beaten by:** sweepers, detection (mines are bodies with a signature), and opponents who route around a field the layer could not hide. Its dependency is predicting the route.
- **Evidence:** PA 2.1 D (real-world mine warfare, Elite shock mines); Starsector Doom's Mine Strike (PA 2.1 B).
- **Systems:** partly. `WeaponType.Mine` and a Unity `Mine` with activation delay, blast range and lifetime exist on M; FC resolves mine blasts. Field behaviour and a laying pattern are new.
- **Fits:** Death Monkey Explosives, Megiddo, Pirate Coalition.
- **On the hull:** a long rear deck or ventral chute with rails carrying a queue of identical round mines, ending at a hatch at the stern.

### Minesweeper

- **Asks:** go first, find and clear a field, or push through it.
- **Pays:** passage for everyone behind it, and the cheapest counter to the most persistent weapon.
- **Beaten by:** being shot while it works; it is slow by design. Its dependency is escorts.
- **Evidence:** real-world mine countermeasures: one vessel clearing a few square kilometres a day, towed sonar, autonomous minehunters (PA 2.1 D).
- **Systems:** new.
- **Fits:** Ewan Hart (field clearance is harvest by another name), Aeronautics Unlimited.
- **On the hull:** broad forward implements, rakes, booms or a wide scanning sweep arm, built like farm equipment.

### Loitering Munition

- **Asks:** launch a munition that waits in an area, choose its target from what it sees, and send it in, with the option to wave off and return to loiter.
- **Pays:** a weapon that does not have to be aimed at launch, which can wait for the right target, and which the pilot can call off. Switchblade allows wave-off until four seconds from impact; Harop can abort and return to loiter ([wiki], PA 2.1 E).
- **Beaten by:** jamming the link (Switchblade's effectiveness fell under electronic warfare, [U] on the figure), PD, and targets that do not present themselves. Its dependency is the link and the loiter time.
- **Evidence:** PA 2.1 E (Switchblade, Harop, Lancet). The novella: the countering force placed "two cold terminal loiterers inside the defended geometry" of the corrected drone carrier, and they ended hull one (doctrine 4).
- **Elysium note:** the two terminal loiterers that ended hull one hit a ship with no shield, and its own open propellant supplied the destructive energy. Against a shield, a terminal hit smaller than the reserve is absorbed, so loitering munitions either carry one warhead big enough to break the reserve or arrive as a pair, the first breaking the shield and the second hitting in the restore window. Negent makes the loiterer itself colder and harder to find while its charge lasts (see [[#Cold Drone]]).
- **Systems:** new. Guided launchers (M) are the nearest substrate.
- **Fits:** Rossum & Douglas (the guarantee applies to whatever it strikes first, so a loiterer that chooses is the premium model), Pirate Coalition, Cryonix (a cold loiterer is a first trace that is yours to find).
- **On the hull:** a rack of tubes angled upward from the dorsal surface, each closed by a cap, with a control or sensor mast beside them; the munitions themselves have folded wings.

### Sentry Drop

- **Asks:** deploy stationary gun platforms at a position and fight beside them, or leave them to hold it.
- **Pays:** firepower that does not need the ship's power or heat once deployed, and a position the enemy must clear.
- **Beaten by:** fast close targets the sentries cannot track (EVE sentries have "poor tracking"), and simply not coming to that position. Its dependency is a fight at a fixed place.
- **Evidence:** EVE sentry drones (PA 2.3); the Turret hull type with 360 arc and a `TurretController` (M, arc authoring FC).
- **Systems:** partly. Turret hulls exist on M as stationary entities; launching one from a ship is new.
- **Fits:** Aeronautics Unlimited (construction crews already place hardware), NiteLife Energy (guards that never leave their stations), Megiddo.
- **On the hull:** folded tripod or box turrets stacked on the deck like cargo, each with its own small gun.

### Tethered Drone

- **Asks:** fly a drone on a physical line from the parent.
- **Pays:** a link that cannot be jammed, power and cooling supplied down the tether, and recovery by reeling in.
- **Beaten by:** cutting the line, and the parent's own manoeuvres, which drag the drone. Its dependency is the geometry of the line.
- **Evidence:** fibre-optic FPV drones (cable tangling and tearing; PA 2.1 E); the ALE-55 fibre-optic towed decoy (PA 2.1 D); the Gremlins mid-air recovery by tether and arm (PA 2.1 E).
- **Systems:** new.
- **Fits:** Finch Cybernetics (a sense organ on a nerve), Cetacean Navigators, Ewan Hart.
- **On the hull:** a large winch drum or spool housing with a line paying out to a drone at its end; the drone itself small.

### Mixed Cloud

- **Asks:** carry a mixed set of small hulls (PD drones, relays, spotters, decoys, mines, terminal weapons, recoverable scouts) and assign each a present role, retasking during the fight.
- **Pays:** flexibility: a defensive element can turn offensive, relays can preserve a track, attachable units can exploit an opening.
- **Beaten by:** partitioned links, fragmenting fire, false distress, and the cost of retasking itself. The novella's verdict on bounded mixed drone clouds: "every option consumes the resource that kept another option available"; a detached recovery tender was cut off.
- **Evidence:** novella doctrine 8 (PA 3.1; [[Brainstorming/Stories/Pirate Metagame Novella/Failure Ladder|Failure Ladder]]).
- **Systems:** new.
- **Fits:** Pirate Coalition, Finch Cybernetics.
- **On the hull:** cradles of visibly different small hulls in one rack, each a different shape, so the mixture reads.

## D. Mass and Momentum

Flight is inertial with drag and zone gravity; thrusters apply torque from their position; the flywheel drive stores momentum (all M). Control allocation across damaged actuators is DOC (`docs/locomotion-cut.md`).

### Ram

- **Asks:** use the hull as the weapon: build speed, aim the heaviest part, and accept the impact.
- **Pays:** damage that scales with mass and closing speed and costs no ammunition, power or heat.
- **Beaten by:** dodging, which is easy if the ram is visible early; point defence does nothing to it, so the counter is movement. Its dependency is reaching contact.
- **Evidence:** the fireship's tactical effect (PA 2.1 F) is the nearest historical case in the file; collision damage is not documented in the file for any game.
- **Systems:** new. Inertial flight and mass exist on M; FC removed hit detection in favour of rolled resolution, so contact damage needs its own rule.
- **Fits:** Death Monkey Explosives, Zhestokost (towing lugs and a forklift's front), Pirate Coalition.
- **On the hull:** a reinforced, blunt or pointed prow block, heavier than the rest of the hull, with bracing running back from it; the drive large for the hull's size.

### Tug

- **Asks:** attach to another body and move it: tow a prize out of a protected zone, drag a disabled ally to safety, pull a station module.
- **Pays:** control of where a fight's spoils and casualties end up.
- **Beaten by:** attacking the tug while it is encumbered, since towed mass adds to its own (M). Its dependency is the tow line and its thrust.
- **Evidence:** `HullData.CanTow`, `StationTowing` task (M); Cosmoteer tractor (PA 2.1 A); Cetacean Navigators tow disabled ships ([[Faction Play]]); [[Aetheria Starbridge]] names towing and anchoring as run-saving roles.
- **Systems:** partly. Towing exists on M for station work.
- **Fits:** Lightsail Express, Ewan Hart, Cetacean Navigators, Pirate Coalition.
- **On the hull:** heavy tow hitches and lugs at the stern, a cable drum, and a drive disproportionately large for the hull.

### Thrower

- **Asks:** turn cargo, wreckage or rock into projectiles: jettison into a pursuer's path, push an asteroid with a tractor, sling mass with momentum.
- **Pays:** ammunition from the environment.
- **Beaten by:** space: there is a lot of it, and thrown mass is slow and predictable. Its dependency is a target that cannot manoeuvre.
- **Evidence:** Cosmoteer's tractor push (PA 2.1 A). No game in the file builds a hull around this.
- **Systems:** new. There is no jettison command (M); the tractor is Unity only.
- **Fits:** Aeronautics Unlimited, Pirate Coalition.
- **On the hull:** a tractor emitter or grapple arm forward and an open cargo bay or mass hopper behind it.

### Flywheel Sprinter

- **Asks:** spin up the flywheel quietly before a fight, then discharge the stored momentum in one surge, sway or turn.
- **Pays:** acceleration the reactor could not supply in the moment, and a signature that stays low until the surge.
- **Beaten by:** fights that last longer than one stored charge. Its dependency is foreknowledge.
- **Evidence:** `AetherDrive` on M: spin-up costs power, discharging RPM into thrust is free, coupling inefficiency heats (PA 1.7).
- **Systems:** exists on M.
- **Fits:** Alakrita, Lucent headliners (the surge onto stage).
- **On the hull:** a large, visible rotor housing, a drum or ring around the body or set across it, the ship's largest mechanical feature.

### Gravity Surfer

- **Asks:** ride gravity waves and wells rather than thrust against them, choosing approach paths by terrain.
- **Pays:** speed for little heat and signature; positions others cannot reach without burning.
- **Beaten by:** fights away from gravity terrain. Its dependency is the map.
- **Evidence:** zone gravity adds acceleration along the terrain normal (M); [[Design Pillars]] on "sailing on gravity waves".
- **Systems:** exists on M as physics; AI path choice by terrain is new.
- **Fits:** Cetacean Navigators (route lines on the hull), Lightsail Express.
- **On the hull:** a keel, fin or broad lower plane shaped to the wave, and little main drive.

## E. Logistics and Support

### Tender

- **Asks:** carry a column's rounds, hold back from the fight, and let low-ammunition ships rearm and return.
- **Pays:** a column that keeps firing; force becomes whatever the supply tail can feed.
- **Beaten by:** hitting the tender, or draining magazines faster than the transfer rate. Its dependency is the column's discipline in returning.
- **Evidence:** MIND `cut-faction-play-4.r2` (tender loop on real rounds, InForce); Zhestokost in [[Faction Play]]; the Quartermaster and Babushka in [[Brainstorming/Ship Prompt Bench 2|Ship Prompt Bench 2]].
- **Systems:** MIND (spec InForce, not code); item transfer exists on M.
- **Fits:** Zhestokost, Aya Collective.
- **On the hull:** magazines as the largest masses, transfer collars on the flanks, little armament. The bench's tender attempts already do this.

### Heat Tender

- **Asks:** come alongside a hot ally and take its heat, through a coupling or a carried sink.
- **Pays:** lets a furnace or burst ship fight again without cooling down.
- **Beaten by:** catching the tender while coupled, when both ships are slow and one is hot. Its dependency is the coupling window.
- **Evidence:** [[Aetheria Starbridge]] names cooling as a run-saving role; the novella's detachable emergency sinks (Ship And Refit Ledger).
- **Systems:** new. Heat conducts between cells within one hull (M); not between hulls.
- **Fits:** Cryonix (the cold chain made exact), NiteLife Energy.
- **On the hull:** big radiator wings, a thermal coupling boom with a docking collar at its tip, insulated piping visible along the spine.

### Remote Repair Ship

- **Asks:** stay with allies, repairing or recharging them under fire, while dealing little damage.
- **Pays:** a group that outlasts a stronger one.
- **Beaten by:** focusing it first; jamming. EVE logistics "can be jammed, destroyed or booshed off" (PA 2.3). Its dependency is staying cohesive with the group.
- **Evidence:** EVE logistics and spider-web remote repair (PA 2.3).
- **Systems:** new.
- **Fits:** Aya Collective, Cetacean Navigators.
- **On the hull:** manipulator arms and a repair boom, spare-part racks in plain view, a rescue or service colour band.

### Arsenal Barge

- **Asks:** carry a very large missile load and fire on someone else's targeting.
- **Pays:** firepower far above its size, at stand-off range.
- **Beaten by:** killing or blinding its spotters, and reaching it, since it has nothing else. Its dependency is the network. The arsenal ship programme ended in 1997 and its role passed to submarines carrying cruise missiles (PA 2.1 F).
- **Evidence:** arsenal ship (PA 2.1 F); Rossum & Douglas stand-off pickets ([[Faction Play]]).
- **Systems:** partly. Guided and seeking launchers exist on M; external targeting is new (see Spotter).
- **Fits:** Rossum & Douglas, Zhestokost.
- **On the hull:** a flat dorsal plane tiled with hatched launch cells, almost no sensor of its own, a small cockpit.

### Mothership

- **Asks:** carry a smaller crewed ship docked and launch it for work the big hull cannot do: boarding, landing, scouting, a second pilot.
- **Pays:** two bodies with one logistics tail.
- **Beaten by:** separating them. Its dependency is redocking.
- **Evidence:** docking bays hold a ship as a child that adds to the host's mass, and the player can dock and undock (M); Highfleet aircraft with fuel and sortie limits (PA 2.1 C, [snippet]). See also [[Nibu Attached Shuttle Story]].
- **Systems:** partly. Docking bays exist on M; stations are the only hosts in current play.
- **Fits:** Lightsail Express (cab and trailer), Cetacean Navigators (lifeboats), Pirate Coalition.
- **On the hull:** a smaller, recognisably separate craft nested into a cradle or bay on the parent, its own cockpit visible.

## F. Boarding and Capture

The [[Faction Play]] pirates want cargo, not death, and the novella is about capture. These concepts turn a fight's object from destruction to possession.

### Boarder

- **Asks:** close to contact, grapple, and put people or machines aboard.
- **Pays:** the prize intact.
- **Beaten by:** counter-boarding, hull-clearing charges, and anything that hits the boarder while it is stuck to the target. Homeworld's capture frigates stay exposed while boarding (PA 2.1 C). Its dependency is the target's interior.
- **Evidence:** Homeworld capture frigates; FTL boarding drones (PA 2.1 C); the novella's boarding cells (Ship And Refit Ledger).
- **Systems:** new.
- **Fits:** Pirate Coalition.
- **On the hull:** a grappling arm and a boarding collar or ramp on the camera side, heavy fenders, a crew section larger than a fighter's.

### Remora

- **Asks:** attach small stand-off units to the target that take its sensor, drive, safing or lock authority, and manufacture surrender by selective loss of subsystem control.
- **Pays:** capture without destruction, and the target's crew alive.
- **Beaten by:** heterogeneous control buses, local confirmation, false maintenance segments, and a target engineered so that capture would kill its passengers. The novella's verdict on Patient Hand: the best prize yet, then insurers studied standardized capture surfaces, and the crew refused a capture that would have killed passengers.
- **Evidence:** novella doctrine 3 (PA 3.1); Elite's hatch-breaker limpet, which working ECM can strip (PA 2.3).
- **Systems:** new.
- **Fits:** Pirate Coalition, Sol Dominion (an inspection lock is a lawful remora).
- **On the hull:** a row of tubes or cradles holding small flat units with clamp feet, like lampreys or limpets.

### Disabler

- **Asks:** reveal the target's gear, then shoot its drives, sensors or weapons, not its hull.
- **Pays:** a stopped ship, not a wreck: a prize, an arrest, or a fight ended early.
- **Beaten by:** preventing the reveal (stay cold, keep range), and armour placed over the subsystems that matter. Its dependency is the reveal.
- **Evidence:** reveal tiers wired to subsystem aim on FC (PA 1.5); Sol Dominion and pirates aim for drives ([[Faction Play]]).
- **Systems:** exists on FC.
- **Fits:** Sol Dominion, Pirate Coalition.
- **On the hull:** a large forward sensor array or illuminator next to a precise, long, light gun; the ship looks like it is studying, not smashing.

### Interdictor

- **Asks:** pin a target in place so others can reach it.
- **Pays:** the target cannot leave; in a game of breaking off, that wins fights.
- **Beaten by:** killing it fast, and never fighting where one is posted. EVE's tackle ships are vulnerable, and pinning snipers is "obvious but difficult" (PA 2.3). Its dependency is its friends arriving.
- **Evidence:** EVE fleet types and tackle (PA 2.3).
- **Systems:** new; drive targeting on FC is the nearest substrate.
- **Fits:** Sol Dominion, Megiddo.
- **On the hull:** a projector, net launcher or field emitter as the dominant forward feature.

### Salvager

- **Asks:** arrive after the fight, collect drops and wrecks, and leave before the owner returns.
- **Pays:** profit without combat.
- **Beaten by:** being caught in the field. Its dependency is timing.
- **Evidence:** loot drops from destroyed items and hulls; the Unity tractor beam and pickup into any cargo bay with room (M).
- **Systems:** partly (Unity-only tractor, drops on M).
- **Fits:** Pirate Coalition, Aeronautics Unlimited, Ewan Hart.
- **On the hull:** a tractor emitter, a wide open cargo maw, sorting arms.

## G. Deception

### Q-Ship

- **Asks:** look like a harmless merchant until the target commits, then reveal hidden guns.
- **Pays:** the first shot against a target that expected an easy prize.
- **Beaten by:** inspection: in Aetheria, reading gear before engaging. The historical Q-ships worked until the pattern was learned, and were later judged "greatly overrated" and ranked below minefields (PA 2.1 F). Its dependency is the observer's lack of curiosity.
- **Evidence:** Q-ships (PA 2.1 F); reveal tiers on FC already separate seeing a contact from knowing its gear; Pirates fly freighter transponders with gunship heat ([[Faction Play]]).
- **Systems:** partly. Reveal tiers exist on FC; a way to hide gear from the reveal (a shroud item or a false profile) is new.
- **Fits:** Pirate Coalition, Lightsail Express (a hauler with teeth, defensively).
- **On the hull:** a plain freighter body with panel lines that are too regular in one place, one of them shown opening to expose a gun muzzle.

### False Distress

- **Asks:** call for help that is not needed, to draw a responder into a trap or away from something else.
- **Pays:** a target that comes to you.
- **Beaten by:** responders who check before answering. Its dependency is a culture of answering. In the novella, the countering force injected false distress against the drone cloud (doctrine 8).
- **Evidence:** novella doctrine 8; Cetacean Navigators drop any fight to answer distress ([[Faction Play]]).
- **Systems:** new; there is no distress signal.
- **Fits:** Pirate Coalition.
- **On the hull:** a ship that looks damaged on purpose: a scorched panel that is painted, venting that is a dye.

### Playing Dead

- **Asks:** go cold and still, look like a wreck or a rock, and wait.
- **Pays:** the opponent ignores it or comes close to inspect.
- **Beaten by:** active sensing; Megiddo turns hostile when an inert cold object is scanned inside its volume ([[Faction Play]]). Its dependency is that nobody looks twice.
- **Evidence:** "a contact colder than its surroundings is either dead or Adrasteian" ([[Faction Play]]); thermal model (M).
- **Systems:** exists on M (heat, visibility decay).
- **Fits:** Adrasteia, Cryonix.
- **On the hull:** irregular, rock-like or wreck-like facets with no visible lights, drive or markings.

## H. Area Control and Survivability

### Picket Line

- **Asks:** lay passive sensors along a route and wait for the track.
- **Pays:** detection far beyond the ship's own sensors, with no emission.
- **Beaten by:** finding and killing pickets, or routing around them. Its dependency is guessing the route.
- **Evidence:** the novella's passive pickets with fourteen-day station life (Ship And Refit Ledger); Homeworld proximity probes ([snippet]).
- **Systems:** new as deployables; directional sensors exist on M.
- **Fits:** Finch Cybernetics, Megiddo, Sol Dominion.
- **On the hull:** racks of small cold canisters, each with a sensor eye.

### Illuminator

- **Asks:** ping actively and often, and share what it lights up.
- **Pays:** every ship nearby, friend and enemy, is seen; information arrives fast.
- **Beaten by:** shooting the brightest thing in the zone, which it is. Its dependency is protection.
- **Evidence:** active pings raise the pinger's own visibility (M); Nebulous: radar return falls with the fourth power of range and fire-control radar can burn through jamming ([snippet], PA 2.1 D); Lucent and Odla in [[Faction Play]].
- **Systems:** exists on M.
- **Fits:** Lucent Media, Framgång and Odla.
- **On the hull:** one huge aperture, dish or lens as the dominant feature, with stage lights or emitters around it.

### Point-Defence Umbrella

- **Asks:** escort others and kill what is fired at them.
- **Pays:** missiles and drones barely reach the group.
- **Beaten by:** guns, not missiles, and saturation beyond its magazine and cooling (a Phalanx empties in about 20 seconds; PA 2.1 D). Its dependency is magazine depth.
- **Evidence:** Cosmoteer PD (PA 2.1 D); Aya in [[Faction Play]].
- **Systems:** new; no PD behaviour exists.
- **Fits:** Aya Collective, Megiddo.
- **On the hull:** many small, fast turrets spread over every face, each with a short barrel and a sensor; no large gun.

### Fireship

- **Asks:** send an expendable hull, loaded to burn or burst, into an enemy formation.
- **Pays:** the formation breaks even if nothing is destroyed. At Calais in 1588 no Armada ship burned, but anchors were cut and the formation broke (PA 2.1 F).
- **Beaten by:** distance and point defence. Its dependency is a formation that holds still.
- **Evidence:** fireships (PA 2.1 F); the novella's hull one was destroyed by its own fuel and ammunition supply (doctrine 4).
- **Systems:** partly. Reactor overload and heat exist (M); a deliberate self-detonation is new.
- **Fits:** Death Monkey Explosives.
- **On the hull:** a stripped hull with charge packs strapped along it, pull handles and cut lines; DME's block already has the vocabulary.

### Distributed Body

- **Asks:** accept a bigger, more complex hull in which machinery, bays and control are spread out with no single critical place.
- **Pays:** survives hits that would end a concentrated ship. The novella's refit thesis after losing hull one: "distributed machinery, separate bays, removable Pal integration, fewer recoverable drones... no beautiful throat through which every useful thing must return."
- **Beaten by:** time and attrition: no single kill, but no single strong point either.
- **Evidence:** novella doctrine 4 refit thesis (PA 3.1); per-cell armour and items absorbing as pools (M).
- **Elysium note:** the thesis was written by a crew with no shields. It still holds in Elysium, because what destroyed hull one was a shared service neighbourhood, and a shield is one more single critical item to place: a distributed body might carry two smaller shields rather than one large one.
- **Systems:** exists on M as physics; the design choice is hull layout.
- **Fits:** Aya Collective (replaceable cells), Megiddo (separately maintained service sections).
- **On the hull:** repeated, separated modules joined by trusses or frames, each with its own small radiator and access hatch.

## I. Shields and Negent

Elysium's own technology, absent from the novella's Sol timeline. Protection here is plural and faction-dependent (fork 8, answered): armour is almost always still a good idea, most protective technologies deflect or mitigate a specific damage type, and a shield that blocks anything is prohibitively expensive to run, so a ship that turtles behind one drains its capacitors and dies to thermals. This group catalogues that universal shield, because it is the one built on master; it is not the default hull. Damage types travel on events but are not used in the damage math today, so type-specific mitigation needs new systems. On master a shield is an item with an energy reserve: each absorbed hit spends energy per point of damage and adds heat to the shield item in proportion to the damage; a hit larger than the reserve passes through to the hull whole, breaks the shield and empties it; a broken shield restores on its own, slower clock (the punish window); it has no facing and ignores damage type (`Shield.cs`). On fire-control the shield draws from the power bus at High tier. A heat-cooked shield can drop offline like any other item. The shield presentation contract (`docs/shield-presentation-contract.md`) separates what a shield does from how it is shown: a field shield, a hard-light panel interceptor and the Lariat whip are interchangeable presentations of the same capability. Negent is design documents only: gear that converts heat into light, so a ship can run colder than its surroundings, paid for by a consumable charge only Adrasteia makes, by wear from the temperature swing, and by the crew's own heat ([[Worldbuilding/Post-Elysium/Technology/Running Cold|Running Cold]], `docs/negent-weapons-concept.md`, negent ruling in `docs/stats-and-power-target.md`).

How the three layers interact, which every entry below leans on:

- **Shield and cost.** The universal shield pays for its generality in power and heat: a reserve spends energy per point absorbed and heats the shield item, so a ship that sits behind one empties its capacitors and then cooks. Armour costs mass once and keeps working. Most ships should expect to carry armour and at most a narrower, cheaper protection.
- **Shield and armour.** A hit either stays in the shield or goes through whole. So the shield handles many small hits and armour handles the big one that breaks it. A ship chooses which layer it invests in, and an attacker chooses whether to drain the reserve or exceed it.
- **Shield and heat.** Absorbed damage becomes heat in the shield item, so a shield is also a heat sink with a temperature band. Radiators and negent decide how long a shield can keep absorbing.
- **Shield and drones.** Drones are many small hits; they drain and heat shields rather than breaking them. Drones are also small bodies, for which a shield is expensive.
- **Negent and everything.** Negent removes the heat limit on sustained fire, on shield absorption and on cold waiting, and replaces it with a supply line. It is "an infinite-DPS exploit" without the charge cost (the ruling's own words), so every negent concept is really a logistics concept.

### Shield Tank

- **Asks:** carry a large reserve and keep it topped up: avoid single hits that exceed it, break off to refill, and watch the shield's own temperature.
- **Pays:** chip damage disappears; light weapons, swarms and point defence fire do nothing to the hull.
- **Beaten by:** one hit larger than the reserve, which breaks it and lands whole; then the restore window. Also sustained fire that never breaks it but cooks the shield item. Its dependency is that nothing it meets hits hard enough.
- **Evidence:** `Shield.cs` (M); Starsector's flux and hard flux, where shield absorption builds a load that only clears with the shield down (PA 2.1 B, [wiki]); EVE buffer and passive shield tanks (PA 2.3, [wiki]).
- **Systems:** exists on M; power tiers on FC.
- **Fits:** Megiddo (the no-weak-part shield in the content pass), Aya Collective, Sol Dominion.
- **On the hull:** a prominent shield emitter as a visible housing: a ring, dome or projector array set high on the hull, with its own radiator fins, so the shield reads as gear and its heat path is visible.

### Shield Breaker

- **Asks:** land one hit larger than the target's reserve, then exploit the restore window with everything else.
- **Pays:** the whole defensive layer removed at once, and a few seconds in which every weapon reaches the hull.
- **Beaten by:** reserves larger than its alpha; dodging during the charge; armour behind the shield that survives the follow-through. Its dependency is reading the reserve. Fire-control's reveal tiers (armour, then gear) are the natural way to learn it.
- **Evidence:** `Shield.cs` break and restore (M); Lucent's duel in [[Faction Play]], where the headliner opens with a heavy laser burst; Starsector's overload window (PA 2.1 B).
- **Systems:** exists on M (charged weapons, shield break); fire control and reveal tiers on FC.
- **Fits:** Lucent Media, Cryonix, Alakrita, Zhestokost (the heavy gun is the point).
- **On the hull:** one heavy weapon dominating the silhouette, usually a spinal or a large forward mount, plus a ring of light guns for the follow-through.

### Shield Skirmisher

- **Asks:** carry a small reserve that refills fast, fight in short exchanges, and step out of range to refill rather than absorb a long fight.
- **Pays:** a shield that is nearly always full when it matters, at little mass and power.
- **Beaten by:** anything that keeps it in range, and any hit bigger than its small reserve. Its dependency is freedom to disengage.
- **Evidence:** `RefillDuration` and `RestoreDuration` as separate clocks (M); EVE active tanks, which fail when capacitor drains (PA 2.3).
- **Systems:** exists on M.
- **Fits:** Alakrita, Pirate Coalition, Miss Terri's (one pass, out, refill, back).
- **On the hull:** a compact emitter close to the cockpit, and large drives; the shield is small and the ship is built to leave.

### Shield Cooker

- **Asks:** pour sustained, low-damage fire into a shield that will not break, so the absorbed heat drives the shield item out of its temperature band and offline.
- **Pays:** beats a shield tank without a heavy gun.
- **Beaten by:** radiators, heat storage and negent on the target; distance. Its dependency is time on target.
- **Evidence:** `Shield.TakeHit` adds heat per absorbed point (M); items lose performance and go offline outside their temperature band (M); Starsector's hard flux (PA 2.1 B).
- **Systems:** exists on M as physics; the AI choosing this over breaking is new.
- **Fits:** Miss Terri's (continuous spray), Aeronautics Unlimited (dumbfire swarms), Death Monkey Explosives (they run hot and make others hot).
- **On the hull:** many continuous-fire emitters or nozzles, and large radiators of its own, because the cooker heats itself too.

### Facing Shield

- **Asks:** keep the shield's arc toward the threat, as a broadside ship keeps its guns toward it.
- **Pays:** a stronger shield for the same power, if fork 6 pays for coverage in reserve.
- **Beaten by:** flanking; two attackers. Its dependency is one threat axis.
- **Evidence:** fork 6; Starsector frontal shields (general knowledge, not in the evidence file); the hard-light panel interceptor presentation (`docs/shield-presentation-contract.md`) would show it naturally.
- **Systems:** new; omni shields exist on M, weapon arcs on FC.
- **Fits:** Zhestokost and Megiddo (armoured prow plus a frontal shield), Sol Dominion (broadside with the shield on the gun side).
- **On the hull:** panel emitters or a projector frame on one face only, plainly directional, with the other faces carrying armour.

### Shield Escort

- **Asks:** extend shield coverage over another ship, or stand between it and the threat with a large reserve.
- **Pays:** a fragile ship (a tender, a carrier, a hauler) fights or works inside protection it could not carry.
- **Beaten by:** breaking the escort's reserve, which uncovers both, and separating them. Its dependency is staying close.
- **Evidence:** the presentation contract expresses coverage through the ship's envelope, which a projector would extend; EVE remote shield logistics (PA 2.3).
- **Systems:** new.
- **Fits:** Aya Collective, Cetacean Navigators, Megiddo.
- **On the hull:** a projector boom or ring standing off the hull, aimed outward, much larger than a self-shield emitter would need to be.

### Lariat

- **Asks:** fly a ship whose shield and pickup are one presentation: a whip that snaps out to intercept incoming fire and to catch loot, munitions or drones.
- **Pays:** the same gesture defends and salvages; a ship built around it fights to collect.
- **Beaten by:** its arbitration: it decides whether it is snapping, coiling or reeling, and a second threat while it reels must be absorbed by the capability without the whip's help (the presentation may refuse to show it). The underlying shield is beaten as any shield is.
- **Evidence:** `docs/shield-presentation-contract.md` (the Lariat serves both pickup and shielding; it may not delay or deny the simulation).
- **Systems:** DOC; the field shield's tendril presentation exists (`FieldDriver`).
- **Fits:** Pirate Coalition, Ewan Hart, Lucent Media (a whip is a performance).
- **On the hull:** a coiled tube or cable housing with a reel and a launch throat, the coil the largest feature on the side facing the camera.

### Negent Sink

- **Asks:** keep firing, absorbing or holding still without pausing to cool, and manage instead the charge magazine, the wear on gear held far below its designed temperature, and the crew's body heat.
- **Pays:** sustained fire, a shield that never cooks, and a cold signature, all at once, for as long as the charges hold.
- **Beaten by:** a long fight, which spends the charges; a cut supply line; and patience, because "after that it is a very cold ship full of worn equipment, crewed by people who feel fine" ([[Worldbuilding/Post-Elysium/Technology/Running Cold|Running Cold]]). Its dependency is Adrasteia's charge.
- **Evidence:** negent ruling in `docs/stats-and-power-target.md`; [[Worldbuilding/Post-Elysium/Technology/Running Cold|Running Cold]]; DarkMatter X, a negentropy reactor ([[Brainstorming/Corporate Roster and Item Wishlist|Corporate Roster]]).
- **Systems:** DOC. Temperature bands, wear from swing and cockpit hypothermia exist on M.
- **Fits:** Adrasteia, and its customers at a price.
- **On the hull:** a charge magazine as a sealed, keyed hatch; cold apertures where radiators would be; frost or dark bloom around the conversion array.

### Negent Shield Tank

- **Asks:** pair a shield with negent so that absorbed heat is converted away.
- **Pays:** removes the shield cooker counter while the charges last; only a hit above the reserve threatens it.
- **Beaten by:** the shield breaker, unchanged; and drain on charges, which every absorbed hit now costs. Its dependency is both the reserve and the supply line.
- **Evidence:** the shield heat path in `Shield.cs` (M) and the negent ruling (DOC).
- **Systems:** DOC for the negent half.
- **Fits:** Adrasteia, and a rich Megiddo or Sol Dominion buyer.
- **On the hull:** a shield emitter whose heat path runs into a negent array rather than a radiator.

### Cold Drone

- **Asks:** fit drones or loitering munitions with negent so they wait colder than the background.
- **Pays:** loiterers and pickets that are much harder to find; the Sol counter that ended hull one, cold loiterers inside the defended geometry, becomes a weapon a player can field.
- **Beaten by:** active sensing (Megiddo's rule), the charge each drone consumes, and short loiter time once the charge runs out. Its dependency is a charge per drone, which makes swarms of them very expensive.
- **Evidence:** novella doctrine 4 (Sol-timeline; there the loiterers were cold without negent); negent ruling (DOC).
- **Systems:** new for drones, DOC for negent.
- **Fits:** Adrasteia, Cryonix, Pirate Coalition when it can afford them.
- **On the hull:** a rack of small faceted, light-drinking munitions with sealed charge caps, unlike the parent's other gear.

## Faction Fit

Shield concepts in this table mean the faction fields the universal shield or fights it, not that its hulls carry one by default. Armour is the baseline for every row, and a faction's own protection may be a narrower, type-specific technology that the lore has not named yet.

Tendencies, not rights. Registers are from [[Brainstorming/Ship Design Language|Ship Design Language]]; doctrines from [[Faction Play]].

| Faction | Register | Concepts its doctrine favours | Why |
|---|---|---|---|
| Zhestokost | Serious | Broadside two-sided, armoured prow, furnace, tender, carrier, arsenal barge, shield breaker, facing shield | Force is whatever the supply tail can keep firing |
| Miss Terri's | High whimsy | Forward-fixed fighter, one-sided broadside (spray pass), swarm boat, shield cooker, shield skirmisher | One spray pass, then the corrosion works |
| Lucent Media | Spectacle | Burst and break off, spinal mount, illuminator, spotter (camera drones), rotating battery, shield breaker, Lariat | Every fight is content; one headliner at a time |
| Corriedales | High whimsy | Forward-fixed fighter, a companion drone or two | A mascot with a real gun; a pet drone fits the register |
| Aeronautics Unlimited | Serious | Swarm boat, tug drone, sentry drop, repair drone, salvager, minesweeper, shield cooker | Working crews and frontier hardware |
| Finch Cybernetics | Serious | Spotter, picket line, tethered drone, mixed cloud | Sells noticing |
| Rossum & Douglas | Serious | Arsenal barge, swarm boat, loitering munition, stern chaser | Stand-off guaranteed missiles; backs away from anyone who closes |
| NiteLife Energy | Serious | Sentry drop, radiator gambler, heat tender | Guards never leave their stations |
| Lightsail Express | Whimsy turned up | Stern chaser, tug, mothership, Q-ship (defensive) | Never drops the cargo; fights with it |
| Alakrita | Serious | Spinal mount, forward-fixed fighter, flywheel sprinter, burst and break off, shield breaker, shield skirmisher | One fast pass, leaves when scratched |
| Ewan Hart | Whimsy turned up | Tug, repair drone, minesweeper, one-sided broadside (a gun where the tool arm is), Lariat | People need dinner |
| Death Monkey Explosives | Reserved | Fireship, minelayer, furnace, ram, armoured prow, shield cooker | Break the dependency and make sure it stays broken |
| Adrasteia | Serious | Quiet approach, heat eater, heat ferry, decoy drone, playing dead, negent sink, negent shield tank, cold drone | The best defence is not to need one |
| Sol Dominion | Serious | Disabler, interdictor, broadside two-sided, spotter, picket line, remora (inspection lock), shield tank, facing shield | Identify, classify, then act through the record |
| Cryonix | Serious | Spinal mount, burst and break off, radiator gambler, quiet approach, heat tender, shield breaker, cold drone | One precise shot, then a bright heat dump |
| Cetacean Navigators | Whimsy turned up | Tug, remote repair, PD escort drones, mothership (lifeboats), gravity surfer, shield escort | Obligations without consequences are advertising |
| Aya Collective | Serious | PD umbrella, PD escort drones, distributed body, repair drone, tender, shield tank, shield escort | Everyone comes home |
| Framgång and Odla | High whimsy | Illuminator, rotating battery | Chrome and a useless active sensor |
| Pirate Coalition | Pirate | Q-ship, boarder, remora, disabler, mixed cloud, false distress, minelayer, salvager, stern chaser, shield skirmisher, Lariat, cold drone | Possession has a maintenance schedule, and they fly what they steal |
| Megiddo | Serious | PD umbrella, minelayer, decoy drone, picket line, interdictor, distributed body, shield tank, facing shield, shield escort | Hold the boundary until the question is answered |

## Gaps

- Ace Combat, Into the Breach, Nebulous devlogs, Starsector hullmods and mount-arc rules, and Cosmoteer fighters were not retrieved (PA 2.2). Several Starsector and Elite numbers above rest on fan wikis or search snippets and are marked.
- The novella room's `Native Type Mapping.md` (how its components map onto Aetheria item types) was not read; it may already answer part of forks 3 and 4.
- No game in the evidence builds a hull around throwing mass or around a tethered drone; those entries are extrapolation.

## Evidence Key

- **PA** is the Eyes evidence file of 2026-10-04, `F:\Projects\aetheria-ship-play-concepts-prior-art.md` (outside the vault). Strand 1 (PA 1.x) inventories Aetheria mechanics by branch; strand 3 (PA 3.x) summarizes the novella's doctrines; strand 2 (PA 2.x) is prior art. Its marks carry over here: **[wiki]** is a fetched fan wiki, **[primary]** developer or official text, **[snippet]** a search-engine snippet only, **[U]** unverified.
- The novella is [[Fiction/The Burden of Proof|The Burden of Proof]]. Its planning documents are in [[Brainstorming/Stories/Pirate Metagame Novella/index|Pirate Metagame Novella]], chiefly [[Brainstorming/Stories/Pirate Metagame Novella/Failure Ladder|Failure Ladder]], [[Brainstorming/Stories/Pirate Metagame Novella/Combat Model|Combat Model]] and [[Brainstorming/Stories/Pirate Metagame Novella/Ship And Refit Ledger|Ship And Refit Ledger]]. Its doctrines are story-room inventions, not canon and not implemented mechanics; they are cited here as the setting's own playtest.
