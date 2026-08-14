# Combo Metaobject Definition

The Combos and Bundles sections use a shared Shopify metaobject for
merchandising, with real Shopify products as the source of truth for
commerce (price, inventory, availability, cart).

## Definition

- **Name:** Purelane Combo
- **Type:** `purelane_combo`

## Fields

| Key | Type | Required | Purpose |
|---|---|---|---|
| `title` | Single-line text | Yes | Customer-facing combo/bundle name |
| `short_description` | Multi-line text | Yes | Description shown on the card |
| `badge` | Single-line text | No | Label such as "Most popular" or "Best value" |
| `combo_product` | Product reference | Yes | The real Shopify product sold when the CTA is submitted |
| `included_products` | List of product references | Yes | Catalog products displayed inside the combo/bundle |
| `savings_label` | Single-line text | No | Optional editorial label such as "Biggest saving" |
| `highlighted` | Boolean | No | Gives the featured card its permanent accented treatment |

## Data rule

`combo_product` is the source of truth for price, compare-at price,
availability, inventory, and cart behavior. The metaobject only controls
merchandising relationships and presentation — nothing is hardcoded or
calculated in Liquid. If a combo's price changes, update the real Shopify
product, not the metaobject entry.

## Current entries

- Kitchen Essentials
- Laundry Care Bundle
- Complete Home Bundle (`highlighted: true`)
- Bathroom Deep Clean
- Hard Water Solution Kit

Each entry references a real, purchasable combo product for `combo_product`
and 2–4 catalog products for `included_products`.
