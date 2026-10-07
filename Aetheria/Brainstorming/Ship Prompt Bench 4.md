---
title: Ship Prompt Bench 4
description: "A fourth bench of ship prompts, built for the demo cast: Pirates, Zhestokost, Lucent Media and Aeronautics Unlimited, plus the freelancers who share the region with the player. Each entry starts from a play concept that shows on the hull."
---

# Ship Prompt Bench 4

> **Status: brainstorming bench, 2026-10-07.** Not canon and not adopted. [[Brainstorming/Ship Prompt Bench 3|Ship Prompt Bench 3]] stays as the record of round three, and its entries are referenced here, not repeated. Prompts here are the third block of the composition order in [[Brainstorming/Ship Design Language|Ship Design Language]]. Concepts come from [[Game Design/Ship Play Concepts|Ship Play Concepts]], doctrines from [[Game Design/Faction Play|Faction Play]], and craft rules from guidelines 1 to 14 in [[Brainstorming/Faction Ship Concept Prompts|Faction Ship Concept Prompts]].

This bench serves the demo. Its cast is four factions:

- **The Pirates** are the one allied faction. They hire the player. The player is not a pirate and does not start in a Pirates hull.
- **Zhestokost** is the antagonist and supplies the boss.
- **Lucent Media** brings the spectacle.
- **Aeronautics Unlimited** is the vanilla neutral.

The demo needs at most one player-usable hull per cast faction, enough NPC role hulls (haulers, tenders, miners and so on) to sell each faction's play style, and the Zhestokost boss.

**The structural gift.** The cast counters itself in a circle that the player can learn. Pirate speed demons beat Zhestokost's heavy, slow-tracking columns by crossing close, where the big guns cannot follow. AU's point-defence pickets beat Pirate raiders, because light guns that track fast are the one thing a speed demon cannot outrun. The player is hired by the Pirates, so the job teaches both halves: when to be fast and when to keep away from a picket.

## Mechanics This Bench Leans On

These landed on 2026-10-06. Every entry below is written against them.

| Mechanic | What it means on a hull |
| --- | --- |
| **Per-gun tracking rates** | Light one-cell guns track fast and heavy guns track slowly. A hull that wants to hit crossers carries many small turrets; a hull that wants to hit hard carries a few big barrels and accepts what they cannot follow. |
| **Evasion has two parts** | A change of vector (a jink), and line-of-sight angular velocity against the gun's tracking rate. Close, fast and crossing beats a slow gun. Far and straight loses to anything. |
| **Mines are free-floating bodies** | Like loot, they drift where they are dropped. Only hostiles trigger them, and the blast is faction-blind: it hurts whoever is near, including the layer's friends. |
| **Sim speed** | A slower setting makes fast fights readable. The set pieces below use it. |

## How to Use This Bench

- **Compose before rendering:** the global Aetheria block, then the faction block, then one prompt from here, each separated by a blank line. Freelancers compose with their own brand's faction block, not the cast's.
- **Each entry starts from a concept.** It names its play concept, what the pilot does, and how the default silhouette is broken: thrust layout, weapon placement and arcs, or a non-weapon role (guideline 13). Several demo roles have no catalogue concept yet; those entries say so and link the doctrine instead.
- **Tracking shows on the hull.** Light, fast-tracking guns are drawn as small single-barrel turrets on raised rings. Heavy, slow guns are drawn as long, thick barrels in fixed armoured casemates. The image model needs both stated, because the global block puts all guns "in small turrets".
- **Thrust is named where the concept needs it** (Ship Design Language, amended). You still place the final thrusters.
- **Built-in gear** is stated on every entry: what the role rests on, and how the prompt keeps it integrated and in proportion (guideline 14, ruling `hulls-carry-built-in-gear`).
- **Drones, mines and munitions** are gear-built bodies, launched from and docked into bays and cradles.
- **Modes, Safe bet and Moonshot** mean the same as in Bench 2 and Bench 3. A moonshot says what it risks.
- **Facing shields are wanted** (ruling `aetheria-release:ruling:facing-shields-wanted`; operator: "I would do facing shields, did I rule that out?"). The mechanism, an arc on the shield item per fork 6's option (b), is not yet ruled, and no entry here assumes how it works. On the hull, a facing shield is a visible emitter or projector frame on one face only, with armour on the others. Armour stays the baseline everywhere.
- **Player-usable** marks the one hull per cast faction meant for the player's hands. Everything else is an NPC role hull.
- Every prompt ends with the standard frame clause.

## The Demo Cast at a Glance

| Faction | Player-usable | NPC role hulls | Boss | From earlier benches |
| --- | --- | --- | --- | --- |
| Zhestokost | none | Oboz, Shchit, Glushitel, Inspektor | Nakovalnya | Batareya |
| Lucent Media | Prime Time | Green Room, Key Light, B-Roll, Craft Services | — | Spin Cycle (headliner) |
| Aeronautics Unlimited | Journeyman | Shepherd, Rake, Rockhound, Firecracker | — | Bison, Fenceline, Mule Team |
| Pirate Coalition | Hand-Me-Down (earned later) | Dine and Dash, Lost and Found, Party Favors, Hamstring, Finders Keepers, Pit Stop | — | Welcome Mat, Jumble Sale |

---

## Zhestokost

[[Game Design/Faction Play#Zhestokost|doctrine]] · register: serious

**From Bench 3, by reference:** [[Brainstorming/Ship Prompt Bench 3#Zhestokost|Batareya]], the two-sided broadside, is the column's line ship.

**The column as a whole.** A column is Batareyas leashed to an Oboz, with a Shchit between the tender and the threat, a Glushitel to eat missiles, and an Inspektor out front to hail. Everything in it is heavy, slow-tracking and bright. That is the opening the Pirates' speed demons were built for, and the reason the column never chases far.

### Oboz · Tender

**Concept:** [[Game Design/Ship Play Concepts#Tender|Tender]]. Oboz means "baggage train". Mode: Function. Safe bet.
**Plays:** it is the column's anchor. It carries the rounds, holds back, and lets low-magazine ships peel back, couple and rearm. It has `break_off_hull` high: it flees early, and the column follows it home.
**Breaks the default:** unarmed. The magazines are the architecture, transfer collars sit on both flanks, and four squat drive pods sit under the belly so the stern can carry a towing lug.
**Built-in gear:** yes. The magazines are the hull's own mass, and the transfer collars are flush in the flanks.

Design the Oboz, a three-crew Zhestokost ammunition tender, the slow, bright anchor a gun column falls back to. It carries no gun at all. Its body is a long, broad, stepped armoured box whose upper half is three huge magazine blocks in a row, each the size of a small ship, each fronted by large square oxide-red hatches with heavy hinge bars. Along the flank facing the camera, two thick round transfer collars are set flush into the hull at hull height, each ringed by guide lugs and a cream stencilled berth number, where gunships couple to rearm. Big open radiator vanes stand in a short row along the spine behind the cab. The cockpit is a narrow slit in a low armoured block at the bow. Four squat drive pods sit low under the belly at its corners, and a heavy towing lug juts from the stern plate. Large block-letter unit codes run down the flank. One complete ship, centered with clear margin around it, three-quarter front view from slightly above showing the dorsal surface and one side; moderate lens; plain seamless light gray background; soft key light with gentle form shadows; matte finishes throughout.

### Shchit · Facing-Shield Escort

**Concept:** [[Game Design/Ship Play Concepts#Facing Shield|Facing Shield]] on an [[Game Design/Ship Play Concepts#Armoured Prow|Armoured Prow]]. Shchit means "shield". Facing shields are wanted (`aetheria-release:ruling:facing-shields-wanted`); the arc mechanism is not yet ruled. Mode: Function. Safe bet.
**Plays:** it parks its shield face between the Oboz and whatever threatens it, and turns to keep it there. Its guns are light and set back behind the projector frame. Counter: flank it, or come at it from two sides at once. Its corner blocks turn it fast, but not as fast as a crosser moves around it, and one face cannot point two ways.
**Breaks the default:** the bow is a shield face, not a gun position. Four big turning blocks at the stern corners let it pivot on the spot, because pivoting is its whole job.
**Built-in gear:** yes. The projector frame forms the bow face, plainly directional, and the other faces carry armour.

Design the Shchit, a two-crew Zhestokost escort that parks its shield face between its tender and any threat and keeps turning to hold it there. The bow is one broad, flat, square projector face set square to the spine, broader and taller than the rest of the hull: a thick stepped charcoal armour frame around a recessed grid of square emitter panels, with deep bolt rows along the frame and oxide-red power trunks feeding it from behind. The shield faces forward only. Every other face carries thick overlapping charcoal armour plates, and behind the frame the hull drops away sharply, thinning to a short, plain stern. Two small, squat turrets with short barrels sit low behind the frame on the shoulders, peering over it. The cockpit is a narrow armoured slit cut through the top of the frame. Four large square turning-thruster blocks sit at the four stern corners, facing sideways, and one modest drive sits between them. Chipped enamel scars the frame edges, and one bolted replacement emitter panel in a fresher shade sits in the grid. One complete ship, centered with clear margin around it, three-quarter front view from slightly above showing the dorsal surface and one side; moderate lens; plain seamless light gray background; soft key light with gentle form shadows; matte finishes throughout.

### Glushitel · Point-Defence Umbrella

**Concept:** [[Game Design/Ship Play Concepts#Point-Defence Umbrella|Point-Defence Umbrella]]. Glushitel means "damper". Mode: Function. Safe bet.
**Plays:** it flies inside the column and throws flak. Its shrapnel eats missiles and drones, so swarm and guided-missile users have to switch weapons. Its flak turrets are light and track fast, but they do little against a hull.
**Breaks the default:** no forward gun. Six small flak turrets cover every face, and the largest feature is the shrapnel magazine.
**Built-in gear:** none. The flak turrets are fitted light guns, and the magazine is a hatch.

Design the Glushitel, a two-crew Zhestokost flak gunboat that throws a wall of shrapnel at anything fired at its column. Its body is a squat, broad stepped armoured box. Six small, squat flak turrets stand on raised armoured rings spread over every face: two on the bow shoulders, two at mid-hull on the dorsal edge, and two at the stern corners, each with one short, thick barrel, a flash hider and a small sensor block, each clearly able to turn fast. The centre of the back is one large shrapnel magazine under a broad square oxide-red hatch, with ammunition feed trunks running from it to every turret. The cockpit is a narrow slit in a low block at the bow. Soot rings every flak muzzle. One plain drive sits at the stern. One complete ship, centered with clear margin around it, three-quarter front view from slightly above showing the dorsal surface and one side; moderate lens; plain seamless light gray background; soft key light with gentle form shadows; matte finishes throughout.

### Inspektor · Interdiction Cutter

**Concept:** none in the catalogue. The hail is the play. The nearest is [[Game Design/Ship Play Concepts#Interdictor|Interdictor]], without the pin. Mode: Function. Safe bet.
**Plays:** it runs out ahead of the column, matches your vector and hails: "Cut thrust and hold for inspection." It fires only if you keep thrusting during its grace. Its one gun is heavy and slow. An inspection is an order to stop moving and become an easy target, so complying is a bet on Zhestokost's word.
**Breaks the default:** one heavy gun in a fixed casemate under the bow, and a signal-lamp mast as the largest feature. Four corner blocks let it hold station facing you.
**Built-in gear:** yes. The signal mast is built into the bow block, and the heavy gun's casemate is the chin.

Design the Inspektor, a two-crew Zhestokost interdiction cutter that runs ahead of a column, hails a contact and orders it to cut thrust. On top of the bow block stands a thick, stepped signal mast fused to the hull, carrying a large square signal lamp behind a heavy armoured shutter and a broad flat hail antenna. Under the bow, one long, thick heavy gun sits in a fixed armoured casemate built into the chin, its barrel pointing straight forward along the spine. The body is a compact, low stepped box with deep seams. The cockpit is a narrow slit in the bow block under the mast. Four square station-keeping thruster blocks sit at the four hull corners, and one plain drive sits at the stern. Cream stencilled lettering on the bow plate reads "INSPEKTSIYA", and safety chevrons ring the casemate. One complete ship, centered with clear margin around it, three-quarter front view from slightly above showing the dorsal surface and one side; moderate lens; plain seamless light gray background; soft key light with gentle form shadows; matte finishes throughout.

### Nakovalnya · Fortress (the boss)

**Concept:** [[Game Design/Ship Play Concepts#Armoured Prow|Armoured Prow]] and [[Game Design/Ship Play Concepts#Point-Defence Umbrella|Point-Defence Umbrella]] in one hull, fed by two [[Game Design/Ship Play Concepts#Tender|Tenders]]. Nakovalnya means "anvil". Mode: Function. Moonshot: the hull carries two gun scales at once, and the model may blur the ring of small turrets into greeble.
**Plays:** its heavy guns sit in fixed casemates on narrow forward arcs. They hit anything far away or flying straight, and cannot track a close crosser. A ring of one-cell flak turrets can. Two Obozes feed it through flank collars, so killing the tenders runs its magazines dry mid-fight. There are three ways in:
1. **Strip.** Stay on its quarter, outside the heavy arcs, and take the flak ring apart at standoff range while it turns.
2. **Dive.** Once one face of the ring is thin, cross close and fast under the heavy guns' tracking.
3. **Starve.** Kill the two Obozes and wait for the casemates to go quiet.

**Breaks the default:** the forward guns are casemates set into a prow, not a nose pair, and the defence is a ring. Six turning blocks around the hull turn a fortress slowly.
**Built-in gear:** yes. The casemates are the prow, and the two feed collars are the flanks. The flak ring is fitted light guns on standard rings.

Design the Nakovalnya, an eight-crew Zhestokost fortress ship, a foundry anvil that learned to fly. Its body is a huge, low, broad stepped armoured mass, wider than it is long at the bow and tapering to a squared stern. Three long, thick heavy gun barrels project from fixed armoured casemates built into the stepped prow, all three pointing straight forward on narrow arcs. Around the hull's upper edge runs a ring of ten small, squat flak turrets on raised armoured rings, evenly spaced, each with one short barrel and a small sensor block, each clearly able to turn fast. On the flank facing the camera, a large round feed collar is set into the hull, ringed by guide lugs and an oxide-red ammunition door, where a tender couples. Magazine hatches the size of doors run in rows along the dorsal plating. The cockpit is a narrow armoured slit high on the prow. Six square turning-thruster blocks sit around the hull's edge, and two broad drives fill the stern. Large block-letter unit codes cover the flank. One complete ship, centered with clear margin around it, three-quarter front view from slightly above showing the dorsal surface and one side; moderate lens; plain seamless light gray background; soft key light with gentle form shadows; matte finishes throughout.

---

## Lucent Media

[[Game Design/Faction Play#Lucent Media|doctrine]] · register: spectacle

**From Bench 3, by reference:** [[Brainstorming/Ship Prompt Bench 3#Lucent Media|Spin Cycle]], the rotating battery, is the headliner.

**The show as a whole.** One headliner duels while the Green Room holds and watches. Key Light paints the stage, B-Roll films, and Craft Services sits off-stage to cool and re-arm whoever just fought. Break the duel's form and the whole cast engages.

### Green Room · Holding Ship

**Concept:** none in the catalogue. It is the duel's audience: the holding ships in Faction Play's Lucent weakness. The nearest is [[Game Design/Ship Play Concepts#Turret Platform|Turret Platform]]. Mode: Function. Safe bet.
**Plays:** it holds position at range and watches the headliner duel. While the duel's form holds, it does nothing. Fire on it during a duel, bring a wingman, or let a third party in, and every holding ship engages at once.
**Breaks the default:** its lasers sit stowed in rotary mounts along the shell edges, visibly not fighting. Four station-keeping pods hold its position.
**Built-in gear:** yes. The viewing gallery is the shell's top layer, a row of round ports along the brow.

Design the Green Room, a three-crew Lucent Media holding ship that waits at the edge of a duel and watches. Its compact central chassis is wrapped in broad, overlapping curved shells, and its top shell is a long viewing gallery: a curved brow set with a row of small round opaque viewing ports, like seats in a box at a stadium. Four laser emitters sit stowed along the shell edges in thick knurled wheel-shaped rotary mounts, each turned flat against the hull, at rest. A camera-lens sensor dome sits at the front of the gallery, and a cluster of round stage lights is set into the brow. The cockpit is a domed canopy at the front of the chassis. Four small station-keeping thruster pods sit at the shell corners. The show title runs along the flank, with a small "ON AIR" panel dark beside the hatch. One complete ship, centered with clear margin around it, three-quarter front view from slightly above showing the dorsal surface and one side; moderate lens; plain seamless light gray background; soft key light with gentle form shadows; matte finishes throughout.

### Key Light · Illuminator

**Concept:** [[Game Design/Ship Play Concepts#Illuminator|Illuminator]] and [[Game Design/Ship Play Concepts#Spotter|Spotter]]. Mode: Function. Safe bet.
**Plays:** it pings and paints you, so the headliner sees your gear and everyone in the zone sees you. The ping reveals Key Light too, so it is the first thing anyone with missiles kills.
**Breaks the default:** the bow is a lighting rig. It has no real weapon, and a ventral drive leaves the stern free for a cooling fan.
**Built-in gear:** yes. The stage-light array forms the bow face, set into the shells, not raised on a stand.

Design the Key Light, a single-pilot Lucent Media illuminator that floods a duel with active sensor light and paints the challenger for the camera. Its whole bow is one broad, shallow, curved lighting array set into the front shells like the face of a stage light, a grid of large round lamp apertures behind thick knurled bezels, framed by two short blade-shaped prongs. Behind the array, the compact chassis is wrapped in thick overlapping curved shells offset in steps. A tall, thick sensor fin rises from the back carrying a ring of small round stage lights. The cockpit is a domed canopy set behind the array. A ribbed cooling fan housing closes the stern, and the main drive sits in a single pod under the belly. A sponsor logo and the words "Key Light" run along the flank. One complete ship, centered with clear margin around it, three-quarter front view from slightly above showing the dorsal surface and one side; moderate lens; plain seamless light gray background; soft key light with gentle form shadows; matte finishes throughout.

### B-Roll · Spotter Drone

**Concept:** [[Game Design/Ship Play Concepts#Spotter|Spotter]], as Faction Play's camera drone that "asks to follow your next fight". Mode: Function. Safe bet.
**Plays:** it follows fights, yours included, and pings while it films. It is harmless and annoying, and one shot from a point-defence gun kills it. It is the bench's smallest body.
**Breaks the default:** no pilot and no gun. It is a camera with thrusters.
**Built-in gear:** yes. The camera lens is the body's front face.

Design the B-Roll, an uncrewed Lucent Media camera drone, a tiny flying camera that follows fights and films them. Its body is one small, round, compact chassis shaped like a professional film camera, wrapped in two thick overlapping curved shells in golden yellow and white. Its whole front face is one large camera lens in a thick knurled focus ring, with a small round red tally light above it. A short, thick antenna stub rises from the top shell beside a tiny stage light. Four small thruster pods sit on short rounded arms at its corners like a quadcopter's rotors, each fused to the body. There is no cockpit and no weapon. A sponsor sticker and a small serial plate sit on the side shell. One complete ship, centered with clear margin around it, three-quarter front view from slightly above showing the dorsal surface and one side; moderate lens; plain seamless light gray background; soft key light with gentle form shadows; matte finishes throughout.

### Craft Services · Heat and Power Tender

**Concept:** [[Game Design/Ship Play Concepts#Heat Tender|Heat Tender]] and [[Game Design/Ship Play Concepts#Power Tender|Power Tender]]. Mode: Function. Safe bet.
**Plays:** it waits off-stage. Between bouts a headliner couples to it to dump heat and refill its capacitors, so a losing headliner has somewhere to break off to. It is the anchor of the Lucent break-off, and a raider who finds it ends the show early.
**Breaks the default:** a non-combat role. Two coupling booms fold along its shells, and its thrust is spread across four swivelling pods.
**Built-in gear:** yes. The booms fold into channels in the shells, and the capacitor bank is the body's core.

Design the Craft Services, a two-person Lucent Media support ship that cools and recharges duelling headliners between bouts. Its central chassis is a swollen capacitor core wrapped in thick overlapping curved shells. Two thick coupling booms lie folded forward along its upper shells, each set into its own channel, each ending in a round collar with a knurled ring. Broad ribbed cooling panels lie flat across its back between the booms, in pale lavender. The cockpit is a domed canopy at the front, with a cluster of round stage lights in the brow and a small "BACKSTAGE" panel beside it. Four small swivelling thruster pods sit at the corners of the chassis. A sponsor logo and a catering-style menu board graphic run along the flank. One complete ship, centered with clear margin around it, three-quarter front view from slightly above showing the dorsal surface and one side; moderate lens; plain seamless light gray background; soft key light with gentle form shadows; matte finishes throughout.

### Prime Time · Burst and Break Off (player-usable)

**Concept:** [[Game Design/Ship Play Concepts#Burst and Break Off|Burst and Break Off]]. Mode: Function. Moonshot: half-open radiator shells may read as damage.
**Plays:** the player's Lucent hull, and the one that teaches the heat window. It opens with one heavy laser burst, then must open its big radiator shells and is bright, hot and weak for several seconds. A good pilot fires, rolls the radiators away from the enemy, breaks off to cool, and comes back. Every Lucent headliner the player fights has the same window, so flying it teaches you how to beat them.
**Breaks the default:** one burst emitter on the spine. The radiators are the wing shells, and the drives sit in two ventral pods so the rear fins can flare.
**Built-in gear:** yes. The radiator shells are the hull's outer layer. The capacitor is the chassis.

Design the Prime Time, a single-pilot Lucent Media burst striker that fires one heavy laser burst and then opens its radiators to cool. One heavy laser emitter runs along the centreline of its back, a thick barrel in a knurled wheel-shaped mount, pointing straight forward between two long blade-shaped prongs that sweep over the nose. Its outer shells are its radiators: two broad, thick, curved shells on each flank, layered like palm covers. On the side facing the camera, the upper shell is hinged half open, showing ribbed radiator fins beneath in pale lavender. The shells on the far side are closed. Small fins flare up and out at the rear. The cockpit is a domed canopy ahead of the emitter, beside a camera-lens sensor dome. Two drive pods sit under the belly. A show title and a sponsor logo run along the flank. One complete ship, centered with clear margin around it, three-quarter front view from slightly above showing the dorsal surface and one side; moderate lens; plain seamless light gray background; soft key light with gentle form shadows; matte finishes throughout.

---

## Aeronautics Unlimited

[[Game Design/Faction Play#Aeronautics Unlimited|doctrine]] · register: serious

**From earlier benches, by reference:** Bison (first bench) is the hauler, and [[Brainstorming/Ship Prompt Bench 3#Aeronautics Unlimited|Fenceline and Mule Team]] (Bench 3) plant sentries and tow mass.

**The worksite as a whole.** Rockhounds mine, Bisons haul, Shepherds keep pickets around both, Firecrackers wait for the first contact, and Rakes keep the lanes clear of mines. Threatened, the workers dump cargo and run; the escorts shoot at the first thing they see.

### Shepherd · Point-Defence Picket

**Concept:** [[Game Design/Ship Play Concepts#Point-Defence Umbrella|Point-Defence Umbrella]]. Mode: Mass (a herding dog circling a flock). Safe bet.
**Plays:** it circles a worksite on a short leash with nothing but one-cell guns, all tracking fast. A Pirate speed demon wins against slow guns by crossing close, and a Shepherd is the ship that punishes that. Its guns do little to armour, so a heavy hull can simply push through it.
**Breaks the default:** no forward gun and no heavy gun. Eight light turrets cover every face, and the drives sit in two side pods so it can hold an orbit.
**Built-in gear:** none. Every turret is a fitted light gun on a standard ring.

Design the Shepherd, a two-person Aeronautics Unlimited point-defence picket that circles a worksite and shoots down anything fast that comes near it. Its body is a short, plain, rounded-rectangular hull. Eight small turrets on raised rings are spread evenly over its faces: two on the bow, two on each flank edge and two at the stern, each a compact boxy turret with one short light barrel and a small round sensor aperture, each clearly able to turn fast. There is no larger gun. A short survey mast with a tracking dish rises from the middle of the back. The cab is a rounded-rectangle block at the front with a wide, low window. Two drive pods sit on short stubs at mid-flank. Stencilled turret numbers sit beside every ring, and ochre safety panels mark the lifting points. One complete ship, centered with clear margin around it, three-quarter front view from slightly above showing the dorsal surface and one side; moderate lens; plain seamless light gray background; soft key light with gentle form shadows; matte finishes throughout.

### Rake · Minesweeper

**Concept:** [[Game Design/Ship Play Concepts#Minesweeper|Minesweeper]]. Mode: Function (a farm rake made into a sweep). Safe bet.
**Plays:** it keeps worksite lanes clear. Mines drift free and only hostiles trigger them, so a Rake sets off Pirate mines on purpose at the end of its comb, where the blast is far from the cab. It is slow and needs the Shepherds around it.
**Breaks the default:** the bow is a tool. Two drives sit far back on the flanks, behind the comb's blast shadow.
**Built-in gear:** yes. The sweep comb forms the bow. Its tines are replaceable armour, and two spare tines are racked on the deck.

Design the Rake, a two-person Aeronautics Unlimited minesweeper that clears drifting mines from worksite lanes by setting them off at a distance. Its bow is one broad sweep comb, wider than the hull: a thick armoured bar carrying a row of long, heavy, blunt tines that point straight forward, each tine a replaceable armoured rod with a stencilled number. Two of the tines are newer and a fresher white than the rest. Behind the comb, a thick blast plate stands between the comb and the cab. The cab is a rounded-rectangle block with a narrow, low window behind the blast plate. Two spare tines lie in clamp racks on the dorsal deck. Two drive pods sit far back on the lower flanks. One small turret sits on the cab roof. Ochre safety panels band the comb bar, and soot stains the tine tips. One complete ship, centered with clear margin around it, three-quarter front view from slightly above showing the dorsal surface and one side; moderate lens; plain seamless light gray background; soft key light with gentle form shadows; matte finishes throughout.

### Rockhound · Miner

**Concept:** none in the catalogue; a miner is a worker, not a fighter. It carries the AU hauler quirk from [[Game Design/Faction Play#Aeronautics Unlimited|Faction Play]]. Mode: Function. Safe bet.
**Plays:** it grinds ore from rock. When a hostile appears, it opens its belly doors, drops its ore as loot and runs for the station. The ore is what the Pirates hire the player to collect.
**Breaks the default:** no gun at all. The bow is a cutting head, and the drives are four short pods angled down at the corners so it can hold against a rock face.
**Built-in gear:** yes. The cutting head is the bow, and the ore bin with its dump doors is the belly.

Design the Rockhound, a two-person Aeronautics Unlimited miner that grinds ore from rock and drops its load to run when anything hostile appears. Its bow is one broad cylindrical cutting drum set across the front, studded with short blunt cutting teeth, held in a thick armoured cradle. Behind it, a covered conveyor runs up into a large rounded-rectangle ore bin that makes up most of the body, with two wide hinged dump doors along its belly, shown slightly open with a little ore spilling out. The cab is a compact block above the cutting drum with a wide, low window and a short survey mast. Four short drive pods sit at the corners, angled down and back. It carries no weapon. Pale mineral dust packs every crease, and abrasion scuffs the lower edges. Stencilled bay numbers mark the ore bin. One complete ship, centered with clear margin around it, three-quarter front view from slightly above showing the dorsal surface and one side; moderate lens; plain seamless light gray background; soft key light with gentle form shadows; matte finishes throughout.

### Firecracker · Swarm Boat

**Concept:** [[Game Design/Ship Play Concepts#Swarm Boat|Swarm Boat]]. Mode: Function. Safe bet.
**Plays:** it is the AU escort that fires dumbfire Leonid swarms at the first contact it sees, decoys included. It empties fast on the wrong target. Give it something else to shoot first, and dodge its swarms by moving across their line of fire rather than away from them. A Glushitel's flak eats its swarms whole.
**Breaks the default:** the whole dorsal surface is a launcher, and the drives sit in two pods under the launcher block.
**Built-in gear:** none. The launcher block is fitted swarm gear in numbered cells.

Design the Firecracker, a single-pilot Aeronautics Unlimited swarm escort that fires a dense cloud of small dumbfire rockets at the first contact it sees. Its back is one broad, flat-topped launcher block, a grid of six rows of small round launch tubes, each closed by a thin square cover, angled slightly upward toward the bow. A few covers in the front row are missing, the tubes empty and sooted. The block sits on a short, plain, rounded-rectangle hull. The cab is a compact block at the front with a wide, low window and a short survey mast. Two drive pods sit under the launcher block at the rear. One small turret sits on the cab roof. Stencilled reload numbers run along the block's edge, and ochre hazard panels border it. One complete ship, centered with clear margin around it, three-quarter front view from slightly above showing the dorsal surface and one side; moderate lens; plain seamless light gray background; soft key light with gentle form shadows; matte finishes throughout.

### Journeyman · Turret Platform (player-usable)

**Concept:** [[Game Design/Ship Play Concepts#Turret Platform|Turret Platform]]. Mode: Mass (a well-packed mule). Safe bet.
**Plays:** the player's AU hull: honest and forgiving. Two light turrets fire in every direction, so the pilot manages position and range rather than heading. A small hold and one tool socket let it do a little of every job. It does nothing best, and it fails at nothing.
**Breaks the default:** no forward-fixed gun. Two turrets on the shoulders, and four corner thruster pods for forgiving, even handling.
**Built-in gear:** none. The tool socket takes whatever the job needs.

Design the Journeyman, a single-pilot Aeronautics Unlimited all-rounder, the ship a new contractor learns on and never quite sells. Its body is a compact, balanced rounded-rectangular hull. Two small turrets sit on raised rings on its shoulders, each with one light barrel, each clearly able to turn all the way round. Behind them, a short cargo bay sits under two hinged doors with stencilled bay numbers. At the bow, under the cab, a square tool socket with a bare aluminium clamp ring is ready for a mining head, a grab or a sensor. The cab is a rounded-rectangle block with a wide, low window and a short survey mast. Four short thruster pods sit at the four corners, fused to the hull. One replaced panel on the flank is a slightly fresher chalk white, and a small "Hours: 4,180" service sticker sits beside the hatch. One complete ship, centered with clear margin around it, three-quarter front view from slightly above showing the dorsal surface and one side; moderate lens; plain seamless light gray background; soft key light with gentle form shadows; matte finishes throughout.

---

## Pirate Coalition

[[Game Design/Faction Play#Pirate Coalition|doctrine]] · register: wild and maximalist

**From Bench 3, by reference:** [[Brainstorming/Ship Prompt Bench 3#Pirate Coalition|Welcome Mat and Jumble Sale]], the boarder and the mixed-cloud carrier.

**The crews as a whole.** Every Pirate hull is a stolen donor with additions on the camera side, primer, one crew accent colour and the crew's emoji painted three times. Pirates want cargo, not death. They take it fast and leave fights they are losing. Their speed demons beat the Zhestokost column; AU's Shepherds beat them.

### Dine and Dash · Speed Demon

**Concept:** none in the catalogue; this is the poster child for the angular-velocity term in evasion. The nearest is [[Game Design/Ship Play Concepts#Forward-Fixed Fighter|Forward-Fixed Fighter]], here turned sideways. Mode: Function. Safe bet.
**Plays:** it has no armour and huge lateral thrust. It crosses close and jinks, so heavy guns cannot track it and nothing gets a straight shot. It eats Zhestokost columns alive and dies to Shepherds.
**Breaks the default:** the largest features are two lateral thruster banks, not drives. Its guns are two light turrets that can track while it slides.
**Built-in gear:** none. Every addition is bolted on.

Design the Dine and Dash, a single-pilot Pirate Coalition speed demon built from a stolen Alakrita racer, stripped of every gram that was not thrust. The donor's long, narrow, knife-pleated ivory body is still recognisable, with patches of wine-red lacquer, but its armour plates are gone, leaving bare frames and exposed cable runs clamped along the hull. On each flank, a huge bank of four lateral thruster nozzles is bolted on, pointing straight sideways, each bank bigger than the cockpit, the one on the camera side braced with welded struts. Two small light turrets on improvised mounts sit on the dorsal ridge. The original slim drive row remains at the stern. The cockpit is the donor's long, narrow canopy. The crew emblem, a running-figure emoji, is painted three times. A bright orange crew accent slashes across donor and additions alike. One complete ship, centered with clear margin around it, three-quarter front view from slightly above showing the dorsal surface and one side; moderate lens; plain seamless light gray background; soft key light with gentle form shadows; matte finishes throughout.

### Lost and Found · Q-Ship

**Concept:** [[Game Design/Ship Play Concepts#Q-Ship|Q-Ship]] and [[Game Design/Ship Play Concepts#False Distress|False Distress]]. Mode: Story. Safe bet.
**Plays:** it sits as distress bait with a freighter's transponder and a gunship's heat. When a responder commits, the container doors drop and the guns come out. Its tell is the one Faction Play names: the transponder does not match the heat.
**Breaks the default:** its guns are hidden in the cargo. The donor's drives stay where a freighter's would be, because looking ordinary is the weapon.
**Built-in gear:** none. The hidden guns are stolen fitted gear behind cut-down container doors.

Design the Lost and Found, a three-crew Pirate Coalition Q-ship built from a stolen Lightsail Express hauler, dressed to look like a freighter in trouble. The donor's cab and long cargo spine are still recognisable, in faded fleet blue with vermilion route stripes, and the containers are still clamped to the spine. On the side facing the camera, the front of one container has been cut into a hinged door, shown dropped open to expose two heavy gun barrels on an improvised mount inside. A scorch mark across the cab is painted on, and a rust-red dye streak runs from a vent like a leak. An extra reactor housing in gray primer bulges behind the cab where no freighter needs one. A distress beacon is welded to the cab roof. The crew emblem, a teddy-bear emoji, is painted three times. A purple crew accent slashes across donor and additions alike. One complete ship, centered with clear margin around it, three-quarter front view from slightly above showing the dorsal surface and one side; moderate lens; plain seamless light gray background; soft key light with gentle form shadows; matte finishes throughout.

### Party Favors · Minelayer

**Concept:** [[Game Design/Ship Play Concepts#Minelayer|Minelayer]] and [[Game Design/Ship Play Concepts#Stern Chaser|Stern Chaser]]. Mode: Story. Safe bet.
**Plays:** it runs, strewing mines behind it. Only hostiles trigger them, so pirates fly through their own fields and pursuers do not. The blast is faction-blind, so a pirate who lingers next to a mine a pursuer triggers pays for it too.
**Breaks the default:** the stern belongs to the mine chute, so the drives are bolted on the flanks.
**Built-in gear:** none. The mines are gear-built munitions in a stolen ore hopper.

Design the Party Favors, a two-crew Pirate Coalition minelayer built from a stolen Aeronautics Unlimited ore hauler, strewing mines behind it as it runs. The donor's plain rounded-rectangle body is still recognisable, with chalk-white paint and stencilled bay numbers. Its ore hopper on the back is now full of round mines, each painted by the crew with bright confetti dots, feeding down into the old ore chute, which now ends in a square hatch at the stern. One mine sits half out of the hatch. Its original stern drive is gone: two mismatched replacement drives are bolted onto the flanks, the one on the camera side larger and braced with welded struts. One small turret on an improvised mount faces aft over the hopper. The crew emblem, a party-popper emoji, is painted three times. A red crew accent slashes across donor and additions alike. One complete ship, centered with clear margin around it, three-quarter front view from slightly above showing the dorsal surface and one side; moderate lens; plain seamless light gray background; soft key light with gentle form shadows; matte finishes throughout.

### Hamstring · Disabler

**Concept:** [[Game Design/Ship Play Concepts#Disabler|Disabler]], with `target_priority` drives. Mode: Function. Safe bet.
**Plays:** it reads your drives from range, shoots them, and waits for you to stop. Then the crew collects. Protect your drives, or kill it before it finishes reading you.
**Breaks the default:** one long, light gun along the spine, and the donor's sensor ear as the largest feature. No nose pair.
**Built-in gear:** the donor's own sensor dish, kept as the body's mass. The gun is bolted on.

Design the Hamstring, a two-crew Pirate Coalition drive sniper built from a stolen Finch Cybernetics survey ship. The donor's smooth, tapered pearl-white body is still recognisable, with its broad shallow sensor dish recessed into the flank facing the camera like an ear, and a row of dark lens apertures along its brow. Along the spine, a long, thin, precise gun barrel on an improvised clamp mount runs the whole length of the hull, its muzzle well past the nose. Bolted salvage armour plates in gray primer cover the dish's lower edge, and exposed cable runs are clamped from the dish to the gun mount. The cockpit is the donor's narrow canopy. A tally of painted drive-nozzle silhouettes runs along the flank. The crew emblem, a scissors emoji, is painted three times. A cyan crew accent slashes across donor and additions alike. One complete ship, centered with clear margin around it, three-quarter front view from slightly above showing the dorsal surface and one side; moderate lens; plain seamless light gray background; soft key light with gentle form shadows; matte finishes throughout.

### Finders Keepers · Salvager

**Concept:** [[Game Design/Ship Play Concepts#Salvager|Salvager]]. Mode: Mass (a vacuum cleaner with teeth). Safe bet.
**Plays:** it tractors jettisoned cargo. When loot drops, it goes for the loot and the fight stops for it. A player can use that: drop something and the collector turns away.
**Breaks the default:** the bow is a cargo maw with a tractor emitter, and it has no forward gun.
**Built-in gear:** none. The tractor and the maw are bolted on.

Design the Finders Keepers, a three-crew Pirate Coalition collector built from a stolen Ewan Hart farm hauler, which tractors in loose cargo the moment it drops. The donor's tractor proportions are still recognisable, in faded harvest gold with deep green on the cab, its big rounded fenders and round gauges intact. Its front implement is gone: a wide, open cargo maw is welded across the bow in gray primer, with a broad round tractor emitter mounted above it and two short sorting arms folded at its edges. A canvas net is lashed over the open rear deck, bulging with mismatched crates. One small turret on an improvised mount sits on the cab roof. Exposed cable runs are clamped from the emitter back to the power housing. The crew emblem, a magnet emoji, is painted three times. An electric blue crew accent slashes across donor and additions alike. One complete ship, centered with clear margin around it, three-quarter front view from slightly above showing the dorsal surface and one side; moderate lens; plain seamless light gray background; soft key light with gentle form shadows; matte finishes throughout.

### Pit Stop · Hidden Tender

**Concept:** [[Game Design/Ship Play Concepts#Tender|Tender]] and [[Game Design/Ship Play Concepts#Playing Dead|Playing Dead]]. Mode: Story. Moonshot: the debris camouflage may break the solid silhouette.
**Plays:** it lies cold in a debris field, where crews come to rearm, repair and offload. Find it and you find where the raiders go home.
**Breaks the default:** it does not fly in fights at all. The donor is a stolen Zhestokost tender, so the Pirates' depot is the column's own anchor.
**Built-in gear:** the donor's magazines and transfer collars, kept. The camouflage is lashed on.

Design the Pit Stop, a four-crew Pirate Coalition hidden tender built from a stolen Zhestokost ammunition tender, lying cold among wreckage. The donor's long, stepped armoured body is still recognisable, in charcoal with oxide-red magazine hatches, but its unit codes are crossed out. Thick slabs of wreck plating and bent hull fragments are lashed across its back and flank with heavy cable, so it reads as one more piece of debris, all of it fused into one solid mass. On the side facing the camera, one transfer collar has been cut open and refitted with a pirate docking clamp in gray primer. Its radiator vanes are folded flat, and its port lights are dark. A crude hand-painted sign above the collar reads "Open". The crew emblem, a wrench emoji, is painted three times. A magenta crew accent slashes across donor and additions alike. One complete ship, centered with clear margin around it, three-quarter front view from slightly above showing the dorsal surface and one side; moderate lens; plain seamless light gray background; soft key light with gentle form shadows; matte finishes throughout.

### Hand-Me-Down · Raider (player-usable, earned later)

**Concept:** [[Game Design/Ship Play Concepts#Stern Chaser|Stern Chaser]] and [[Game Design/Ship Play Concepts#Turret Platform|Turret Platform]]: a raider that can run and still shoot. Mode: Story. Safe bet.
**Plays:** the player is not a pirate and does not start in a Pirates hull. After enough jobs, a crew hands over a scuffed Second Owner raider, someone else's emoji still on it. It is fast and light, with a rear gun for leaving.
**Breaks the default:** its donor is a truck cab with no trailer. One turret faces aft, and two mismatched drives hang under the cab.
**Built-in gear:** none. The previous crew bolted everything on, and some of it is half removed.

Design the Hand-Me-Down, a single-pilot Pirate Coalition raider built from a stolen Lightsail Express truck cab cut free of its trailer and handed down through two crews. The donor's compact rounded cab is still recognisable, in faded fleet blue with a vermilion route stripe, its warm lit window and sun-visor slab intact. Behind the cab, the trailer coupling has been cut off and capped with a welded plate in gray primer. One small turret on an improvised mount sits on the capped plate, turned to point backward. One light gun is bolted under the visor. Two mismatched drives hang low under the cab, one stolen bell and one original pod. On the side facing the camera, the previous crew's emblem, a thumbs-up emoji, is painted twice and half covered by a fresh rectangle of primer, left blank. Its teal accent has been roughly sanded back. One complete ship, centered with clear margin around it, three-quarter front view from slightly above showing the dorsal surface and one side; moderate lens; plain seamless light gray background; soft key light with gentle form shadows; matte finishes throughout.

---

## Freelancers and Passers-By

Operator, 2026-10-07: "It would feel strange if the player is the only freelancer."

These are independents from the other catalog factions who appear in the demo region and do jobs like the player's. Each flies its own brand's hull and composes with that brand's faction block. Six of them get full prompts; the rest are compact riffs.

**Design note: where do freelancers live in faction play?** Today every ship belongs to a faction, and [[Game Design/Faction Play#Fork: Inter-Faction Relations|Faction Play's relations fork]] decides who shoots whom between factions. A freelancer flies a brand without serving its flag. Should freelancers carry an "independent" allegiance with its own row in the relations table, should they keep their brand's faction and take contract roles that override it for a job, or something else? This bench assumes no answer. It is an open question, not a decision.

### Tattletale · Finch Cybernetics

**Job:** bounty hunter and tracker. **Hook:** it shadows you and sells your track to whoever pays, so a Zhestokost column or a Pirate crew knows where you are. Break its tail by going cold, or pay it more.
**Concept:** [[Game Design/Ship Play Concepts#Spotter|Spotter]]. Mode: Function. Safe bet.
**Breaks the default:** the sensor ear is the largest feature, and the gun is one small flush aperture. Fine ports along the flanks let it hold a tail without a big drive.
**Built-in gear:** yes. The sensor dish is set into the flank as the body's own surface.

Design the Tattletale, a single-pilot Finch Cybernetics tracker that follows a ship at a distance and sells its position to whoever pays. One broad, shallow sensor dish is recessed into the flank facing the camera like an ear, larger than any other feature, ringed by a short row of celadon-green indicator dots. A second, smaller dish sits recessed in the far flank, its rim just visible past the dorsal line. The body is one smooth, continuous tapered form with hairline seams. A row of dark round lens apertures runs along the brow. The cockpit is a narrow tapered canopy at the nose. One small low-signature weapon aperture sits flush under the nose. Rows of fine manoeuvring ports run along both flanks. A small gray technician label reads "Track Services, Billed by the Minute". One complete ship, centered with clear margin around it, three-quarter front view from slightly above showing the dorsal surface and one side; moderate lens; plain seamless light gray background; soft key light with gentle form shadows; matte finishes throughout.

### Overnight · Lightsail Express

**Job:** courier. **Hook:** it never drops cargo, so threatening it gets nothing. It can be escorted for pay or robbed by force, and the Pirates will offer both jobs in the same week.
**Concept:** [[Game Design/Ship Play Concepts#Stern Chaser|Stern Chaser]]: a courier that runs and shoots back. Mode: Function. Safe bet.
**Breaks the default:** a single sealed pod in place of a trailer, its gun facing aft, and drives slung under the cab.
**Built-in gear:** yes. The sealed courier pod is clamped flush into the spine and cannot be jettisoned.

Design the Overnight, a single-pilot Lightsail Express courier that carries one sealed parcel pod and will not let go of it. The cab is a compact rounded block at the front with a warm lit window, a sun-visor slab over the windscreen, and a personal pennant beside the door. Behind it, a short spine carries one sealed, rounded cargo pod locked down by four heavy clamps, with a bold vermilion "Next Day" stencil and a row of inspection stickers. One small machine-gun turret sits on the rear of the pod, turned to point backward. Two fat drive pods are slung low under the cab like a truck's fuel tanks. Polished handholds run along the cab, and a delivery tally is painted under the window. One complete ship, centered with clear margin around it, three-quarter front view from slightly above showing the dorsal surface and one side; moderate lens; plain seamless light gray background; soft key light with gentle form shadows; matte finishes throughout.

### Odd Job · Ewan Hart

**Job:** salvage tug. **Hook:** it races you to wrecks and dropped loot, competing for the same floating bodies. When an AU hauler dumps ore, the player, a Finders Keepers and an Odd Job all go for the same cloud.
**Concept:** [[Game Design/Ship Play Concepts#Salvager|Salvager]] and [[Game Design/Ship Play Concepts#Tug|Tug]]. Mode: Mass (a farm tractor with a front loader). Safe bet.
**Breaks the default:** the bow is a loader bucket and a grab arm. The thrust sits inside four fenders, facing down and back.
**Built-in gear:** yes. The loader bucket forms the bow.

Design the Odd Job, a single-pilot Ewan Hart salvage tug that races everyone else to wrecks and loose cargo. Its bow is one broad, deep front-loader bucket fused to the hull on two thick hydraulic arms, its lip worn bright. A folding grab arm lies along the flank facing the camera, ending in a heavy three-fingered claw. A heavy tow hitch sits at the stern. The cab is a rounded tractor cab with a wide window and large round gauges. Four thrusters sit inside four big rounded fenders at its corners, facing down and back like a tractor's wheels. A canvas feed sack and a coil of tow cable are strapped to the rear deck. A hand-painted sign on the cab door reads "No Job Too Odd". One complete ship, centered with clear margin around it, three-quarter front view from slightly above showing the dorsal surface and one side; moderate lens; plain seamless light gray background; soft key light with gentle form shadows; matte finishes throughout.

### Second Opinion · Rossum & Douglas

**Job:** missile-boat mercenary. **Hook:** it keeps its distance and backs away from anyone who closes. Hired against you, it is a slow drizzle from range that a speed demon can run down. Hired by you, it is useless against a Glushitel.
**Concept:** [[Game Design/Ship Play Concepts#Arsenal Barge|Arsenal Barge]], in the faction's stand-off doctrine. Mode: Function. Safe bet.
**Breaks the default:** no gun at the nose. The weapon is a field of flush missile hatches, and one wide slot drive runs across the rear face.
**Built-in gear:** none. The hatches are fitted launch cells.

Design the Second Opinion, a single-pilot Rossum & Douglas missile mercenary that fights only from range. It is the familiar flying wedge, slightly longer than standard. Its broad, flat dorsal plane is covered by a grid of twelve identical square missile hatches set flush into the surface, each with a small stencilled number. The blunt nose is plain, with a small recessed square cockpit window. One wide slot drive runs across the whole rear face. One small defensive mount sits flush on the rear edge. A model number, a modest corporate logo and a small label reading "Independent Contractor Edition" sit beside the cockpit. One complete ship, centered with clear margin around it, three-quarter front view from slightly above showing the dorsal surface and one side; moderate lens; plain seamless light gray background; soft key light with gentle form shadows; matte finishes throughout.

### Controlled Demolition · Death Monkey Explosives

**Job:** demolition contractor. **Hook:** it clears minefields by blowing them up, loudly. Mines are faction-blind, so anyone near the field when it works shares the bill. AU hires it when the Rakes are too slow, and it does not care whose mines they were.
**Concept:** [[Game Design/Ship Play Concepts#Minesweeper|Minesweeper]], done by detonation. Mode: Function. Safe bet.
**Breaks the default:** the weapon is a rack of small charge drones on the back. Drives sit on the flanks behind heavy braces, away from the blast face.
**Built-in gear:** none. The charge drones are gear-built munitions on a launch rail.

Design the Controlled Demolition, a two-person Death Monkey Explosives demolition contractor that clears minefields by setting them off. A long launch rail runs down its back, carrying a row of six small charge drones, each a squat blackened box with an acid-yellow cut line and a short antenna, ready to fly into a minefield and detonate. The front of the ship is one hard-edged blackened slab with a narrow cockpit slit. Sacrificial standoff plates on short struts ride ahead of the bow. The drives sit in two square housings on the flanks behind heavy braces. A thick blast-shutter visor is folded up over the cockpit slit. Hand-painted white lettering on the flank reads the ship's name, a lyric fragment and a tally of fields cleared. One complete ship, centered with clear margin around it, three-quarter front view from slightly above showing the dorsal surface and one side; moderate lens; plain seamless light gray background; soft key light with gentle form shadows; matte finishes throughout.

### Ghost Fare · Adrasteia

**Job:** cold-running smuggler. **Hook:** it crosses the region dark and never answers a hail. An Inspektor cannot find it, because Zhestokost columns hunt by heat. A Key Light ping can, and Lucent will put it on air.
**Concept:** [[Game Design/Ship Play Concepts#Quiet Approach|Quiet Approach]]. Mode: Function. Safe bet.
**Breaks the default:** no visible drive and no visible gun. The hold is the body.
**Built-in gear:** yes. The smuggling hold is tucked under the main facets, and its seam is the asymmetric facet.

Design the Ghost Fare, a single-pilot Adrasteia smuggler that crosses dangerous space cold and dark with a hidden hold. Its body is a low faceted wedge of broad shallow planes, every surface closed. On the side facing the camera, one broad facet is cut differently from its mirror: it is the hinged lid of a flush smuggling hold, its seam barely visible. The cockpit is a narrow faceted slit at the front of the dorsal ridge. Small thruster ports hide under the overhanging facet edges all around the rim, and the stern closes in one plain facet. One utility port sits flush in the leading edge. One tiny friendly smiley face is stencilled beside the hatch. One complete ship, centered with clear margin around it, three-quarter front view from slightly above showing the dorsal surface and one side; moderate lens; plain seamless light gray background; soft key light with gentle form shadows; matte finishes throughout.

### Tow & Charge · NiteLife Energy

**Job:** roadside power tender for hire. **Hook:** it recharges anyone who pays, including Lucent headliners between bouts and Pirate raiders after a job. Finding one mid-fight is a resupply, and killing one strands everyone who was counting on it. Hull basis: Bench 3's [[Brainstorming/Ship Prompt Bench 3#NiteLife Energy|Jump Start]], with a tow hitch and a meter.

### Ringer · Alakrita

**Job:** professional duellist. **Hook:** Lucent sponsors hire Ringers to headline. A third party in a duel breaks its form, so a player can pay a Ringer to throw a duel, or to join one on purpose and turn the whole Green Room on the interloper. Hull basis: Bench 3's [[Brainstorming/Ship Prompt Bench 3#Alakrita|Riposte]] in a sponsor's livery.

### Crossing Guard · Corriedales

**Job:** budget point-defence escort for hire. **Hook:** two tiny wand-barrelled PD guns on a plump sheepdog mascot hull. It shoots down Firecracker swarms for you, and it runs dry fast. Cheap, cheerful and very visibly a Lucent family brand.

### Last Mile · Ewan Hart

**Job:** grocery runner to AU stations, because people need dinner. **Hook:** it is the softest target in the region and the one the AU escorts care least about. The Pirates will ask you to rob it, and the station will ask you to escort it.

### Small World · rival freelancer (brand rolled per run)

**Job:** the same jobs as yours. **Hook:** Nemesis-lite, in the Pirate crews' pattern: a named freelancer with one rolled quirk, whose hull brand comes from the run seed. It remembers what you did for the zone visit. It undercuts your contracts if you beat it, and turns up as a wingman if you spared it. Its personal mark stays the same whatever hull it flies.

### Genuine Article · stranded freelancer (any brand)

**Job:** none today; its drive is dead. **Hook:** its distress call looks exactly like Lost and Found's. The player has to read the tells. Lost and Found carries a freighter's transponder with a gunship's heat. The Genuine Article's transponder matches the hull you can see, and it is colder than it should be, because its reactor is out. Helping it pays in goodwill and a tip. Approaching a Q-ship the same way pays in gunfire.

### Off the Clock · Zhestokost deserter

**Job:** freelance gunnery. **Hook:** this one bends the brief, because the hull is from a cast faction, but the pilot is independent: a deserter from Faction Play's dock stories, flying a Batareya with its unit codes ground off. Columns fire on it on sight. It knows how a column thinks and will sell that knowledge.

---

## Cross-Faction Set Pieces

Each arises from the doctrines and mechanics above. None is scripted.

1. **The three-way belt fight.** A Zhestokost Inspektor hails an AU worksite for inspection. While the Shepherds hold their leash around the Rockhounds and the column comes up behind the Inspektor, a Pirate crew raids the Bisons, which dump ore and run. B-Roll arrives and films all of it, and its pings show everyone where everyone is. The player was hired for the ore.
2. **Minefields as terrain.** A Party Favors strews a field across an AU lane as it flees. Rakes come to clear it, comb first. A Zhestokost column, which hunts by heat and does not read cold mines well, wanders in and pays for every one it triggers. A Controlled Demolition contractor offers to clear what is left, loudly, with the Rakes still in the lane.
3. **Duel bait while a column approaches.** The player challenges a Lucent headliner and the Green Room holds. A Zhestokost column is inbound to inspect the duel ground. Win fast, or let the column arrive and break the duel's form, so that every holding ship turns on the interloper.
4. **The anvil and the swarm.** A Pirate raider swarm dives on a Nakovalnya. Shown at slowed sim speed, the heavy casemates miss every crosser, and the flak ring takes them apart one by one. This is the demo's lesson that speed beats heavy guns and loses to light ones, shown in one shot.
5. **Inspecting a Q-ship.** An Inspektor hails a Lost and Found sitting as distress bait. Its grace is running out and the Q-ship's container doors are still shut. The player can warn the crew that hired them, warn the inspector, or wait to see who fires first.

---

## Round 4: hypotheses under test

Operator, 2026-10-08: "Rewrite Odd Job and Dine and Dash for another round, you should be testing new hypotheses with every prompt in order to refine the aesthetic. Don't expect to get it right first try."

Each variant changes one thing, so its result can be attributed. The renders and their exact prompts are in `Renders/Bench 4/` (`Odd Job r4a`, `Odd Job r4b`, `Dine and Dash r4a`, `Dine and Dash r4b`), rendered with FLUX 3 at 4:3 and 2k on 2026-10-08. The global and faction blocks are unchanged from round 3. Observations are the agent's; the verdicts are the operator's.

| Ship | Variant | Hypothesis | Variable changed | Agent observation | Operator verdict |
| --- | --- | --- | --- | --- | --- |
| Odd Job | r4a | Construction words pull the model to ground machinery; space-salvage words and "a spacecraft in vacuum; no wheels, no ground, no cab" make it a spacecraft. | Vocabulary, against round 3: bucket to capture cage, claw to grapple, tow hitch to docking collar, tractor cab to pressurised capsule, thrusters to reaction-control quads, plus the vacuum clause. | Partial. The wheels and the ground are gone, but the fender pods still read as wheel hubs and the body as a hovering armoured truck. | |
| Odd Job | r4b | An explicit orbital-service-craft silhouette beats vocabulary alone. | Silhouette, against r4a: a squat hub, two long jointed manipulator arms forward, a capture cage between them, and RCS clusters at the corners. | Held. It reads as a spacecraft with no ground-vehicle residue. The palette drifted to mostly green. | |
| Dine and Dash | r4a | Naming the thrust direction geometrically makes the lateral thrust show. | Thrust wording, against round 3: the nozzle mouths are perpendicular to the spine, and the camera-side mouths face the viewer. | Did not hold. The mouths still face forward, and the tail fin and wings grew. | |
| Dine and Dash | r4b | A vacuum-hull clause removes aero cues, so the rule may belong in the global block. | One clause, against r4a: "no wings, no tail fins and no aerodynamic surfaces of any kind". | Mostly held. The tail fin is gone and the wings are stubby vanes, but the nozzles still face forward. | |

**Readings for the next round** (agent, not verdicts):

- **Silhouette beats vocabulary.** Odd Job turned into a spacecraft only when the prompt gave it an overall shape. The Ewan Hart block still says tractor proportions and fenders, so the faction block may be what keeps the r4a body truck-like. That is the next single variable to test.
- **The no-aero clause works, and the global block works against it.** The global block says "every fin, blade and wing is a chunky rounded slab", which invites fins on every hull. Replacing that clause in the global block is a candidate change, and it needs its own test across several factions.
- **Nozzle direction is not yet controlled.** Two wordings have both failed to turn the nozzles. The next hypotheses are to describe what the camera sees (open nozzle mouths as circles set flat into the flank), or to change the view for this hull.
- **Unprompted turrets.** Both Odd Job renders grew small guns. The global block's "guns in small turrets on thick armoured mounts" probably supplies them. An unarmed hull may need to say so.

### Odd Job II · Ewan Hart (pending the operator's verdict)

The r4b variant, judged the stronger by the agent. It replaces the round-3 entry only if the operator agrees.

Design the Odd Job, a single-pilot Ewan Hart salvage tug, a spacecraft in vacuum that races everyone else to wrecks and loose cargo; it has no wheels, no ground beneath it and no cab. Its silhouette is an orbital service craft: a squat, round-shouldered central hub, two long jointed manipulator arms reaching forward from its shoulders, a collapsible capture cage of heavy ribs folded between the arms at the bow, and a cluster of reaction-control thruster quads at every corner of the hub. Each manipulator arm ends in a heavy three-fingered grapple, its fingertips worn bright. A heavy docking collar for hauling wrecks sits at the stern. The cockpit is a rounded pressurised capsule set into the front of the hub with a wide window and large round gauges. The thruster quads sit inside four big rounded fenders, facing down and back. A canvas feed sack and a coil of hauling cable are strapped to the rear cargo frame. A hand-painted sign on the cockpit hatch reads "No Job Too Odd". One complete ship, centered with clear margin around it, three-quarter front view from slightly above showing the dorsal surface and one side; moderate lens; plain seamless light gray background; soft key light with gentle form shadows; matte finishes throughout.

### Dine and Dash II · Speed Demon (pending the operator's verdict)

The r4b variant, judged the stronger by the agent. It replaces the round-3 entry only if the operator agrees. The nozzle direction is still unsolved.

Design the Dine and Dash, a single-pilot Pirate Coalition speed demon built from a stolen Alakrita racer, stripped of every gram that was not thrust. The donor's long, narrow, knife-pleated ivory body is still recognisable, with patches of wine-red lacquer, but its armour plates are gone, leaving bare frames and exposed cable runs clamped along the hull. On each flank, a huge cluster of four thruster nozzles is bolted on, each cluster bigger than the cockpit. The two clusters point left and right, their nozzle mouths perpendicular to the spine: the camera-side cluster's four open mouths face out sideways toward the viewer, and the far cluster's mouths face the opposite way. The camera-side cluster is braced with welded struts. Two small light turrets on improvised mounts sit on the dorsal ridge. The original slim drive row remains at the stern. The cockpit is the donor's long, narrow canopy. The crew emblem, a running-figure emoji, is painted three times. A bright orange crew accent slashes across donor and additions alike. It has no wings, no tail fins and no aerodynamic surfaces of any kind. One complete ship, centered with clear margin around it, three-quarter front view from slightly above showing the dorsal surface and one side; moderate lens; plain seamless light gray background; soft key light with gentle form shadows; matte finishes throughout.

## Round 5: the blocks are fair game

Operator, 2026-10-08: "You are way too strict with the prompting, feel free to mutilate those global and faction prompts in service of getting a better result."

Operator verdict on Dine and Dash rounds 3 and 4: "The thruster packs on the D&D are quite silly." Round 5 drops the bolted-on nozzle packs and builds the lateral thrust into the hull.

The variables in this round are large, and some renders change several things at once. The aim was a better image, not a clean experiment. Renders and exact prompts are in `Renders/Bench 4/` (`Odd Job r5a`, `Odd Job r5b`, `Dine and Dash r5c`, `Dine and Dash r5d`, `Key Light r5e`, `Key Light r5f`), rendered with FLUX 3 at 4:3 and 2k on 2026-10-08. Every render uses **G2**, the global block rewritten as a vacuum-hull doctrine. G2 says there are no wings, fins, vanes or streamlining. Thrust comes from nozzles and grilles on whichever faces of the hull need to push, each opening the way its exhaust leaves. The silhouette comes from the ship's job, and weapons appear only where the ship prompt names them. G2 drops the wear clause, which is left to the faction blocks, and it no longer repeats the frame clause. The full text is in each render's `.md`. Observations are the agent's.

| Ship | Variant | Hypothesis | What changed | Agent observation | Operator verdict |
| --- | --- | --- | --- | --- | --- |
| Odd Job | r5a | Without tractor and fender language in the faction block and guns in the global block, the r4b silhouette loses its truck residue and turrets. | G2. The Ewan Hart block is rewritten with no tractor proportions, fenders, hitches or couplings, and gold is dominant with green as trim. The ship prompt says "It is unarmed", puts the RCS quads on stubby corner booms and adds a lamp-and-window face. | Held. A gold egg-shaped hub with a cheerful face, two grapple arms, a cage and RCS quads on booms. No fenders, turrets or truck read, and the palette stayed gold. | |
| Odd Job | r5b | The faction block's mechanism language adds nothing, so a livery-only block is enough. | Against r5a, the Ewan Hart block is cut to one livery sentence. | Held as well as r5a, arguably better. A warm gold beetle with green trim and a lamp-eyes-and-grille face, unarmed. | |
| Dine and Dash | r5c | Lateral thrust reads when it is a recessed band of flush slots in the flank and the camera looks straight at that flank. | G2. The packs become a band of flush thruster slots along both flanks, described from the camera ("like the gills of a shark"), with a near-side view slightly ahead of the beam. | Partial. The slot band reads as part of the hull, with no packs. A big swept wing grew back at the rear, though, and the Pirate block's grappling arm appeared. The racer donor still pulls aero shapes. | |
| Dine and Dash | r5d | A hull that cannot read as a forward flyer, a flat disc with thrust grilles round its whole rim, makes lateral thrust part of the body. | G2. The Pirate block is cut to livery only. The donor cockpit is sunk into a flat skipping-stone disc of welded plate whose rim is one band of flush grilles, seen from a high three-quarter view. | Held for thrust. One welded disc with grille throats all round the rim, and no wings, fins or packs. The donor racer is lost apart from a nameplate, and it reads a little like a hovercraft. | |
| Key Light | r5e | G2 removes fins across factions, even on Lucent Media. | G2. In the Lucent block, "liberties with vacuum engineering" becomes "still a vacuum hull" and the rear fins become shell lips. The ship prompt has a short sensor mast instead of a tall fin, and adds "no weapons" and "Spotless". | Fins gone. No tail fin, no wings and no turrets. The block's showroom-turntable simile became a literal turntable under the ship, though, and the paint is still weathered. | |
| Key Light | r5f | Block order matters: with the ship prompt first, then the faction block, then the global block, the ship's own shape leads. | Against r5e, order only. | Better than r5e. No fins, a bigger two-row lamp array, stepped shells that read and a plain background. Still weathered, and the drive pod moved to the flank. | |

**Block edits that look like they generalise.** These are candidates to promote into Ship Design Language after the operator's verdicts. Agent readings, not verdicts.

- **Vacuum-hull doctrine in the global block.** It replaces "every fin, blade and wing is a chunky rounded slab". Fins disappeared on both Key Lights and on both Odd Jobs. It lost to a strong donor cue once (r5c's racer grew a wing), so a donor described as a racer may need its own "no wings" line.
- **Weapons only where named.** Together with an explicit "unarmed" in the ship prompt, this removed turrets from all four unarmed renders. "Guns in small turrets" should leave the global block.
- **Faction blocks shrink to livery and register.** r5b's one-sentence Ewan Hart livery did as well as the full block. Shape language in faction blocks (tractor proportions, fenders, a grappling arm, the gaming-mouse layout) leaks onto every hull. It belongs in ship prompts, or in a short optional list of motifs.
- **Lateral thrust as flush grilles or slots in the hull,** never as bolted-on packs. Both Dine and Dash variants read this way. A sentence in G2 ("thrust from nozzles and grilles on whichever faces need to push") may be enough, as long as ship prompts name the faces.
- **No similes that can become props.** "Sits like a sports car on a showroom turntable" rendered a turntable. Faction blocks should describe the ship, not a scene.
- **Ship prompt first, blocks after.** One comparison (r5e against r5f) favoured this order. It needs a second faction before it is adopted.
- **Wear.** Removing the wear clause from G2 did not make Lucent Media spotless, and neither did "Spotless" in the ship prompt. The model's scale-model look is what weathers the paint, so a clean faction needs to say so more strongly, for example "factory-fresh, unmarked paint".

## Round 6: the agent's own lab, first pass

Operator, 2026-10-08, after rounds 4 and 5: "Your judgment is good so far, why don't you iterate by yourself for a few passes. Try stuff, get creative, gather evidence, explore the space." Rounds 6 to 8 are the agent's; every verdict below is the agent's reading, and the operator column is left for her.

Round 6 takes G2 out to four factions and three new ships. Every long prompt uses **G2.1**, which is G2 with four edits: thrusters are "part of the hull's own surface, never separate pods or packs bolted on"; the armour-plate clause goes (it is Zhestokost's, not everyone's); "rendered like a painted studio scale model" becomes "rendered as a crisp studio concept render"; and paint is "exactly as clean or as worn as its maker's description says; where no wear is named, it is factory-new". Faction blocks are cut to livery and register only. Long prompts run ship prompt first, then faction block, then G2.1, then the frame clause on its own. Renders and exact prompts are in `Renders/Bench 4/` (`Dine and Dash r6a`, `r6b`, `Oboz r6c`, `Shepherd r6d`, `Tattletale r6e`, `Party Favors r6f`), FLUX 3 at 4:3 and 2k.

| Ship | Variant | Hypothesis | What changed | Agent observation | Operator verdict |
| --- | --- | --- | --- | --- | --- |
| Dine and Dash | r6a | The racer identity can come from markings and body grammar (needle body, knife-pleat creases, chequered nose, number roundel, "a vacuum racer that never flew in air"), not aero shapes. Lateral thrust as transverse tubes bored through the hull. | G2.1, livery-only Pirate block, ship first; racing livery as the donor's identity; three through-hull thrust tubes. | Racer recovered with no wings or fins: chequered nose, "07" roundels, needle body. The tubes became short cans pointing back along the flank, so thrust half-reads as add-on; a third turret appeared. | |
| Dine and Dash | r6b | A strict side elevation shows lateral thrust, because the defining feature faces the camera. | Against r6a, the frame clause only. | Better on thrust: the three throats face the viewer and read as sideways. Still cans that stand proud of the flank. The profile loses volume. | |
| Oboz | r6c | G2.1 and a paint-only Zhestokost block keep the foundry register on a column ship; ship-first holds on a second faction. | G2.1, livery-only Zhestokost block, ship first; radiator vanes cut; drive pods became bells "sunk into recesses". | Held. Charcoal, oxide-red hatches, block codes, unarmed, no fins. The magazines sit on the deck as crates rather than being the hull's mass, and the "sunk" bells project. | |
| Shepherd | r6d | "Weapons only where named" still delivers a named eight-turret battery; flank thrust as flush grilles reads without pods. | G2.1, livery-only AU block, ship first; stub pods became flush flank grilles. | Held. Chalk white, slate blue, ochre, about eight ring turrets, flush flank grilles. The hull spread into a flat cross and reads slightly like a hover vehicle. | |
| Tattletale | r6e | Clean factions render clean once the scale-model anchor is gone and the faction block says "factory-fresh, spotless, unmarked paint: no dirt, no chips, no scuffs, no weathering". | G2.1, livery-only Finch block with that clause, ship first. | Mostly held: the cleanest render of the bench, faint smudging only, and the ear dish is the largest feature. Two cylindrical drive pods appeared at the stern where no drive was named. | |
| Party Favors | r6f | A short blunt prompt with no blocks at all is enough for a readable Pirate hull. | Everything: 83 words, no global or faction block. | Held, and the most readable hull of the round: chalk-white donor, a hopper heaped with confetti mines, primer, red slash, party-popper marks. Flank bells stand slightly proud. Heavily weathered unasked. | |

**Observations.**

- **Dine and Dash's identity lives in its livery.** Wings were never the racer; the chequer and the number roundel are. With them, the model drew a needle racer and did not grow a single fin. That is the first D&D render with both a racer read and no aero.
- **"Recessed" and "sunk" do not survive.** Asked for tubes bored through the hull or bells sunk into recesses, the model draws cans and bells that stand proud (r6a, r6b, r6c, r6f). Thrust reads as part of the hull only when it is described as slots or grilles cut into a surface (r5c, r5d, r6d).
- **Unnamed thrust defaults to stern pods,** even against the global "never pods" (r6e). The ship prompt has to place thrust, or the global has to say what unplaced thrust looks like.
- **Paint-only faction blocks held on four factions** (Zhestokost, AU, Finch, Pirate). The register came from palette, finish and the ship prompt's shape.
- **Clean paint moved.** The Tattletale is the first clean hull in four rounds. The Pirate and AU renders still weathered from their own blocks, so the global change did not strip wear from factions that ask for it.
- **The short prompt was not worse.** Party Favors at 83 words read as well as any long prompt. The long blocks may matter less than the ship prompt's concept.

**Block edits that look like they generalise** (evidence counts are renders and factions held on, and where they failed):

- **Vacuum-hull doctrine (no wings, fins, vanes, streamlining).** Held on 10 renders across 6 factions (Ewan Hart, Lucent, Pirate, Zhestokost, AU, Finch). Failed once, r5c, with "racer" as the only donor cue; r6a and r6b fixed that by giving the racer its livery.
- **Weapons only where named, plus "unarmed" or "no weapons".** Held on 7 unarmed or partly armed renders across 4 factions (Ewan Hart, Lucent, Zhestokost, Finch). One overshoot: r6a drew three turrets for two.
- **Faction blocks shrink to livery and register.** Held on 6 renders across 5 factions (Ewan Hart r5b, Pirate r5d, r6a, r6b, Zhestokost, AU, Finch).
- **Thrust as slots or grilles cut into a face, never pods or packs.** Held on 4 renders across 3 factions (Pirate r5c, r5d, AU r6d, partly Pirate r6b). Failed where the prompt said tubes, bells or "sunk" (r6a, r6c, r6f), and where thrust was not placed (r6e).
- **Factory-new by default, wear only where the faction names it.** Held on 1 clean faction (Finch r6e); wear kept on 3 that ask for it (Pirate, AU, Zhestokost). Needs a Lucent test.
- **Ship prompt first.** Used on 5 renders across 4 factions with no failure, but with no block-first comparison except r5e against r5f (Lucent).
- **No similes that can become props.** One instance (r5e's turntable). Untested since.

## Round 7: order, clean paint, short against long, and views

Round 7 uses **G2.2**, which rewrites G2.1's thrust sentence: thrusters are "cut into the hull's own surface with their mouths flush, never cans, pods or packs that stand out from it; where the description places no thrust, the ship shows only small flush ports." One render (Shepherd r7b) keeps G2.1 so that it differs from r6d by order alone. Renders and exact prompts are in `Renders/Bench 4/` (`Key Light r7a`, `Shepherd r7b`, `Dine and Dash r7c`, `r7d`, `Ghost Fare r7e`, `Glushitel r7f`).

| Ship | Variant | Hypothesis | What changed | Agent observation | Operator verdict |
| --- | --- | --- | --- | --- | --- |
| Key Light | r7a | A livery-only Lucent block with "factory-fresh, showroom-clean, unmarked paint" renders clean; does spectacle survive without the gaming-mouse layout? | G2.2; Lucent block cut to livery and register with the clean clause; ship first; belly pod became flush stern slots. | Partial. Less worn than r5e and r5f, still scuffed. No fins. Spectacle thinned: a boxy van with a lamp face, only the blade prongs left of the mouse. | |
| Shepherd | r7b | Global-first order undoes what r6d gained from ship-first. | Against r6d, order only. | Chunkier mass, heavier wear, and a protruding round thruster can where r6d drew flush grilles. Ship-first honoured the thrust wording better. | |
| Dine and Dash | r7c | The donor's own knife-pleat creases cut open into thruster slots make lateral thrust part of the racer. | G2.2; slots in every flank crease; "exactly two" turrets; beam-forward three-quarter view. | Best D&D yet for integration: chequered needle racer, flank ribbed with slots, no wings, fins or packs. The slots read as gills more than thrusters, wear swamps the livery, and three turrets again. | |
| Dine and Dash | r7d | The short blunt prompt that worked for Party Favors works here. | 77 words, no blocks. | Failed on vacuum: a tall dorsal fin and rows of protruding bells, close to the rejected packs. Strongest racer read and the right turret count. | |
| Ghost Fare | r7e | Material-first (opening on matte graphite and grazing light) gives a dark faction its look; G2.2 keeps an undriven stern clean. | G2.2; livery-only Adrasteia block with "factory-fresh, clean and cold"; material sentence before the ship's name; "one plain facet with no drive nozzle". | Material read strong: a low faceted graphite wedge. Two drive nozzles appeared at the stern anyway, the facet edges are scuffed silver, and the hold lid does not read. | |
| Glushitel | r7f | A plan view shows a point-defence ship's coverage, its role, better than the default view. | G2.2; livery-only Zhestokost block; plan view from directly above. | Held strongly: six turrets at shoulders and corners, the red magazine at the centre with trunks to every turret. A role sheet to pair with a three-quarter view; it hides height. | |

**Observations.**

- **Ship-first has its second comparison.** Shepherd r6d against r7b agrees with Key Light r5e against r5f: with the ship prompt first, the ship's specific instructions (here the flush grilles) win more often. Block-first gave a sturdier mass once, so the order is a lever on specificity, not on quality overall.
- **Short prompts are safe only for donors that do not pull aero.** Party Favors (an ore hauler) read at 83 words; Dine and Dash (a racer) grew a fin at 77. The long vacuum doctrine is what holds an aero-prone donor down. Short prompts keep their virtue for identity: both carried their concept more sharply than the long versions.
- **Unplaced or denied stern thrust still renders nozzles** (r6e, r7e), whatever the global says. The model's default is strong enough that a ship prompt has to give the stern a different job, not merely deny it a drive.
- **Clean paint is half solved.** Finch rendered clean in r6e; Lucent and Adrasteia did not in round 7. Both got "factory-fresh" in the faction block, after the ship prompt. The next test puts the clean statement at the very front.
- **Faction shape motifs matter for Lucent.** Cutting the gaming-mouse layout made Key Light generic. Serious factions survived livery-only blocks; spectacle did not. The motifs need to live somewhere, probably in Lucent ship prompts as a short motif list.
- **Plan views show coverage roles.** Glushitel's plan view is the clearest role read in the bench.
- **Turret counts drift upward** on the racer (r6a, r7c). "Exactly two" did not help.

**Block edits that look like they generalise** (updated):

- **Vacuum-hull doctrine.** Held on 15 long-prompt renders across 7 factions (Ewan Hart, Lucent, Pirate, Zhestokost, AU, Finch, Adrasteia). Failed on r5c (racer cue alone) and on the short r7d, which left the doctrine out.
- **Weapons only where named, with "unarmed" or "no weapons".** Held on 10 renders across 5 factions for unarmed hulls. Overshoots named counts on the racer (r6a, r7c).
- **Faction blocks shrink to livery and register.** Held on 10 renders across 6 factions for serious, Pirate and Ewan Hart registers. Failed for Lucent spectacle (r7a): the shape motifs carry that register.
- **Thrust as slots or grilles cut into a face.** Held on 6 renders across 4 factions (r5c, r5d, r6d, r7c, r7f, partly r6b). Failed when worded as tubes, bells or "sunk" (r6a, r6c, r6f), in a short prompt (r7d), and in global-first order (r7b).
- **The stern needs a job.** Denying a drive did not remove one on 2 of 2 tries (r6e, r7e).
- **Factory-new by default.** Clean on 1 of 3 clean factions (Finch held; Lucent and Adrasteia scuffed). Wear kept on all 4 factions that ask for it.
- **Ship prompt first.** Two A/B pairs (Lucent, AU), both favouring it; used on 11 renders across 7 factions with no failure attributed to it.
- **Plan view for coverage roles.** One render (Zhestokost). Candidate.
- **Racer identity from livery, not aero.** Three renders (r6a, r6b, r7c), one ship. Candidate.

## Round 8: G3, clean-first, motifs in the ship prompt, cute and cursed

Every render uses **G3**, which is G2.1 with two edits: the hull "never flies through air or drives on ground", so wheels and tracks join the banned list, and thrust comes from "slots and grilles cut into" the faces that push, with "no thruster stands out from the hull as a can, bell, pod or pack". All six run ship first. Renders and exact prompts are in `Renders/Bench 4/` (`Key Light r8a`, `Dine and Dash r8b`, `Rake r8c`, `Finders Keepers r8d`, `Odd Job r8e`, `Oboz r8f`).

| Ship | Variant | Hypothesis | What changed | Agent observation | Operator verdict |
| --- | --- | --- | --- | --- | --- |
| Key Light | r8a | Clean paint holds when the clean statement opens the prompt; spectacle returns when the gaming-mouse motifs live in the ship prompt. | G3; the prompt opens "Brand-new and showroom-clean, never flown…"; mouse layout moved into the ship prompt; Lucent block livery-only. | Best Key Light. Layered mouse shells, a lavender side rest, cobalt prongs, a lamp-grid face, no fins. The cleanest Lucent yet, with faint edge scuffs left. | |
| Dine and Dash | r8b | Slots read as thrust when each is a throat with turning vanes and a sideways soot fan; counts hold when each turret is placed; a softer Pirate wear line keeps the livery legible. | G3; Pirate block ends "worn, but the donor's markings stay legible"; turrets placed behind the canopy and under the chin, "there are no others". | Best D&D. Chequered needle racer, "07" roundel, one long louvred band of sideways thrust cut into the flank, no wings, fins or packs, exactly two turrets. Plainer than a couture racer; a small can under the belly. | |
| Rake | r8c | G3 and a livery-only AU block carry a tool-bow hull; thrust as grilles cut into the rear flanks. | G3; livery-only AU block; grilles in the rear lower flanks; flat stern with a collar. | Held for role: the numbered comb is the largest shape, with blast plate, cab turret and racked tines. Failed on thrust: the grilles grew into two pod-like sponsons. | |
| Finders Keepers | r8d | "Cute and cursed" can be stated outright; "no wheels or tracks" keeps a farm donor off the ground. | G3; "Cute and cursed" and a toothed maw grin in the ship prompt. | Held on register: a round harvest-gold donor grinning with a toothed maw, crates under a net, magnet marks. No wheels, but spindly landing legs. The single-eye emitter does not read. | |
| Odd Job | r8e | A beetle's mass and face turns Ewan Hart whimsy up further than r5b. | G3; ship first; beetle mass and face; RCS quads on "four short stubby legs". | Failed. A walking creature on four feet: a costume and a ground read. r5b stays the best Odd Job. | |
| Oboz | r8f | An archetype metaphor that makes the cargo the hull ("built like a cast-iron bandolier" of magazine segments) integrates the magazines without becoming a prop. | G3; livery-only Zhestokost block; three magazine segments are the hull, hatches flush, grilles at the lower corners. | Held for integration: the segments are the hull and no bandolier prop appeared. Reads a little like an armoured rail wagon, and no thrust direction shows. | |

**Observations.**

- **Motifs belong to the ship prompt.** Lucent's register is its shapes. With the mouse layout in the ship prompt, Key Light got its spectacle back while the faction block stayed livery-only.
- **Clean-first works better than clean-last.** Opening the prompt with the clean statement gave the cleanest Lucent of the bench. It is not spotless; one more lever is still needed.
- **Dine and Dash is solved enough to show.** The identity is the livery, the speed is a band of sideways thrust cut into the hull, and nothing is bolted on.
- **Limbs make creatures.** "Legs" on Odd Job and the landing legs on Finders Keepers both pulled a ground read, and the beetle turned into a costume. The register rule ("an animal may lend its mass and its face, not its costume") is right, and "legs" is the word that breaks it.
- **Slots still grow into pods** when the slots sit on a low rear flank (Rake). On a long flank band (D&D) they held.
- **Metaphors for mass are safe; metaphors for scenes are not.** "Built like a bandolier" shaped the hull without becoming a prop, where r5e's "on a showroom turntable" became one.
- **Stating the register works for Pirates.** "Cute and cursed" in plain words landed on Finders Keepers.

**Block edits that look like they generalise** (final count after round 8; renders, ships and factions held on, and failures):

- **Vacuum-hull doctrine (no wings, fins, vanes or streamlining).** Held on 21 of 22 long-prompt renders, 10 ships, 7 factions (Ewan Hart, Lucent, Pirate, Zhestokost, AU, Finch, Adrasteia). The one failure is explained: r5c, a racer cue with no other identity, fixed by giving the racer its livery (r6a onward). The short r7d, which left the doctrine out, grew a fin. Ground cues are a separate problem: the round 8 wheels-and-tracks clause did not stop legs (r8d, r8e).
- **Weapons only where named, with "unarmed" or "no weapons" stated.** Unarmed hulls stayed unarmed on 10 renders, 4 ships, 4 factions (Odd Job, Key Light, Oboz, Ghost Fare; Ewan Hart, Lucent, Zhestokost, Adrasteia). Single named weapons stayed single on Tattletale (Finch) and Finders Keepers (Pirate), and Glushitel's six stayed six. Named counts drifted up twice on one ship (r6a, r7c), explained by unplaced turrets: they held once each turret was given a position (r8b).
- **Faction blocks are livery and register only; shape motifs go in the ship prompt.** Held on 18 renders, 10 ships, 7 factions. One failure, explained and repaired: Lucent lost its spectacle with the motifs cut (r7a) and regained it with the motifs in the ship prompt (r8a).
- **Wear lives in the faction block, not the global.** With no wear in the global, wear stayed on every faction that names it (Pirate, AU, Zhestokost, Ewan Hart: 16 renders, 7 ships). The other half, clean factions coming out clean, held on Finch (r6e), mostly on Lucent when stated first (r8a), and failed on Adrasteia (r7e) and Lucent stated last (r7a).
- **Thrust as slots or grilles cut into a face.** Held on 7 renders, 6 ships, 4 factions (r5c, r5d, r6d, r7c, r7f, r8a, r8b). Failed on tubes, bells or "sunk" wording (r6a, r6c, r6f), the short r7d, global-first r7b, and unexplained on r8c, where cut grilles grew into sponsons. Candidate.
- **Ship prompt first.** Two A/B pairs (Lucent r5e/r5f, AU r6d/r7b) favour it; used on 17 renders across 8 factions with no failure attributed to it. Candidate until a third pair.
- **Clean statement first, for clean factions.** One render (r8a). Candidate.
- **Racer identity from livery, not aero.** Four renders, one ship. Candidate.
- **The stern needs a job.** Denying a drive failed on 2 of 2 (r6e, r7e). Candidate.
- **Plan view for coverage roles.** One render (r7f). Candidate.
- **Short prompts for donors that do not pull aero.** One success (r6f), one failure on a racer (r7d). Candidate.
- **No legs.** Two renders went to ground on legs (r8d, r8e). Candidate for the global block, untested.
- **Metaphors for mass, never for scenes.** One prop failure (r5e turntable), one safe mass metaphor (r8f bandolier), one costume failure (r8e beetle with legs). Candidate.

## Lab notes after round 8

Eighteen renders in rounds 6 to 8. These are the agent's readings, pending the operator's verdicts.

**G3, the current best global block** (as rendered in round 8; compose it after the ship prompt and faction block, then the frame clause on its own):

```text
Concept art of a small working spacecraft from the Aetheria universe, built by a named manufacturer for one pilot or a small crew; a human-sized hatch, a handhold rail and a cockpit window no wider than a person set its scale. It is a vacuum hull: it never flies through air or drives on ground, so it has no wings, fins, tailplanes, vanes, airfoils, streamlining, wheels or tracks of any kind. It moves only by rocket thrust from slots and grilles cut into whichever faces of the hull need to push, the stern, the flanks, the belly or the bow, each opening the way its exhaust would leave; no thruster stands out from the hull as a can, bell, pod or pack. Its silhouette comes from its job: the working equipment is the largest shape and the hull is built around it. Hatches, recessed round sensor apertures and a docking collar are legible. It carries weapons only where its description names them. A stencilled registry number and a maker's plate sit beside the cockpit; engines are cold. The body is thick and closed with rounded edges, every part swelling out of the main mass through wide smooth fillets, so the outline reads as one solid silhouette. All surfaces are matte and opaque, painted metal, ceramic and rubberized composite, with interior light shown only through small round opaque ports. Its paint is exactly as clean or as worn as its maker's description says; where no wear is named, it is factory-new. Rendered as a crisp studio concept render.
```

One untested amendment is the next thing to try: add "legs, skids or feet" to the banned list.

**Per-faction block edits.** Each block becomes one livery-and-register sentence or two: register, finish, palette with where each colour lives, markings, and wear. The exact texts used are in the round 6 to 8 `.md` files.

- **Zhestokost:** drop the stove, turret and ammunition-architecture shape language; keep charcoal, iron gray, oxide-red hatches, cream stencils, block codes, soot and chipped enamel. The register held on three renders without the shapes.
- **Aeronautics Unlimited:** drop the compass-and-ruler and mule shapes; keep chalk white, slate blue, bare aluminium, ochre safety panels, black lettering and mineral dust.
- **Pirate Coalition:** drop the grappling arm and the additions list (they leak onto every hull); keep donor paint, primer, welds, overpainted logos and crossed-out serials. End with "worn, but the donor's markings stay legible" so the donor's identity survives. Each ship prompt picks its emoji and accent colour, as before.
- **Finch Cybernetics and Adrasteia:** livery only, ending in an explicit factory-fresh clause. Finch rendered clean; Adrasteia did not.
- **Lucent Media:** livery only, with the clean clause, and the gaming-mouse layout moved into every Lucent ship prompt as a motif sentence. Open Lucent prompts with the clean statement. Drop the turntable simile.
- **Ewan Hart:** livery and register ("whimsy turned up") only; no tractor proportions, fenders or hitches. Whimsy comes from a face in the ship prompt, never from legs.

**Best render per ship so far** (the agent's pick):

| Ship | Best render | Why |
| --- | --- | --- |
| Dine and Dash | `Renders/Bench 4/Dine and Dash r8b.png` | Racer by livery, sideways thrust cut into the hull, nothing bolted on. |
| Odd Job | `Renders/Bench 4/Odd Job r5b.png` | Still the cleanest spacecraft read with a face. |
| Key Light | `Renders/Bench 4/Key Light r8a.png` | Spectacle back, cleanest paint, no fins. |
| Oboz | `Renders/Bench 4/Oboz r8f.png` | Magazines are the hull. r6c reads more as a ship if integration matters less. |
| Glushitel | `Renders/Bench 4/Glushitel r7f.png` | Coverage role at a glance (plan view). |
| Shepherd | `Renders/Bench 4/Shepherd r6d.png` | Turret battery and flush flank grilles. |
| Rake | `Renders/Bench 4/Rake r8c.png` | The comb is the ship; the thrust sponsons need another pass. |
| Party Favors | `Renders/Bench 4/Party Favors r6f.png` | The most readable hull of the lab, from 83 words. |
| Finders Keepers | `Renders/Bench 4/Finders Keepers r8d.png` | Cute and cursed; the legs need to go. |
| Tattletale | `Renders/Bench 4/Tattletale r6e.png` | Clean, the ear is the ship; the stern pods need a job. |
| Ghost Fare | `Renders/Bench 4/Ghost Fare r7e.png` | Only render; material right, stern and wear wrong. |

**Promoted to Ship Design Language** (held on at least three ships across at least two factions with no unexplained failure): the vacuum-hull doctrine; weapons only where named; faction blocks as livery and register, with shape motifs in ship prompts; wear in the faction block. Everything else above stays a candidate here.

---

## For the Operator

These are readings this bench made so that it could be written. Overrule any of them.

1. **Shchit is a facing-shield escort**, per `aetheria-release:ruling:facing-shields-wanted`. The prompt draws the shield as a projector frame on the bow face only, with armour everywhere else, and never as a bubble, so the render does not depend on how the arc mechanism is ruled. The Nakovalnya's prow could carry the same frame; it is left as armour here so the boss's three ways in stay readable, and adding one would make "strip from the quarter" the only safe opening.
2. **Zhestokost has no player-usable hull.** It is the antagonist, and the demo needs at most one per faction, not one each. Off the Clock, the deserter, is where one could come from later.
3. **Several demo roles have no catalogue concept:** the Inspektor's hail, the Green Room's audience role, Dine and Dash's speed, and the Rockhound miner. Each entry links the nearest concept and the doctrine instead. Speed Demon and Miner may earn entries in Ship Play Concepts once the demo plays them.
4. **Pirate crews are given fresh accent colours and emojis** (orange, purple, red, cyan, electric blue, magenta), so that no two demo crews share a mark with Bench 3's Welcome Mat (teal) or Jumble Sale (yellow).
5. **Pit Stop's donor is a stolen Zhestokost tender.** That makes the Pirates' depot the column's own anchor, which seemed worth the story. A neutral donor works just as well.

## Open Questions

1. **Freelancers' home in faction play.** An "independent" allegiance, contract roles on top of a brand faction, or something else. See the design note under Freelancers.
2. **Do allied mines spare the player?** Pirate mines are triggered only by hostiles, and the player is allied with the Pirates, so Party Favors fields are safe to fly through. That reads as intended, but the bench does not assume it.
3. **Can collectors take mines?** Mines are free-floating bodies like loot. Whether a Finders Keepers, an Odd Job or a tractor beam can pick one up is not decided, and no entry depends on it.
