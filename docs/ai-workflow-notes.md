# AI Workflow Notes

This document is intentionally kept separate from theme code and storefront files.

## Delegated work

To be completed during implementation:

- Repetitive Liquid scaffolding
- Initial section schema drafts
- Reusable markup suggestions
- Responsive breakpoint review
- Accessibility review checklist
- Test-case and edge-case checklist generation

## Human verification

The following areas require direct verification against Shopify and the reference prototype:

- Shopify Liquid object and filter behavior
- Product, variant, inventory, and publication behavior
- Theme editor resilience
- Combo data modeling
- Cart and checkout behavior
- Mobile layout at 375px
- Keyboard navigation and reduced-motion behavior
- Performance-sensitive asset loading

## Known failure boundaries

Automated suggestions must not be treated as authoritative for Shopify APIs, cart behavior, inventory modeling, or theme-editor lifecycle behavior. Those areas are verified against Shopify and the rendered storefront before submission.

## Reusable process for future storefronts

The repeatable process is:

1. Extract the visual and content contract from the prototype.
2. Identify which data belongs to Shopify products, collections, metafields, metaobjects, or section settings.
3. Build and verify the shared components before composing sections.
4. Test required content edge cases before polishing motion.
5. Record architectural decisions and rejected approaches in the repository.
