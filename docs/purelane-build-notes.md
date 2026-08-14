# Purelane Shopify Theme — Build Notes

## Scope delivered
The Dawn-based homepage rebuild covers the assignment sections:

1. Hero
2. Reviews
3. Combos
4. Bundles
5. Product Grid / Shop

Homepage order: Hero → Reviews → Combos → Bundles → Product Grid / Shop.

## Shopify data wiring
- Product Grid uses the selected Bestsellers collection, real product URLs, prices, sold-out state, and empty-image handling.
- Combos and Bundles use the `purelane_combo` metaobject:
  - `title`
  - `short_description`
  - `badge`
  - `combo_product`
  - `included_products`
  - `savings_label`
  - `highlighted`
- Bundle cards render each combo product's featured image.

## Hero
- The Hero keeps the green/purple visual direction from the prototype.
- A proof-and-offer ticker appears at the top of the Hero:
  - Loved by 30,000+ homes
  - Buy any 3 at a flat ₹499
  - Plant-powered and family-safe
- Default Hero art is an asset-free animated ambient composition, so it does not depend on a transparent bottle image.
- The optional featured-product stage remains available in Theme Editor but is off by default. It supports one, two, or three Shopify products per slide and links to a product or a manually selected destination.

## Motion and accessibility
- `assets/purelane-motion.js` handles reveal transitions, desktop pointer response, Hero stage rotation, and the desktop review marquee.
- Motion is disabled under `prefers-reduced-motion: reduce`.
- The review marquee's cloned cards are hidden from assistive technology.
- Hero carousel dots support pointer and keyboard focus, and auto-rotation pauses on hover/focus.

## Recent visual polish
- Combo rail thumbnails now use `object-fit: contain`, avoiding cut-off product art. Combo cards have taller trays and larger image frames.
- Bundle cards use a larger image area with `object-fit: contain` so composite bundle images remain readable.
- The product carousel is opt-in so unconfigured product blocks cannot spoil the default Hero.

## Final manual QA checklist
- Confirm GitHub sync completes in Shopify before previewing.
- Preview the homepage at desktop and mobile widths.
- In Theme Editor, leave **Enable featured-product stage** off unless all relevant product images are configured.
- Check the product card for Magic Eraser (sold out/no image), a long title, and keyboard focus.
- Test with the device/system reduced-motion setting enabled.
- Confirm the live store uses the intended background image and that the Hero proof ticker remains below the header.
