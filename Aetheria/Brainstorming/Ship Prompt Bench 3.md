---
title: Ship Prompt Bench 3
description: "A third bench of ship prompts. Each starts from a play concept that shows on the hull and breaks the two-drives-back, two-guns-front default. All are composed after the global and faction blocks."
---

# Ship Prompt Bench 3

> **Status: brainstorming bench, 2026-10-05.** Not canon and not adopted. [[Brainstorming/Ship Prompt Bench 2|Ship Prompt Bench 2]] stays as the record of round two. Prompts here are the third block of the composition order in [[Brainstorming/Ship Design Language|Ship Design Language]]. Concepts come from [[Game Design/Ship Play Concepts|Ship Play Concepts]], and craft rules from guidelines 1 to 14 in [[Brainstorming/Faction Ship Concept Prompts|Faction Ship Concept Prompts]].

Operator, 2026-10-05: "Bison was already good to go. I tried the global and faction blocks on Vasuki though, and it did result in a noticeably more coherent render. From Bench 2 I also tried One Pass (big fail), Bulldog (nice stature, big silly thing on its back, fail), and the Sugar Glider (pass: it's both cute and cursed, very Miss Terri). The Bulldog concept could work as a ship with a huge built-in capacitor that defines its role, but even then it's way too prominent in the design. Sugar Glider also hinges on builtin gear, with the spray weapon in its mouth and fuel tanks in its cheeks. You can see from the One Pass result that the flowery prose in its prompt did not save it from a weak concept. I'd like Bench 3 to learn from previous results and incorporate novel gameplay roles into the designs (too many of these ships have exactly two thrusters in the back and two guns in the front)"

## What Round Two Taught

| Render | Result | Lesson | Recorded in |
| --- | --- | --- | --- |
| Vasuki (first bench), composed after the global and Alakrita blocks | "a noticeably more coherent render" than Vasuki alone | Composition works. Every prompt here is composed the same way. | Ship Design Language, Composition Order |
| One Pass (Alakrita interceptor) | "big fail" | Prose does not rescue a weak concept. "Cockpit, two guns and speed" is the default silhouette, not a concept. | Guideline 13 |
| Bulldog (NiteLife station guard) | "nice stature, big silly thing on its back, fail" | Signature gear fails as a prominent add-on. The NiteLife block itself asked for the cartridge "standing proud"; the block is amended. | Guideline 14; NiteLife block |
| Sugar Glider (Miss Terri's spray fighter) | "pass: it's both cute and cursed, very Miss Terri" | Signature gear works when it is part of the body: the sprayer in the mouth, the tanks in the cheeks. | Guideline 14 |
| Bison (first bench) | "already good to go" | Already at its benchmark, so it is not repeated. | First bench |

All four renders, and the first round's too, have two drives at the stern and guns at the nose. Bench 2 left thrust unnamed and asked mostly for forward guns, so the model filled the gap with its default. Guideline 13 and the amended thrust paragraph in Ship Design Language now name the thrust layout whenever the concept depends on it.

## From Bench 2

- **Carried forward unchanged:** Sugar Glider. It passed.
- **Reworked:**
  - *Bulldog* → **Bulldog II.** Same stance. The capacitor is now the chest, and the cartridge sits flush in the back. The role is the one the operator named: a ship defined by its capacitor.
  - *Leashed* is folded into Bulldog II. It was the same guard with the same cartridge problem.
  - *One Pass* → **Riposte.** One spinal lance and a flywheel surge give it a way to fight.
  - *Pouchling* → **Joey.** The pouch now holds a docked fighter instead of cargo, so the kangaroo is a mothership.
  - *Remora* (Sol) → **Lien.** The cutter no longer clamps on itself; it fires small lock units that clamp on.
  - *Zera II* and *Many Seeds* (Megiddo decoys) → **Sown.** The same seed grammar now lays a picket line.
  - *Four Hundred Runs* → **Fifth Wheel.** The cab becomes a ship of its own.
- **Left in Bench 2, superseded as concepts:** the forward-gun fighters, interceptors and duelists, which are the default the operator flagged. These are Puffling, Bunbun, Snout, Frosting, Swarmlet, Greyhound, Swan, The Gold Scratch, Pounce, Encore Entrance, Morzh, Crouch, Draw and Corgi Express. They are not deleted. Their factions get a concept here instead.
- **Left in Bench 2, still worth a render:** Function prompts whose role is already a play concept, such as Quartermaster (tender), Due Process and First Trace (spinal mounts), Docket (boarding face), Severance (spinal launcher), Shed the Load (drop-cell heat management), Full Charge, Common Hold and House Call. They are untested, not failed, so they are not repeated.
- **Not touched:** the stations.

## How to Use This Bench

- **Compose before rendering:** the global Aetheria block, then the faction block, then one prompt from here, each separated by a blank line. Vasuki showed what this adds.
- **Each entry starts from a concept.** It names its play concept, what the pilot does, and how the default silhouette is broken: thrust layout, weapon placement and arcs, or a non-weapon role. If a concept would not survive a one-line description, it is not here.
- **Thrust is named where the concept needs it** (Ship Design Language, amended). You still place the final thrusters. The prompt only stops the model from defaulting to two at the stern.
- **Fixed mounts say "fixed".** The global block says guns sit "in small turrets on thick armoured mounts". The ship prompt comes last and wins, so a broadside or spinal entry states its fixed mounts and their direction. Turrets here carry light guns, matching the ruling that heavy guns live on narrow arcs (`arc-and-traverse-on-the-link`, 2026-10-04).
- **Built-in gear** is stated on every entry: what the role rests on, and how the prompt keeps it integrated and in proportion (guideline 14). The operator ruled on 2026-10-05 that hulls may carry built-in gear (`hulls-carry-built-in-gear`): "Built-in gear is just an obvious thing to have, an easy way to design ships that play differently." It is one lever among several. About half the entries here use it; the rest differ by thrust layout, mount arcs or role. How built-in gear is represented in hull data, and whether it can be removed, is not decided, and this bench does not assume an answer.
- **Drones and munitions** are gear-built bodies, launched from and docked into bays and cradles (rulings `drones-and-munitions-are-entities` and `drone-command-verbs-are-products`, 2026-10-04). Entries show bays, cradles and controller masts as gear.
- **Modes, Safe bet and Moonshot** mean the same as in Bench 2. A moonshot says what it risks.
- **Faction choice** follows the tendencies in Ship Play Concepts' Faction Fit table. That is a reading of fork 7, not a ruling on it. No entry uses a facing shield (fork 6).
- Every prompt ends with the standard frame clause.

---

## Zhestokost

[[Game Design/Faction Play#Zhestokost|doctrine]] · register: serious

### Batareya · Broadside, Two-Sided

**Concept:** [[Game Design/Ship Play Concepts#Broadside, Two-Sided|Broadside, Two-Sided]]. Mode: Function. Safe bet.
**Plays:** the pilot turns a flank to the target. When one battery runs hot, the pilot rolls the cool side over.
**Breaks the default:** no forward gun at all. Eight fixed guns face sideways, and corner turning blocks make the turn the aim.
**Built-in gear:** none. The batteries are fitted fixed guns; the concept lives in their arcs.

Design the Batareya, a two-person Zhestokost broadside gunship that fights side-on. Its body is a long, tall-sided stepped armoured box, twice as long as it is wide. Along the flank facing the camera, four identical short, thick cannons stand in a row at one height on fixed armoured mounts, every muzzle pointing straight out sideways, square to the spine. The matching muzzles of the far battery show just past the dorsal edge. The bow is a thick, plain, stepped armour face with a narrow cockpit slit and no gun. A deep magazine runs down the spine between the two batteries, its square hatches feeding both rows. Square turning-thruster blocks sit at all four corners of the hull, facing sideways, and one large square drive fills the stern. One complete ship, centered with clear margin around it, three-quarter front view from slightly above showing the dorsal surface and one side; moderate lens; plain seamless light gray background; soft key light with gentle form shadows; matte finishes throughout.

### Matka · Carrier

**Concept:** [[Game Design/Ship Play Concepts#Carrier|Carrier]]. Mode: Function. Safe bet.
**Plays:** it holds back, launches strike drones in waves, and recovers them before they run dry. Its throats are what an enemy goes for.
**Breaks the default:** the armament is its deck. The drives sit in ventral pods so the deck stays clear.
**Built-in gear:** the launch throats and recovery arm, built as the deck itself. Built in, and the deck's own mass.

Design the Matka, a three-crew Zhestokost drone carrier whose guns are its drones. The top of the ship is one broad, flat, armoured flight deck, the largest part of the hull, with two large dark launch throats set into it side by side, each framed by a thick armoured lip and guide rails. Behind the throats, a squat recovery arm with a capture cradle lies folded flat on the deck. Four small boxy strike drones sit clamped to the deck beside the throats, each a stubby armoured wedge with one short gun. A narrow cockpit slit looks forward from a low armoured block at the bow. One small flak turret sits on each rear corner of the deck. The drives sit low in two thick ventral pods under the flanks. One complete ship, centered with clear margin around it, three-quarter front view from slightly above showing the dorsal surface and one side; moderate lens; plain seamless light gray background; soft key light with gentle form shadows; matte finishes throughout.

---

## Miss Terri's Sugariffic Snack Company

[[Game Design/Faction Play#Miss Terri's Sugariffic Snack Company|doctrine]] · register: high whimsy

### Sugar Glider · Forward-Fixed Fighter (carried forward)

**Concept:** [[Game Design/Ship Play Concepts#Forward-Fixed Fighter|Forward-Fixed Fighter]] with a continuous spray: one pass, then the corrosion works. Mode: Mascot. Passed in round two.
**Plays:** close fast, spray from the mouth, leave.
**Breaks the default:** it is the bench's one forward-gun ship, kept because the weapon is the face.
**Built-in gear:** yes. The sprayer is the mouth and the reservoirs are the cheeks. This is guideline 14's model.

Design the Sugar Glider, a single-pilot Miss Terri's spray fighter: a whole, plump, round-eyed sugar glider flying belly-down. Its big round head is fused into a chubby body, with two large round optics where the eyes would be and two thick, rounded ears. Its gliding membranes are two broad, thick, rounded side panels fused along its flanks from wrist to ankle, with short stubby paws at their corners. Its two round cheeks are swollen reservoirs feeding one short, thick spray nozzle under its little nose. The cockpit is a rounded canopy on the crown of the head, between the ears. One small defensive turret sits on its back between the shoulders. Its tail is a short, fat, rounded stub. One complete ship, centered with clear margin around it, three-quarter front view from slightly above showing the dorsal surface and one side; moderate lens; plain seamless light gray background; soft key light with gentle form shadows; matte finishes throughout.

### Stinker · Stern Chaser

**Concept:** [[Game Design/Ship Play Concepts#Stern Chaser|Stern Chaser]]. Mode: Mascot. Safe bet.
**Plays:** it runs, and whatever chases it flies into the spray. It never turns toward danger.
**Breaks the default:** its only weapon points backward. Thrust comes from four paw pods under the belly, because the tail owns the stern.
**Built-in gear:** yes. The tail is both the reservoir and the nozzle, in the Sugar Glider pattern.

Design the Stinker, a single-pilot Miss Terri's stern-chasing spray ship: a whole, plump, round baby skunk that sprays behind it while it runs. Its big round head is fused into its chubby body, with two large round optics where its eyes would be, two small rounded ears and an innocent little smile. Its huge fluffy tail curls up and back over its rump as one fat, rounded reservoir in two broad stripes, and the tip of the tail is one short, thick spray nozzle pointing straight backward. The cockpit is a rounded canopy on the crown of its head, facing forward, away from the nozzle. Its four short, stubby paws are thruster pods tucked under its belly. Its only weapon is the tail. One complete ship, centered with clear margin around it, three-quarter front view from slightly above showing the dorsal surface and one side; moderate lens; plain seamless light gray background; soft key light with gentle form shadows; matte finishes throughout.

### Honeypot · Swarm Boat

**Concept:** [[Game Design/Ship Play Concepts#Swarm Boat|Swarm Boat]] ("a bag of sweets thrown at once"). Mode: Mascot. Safe bet.
**Plays:** it launches a cloud of cheap expendable sweets in one go and accepts that most will die.
**Breaks the default:** no gun. The whole back is a launcher, and the thrust is spread over four wingtips.
**Built-in gear:** yes. The launch cells form the bee's back, so the body is the launcher.

Design the Honeypot, a single-pilot Miss Terri's swarm launcher: a whole, round, fuzzy bumblebee carrying its hive on its back. Its plump striped body is fused to a big round head with two large round optics and two short, thick, rounded antennae. Its back is one broad dome of small hexagonal launch cells, each capped with a waxy round lid, covering the bee from shoulders to tail. The cockpit is a rounded canopy on the front of the head. Its four stubby wings are thick, rounded slabs standing out from its shoulders, each with a small thruster port at its tip. Its stinger is a short, thick sensor nub. One complete ship, centered with clear margin around it, three-quarter front view from slightly above showing the dorsal surface and one side; moderate lens; plain seamless light gray background; soft key light with gentle form shadows; matte finishes throughout.

---

## Lucent Media

[[Game Design/Faction Play#Lucent Media|doctrine]] · register: spectacle

### Spin Cycle · Rotating Battery

**Concept:** [[Game Design/Ship Play Concepts#Rotating Battery|Rotating Battery]]. Mode: Function. Moonshot: a disc hull may lose the faction's layered shells.
**Plays:** the hull keeps turning, so each fixed laser fires as it sweeps past the target and cools for the rest of the turn. A spinning stage also films well.
**Breaks the default:** radial symmetry with four guns facing four ways. Tangential rim thrusters hold the spin.
**Built-in gear:** yes. The flywheel is the hub, the body's centre of mass.

Design the Spin Cycle, a single-pilot Lucent Media rotating-battery ship that spins like a showroom turntable and fires each gun as it passes the target. Its body is one broad, round, thick disc with a raised central hub. Four identical laser emitters sit evenly around the rim, each in a thick knurled wheel-shaped mount, every one pointing straight outward. The hub is the flywheel housing, a fat ribbed drum, with the cockpit as a domed canopy on its top and a camera-lens sensor dome beside it. Four small thrusters sit on the rim between the emitters, each angled along the rim to keep the disc turning. Thick shells in the faction colours ring the disc in overlapping steps, and a show title runs around its edge. One complete ship, centered with clear margin around it, three-quarter front view from slightly above showing the dorsal surface and one side; moderate lens; plain seamless light gray background; soft key light with gentle form shadows; matte finishes throughout.

---

## Corriedales

[[Worldbuilding/Pre-Elysium/Factions/Powers/Minor/Corriedales|Corriedales]] · register: high whimsy (mascot hulls)

### Mama Duck · Point-Defence Escort Drones

**Concept:** [[Game Design/Ship Play Concepts#Point-Defence Escort Drones|Point-Defence Escort Drones]], the faction's "companion drone or two". Mode: Mascot. Moonshot: the ducklings are separate small bodies on purpose, which risks them merging into lumps.
**Plays:** the ducklings fly out around their mother and shoot down what comes at her, then come home to their cradles.
**Breaks the default:** its defence is a ring of drones. It flies on two webbed feet.
**Built-in gear:** the cradles are docking clamps, which are gear under the drone ruling. The ducklings are drones built from gear.

Design the Mama Duck, a single-pilot Corriedales escort carrier: a whole, plump, smiling mother duck with three ducklings riding on her back. The ducklings are her escort drones: three small, round, fluffy duckling-shaped drones with tiny round optics, each half sunk in its own rounded cradle in a row along her back, each with one tiny gun on top of its head. A fourth cradle at the end of the row stands empty. Her round head is fused to her body, with two large round optics where her eyes would be and a short, thick, rounded bill that holds one light gun like a wand. The cockpit is a rounded canopy on the crown of her head. Her two broad webbed feet, tucked under her tail, are her thruster paddles. One complete ship, centered with clear margin around it, three-quarter front view from slightly above showing the dorsal surface and one side; moderate lens; plain seamless light gray background; soft key light with gentle form shadows; matte finishes throughout.

### Joey · Mothership (reworked Pouchling)

**Concept:** [[Game Design/Ship Play Concepts#Mothership|Mothership]]. Mode: Mascot. Moonshot: the joey is a second small volume and may merge into the pouch.
**Plays:** the mother carries a small crewed fighter and launches it for work she cannot do, then takes it back in.
**Breaks the default:** two bodies and two pilots. The thrust sits in its hind feet, angled down and back like a hop.
**Built-in gear:** the pouch is a docking bay. Docking bays already hold ships as children.

Design the Joey, a two-pilot Corriedales mothership: a whole, round, friendly kangaroo mother with a small fighter riding in her pouch. The pouch is a deep docking bay across her belly. Peeking out of it is the joey, a tiny, round, kangaroo-faced fighter with its own small canopy and one light gun wand in each forepaw. The mother's round head is fused to her shoulders, with two large round optics where her eyes would be and two thick, upright, rounded ears. Her cockpit is a rounded canopy on top of her head. Her two big hind feet are broad thruster pads angled down and back, and her thick tail curls under her as a rounded base. One small defensive turret sits between her shoulders. One complete ship, centered with clear margin around it, three-quarter front view from slightly above showing the dorsal surface and one side; moderate lens; plain seamless light gray background; soft key light with gentle form shadows; matte finishes throughout.

---

## Aeronautics Unlimited

[[Game Design/Faction Play#Aeronautics Unlimited|doctrine]] · register: serious

### Fenceline · Sentry Drop

**Concept:** [[Game Design/Ship Play Concepts#Sentry Drop|Sentry Drop]]. Mode: Function. Safe bet.
**Plays:** it plants gun platforms at a site and leaves them to hold it. Its own gun is an afterthought.
**Breaks the default:** its armament is cargo. It has four corner thruster pods on outrigger lobes for holding station while the crane works.
**Built-in gear:** none. The crane is a fitted tool, and the sentries are bodies built from gear.

Design the Fenceline, a two-person Aeronautics Unlimited sentry layer that plants gun platforms and leaves them to hold a site. Its flat rear deck carries four folded sentry turrets stacked in two rows like cargo, each a squat box with its tripod legs folded under it, one short gun and a stencilled number. A short, thick loader crane lies folded at the front of the deck, its hook resting on the first sentry. The cab is a rounded-rectangle block at the front with a wide, low window and a short survey mast. The body rests on four short, thick outrigger lobes at its corners, each fused to the hull and carrying one thruster pod for holding station. One small turret sits on the cab roof. One complete ship, centered with clear margin around it, three-quarter front view from slightly above showing the dorsal surface and one side; moderate lens; plain seamless light gray background; soft key light with gentle form shadows; matte finishes throughout.

### Mule Team · Tug Drone

**Concept:** [[Game Design/Ship Play Concepts#Tug Drone|Tug Drone]]. Mode: Mass (tugboats nested against a barge). Safe bet.
**Plays:** its drones grab and tow loose cargo, wrecks, rock and prizes, so the hull never has to move the mass itself.
**Breaks the default:** the real thrust lives on four detachable tugs. The parent has one modest drive.
**Built-in gear:** none. The tugs are drones built from gear, and their cradles are clamps.

Design the Mule Team, a two-person Aeronautics Unlimited hauler that moves heavy things with a team of tug drones. The parent is a long, plain, rounded-rectangular cargo spine with a compact cab at its front, a wide low window and a survey mast. Four chunky tug drones ride docked at the four corners of the spine like tugboats nested against a barge, each a stubby rounded box with one large thruster bell, a broad clamp pad at its nose and a stencilled number. A tow-line drum sits on the spine behind the cab. The spine carries one modest drive at its stern. One small defensive turret sits on the cab roof. Lifting eyes and numbered bays run down the spine. One complete ship, centered with clear margin around it, three-quarter front view from slightly above showing the dorsal surface and one side; moderate lens; plain seamless light gray background; soft key light with gentle form shadows; matte finishes throughout.

---

## Finch Cybernetics

[[Game Design/Faction Play#Finch Cybernetics|doctrine]] · register: serious

### Nerve · Tethered Drone

**Concept:** [[Game Design/Ship Play Concepts#Tethered Drone|Tethered Drone]] ("a sense organ on a nerve"). Mode: Function. Moonshot: the cable is a long thin form, the first thing image-to-3D drops, so it is called thick and kept short.
**Plays:** it flies its eye on a line that cannot be jammed, and it reels the eye in to recover it.
**Breaks the default:** the sensor is a second body. The parent has fine manoeuvring ports and no big drive.
**Built-in gear:** yes. The winch housing is the dorsal mass, sunk into the body.

Design the Nerve, a single-pilot Finch Cybernetics tethered-sensor ship that flies its eye on a line. A large, smooth, rounded winch housing is sunk into its back, the broadest part of the ship, wound with a thick armoured cable. The cable pays out from a short guide collar to a small sensor drone hovering a short distance above the flank facing the camera: a smooth teardrop with one large dark lens aperture. The parent's own sensors are a short row of small lens apertures across its brow. The cockpit is a narrow tapered canopy at the nose. One light low-signature weapon aperture sits flush under the nose. Rows of fine manoeuvring ports run along both flanks. One complete ship, centered with clear margin around it, three-quarter front view from slightly above showing the dorsal surface and one side; moderate lens; plain seamless light gray background; soft key light with gentle form shadows; matte finishes throughout.

---

## Rossum & Douglas

[[Game Design/Faction Play#Rossum & Douglas|doctrine]] · register: serious

### Standard Model 42-R · Stern Chaser

**Concept:** [[Game Design/Ship Play Concepts#Stern Chaser|Stern Chaser]]. The faction backs away from anyone who closes. Mode: Function. Safe bet.
**Plays:** it retreats nose-first and launches over its own stern at whoever is following.
**Breaks the default:** its missiles fire aft, and its drives have moved to flank sponsons. It is still the boring wedge.
**Built-in gear:** none.

Design the Standard Model 42-R, a single-pilot Rossum & Douglas missile picket that fires backward while it backs away from anyone who closes. It is the familiar flying wedge. Four square missile tubes sit in a row across the rear dorsal plane, angled steeply up and back so they launch over the stern, each closed by a flush square cap. A small defensive mount sits on the rear edge beside them. The drives sit in two flat sponsons fused along the lower flanks, each ending in a wide slot nozzle at a rear corner. The blunt nose is plain, with a small recessed cockpit window. A label beside the cockpit reads "Exit Strategy Included". One complete ship, centered with clear margin around it, three-quarter front view from slightly above showing the dorsal surface and one side; moderate lens; plain seamless light gray background; soft key light with gentle form shadows; matte finishes throughout.

### Guarantee Plus · Loitering Munition

**Concept:** [[Game Design/Ship Play Concepts#Loitering Munition|Loitering Munition]] ("a loiterer that chooses is the premium model"). Mode: Function. Safe bet.
**Plays:** it launches munitions that wait, choose a target, and can be called off. The controller mast sells the verbs.
**Breaks the default:** no gun aimed at anything; the munitions do the aiming. One wide slot drive.
**Built-in gear:** none. The control mast is drone-controller gear, which provides the command verbs under the 2026-10-04 ruling.

Design the Guarantee Plus, a single-pilot Rossum & Douglas loitering-munition carrier, the premium trim of the wedge. Four launch tubes stand in a row on the rear dorsal plane, angled upward, each closed by a round cap stencilled with a small folded-wing icon. Beside them, a thick control mast carries the link antenna that lets the pilot call the munitions back. The cockpit is a small recessed square window near the blunt nose. One small defensive mount sits flush at the nose. One wide slot drive runs across the whole rear face. A "Premium" badge and the phrase "Selects Its Own Target" sit beside the model number. One complete ship, centered with clear margin around it, three-quarter front view from slightly above showing the dorsal surface and one side; moderate lens; plain seamless light gray background; soft key light with gentle form shadows; matte finishes throughout.

---

## NiteLife Energy

[[Game Design/Faction Play#NiteLife Energy|doctrine]] · register: serious. The faction block is amended so that the cartridge sits flush (guideline 14).

### Bulldog II · Burst and Break Off, on a leash (reworked Bulldog and Leashed)

**Concept:** [[Game Design/Ship Play Concepts#Burst and Break Off|Burst and Break Off]], bound to a station. Mode: Mass. Safe bet.
**Plays:** it spends one huge capacitor in a single exchange, then retreats to its station umbilical to recharge. Inside its leash it hits hardest; beyond the leash it is a flat battery.
**Breaks the default:** one emitter in the chest face. Four squat corner pods let it hold position, where a pursuer would want rear drives.
**Built-in gear:** yes, the capacitor-defined ship the operator proposed. The capacitor is the chest, the ship's own mass, and the cartridge is sunk flush into the back.

Design the Bulldog II, a single-pilot NiteLife Energy station guard built around one huge capacitor. It stands like a bulldog on a short chain: a wide, deep chest low and forward, short thick shoulders, and a short body behind. The chest is the capacitor, one smooth swollen volume that makes up most of the ship, cut by crisp charge-level slots with small round opaque status ports. The ChargeBlast emitter is a broad opaque disc set flush in the chest's front face. The reservoir cartridge is sunk lengthwise into the back between the shoulders, flush with the hull, showing only its rounded end cap and lime release catch at the rear. A thick station-umbilical socket sits under the chin, capped. The cockpit is a low canopy on top of the chest. Four squat thruster pods sit low at the corners like planted paws. One complete ship, centered with clear margin around it, three-quarter front view from slightly above showing the dorsal surface and one side; moderate lens; plain seamless light gray background; soft key light with gentle form shadows; matte finishes throughout.

### Jump Start · Power Tender (new concept)

**Concept:** [[Game Design/Ship Play Concepts#Power Tender|Power Tender]], added to Ship Play Concepts for this bench. It is the energy half of the Tender: NiteLife keeps the lights on. Mode: Function. Safe bet.
**Plays:** it comes alongside spent burst ships, refills their capacitors through a coupling, and pulls away before the pair is caught.
**Breaks the default:** a non-combat role. Two swivelling shoulder pods hold it beside a moving ship.
**Built-in gear:** yes. The coupling boom lies folded into the spine, and the spare cartridges are sunk flush into the body.

Design the Jump Start, a two-person NiteLife Energy power tender that comes alongside other ships and recharges their capacitors. A thick coupling boom lies folded forward along its spine, set into a channel in the hull, ending in a flat round charge collar with a lime release catch. Three spare reservoir cartridges are sunk side by side into the flank facing the camera, flush with the hull, showing only their rounded end caps and catches. The body is one full, smooth, swollen volume cut by crisp slots. The cockpit is a rounded canopy at the front. Two swivelling thruster pods sit on the shoulders, so it can hold station beside a moving ship. One small defensive turret sits at the rear. A version badge reads "Fast Charge". One complete ship, centered with clear margin around it, three-quarter front view from slightly above showing the dorsal surface and one side; moderate lens; plain seamless light gray background; soft key light with gentle form shadows; matte finishes throughout.

---

## Lightsail Express

[[Game Design/Faction Play#Lightsail Express|doctrine]] · register: whimsy turned up

### Fifth Wheel · Mothership (reworked Four Hundred Runs)

**Concept:** [[Game Design/Ship Play Concepts#Mothership|Mothership]] (cab and trailer). Mode: Story. Safe bet.
**Plays:** the cab uncouples to fight or scout while the trailer holds station with the load, then couples back up. The cargo is never dropped; it is parked.
**Breaks the default:** two bodies. The trailer has four corner station-keeping pods and the cab has its own drive.
**Built-in gear:** the coupling plate is a docking bay, which already holds a ship as a child.

Design the Fifth Wheel, a two-person Lightsail Express hauler whose cab is a ship of its own. The long cargo trailer is a spine with rectangular containers clamped along it, ending at the front in a broad coupling plate. Docked on that plate is the cab: a compact, rounded, complete small ship with its own warm lit window, a sun-visor slab, its own drive tucked under its rear, and two small machine-gun turrets on its roof, locked down by heavy clamps. The trailer carries four small station-keeping thruster pods at its corners and a hazard beacon on its tail. A personal pennant hangs beside the cab door. One complete ship, centered with clear margin around it, three-quarter front view from slightly above showing the dorsal surface and one side; moderate lens; plain seamless light gray background; soft key light with gentle form shadows; matte finishes throughout.

### Tailgate · Stern Chaser

**Concept:** [[Game Design/Ship Play Concepts#Stern Chaser|Stern Chaser]] ("a hauler that never drops its cargo and fights with it"). Mode: Function. Safe bet.
**Plays:** it keeps driving and lets pursuers fly into its rear guns.
**Breaks the default:** its guns face aft. The drives hang under the cab like a truck's fuel tanks, so the stern is free for the guns.
**Built-in gear:** none.

Design the Tailgate, a two-person Lightsail Express armed hauler that keeps driving and fights whoever follows it. The cab is at the front, with a warm lit window, a sun-visor slab over the windscreen and a route tally painted under it. Behind it, the sealed box hold is locked to the spine by heavy clamps. Two machine-gun turrets sit on the rear corners of the box roof, both turned to point backward, visible past the dorsal edge. A thick bumper with a hitch plate wraps the stern below them. The main drives are two fat pods slung low under the cab like a truck's fuel tanks. A painted sign on the rear of the box reads "Mind the Gap". One complete ship, centered with clear margin around it, three-quarter front view from slightly above showing the dorsal surface and one side; moderate lens; plain seamless light gray background; soft key light with gentle form shadows; matte finishes throughout.

---

## Alakrita

[[Game Design/Faction Play#Alakrita|doctrine]] · register: serious

### Riposte · Spinal Mount with Flywheel Sprinter (reworked One Pass)

**Concept:** [[Game Design/Ship Play Concepts#Spinal Mount|Spinal Mount]] and [[Game Design/Ship Play Concepts#Flywheel Sprinter|Flywheel Sprinter]]: "one lance, then gone". Mode: Function. Safe bet.
**Plays:** it spins the flywheel up quietly, takes one lance shot, and dumps the stored spin to throw itself out of the fight. One Pass had speed and nothing to do with it. Riposte's speed is the exit from its one shot.
**Breaks the default:** one gun that is the bow, one slim drive, and a flywheel drum as the widest part.
**Built-in gear:** yes. The hull is built around its lance, a heavy fixed gun on the narrowest arc, and around the flywheel, an AetherDrive. Both form the body's mass.

Design the Riposte, a single-pilot Alakrita duelist built around one lance and one surge. One long, thick lance barrel runs the whole length of the body on the centreline, and its muzzle is the point of the bow. The narrow body is creased along the lance like fabric pleated around a rod. At the waist, a thick, wide flywheel drum wraps the body, fused to it and broader than any other part, crossed by gold inlay lines. The cockpit is a long, narrow canopy just ahead of the drum. Behind the drum, the body tapers to one single slim drive. Its only weapon is the lance. One complete ship, centered with clear margin around it, three-quarter front view from slightly above showing the dorsal surface and one side; moderate lens; plain seamless light gray background; soft key light with gentle form shadows; matte finishes throughout.

---

## Ewan Hart

[[Game Design/Faction Play#Ewan Hart|doctrine]] · register: whimsy turned up

### Clean Sweep · Minesweeper

**Concept:** [[Game Design/Ship Play Concepts#Minesweeper|Minesweeper]] ("field clearance is harvest by another name"). Mode: Mass (a combine harvester). Safe bet.
**Plays:** it goes first, gathers a field, and clears the way for everyone behind it. It is slow by design and needs escorts.
**Breaks the default:** the bow is a tool. The thrust sits inside four fenders, facing down and back like a tractor's wheels.
**Built-in gear:** yes. The harvester header forms the bow.

Design the Clean Sweep, a two-person Ewan Hart minesweeper built like a combine harvester. Across its bow runs a broad harvester header: a wide, thick, rounded trough holding a slow reel of thick paddles, which gathers mines in and feeds them up a covered elevator into a heavy armoured bin on the back. The cab sits high behind the header, with a wide window and large round gauges. The power-unit housing is broad and squat. Four thrusters sit inside four big rounded fenders at its corners, facing down and back like a tractor's wheels. One small defensive mount sits on the cab roof beside a large round work lamp. A hand-painted "Fields Cleared" tally runs along the bin. One complete ship, centered with clear margin around it, three-quarter front view from slightly above showing the dorsal surface and one side; moderate lens; plain seamless light gray background; soft key light with gentle form shadows; matte finishes throughout.

### Lasso · Lariat

**Concept:** [[Game Design/Ship Play Concepts#Lariat|Lariat]]: one whip both catches loot and swats incoming fire. Mode: Function. Moonshot: the reel replaces a whole flank, which may unbalance a symmetric read.
**Plays:** it fights to collect. The same snap of the whip defends it and gathers the spoils.
**Breaks the default:** its main tool is a flank reel. It has one big drive bell and no forward gun.
**Built-in gear:** yes. The reel is built in as the camera-side "rear wheel" under a fender, not mounted on top. Ship Play Concepts' hull note calls the coil the largest feature, and guideline 14 is why it is the body's own wheel here.

Design the Lasso, a two-person Ewan Hart work ship that snaps out a cable whip to catch loot and swat incoming fire. The cable reel is built into the flank facing the camera like a tractor's big rear wheel: a broad round drum under a rounded fender, wound with thick rubber-sheathed cable that feeds a short launch throat at the front of the fender, where a weighted grab head rests. A wide open cargo hopper sits behind the cab to take what the lasso brings in. The cab is a rounded tractor cab at the front with a wide window and round gauges. One big drive bell sits under the power-unit housing at the rear. A coil of spare rope hangs on a hook by the door. One complete ship, centered with clear margin around it, three-quarter front view from slightly above showing the dorsal surface and one side; moderate lens; plain seamless light gray background; soft key light with gentle form shadows; matte finishes throughout.

---

## Death Monkey Explosives

[[Game Design/Faction Play#Death Monkey Explosives|doctrine]] · register: reserved

### Load Out · Minelayer

**Concept:** [[Game Design/Ship Play Concepts#Minelayer|Minelayer]]. Mode: Function. Safe bet.
**Plays:** it lays a field across a route or behind its own retreat, then fights where the field shapes movement.
**Breaks the default:** the stern belongs to the mines, so the drives sit on the flanks. Its one gun faces aft over the deck.
**Built-in gear:** none. The mines are gear-built munitions on a launcher rail.

Design the Load Out, a two-person Death Monkey Explosives minelayer that leaves its work behind it. A long, flat rear deck runs down the spine, with two rails carrying a queue of identical round mines that ends at a square armoured hatch in the stern, ringed by a thin cut line. The front of the ship is one hard-edged blackened slab with a narrow cockpit slit. The drives sit in two square housings on the flanks behind heavy braces. One small gun sits on a short square mount on the slab, facing aft over the mine deck. Sacrificial standoff plates on short struts ride ahead of the bow. A tally of fields laid is hand-painted along the deck rail. One complete ship, centered with clear margin around it, three-quarter front view from slightly above showing the dorsal surface and one side; moderate lens; plain seamless light gray background; soft key light with gentle form shadows; matte finishes throughout.

### Last Call · Fireship

**Concept:** [[Game Design/Ship Play Concepts#Fireship|Fireship]]. Mode: Function. Moonshot: a detachable capsule is a second volume.
**Plays:** it sends an expendable hull, loaded to burst, into a formation. The pilot leaves in a capsule before it arrives, and the formation breaks even if nothing dies.
**Breaks the default:** the whole hull is the weapon. One oversized drive and an ejecting cockpit.
**Built-in gear:** yes. The charge packs are warhead gear strapped on under bands, and the capsule is a docked escape body. Both sit inside the slab's outline.

Design the Last Call, a single-pilot Death Monkey Explosives fireship: an expendable hull that is all charge, with a way out for its pilot. The body is a stripped, hard-edged blackened slab with four big square charge packs strapped along it under heavy steel bands, each with a pull handle and a thin cut line. At the bow, the cockpit is a small, separate armoured capsule seated in a socket, marked off by a bold cut line and two big ejection handles. One oversized drive fills the stern, far bigger than a hull this size needs. Its only weapon is itself. The ship's name is hand-painted large down the flank. One complete ship, centered with clear margin around it, three-quarter front view from slightly above showing the dorsal surface and one side; moderate lens; plain seamless light gray background; soft key light with gentle form shadows; matte finishes throughout.

---

## Adrasteia

[[Worldbuilding/Post-Elysium/Technology/Running Cold|Running Cold]] · register: serious

### Afterimage · Heat Ferry

**Concept:** [[Game Design/Ship Play Concepts#Heat Ferry|Heat Ferry]]. Mode: Function. Safe bet.
**Plays:** it loads heat into detachable carriers and lets them go as false trails, while the parent goes somewhere else, cold.
**Breaks the default:** no visible drive and no visible gun. Its active parts are the carriers.
**Built-in gear:** none. The carriers are gear-built bodies in release cradles.

Design the Afterimage, a single-pilot Adrasteia heat ferry that loads its heat into detachable carriers and lets them go as false trails. Along its central dorsal ridge sit four cradles in a row, each holding a sealed, faceted thermal carrier the size of the cockpit, with a release catch and its own small faceted fin. The last cradle is empty, its catch open. The body is a low faceted wedge of broad shallow planes, every surface closed. The cockpit is a narrow faceted slit at the front of the ridge. Small thruster ports hide under the overhanging facet edges all around the rim, and the stern closes in one plain facet. One utility port sits flush in the leading edge. One complete ship, centered with clear margin around it, three-quarter front view from slightly above showing the dorsal surface and one side; moderate lens; plain seamless light gray background; soft key light with gentle form shadows; matte finishes throughout.

---

## Sol Dominion

[[Game Design/Faction Play#Sol Dominion|doctrine]] · register: serious

### Lien · Remora (reworked Remora)

**Concept:** [[Game Design/Ship Play Concepts#Remora|Remora]] ("an inspection lock is a lawful remora"). Mode: Function. Safe bet.
**Plays:** it fires small lock units that clamp onto a contact's drive and safe it until the clerk arrives. It captures without destroying.
**Breaks the default:** its weapons are cradled clamp units. Four drives sit in a cross at the stern.
**Built-in gear:** none. The lock units are gear-built munitions.

Design the Lien, a two-person Sol Dominion inspection cutter that clamps small lock units onto a ship's drive and holds it until the clerk arrives. Along the flank facing the camera, its straight spine carries a row of four square cradles, each holding a flat square lock unit with four clamp feet folded under it and a crimson jurisdiction seal on its back. The third cradle is empty. The bow is a narrow armoured face with an observation slit. A sealed evidence recorder sits on the spine behind the cockpit. One small point-defence mount sits in a square housing on the rear armour plane. Four square drive housings sit in a cross around the stern. Identical module bands repeat along the spine, and every cradle is numbered. One complete ship, centered with clear margin around it, three-quarter front view from slightly above showing the dorsal surface and one side; moderate lens; plain seamless light gray background; soft key light with gentle form shadows; matte finishes throughout.

### Writ · Interdictor

**Concept:** [[Game Design/Ship Play Concepts#Interdictor|Interdictor]]. Mode: Function. Safe bet.
**Plays:** it pins a contact in place so the patrol can reach it, and it dies if its friends do not arrive.
**Breaks the default:** the bow is a projector face, not a gun. Two long drive housings run along the lower flanks.
**Built-in gear:** yes. The projector forms the bow face. The pinning effect is a new system in Ship Play Concepts.

Design the Writ, a single-pilot Sol Dominion interdictor that holds a contact in place until the patrol arrives. Its bow is a broad, flat, square projector face set square to the spine, a thick armoured frame around a recessed grid of emitter tiles. Behind it, the straight spine runs back through identical module bands. The cockpit is an observation slit across the top of the projector frame. Two point-defence mounts sit in square housings on the armour planes, one on each side. Two long, low drive housings run along the lower flanks to the stern. Square machine-readable code panels mark the frame, and one crimson stripe crosses the bow. One complete ship, centered with clear margin around it, three-quarter front view from slightly above showing the dorsal surface and one side; moderate lens; plain seamless light gray background; soft key light with gentle form shadows; matte finishes throughout.

---

## Cryonix

[[Game Design/Faction Play#Cryonix|doctrine]] · register: serious

### Cold Chain · Heat Tender

**Concept:** [[Game Design/Ship Play Concepts#Heat Tender|Heat Tender]] ("the cold chain made exact"). Mode: Function. Safe bet.
**Plays:** it couples to a hot ally and takes its heat, so a burst ship can fight again without cooling down.
**Breaks the default:** a non-combat role. The emitter scales are larger than on any Cryonix fighter, and the boom is its working end.
**Built-in gear:** yes. The coupling boom is folded into the spine, and the cold reservoir is the core.

Design the Cold Chain, a two-person Cryonix heat tender that couples to a hot ally and takes its heat. A thick insulated coupling boom lies folded along the spine, ending in a round docking collar with copper rings. Its piping runs back into the narrow waist, where a large protected cold reservoir forms the core of the ship. Four broad emitter scales lie folded flat around the core in two overlapping pairs, larger than on any Cryonix fighter, with thin painted heat-path bands running from the collar to the scales. The cockpit is a narrow canopy ahead of the waist. One small defensive mount sits on top of the core. A single compact drive ends the core. One complete ship, centered with clear margin around it, three-quarter front view from slightly above showing the dorsal surface and one side; moderate lens; plain seamless light gray background; soft key light with gentle form shadows; matte finishes throughout.

---

## Cetacean Navigators

[[Game Design/Faction Play#Cetacean Navigators|doctrine]] · register: whimsy turned up

### Swell · Gravity Surfer

**Concept:** [[Game Design/Ship Play Concepts#Gravity Surfer|Gravity Surfer]]. Mode: Mass and face (a dolphin riding a bow wave). Safe bet.
**Plays:** it rides gravity waves and wells instead of burning against them, and it reaches places others cannot without heat.
**Breaks the default:** little main drive. Its shape is a keel, trimmed by small fin thrusters along the rim.
**Built-in gear:** none. The keel is hull.

Design the Swell, a two-person Cetacean Navigators route ship that rides gravity waves instead of burning against them. Under its twin-lobed body lies one broad, thick, rounded keel plane, fused along its whole length, wider than the body and shaped like a surfboard, with flowing dotted route lines painted along it. The two pressure lobes sit on the keel like a dolphin's flanks, dotted with small amber-lit ports, and the dry cabin ridge rises between them with a low canopy and a friendly rounded brow at its front. Small fin thrusters sit along the keel's rim for trim, and the stern carries only one modest drive. One small point-defence mount sits on the cabin ridge. One complete ship, centered with clear margin around it, three-quarter front view from slightly above showing the dorsal surface and one side; moderate lens; plain seamless light gray background; soft key light with gentle form shadows; matte finishes throughout.

---

## Aya Collective

[[Game Design/Faction Play#Aya Collective|doctrine]] · register: serious

### Many Hands · Distributed Body

**Concept:** [[Game Design/Ship Play Concepts#Distributed Body|Distributed Body]] (no beautiful throat through which every useful thing must return). Mode: Function. Moonshot: two cockpits is unusual, and the model may merge them.
**Plays:** no single hit can end it. Each lobe flies, fights and cools on its own, and either crew can take the helm.
**Breaks the default:** thrust spread over four lobes, turrets on every lobe, and a cockpit at each end.
**Built-in gear:** none.

Design the Many Hands, a three-crew Aya Collective escort with no single place a hit can end it. Its body is four rounded cells grown as swollen lobes of one mass, front, rear, left and right around a low centre, joined by wide smooth fillets. Each lobe is complete in itself, with its own small point-defence turret on top, its own access hatch, its own short radiator plate and its own thruster pod at its outer end. There are two cockpits: a rounded canopy on the front lobe facing forward, and another on the rear lobe facing back. Patterned removable panels cover every lobe, and the left lobe is a newer replacement in a different block print. One complete ship, centered with clear margin around it, three-quarter front view from slightly above showing the dorsal surface and one side; moderate lens; plain seamless light gray background; soft key light with gentle form shadows; matte finishes throughout.

### Mend · Repair Drone

**Concept:** [[Game Design/Ship Play Concepts#Repair Drone|Repair Drone]] ("everyone comes home"). Mode: Function. Safe bet.
**Plays:** it keeps drones out working on allies' hulls during the fight, repairing without docking.
**Breaks the default:** its tools are drones on rails. A ring of thruster ports circles its rounded stern.
**Built-in gear:** none. The drones are gear-built and park on clamp rails.

Design the Mend, a two-person Aya Collective repair tender whose crew works through drones. Along the flank facing the camera runs a rail beside a row of numbered access panels, and three small round repair drones are parked on it, each with two short jointed manipulator arms folded under it and a rubberized grip ring. A fourth parking spot on the rail is empty. A broad spare-parts rack sits on the back under a hinged cover, its panels in mixed block prints. The cockpit is a rounded cab at the front. One small point-defence turret sits on each shoulder. A ring of small thruster ports circles the rounded stern. A neatly riveted patch closes one panel. One complete ship, centered with clear margin around it, three-quarter front view from slightly above showing the dorsal surface and one side; moderate lens; plain seamless light gray background; soft key light with gentle form shadows; matte finishes throughout.

---

## Framgång and Odla Framgång

[[Game Design/Faction Play#Framgång and Odla Framgång|doctrine]] · register: high whimsy

### Open House · Illuminator

**Concept:** [[Game Design/Ship Play Concepts#Illuminator|Illuminator]] ("chrome and a useless active sensor"). Mode: Terrestrial. Safe bet.
**Plays:** it pings everything nearby and lights up every ship in the zone, friend and enemy, starting with itself.
**Breaks the default:** it has no real weapon. The roof is the sensor, and there is one rocket bell between the tailfins.
**Built-in gear:** yes. The dish is the trailer's whole roof, set into the body like a bowl and not raised on a pedestal.

Design the Open House, a single-pilot Odla Framgång illuminator that pings everything nearby and lights up every ship around it, starting with itself. The body is a small mid-century travel trailer with rounded ends, two short swept tailfins and a picture-window band at the front as the cockpit. Its whole roof is one big, shallow, round sensor dish set into the top of the body like a bowl, with a starburst ornament at its centre and a ring of round stage lights around its rim. One slightly-too-deep adapter casing bulges under the dish's edge where the borrowed mechanism does not quite fit. A single rocket bell sits between the tailfins. A sign on the flank reads "Be Seen". One complete ship, centered with clear margin around it, three-quarter front view from slightly above showing the dorsal surface and one side; moderate lens; plain seamless light gray background; soft key light with gentle form shadows; matte finishes throughout.

---

## Pirate Coalition

[[Game Design/Faction Play#Pirate Coalition|doctrine]] · register: wild and maximalist

### Welcome Mat · Boarder

**Concept:** [[Game Design/Ship Play Concepts#Boarder|Boarder]]. The pirates want cargo, not death. Mode: Story. Safe bet.
**Plays:** it closes to contact, grapples, and puts a crew aboard to take the prize intact.
**Breaks the default:** its "gun" is a boarding collar on the donor's old boom. The drive is offset, and the fenders and crew module are additions on the camera side.
**Built-in gear:** none. Every addition is visibly bolted on, which is the faction's register.

Design the Welcome Mat, a four-crew Pirate Coalition boarding ship built from a stolen Aeronautics Unlimited miner. The donor's compact excavator body is still recognisable, with chalk-white paint and stencilled bay numbers. Its drill head is gone: on the end of its boom sits a heavy boarding collar with a ring of clamp teeth and a hinged door. On the side facing the camera, thick rubber fenders are lashed along the flank, a grappling arm is folded beside them, and an extra crew module with a row of small round ports is welded on behind the cab. A replacement drive is bolted on offset at the stern on that side. The crew emblem, a waving-hand emoji, is painted three times. A teal crew accent slashes across donor and additions alike. One complete ship, centered with clear margin around it, three-quarter front view from slightly above showing the dorsal surface and one side; moderate lens; plain seamless light gray background; soft key light with gentle form shadows; matte finishes throughout.

### Jumble Sale · Mixed Cloud

**Concept:** [[Game Design/Ship Play Concepts#Mixed Cloud|Mixed Cloud]], the novella's last doctrine. Mode: Story. Moonshot: four different drones may read as clutter.
**Plays:** it carries mismatched stolen drones and retasks them mid-fight. Every option spends what kept another open.
**Breaks the default:** a drone rack where the missile doors were, and two mismatched drives side by side.
**Built-in gear:** none. The control mast is stolen controller gear.

Design the Jumble Sale, a three-crew Pirate Coalition drone carrier built from a stolen Rossum & Douglas missile wedge, carrying drones that match nothing. The wedge's flat dorsal plane has been cut open into one long rack of cradles holding four small drones of visibly different makes: a round toy-like drone, a faceted dark scout, a boxy tug with a clamp pad and a stubby missile with folded wings. A tall stolen control mast is welded behind the cockpit. The original missile doors are welded shut. At the stern, two mismatched drives sit side by side, one big stolen bell and one small original. The crew emblem, a shopping-bag emoji, is painted three times. A yellow crew accent slashes across the wedge. One complete ship, centered with clear margin around it, three-quarter front view from slightly above showing the dorsal surface and one side; moderate lens; plain seamless light gray background; soft key light with gentle form shadows; matte finishes throughout.

---

## Megiddo

[[Game Design/Faction Play#Megiddo|doctrine]] · register: serious

### Sown · Picket Line (reworked Zera II and Many Seeds)

**Concept:** [[Game Design/Ship Play Concepts#Picket Line|Picket Line]]. Mode: Mass (a pomegranate split along its seam). Safe bet.
**Plays:** it seeds a boundary with cold passive sensors and waits for the track. It detects far beyond its own sensors and emits nothing.
**Breaks the default:** its payload is sensor seeds. Thruster ports sit in the seams between shells all around the hull.
**Built-in gear:** none. The seeds are gear-built pickets in the inner hull.

Design the Sown, a single-pilot Megiddo picket layer that seeds a boundary with cold passive sensors. Its nested outer shells part along one seam on top, like a pomegranate split open, showing rows of small round sensor seeds packed in the inner hull, each a cold canister with one dark lens. A few seed positions are empty. Heavy shutter frames stand open along the seam. The cockpit is a low shuttered canopy in the front shell. One small point-defence mount sits between the shells on each side. Small thruster ports sit in the seams between the shells all around the hull. Earth's constellations run in silver inlay across the closed shells. One complete ship, centered with clear margin around it, three-quarter front view from slightly above showing the dorsal surface and one side; moderate lens; plain seamless light gray background; soft key light with gentle form shadows; matte finishes throughout.

---

## For the Operator

These are readings this bench made so that it could be written. Overrule any of them.

1. **Thrust is named where the concept needs it.** This amends Ship Design Language, which used to leave thrust out entirely. Your request to vary thrust layout and count is the authority for the change. You still place the final thrusters; the prompt only stops the default.
2. **The global block's "guns in small turrets" phrase** pulls every hull toward turrets. Bench 3 overrides it per prompt with "fixed" mounts. If fixed batteries keep turning into turrets anyway, the fix is the global block: "guns on thick armoured mounts, fixed or turreted".
3. **One novel concept was added to Ship Play Concepts:** Power Tender, the energy half of the Tender, for NiteLife. All other entries use concepts already in the catalogue.
4. **Bulldog II takes your capacitor reading literally:** the capacitor is the chest. If even an integrated capacitor reads too prominent, the next cut is to shrink the chest and give the emitter more of the face.

## Open Questions

None. Built-in gear, the one design question this bench leans on, was ruled on 2026-10-05 (`hulls-carry-built-in-gear`). Its representation in hull data stays open, and no entry here depends on how it is answered.
