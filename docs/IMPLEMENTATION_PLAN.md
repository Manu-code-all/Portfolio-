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
