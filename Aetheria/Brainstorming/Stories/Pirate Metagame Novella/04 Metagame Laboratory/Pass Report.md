# Pass 4 Report - Metagame Laboratory

## Artifacts Produced

- [[../Combat Model]]
- [[Native Type Mapping]]
- [[Clock Machine Test Vectors]]

## Decisions Locked

- One shared combat-state contract supports two transition implementations: the fast daemon kernel offscreen and the frame-by-frame full simulation while observed.
- Combat uses fixed 250-millisecond integer ticks with stable event ordering and no hidden random rolls.
- Clocks are derived forecasts with confidence and invalidation conditions; they never become independent state owners.
- The smallest kernel matchup machine is two builds, one environment, two policies, one fast transition function, and an outcome vector explained by a clock card; selected cases add a paired live-simulation run.
- Physical truth and faction-local observation state are separate.
- Cognition is allocated work across sensing, classification, EW, command, fire control, guidance, terminal discrimination, and damage control.
- Fire control separately tracks assignment throughput and solution quality.
- Signature shaping is post-Cold-Wake, observer-relative, and bounded by heat, aspect, motion, history, and control envelope.
- Every drone or munition is a component-built small platform whose battlefield role comes from capability and orders.
- Native Aetheria component, behavior, grid, and entity state remains authoritative where available; new mechanics extend rather than duplicate it.
- The daemon kernel is the fast deterministic heuristic simulator and offscreen combat authority.
- The frame-by-frame live simulation is the fine-grained conformance ground truth.
- Observed and offscreen battles exchange compatible native state at explicit synchronization checkpoints.
- Technology blueprints, manufacturing recipes, item instances, and loadout blueprints have separate authorities.
- Pass 5 scenarios require native database fixtures with varied technologies, rights histories, producers, supply chains, manufacturing quality, and item condition.

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
- Pass 5 can vary doctrines and component packages while both execution models share one state and mechanics contract.
- The two simulation models have a stated compatibility and conformance boundary around native typed Aetheria state.
- The hand-solvable vectors are acceptance expectations until the kernel runs them and selected live-simulation pairs quantify heuristic error.
- The architecture serves hundreds of concurrent local-galaxy battles for community-warfare seasons and the persistent strategy layer. Starbridge establishes shared combat; Profits Rising contributes corporation logistics, production, and supply-chain play.
- New mechanics are explored through fast kernel batches first; accepted dynamics then become the live-simulation implementation target and later conformance contract.

## Review Points Before Pass 5

- Whether 250 milliseconds is the right authoritative quantum, or whether terminal guidance needs 100 milliseconds despite the larger trace volume.
- Whether the clock card should remain explanatory only or also become the first hand-authored doctrine policy input.
- Which minimum blueprint, recipe, producer, commodity-lot, and manufactured-instance fixture set is sufficient to express all seven doctrines without scenario-local stat overrides.
- Whether cognition architecture attacks should appear in the first seven doctrine simulations or enter as a counterfactual after the physical metagame is legible.
- Whether the two worked Courtesy vectors should become the canonical opening success and first failure, or remain laboratory examples until the failure ladder is selected.
