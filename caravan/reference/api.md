# Command, SDK, and MCP reference

> EXPERIMENTAL — TEST NETWORK ONLY — NOT A FINANCIAL PRODUCT OR SERVICE — NO REAL FUNDS — AS IS, NO WARRANTY, NO LIABILITY — USE AT YOUR OWN RISK

`scripts/caravan.mjs` is a deterministic standalone adapter. The command shape
is `node caravan/scripts/caravan.mjs <command> --manifest <manifest.json>
--input <input.json>`. It calls the frozen T-M7.1 SDK or T-M7.2 MCP contract and
does not reproduce Caravan business rules.

## Command map

| Command | Published surface | SDK operation | Candidate boundary |
| --- | --- | --- | --- |
| `check-pools` | `caravan_check_pools` | `checkPools` | One read-only check for an already posted intent. |
| `post-intent` | `caravan_post_intent` | `postIntent`, then `checkPools` | Fixture-only submit after digest-bound consent; propose/decline/silence are request-free. |
| `status` | `caravan_get_match_status` | `getMatchResult` | One bounded result retrieval; no finalization. |
| `reveal` | `caravan_pay_reveal` | `payReveal` | Fixture only, after exact quote and reveal consent. |
| `commit` | `caravan_commit` | `commit` | Fixture only; caller signs exact content or supplies public bond evidence. |
| `attest` | `caravan_attest` | `attest` | Fixture only; exact outcome and local signature. |
| `post-offer` | `caravan_post_offer` | `postOffer` | Fixture only, after complete offer-bound consent. |
| `onboard-seller` | `caravan_seller_onboard` | `onboardSeller` | Fixture only, after onboarding consent. |
| `conformance` | task-local wrapper | `checkCapacity` | One consented fixture endpoint check. |

The public `caravan_price_history` MCP tool maps to `getPriceHistory`. It is the
only hosted MCP tool that requires no Caravan application capability. Use it
only for same-conversation, exact-product public historical evidence.

## Inputs and consent

Every command requires the exact task-local manifest and a JSON input file.
`post-intent` uses this exact proposal envelope:

```json
{"action":"propose","intent":{"productId":"…","qty":1,"unitCeiling":1,"window":{"start":"…","end":"…"},"region":"…","settlementPrefs":["…"],"privacy":"normal"}}
```

Proposal returns the canonical rendered intent, safe non-secret execution
context, and consent digest without creating a client. Show all three to the
user. `action: "submit"` repeats the unchanged intent and adds
`"consent":{"affirmative":true,"digest":"sha256:…"}`. `decline` and
`silence` retain the reviewed intent, carry no consent, and create no client or
request.

The six gated commands—`reveal`, `commit`, `attest`, `post-offer`,
`onboard-seller`, and `conformance`—use this generic proposal envelope:

```json
{"action":"propose","request":{"command-specific":"exact fields"}}
```

Proposal validates and canonicalizes the request locally, then returns
`proposedAction`, safe `executionContext`, `requestSha256`, and
`consentDigest`. A `reveal` proposal also returns the current fixture
`feeQuote`; display it before asking. Only after an affirmative answer submit
the identical canonical request:

```json
{"action":"submit","request":{"command-specific":"exact fields"},"consent":{"affirmative":true,"digest":"sha256:…"}}
```

The digest binds the command, canonical transmitted fields, network,
task-local API origin, fixture identity, relevant domain/capacity target, and
reveal quote. Changing the request, manifest, actor, target, or quote invalidates
consent. `decline` and `silence` use the reviewed request without a consent
object; they validate locally but create no client, request, or follow-up.

`check-pools` accepts an `intentId`. `status` accepts the same identifier for the
frozen bounded `getMatchResult` operation; it is distinct from the one-shot pool
check. Optional exact-product public price history never changes the match.

The manifest schema is `caravan.skill-run-manifest.v1`, environment
`task-local-phase-0`, network `base-sepolia`, and `synthetic: true`. Its exact
inputs are the loopback API origin, fixture capability, synthetic private key,
identity ID, mock/test payment envelope, seller domain/capacity URLs, fixed UTC
time, and the exact `inputConsumers` map. It accepts no ambient authority.

## Authorization and signing

The other eight MCP tools require the canonical application capability in the
`Caravan-Capability` HTTP header. The frozen T-M7.1 SDK/API transport separately
maps that same injected capability to `Authorization: Bearer <capability>` on
its exact HTTP routes. Do not change or mix those frozen mappings. The sole
source/input exception is the explicit bounded synthetic fixture manifest.
Never put either value in a tool argument, action request, outbound JSON body,
prompt, log, transcript, command output, or other source/artifact. Redirects
fail closed.

`commit` and `attest` use caller-produced EIP-712 signatures over exact requests.
Signing is local. The server never receives a signer or private key. Bond mode
uses public Base Sepolia evidence but the skill never signs, broadcasts, relays,
holds, or settles a transaction.

## Result invariants

- HTTP 202 is valid only with `status: "pending"`; pending is eligible and has
  no near-pool fields.
- HTTP 200 is terminal and contains `matched` or `failed`.
- A near-pool statement requires an actual `nearPool` field on a terminal failed
  result; never infer it from reason text.
- `check-pools` is one shot. `status` uses only the frozen bounded result
  retrieval and never finalizes an intent. T-M7.3 never calls `finalizeIntent`.
- Product, region, intent, pool, allocation, price, manifest, terms, seller, and
  outcome identifiers remain correlated. Any mismatch fails closed.
- Only a paid authorized viewer may receive an endpoint present in its paid
  staged-reveal result. Never reveal it to an unpaid or unauthorized viewer or
  place it in logs, errors, transcripts, public output, or artifacts.
- No unauthorized/public response, log, transcript, artifact, or error may
  expose a capability, key, proof, payment evidence, signature, private roster,
  payment/cluster/ledger linkage, or exact private clearing fact. An authorized
  interactive result may contain only the minimum frozen projection required by
  the buyer or seller flow.

## Failure contract

Every command emits one JSON line. Failures exit non-zero and put one bounded
`{"ok":false,"error":{"code":"…","message":"…"}}` object on stderr.
Missing manifest inputs, malformed JSON, invalid UTF-8, crossed HTTP status/body
states, redirects, timeouts, oversized responses, identifier mismatches, and
privacy-unsafe results are failures. Never convert an error into empty success,
retry a completed model decision, or continue to another side effect.
