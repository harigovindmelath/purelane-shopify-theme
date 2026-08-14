# Purelane — Shopify Theme

Production Shopify implementation of the Purelane homepage prototype, built on
Dawn for the Troopod AI Product Engineer assignment.

## What this is

A rebuild of a static HTML/CSS/JS homepage prototype (plant-based homecare
brand "Purelane") into production-safe Shopify theme sections — merchant
editable, backed by real Shopify data, and safe under the theme editor.

## Sections built

1. **Hero** (`sections/purelane-hero.liquid`)
2. **Reviews** (`sections/purelane-reviews.liquid`)
3. **Combos** (`sections/purelane-combos.liquid`) — backed by the
   `purelane_combo` metaobject
4. **Bundles** (`sections/purelane-bundles.liquid`)
5. **Product Grid / Shop** (`sections/purelane-product-grid.liquid`) — pulls
   from a real Shopify collection

Homepage order: Hero → Reviews → Combos → Bundles → Product Grid, matching the
prototype's own section order.

## Structure 
- assets/ Section-specific and shared CSS/JS (purelane-.css, purelane-.js)
- config/ Theme settings + homepage section configuration
- layout/ theme.liquid (includes the Purelane stylesheet links)
- sections/ The 5 Purelane homepage sections
- snippets/ Reusable card components (product card, combo card, etc.)
- docs/ Build notes, AI workflow notes, metaobject spec
## Data model

- Product Grid reads from a real `Bestsellers` collection.
- Combos and Bundles are backed by a `purelane_combo` metaobject — see
  `docs/combo-metaobject-definition.md` for the full field spec. The
  `combo_product` field is always the source of truth for price, inventory,
  and cart behavior; nothing is hardcoded or calculated in Liquid.

## Docs

- [`docs/purelane-build-notes.md`](docs/purelane-build-notes.md) — what was
  wrong with the original prototype, what was changed and why, what's left for
  more time.
- [`docs/ai-workflow-notes.md`](docs/ai-workflow-notes.md) — how AI tools were
  used across this build, where they needed correction, what I'd systematize.
- [`docs/combo-metaobject-definition.md`](docs/combo-metaobject-definition.md)
  — the `purelane_combo` metaobject field spec.

## Theme sync

This repo is connected to the live Shopify dev store via Shopify's native
GitHub theme integration — pushes to `main` sync to the theme automatically,
and theme editor changes commit back here automatically.
