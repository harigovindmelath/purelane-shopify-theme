# Purelane Shopify Theme Customizations

This directory contains the Purelane storefront implementation intended for a clean Shopify Dawn 16.0.0 theme.

## Source of truth

- Visual reference: `attached_assets/purelane-homepage_1786552071712.html`
- Product seed data: `data/purelane-products.csv`
- Project decisions: `../docs/purelane-build-notes.md`

## Planned theme structure

```text
assets/
  purelane-sections.css
  purelane-sections.js
sections/
  purelane-hero.liquid
  purelane-product-grid.liquid
  purelane-combos.liquid
snippets/
  purelane-product-card.liquid
  purelane-product-media.liquid
  purelane-combo-card.liquid
templates/
  index.json
```

The theme files will be added incrementally. Each milestone should remain independently reviewable and uploadable to the Dawn development theme.

## Local workflow

1. Keep a clean Dawn 16.0.0 theme as the base.
2. Add the Purelane files from this directory.
3. Configure the homepage through the Shopify theme editor.
4. Verify the result at desktop and 375px mobile widths.
5. Commit each completed milestone with a message describing the engineering change.

Do not commit store passwords, API tokens, connector settings, or other credentials.
