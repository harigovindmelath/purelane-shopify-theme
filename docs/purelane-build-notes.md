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
  utility with full `prefers-reduced-motion` support, replacing the prototype's
  manual scroll-position polling.
- Fixed a styling bug where the highlighted bundle card's CTA button only showed
  its accent color on hover — the prototype's featured card is meant to read as
  visually distinct at rest, so this was corrected to apply unconditionally to
  the highlighted card.
- Added a desktop auto-advance to the Combos rail, which isn't present in the
  original prototype (the prototype only scrolls on manual swipe/drag). This was
  a deliberate choice to improve discoverability of the additional combos on
  wide viewports where the swipe affordance is less obvious than on touch
  devices — flagging it here explicitly since the brief asks for faithful
  reproduction by default; this is a knowing exception, not an oversight.
- Kept the prototype's actual visual design and section order (Hero → Reviews →
  Combos → Bundles → Shop) rather than reinterpreting the layout. One example of
  a change I considered and rejected: replacing the Combos section's
  multi-thumbnail "included products" row with a single composite image per
  card. I reverted that after recognizing it was a genuine layout change rather
  than a technical fix.

## What I'd do with more time

- Swap the placeholder product photography for a consistent, properly cropped
  image set — the current images have inconsistent padding that requires CSS
  workarounds to fill their containers cleanly.
- Integrate a real review platform/app instead of static metaobject-driven
  content for the Reviews section, so review counts and ratings stay accurate
  over time.
- Run a full Lighthouse/Core Web Vitals pass and address any remaining
  render-blocking assets — this wasn't formally benchmarked, only spot-checked.
- Consolidate a few CSS rules that accumulated through iterative fixes (notably
  the combo thumbnail `object-fit`/`transform` rules, patched several times in
  place rather than cleanly rewritten once the right approach was found).
- Reconsider the Combos auto-advance decision above with real usage data —
  right now it's a judgment call, not something validated against actual
  visitor behavior.
