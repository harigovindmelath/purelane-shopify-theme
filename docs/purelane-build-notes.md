# Purelane Shopify Theme — Build Notes

## What I'd flag about the original prototype file

The prototype (`purelane-homepage.html`) was a strong visual reference but not
production-safe as-is:

- All product data — prices, compare-at prices, star ratings, review counts — was
  hardcoded directly into the markup. None of it could be changed by a merchant
  without editing code.
- Reviews were faked and literally duplicated in the DOM (the same 5 reviews
  repeated twice) to fake an infinite marquee loop, rather than looping a single
  data source.
- Product art for the Shop grid and Combos was hand-drawn inline SVG, pasted
  per-instance rather than reused as a component — the same visual pattern
  repeated 100+ lines of markup per card.
- There was no handling anywhere for real-world catalog states: sold-out
  products, products with no image, or long product titles. The layout was never
  tested against anything other than clean placeholder data.
- The side nav links to `#voices`, but the actual reviews section id is
  `#reviews` — a dead anchor bug already present in the prototype.
- Scroll-triggered reveal animations had no `prefers-reduced-motion` handling.

## What I changed, and why

- Replaced all hardcoded product/price/review data with real Shopify objects:
  products, collections, and a custom `purelane_combo` metaobject for combo and
  bundle merchandising (fields: `title`, `short_description`, `badge`,
  `combo_product`, `included_products`, `savings_label`, `highlighted`). The
  combo's real Shopify product is always the source of truth for price,
  inventory, and cart behavior — nothing is calculated or hardcoded in Liquid.
- Rebuilt repeated card markup (product cards, combo cards) as single reusable
  Liquid snippets instead of copy-pasted blocks, so a design tweak only needs to
  happen in one place.
- Added real edge-case handling in the Product Grid: sold-out state (disabled
  button + badge), no-image fallback, and verified a long product title doesn't
  break the card layout — tested against seeded catalog data including all three
  cases.
- Rewrote the reveal-on-scroll animation using a shared `IntersectionObserver`
  utility
