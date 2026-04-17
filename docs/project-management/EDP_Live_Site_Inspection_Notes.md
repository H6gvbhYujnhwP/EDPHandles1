# EDP Handles live site inspection notes

## Homepage observations

- Live homepage at `/` is intact and currently presents the original premium dark editorial landing-page experience.
- Persistent master header is present with visible links: **Handles**, **Collections**, **Heritage**, **Trade Portal**, **Contact**, and **Get Started**.
- Hero CTAs currently include **Browse Handles** and **Trade Portal**.
- Homepage copy still reads as a brand-led entry point rather than a structured catalogue gateway.
- Homepage still presents **eight inspirational collections**: Modern Brass, Matte Steel, Curved Elegance, Leather Luxury, Geometric Bold, Minimalist, Vintage Brass, and Mixed Metals.
- This suggests the homepage remains older brand/collection logic, while the `/handles` route is expected to carry the newer six-family structured direction.

## Implications for next step

- Homepage should remain protected and should only receive light pathway improvements, not redesign.
- The most likely next safe build step is to deepen `/handles` and improve routes from homepage into `/handles` and its family detail pages.
- Need to inspect the current `/handles` page next to verify CTA behavior, section structure, and whether family subpages already exist.

## `/handles` observations

The live `/handles` route is present and already expresses the six-family structure in the intended premium editorial language. The local section navigation uses **Families**, **Story**, **Finishes**, and **Enquiry**, plus a top-right **Request a Consultation** CTA. The hero CTAs are **Explore Families** and **View Catalogue Layout**.

The six families are already named in a way that aligns well with the source strategy documents: **Bridge Handles**, **Integrated Handles**, **Vertical Handles**, **Appliance Handles**, **Knobs & Small Hardware**, and **Special Designs**. Each family currently appears to have a repeated **Collection Overview** CTA, but from the extracted page content alone there is no evidence yet that dedicated family subpages exist.

The page also includes a finish palette section and a consultation section, but these still read more like structured editorial content than fully connected commercial pathways. This supports the roadmap recommendation that the safest next step is to make `/handles` action-oriented by wiring meaningful CTA destinations first, then introducing a repeatable family detail-page pattern.

## Codebase architecture findings from GitHub

The repository is publicly accessible, so a GitHub token is not yet required for initial architecture review. The top-level structure confirms a full application rather than a static single-page mock-up. The repository contains **client**, **server**, **shared**, and **patches** directories, along with a root `package.json`, `vite.config.ts`, and multiple internal review notes related to the handles work.

The `client` directory already follows a front-end app structure with **public**, **src**, and `index.html`. This strongly suggests the live site is a Vite-based front end served within a broader Node application, matching the instruction to keep the site deployable as one production web service.

This is important because it means the next `/handles` work should be implemented as a controlled extension of the existing route structure and shared components, not as a stand-alone landing page replacement.

## Routing findings from `client/src/App.tsx`

The front-end app confirms a stable routed shell rather than a one-page replacement build. The file includes an explicit design reminder stating that the **full website structure must be preserved**, the original homepage must remain at `/`, and the current editorial build lives at `/handles`.

The visible route configuration currently includes at least the following paths:

| Route | Current component role |
|---|---|
| `/` | Homepage |
| `/handles` | Handles showcase/editorial page |
| `/handles/catalogue` | Alternate catalogue layout or related handles view |
| `/404` | Not found page |

This is highly aligned with the handover documents. It also suggests that the safest next architectural move is to extend the existing handles route family with additional nested or sibling routes such as dedicated family pages, rather than altering the homepage route.

## Page component findings

The `client/src/pages` directory cleanly separates the major page-level views into `Home.tsx`, `HandlesShowcase.tsx`, `Handles.tsx`, and `NotFound.tsx`. This confirms that the codebase already distinguishes between the protected homepage and the handles-focused routes instead of collapsing everything into one page.

This separation is strategically useful. It means the next `/handles` work can be implemented in a production-safe way by extending the handles-specific page components and route family while leaving `Home.tsx` largely untouched except for carefully chosen navigation improvements.

## Implementation findings from `Handles.tsx`

The `/handles` page is implemented as a substantial dedicated page component of roughly five hundred lines, which indicates that the current structured handles experience is already a meaningful part of the full application rather than a superficial placeholder. The visible code includes a strong in-file design reminder to preserve the dark showroom atmosphere, brass-accent restraint, serif-led hierarchy, and real product imagery used more for catalogue moments than purely technical presentation.

The visible data structure also shows the six handle families being defined directly inside the page component with titles such as **Bridge Handles**, **Integrated Handles**, and **Vertical Handles**, alongside source references to Cosma taxonomy and image URLs. This confirms that the next safe move is not to rethink the family model, but to extract and extend it into a more navigable architecture with real destination routes and a reusable family-detail pattern.

## Local preview verification — Apr 17 2026

The local preview of the repository build confirms that the homepage at `/` still renders intact after the current changes. The homepage hero, primary navigation, and existing editorial structure remain in place, while the navigation now directs users more clearly into `/handles` and `/handles/catalogue#trade-support` without replacing the homepage.

The local preview of `/handles` also renders correctly. The editorial showcase remains visually intact, and the major calls to action now resolve to more meaningful destinations. The page still supports the premium showroom presentation, while each of the six family cards now exposes a deeper collection path through a dedicated family overview route.

## Cosma source-structure findings — Apr 17 2026

The Cosma products page exposes a visible category taxonomy that aligns closely with the EDP family structure. The handles-related categories shown publicly include **Bridge**, **Modular Bridge**, **Closed Grip**, **Modular Closed Grip**, **Integrated**, **Integrated Modular**, **Vertical**, **Vertical Integrated**, **Special**, **Domestic Appliances**, and **Knobs**.

The same page also visibly lists product codes under each family grouping, and the first visible bridge items are rendered as clickable product cards with images and numeric product references such as `13063` and `13061`. This indicates that the upstream site already presents family-level listing pages and that the most practical EDP approach is likely to adapt category-level product data into curated family listing sections rather than copy the whole Cosma site structure directly.

A deeper inspection confirms that the public products page also exposes category counts, including **Bridge (33)**, **Modular Bridge (24)**, **Closed Grip (31)**, **Modular Closed Grip (12)**, **Integrated (30)**, **Integrated Modular (44)**, **Vertical (10)**, **Vertical Integrated (15)**, **Special (10)**, **Domestic Appliances (4)**, and **Knobs (12)**. Product pages use stable-looking URLs in the form `/en/products/{id}-{code}`, as seen with item `13063` at `/en/products/301-13063`, and the product detail page exposes image views, material, and dimensional table data.

## Bridge pilot verification — Apr 17 2026

The updated local Bridge family page now shows a real imported family listing directly on the page rather than only an editorial overview. The page confirms **57 imported Bridge-family products** grouped as **Bridge (33)** and **Modular Bridge (24)**, and the extracted content shows product cards rendering with image-led listing structure, product code, technical sizing summaries, and action links.

This means the first family now behaves more like a true collection destination: clicking into **Bridge Handles** leads into a real product-listing experience while still preserving the EDP visual language, the homepage, and the wider `/handles` architecture.

The homepage (`/`) continues to render intact in the local preview, retaining the original hero, collection blocks, and trade pathways. The main `/handles` overview page also continues to render correctly, with the six-family editorial structure preserved. This confirms that the Bridge pilot listing integration did not break the homepage or the wider `/handles` route.

Bridge technical-sheet popup update verified locally in the current preview build. The Bridge family page continues to render its imported listing grid, and the external reference action has been relabelled as `Technical Sheet` on the product cards. The update keeps the product specification journey inside EDP rather than sending users out to an upstream source. The production build completed successfully after the change, with no route-level build failures affecting the homepage or `/handles` architecture.
The local homepage preview remained intact after the Bridge technical-sheet popup update. The original hero, main navigation, and homepage entry CTAs continued to render correctly, indicating that the Bridge modal change did not destabilize the root route.
The local multi-family preview confirmed that `/handles/integrated` now renders with an immediate imported listing state. The page reported 117 imported product listings and clearly stated that Closed Grip families remain grouped under Integrated for now while preserving the ability to split them later.
A further local preview check on `/handles/integrated` confirmed that the imported listing renders as full live product cards beneath the hero area, including grouped source-category count pills for Closed Grip, Modular Closed Grip, Integrated, and Integrated Modular. The first visible cards also displayed the internal `Technical Sheet` action, confirming that the popup-driven specification pattern is now present beyond the Bridge family.
The local preview confirmed that the homepage remained intact after the multi-family rollout, with its original hero, navigation, and primary calls to action still rendering correctly. A follow-up check on `/handles` also confirmed that the main editorial overview page remained stable and unchanged in structure while the deeper family routes had been expanded separately.
An additional local preview check on `/handles/appliance` confirmed that a smaller imported family also renders correctly after the rollout. The page showed 4 imported appliance products, immediate live listing behaviour, and the same internal `Technical Sheet` card action used on Bridge and Integrated, which supports the overall multi-family pattern before push.

## Navigation unification local verification — Apr 17 2026

The local preview on port 3004 confirms that the homepage now renders with the shared master header component using the same logo lockup, primary menu, and `Get Started` CTA as the original top-level experience.

The local preview on `/handles` now shows the same top navigation as the homepage instead of the previous handles-specific header. Visible shared links across both routes are **Handles**, **Collections**, **Heritage**, **Trade Portal**, **Contact**, and **Get Started**, which restores brand continuity across the route change.

The local preview on `/handles/bridge` also shows the same shared top navigation, confirming that the master header now persists on deeper family-detail routes rather than switching to a route-owned section header.

A further local preview check on `/handles/catalogue` confirmed that the catalogue route now uses the same master navigation as the homepage, `/handles`, and the family pages. This resolves the previous feeling that separate microsite-style menus were appearing as users moved between routes.

## Family card clickability refinement — Apr 17 2026

The local preview on port 3005 confirms that the six family cards on the `/handles` overview are now rendered as full interactive card links rather than requiring the user to click only the `Collection Overview` label. A direct click on the Bridge family card navigated successfully from `/handles` to `/handles/bridge`, confirming that the full box container now serves as the clickable target while preserving the existing editorial presentation.
