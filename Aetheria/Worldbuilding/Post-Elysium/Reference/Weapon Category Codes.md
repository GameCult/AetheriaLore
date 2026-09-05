# Weapon Category Codes

Weapon category codes are catalogue labels that describe a weapon through a sequence of abbreviations. A label can specify its range, caliber or scale, operating mode, weapon type, guidance, and special function. Only the applicable parts are included.

Read the parts in this order:

- **Ballistic and energy weapons:** range → caliber → operating mode → weapon type → functionality suffix.
- **Launchers:** range → guidance → missile type → functionality suffix.

A letter's meaning depends on its position and the weapon family. For example, `S` means small caliber before a ballistic or energy weapon type, but seeking guidance before a missile type.

### Range Prefixes

Range comes first when specified.

| Code | Meaning |
| --- | --- |
| `XR` | Melee range |
| `SR` | Short range |
| `MR` | Medium range |
| `LR` | Long range |

### Ballistic and Energy Weapons

When the catalogue specifies caliber, its code goes before the weapon type.

| Code | Caliber |
| --- | --- |
| `S` | Small |
| `M` | Medium |
| `L` | Large |
| `XL` | Extra large |

An operating-mode marker, if applicable, follows the caliber and precedes the weapon type.

| Code | Operating mode |
| --- | --- |
| `Co` | Continuous energy weapon |
| `Ch` | Charged weapon |

The weapon-type code identifies what the weapon fires or projects.

| Code | Weapon type |
| --- | --- |
| `EMPS` | Electromagnetically propelled slug |
| `XPS` | Explosively propelled slug |
| `L` | Laser |
| `PL` | Pulse laser |
| `ESD` | Electrostatic discharge weapon, commonly called a lightning gun |
| `PPC` | Particle projection cannon, commonly called an ion cannon |

### Launchers

For launchers, a guidance code goes immediately before the missile type when applicable.

| Code | Guidance |
| --- | --- |
| `D` | Dumbfire |
| `G` | Guided |
| `S` | Seeking |

| Code | Missile type |
| --- | --- |
| `M` | Self-propelled missile |
| `MM` | Self-propelled micromissile |
| `MIRV` | Multiple independent reentry vehicle |

`MIRV` takes no guidance prefix in this scheme.

### Functionality Suffixes

These codes go at the end of the label, with a hyphen, to identify special functions.

| Code | Meaning |
| --- | --- |
| `-AB` | Airburst |
| `-I` | Incendiary |
| `-AP` | Armor penetrating |
| `-NE` | Negative entropy |
| `-RF` | Rapid fire |
| `-B` | Burst |
| `-C` | Cluster |

### DME Examples

The [[Worldbuilding/Post-Elysium/Factions/Death Monkey Explosives Products|Death Monkey Explosives catalogue]] shows how the parts fit together:

- `SRDMM-I` describes an incendiary self-propelled micromissile: `SR` specifies short range, `D` specifies dumbfire, `MM` identifies the micromissile, and `-I` adds the incendiary function.
- `MIRV-I` combines a multiple independent reentry vehicle (`MIRV`) with the incendiary suffix (`-I`). It has no guidance prefix.
- `XPS-I` identifies an explosively propelled slug (`XPS`) with an incendiary function (`-I`).
- `LEMPS` identifies a large-caliber (`L`), electromagnetically propelled slug (`EMPS`).

Two DME prototype labels were changed to fit the shared scheme: `XPC-I` became `XPS-I`, and `EMPKP` became `LEMPS`. The old labels are retained to trace the source material; they do not designate separate, current weapon classes.
