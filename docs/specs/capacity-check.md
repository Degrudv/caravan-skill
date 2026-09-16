# Seller capacity-check protocol v1

> EXPERIMENTAL — TEST NETWORK ONLY — NOT A FINANCIAL PRODUCT OR SERVICE — NO REAL FUNDS — AS IS, NO WARRANTY, NO LIABILITY — USE AT YOUR OWN RISK

Caravan uses a signed request and response to ask whether an enrolled seller can serve a proposed allocation. A successful check proves only that the configured endpoint returned a valid, current protocol response. It does not prove inventory, reserve stock, create a contract, or guarantee delivery.

The seller publishes `/.well-known/caravan-capacity.json` with exactly:

```json
{"protocol":"caravan.capacity-check.v1","capacityEndpoint":"https://seller.example/capacity","seller":"0x…"}
```

The endpoint accepts `POST` with `protocol`, `offerId`, positive integer `qty`, lowercase `manifestDraftHash`, requester address, nonce, and an EIP-191 signature over those exact fields. The response contains exactly `available`, positive integer `validForSeconds`, seller address, and the seller's EIP-191 signature binding the complete request and response.

Discovery and the endpoint must use clean public HTTPS URLs. Redirects, private or loopback addresses, user information, fragments, unexpected fields, oversized bodies, invalid signatures, signer disagreement, and timeout all fail closed. Both `available: true` and `available: false` are valid conformance results. Unavailable remains unavailable; it is never converted to zero inventory.

A capacity decision is usable only for the request it signed and only during `validForSeconds`. Caravan does not reveal private buyer rosters in a capacity request. A miss records only contact-safe evidence and cannot expose an offer identifier, endpoint, request, nonce, signature, or manifest draft.
