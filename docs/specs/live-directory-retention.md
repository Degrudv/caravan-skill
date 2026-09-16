# Live retention and deletion

> EXPERIMENTAL — TEST NETWORK ONLY — NOT A FINANCIAL PRODUCT OR SERVICE — NO REAL FUNDS — AS IS, NO WARRANTY, NO LIABILITY — USE AT YOUR OWN RISK

Caravan stores only the evidence required for the current Phase 0 operation and its published retention rules. Owner-visible entities carry lifecycle state and retention deadlines. Deletion is capability-scoped, revision-aware, and idempotent.

A `202` deletion response means cleanup is pending. It is not proof of erasure. A completed deletion receipt is issued only after the bounded cleanup process has crossed every authority fence and removed or irreversibly detached the covered private details.

Account deletion revokes the owner's capability and blocks new owner operations. Activated shared manifests preserve only the minimum immutable evidence required for other participants and protocol integrity. Private contacts, payment evidence, proofs, capabilities, and transient orchestration state are excluded from public output and removed at their applicable deadline.

Cleanup uses database time, bounded pages, and repeat-safe transitions. A failed or partial run remains retryable without extending retention or resurrecting deleted data. Public projections stop exposing revoked or deleted owners before physical cleanup completes.
