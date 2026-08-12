# Combo Metaobject Definition

The combo section uses Shopify metaobjects for merchandising and Shopify products for commerce.

## Definition

Create a metaobject definition with:

- **Name:** Purelane combo
- **Type:** `purelane_combo`
- **Publish entries:** enabled

## Fields

| Key | Type | Required | Purpose |
| --- | --- | --- | --- |
| `title` | Single-line text | Yes | Customer-facing combo name |
| `short_description` | Multi-line text | Yes | Description shown below the included products |
| `badge` | Single-line text | No | Labels such as “Most popular” or “Best value” |
| `combo_product` | Product reference | Yes | The real Shopify product sold when the CTA is submitted |
| `included_products` | List of product references | Yes | Catalog products displayed inside the combo |
| `savings_label` | Single-line text | No | Optional editorial label such as “Biggest saving” |
| `highlighted` | Boolean | No | Gives the featured card its stronger visual treatment |

## Data rule

The combo product is the source of truth for price, compare-at price, availability, inventory, and cart behavior. The metaobject only controls merchandising relationships and presentation.

Do not enter prices into the metaobject or calculate a selling price from Liquid. If a combo changes price, update the real Shopify combo product.

## Initial entries

Create these after the base product catalog is verified:

1. Kitchen Essentials
2. Laundry Care Bundle
3. Complete Home Bundle
4. Bathroom Deep Clean
5. Hard Water Solution Kit

Each entry should reference the corresponding real products from the imported catalog. Combo products should be created as legitimate purchasable Shopify products, not display-only placeholders.
