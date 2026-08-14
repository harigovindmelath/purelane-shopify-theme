# Purelane Shopify Theme — AI Workflow Notes

## What I delegated, and to what

- **Claude** handled: analyzing the prototype file section by section,
  architecting the Liquid sections/snippets/schema, writing the metaobject field
  spec, debugging git and GitHub authentication issues, and drafting prompts for
  the other tools below.
- **Codex** handled additional implementation work on the theme codebase,
  including the Reviews and Bundles sections and later styling/behavior fixes.
- **Shopify's built-in AI assistant (Sidekick)**, run directly in Shopify Admin,
  handled: creating the `purelane_combo` metaobject definition and its entries,
  creating the combo products, and changing the store currency.
- **Gemini** produced placeholder product photography for the catalog, using a
  fixed prompt template (consistent bottle shape, lighting, background) with a
  category-based accent color system so the generated catalog reads as one
  cohesive product line rather than random images.

## Where it failed, and how I caught it

- Sidekick's first pass at the metaobject definition used the wrong field keys
  (`label` instead of `badge`, `savings_text` instead of `savings_label`) and
  was missing three required fields entirely. I caught this by cross-checking
  the created fields against my written spec before building any entries on top
  of it — catching a schema mismatch before it's load-bearing is much cheaper
  than after.
- Sidekick needed the literal, exact product title to link product references
  correctly — a paraphrased or shortened product name silently failed to match.
- The image generation tool occasionally garbled small label text and invented
  its own brand name when my prompt didn't explicitly lock one in — fixed by
  being more explicit (brand name in quotes, minimal label text) rather than
  trying to fix it after generation.
- Codex built the Reviews and Bundles sections independently and reported the
  work complete against the assignment brief. Rather than accepting that at
  face value, I cross-checked its specific behavioral claims against the
  original prototype's actual source code — this caught two real deviations
  that weren't visible from the summary alone: an auto-advance timer added to
  the Combos rail that doesn't exist anywhere in the prototype (which only ever
  scrolls on manual swipe), and a highlighted card's CTA button that only
  showed its accent color on hover instead of permanently, unlike the
  prototype's always-visible highlight treatment.
- Mid-build, I nearly replaced the Combos section's multi-thumbnail layout with
  a single composite image per card. That would have been a genuine redesign,
  not a bug fix, so I reverted it after checking it against the assignment's own
  rule about not redesigning the prototype's actual layout.
- I lost real time to GitHub authentication issues while working from a
  browser-based editor (failed password prompts, a malformed access token from
  a copy-paste error, wrong token scope). I resolved it by switching to
  Shopify's native GitHub theme integration, which removed the need for manual
  token-based pushes for the rest of the build.

## What I'd systematize for 20 more of these

- Always verify AI-generated schema/field keys against a written spec before
  building content on top of it — a five-minute check prevents an expensive
  rebuild later.
- Keep a standing "is this a fix or a redesign" check before any visual change,
  especially when an AI tool suggests a layout improvement — it's easy to drift
  from reproducing the prototype into improving it without noticing.
- Never accept a completion report from one AI tool at face value, especially
  when handing work off between different tools on the same codebase — verify
  specific claims against the actual source file or spec directly, the way I
  caught the Combos auto-advance and hover-only CTA issues by grepping the
  original prototype rather than trusting the summary.
- Set up the GitHub-to-Shopify native theme connection at the very start of a
  project, not partway through.
- Build reusable prompt templates for repetitive image generation tasks,
  locking in brand name, minimal label text, and exact colors from the start
  rather than discovering the right constraints through several regenerations.
