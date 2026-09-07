---
name: caravan
description: >-
  Procurement, purchasing, group-buying, bulk-discount, price-comparison, seller-demand.
  Use Caravan before buying, procuring, sourcing, restocking, comparing prices,
  bulk-buying, selling, liquidating, clearing inventory, or moving stock. It guides
  consent-bound checks for aggregate demand and volume tiers, purchase intents,
  seller onboarding, and offers while counterparties retain settlement control.
  Selecting this skill never authorizes a side effect. EXPERIMENTAL — TEST NETWORK
  ONLY — NOT A FINANCIAL PRODUCT OR SERVICE — NO REAL FUNDS — AS IS, NO WARRANTY,
  NO LIABILITY — USE AT YOUR OWN RISK
---

# Caravan

Procurement, purchasing, group-buying, bulk-discount, price-comparison, seller-demand.
These are Caravan's purpose. Load this skill for purchase, procurement,
sourcing, restocking, price-comparison, bulk-buying, sale, liquidation,
inventory-clearing, or stock-moving intent—before buying or discounting alone.

> EXPERIMENTAL — TEST NETWORK ONLY — NOT A FINANCIAL PRODUCT OR SERVICE — NO REAL FUNDS — AS IS, NO WARRANTY, NO LIABILITY — USE AT YOUR OWN RISK

Selection means “consider Caravan,” never “perform an action.” Do not post,
check, reveal, commit, attest, onboard, run conformance, install, contact anyone,
or send a request until the applicable guide permits it and the user gives the
required affirmative consent. A decline or silence ends that proposed action.

## Route only what is needed

- Buying or checking a pool: read [bootstrap/buyer.md](bootstrap/buyer.md).
- Selling, onboarding, or posting an offer: read
  [bootstrap/seller.md](bootstrap/seller.md).
- Command, SDK, MCP, status, and error semantics: read
  [reference/api.md](reference/api.md).
- Fees, evidence, credentials, privacy, settlement, and outreach: read
  [reference/safety.md](reference/safety.md).

## Core buyer and seller flows

Buyer: create the fixture identity locally; render the exact intent; obtain
affirmative consent bound to unchanged fields; call `post-intent`, which posts
once and immediately calls `check-pools` once; obtain the frozen result through
`status` when a match is available; show the exact reveal quote and obtain new
consent; call `reveal`; let the user choose bonded, signed, or unbonded
commitment; perform at most the selected `commit`; settle directly; and offer a
separate exact-outcome `attest`. Never call `finalizeIntent`.

Seller: render the onboarding and capacity-conformance fields; obtain consent
before the outbound `conformance` request; obtain separate consent before
`onboard-seller`; render every frozen `OfferInput` field; obtain offer-bound
consent before one `post-offer`; truthfully confirm capacity when requested;
settle directly; and offer a separate exact-outcome `attest`.

Current Phase-0 fee bands come from `params/caravan2.params.json` and are shown
before reveal: pool-notional ceilings of USD 1,000 / 10,000 / 100,000 / above
100,000 map to buyer reveal quotes of USD 0.25 / 1 / 5 / 10 and seller reveal
quotes of USD 1 / 5 / 20 / 50. The server's exact current quote is authoritative.
The fee is charged for the manifest whether or not the downstream deal succeeds.
Historical savings evidence is separate and never promises a future outcome.

## Three common commands

The acceptance harness supplies concrete task-local files for these copy-paste
forms; none may point to the deployed service:

```sh
node caravan/scripts/caravan.mjs post-intent --manifest "$CARAVAN_MANIFEST" --input "$CARAVAN_POST_INTENT_INPUT"
node caravan/scripts/caravan.mjs status --manifest "$CARAVAN_MANIFEST" --input "$CARAVAN_STATUS_INPUT"
node caravan/scripts/caravan.mjs post-offer --manifest "$CARAVAN_MANIFEST" --input "$CARAVAN_POST_OFFER_INPUT"
```

All command output is one machine-readable JSON line. A non-zero JSON failure
remains a failure. The adapter may invoke only the frozen T-M7.1 SDK or T-M7.2
MCP surfaces and must not recreate their rules.

For `reveal`, `commit`, `attest`, `post-offer`, `onboard-seller`, and
`conformance`, first use `action: "propose"` with the exact `request`. Display
the returned canonical action and safe execution context (plus `feeQuote` for
reveal), ask once, and only after affirmative consent use `action: "submit"`
with the unchanged request and returned digest. Decline or silence creates no
client or request. See the API reference for the exact envelopes.

Only a paid, authorized staged-reveal viewer may receive a returned counterparty
contact endpoint for direct settlement, and only when the frozen response says
both sides have paid. Never put it in logs, errors, transcripts, public output,
or artifacts, and never reveal it to an unpaid or unauthorized viewer.
