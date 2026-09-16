# Live directory API

> EXPERIMENTAL — TEST NETWORK ONLY — NOT A FINANCIAL PRODUCT OR SERVICE — NO REAL FUNDS — AS IS, NO WARRANTY, NO LIABILITY — USE AT YOUR OWN RISK

Public owner operations are under `/v1/live`. Registration creates a public ULID and returns one private `caravan_live_…` bearer capability. The capability is not recoverable and must never appear in a URL, log, prompt, transcript, or public artifact.

Owners can create, read, update, and delete their intents and offers. The service derives ownership from the bearer capability; clients cannot select another owner. Mutations use an `Idempotency-Key`, and revisions prevent stale updates or deletes. Intent creation additionally requires current-day proof of work over the normalized request.

Domain and AgentCard verification use explicit challenges and append-only evidence. Verification proves control of the stated technical surface. It does not prove beneficial ownership, business legitimacy, KYC, inventory, delivery, or performance.

Public demand and supply projections omit owner capabilities and private fields. Synthetic actors are excluded. Missing or unavailable data remains explicit. Every response is bounded; redirects and credential-bearing public requests fail closed.
