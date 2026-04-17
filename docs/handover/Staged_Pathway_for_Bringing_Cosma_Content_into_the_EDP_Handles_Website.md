# Staged Pathway for Bringing Cosma Content into the EDP Handles Website

## Current Position

This document now reflects the fact that the EDP Handles project has already moved beyond the early staging phase. The site is no longer deciding whether to create family pages or whether to bring imported Cosma-led content into the build. That has already happened.

The current live architecture already includes a protected homepage, a `/handles` editorial overview, six dedicated family routes, and imported product-family listings presented inside the EDP design language. The correct purpose of this document is therefore to guide the **next wave of content expansion** in a controlled way.

## Core Principle

The safest and most effective route remains the same in strategic terms: **do not try to copy the whole Cosma website in one pass**. Treat Cosma as an upstream catalogue and structure reference, then adapt selected content into the EDP Handles site while preserving the premium dark showroom style, editorial pacing, UK-facing tone, and EDP-controlled user journey.

The important change is that the base page system already exists. We are no longer starting from scratch. We are now extending a working framework.

## What Is Already Established

| Established implementation layer | Current state |
|---|---|
| Homepage preserved at `/` | Complete |
| `/handles` overview as collection hub | Complete |
| Six family routes | Complete |
| Imported family product datasets | Complete for the current six-family rollout |
| Internal Technical Sheet pattern | Complete |
| Shared master navigation | Complete |
| Mobile containment of Technical Sheet modal | Complete |
| Premium favicon and visual polish pass | Complete |

## What This Means for Future Imports

Any future Cosma-led or PDF-led product expansion should now plug into the existing family-page pattern instead of generating a second content model.

| Working rule | Meaning in practice |
|---|---|
| Reuse the family architecture | Add products into the current `/handles` family structure unless a new family is explicitly approved |
| Keep EDP curation | Do not mirror the Cosma site verbatim |
| Preserve internal technical viewing | Continue using internal Technical Sheet-style specification presentation |
| Protect the homepage | Do not let product-expansion work disturb `/` |
| Import in controlled batches | Add one approved source set at a time, then verify |

## Current Family Mapping

The existing six-family structure should remain the baseline until the user explicitly asks for a restructuring.

| EDP family | Current source grouping |
|---|---|
| Bridge | Bridge + Modular Bridge |
| Integrated | Closed Grip + Modular Closed Grip + Integrated + Integrated Modular |
| Vertical | Vertical + Vertical Integrated |
| Appliance | Domestic Appliances |
| Knobs & Small Hardware | Knobs |
| Special Designs | Special |

A critical continuity note must remain visible: **Closed Grip** and **Modular Closed Grip** are currently grouped under **Integrated**, but the current data organisation is intended to make a later split possible.

## Recommended Import Workflow from This Point Forward

The best workflow is now a **read-first, approve-first, import-second** process.

| Stage | What happens now | Output |
|---|---|---|
| 1 | Read the repository documents and inspect the current codebase | Verified understanding of current live state |
| 2 | Receive the user’s next approved source material, such as PDFs or product lists | Clear input set for the next batch |
| 3 | Decide whether the new products fit an existing family or justify a new family/subfamily split | Stable structural decision before import |
| 4 | Extract and normalise the content into the current local data pattern | Structured product data ready for implementation |
| 5 | Implement the new content inside the approved EDP route structure | Updated family page or approved new route |
| 6 | Verify `/`, `/handles`, and the affected family routes locally | Production-safe review before push |
| 7 | Commit, push, and monitor deployment only after approval | Clean release discipline |

## What Needs To Be Collected for Each New Batch

Whether the source arrives from PDFs, Cosma pages, or user-supplied material, the same content model should be used wherever possible.

| Content field | Purpose |
|---|---|
| Product code | Stable reference identifier |
| Family / subfamily | Routing and grouping |
| Short EDP-led description | Premium distributor presentation |
| Material | Basic trade/spec context |
| Available finishes | Commercial selection guidance |
| Width / centres / height / section data | Technical Sheet content |
| Product imagery | Listing and detail credibility |
| Source notes | Traceability for later checking |

## Design Rule for Future Expansion

The visual balance established so far should continue unchanged.

Real product imagery should be used for product grids, imported listing sections, and specification-led content. Brand-led atmospheric imagery should continue to support hero moments and editorial transitions. The goal is not to let the site collapse into a raw catalogue dump, but also not to keep it so atmospheric that it loses commercial utility.

A useful shorthand remains:

> **Brand atmosphere for entry and framing; real product content for selection and specification.**

## Recommended Next Expansion Areas

The correct next move depends on what the user supplies next, but the likely pathways are now clearer.

| Expansion path | When to use it |
|---|---|
| Add more products into an existing family | When the user supplies more PDFs or source material that fit the six current families |
| Split out a subfamily | When ranges such as Closed Grip or Modular Closed Grip need clearer commercial separation |
| Add EDP-native product-detail pages | When family listing depth is no longer sufficient for selection or enquiry |
| Extend finishes / specification guidance | When the catalogue layer needs stronger trade support |

## Working Rule for the Next Chat

Any new session should **read everything first and wait** before acting.

| Rule | Instruction |
|---|---|
| Read all key repo docs first | Understand both the strategy and the current implementation state |
| Inspect the current handles code next | Verify what is already live in the codebase |
| Do nothing until instructed | Wait for the user to provide the next products or PDFs |
| Do not push early | Commit and push only after the new batch is approved |
| Expect credentialed access later | The GitHub token may be provided later when write access is required |

## Practical Continuity Note

This project no longer needs a blueprint for whether to begin product import work. It now needs disciplined control over **how the next product batches are absorbed into a live working EDP architecture**. Every future import should therefore strengthen the existing family-page system, protect the homepage, preserve EDP curation, and wait for explicit user direction before any code or content is changed.
