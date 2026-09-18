# Base Sepolia NoShowBond template

> EXPERIMENTAL — TEST NETWORK ONLY — NOT A FINANCIAL PRODUCT OR SERVICE — NO REAL FUNDS — AS IS, NO WARRANTY, NO LIABILITY — USE AT YOUR OWN RISK

This public metadata document identifies Caravan's `no-show-bond-v1` contract template on Base Sepolia.
The registry entry binds this document's immutable public commit URL to the deployed template runtime hash.

## Canonical template identity

- Network: Base Sepolia
- Chain ID: `84532`
- Registry version: `no-show-bond-v1`
- Solidity compiler: `0.8.26`
- Optimizer: enabled, 200 runs
- EVM version: Cancun
- Canonical `NoShowBond` runtime codehash:
  `0x8a75d3bb135bb599fa4c1495ffee84db49e86a619574a612c01cc92076743ba3`
- Test token used by the reproducibility fixture: Circle test USDC at
  `0x036CbD53842c5426634e7929541eC2318f3dCF7e`

The runtime hash is the authoritative template identifier. It binds the contract bytecode and Solidity
immutables. Registry consumers must also verify the Base Sepolia chain ID, exact version string, exact metadata
URI, registry runtime, and permanently renounced registry publisher before accepting a template reference.

## Scope

`NoShowBond` is an immutable, participant-controlled testnet contract for mechanical deposits, performance
signals, settlement, and pull withdrawals. It is not custody, escrow, dispute adjudication, identity verification,
or a warranty of performance. Caravan does not control participant funds. Phase 0 uses faucet-issued Base Sepolia
ETH and test tokens only.

The public registry is append-only and its publisher is permanently renounced after the exact entry is
registered. A zero publisher prevents later additions or substitutions. Consumers must fail closed if any
registry field or bytecode readback differs from the values recorded by the current public deployment descriptor.

## Independent readback

Use any Base Sepolia JSON-RPC provider to read the registry's `templates("no-show-bond-v1")` entry and
`publisher()`. Hash the runtime bytecode of a deployed `NoShowBond` instance with Keccak-256. Accept the reference
only when the returned template hash is the canonical hash above, the metadata URI is this commit-addressed public
document, and `publisher()` is the zero address.

Authoritative network references: [Base network settings](https://docs.base.org/base-chain/quickstart/connecting-to-base),
[Base faucet directory](https://docs.base.org/base-chain/network-information/network-faucets), and
[Circle test USDC addresses](https://developers.circle.com/stablecoins/usdc-contract-addresses).
