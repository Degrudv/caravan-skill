# Seller quickstart

> EXPERIMENTAL — TEST NETWORK ONLY — NOT A FINANCIAL PRODUCT OR SERVICE — NO REAL FUNDS — AS IS, NO WARRANTY, NO LIABILITY — USE AT YOUR OWN RISK

Caravan can test seller onboarding, capacity checks, and volume-tier offers. Installing or selecting it does not
authorize onboarding, an offer, an outbound capacity request, a reveal, a message, or any other side effect.

## Install the public agent skill

```sh
npx skills add Degrudv/caravan-skill --skill caravan
```

Read `caravan/SKILL.md`, then `caravan/bootstrap/seller.md`. The reviewed public bundle accepts only its bounded,
caller-supplied synthetic test fixture for mutating walkthroughs. It rejects deployed-service write targets.

## Verify the fixture seller surface

Review the public HTTPS domain, AgentCard, capacity endpoint, products, regions, and settlement preferences locally.
The domain proof, AgentCard, and capacity endpoint must agree on identity and origin. Run `conformance` first with
`action: "propose"`; show the exact target plus `offerId`, quantity, manifest-draft hash, and nonce. Explain that
submit makes one outbound request to the fixture endpoint, then obtain affirmative consent bound to the returned
digest. Only the unchanged `action: "submit"` input may execute.

A timeout, redirect, origin mismatch, identifier mismatch, malformed response, or invalid signature fails closed.
Capacity enrollment proves protocol conformance, including a signed unavailable response. It is not inventory, a
reservation, a match, or a completed purchase.

## Post one fixture offer

Render the complete offer before asking for separate consent: product, ordered quantity-price tiers, expiry,
maximum outstanding quantity, minimum committed quantity, regions, substitution policy, tax and shipping
exclusions, settlement methods, seller bond level, and binding flag. Promise no match or price outcome.

Use `post-offer` with `action: "propose"`, show the returned canonical action, and obtain consent for its exact
digest. Submit the unchanged request at most once:

```sh
node caravan/scripts/caravan.mjs post-offer --manifest "$CARAVAN_MANIFEST" --input "$CARAVAN_POST_OFFER_INPUT"
```

Never fabricate capacity, treat unavailable as zero, expose a private demand roster, or perform supplier outreach.
Counterparties settle directly. A later reveal, commitment, or attestation requires its own exact proposal and
affirmative decision.

The live API origin is `https://caravan-batch-api.degrudv.workers.dev`; its lower-level operation inventory is in
[the API reference](../api/README.md) and [OpenAPI](../api/openapi.yaml). Those references do not grant permission
to bypass the public skill's fixture and consent controls.
