# Phase 4 — Implementation Plan

## Goal

Build the approved portfolio as a fast, accessible, dark-first static Next.js site that presents three factual project case studies and gives visitors clear ways to reach Manu or download his resume.

This plan implements `docs/PRD.md` and the nine feature specifications in `docs/features/`. When a feature spec conflicts with a generic implementation choice below, the feature spec wins.

## Technical approach

| Concern | Decision |
| --- | --- |
| Framework | Next.js with the App Router and TypeScript |
| Styling | Tailwind CSS with a small set of site tokens in global CSS |
| Rendering | Static generation; no database, API routes, authentication, or server-side content fetching |
| Content | Typed local TypeScript data in `content/` |
| Diagrams | Accessible, project-specific React/SVG components with text explanations |
| Interactivity | Minimal client-side JavaScript: mobile navigation and optional project expansion only |
| Hosting | Vercel |

Use the current stable, mutually compatible Next.js, React, TypeScript, Tailwind, ESLint, and formatting tooling when scaffolding. Do not add a component framework, animation library, analytics product, CMS, or database unless an approved requirement later needs one.

## Proposed repository structure

```text
app/
  layout.tsx                 # Fonts, metadata, global shell
  page.tsx                   # Composition of all landing-page sections
  globals.css                # Dark-first design tokens and global accessibility styles
  sitemap.ts                 # Static sitemap
  robots.ts                  # Crawl rules
components/
  layout/
    SiteHeader.tsx
    MobileNav.tsx
    SiteFooter.tsx
  sections/
    Hero.tsx
    About.tsx
    Projects.tsx
    Skills.tsx
    Achievements.tsx
    Contact.tsx
  projects/
    ProjectCard.tsx
    ProjectDetail.tsx
    diagrams/
      StudentManagementDiagram.tsx
      MedicityDiagram.tsx
      JobPortalDiagram.tsx
  ui/
    Container.tsx
    SectionHeading.tsx
    ExternalLink.tsx
    ResumeLink.tsx
content/
  profile.ts
  projects.ts
  skills.ts
  achievements.ts
lib/
  types.ts
public/
  resume.pdf
  og-image.png
tests/
  content-links.test.ts      # Link/data validation when test tooling is added
```

Avoid a route per project in v1. The landing page should expose each full case study through accessible in-page disclosure/expansion. A future route can be introduced if the content becomes too long or needs shareable project URLs.

## Content model

Create strict TypeScript types in `lib/types.ts`:

```ts
type Project = {
  slug: "student-management" | "medicity" | "job-portal";
  title: string;
  oneLiner: string;
  problem: string;
  architectureSummary: string;
  implementationChoices: string[];
  stack: string[];
  outcome: string;
  repoUrl: string;
  liveUrl?: string;
  order: number;
};

type SkillGroup = { groupName: string; skills: string[] };
type Achievement = { title: string; date: string; description: string; link?: string };
type ProfileLinks = {
  github: string;
  linkedin: string;
  leetcode: string;
  geeksforgeeks: string;
  email: string;
  resumePdfPath: "/resume.pdf";
};
type SitePerson = {
  name: string;
  headline: string;
  bio: string;
  education: { institution: string; degree: string; dates: string; cgpa: string };
};
```

`content/profile.ts` contains the approved identity, education, profile URLs, and contact information. `content/projects.ts` is the sole source for project copy and stack tags. Project fields must not be finalized until the source-verification gate in `03-project-case-studies.md` is completed.

## Build sequence

1. **Scaffold and configure**
   - Create the TypeScript Next.js App Router project with Tailwind and linting.
   - Add `.gitignore`, formatting/lint scripts, and a minimal README with local-development commands.
   - Confirm a production build works before designing sections.

2. **Create content and asset foundations**
   - Add types and the profile/skills/achievement data.
   - Obtain and verify the approved resume, then place the deployed copy at `public/resume.pdf`.
   - Inspect all three project repositories and record the evidence required by `03-project-case-studies.md` before filling final project data.

3. **Establish the design system**
   - Define dark background, surface, primary text, muted text, border, focus, and interactive-state tokens.
   - Establish responsive container widths, spacing scale, type scale, and focus-visible treatment.
   - Add `prefers-reduced-motion` defaults and a skip link.

4. **Build the static sections**
   - Implement Hero, About, Skills, Achievements, Contact, and Footer from their approved specs.
   - Use semantic landmark elements and correct heading order.
   - Build `ExternalLink` and `ResumeLink` once so safe external-link behavior is consistent.

5. **Build projects and diagrams**
   - Implement the project listing and detail/disclosure pattern.
   - Build one diagram component per project from verified source evidence, including captions and mobile-stacked layouts.
   - Do not publish guessed architecture details. Omit unverified optional details rather than filling gaps with generic flows.

6. **Build navigation and metadata**
   - Add desktop navigation, accessible mobile navigation, sticky-header anchor offsets, and reduced-motion-aware scrolling.
   - Configure title, description, canonical URL once known, Open Graph image, favicon, `sitemap.ts`, and `robots.ts`.

7. **Validate and deploy**
   - Run linting, type checks, production build, link validation, and responsive visual checks.
   - Run Lighthouse on a production-equivalent build and correct material regressions before Vercel deployment.
   - Deploy to Vercel, verify the live URLs and resume delivery, then update the public profile links if desired.

## Component responsibility boundaries

| Component | Responsibility | Client component? |
| --- | --- | --- |
| `app/page.tsx` | Compose static sections from local content | No |
| `SiteHeader` | Desktop header and navigation shell | No, unless it owns menu state |
| `MobileNav` | Menu visibility, Escape handling, focus behavior | Yes |
| Section components | Render static approved content | No |
| `ProjectCard` | Summary card and accessible disclosure trigger | Yes only if using in-place expansion |
| Diagram components | Render semantic project architecture visuals | No |
| `ExternalLink` / `ResumeLink` | Safe, consistent links and labels | No |

Keep client boundaries narrow. Do not mark the whole page or a static content section as a client component merely to support one interaction.

**Diagram components, resolved (T20):** initially needed `'use client'` because they used `<style jsx>`, which requires a Client Component boundary — this only surfaced once T20 wired them into `Projects.tsx` → `app/page.tsx` (T16-T18's own build/tsc checks passed clean earlier because the components were still unimported orphans at that point). Resolved by migrating their `<style jsx>` blocks into `app/globals.css` as static classes (Student Management's generic `.diagram-svg-desktop`/`.diagram-svg-mobile` renamed to `.sms-diagram-desktop`/`.sms-diagram-mobile` to avoid colliding with the other two diagrams now that all three mount on the same page) and removing `'use client'` — restores them to the table's default (non-client), verified via a clean console check with all 3 mounted together.

## Accessibility and responsive checklist

- One `h1` in Hero; all primary sections use `h2` headings in page order.
- Use `main`, `nav`, `section`, `article`, and `footer` landmarks appropriately.
- Provide a visible skip-to-content link and focus indicators for every interactive control.
- Meet WCAG AA contrast in the dark theme, including muted text and hover/focus states.
- Implement external links with `target="_blank"` and `rel="noreferrer"` (or `noopener noreferrer`).
- Make the mobile menu keyboard-operable with `aria-expanded`, `Escape` support, and focus restoration.
- Test 375px, 768px, and 1440px widths for clipping, overlap, and horizontal overflow.
- Render a stacked or simplified architecture diagram at mobile widths; never rely on scaling a dense desktop SVG down.
- Avoid essential animation and honor `prefers-reduced-motion`.

## Performance and SEO checklist

- Keep content local and statically generated.
- Prefer system or framework-managed font loading; avoid rendering-blocking third-party scripts.
- Do not ship heavy animation, chart, icon, or UI libraries for simple decorative needs.
- Size and optimize the Open Graph image and any future imagery.
- Configure metadata, canonical URL after deployment domain selection, Open Graph image, sitemap, and robots rules.
- Target Lighthouse mobile Performance ≥90 while also checking accessibility, best practices, and SEO.

## Test and sign-off plan

| Check | Evidence required |
| --- | --- |
| Static quality | Lint, type check, and production build pass |
| Content accuracy | Repository evidence notes support every project claim and diagram label |
| Link integrity | GitHub, profile, email, and resume links tested in the deployed site |
| Accessibility | Keyboard pass, semantic heading/landmark review, contrast check, reduced-motion check |
| Responsive behavior | Visual inspection at 375px, 768px, and 1440px with no overflow or overlap |
| Performance | Documented mobile Lighthouse run with Performance ≥90 |
| Deployment | Vercel production URL and `/resume.pdf` verified |

## Out of scope for this build

- API routes, database, contact form, CMS, authentication, analytics dashboard, blog engine, and user accounts.
- AI/ML branding, made-up production metrics, fabricated work history, or a standalone system-design portfolio section.
- The P2 design-practice write-up unless core P0 work is complete and the write-up meets `09-design-practice.md`.

## Definition of done

Phase 4 is complete when this plan is approved. Implementation begins only after the project source evidence and resume asset are available, because those gate truthful case-study content and a working download link.

## Tasks

Status: executing · Progress: 20/26 tasks

Build order rationale: T01 alone proves the toolchain. T02–T04 (types, tokens, resume asset) are the only things everything else needs and have zero file overlap, so they run in parallel. T05/T06/T14/T16–T18 (UI primitives, content data, all three diagrams) again only need T02/T03 and touch disjoint files — a second wide parallel window, front-loading the highest-scrutiny work (fact-checked project diagrams) early rather than last. T07→T08 is a deliberately narrow, sequential walking skeleton (Hero only) that proves the full pipeline — scaffold, tokens, types, content, one real component, production build, resume asset serving — before fanning out to the other five sections and header/footer in parallel (T09–T13, T15). T19 is the first real convergence point (projects + all 3 diagrams). T20 is the second, full-scope build checkpoint. T21–T26 are metadata → QA → performance → deploy, each gated on the previous.

### T01 — Scaffold Next.js project
- Feature: `docs/IMPLEMENTATION_PLAN.md` "Technical approach" + "Build sequence" step 1 (infra, no feature doc)
- Files: `package.json`, `tsconfig.json`, `next.config.*`, `app/layout.tsx`, `app/page.tsx`, `app/globals.css`, `.gitignore`, `README.md` (append only) — auto-generated files exempt from the ≤5-file rule as a single tool invocation
- Domain: nextjs
- Model: haiku (coder) → sonnet (reviewer)
- Depends on: none
- Parallel group: A (solo — blocks everything)
- Review criteria:
  - Run fully non-interactively (`--typescript --tailwind --eslint --app --src-dir=false --import-alias "@/*" --use-npm --yes` or equivalent) — a Haiku agent can't answer a CLI prompt; any hang is an automatic fail.
  - Repo root is non-empty (`docs/`, `wireframe/`, `assets/`, `README.md`, `.claude/`, `.git/` already exist) — confirm none of these were overwritten or deleted; if `create-next-app` refuses a non-empty directory, scaffold to a temp dir and merge only new files.
  - `npm run build` succeeds — paste fresh output, not a claim.
  - No site content/design/components yet — leave Next.js defaults; append only a short "Local development" section to the existing `README.md`.
- Status: [x] done

### T02 — Content model types
- Feature: `docs/PRD.md` §5 + `docs/IMPLEMENTATION_PLAN.md` "Content model"
- Files: `lib/types.ts`
- Domain: nextjs
- Depends on: T01
- Parallel group: B
- Review criteria:
  - Matches PRD §5 entities and the `IMPLEMENTATION_PLAN.md` `Project` shape exactly — no speculative extra fields, no `any`.
  - `slug` is a literal union `"student-management" | "medicity" | "job-portal"`, not `string`.
- Status: [x] done

### T03 — Design tokens & global styles
- Feature: `docs/DESIGN.md` (all) + `wireframe/tokens.css` (source of truth) + `wireframe/index.html` base `<style>` block (reset, focus-visible, skip-link, scroll behavior, reduced-motion)
- Files: `app/globals.css`, `tailwind.config.ts` (or a Tailwind v4 `@theme` block inside `globals.css`), `app/layout.tsx` (font loading only)
- Domain: nextjs
- Depends on: T01
- Parallel group: B
- Review criteria:
  - Every token value copied 1:1 from `wireframe/tokens.css` — zero new one-off hex/px values.
  - Fonts loaded via `next/font/google` (self-hosted) rather than the wireframe's `<link>` tag — intentional, correct deviation.
  - `prefers-reduced-motion: reduce` override present, matching the wireframe's block exactly.
  - Skip-link, shared `focus-visible` ring, `scroll-margin-top` + guarded `scroll-behavior: smooth` present as pure CSS (not reimplemented in JS).
  - No pure black, no gradient, no glow (`DESIGN.md` §8 bans).
- Status: [x] done

### T04 — Resume asset placement
- Feature: `docs/features/06-resume.md`
- Files: `public/resume.pdf`
- Domain: general
- Depends on: T01
- Parallel group: B
- Review criteria:
  - Byte-identical copy of `assets/resume/Manu_Gupta_Resume.pdf` (the finalized approved resume per `PROJECT_SOURCE_NOTES.md`), not any earlier draft.
  - `next build && next start` actually serves `/resume.pdf` with 200 and correct content-type — paste the fetch output.
- Status: [x] done

### T05 — UI primitives
- Feature: `docs/IMPLEMENTATION_PLAN.md` repo structure (`components/ui/`) + the external-link pattern repeated 4× in `wireframe/index.html`
- Files: `components/ui/Container.tsx`, `components/ui/SectionHeading.tsx`, `components/ui/ExternalLink.tsx`, `components/ui/ResumeLink.tsx`
- Domain: nextjs
- Depends on: T02, T03
- Parallel group: C
- Review criteria:
  - `ExternalLink` always renders `target="_blank" rel="noreferrer"` plus a visually-hidden "(opens in a new tab)" — the single implementation every profile/repo/resume link reuses.
  - `ResumeLink` hardcodes `/resume.pdf` (feature 06) — no dependency on `content/profile.ts`.
  - `SectionHeading`'s `label`/`intro` props are both optional (the wireframe uses them inconsistently across sections — don't force every section to show both).
- Status: [x] done

### T06 — Profile, skills, achievements content data
- Feature: `docs/features/02-about.md`, `04-skills.md`, `05-achievements.md`, `07-contact.md` + `docs/DISCOVERY.md` §9
- Files: `content/profile.ts`, `content/skills.ts`, `content/achievements.ts`
- Domain: nextjs
- Depends on: T02
- Parallel group: C
- Review criteria:
  - Every string copied verbatim from the feature docs (no paraphrasing) — especially the achievement description's exact wording.
  - URLs match `DISCOVERY.md` §9 character-for-character.
  - Skills list is exactly feature 04's two approved groups — no additions.
  - CGPA stored as plain data, never in a shape that invites a progress-bar render.
- Status: [x] done

### T07 — Hero section component
- Feature: `docs/features/01-hero.md`
- Files: `components/sections/Hero.tsx`
- Domain: nextjs
- Depends on: T05, T06
- Parallel group: D (solo — walking skeleton, narrow on purpose)
- Review criteria:
  - Copy matches feature 01 verbatim, kept component-local (not `content/profile.ts` — see content-model scoping note below).
  - Exactly one `h1`; "View projects" is a plain `<a href="#projects">` that works without JS; 4 profile links via `ExternalLink`.
  - Hero graphic + one-shot `offset-path` signal animation ported near-verbatim from `wireframe/index.html` (the hero-graphic block); `aria-hidden="true"`, no photo/headshot.
  - At a simulated 1440×900 viewport, all hero content + 4 links visible with no scroll — check and report.
- Status: [x] done

### T08 — Minimal root layout + page (walking-skeleton checkpoint)
- Feature: `docs/IMPLEMENTATION_PLAN.md` step 1 completion gate (infra)
- Files: `app/layout.tsx`, `app/page.tsx`
- Domain: nextjs
- Depends on: T07
- Parallel group: E (solo — this is the checkpoint)
- Review criteria:
  - `page.tsx` renders only `<main id="main-content"><Hero /></main>` — intentionally incomplete (About/Projects/etc. land in T20).
  - Skip-link is the first focusable element.
  - `npm run build` succeeds AND `npm start` serves the page with Hero visible and `/resume.pdf` returning 200 — paste both outputs. This is the actual end-to-end proof before fanning out.
- Status: [x] done

### T09 — Header & mobile navigation
- Feature: `docs/features/08-navigation.md`
- Files: `components/layout/SiteHeader.tsx`, `components/layout/MobileNav.tsx`
- Domain: nextjs
- Depends on: T05, T06
- Parallel group: F
- Review criteria:
  - `MobileNav` is the only client component — `aria-expanded` toggles, `Escape` closes and restores focus to the toggle, every menu link closes the menu on click (feature 08 exact requirements).
  - Desktop nav shows at ≥860px per the wireframe's single breakpoint — don't invent a different one.
  - 44×44px min toggle tap target; resume button present in both desktop nav and mobile menu.
- Status: [x] done

### T10 — Footer / contact
- Feature: `docs/features/07-contact.md` (footer and contact are one component here — the wireframe implements contact entirely inside its `<footer>`, no separate contact section exists in the DOM)
- Files: `components/layout/SiteFooter.tsx`
- Domain: nextjs
- Depends on: T05, T06
- Parallel group: F
- Review criteria:
  - Single `<footer id="contact">` with heading, `mailto:` email, resume link, 4 profile links, copyright — matches wireframe exactly. No separate `sections/Contact.tsx` file should exist.
  - Email link visible as text, not icon-only.
  - No contact form anywhere.
- Status: [x] done

### T11 — About section
- Feature: `docs/features/02-about.md`
- Files: `components/sections/About.tsx`
- Domain: nextjs
- Depends on: T05, T06
- Parallel group: F
- Review criteria:
  - Two-column editorial layout ≥ tablet, single column below, matching `.about-grid`.
  - Copy pulled from `content/profile.ts`, not re-typed in the component.
  - CGPA in a `dt`/`dd` pair as plain text, never a bar/gauge.
- Status: [x] done

### T12 — Skills section
- Feature: `docs/features/04-skills.md`
- Files: `components/sections/Skills.tsx`
- Domain: nextjs
- Depends on: T05, T06
- Parallel group: F
- Review criteria:
  - Renders both groups from `content/skills.ts` as plain list items with visible `<h3>` group headings.
  - Two-column desktop grid collapsing to one column ≤860px.
  - No proficiency indicator attached to any tag.
- Status: [x] done

### T13 — Achievements section
- Feature: `docs/features/05-achievements.md`
- Files: `components/sections/Achievements.tsx`
- Domain: nextjs
- Depends on: T05, T06
- Parallel group: F
- Review criteria:
  - Renders exactly the data from `content/achievements.ts` — no trophy icon, no celebratory animation.
  - Date is visible text, not color/position alone.
- Status: [x] done

### T14 — Project content data
- Feature: `docs/features/03-project-case-studies.md` + `docs/evidence/PROJECT_SOURCE_NOTES.md` (the actual fact source)
- Files: `content/projects.ts`
- Domain: nextjs
- Depends on: T02
- Parallel group: C
- Review criteria:
  - Every field traces to a specific line in `PROJECT_SOURCE_NOTES.md` — reviewer must be able to point at the source sentence for each claim; anything not in the source notes is an automatic FAIL.
  - Stack tags exactly match "Verified stack" lines: Student Management = Java/OOP/File I/O (not Collections Framework — this exact mistake already happened once, see MEMORY.md); Medicity = HTML/CSS-SCSS/JS-jQuery/PHP mailer (not React/Node/MongoDB/AI); Job Portal = Java/JSP/Servlets/JDBC/MySQL/Tomcat/Maven.
  - `repoUrl` values match the three canonical `.git` URLs character-for-character.
  - `order` reflects the required 1/2/3 sequence.
- Status: [x] done

### T15 — Project card + detail disclosure components
- Feature: `docs/features/03-project-case-studies.md` ("Interaction and accessibility") + `wireframe/index.html` project-row markup as structural contract
- Files: `components/projects/ProjectCard.tsx`, `components/projects/ProjectDetail.tsx`
- Domain: nextjs
- Depends on: T05, T14
- Parallel group: F
- Review criteria:
  - `ProjectCard` owns expand/collapse state (client component); `ProjectDetail` accepts a `diagram: ReactNode` prop rather than importing a specific diagram file — decouples this task from T16–T18, must not hardcode an import.
  - `aria-expanded` + `aria-controls` + matching `id`/`role="region"` + `hidden` toggle, exact wireframe pattern.
  - No nested interactive elements — repo link is a sibling of the toggle, independently reachable.
  - The tiny 84×56 collapsed-state preview icon is an inline `aria-hidden` SVG per project (not a separate file), hidden ≤860px via CSS.
- Status: [x] done

### T16 — Student Management System diagram
- Feature: `docs/features/03-project-case-studies.md` + `docs/evidence/PROJECT_SOURCE_NOTES.md` §1
- Files: `components/projects/diagrams/StudentManagementDiagram.tsx`
- Domain: nextjs
- Depends on: T02
- Parallel group: C
- Review criteria:
  - Only these two flows: "Admin input → validation → `students.txt`" and "Admission number lookup → `Marksheet.calculateCGPA()` → console output." No database, web UI, or report-export claim.
  - `<svg role="img">` with `<title>` + visible `<figcaption>`.
  - Genuinely distinct stacked layout below ~480–640px, not the same viewBox scaled — inspect rendered markup at both breakpoints and confirm the box arrangement changes. The approved wireframe itself doesn't demonstrate this (it just scales the same viewBox down) — this task must go beyond the wireframe on this specific point, per the feature doc's explicit requirement.
- Status: [x] done

### T17 — Medicity diagram
- Feature: `docs/features/03-project-case-studies.md` + `docs/evidence/PROJECT_SOURCE_NOTES.md` §2
- Files: `components/projects/diagrams/MedicityDiagram.tsx`
- Domain: nextjs
- Depends on: T02
- Parallel group: C
- Review criteria:
  - Vocabulary limited to: static pages (home-classic.html + appointment/doctor/department/service/shop/contact), the three named JS assets, and the verified `vercel.json` rewrite. Zero backend/data-flow/database/AI/recommendation-engine implication in any label or shape — highest-risk diagram for AI-slop drift back toward the rejected MERN/AI framing (MEMORY.md already logged this mistake once).
  - Same accessible-title/figcaption/stacked-mobile requirements as T16.
- Status: [x] done

### T18 — Job Portal diagram
- Feature: `docs/features/03-project-case-studies.md` + `docs/evidence/PROJECT_SOURCE_NOTES.md` §3
- Files: `components/projects/diagrams/JobPortalDiagram.tsx`
- Domain: nextjs
- Depends on: T02
- Parallel group: C
- Review criteria:
  - Flow matches source notes exactly: JSP views → servlet controllers → DAO → MySQL (`users`, `jobs`, `applications`, `job_audit`); roles ADMIN/EMPLOYER/JOBSEEKER; commit/rollback + audit only on approval. No production/real-users/secure-auth claim (source notes flag a plaintext sample password).
  - Same accessible-title/figcaption/stacked-mobile requirements as T16.
- Status: [x] done

### T19 — Projects section wrapper
- Feature: `docs/features/03-project-case-studies.md`
- Files: `components/sections/Projects.tsx`
- Domain: nextjs
- Depends on: T14, T15, T16, T17, T18
- Parallel group: G (solo — first convergence point)
- Review criteria:
  - Maps `content/projects.ts` (by `order`) to `ProjectCard`, matching each `slug` to its diagram (the one place this wiring happens, per T15's decoupling).
  - Disclosure rows with `border-top: Seam` dividers — not a card grid (DESIGN.md explicit ban).
  - Manual keyboard-only expand/collapse check on all 3 rows — paste what was checked.
- Status: [x] done

### T20 — Full page composition
- Feature: `docs/features/08-navigation.md` ("Information architecture") — supersedes T08's minimal version
- Files: `app/layout.tsx`, `app/page.tsx`
- Domain: nextjs
- Depends on: T09, T10, T11, T12, T13, T19
- Parallel group: H (solo — second, full-scope checkpoint)
- Review criteria:
  - Layout wraps `<SiteHeader />`, `{children}`, `<SiteFooter />`; page composes Hero → About → Projects → Skills → Achievements exactly (Contact is `SiteFooter`, not a separate section).
  - Heading order `h1` → `h2` per section, no skipped levels.
  - `npm run build` succeeds, full page renders with no console errors — paste output.
- Status: [x] done

### T21 — Metadata, sitemap, robots
- Feature: `docs/IMPLEMENTATION_PLAN.md` step 6 + "Performance and SEO checklist"
- Files: `app/layout.tsx` (metadata export), `app/sitemap.ts`, `app/robots.ts`
- Domain: nextjs
- Depends on: T20, T22
- Parallel group: I
- Review criteria:
  - Title/description reuse the wireframe's own copy (drop "(Wireframe)" suffix) — don't invent new marketing copy.
  - `openGraph.images` points at `/og-image.png`; canonical URL left as a clearly marked placeholder if the production domain isn't assigned yet — never a fake domain.
  - `sitemap.ts`/`robots.ts` use Next.js's typed file-convention exports.
- Status: [ ] pending

### T22 — Brand image assets (OG image + favicon)
- Feature: `docs/IMPLEMENTATION_PLAN.md` repo structure + `docs/DESIGN.md` §8 bans
- Files: `public/og-image.png`, `app/icon.png` (or `public/favicon.ico`)
- Domain: general
- Depends on: T03
- Parallel group: I
- Review criteria:
  - No stock photography, no gradient, no AI/ML visual cue — built from the same tokens as the rest of the site, not a generic template.
  - Correct OG dimensions (1200×630), reasonable file size (must not regress T25's Lighthouse budget).
- Status: [x] done

### T23 — Content/link validation test (optional, time-permitting)
- Feature: `docs/IMPLEMENTATION_PLAN.md` repo structure (`tests/content-links.test.ts`) — cross-cutting, no dedicated feature doc
- Files: `tests/content-links.test.ts`, `package.json` (add `test` script)
- Domain: nextjs
- Depends on: T06, T14, T20
- Parallel group: J
- Review criteria:
  - Use Node's built-in `node:test`/`node:assert` — don't add Vitest/Jest as a new dependency (project explicitly avoids unnecessary libraries).
  - Asserts: all content URLs match the `DISCOVERY.md` §9 canonical list, `resumePdfPath === "/resume.pdf"`, project `order` values are 1/2/3 with no gaps/dupes.
  - Explicitly skippable without blocking ship if the pacing schedule runs tight — note that in the status update rather than dropping it silently.
- Status: [ ] pending

### T24 — Accessibility, responsive, lint/typecheck/build QA pass
- Feature: `docs/IMPLEMENTATION_PLAN.md` "Accessibility and responsive checklist" + "Test and sign-off plan"
- Files: none (verification only — findings become new fix tasks, not silent edits)
- Domain: nextjs
- Model: orchestrator-run (integration-only task per `agents.md`, not a Haiku dispatch)
- Depends on: T20, T21, T22
- Parallel group: K
- Review criteria:
  - `npm run lint`, `npm run build` — paste output.
  - Manual pass at 375px/768px/1440px per section — no horizontal scroll, no clipped/overlapping content.
  - Keyboard-only pass through the entire page in order, visible focus at every stop.
  - `prefers-reduced-motion: reduce` emulated — reveals instant, hero signal hidden.
- Status: [ ] pending

### T25 — Lighthouse mobile performance pass
- Feature: `docs/PRD.md` §6/§8 (Lighthouse mobile Performance ≥90)
- Files: none (fixes, if needed, are scoped to whatever caused the regression)
- Domain: nextjs
- Depends on: T24
- Parallel group: L
- Review criteria:
  - Run against `next build && next start`, never `next dev`.
  - Score ≥90 mobile Performance; any fix traced to a specific cause, not a vague "optimize things" pass.
- Status: [ ] pending

### T26 — Vercel deployment + live verification
- Feature: `docs/PRD.md` §6 + `docs/IMPLEMENTATION_PLAN.md` step 7
- Files: none (deployment config only if actually needed — the wireframe's old `vercel.json` for Medicity's mockup path does not apply here)
- Domain: general
- Depends on: T25
- Parallel group: M
- Review criteria:
  - Requires the user's own Vercel account/GitHub-repo connection — cannot be completed autonomously by any coder agent; flag explicitly when dispatched.
  - Production URL loads; `/resume.pdf` returns 200 on the live domain; all 4 profile links, email, and repo links resolve from the deployed site (feature 07: dead profile links are a release blocker).
- Status: [ ] pending
