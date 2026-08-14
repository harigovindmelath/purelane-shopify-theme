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
