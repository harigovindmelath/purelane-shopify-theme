# Product Seed Plan

The CSV in `data/purelane-products.csv` is designed for Shopify Admin's product import flow.

## Import steps

1. Open Shopify Admin for `purelane-dev`.
2. In the left navigation, open **Products**.
3. Select **Import**.
4. Choose the CSV file `shopify-theme/data/purelane-products.csv`.
5. Review the preview before importing.
6. Confirm that the products are active after import.
7. Open the product list and verify the required edge cases below.

## Required edge cases

- **Sold out:** Magic Eraser has inventory quantity `0` and inventory policy `deny`.
- **No image:** Magic Eraser intentionally has an empty image field.
- **Long title:** Foaming Kitchen Cleaner uses a deliberately long title to test product-card wrapping.

## After import

Create a collection named **Bestsellers** and add the initial products that should appear in the Shop section. Collection membership is intentionally not encoded in the product CSV so merchandising remains editable in Shopify Admin.

Product media is not invented in the seed file. Add final product images through Shopify Admin before visual QA, while keeping Magic Eraser image-free for the required edge-case test.
