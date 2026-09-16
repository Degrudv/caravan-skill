# Payment rails

> EXPERIMENTAL — TEST NETWORK ONLY — NOT A FINANCIAL PRODUCT OR SERVICE — NO REAL FUNDS — AS IS, NO WARRANTY, NO LIABILITY — USE AT YOUR OWN RISK

Every paid reveal or paid-detail operation follows one interface:

```text
quote → require402Envelope → verifyPayment → receipt
```

The server derives the exact role, pool notional, fee band, asset, network, and payee. A caller cannot substitute them. A quote is not payment authority. The agent must display the exact current test/mock quote and receive a new affirmative decision before sending unchanged evidence.

Phase 0 permits `mock`, `x402-testnet`, and non-transferable `credits` rails. Mainnet and card rails are phase-gated and fail before constructing a usable quote. Testnet evidence must match the quoted network, asset, payee, amount, payer, nonce, and resource. Nonces are one-use.

Credits are internal test units. They are non-transferable, non-cash-convertible, and cannot be withdrawn. No rail authorizes the downstream purchase: Caravan does not custody or settle the commercial transaction.
