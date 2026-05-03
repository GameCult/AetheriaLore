# Bloom Habitat Quantitative Sanity Anchors

Status: brainstorming. These are not final canon numbers. They are sanity anchors so Bloom design does not drift into decorative hard-SF wallpaper.

## Artificial Gravity Radius

Artificial gravity at the inner surface is set by:

```text
a = omega^2 * r
```

Where:

- `a` is apparent gravity
- `omega` is angular velocity in radians per second
- `r` is radius from axis to inhabited surface

For Earthlike gravity, rough radius by rotation rate:

| Rotation | Radius for 1 g | Diameter |
| --- | ---: | ---: |
| 0.5 rpm | 3577 m | 7.15 km |
| 0.75 rpm | 1590 m | 3.18 km |
| 1 rpm | 894 m | 1.79 km |
| 1.5 rpm | 397 m | 0.79 km |
| 2 rpm | 224 m | 0.45 km |
| 3 rpm | 99 m | 0.20 km |
| 4 rpm | 56 m | 0.11 km |

Design consequence:

A comfortable mature Bloom is probably large. If it is small, it either spins fast enough to produce serious Coriolis discomfort, provides lower gravity, or houses people who are adapted, transient, desperate, or working rather than raising children there.

Pallas consequence:

An AU industrial yard could be in a lower-comfort industrial Bloom or shell segment, but if the broader Pallas Cluster houses large populations, the main civic Blooms should have radii in the hundreds of meters to kilometers. The Kappa service space should not imply a tiny station unless the story wants that discomfort.

## Axial Gravity Gradient

Apparent gravity scales linearly with radius at a fixed rotation rate. If the inner surface is 1 g at radius `R`, then a point at half radius is about 0.5 g. Near the axis, gravity approaches zero.

Design consequence:

Near-spire and hub-adjacent spaces are operationally valuable but physically odd. Long-term domestic housing prefers high-radius districts, especially near spoke bases. Axial short-stay lodging, offices, labs, traffic control, and low-g industry make sense. Axial family housing is a red flag unless there is a social reason.

## Pressure Load

One atmosphere is about 101 kPa, or roughly 101,000 newtons per square meter. A Bloom with an open interior does not merely contain air as a flavor detail. The pressure shell is a major structural system.

For a thin-walled pressure cylinder, hoop stress scales roughly with:

```text
stress = pressure * radius / wall thickness
```

This means larger radius increases pressure stress unless shell thickness, material strength, structural framing, or pressure strategy changes.

Design consequence:

- the shell is not casual
- pressure penetrations are expensive
- huge doors, windows, and service openings need strong justification
- maintenance spaces around shell seams are not decorative
- pressure boundaries and emergency shutters are structural politics

## Shielding Mass

Radiation and micrometeoroid shielding are likely among the dominant mass drivers for a long-term free-space habitat. Bloom has an in-world advantage because it starts with asteroid aggregate and converts it into compacted shielding and TCS layers.

Design consequence:

- the outer shell is thick and valuable
- exterior-adjacent spaces are embedded in mass, not hanging off a light station hull
- any tunnel or crawl route through shielding has cost
- widening specialist service arteries is not free
- shield penetrations create named, inspected, politically controlled places

Pallas consequence:

If octopoid workers are sent into narrow Kappa arteries, the cruel logic is not only "they fit." It is "the route was kept small because expanding it would cost shielding, structure, downtime, and certification."

## Air Volume And Fire

A large open interior creates psychological comfort but also turns air management into a habitat-scale system. Smoke, heat, toxins, pathogens, and humidity do not respect neighborhood boundaries unless the habitat actively forces them to.

Design consequence:

- fire isolation must be built into airflow and architecture
- warm air and smoke tend inward in the artificial gravity field
- return-air systems near inward/high zones matter
- industrial yards need local containment strategies
- farms and public spaces need protection from contamination events

## Heat Rejection

Every watt used inside eventually becomes waste heat unless exported as matter or radiation. A Bloom can recycle water and carbon. It cannot recycle heat forever.

Design consequence:

- radiator access and coolant routing are first-order anatomy
- high-power industrial districts sit near heat-rejection capacity
- thermal loops need inspection and labor
- a maintenance strike can threaten production without touching the main air system

## Spoke Interface Cost

The spoke is not just an elevator. It is a rotating/despun transfer problem, utility crossing, class filter, freight route, emergency escape path, and psychological landmark.

Design consequence:

- spoke bases become prime real estate
- spoke-head machinery is high-value operational space
- badge-only routes and freight priority express politics
- a supervisor route can be physically faster because it avoids public transfer congestion

## Scale Classes To Test

These are provisional.

### Type A: Industrial yard shell

- population: hundreds to tens of thousands
- gravity: lower comfort acceptable
- purpose: construction, repair, processing, retrofit
- likely AU behavior: harsher labor geometry, more temporary housing, more exposed maintenance debt

### Type B: Mature civic Bloom

- population: hundreds of thousands
- gravity: comfortable inner-surface living
- purpose: residential, agricultural, industrial, civic
- likely features: strong spoke-base districts, open commons, redundant life support, formal service hierarchy

### Type C: Megacity Bloom

- population: millions to tens of millions
- gravity: large radius, district-scale transit
- purpose: full urban civilization
- likely features: layered governance, multiple industrial metabolisms, large class gradients, strong internal cultures

## Numerical Humility

These numbers are not enough to design a Bloom. They are enough to prevent three mistakes:

1. treating near-axis space as ordinary luxury housing
2. treating the shell as hollow rock instead of a pressure/shielding structure
3. treating maintenance access as arbitrary corridor dressing
