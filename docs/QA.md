# Verification report

## Successful checks

- `npm install` completed successfully; a package lock is included.
- `npm run build` completed with zero TypeScript errors and successful Vite output.
- Homepage rendered in the managed browser preview.
- Homepage viewport checks: 375, 430, 768, 1024, 1280, 1440 and 1920 px iframe widths. At each size, document scroll width equalled document client width; zero missing images. The browser used a 15px scrollbar, so content viewports were 360, 415, 753, 1009, 1265, 1425 and 1905 px respectively.
- All four project routes rendered at the mobile size with correct headings, zero missing images and no horizontal overflow.
- Mobile navigation opened with all six links and closed correctly.
- Role next control advanced from Full-Stack Developer to Backend & API Engineer.
- Project pagination advanced to AUTOBANK-PRO; inspected transforms showed the preceding card shrinking/rotating and the next card entering. Inactive cards were inert.
- Clicking AUTOBANK-PRO through its project card completed the cinematic transition and navigated to `/projects/autobank-pro`.
- Active-section navigation updated to Projects.
- Empty contact submission showed all four expected inline validation errors and did not send a message.
- Local asset paths and image decoding were checked through browser rendering.
- No backend submission was attempted; Formspree is intentionally unconfigured.
- Full fresh project reload rendered after the final dependency refresh. Temporary development HMR errors during dependency re-optimization were resolved by the fresh load; only one deduplicated React/ReactDOM installation exists.

## Scope and limits

These are targeted browser and build checks, not a claimed Lighthouse score or exhaustive assistive-technology audit. Reduced-motion paths are implemented and source-reviewed; OS-level reduced-motion emulation was not available through the browser API. SVG reveal and image parallax use component-scoped GSAP contexts. No global trigger kill is present. Additional attempts to inspect the mobile test iframe were blocked by the browser URL policy; no workaround was attempted. The temporary test harness is removed from the deliverable.

## Content outstanding

Actual portrait, verified repository descriptions/stacks, real application screenshots, recordings, additional repositories and verified credentials were unavailable. See `CONTENT-SOURCES.md`. No fake statistics, experiences, credentials, repository features or screenshots were substituted. Visual project covers and neutral portrait placeholders are labelled as such.


## Update — 2026-09-20

Integrated the supplied full-length photo and a transparent upper-body portrait. The hero cutout was prepared with the built-in image editor using this instruction: remove only the baked-in checkerboard background, preserve the person's face, glasses, hair, shirt, pose and lighting, and return actual alpha transparency. Final assets are public/profile/praneeth-main.png and public/profile/praneeth-about.jpeg.

Rebuilt skills as an introduction followed by five exclusive scroll intervals: Frontend, Backend, Databases, Languages, Tools. Preserved Skiper31 character spreads, rotateX and icon x/y/scale/rotation convergence. Category buttons support keyboard navigation. Reduced-motion visitors receive a static readable sequence. Removed cloud topics and hosted-platform labels from visitor-facing copy. Original repository URLs remain intact.

Browser checks: portrait rendering on desktop/mobile, category navigation, reverse scroll, single-scene visibility, mobile menu, all supplied image loading. Measured no horizontal overflow at 375, 430, 768, 1024 and 1440px preview widths. No application console errors observed; unrelated browser-extension logs excluded. Mobile portrait and description now flow vertically without overlap.
