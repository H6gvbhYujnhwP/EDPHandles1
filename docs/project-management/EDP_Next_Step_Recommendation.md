# Recommended Next Step for EDP Handles

## Summary judgement

Based on the three handover documents, the current live site, and the repository structure, the **best next implementation step** is to make the `/handles` section operational by introducing **real family-detail destinations and meaningful CTA routing**, while leaving the homepage at `/` intact apart from light linking improvements.

This is the safest production move because it strengthens the section already in progress without destabilising the wider site. It also follows the exact sequence described in the handover: first make the handles CTAs lead somewhere meaningful, then deepen the six families into usable collection content, then improve homepage pathways into that new structure.

## Why this should come next

| Evidence source | What it shows | Practical implication |
|---|---|---|
| Handover roadmap | The next priority is to make all key buttons and CTAs on `/handles` meaningful before broader expansion | CTA routing should be the next implementation pass |
| Cosma staging document | Structure should be frozen before large content import, and one repeatable page pattern should be built first | Build one reusable family-page template and scale it across all six families |
| Cosma analysis | EDP should become a curated UK-facing distributor gateway, not a direct mirror of Cosma | Family pages should adapt Cosma taxonomy and trade logic into EDP language |
| Live site review | `/handles` already has the correct six-family framework, but still behaves more like editorial content than a commercial journey | Add real destinations, enquiry paths, and cross-links |
| Code review | The app already preserves `/` and isolates handles logic in dedicated page components and routes | Extend the existing route family rather than touching homepage architecture |

## Recommended implementation package

The next build phase should be executed as one coherent package with four linked outcomes.

| Step | Recommended work | Notes |
|---|---|---|
| 1 | Audit and wire all major `/handles` CTAs | `Explore Families`, `View Catalogue Layout`, each `Collection Overview`, `Request a Consultation`, finish/story/enquiry anchors |
| 2 | Add a repeatable family-detail page template | Create one consistent page structure for all six families |
| 3 | Launch six family routes inside the existing architecture | For example, `/handles/bridge`, `/handles/integrated`, `/handles/vertical`, `/handles/appliance`, `/handles/knobs`, `/handles/special-designs` |
| 4 | Improve homepage pathways into `/handles` | Keep `Home.tsx` intact, but make homepage handles-related CTAs route into `/handles` and selected families more clearly |

## What the family template should contain

Each family page should stay editorial in tone but become commercially useful.

| Section | Purpose |
|---|---|
| Hero | Family title, source taxonomy, and positioning statement |
| Family overview | Explain the design character and intended use |
| Ideal applications | Kitchens, wardrobes, pantry runs, appliance housing, joinery, hospitality |
| Finish pairing | Connect the family to available or planned EDP finish selections |
| Signature forms | Pull types, proportions, grip logic, or integrated profile cues |
| Trade pathway | Consultation, email enquiry, and future catalogue/spec access |
| Related family links | Move laterally across the six-family system |

## CTA behaviour I recommend

| Current CTA | Recommended destination |
|---|---|
| `Explore Families` | Scroll to the six-family section on `/handles` |
| `View Catalogue Layout` | Route to `/handles/catalogue` if that route is live and purposeful; otherwise repurpose it to a clearer interim destination |
| `Collection Overview` under each family | Route to the relevant family detail page |
| `Request a Consultation` | Route to the strongest current enquiry/contact experience in the full site |
| `Finishes` section link | Anchor to the finishes section for now, with future upgrade path to `/finishes` |
| `Story` section link | Anchor to the material/story section on `/handles` or the future About/Heritage page |

## What should not be done in this phase

| Do not do this | Reason |
|---|---|
| Replace the homepage | It breaks the agreed whole-site continuity |
| Recast `/handles` as a separate mini-site | It contradicts the preserved route architecture |
| Import the full Cosma catalogue immediately | The documents recommend controlled curation first |
| Build many unrelated sections before handles pathways work | It would expand breadth before fixing the current conversion structure |

## Readiness for implementation

The repository is public, the route structure is already compatible with this next phase, and no GitHub token is required yet for inspection. A token will become useful when you want me to clone, edit, commit, and push the production-safe changes directly.

## Recommendation in one sentence

The next move should be to **turn `/handles` from a strong editorial overview into a working collection hub by wiring all CTAs, creating six family-detail routes, and lightly strengthening homepage pathways into that structure without altering `/`.**
