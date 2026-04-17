# EDP Handles Website Roadmap and Handover

## Project Position

This document is the working handover for the **full EDP Handles website**. It is intended to let a new chat continue the project without losing the agreed structure, the completed implementation state, or the non-negotiable live-site rules.

The governing principle remains unchanged: **EDP Handles is one progressive live website**. The homepage at `/` must remain intact unless the user explicitly requests a homepage redesign. The `/handles` section is being expanded as part of the same live site, not as a separate microsite or temporary build.

## Confirmed Project Rules

| Area | Confirmed decision |
|---|---|
| Site scope | The website must remain a **full site** at all times. |
| Current development focus | The active build focus is the **`/handles` section** and its connected journeys. |
| Homepage protection | The homepage on `/` must remain intact unless the user explicitly asks for a homepage redesign. |
| Development approach | Build progressively by extending the existing live architecture. |
| Deployment model | The site runs as a **Node/Vite/React web service** and must remain deployable as a real working website. |
| Git workflow | Changes are committed to GitHub `main`, which drives deployment. |
| Render workflow | Render should always reflect the **full current website**, not an isolated feature build. |
| Content strategy | Cosma is an **upstream reference source**, not something to mirror blindly. EDP must remain a curated UK-facing premium distributor experience. |

## What Has Already Been Completed

The project has moved well beyond the earlier planning stage. The homepage has been preserved, the `/handles` route has been turned into a structured collection hub, dedicated family pages now exist, imported Cosma-led product data has been brought into the family pages, and internal EDP-controlled Technical Sheet popups now keep specification journeys inside the site.

| Completed workstream | Current status |
|---|---|
| Homepage preserved on `/` | Complete |
| `/handles` route established and protected | Complete |
| Six family structure integrated into `/handles` | Complete |
| Dedicated family routes created | Complete |
| Imported family listings added to the family pages | Complete |
| Internal Technical Sheet popups implemented | Complete |
| Shared master header unified across routes | Complete |
| Full family cards on `/handles` made clickable | Complete |
| Mobile Technical Sheet containment fix completed | Complete |
| Premium favicon added | Complete |
| GitHub push workflow restored and used successfully | Complete |

## Current Website Interpretation

The website should now be understood as a premium dark-editorial brand site with a working product-family structure emerging inside `/handles`.

The homepage remains the main brand-led entry point. The `/handles` route now acts as the editorial collection overview. The family routes at `/handles/:slug` now provide the first real product-depth layer by combining EDP framing with imported catalogue content, internal specification viewing, and enquiry pathways.

This means the next phase is **not** to re-argue whether family pages should exist. They already do. The next phase is to decide how much deeper the product architecture should become and which new product content should be added next.

## Live Route Structure Now in Place

| Route layer | Current role |
|---|---|
| `/` | Protected homepage and brand-led entry point |
| `/handles` | Editorial overview and family hub |
| `/handles/catalogue` | Alternate catalogue-led handles route |
| `/handles/bridge` | Live imported family-detail page |
| `/handles/integrated` | Live imported family-detail page |
| `/handles/vertical` | Live imported family-detail page |
| `/handles/appliance` | Live imported family-detail page |
| `/handles/knobs` | Live imported family-detail page |
| `/handles/special-designs` | Live imported family-detail page |
| `/404` | Not found route |

## Family Structure: Current Operational Reading

The six family pages should now be treated as the live basis of the collection architecture, not as placeholders.

| Family | Current state | Notes |
|---|---|---|
| Bridge | Imported and live | Includes Bridge and Modular Bridge source content |
| Integrated | Imported and live | Currently absorbs Closed Grip and Modular Closed Grip for now |
| Vertical | Imported and live | Includes Vertical and Vertical Integrated source content |
| Appliance | Imported and live | Smaller imported family but active |
| Knobs & Small Hardware | Imported and live | Active as a family destination |
| Special Designs | Imported and live | Active as a family destination |

A key structural note must be preserved: **Closed Grip** and **Modular Closed Grip** are currently grouped under **Integrated**, but the data has intentionally been structured so they can be separated later if required.

## Technical Sheet Pattern: Current Rule

The product-card specification journey has already been changed from an external-source action into an internal EDP experience.

| Pattern | Required behaviour |
|---|---|
| Product card technical action | Opens an internal `Technical Sheet` modal |
| External source links from cards | Do not use |
| PDF download requirement | Do not introduce for this feature |
| Technical content model | Show imported sizing, finish, code, and row-based technical data inside the EDP interface |
| Mobile behaviour | Must remain visually contained and scrollable on small screens |

## Navigation Principles Now Confirmed

The site should continue using a **persistent shared header** across the homepage, `/handles`, `/handles/catalogue`, and the family pages. Navigation should feel like one connected premium website rather than detached route-owned experiences.

| Navigation principle | Current expectation |
|---|---|
| Shared top header | Must remain unified across routes |
| Family overview cards | Entire card area should remain clickable |
| Homepage continuity | Homepage must not be overwritten by handles work |
| Connected journey | Users should move cleanly from homepage to `/handles`, then into family pages and enquiry paths |

## Current Next-Step Decisions Still Open

The key open questions are now more specific than they were in the original roadmap.

| Priority | Decision or next action | Why it matters |
|---|---|---|
| 1 | Confirm live deployment after the latest push | Ensures the mobile Technical Sheet fix and favicon have landed cleanly in production |
| 2 | Decide whether to remain at family-listing depth or introduce internal product-detail pages | This is the main structural product decision still unresolved |
| 3 | Preserve and use subfamily labels in future imports | Keeps later split-outs such as Closed Grip or Modular Closed Grip straightforward |
| 4 | Refine enquiry and trade-conversion pathways from product cards and family pages | Improves commercial usefulness without disturbing structure |
| 5 | Extend finishes and specification guidance | Builds the next editorial-commercial layer around the imported catalogue content |
| 6 | Import additional products from future supplied PDFs or source documents | This is the most likely next production task from the user |

## Working Rule for Future Product Expansion

Any further product additions should follow the now-established pattern rather than inventing a second system.

| Rule | Instruction |
|---|---|
| Read first | Review documentation and the current codebase before changing anything |
| Verify current state | Treat docs as context, but confirm against the actual implementation |
| Wait for direction | Do not add products until the user specifies which new products or PDFs to process |
| Preserve structure | Add depth inside the current `/handles` architecture rather than replacing existing pages |
| Keep EDP voice | Adapt source content into EDP language rather than copying blindly |
| Keep technical control internal | Use internal Technical Sheet-style experiences rather than external card links |

## Suggested Prompt for a New Chat

A new chat can begin from this exact project position using wording like this:

> We are continuing the EDP Handles website as one progressive live website. The homepage at `/` must remain intact and must never be replaced unless I explicitly request that. The codebase is the existing Node/Vite/React site deployed from GitHub and Render. Before making any changes, first read the key repository documents under `docs/`, then inspect the current handles-related code so you understand the present implemented state. Treat the documentation as context, but verify against the actual codebase because some older roadmap items were written before the family-page rollout was completed. After reading everything, stop and wait for my next instruction. Do not edit files, do not generate assets, do not change routes, do not commit, and do not push anything until I explicitly tell you what products from the PDFs to add and how I want them handled. I will provide the GitHub token later when credentialed access is needed.

## Final Continuity Note

The strategic position is now clear. The project is no longer in a speculative planning phase for `/handles`; it already has a working imported-family layer. Future work should therefore deepen and refine the current architecture in a controlled way, using the existing family pages, imported data pattern, internal Technical Sheet behaviour, and shared navigation system as the baseline for all next steps.
