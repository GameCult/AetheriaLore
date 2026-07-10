# Pass 4 Report - Metagame Laboratory

## Artifacts Produced

- [[../Combat Model]]
- [[Native Type Mapping]]
- [[Clock Machine Test Vectors]]

## Decisions Locked

- Canonical combat state and one deterministic transition function own physical truth.
- Combat uses fixed 250-millisecond integer ticks with stable event ordering and no hidden random rolls.
- Clocks are derived forecasts with confidence and invalidation conditions; they never become independent state owners.
- The smallest matchup machine is two builds, one environment, two policies, one transition function, and an outcome vector explained by a clock card.
- Physical truth and faction-local observation state are separate.
- Cognition is allocated work across sensing, classification, EW, command, fire control, guidance, terminal discrimination, and damage control.
- Fire control separately tracks assignment throughput and solution quality.
- Signature shaping is post-Cold-Wake, observer-relative, and bounded by heat, aspect, motion, history, and control envelope.
- Every drone or munition is a component-built small platform whose battlefield role comes from capability and orders.
- Native Aetheria component, behavior, grid, and entity state remains authoritative where available; new mechanics extend rather than duplicate it.

## Verification

- The model represents heat capacity, conductivity, routing, performance curves, signature, masking, sensing, information decay, cognition quality and load, fire-control throughput and accuracy, ammunition, charge, reload, lock, thrust, torque, loiter, terminal discrimination, armor, redundancy, recoverability, service topology, power, durability, economics, and conduct.
- Vector 1 gives Reversible Superiority a real favorable matchup.
- Vector 2 defeats it through a previously present physical recovery constraint.
- Vector 3 preserves proper Hot ballistic doctrine as a valid interruption strategy.
- Better cognition improves decisions throughout the stack without manufacturing cooling, impulse, ammunition, service throats, or authority.
- Ballistic and energy weapons pay materially different costs.
- No Pre-Elysium shield enters the model.

## State Delta

- Pass 3 material quantities now have stable semantic homes in the combat state.
- The first-hull recovery failure can be simulated without requiring crew stupidity or an unseeded counter.
- Pass 5 can vary doctrines and component packages while sharing one transition ontology.
- Future daemon implementation has a stated compatibility boundary with native typed Aetheria state.

## Review Points Before Pass 5

- Whether 250 milliseconds is the right authoritative quantum, or whether terminal guidance needs 100 milliseconds despite the larger trace volume.
- Whether the clock card should remain explanatory only or also become the first hand-authored doctrine policy input.
- Whether the first candidate simulations should use normalized `0-100` stats for readability or fixed physical units wherever Pass 3 provides them.
- Whether cognition architecture attacks should appear in the first seven doctrine simulations or enter as a counterfactual after the physical metagame is legible.
- Whether the two worked Courtesy vectors should become the canonical opening success and first failure, or remain laboratory examples until the failure ladder is selected.
