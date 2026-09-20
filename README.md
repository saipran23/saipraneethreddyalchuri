# Sai Praneeth Reddy — Cinematic Portfolio

A complete React + TypeScript + Vite application with an editorial homepage, four reusable project routes, Skiper31 skills, Skiper17 pinned projects, and a single Lenis root. Prepared for Vercel static hosting. No Next.js and no backend are required.

## Run

Node.js 22 LTS recommended.

```bash
npm install
npm run dev
npm run build
npm run preview
```

`npm run dev` serves port 4173. The build runs strict TypeScript checks before Vite. `package-lock.json` is included; `npm ci` is also supported for reproducible installs.

## Content status — read before publishing publicly

The supplied `portfolio demo .mp4` was reviewed to guide the central hero composition, tilted profile panel, navigation, dark sections, and contact layout. The implementation is original.

Your supplied portraits are integrated: a transparent upper-body cutout in the hero and the original full-length photo in About. GitHub access is now working: the four featured projects have been verified against public READMEs, source trees, dependency manifests, and implementation files. Three additional public learning projects are included. The profile README verifies Integrated M.Tech CSE at VIT-AP University.

Project covers are original typographic covers, **not application screenshots**. OpenShelf's README contains real screenshots, but the attachment downloads were blocked in this environment. Add those original images using the instructions below. No employment, credentials, adoption statistics, or unverified live links are invented. Certification data remains empty.

To collect repository evidence locally:

```bash
npm run inspect:github
```

This read-only script retrieves repository metadata, README, language data, tree paths, and selected package/build manifests. It writes `docs/github-evidence/*.json`. Review the actual implementation before writing project claims in `src/data/projects.ts`. It makes no requests from visitors' browsers. An optional `GITHUB_TOKEN` environment variable can raise API limits; never use a `VITE_` variable for a token.

## Replace the portrait

Replace these files using exactly the same names:

- `public/profile/praneeth-main.png` — transparent upper-body cutout; current image is 1343 × 1171 px.
- `public/profile/praneeth-about.jpeg` — original photo for the tilted profile composition.

Transparent PNG is supported directly. For WebP change the two `src` values in `HeroPortrait.tsx` and `About.tsx`. Update their alt text to accurately describe your real portrait. The current photographs were provided by the owner.

The hero portrait uses subtle scroll-linked y/scale/rotation. The component retains stable dimensions to prevent layout shift.

## Add project screenshots and videos

The project folders already contain a working `hero.webp` cover. Replace with actual screenshots, then add:

```text
public/projects/openshelf/
  hero.webp
  01.webp
  02.webp
  03.webp
  preview.mp4       # optional real recording
```

Use 1600 × 1000 px or larger WebP/AVIF with a consistent crop. In the project record add:

```ts
screenshots: [
  { src: '/projects/openshelf/01.webp', alt: 'Describe the real screen', caption: 'The experience' },
  { src: '/projects/openshelf/02.webp', alt: 'Describe another real screen', caption: 'A closer look' },
  { src: '/projects/openshelf/03.webp', alt: 'Describe the detail', caption: 'The details' },
],
video: '/projects/openshelf/preview.mp4',
```

The first screenshot receives an expanding SVG clip-path reveal. Further screenshots alternate horizontal and scale/y parallax. Videos use `muted`, `loop`, and `playsInline`; reduced-motion users see the poster instead. Do not add stock footage or images that imply nonexistent application features.

## Edit projects

Edit `src/data/projects.ts`. Each record supports:

- `id`, `slug`, `title`, `tagline`, `description`
- `image`, `imageAlt`, `color`, `coverText`
- `technologies`, `github`, optional `live` and `year`
- `featured`, `verified`
- `chapters`, `screenshots`, optional `video`

The page is data driven. A new record automatically gets `/projects/:slug`; no duplicate page is necessary. Set `featured: false` to show a record in the additional-project collection. Add only real, inspected repositories.

Suggested verified chapter titles are `THE IDEA`, `THE EXPERIENCE`, `THE ENGINEERING`, and `THE DETAILS`. The stack chapter appears when the technology array is populated. Empty optional content is not shown.

## Social links, skills, roles, credentials

- `src/data/socialLinks.ts`: GitHub, LinkedIn, LeetCode, email.
- `src/data/roles.ts`: role names, descriptions and tags. AI remains labelled **Aspiring AI Engineer**.
- `src/data/skills.ts`: languages, categories, icon references.
- `src/data/certifications.ts`: verified credentials only. Empty by default.

The About and journey sections use your stated technical focus, not invented company experience or dates.

## Contact form

Without configuration, the form validates input and opens the visitor's mail application with a prepared draft. It does **not** claim a message has been sent. The visitor still presses Send in their mail app. The email link and copy control remain available.

For direct submissions, create a Formspree form and add its **public endpoint** to `.env.local` or Vercel's build environment:

```text
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
```

Rebuild after setting this. `src/lib/contact.ts` is the adapter for replacing Formspree with EmailJS or your own API. Keep private credentials on a server, never in a Vite environment variable.

## Animation architecture

- `SmoothScroll.tsx`: exactly one application-level `ReactLenis`, advanced by GSAP's ticker; `useLenis` synchronizes ScrollTrigger. Ticker callback is removed on unmount.
- `src/lib/animations.ts`: GSAP, ScrollTrigger and `useGSAP` registration.
- `Skiper31.tsx`: adapted from the actual Skiper31 source viewed on its official site. Keeps distance-from-centre x/rotateX, x/y/scale and x/y/rotate/scale transformations. An introduction and five exclusive category scenes share one sticky section (580svh desktop / 620svh mobile); nested Lenis wrappers were removed.
- `Skiper17.tsx`: adapted from the official StickyCard002 source. The whole stage pins, each next card rises from below, prior cards scale to .7 and rotate ±5°. Scroll length scales with card count; a guarded ResizeObserver refreshes layout. Cleanup removes only its own timeline and trigger.
- `scroll-based-velocity.tsx`: an original implementation of Magic UI's documented ScrollVelocityContainer/Row pattern and API using Motion's scroll velocity, spring and animation-frame hooks. It pauses offscreen, when the tab is hidden, and for reduced motion.
- `RoleStack.tsx`: Motion drag/velocity detection, rotation, spring return, cyclic cards, previous/next buttons and arrow-key navigation.
- `ProjectHero.tsx`: scroll-linked image scaling and text/overlay treatment.
- `SvgMaskReveal.tsx`: normalized `objectBoundingBox` SVG clip path that expands responsively.
- `ProjectLink.tsx` + `App.tsx`: a short viewport expansion transition into lazy-loaded project routes. Modifier-click continues to work normally.
- `GradientCard.tsx`: pointer-following radial highlight using `--mouse-x` and `--mouse-y`; static fallback on touch.

GSAP and Motion own different transforms. No global ScrollTrigger kill-all call is used.

## Responsive and accessible behavior

Responsive styles cover 375, 430, 768, 1024, 1280, 1440 and 1920 px. The mobile menu uses Radix Dialog for focus trapping, Escape dismissal and focus restoration. Role controls work without drag. Inactive pinned cards are inert, and project pagination provides keyboard-accessible navigation. Inputs have labels, inline errors and focus targeting. The native cursor stays available.

`prefers-reduced-motion` disables continuous velocity motion and parallax, makes skills static, and lays out project cards as a normal readable sequence. Touch scrolling stays native (`syncTouch: false`). Fonts, logos, project covers and portraits are local assets.

## Vercel

Import this folder or its Git repository into Vercel:

- Framework preset: **Vite**
- Install command: `npm install`
- Build command: `npm run build`
- Output directory: `dist`

`vercel.json` includes SPA route rewrites. Test direct navigation and refresh on `/projects/openshelf` after deployment. The `.openai` directory belongs to the optional private preview and can be omitted for a standalone Vercel import.

## Source map

See `docs/PROJECT-STRUCTURE.md` for the complete file structure, `docs/CONTENT-SOURCES.md` for provenance and known gaps, and `docs/QA.md` for validation results.

## Component acknowledgements

Skiper UI's free components require attribution; a footer attribution is included. See `THIRD-PARTY-NOTICES.md`. Component registry installation was attempted but its network connection timed out; the Skiper components were manually adapted from source displayed on the official site. No third-party portfolio source was copied.
