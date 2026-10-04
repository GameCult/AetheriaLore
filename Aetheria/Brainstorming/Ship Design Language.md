---
title: Ship Design Language
description: "A global Aetheria prompt block and one design-language block per faction, composed in front of ship image prompts so that a faction name means something concrete to the image model."
---

# Ship Design Language

> **Status: brainstorming, Imagination pass of 2026-10-03.** Not canon and not adopted. This note feeds the prompts in [[Brainstorming/Ship Prompt Bench|Ship Prompt Bench]]. Its sources are the craft rules in [[Brainstorming/Faction Ship Concept Prompts|Faction Ship Concept Prompts]], the looks in [[Brainstorming/Faction Flavor and Visual Identity|Faction Flavor and Visual Identity]], the doctrines in [[Game Design/Faction Play|Faction Play]], [[Game Design/Visual and Sensory Direction|Visual and Sensory Direction]], and [[Game Design/Design Pillars|Design Pillars]].

Operator brief, 2026-10-03: "I'd like a doc with a flavor packed design language prompt for each faction, so that it means something when the ship prompt says it's an AU ship, for example. I also want one global prompt section specifying global Aetheria design constraints to prepend the image prompt with."

## Composition Order

Every ship image prompt is built from three blocks, pasted in this order, with a blank line between them:

1. **The global Aetheria block** below. It is the same for every ship.
2. **The faction block** for the ship's builder.
3. **The ship prompt**, for example an attempt from the bench ("Design the Quartermaster, …"), which ends with the standard frame clause.

The ship prompt comes last and is the most specific, so it wins any conflict. If a ship prompt assigns its own colours to named parts, those placements stand, and the faction block's palette tells the model what the colours mean. The global block repeats the standard frame clause at its end. Bench prompts end with the same clause, so the view is stated at both ends of the prompt. That repetition is deliberate: the clause is identical, so it reinforces rather than conflicts. A composed prompt runs to roughly 450 to 550 words. GPT-class image models read all of it. Tools with short prompt limits need the faction block trimmed to its first three sentences.

**Thrusters and radiators are left out.** The operator adds thruster ports, attitude jets and radiators herself. None of the blocks below asks for them, and none forbids them. Some bench prompts still name nozzles or radiator plates; edit those per prompt. The global block does not reserve flat areas for them either: a "leave clean flat panels" instruction would push every faction toward slab-sided hulls and flatten the very silhouettes the faction blocks are trying to separate. One exception touches this boundary. The Cryonix folded emitters are that faction's heat organ, and the block treats them as a silhouette feature, not as radiators. Treat them as radiators or not, as you prefer.

---

## The Global Aetheria Block

```text
Concept art of a small working spacecraft from the Aetheria universe, made by a named manufacturer for one pilot or a small crew, with a human-sized hatch, a handhold rail and a cockpit window no wider than a person setting its scale against the hull. It is a material argument for what it does: magazines sit behind square hatches, sensors in recessed round apertures, guns in small turrets on thick armoured mounts, cargo at a heavy docking collar, and its protection is thick layered armour plate with bolted seams. It is owned, insured and repaired: scuffed handholds and hatch edges, one replaced panel in a slightly fresher shade, a stencilled registry number and a maker's plate beside the cockpit, engines cold and at rest. The whole ship is one continuous cast body, thick and closed, with rounded edges, mirror-symmetric along its long axis; every fin, blade and wing is a chunky rounded slab, and every part swells out of the main mass through wide smooth fillets so the outline is one solid silhouette. All surfaces are matte and opaque, painted metal, ceramic and rubberized composite, rendered like a painted studio scale model, with interior light shown only through small round opaque ports and painted bands. One complete ship, centered with clear margin around it, three-quarter front view from slightly above showing the dorsal surface and one side; moderate lens; plain seamless light gray background; soft key light with gentle form shadows; matte finishes throughout.
```

**Why it says what it says.**

- *Scale cues.* A human-sized hatch, a handhold rail and a person-wide window set the image model's level of detail: a few large, readable features sized to a person's hands rather than the dense greeble of a capital ship or the smoothness of a toy. They are not a claim about in-game scale. [[Game Design/Design Pillars|Design Pillars]] states that scale in Aetheria is meaningless and a ship can read as big as a planet.
- *Register.* The global block is silent on whimsy and vacuum plausibility, because both vary by faction. Each faction block carries its own register in its text (see Registers below).
- *Material argument.* [[Game Design/Design Pillars|Design Pillars]] wants ships that say who built them and what they cost. The second sentence gives each function a visible housing, so that hardpoints and service access read as gear. Protection is armour, because pre-Elysium combat uses armour, heat and point defence rather than shields. The block names armour positively instead of forbidding force fields (guideline 5).
- *Ownership and wear.* "Owned, insured and repaired" is the setting's economic grain made visible: a registry, a maker's plate, a replaced panel. Engines "cold and at rest" keeps exhaust plumes and flame trails out of the image without naming them.
- *Image-to-3D craft.* The fourth and fifth sentences fold guidelines 2, 3 and 6 into positive description: one mass, thick, closed, symmetric, fillets in place of gaps, matte, opaque, and light only through small ports. "Painted studio scale model" is one concrete anchor for all of it, because a scale model is chunky, closed, matte and evenly lit.
- *Frame.* This is the standard frame clause, verbatim.
- *What it leaves out.* Thrusters, attitude ports and radiators are the operator's to place. Palette and silhouette belong to the faction. "Futuristic", "sleek" and "gritty" are left out because they draw nothing (guideline 7).

---

## Registers

Operator rulings of 2026-10-04, after the first twelve bench renders. Two traits vary by faction: how much whimsy the hulls carry, and how far they bend vacuum plausibility. [[Game Design/Design Pillars|Design Pillars]] holds the stance behind both: Aetheria is abstract, ships may carry terrestrial affordances, and vacuum faithfulness is a per-faction trait. Each faction block below states its register in the text the image model reads, so that a composed prompt carries it.

| Register | Factions | Hulls |
| --- | --- | --- |
| High whimsy | Corriedales, Miss Terri's, Framgång | Mascots, toys, candy and lifestyle objects. Literal cute animals are welcome. Hulls may assume an up, stand on imagined ground, or ignore vacuum engineering. |
| Whimsy turned up | Lightsail Express, Ewan Hart, Cetacean Navigators | Serious machines with one warm, friendly character trait. A whole animal may lend its mass and its face, not its costume. |
| Spectacle | Lucent Media | Built to be filmed, with liberties taken for the camera. Its station concept hangs buildings under plazas. Not whimsical in the Corriedales sense. |
| Serious | Zhestokost, Aeronautics Unlimited, Finch Cybernetics, Rossum & Douglas, NiteLife Energy, Alakrita, Adrasteia, Sol Dominion, Cryonix, Aya Collective, Megiddo | Function visible in the hull and plausible vacuum design. Animals and objects lend proportion and mass distribution only. |
| Pirate | Pirate Coalition | Wild and maximalist: a stolen donor hull piled with additions. |
| Reserved | Death Monkey Explosives | Serious and restrained, with one loud element. Menace through precision. DME sets itself apart from the Pirates by authorship: it builds its own intact hull. |

Lucent is placed as a spectacle faction from the operator's description of the Jewel station, and the operator confirmed the placement on 2026-10-04. Breakup Song, a whole rhinoceros in DME black, was too cute for DME: the register belongs to the faction, and an intact animal hull in a serious faction reads as a plush toy in costume.

---

## Faction Blocks

Each block opens with the faction's name and premise, then covers silhouette and shape grammar, materials and finish, palette with where each colour lives, markings and lights, wear, and attitude as an object you can picture. Order follows [[Game Design/Faction Play|Faction Play]].

### Zhestokost

```text
A Zhestokost ship, poured in a state foundry: a piece of the arsenal that learned to fly. The register is serious: every feature is plausible vacuum engineering with a visible job. It sits low and broad like a cast-iron stove, built from stepped rectangular masses with deep seams between them, thick overlapping armour plates around recessed machinery, and square hatches, towing lugs and bolt rows repeated down the hull like a production line. Its guns are short, thick barrels in squat boxy turrets, and its ammunition feeds and magazine hatches are the largest features on the body. Finish is rough sand-cast iron under baked-on industrial enamel. Charcoal on the main armour, iron gray on the underside and machinery, dull oxide red on magazine hatches and ammunition doors, small cream stencilled serial numbers and safety chevrons on every plate, and large block-letter unit codes on the flank. Soot around every gun mouth, chipped enamel at hatch edges, one bolted replacement plate in fresher charcoal. It looks like a square-shouldered forklift of a warship that keeps firing until its tender calls it home.
```

**Draws from:** foundry doctrine and the column-and-tender quirk; Faction Flavor's stepped masses and block lettering; Faction Play's "low, broad, stepped hull; charcoal and oxide red."
**Do:** let ammunition be architecture. Magazine hatches and feeds should dominate the way windows dominate a building.
**Don't:** add red stars, flags or political symbols. Faction Flavor wants the identity to survive in silhouette alone.

### Miss Terri's Sugariffic Snack Company

```text
A Miss Terri's Sugariffic Snack Company ship: a candy dispenser that sprays corrosives. The register is high whimsy: the hull is as playful and impractical as the sweets it imitates, and owes nothing to vacuum engineering. Its capsule-shaped body is stacked from rounded layers like a layered dessert, with fat bulbous reservoirs, twist caps, and piping-tip and squeeze-bottle nozzles wherever the weapons are, and thick ribbed hoses moulded flush into the body. Finish is satin candy enamel with painted foil-seal panels, and the contents show only as opaque bands of syrup colour behind small round sight ports. Strawberry pink on the main body, mint on caps and nozzles, cream on the layer bands, cherry red on the hazard collar around every nozzle, bubbly white lettering, a serving-size panel and a winking cartoon mascot decal near the cockpit beside yellow-and-black pressure-rating stickers. Small brown corrosion stains run back from each nozzle tip. It looks like a lunchbox toy and handles like a crop duster full of acid.
```

**Draws from:** "everything is a treat until it starts working"; Faction Flavor's capsules, twist caps and squeeze nozzles; the spray-and-corrode swarm quirk.
**Do:** keep a real pressure fitting next to every cute thing. The joke is the hazmat label on the lollipop.
**Don't:** say jelly, gummy or translucent. Faction Flavor's jelly reservoir walls become painted syrup bands behind ports here (guideline 6).

### Lucent Media

```text
A Lucent Media ship: broadcast equipment and a trophy at once, built to be filmed. The register is spectacle: it takes liberties with vacuum engineering wherever the shot improves. Its layout follows a high-end gaming mouse: a compact central chassis wrapped in thick, overlapping curved shells like palm covers and side rests, long paired blade-shaped prongs sweeping forward over the nose, small fins flaring up and out at the rear, ribbed grip panels, knurled wheel-shaped rotary mounts and recessed intake grilles. Every shell is a thick rounded slab fused to the body by a wide fillet, offset in steps so each layer reads. Colour follows the components: golden yellow and white on the main shells, pale lavender on the secondary shells, cobalt blue on the forward blades, vivid red-orange on the blade tips, dark navy in the recesses between layers. Satin enamel shells and matte rubberized ribbed inserts. A camera-lens sensor dome on the nose, a cluster of round stage lights set into the brow, a sponsor logo and a show title on the flank. Spotless and freshly detailed, it sits like a sports car on a showroom turntable.
```

**Draws from:** "every fight is content"; the original Lucent concept and the gaming-mouse vocabulary in Faction Flavor; the Headliner, which worked.
**Do:** let colour follow components so that each layer reads as a separate part.
**Don't:** ask for deep gaps between shells or gloss enamel. Faction Flavor has both, and both are Tripo risks, so the block says fused, offset and satin instead.

### Corriedales

```text
A Corriedales ship: a mascot that came with a real gun. The register is high whimsy: the hull is a whole, cute, plump animal or beloved character and owes nothing to vacuum engineering. The body is one round, friendly animal form with a big head fused into it, two large round optics set where the eyes would be, like a mascot's face, short thick limbs or flippers that carry the light gun barrels at their tips like wands, drive nozzles where the feet or tail would be, and a soft scalloped bumper ringing the belly. Finish is enamel and moulded shell over visibly serious hardware. Sky blue on the main body, butter yellow on the belly and bumper, coral on the limbs and barrels, lavender on the optic rims, a character portrait decal, a collectible series number on the cheek and a cheerful instruction label beside the hatch. Scuffs at the bumper and limb edges show dark machinery under the toy shell. It looks like a beloved character come to life, and its gun is real.
```

**Draws from:** [[Worldbuilding/Pre-Elysium/Factions/Powers/Minor/Corriedales|Corriedales]], Lucent's family-entertainment brand, and its Faction Flavor identity: rounded toy proportions, wand-like barrels, scalloped shells, character faces, collectible series numbers, and edge wear that shows the serious equipment under the toy shell. The first bench round (2026-10-04) showed the animal hulls Raft and Shellback landing as hits with the operator's husband, and the Gentle Giant as the ship that would spread joy wherever it flies.
**Do:** let the animal be whole and cute. Corriedales is the one faction that hosts mascot hulls, and the toy shell over real hardware is the faction's joke.
**Don't:** carry this block into another faction's prompt. A whole cute animal is the register of Corriedales, Miss Terri's and Framgång. Elsewhere the animal lends mass and story only.

### Aeronautics Unlimited

```text
An Aeronautics Unlimited ship: frontier work gear from the company that builds settlements and bills for them later. The register is serious: every feature is plausible vacuum engineering with a visible job. It is assembled from geometry anyone could draft with a compass and a ruler, cylinders, rounded rectangles, simple arcs and compact wedges, balanced like a well-packed mule or a compact excavator. Function is fitted rather than styled: tool sockets, lifting eyes, clamp rails, numbered removable module bays and a short survey sensor mast. Finish is matte powder coat over bare brushed aluminium. Chalk white on the main body, slate blue on the cockpit section and module doors, bare aluminium on clamps and rails, small ochre safety panels around lifting points and tool sockets, with concise black technical lettering, stencilled bay numbers and a faint survey grid on the dorsal plating. Pale mineral dust packs every crease and abrasion scuffs the lower edges, the marks of long shifts in asteroid fields. It looks like rental equipment that has paid for itself three times over.
```

**Draws from:** "crews build the frontier; the company decides whether it was worth it"; Faction Flavor's plain geometry, tool sockets and mineral dust; the bench thesis of work gear and pack animals.
**Do:** give the ship an obvious job by showing where tools attach.
**Don't:** add decorative flourishes or sculpted fins. AU's dignity is that nothing on it is for show.

### Finch Cybernetics

```text
A Finch Cybernetics ship: a sense organ given a hull, made by a company that sells noticing. The register is serious: every feature is plausible vacuum engineering with a visible job. It is one continuous tapered form with the smooth fit of a prosthetic joint or a bird's skull, with soft transitions between sections, flush round sensor apertures set into the surface like pupils, and hairline recessed seams where panels meet, like the seams of a medical implant. Its sensors are its largest features: a broad shallow dish recessed into the flank like an ear, and a row of dark round lens apertures along the brow. Finish is pearl-white ceramic and satin titanium. Pearl white over the main body, satin titanium on joints and mounts, smoky gray matte on every aperture, tiny celadon-green indicator dots in a short row beside each aperture, and small gray technician labels. It is spotless and quiet, a medical device that is watching you back, more attentive than threatening.
```

**Draws from:** "notice first; service is priced by coverage"; the shadowing track-relay quirk; Faction Flavor's joints, sense organs and celadon indicators; Quiet Sense, which worked.
**Do:** make the sensors larger than the guns. Finch's weapon is your position, shared with everyone else.
**Don't:** say organic, flesh, eye or tentacle. Faction Flavor forbids body horror, and "organic" alone invites it.

### Rossum & Douglas

```text
A Rossum & Douglas ship: the flying wedge, aggressively average. The register is serious: every feature is plausible vacuum engineering with a visible job. It is one broad, shallow wedge narrowing to a blunt nose and ending in a wide flat rear face, with a thicker central section, large flat dorsal planes and beveled perimeter edges carrying almost the entire shape. Detail stays flush and repetitive: identical rectangular access panels, small recessed square windows, shallow regular vent grilles, and missile hatches set flush into the dorsal plane. Finish is satin industrial coating. Muted blue-gray on the main hull, light gray on the belly and bevels, navy around the cockpit, one broad off-white stripe from nose to tail, small amber indicator lights, a model number and modest corporate lettering. Ordinary scuffs and one replacement panel. It looks like the vehicle that won a procurement tender on price: a photocopier with a missile rack.
```

**Draws from:** "a measurable improvement, guaranteed (conditions apply)"; Faction Flavor's flying wedge and its jab at wedge-heavy space games; the guided-missile picket quirk.
**Do:** let the ship prompt vary only the wedge's length, width and thickness. A lineup should look like a brochure of minor variants.
**Don't:** ask for anything interesting. The dullness is the identity, and one elegant fin ruins the joke.

### NiteLife Energy

```text
A NiteLife Energy ship: a premium home appliance scaled up to infrastructure, built around a cartridge only NiteLife sells. The register is serious: every feature is plausible vacuum engineering with a visible job. Its body is a set of full, swollen, smooth volumes like a high-end espresso machine or a smart speaker, cut by crisp slots, flat coupling collars and abrupt flat terminations. Its defining feature is a large proprietary reservoir cartridge docked visibly into the hull, its rounded end standing proud of the surface and held by a bright lime release catch. Finish is satin moulded housing with brushed-alloy collars. Satin midnight blue on the main shell, petroleum teal on the cartridge and the service channel, brushed alloy on the collars, lime green on every release catch and latch, warm white light only behind small round opaque status ports, rounded lettering and a bold version badge like a firmware number. Factory clean, with a warranty seal across the cartridge seam. It looks like a device you subscribe to.
```

**Draws from:** "we keep the lights on, and we own the cartridge"; Faction Flavor's appliance finish and docking reservoirs; the station-bound guard quirk.
**Do:** make the cartridge the silhouette, as the bench thesis says. If it reads as a separate object, the faction disappears.
**Don't:** ask for translucent status strips. Faction Flavor has them, and they become small opaque ports here.

### Lightsail Express

```text
A Lightsail Express ship: an honest freight hauler that will not let go of its load. The register is serious machinery with a warm, friendly face, bending vacuum plausibility only for its driver's comforts. It is built like a long-haul truck: a distinct powered cab at the front fused to a long cargo spine, with rectangular cargo containers locked to the spine by heavy clamps, tie-down rails along each container, replaceable corner guards, and a docking collar at every loading point. Finish is enamel on steel, polished bright wherever hands go. Faded fleet blue on the cab and spine, warm cream on the containers, vermilion route stripes along both flanks, stencilled cargo numbers, inspection stickers and company lettering. Scuffed container corners, patched paint, polished handholds, and a warm lit cab window with a small personal pennant hanging beside it. It looks lived in by a driver who has run this route four hundred times and intends to finish it.
```

**Draws from:** "we'll lose our lives before we lose your cargo"; Faction Flavor's cargo spines, cab section and personal decorations.
**Do:** show how it is loaded and unloaded. The clamps are the faction's promise.
**Don't:** let the containers float apart from the spine. "Locked to the spine by heavy clamps" keeps them one mass; if the image separates them, add "fused" to the ship prompt.

### Alakrita

```text
An Alakrita ship: couture speed, spares not included. The register is serious: every feature is plausible vacuum engineering with a visible job. It is a long, low, narrow body with sharp knife-pleat creases running from nose to tail, swept blades and stacked folded fins made as thick lacquered slabs with crisp edges, and engines aligned in one disciplined row, the whole silhouette shaped like a closed folding fan or a racing scull. Finish is deep satin-matte lacquer with precise recessed joints. Ivory lacquer on the main body, wine-red enamel in the crease valleys and under the fins, narrow gold inlay lines tracing every crease, a matte black cockpit panel, and a small inscription plaque with laurel-leaf trim beside the cockpit. Every fastener is recessed and every joint is tight, so a single scratch would show. It looks like a garment that costs more than its pilot's life insurance.
```

**Draws from:** "speed and elegance, spares not included"; Faction Flavor's creases, lacquer, gold inlay and restrained Roman trim; the one-pass, scratch-and-leave quirk.
**Do:** get elegance from many parallel creases on a thick body, as the bench thesis tests.
**Don't:** ask for thin fins, blades or black glass. Thinness is Alakrita's brand and Tripo's first casualty, so everything is a thick lacquered slab.

### Ewan Hart

```text
An Ewan Hart ship: farm machinery working in vacuum, because people need dinner. The register is serious machinery with a goofy, friendly face, bending vacuum plausibility a little for the sake of charm. It has tractor proportions: a broad power-unit housing, rounded fenders over exposed working parts, prominent folding tool arms and implement couplings, heavy tow hitches, and big hinged service covers sized for gloved hands. Finish is thick farm enamel over greasy steel. Faded harvest gold on the main housing and fenders, deep agricultural green on the cab and implements, black rubber hoses along the arms, cream maker plates and large round readable gauges beside the cockpit. Enamel is chipped at every corner, grease darkens the hitches, and a canvas feed sack is strapped to the rear deck. It looks like a machine bought at auction from a cousin that has never missed a harvest.
```

**Draws from:** "people need dinner"; Faction Flavor's tractor proportions, harvest gold and maker plates; its role as the haulers everyone buys from.
**Do:** let the implement show the job: a harvester head, a tow hitch, a grab arm.
**Don't:** ask for wheels or a diesel exhaust stack. Faction Flavor says wheels belong only where there is a surface, and dieselpunk is an influence, not literal exhaust.

### Death Monkey Explosives

```text
A Death Monkey Explosives ship: a demolition crew's own machine, a toolbox built to break a supply chain and keep it broken. The register is serious and reserved: DME builds its own intact, engineered hull, and its menace comes from restraint. It is one hard-edged blackened steel body of heavy slab armour with precise cut lines, heavy braces, a detachable charge-feed section at the rear, and conspicuous break points marked by thin cut lines and big pull handles. Finish is blackened steel in worn satin, with square edge guards at every corner. Almost the whole ship is blackened steel, and the only other colour is acid yellow on the cut lines and break points. The one loud element is the hand-painted white lettering, large and uneven: the ship's name, a lyric fragment, and a tally of stations hit. Wear is twenty years of touring: corner guards rubbed bright, paint scratched at the handles, and a few band stickers on the flank. It looks like a road flight case after twenty years of touring, still sealed, still latched, still on the road.
```

**Draws from:** "break the dependency and make sure it stays broken"; Faction Flavor's break points and lyric lettering; the infrastructure-attack quirk and its overheating cells. DME is the faction the Pirate block must not be confused with: DME authors an intact hull and restrains it, where the Pirates pile additions on a stolen one. Breakup Song (2026-10-04) showed that a whole animal in DME black reads as a plush toy, so DME takes no animal hull.
**Do:** for the polished **cold like my heart** line, replace the wear sentence with "the same restrained black hull, finely finished, the lettering crisp and expensive" and keep the lettering the loudest thing on the ship.
**Don't:** use real lyrics. Name a fake band or leave the lettering as "a lyric fragment" and let the model invent it.

### Adrasteia

```text
An Adrasteia ship: built to be a hole in the background. The register is serious: every feature is plausible vacuum engineering with a visible job. It is a low faceted wedge of broad shallow planes, like a flatfish lying on the seabed or a cut gemstone laid flat, with its parts tucked into one another, its apertures recessed under overhanging facets, and every surface closed; one facet on the side facing the camera is cut differently from its mirror. Finish is dead-matte graphite and black ceramic that drinks light, so the shape reads only where the soft key light grazes a facet edge. Matte graphite on the main facets, black ceramic on the leading edges and recesses, dark indigo on the cockpit panel, and almost no markings except one tiny friendly smiley face stencilled beside the hatch. Clean and cold. It looks like a shadow that has decided to be a ship.
```

**Draws from:** "the best defense is not to need one, and the bill is a consumable"; Running Cold; Faction Flavor's asymmetric facets and its UV smiley; Faction Play's "a hole in the background, then a flare."
**Do:** keep its asymmetry to one facet on the camera side, which satisfies Faction Flavor's asymmetric wedge and guideline 3 at once.
**Don't:** add glowing circuitry or frost. Faction Flavor rules out the first and limits frost to atmospheres.

### Sol Dominion

```text
A Sol Dominion ship: administration as hardware. The register is serious: every feature is plausible vacuum engineering with a visible job. It is built along one strong, straight central spine like the handle of an official stamp, with broad flat armour planes set square to it, identical module bands repeated along its length, flush embedded antenna fields, and a standard docking face that would mate with any Dominion station. Finish is dense, clean ceramic. Pale gray ceramic on the main armour, graphite on the structural bands, desaturated blue on the module bands and registry blocks, small crimson jurisdiction seals and one crimson stripe at the bow, long white alignment marks, black registry numbers, and square machine-readable code panels. Its port lights are even and white, and every hatch is numbered. It approaches like an inspector with a clipboard who is also a warship.
```

**Draws from:** "identify, classify, then act through the record"; Faction Flavor's axial spines, module bands and registry livery; the identify-then-disable quirk.
**Do:** let every class look like a size of the same form, as Faction Flavor's command ships enlarge the grammar rather than ornament it.
**Don't:** ask for "authoritative" or "imposing". The Mandate failed on adjectives; menace here comes from the numbering.

### Cryonix

```text
A Cryonix ship: the cold chain made exact. The register is serious: every feature is plausible vacuum engineering with a visible job. It has a narrow-waisted body around a protected compact core, like a sealed vacuum flask or a closed spruce cone, with thick folded emitter panels lying flat against the hull in overlapping layers like closed scales, long straight boundaries and shallow compound curves. Finish is clean-room matte ceramic and anodized metal. Blue-black and graphite on the main structure, pale silver on the emitter scales, thin icy-cyan painted bands tracing the heat paths from core to emitters, small copper rings only at couplings and interfaces, and batch identifiers and tiny alignment grids in cool white. It is pristine; a single fingerprint would show. It looks like a sealed laboratory instrument that has learned patience.
```

**Draws from:** "the first trace is yours to find"; the cold-sniper quirk, which dumps heat through unfolding emitters; Faction Flavor's narrow waists, crystalline control and selective copper; the bench's recast of the Stillwater.
**Do:** keep the emitters folded and thick. They are the silhouette's tell and the shape that changes when it fires.
**Don't:** ask for iridescence, lattice or crystal. Faction Flavor has all three, and all three become painted matte bands here (guideline 6).

### Cetacean Navigators

```text
A Cetacean Navigators ship: a rescue vessel that carries its own sea. The register is serious machinery with a goofy, friendly face, bending vacuum plausibility a little for the sake of charm. Two long, swollen, parallel pressure hulls grow as lobes of one smooth rounded body, like a dolphin's flanks or a beluga's broad back, with a raised dry cabin ridge between them, a tapered navigation boom at the bow, and wide smooth fillets wherever the forms meet. Water shows as mass behind small round amber-lit ports along each lobe. Silver-rimmed transfer locks sit where the cabin ridge meets the lobes, and heavy rounded towing points sit at the stern. Finish is matte marine coating. Deep ocean blue on the upper lobes, blue-green along the flanks, pale sand on the belly, silver lock rims, warm amber light at the inhabited ports, and flowing route lines of repeated dots along the hull. Its tow points are worn smooth, with thick rubber fenders. It looks like a lifeboat that knows the way home.
```

**Draws from:** "obligations without consequences are advertising"; the distress-call and towing quirk; Faction Flavor's parallel pressure bodies, amber locks and route lines; guideline 2's lobes in place of the Waykeeper's arches.
**Do:** say "lobes of one body". The twin hulls are the faction, and the lobes are how they survive Tripo.
**Don't:** ask for arches, open structure or translucent water sections. Faction Flavor has them; the Waykeeper failed on the first.

### Aya Collective

```text
An Aya Collective ship: a commons you can open, built so that everyone aboard comes home. The register is serious: every feature is plausible vacuum engineering with a visible job. It has rounded protective frames around replaceable cells, like a tortoise shell or a lidded clay cooking pot, with the body divided into repeated removable panels, each held by visible latches, hinged access covers sized for one person to swap, and point-defence turrets on standard mounts at the shoulders. Finish is durable matte ceramic, with soft rubberized grips wherever hands go. Terracotta on the main shell, warm cream on the panels, deep green on the frames and turrets, charcoal on the mounts, restrained copper at the couplings, block-printed geometric patterns that differ from panel to panel, and small workshop marks. Its repairs are visible and good: one patched panel with neat stitch-like rivets. It looks like a village built a ship together and every household made one panel.
```

**Draws from:** "no system is inevitable if people can still keep one another alive"; the never-first, never-pursue, heavy point-defence quirk; Faction Flavor's protective frames, service logic and patterned panels; the Open Hand's turtle and water jar.
**Do:** show the turrets plainly. Aya's peace is armed with point defence, and its convoys win long fights.
**Don't:** suggest woven fabric hull sections. Faction Flavor warns that decorative fabric does not carry pressure.

### Framgång and Odla Framgång

```text
A Framgång ship: a mid-century lifestyle promise with a competitor's engine inside it. The register is high whimsy: a showroom promise that owes nothing to vacuum engineering. It has the domestic space-age curves of a 1958 sedan or a travel trailer: an oval control face, swept tailfins, a pedestal-mounted sensor dish, starburst trim, and one slightly-too-deep adapter casing where the borrowed mechanism does not quite fit. Finish is satin paint with brushed champagne-gold trim. Avocado green on the main body, peach on the fins and the accent sweep, cream on the cockpit face, brushed champagne gold on the trim, badges and starbursts, a faux-wood-grain panel by the hatch, and an aspirational seal reading "Certified Success". It is showroom fresh, with a price sticker still on one fin. It looks like a timeshare pitch that can follow you between stars.
```

**Draws from:** "you are not broken, you are under-invested"; the Odla affiliates who follow and pitch; Faction Flavor's domestic curves, adapters and finish range.
**Do:** keep the wrong-fit adapter. It tells the truth about the product and is the faction's one honest part.
**Don't:** say chrome or mirrored. Chrome is the brand, and brushed champagne gold is how it survives guideline 6. For the rare excellent unit, drop the adapter and the price sticker.

### Pirate Coalition

```text
A Pirate Coalition ship: someone else's ship, kept running out of spite. The register is wild and maximalist: more additions than any sensible refit would carry. It is an identifiable donor hull from another manufacturer with a predator's additions bolted on: a cut-down module, adapted gun hardpoints on improvised mounts, bolted salvage armour plates, exposed cable runs clamped along the hull, and a grappling arm, with every asymmetric addition on the side facing the camera. Finish is mixed: patches of the donor's original paint, gray primer, bare welds and blued heat discolouration. Donor company paint on the original hull, gray primer on the added parts, bare steel at the welds, one crew accent colour slashed boldly across both, overpainted corporate logos, crossed-out serials, and the crew's emblem, one large emoji, painted three times. It looks like a stolen truck with new plates and a shotgun on the dash.
```

**Draws from:** "possession has a maintenance schedule"; the cargo-not-death quirk and named crews; Faction Flavor's donor hulls and emoji marks; the Second Owner's camera-side lesson.
**Do:** name the donor in the ship prompt ("a donor Lightsail Express hauler") and pick the emoji and accent colour there, so each crew is distinct.
**Don't:** put additions on the far side. A three-quarter view hides them and Tripo will mirror or guess.

### Megiddo

```text
A Megiddo ship: a moving boundary, protection grown like a seed. The register is serious: every feature is plausible vacuum engineering with a visible job. It has nested protective volumes like a pomegranate or a tightly curled pangolin: an inner hull wrapped in thick overlapping outer shells, heavy shutters closing over recessed ports, and separate service sections that each look independently maintained. Finish is matte warm ceramic and aged metal. Blue-black on the outer shells, warm pale ceramic on the inner hull where the shutters open, aged bronze-gray metal on the shutter frames and mounts, and small silver inlays of Earth's constellations scattered across the upper shells. It is old, well kept and carefully mended. It looks like a guarded seed vault that has learned to keep watch.
```

**Draws from:** "hold the boundary until the question is answered"; the perimeter-fleet quirk; Faction Flavor's nested volumes, shutters and Earth-constellation anchors.
**Do:** let the constellations be recognisably Earth's (Orion, the Plough), as Faction Flavor requires them to differ from the Elysian sky.
**Don't:** ask for lettering or inscriptions. Accurate Hebrew needs supplied text, and invented script carries no meaning. A Vault ship, if anyone draws one, is a plain unremarkable sphere and uses none of this block.
