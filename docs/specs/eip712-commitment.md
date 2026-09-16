# EIP-712 purchase commitment specification

> EXPERIMENTAL — TEST NETWORK ONLY — NOT A FINANCIAL PRODUCT OR SERVICE — NO REAL FUNDS — AS IS, NO WARRANTY, NO LIABILITY — USE AT YOUR OWN RISK

The EIP-712 domain is `CaravanCommit`, version `1`, chain ID `84532`. The commitment is an off-chain signature posted to Caravan, so the domain has no `verifyingContract`.

```text
PurchaseCommitment(
  bytes32 manifestHash,
  string poolId,
  address buyer,
  address seller,
  string productId,
  uint256 qty,
  uint256 unitPrice,
  string settlementMethod,
  uint256 expiry,
  bytes32 termsHash
)
```

The signature is valid only for the exact activated manifest, participant, allocation, seller wallet, product, price, settlement method, future expiry, and standard-terms hash. The signer must equal `buyer`; the authenticated owner must be a buyer member of that manifest. Any mismatch fails closed.

A commitment does not move funds or prove settlement. The user chooses bonded, signed, or unbonded participation after reveal. Bond deployment and any token approval or deposit are separate participant actions with separate consent.
