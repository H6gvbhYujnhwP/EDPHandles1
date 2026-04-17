# EDP Handles Website Work Tracker

## Purpose

This tracker is the working record for the **full EDP Handles website**. It exists to keep the build structured, protect the original live site, and make it easy to see what has been completed, what is currently in progress, and what should happen next.

The governing principle remains unchanged: **EDP Handles is one progressive live website**. The homepage at `/` must remain intact unless explicitly redesigned. All new development should extend the existing architecture, with the current build focus centred on the `/handles` route and its connected journeys.

## Source Documents in This Repository

| Document | Role |
|---|---|
| `docs/handover/EDP_Handles_Website_Roadmap_and_Handover.md` | Project continuity and agreed build order |
| `docs/handover/Staged_Pathway_for_Bringing_Cosma_Content_into_the_EDP_Handles_Website.md` | Controlled content-adaptation method from Cosma into EDP |
| `docs/handover/Cosma_Website_Analysis_for_EDP_Handles.md` | Strategic source analysis and sitemap guidance |
| `docs/project-management/EDP_Live_Site_Inspection_Notes.md` | Current live-site and routing observations |
| `docs/project-management/EDP_Next_Step_Recommendation.md` | Current implementation recommendation based on inspection |

## Non-Negotiable Project Rules

| Rule area | Requirement |
|---|---|
| Whole-site integrity | Never collapse the project into a single page or isolated temporary build |
| Homepage protection | Keep `/` intact unless explicitly instructed otherwise |
| Current focus | Build out `/handles` as the first structured collection section |
| Production safety | Every change must preserve deployability and routing stability |
| Navigation continuity | Maintain a connected full-site journey between homepage, `/handles`, and future related sections |
| Content strategy | Adapt Cosma selectively as an upstream reference, not as a direct blind copy |

## Completed Work

| Status | Completed item |
|---|---|
| [x] | Homepage preserved at `/` |
| [x] | `/handles` route established inside the full live website |
| [x] | Six agreed handle families integrated into the `/handles` editorial structure |
| [x] | Full current website pushed to GitHub and deployed as a Node web service |
| [x] | Supporting handover and strategy documents added into the repository |
| [x] | Live site and repository routing reviewed to confirm homepage and `/handles` separation |
| [x] | Bridge family pilot import created from the public Cosma source structure |
| [x] | Bridge family page updated to show a real imported image-led product listing |
| [x] | Homepage, `/handles`, and `/handles/bridge` verified locally after the Bridge pilot integration |

## Current Phase

The current phase is to turn `/handles` from a strong editorial overview into a working collection hub. The first implementation pass for that phase is now in place: major CTAs have been routed more meaningfully, family-detail routes have been introduced, homepage pathways into the handles architecture have been tightened without disturbing the wider site, and the **Bridge family now acts as the first imported real listing page**.

## Active Task Checklist

| Status | Task |
|---|---|
| [x] | Audit all major CTAs on `/handles` and confirm destination behaviour |
| [x] | Create a reusable family-detail page pattern inside the current route architecture |
| [x] | Add dedicated routes for the six handle families |
| [x] | Deepen family content using curated Cosma-aligned range, finish, and trade logic |
| [x] | Improve homepage pathways into `/handles` and selected family destinations |
| [x] | Verify `/` and `/handles` both still work after implementation |
| [x] | Build Bridge-first import workflow and generate a local structured dataset from public Cosma source content |
| [x] | Render the Bridge family as a real image-led listing page with product cards, source grouping, and enquiry paths |
| [ ] | Roll the same import-and-render pattern out to Integrated, Vertical, Appliance, Knobs, and Special families |
| [ ] | Decide whether to introduce dedicated product-detail views inside EDP or remain at family-listing depth for the next release |
| [ ] | Commit and push the production-safe Bridge pilot update to `main` |

## Next Planned Build Order

| Priority | Planned action | Intent |
|---|---|---|
| 1 | Roll out imported listing pages to Integrated, Vertical, Appliance, Knobs, and Special | Extend the Bridge pilot pattern across the remaining families |
| 2 | Preserve subfamily labels in the imported data | Keep future split points ready for Closed Grip and Modular Closed Grip |
| 3 | Decide on EDP-native product detail depth | Choose between family-listing only or internal product pages |
| 4 | Refine enquiry and trade-conversion pathways from product cards | Turn browsing into stronger commercial next steps |
| 5 | Extend into finishes and specification guidance | Build the next connected editorial-commercial layer |

## Change-Control Note

Every development pass must be checked against the live-site protection rules before release. If a proposed change risks replacing the homepage, weakening navigation stability, or breaking the current live experience, it should be reworked before merge and deployment.
