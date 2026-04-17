# EDP Handles New Chat Continuation Prompt

Use the following prompt to start the next session:

> We are continuing the EDP Handles website project as one progressive live website. The homepage at `/` must remain intact and must never be replaced unless I explicitly ask for that. The codebase is the existing Node/Vite/React site deployed from GitHub and Render from the current repository state. Before making any changes, first read all key repository documents under `docs/`, especially the roadmap and handover, the staged Cosma pathway, the Cosma analysis, the live inspection notes, the next-step recommendation, and the work tracker. Then inspect the current handles-related code so you understand the actual implemented state of the site. Treat the documentation as important context, but verify everything against the codebase because some older planning assumptions may already have been completed. After reading everything, stop and wait for my next instruction. Do not edit files, do not generate assets, do not change routes, do not commit, and do not push anything until I explicitly tell you what products from the PDFs to add and how I want them handled. I will provide the GitHub token later when credentialed access is needed.

## Files the next session should read first

| Priority | File |
|---|---|
| 1 | `docs/handover/EDP_Handles_Website_Roadmap_and_Handover.md` |
| 2 | `docs/handover/Staged_Pathway_for_Bringing_Cosma_Content_into_the_EDP_Handles_Website.md` |
| 3 | `docs/handover/Cosma_Website_Analysis_for_EDP_Handles.md` |
| 4 | `docs/project-management/EDP_Live_Site_Inspection_Notes.md` |
| 5 | `docs/project-management/EDP_Next_Step_Recommendation.md` |
| 6 | `docs/project-management/EDP_Website_Work_Tracker.md` |

## Code areas the next session should inspect after reading docs

| Priority | File or area |
|---|---|
| 1 | `client/src/App.tsx` |
| 2 | `client/src/components/site/SiteHeader.tsx` |
| 3 | `client/src/pages/HandlesShowcase.tsx` |
| 4 | `client/src/pages/HandleFamilyPage.tsx` |
| 5 | `client/src/pages/Handles.tsx` |
| 6 | `client/src/pages/Home.tsx` |
| 7 | `client/src/lib/handleFamilies.ts` |
| 8 | `client/src/lib/cosmaFamilyProducts.ts` |

## Intent of the next session

The next session is expected to **read first, understand the current build state, and wait** for user-provided PDFs or product instructions before doing any implementation work.
