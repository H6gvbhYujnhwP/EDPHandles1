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
