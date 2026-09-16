# Per-agent disclosure specification

> EXPERIMENTAL — TEST NETWORK ONLY — NOT A FINANCIAL PRODUCT OR SERVICE — NO REAL FUNDS — AS IS, NO WARRANTY, NO LIABILITY — USE AT YOUR OWN RISK

The disclosure endpoint is a delayed, read-only view of factual participation evidence. Disclosure never changes matching, ranking, eligibility, tier selection, allocation, fees, credits, or slashing.

A projection may include a public identity tier, contact-safe skill names, decayed counts of effective completed attestations, capacity-check reliability, counterparty diversity, and slash-event counts. Missing or privacy-suppressed evidence stays `null` or unavailable; it never becomes zero.

Completion credit requires an effective co-signed manifest outcome. A price statistic exists only when the eligible parties agreed on the same realized unit price. Conflicting or incomplete facts do not yield an agreed price. Recency weighting uses the published policy and cannot be backdated by callers.

The public response excludes raw attestations, prices that have not satisfied the release policy, contact endpoints, payment evidence, capabilities, wallets, transaction credentials, private roster links, and internal identifiers. Query strings and credential-bearing headers are rejected. Responses are bounded JSON with `cache-control: no-store`.

Disclosure is informational. It does not establish identity, beneficial ownership, KYC, inventory, delivery, future performance, or creditworthiness.
