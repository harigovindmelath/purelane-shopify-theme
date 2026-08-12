# Purelane Shopify Assignment

## Project status

Purelane is a plant-based homecare storefront being implemented on top of Shopify Dawn 16.0.0.

The prototype in `attached_assets/purelane-homepage_1786552071712.html` is the visual source of truth. Its implementation is not being copied directly into the production theme.

## Scope

The first delivery prioritizes:

1. Hero
2. Shop / product grid
3. Best-selling combos

The bundles builder is intentionally deferred until the product and combo data models are proven. The reviews rail remains a practical fallback if the combo implementation becomes too risky for the deadline.

## Engineering principles

- Shopify is the source of truth for products, prices, availability, media, cart state, and checkout.
- Merchant-editable content belongs in section settings, blocks, collections, products, or metaobjects.
- Shared product-card markup belongs in a reusable snippet.
- Prototype-only embedded product artwork will not be treated as production catalog data.
- Theme JavaScript must tolerate sections being added, removed, or reordered.
- The storefront must remain usable at 375px and support keyboard navigation, visible focus, and reduced motion.
- No unnecessary apps, libraries, analytics, tracking, or external callbacks are part of the implementation.

## Repository map

```text
docs/
  ai-workflow-notes.md
  purelane-build-notes.md
shopify-theme/
  data/
    purelane-products.csv
  docs/
    product-seed-plan.md
```

Theme sections, snippets, assets, and templates will be added under `shopify-theme/` as each milestone is completed.

## Current milestone

The local repository foundation and first-pass product seed data are ready. Shopify import and catalog verification require the store connection or manual import through Shopify Admin.
