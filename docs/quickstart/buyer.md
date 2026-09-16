# Buyer quickstart

> EXPERIMENTAL — TEST NETWORK ONLY — NOT A FINANCIAL PRODUCT OR SERVICE — NO REAL FUNDS — AS IS, NO WARRANTY, NO LIABILITY — USE AT YOUR OWN RISK

Caravan can test whether pooled demand or a seller volume tier could help a purchase. Installing or selecting it
does not authorize a post, payment, reveal, commitment, attestation, message, or other side effect.

## Install the public agent skill

```sh
npx skills add Degrudv/caravan-skill --skill caravan
```

Read `caravan/SKILL.md`, then `caravan/bootstrap/buyer.md`. The public skill contains its own reviewed Node 22
bundle, so it does not need this source repository or an npm SDK install. Its current mutating walkthrough accepts
only a bounded, caller-supplied synthetic test fixture. It rejects the deployed service as an execution target.

## Post one fixture intent

The acceptance runner supplies `CARAVAN_MANIFEST` and `CARAVAN_POST_INTENT_INPUT`. Neither file may contain real
funds or a mainnet key. Do not print the manifest, capability, proof, payment evidence, key, or signature.

1. Run `post-intent` with `action: "propose"`. This validates and renders the exact product, quantity, unit
   ceiling, region, window, settlement preferences, and privacy choice without constructing a client or making a
   request.
2. Show those unchanged fields, explain that the intent is non-exclusive and savings are not guaranteed, and ask
   for explicit affirmative consent bound to the returned digest. Silence or refusal ends the action.
3. Only after consent, change the input to `action: "submit"` and include
   `consent: {"affirmative":true,"digest":"sha256:…"}` with the exact returned digest. Keep every other field
   unchanged.
4. Run the same command once:

```sh
node caravan/scripts/caravan.mjs post-intent --manifest "$CARAVAN_MANIFEST" --input "$CARAVAN_POST_INTENT_INPUT"
```

The command posts once and checks pools once. Treat `pending` as no current pool shown. A prepared or indicative
allocation is tentative and private; it is not publication, reveal authorization, payment, commitment, or
settlement. Never call `finalizeIntent` on the user's behalf.

## Maintainer acceptance

The maintainers run a hermetic buyer build test against a loopback synthetic fixture. It proves proposals make no
request, binds affirmative fixture consent to unchanged digests, exercises the copied public bundle, checks
secret/contact redaction, and stops the fixture. It makes no deployed-service request and uses no real funds. A
pass is build evidence, not permission for an external side effect or proof of a deployed journey.

## Reveal and complete the fixture flow

For a matched result, use the skill's `reveal` proposal first. Show the exact current test/mock quote and explain
that its fee applies to the manifest even if the downstream deal fails. Obtain a new digest-bound affirmative
decision before the unchanged submit. Only a paid authorized participant may receive a contact endpoint, and that
endpoint must stay out of logs, transcripts, prompts, errors, and artifacts.

After reveal, let the user choose bonded, signed, or unbonded commitment. Caravan never chooses for them and never
signs, broadcasts, custodies, or settles a bond. Use the same propose-display-consent-submit sequence for at most
the selected commitment. Counterparties settle directly. Offer a separate exact-outcome attestation only after an
outcome exists.

The live API origin is `https://caravan-batch-api.degrudv.workers.dev`; its lower-level operation inventory is in
[the API reference](../api/README.md) and [OpenAPI](../api/openapi.yaml). Those references do not grant permission
to bypass the public skill's fixture and consent controls.
