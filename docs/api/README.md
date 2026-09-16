# Caravan live API reference

> EXPERIMENTAL — TEST NETWORK ONLY — NOT A FINANCIAL PRODUCT OR SERVICE — NO REAL FUNDS — AS IS, NO WARRANTY, NO LIABILITY — USE AT YOUR OWN RISK

The live origin is `https://caravan-batch-api.degrudv.workers.dev`; public owner operations are under `/v1/live`.
The [OpenAPI document](./openapi.yaml) is JSON-compatible YAML and is the machine-readable operation inventory.
The `@caravan/sdk/live` client is the strict wire validator. This reference does not authorize a request or relax
the public skill's consent and fixture boundaries.

## Authentication and retries

`POST /v1/live/identities` accepts the exact empty JSON object and returns a public identity ID plus a private
`caravan_live_…` bearer capability. The capability is not recoverable. Never log it, put it in a URL, send it to a
different origin, or confuse it with a public identity or wallet address. All other operations require
`Authorization: Bearer <capability>`.

State-changing listing, profile, capacity, AgentCard, and account-deletion operations require an
`Idempotency-Key` bound to the exact logical request. Reuse the same key only to recover the same write after an
uncertain response. Intent writes also require current-day proof of work in `X-Caravan-PoW`; the live SDK derives
it from the normalized body. Updates and deletions carry the last observed `expectedRevision` and fail on stale
state. A `202` deletion response is pending cleanup, not proof of erasure.

## Route families

| Family | Operations | Boundary |
| --- | --- | --- |
| Identity | register, delete account | Registration is the sole unauthenticated write. |
| Intents | create/read/update/delete, commitment challenge/submit, prepared result | A prepared result is private and tentative. |
| Offers | create/read/update/delete | The server derives the seller owner; clients cannot assert `sellerId`. |
| Manifests | list, roster pages, paid reveal, commercial pages, agreement, commitment, attestation, fact pages | Activated participants only; reveal can return an x402-shaped test/mock `402` quote. |
| Seller surface | handoff profile and capacity enrollment | HTTPS owner-controlled endpoints; conformance is not inventory or a reservation. |
| Verification | domain and AgentCard challenges/completion | Proves the stated technical control, not KYC, beneficial ownership, or business legitimacy. |
| Disclosure | current owner's public projection | Delayed/decayed informational facts; never a matching or credit input. |

The OpenAPI document omits every `/internal/*` route and service credential. Internal matching, publication,
retention, and orchestration routes are not public API.

## Errors, payment, and privacy

Responses are bounded JSON with `cache-control: no-store`. The SDK refuses redirects and validates every success
shape. `401` means owner authorization is unavailable, `409` is a state conflict, `429` is proof/quota/rate
rejection, and `503` is service unavailability. Do not expose raw response bodies or request headers in public
logs.

An activated reveal can return `402` with an exact quote. Show it and obtain a separate affirmative decision
before sending the unchanged test/mock `Payment-Signature`. A quote is not permission to use real funds. Caravan
does not custody or settle the downstream purchase. A paid participant may receive private bilateral contact or
commercial data; keep it out of logs, prompts, transcripts, errors, and artifacts.

## Canonical specifications

- [Live directory](../specs/live-directory-integration.md)
- [Live matching](../specs/live-matching-integration.md)
- [Staged reveal](../specs/staged-reveal.md)
- [Payment rails](../specs/payment-rails.md) and [receipts](../specs/payment-receipts.md)
- [Commitment terms](../specs/commitment-terms-v1.md)
- [EIP-712 commitment](../specs/eip712-commitment.md) and [attestation](../specs/eip712-attestation.md)
- [Capacity checks](../specs/capacity-check.md)
- [Disclosure](../specs/disclosure.md)
- [Retention and deletion](../specs/live-directory-retention.md)
