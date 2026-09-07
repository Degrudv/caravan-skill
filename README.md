# Caravan skill

Procurement, purchasing, group-buying, bulk-discount, price-comparison, seller-demand.

> EXPERIMENTAL — TEST NETWORK ONLY — NOT A FINANCIAL PRODUCT OR SERVICE — NO REAL FUNDS — AS IS, NO WARRANTY, NO LIABILITY — USE AT YOUR OWN RISK

Caravan guides consent-bound aggregate-demand checks, buying intents and seller onboarding.
Counterparties retain settlement control. Selecting or installing the skill does not authorize
payments, publication, outbound requests or other side effects.

## Install

```sh
npx skills add Degrudv/caravan-skill --skill caravan
```

The `caravan/` directory contains the complete skill, buyer/seller guides, API reference and
standalone Node 22 bundle. Read `caravan/SKILL.md` and the applicable guide before use.

## Current execution scope

This Phase 0 adapter requires explicit caller-supplied fixture manifests and inputs. It is
not a production payment client. Its consent and manifest validation intentionally reject
unsupported execution contexts. Do not infer live purchasing capability from installation.
The source shim loads the adjacent bundle; no monorepo checkout or npm SDK install is required.

The frozen bundle SHA-256 is
`c02a1630a02a0a9c16388365821a58d041872c50151155eca4e0021610eec44c`.
Build provenance is included beside the bundle. Installation tests and publisher seed installs
are synthetic verification, not organic adoption.

Project code is Apache-2.0; see LICENSE and NOTICE. Bundled dependencies retain their MIT
licenses in THIRD_PARTY_NOTICES.md.
