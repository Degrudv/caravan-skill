# Payment receipts and fee reporting

> EXPERIMENTAL — TEST NETWORK ONLY — NOT A FINANCIAL PRODUCT OR SERVICE — NO REAL FUNDS — AS IS, NO WARRANTY, NO LIABILITY — USE AT YOUR OWN RISK

A successful Phase 0 payment can be projected into a signed `caravan.payment-receipt.v1` record. The receipt binds the rail, network, asset, payee, payer when available, exact amount, resource, nonce, transaction or ledger reference, and occurrence time.

Receipt creation accepts only already-verified rail evidence. A mismatch in any quoted fact fails closed. The public response may carry an encoded receipt, but payment signatures, capabilities, private contact data, and service credentials must never enter logs or artifacts.

Daily fee summaries use integer units and stable hashes of private references. They expose bounded totals and counts without exposing raw payment or ledger identifiers. Missing or unreported evidence stays unavailable; it is never reported as zero. Fee reporting does not establish downstream settlement, delivery, revenue, or profitability.
