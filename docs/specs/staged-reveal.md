# Staged reveal service

> EXPERIMENTAL — TEST NETWORK ONLY — NOT A FINANCIAL PRODUCT OR SERVICE — NO REAL FUNDS — AS IS, NO WARRANTY, NO LIABILITY — USE AT YOUR OWN RISK

An activated manifest has an immutable public batch hash and a private participant roster. Before payment, a participant sees only their authorized staged view: manifest and pool identifiers, pseudonymous roster entries, committed quantities, roles and commitment tiers, binding terms, template reference, and reveal deadline.

Private contact and commercial fields remain hidden until the exact participant pays an approved Phase 0 reveal quote. A paid buyer receives only the bilateral seller information needed for that pool. A paid seller receives only the authorized buyer pages. Private pages are bounded and paginated.

The payment proof is bound to the manifest and participant. Replays, evidence for another resource, redirects, malformed bodies, expired deadlines, non-members, and changed manifest authority fail closed. A paid reveal does not create a purchase commitment or settle a transaction.

Replacement manifests preserve an explicit predecessor link. Activation, payment, commitment, attestation, replacement, and deletion events expose only contact-safe evidence. Capabilities, payment signatures, raw receipts, private contacts, and hidden roster links never appear in public output.
