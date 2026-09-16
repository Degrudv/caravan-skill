# EIP-712 co-signed attestation specification

> EXPERIMENTAL — TEST NETWORK ONLY — NOT A FINANCIAL PRODUCT OR SERVICE — NO REAL FUNDS — AS IS, NO WARRANTY, NO LIABILITY — USE AT YOUR OWN RISK

Each revealed-manifest member may append one immutable outcome fact. Caravan verifies the signature and active membership, records the fact once, and reports the current manifest resolution. It does not decide which side is truthful, transfer value, settle a purchase, or slash a bond.

The EIP-712 domain is:

```text
name: CaravanAttestation
version: 1
chainId: 84532
```

The `Attestation` message contains `manifestHash`, `poolId`, `role`, `outcome`, and `realizedUnitPrice`. Roles are `buyer` or `seller`. Outcomes are `completed`, `seller_default`, or `buyer_default`. A realized price is meaningful only for `completed`.

The signer must be the wallet bound to an active party with the declared role in the exact manifest and pool. Replaying the same fact is idempotent. A second, different fact from the same member is a conflict. Facts are append-only.

Resolution remains `pending` until the required member facts exist. Compatible facts yield `effective`; incompatible facts yield `disputed`. An effective completion exposes only aggregate resolution and eligible public disclosure evidence. Private member-to-fact linkage and raw signed facts remain protected by the retention policy.
