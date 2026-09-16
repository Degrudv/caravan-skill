# Caravan Purchase Commitment — Standard Terms v1

> EXPERIMENTAL — TEST NETWORK ONLY — NOT A FINANCIAL PRODUCT OR SERVICE — NO REAL FUNDS —
> AS IS, NO WARRANTY, NO LIABILITY — USE AT YOUR OWN RISK
>
> **This is NOT legal advice.** These are plain-language B2B commitment terms for a testnet
> experiment. A Phase-1 counsel review is REQUIRED before any mainnet or real-value use.
> `[PHASE-1 COUNSEL REVIEW REQUIRED]`

By signing the EIP-712 `PurchaseCommitment` that references the keccak256 hash of this file
(`termsHash`), the buyer and seller each represent, for the identified pool and manifest:

1. **Intent to transact.** Buyer commits to purchase, and seller to supply, the stated `qty` of the
   identified `productId` at the stated `unitPrice`, via the stated `settlementMethod`, on or before
   `expiry`, subject to the seller's published offer terms (regions, substitution, tax/shipping
   exclusions) incorporated by reference through the manifest.
2. **Non-custodial settlement.** Caravan never holds, moves, or escrows the settlement funds.
   Settlement occurs directly between the counterparties through the chosen method. Caravan provides
   matchmaking and a signed manifest only.
3. **Commitment bond, if any.** Where a `NoShowBond` is used, each party's remedy for the other's
   non-performance is limited to the on-chain bond mechanics (peer-held, distributed to performers).
   No party is entitled to any Caravan-held remedy; Caravan holds nothing.
4. **No dispute adjudication.** Caravan does not arbitrate. Conflicting attestations are published as
   `disputed`; neither party receives a completion credit. That is the entire on-platform consequence.
5. **Testnet status.** All amounts are testnet-denominated. Nothing here is a security, an insurance
   product, a payment service, or a financial instrument.

The `termsHash` in the signed struct binds these exact words. Any change to this file changes the hash
and therefore is a different terms version.
