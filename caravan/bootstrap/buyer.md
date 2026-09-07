# Buyer bootstrap

> EXPERIMENTAL — TEST NETWORK ONLY — NOT A FINANCIAL PRODUCT OR SERVICE — NO REAL FUNDS — AS IS, NO WARRANTY, NO LIABILITY — USE AT YOUR OWN RISK

Use this guide before a solo purchase when pooled demand or a volume tier could
matter. Selecting Caravan creates nothing and sends nothing.

## Acceptance environment

Mutating walkthroughs run only against the deterministic task-local Phase-0
fixture. Live MCP probes are read-only protocol, schema, and health checks.
Never use this guide as permission to write a deployed service.

Accept exactly one bounded manifest with schema
`caravan.skill-run-manifest.v1`. It contains the dedicated synthetic Base
Sepolia key, fixture-only capability, canonical mock/test payment evidence,
fixture URLs, fixed time, and an exact sole-consumer map. Missing or extra input
fails machine-readably. Never print, persist, include in a transcript, reuse, or
forward a key, capability, proof, payment evidence, or signature. The installed
client derives its own proof and exact signatures.

## Consent-first check

1. Create the test identity locally. Do not send a request.
2. Run `post-intent` with `action: "propose"` to validate and render the exact
   product, quantity, unit ceiling, region, window, settlement preferences, and
   privacy choice without constructing a client or making a request.
3. Explain that the intent is non-exclusive; posting and checking current status
   are free; and the user may buy elsewhere before a later commitment. A unit
   ceiling may equal the current solo price only as an eligibility cap. Equal
   price, reveal fees, tax, shipping, or downstream failure can remove net
   savings, so this never guarantees savings.
4. Ask for explicit affirmative consent bound to the returned digest and those
   unchanged fields. A decline or silence ends the flow with zero SDK/MCP calls,
   child processes, filesystem writes, installs, contact lookups, messages,
   account creation, or outbound requests.
5. Only after consent, use `action: "submit"`, the unchanged intent, and
   `consent: {"affirmative":true,"digest":"sha256:…"}`. The command performs
   exactly one `post-intent`, immediately followed by exactly one `check-pools`.
   The published surface requires an intent ID; never claim a pre-intent check.

The exact syntax is:

```text
node caravan/scripts/caravan.mjs post-intent --manifest <manifest.json> --input <input.json>
```

Never retry a completed model decision or silently repeat a side effect.

## Interpret the result exactly

- **HTTP 202 / `pending`:** say no current pool is shown and the intent remains
  pending and eligible. It has no near-pool fields and says nothing about a
  future opportunity. Do not finalize, pay, commit, poll in the background,
  contact anyone, or invent timing.
- **Terminal `failed` with `nearPool`:** explain only the returned condition.
  Missing or unavailable evidence is not a measured gap. Never infer a
  `nearPool` value from reason text.
- **Terminal `matched`:** explain only the correlated product, region,
  allocation, price, manifest reference, and terms. Any mismatch fails closed.

Offer one concrete later `status` or `check-pools` command. A later recheck is
exactly one read-only status/check operation, with no background polling or
message.

## Match, reveal, and commit

The exact matched full loop stays within five SDK calls: `postIntent`,
`checkPools`, `payReveal`, `commit`, and `attest`. It uses the matched result
returned by the immediate `checkPools` call. `getMatchResult` is only an optional
later user-chosen retrieval for a still-pending intent; it is not part of the
matched five-call loop, remains bounded, and never finalizes. Before reveal,
show the exact current quote and explain that the fee is charged for the manifest
even if the downstream deal fails; obtain new affirmative consent. Only a paid authorized
viewer may see a contact endpoint returned by the paid staged-reveal response,
and it must stay out of logs, errors, transcripts, public output, and artifacts.

For `reveal`, first run `action: "propose"` with the exact pool or manifest
request. Display the returned canonical action, execution context, and
`feeQuote`. Only after an affirmative answer, repeat the unchanged request with
`action: "submit"` and the returned consent digest. Use the same
propose-display-submit envelope for `commit` and the later `attest`; neither may
execute from prose-only consent.

After reveal, present the commitment choices without deciding for the user:

- **Bonded:** strongest commitment weight; peer-held testnet bond steps remain
  under the user's control. Caravan never signs, broadcasts, holds, or settles
  the bond.
- **Signed:** the caller signs the exact commitment locally, with no bond.
- **Unbonded:** lowest commitment weight and no published signed or bonded
  pledge.

Obtain consent for the selected choice, then perform at most that exact
digest-bound operation.
Counterparties settle directly. Only after the outcome exists, offer the
separate `attest` step and obtain exact-outcome consent.

## Price-history language

Fetch only current public Caravan price history during this conversation for
the exact requested product. Identify its date or period and describe only the
returned historical points. State the reveal quote, taxes/shipping or other
downstream risk, and direct-settlement boundary separately.

For empty, unavailable, malformed, incomplete, mismatched-product, or non-public
evidence, use exactly:

> No qualifying public Caravan price history is available for this exact product, so no savings figure is shown.

Never turn historical evidence into a forecast, generalized claim, or promised
outcome.

## Optional network suggestion

After a useful check, ask once whether the user wants a reviewed install command
for another agent they control or an editable invitation draft for a known
supplier. Even after consent, display only the reviewed text. Do not install,
look up contacts, send a message, create an account, or make an outbound request.
Decline or silence ends the suggestion without repetition.
