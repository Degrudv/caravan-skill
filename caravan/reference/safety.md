# Safety and authority

> EXPERIMENTAL — TEST NETWORK ONLY — NOT A FINANCIAL PRODUCT OR SERVICE — NO REAL FUNDS — AS IS, NO WARRANTY, NO LIABILITY — USE AT YOUR OWN RISK

## What Caravan is not

Caravan is a non-custodial test-network matchmaker. It does not custody funds,
process payments for counterparties, settle transactions, adjudicate disputes,
promise a deal, promise savings, or act for a buyer, seller, or counterparty.
Counterparties settle directly.

The current Phase-0 fee table is exact from `params/caravan2.params.json`:

| Pool notional | Buyer reveal | Seller reveal |
| --- | ---: | ---: |
| At most USD 1,000 | USD 0.25 | USD 1 |
| At most USD 10,000 | USD 1 | USD 5 |
| At most USD 100,000 | USD 5 | USD 20 |
| Above USD 100,000 | USD 10 | USD 50 |

Show the exact current quote before reveal; it is authoritative. The fixture's
mock rail transfers nothing and produces only deterministic test evidence. The
Base Sepolia test rail, when separately configured, exact-binds the quote to the
explicitly injected test fee wallet. The credits rail debits only a
non-transferable internal test ledger. Mainnet and Stripe remain phase-gated.
Caravan never receives a bond; peer-held bond outcomes go only where the frozen
params and contract specify. The reveal fee is charged for access to the
manifest whether or not the downstream deal succeeds.

## Consent and side effects

Skill selection is never consent. Before any allowed request or mutation,
render every material field, identify the exact target and effect, explain the
non-exclusive or direct-settlement boundary, and obtain an explicit affirmative
answer bound to unchanged fields. Obtain separate consent for onboarding, an
offer, reveal, commitment, and attestation. A decline or silence means no
SDK/MCP call, child process, filesystem write, install, contact lookup, message,
account creation, or outbound request. Never retry or replace a completed model
decision.

For T-M7.3 acceptance, every mutation targets only the deterministic task-local
Phase-0 fixture. Live MCP probes are read-only protocol, schema, and health
checks. This skill grants no authority to create a live capability, write
deployed D1, republish a pool, change an API or MCP deployment, publish a package
or listing, or move value.

## Credentials and private data

Accept only the explicit bounded fixture manifest and its exact sole-consumer
map. Never inspect ambient credentials. Never print, persist, transcript, copy,
reuse, or forward a key, capability, proof, payment evidence, or signature.

Never expose a matcher snapshot, manifest roster, payment/cluster/ledger
linkage, attestation signer or signature, exact private clearing fact, private
product detail, or per-agent record to an unauthorized viewer or through logs,
errors, transcripts, documentation, public output, or artifacts. An authorized
interactive result may show the user's own rendered intent and the minimum
correlated match fields needed for an informed choice. A second narrow exception
permits an endpoint actually present in the paid staged-reveal response for an
authorized viewer after both parties have paid. Show it only in that exact
interactive result for direct settlement; never show it to an unpaid or
unauthorized viewer or copy it to a log, error, transcript, public output, or
artifact. Fail closed on redirects, origin changes, identity mismatch,
malformed results, or missing authority.

## Savings evidence

Static copy contains no quantified savings claim or promised outcome. Runtime
copy may describe only a current public Caravan clearing-price-history response
fetched in the same conversation for the exact requested product, with its date
or period. It must not predict a future result.

For empty, unavailable, malformed, incomplete, mismatched-product, or non-public
evidence, use exactly:

> No qualifying public Caravan price history is available for this exact product, so no savings figure is shown.

Keep the reveal quote, taxes and shipping, downstream-deal risk, and direct
settlement separate from historical price evidence.

## Ethical network boundary

After a useful check and consent, Caravan may display only a reviewed local
install command, seller-onboarding steps, or a user-editable invitation draft.
It never self-installs, changes another agent's directories without a separate
explicit install request, enumerates or scrapes contacts, sends outreach,
creates accounts, or claims authority for someone else. Decline or silence ends
the suggestion without a repeated prompt.

## Phase boundary

T-M7.3 defines but does not deploy later listing or funnel measurement. T-M7.5
owns registry submission and live-listing proof. A later expressly authorized
measurement task owns any privacy-safe aggregate funnel. No synthetic or
verification install is organic adoption.
