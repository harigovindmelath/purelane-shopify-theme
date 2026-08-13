# Dawn installation checklist

This project contains focused Dawn-compatible sections rather than a complete
replacement theme. Install the files in the active Dawn theme in dependency
order, then configure the homepage in the Theme Editor.

## 1. Upload the files

In Shopify Admin:

1. Open **Online Store → Themes**.
2. Find the active Dawn theme.
3. Open the theme menu and choose **Edit code**.
4. Upload or create the following files using the same folders and filenames:

```text
assets/purelane-sections.css
assets/purelane-hero.css
assets/purelane-combos.css
snippets/purelane-product-card.liquid
snippets/purelane-combo-card.liquid
sections/purelane-hero.liquid
sections/purelane-product-grid.liquid
sections/purelane-combos.liquid
```

Use the files from this repository under `shopify-theme/`. Upload the CSS and
snippets before the sections so the section previews have their dependencies.

## 2. Add the first two sections

Open **Online Store → Themes → Customize** and select the homepage.

1. Add **Purelane hero**.
2. Set the Hero product image and background image when final media is ready.
3. Add **Purelane product grid** below the Hero.
4. Select the `Bestsellers` collection.
5. Save.

The product grid will still render a useful empty state if the collection has
not been selected yet. This prevents a broken-looking section during setup.

## 3. Create combo data before adding Combos

Create the `purelane_combo` metaobject definition using
`docs/combo-metaobject-definition.md`. Then create real combo products and
combo entries in Shopify Admin.

After entries exist:

1. Add **Purelane combos** below the product grid.
2. Select up to six combo entries.
3. Save and preview on desktop and mobile.

## 4. Optional homepage template seed

`templates/index.json` contains the intended section order and sensible
defaults. Use it only if you are comfortable replacing the existing Dawn
homepage template after making a theme duplicate. The Theme Editor is safer
for the first configuration because it preserves the rest of Dawn's homepage
settings.

## 5. Required QA

- Check the homepage at desktop and 375px mobile widths.
- Confirm the sold-out Magic Eraser cannot be added to cart.
- Confirm the image-free product has a readable placeholder.
- Confirm the long kitchen-cleaner title does not overlap price or buttons.
- Tab through the Hero, product cards, and combo cards.
- Check visible focus rings and reduced-motion behavior.
- Reorder sections in the Theme Editor and confirm the layout remains valid.