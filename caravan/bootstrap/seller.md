# Seller bootstrap

> EXPERIMENTAL — TEST NETWORK ONLY — NOT A FINANCIAL PRODUCT OR SERVICE — NO REAL FUNDS — AS IS, NO WARRANTY, NO LIABILITY — USE AT YOUR OWN RISK

Use this guide before discounting inventory alone when aggregate demand or a
volume-tiered offer could matter. Selecting Caravan authorizes no onboarding,
offer, install, contact, conformance request, or other request.

## Acceptance environment

All mutating onboarding and offer flows run only against the deterministic
task-local Phase-0 fixture. Live MCP use is limited to read-only protocol,
schema, and health probes.

The exact bounded manifest supplies only the dedicated synthetic Base Sepolia
key, fixture-only capability, mock/test payment evidence, fixture URLs, fixed
time, and their named sole consumers. Missing or extra inputs fail
machine-readably. Never print, persist, transcript, reuse, or forward a key,
capability, proof, payment evidence, or signature.

## Consent before conformance and onboarding

1. Review the seller's public HTTPS domain origin, unsigned legacy AgentCard,
   capacity endpoint, products, regions, and settlement preferences locally.
2. Confirm the AgentCard has the exact standing disclaimer and that the domain
   proof, AgentCard, and capacity endpoint agree on seller identity and origin.
3. Render the exact conformance target and request fields: `offerId`, `qty`,
   `manifestDraftHash`, and `nonce`. Explain that conformance makes one outbound
   request to the fixture capacity endpoint. Run `conformance` with
   `action: "propose"`, display the canonical action and safe execution context,
   and ask for affirmative consent bound to those unchanged fields.
4. After consent, repeat the unchanged request with `action: "submit"` and the
   returned digest. Run conformance once. A timeout, redirect, signature failure,
   origin mismatch, malformed body, or identifier mismatch fails closed.
5. If conformance passes, render the exact onboarding card and target, explain
   the fixture mutation, and obtain a separate affirmative consent bound to
   unchanged fields. Use the same propose-display-submit envelope; only then
   execute one digest-bound `onboard-seller`.

A decline or silence before either consent causes zero SDK/MCP calls, child
processes, filesystem writes, installs, contact lookups, messages, account
creation, or outbound requests for that proposed step. Never repeat a completed
decision.

## Post the first offer

Render every field of the frozen `OfferInput` before submission:

- `sellerId`, `productId`, ordered `tiers` (`minQty`, `unitPrice`), and `expiry`;
- `maxOutstandingQty` and `minCommittedQtyPerBindingTier`;
- `regions`, `substitutionPolicy`, and `taxShippingExclusions`;
- `settlementMethods`, `sellerBondLevel`, and `bindingFlag`.

Explain that a binding offer participates as binding under the frozen matcher
rules while an indicative offer does not make the same commitment, and that
visible commitment evidence may affect clearing. Promise no result. Run
`post-offer` with `action: "propose"`, display the canonical action and execution
context, and obtain separate affirmative consent bound to the complete unchanged
offer. Submit the same request with the returned digest and run at most one
fixture offer mutation.

When a capacity check arrives, confirm only capacity the signed endpoint can
truthfully support. Never fabricate capacity, turn unavailable into zero, or
expose a private demand roster. Counterparties settle directly. Caravan does not
receive, custody, process, or adjudicate settlement and does not settle a bond.
After an actual fixture outcome, offer the separate exact-outcome `attest` step;
it uses the same digest-bound proposal and submit sequence, and the signer
remains local.

## Optional network suggestion

After a useful result, ask once whether the user wants onboarding steps or an
editable invitation draft for a supplier they already know. Consent permits only
displaying reviewed text. Never enumerate or scrape contacts, send an
invitation, perform outreach, create an account, self-install, or claim authority
for another person. Decline or silence stops without another prompt or side
effect.
