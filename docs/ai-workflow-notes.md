# Purelane Shopify Theme — AI Workflow Notes

## What I delegated, and to what

- **An AI coding assistant** (chat-based) handled: analyzing the prototype file
  section by section, architecting the Liquid sections/snippets/schema, writing
  the metaobject field spec, debugging git and GitHub authentication issues, and
  writing prompts for the other two tools below.
- **Shopify's built-in AI assistant (Sidekick)**, run directly in Shopify Admin
  from prompts drafted with the coding assistant, handled: creating the
  `purelane_combo` metaobject definition and its entries, creating the combo
  products, and changing the store currency.
- **An AI image generation tool** was used to produce placeholder product
  photography for the catalog, using a fixed prompt template (consistent bottle
  shape, lighting, and background) with a category-based accent color system so
  the generated catalog reads as one cohesive product line rather than random
  images.

## Where it failed, and how it was caught

- Sidekick's first pass at the metaobject definition used the wrong field keys
  (`label` instead of `badge`, `savings_text` instead of `savings_label`) and
  was missing three required fields entirely. This was caught by cross-checking
  the created fields against the written spec doc *before* building any entries
  on top of it — catching a schema mismatch before it's load-bearing is much
  cheaper than after.
- Sidekick needed the literal, exact product title to link product references
  correctly — a paraphrased or shortened product name silently failed to match.
- The image generation tool occasionally garbled small label text (misspelled
  fine print) and invented its own brand name when the prompt didn't explicitly
  lock one in — fixed by being more explicit in the prompt (brand name in
  quotes, minimal label text) rather than trying to fix it after generation.
- Mid-build, there was a real temptation to "fix" the Combos section by
  replacing its multi-thumbnail layout with a single composite image per card.
  This would have been a genuine redesign, not a bug fix, and was caught and
  reverted before shipping by explicitly checking it against the assignment's
  own rule about not redesigning the prototype's actual visual layout.
- A CSS bug (highlighted combo card's CTA only showing its accent color on
  hover, not at rest) went unnoticed through an earlier QA pass because it's
  only visible in the resting state, which wasn't part of the interaction
  checklist at the time — caught later on a second pass.
- Significant time was lost to GitHub authentication issues while working from
  a cloud IDE (browser-based password prompts failing, a malformed access token
  from copy-paste error, wrong token type/scope). This was eventually resolved
  by switching to Shopify's native GitHub theme integration, which removed the
  need for manual token-based pushes entirely going forward.

## What I'd systematize for 20 more of these

- Always verify AI-generated schema/field keys against a written spec *before*
  building any content on top of it — a five-minute check prevents an expensive
  rebuild later.
- Keep a standing "is this a bug fix or a redesign" check before making any
  visual change, especially when an AI suggests a layout improvement — it's easy
  to drift from "reproduce the prototype" into "improve the prototype" without
  noticing.
- Set up the GitHub-to-Shopify native theme connection at the very start of a
  project, not partway through — retrofitting it after work has piled up in a
  disconnected state cost significant time that upfront setup would have
  avoided.
- Build reusable prompt templates for repetitive AI image generation tasks
  (locking in brand name, minimal label text, and exact colors from the start)
  rather than discovering the right constraints through several rounds of
  regeneration.

## What still needed a human

This environment's AI tooling cannot view the authenticated Shopify Theme
Editor preview directly — every visual check, responsive-width test, keyboard
navigation pass, and reduced-motion toggle test in this build was performed
manually and reported back, not verified by AI directly.
