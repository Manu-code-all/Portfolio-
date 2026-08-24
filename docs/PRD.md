# PRD — Manu Gupta Portfolio
Version: 1.0 · Date: 2026-08-24 · Status: draft
Source: docs/DISCOVERY.md

## 1. Overview

**Problem:** Manu Gupta (3rd-year CS student) has no single place to point people when asked "can I see your work?" Right now that means separately linking a resume PDF, a GitHub profile, and hoping the viewer connects the dots.

**Vision:** A single-page-feel personal portfolio that reads as polished and intentional — the kind of execution quality that itself signals engineering seriousness — built honestly around real academic projects, with no overstated experience, no AI/ML branding, and no fabricated system-design track record.

**Target outcome:** A recruiter, interviewer, or peer visiting the site in under 2 minutes understands who Manu is, sees 3 well-documented real projects with actual architecture thinking behind them, and can reach him or grab his resume without friction.

## 2. Users & personas

**Primary — The Evaluator** (recruiter, hiring manager, technical interviewer)
- Goal: quickly assess technical seriousness and fit; skim in ~60-90 seconds, then decide whether to dig into a project or the resume.
- Pain point: generic template portfolios that say nothing beyond a resume already says.
- Technical level: high (can spot a shallow project claim or a bad architecture diagram).

**Primary — The Peer / Networker** (fellow student, hackathon teammate, GitHub visitor)
- Goal: understand what Manu's built and how, possibly starting from a project repo README linking back here.
- Technical level: high.

**Secondary — Manu (site owner)**
- Goal: a portfolio he can confidently hand over in any context (job application, hackathon team formation, LinkedIn bio link) without it overselling or underselling him.
- Needs to be able to update project content/resume without a rebuild-from-scratch effort later.

## 3. Feature list (prioritized)

| # | Feature | Priority | Depends on | Feature doc |
|---|---------|----------|-----------|-------------|
| 1 | Hero / intro | P0 | — | docs/features/01-hero.md |
| 2 | About section | P0 | — | docs/features/02-about.md |
| 3 | Project case studies (3x) | P0 | — | docs/features/03-project-case-studies.md |
| 4 | Skills section | P0 | — | docs/features/04-skills.md |
| 5 | Achievements (SIH) | P1 | — | docs/features/05-achievements.md |
| 6 | Resume download | P0 | — | docs/features/06-resume.md |
| 7 | Contact / links footer | P0 | — | docs/features/07-contact.md |
| 8 | Navigation / scroll structure | P0 | 1–7 | docs/features/08-navigation.md |
| 9 | Design-practice write-up (stretch) | P2 | 3 | docs/features/09-design-practice.md |

P0 = v1 blocker, P1 = v1 nice, P2 = later / only if time allows.

## 4. User flows

### Flow A — Evaluator quick-scan
1. Land on hero → sees name, one-line positioning, links (GitHub/LinkedIn/LeetCode/GfG).
2. Scrolls to About → gets context (3rd-year CS student, what he's focused on).
3. Scrolls to Projects → skims 3 case-study cards (title, one-liner, stack tags, thumbnail/diagram).
4. Opens one case study → reads problem → architecture diagram → stack → outcome → clicks through to GitHub repo.
5. Scrolls to Skills → confirms stack overlap with what they're hiring for.
6. Hits Contact/footer → clicks email or downloads resume.

No error branches in this flow (static content) — degrade path: if a project repo link is dead/private, case study still stands on its own without requiring the click-through.

### Flow B — Resume download
1. Visitor clicks "Resume" (nav or footer).
2. PDF opens in new tab / downloads directly — no gate, no email capture.

### Flow C — Mobile visitor
1. Same content, single-column, nav collapses to a menu button.
2. Case-study architecture diagrams must remain legible at mobile width (not just shrunk — provide a simplified/stacked rendering if needed).

## 5. Data model

This is a static content site — no live database. Content lives as structured local data (TypeScript/JSON/MDX files in the Next.js project), shaped as:

**Project**
- `slug`, `title`, `oneLiner`, `problem` (text), `architectureDiagram` (image/svg ref or embedded diagram component), `stack` (string[]), `outcome` (text), `repoUrl`, `liveUrl?` (optional), `order` (int)

**SkillGroup**
- `groupName` ("Languages" | "Technologies"), `skills` (string[])

**Achievement**
- `title`, `date`, `description`, `link?`

**ProfileLinks**
- `github`, `linkedin`, `leetcode`, `geeksforgeeks`, `email`, `resumePdfPath`

**SitePerson**
- `name`, `headline`, `bio`, `education` (institution, degree, dates, cgpa)

No user accounts, no forms that write data, no backend persistence — everything is build-time content.

## 6. Non-functional requirements

- **Performance:** Lighthouse performance ≥ 90 on mobile; hero interactive within ~1.5s on a throttled connection (static generation, no heavy client JS on first paint).
- **Accessibility:** WCAG AA — color contrast (especially important given the near-monochrome dark palette), keyboard nav for all interactive elements, alt text on diagrams/images, semantic heading structure.
- **Responsive:** mobile (375px+), tablet, desktop — case-study diagrams need a mobile-legible fallback, not just scale-down.
- **Browser support:** current Chrome/Edge/Firefox/Safari, last 2 versions.
- **Motion:** per DISCOVERY.md — restrained/fast only; respect `prefers-reduced-motion`.
- **SEO/sharing:** basic meta tags + OG image so the link previews well when shared (LinkedIn, etc.).
- **Hosting:** Vercel (assumed — see Open Questions).

## 7. Non-goals

- No CMS or admin panel — content edits happen by editing source files and redeploying.
- No blog engine (out of scope for v1; could be a P2/future addition, not built now).
- No contact form with backend (a `mailto:` link and direct email display is sufficient — avoids needing form-handling infra for v1).
- No AI/ML branding or positioning anywhere on the site.
- No claimed system-design track record or fabricated work experience.
- No authentication, no user accounts, no analytics dashboard beyond maybe a lightweight, privacy-respecting pageview counter (optional, not required).

## 8. Acceptance criteria

- **Hero:** name, one-line positioning, and all 4 profile links visible and correct without scrolling on a 1440px desktop viewport.
- **About:** states current year (3rd-year), university, and focus area; contains no AI/ML framing, no false experience claims.
- **Project case studies:** all 3 projects present, each with a real architecture diagram (not a stock/generic image), correct repo links (verified against docs/DISCOVERY.md §7), Medicity copy contains no "AI-powered" framing.
- **Skills:** all languages/technologies from the resume are listed, grouped, no fabricated skills added.
- **Resume:** clicking the resume link opens/downloads the actual PDF, correctly, on both desktop and mobile.
- **Contact:** email is a working `mailto:` link; all 4 profile links open the correct, correct external profile in a new tab.
- **Responsive:** no horizontal scroll, no overlapping/clipped content at 375px, 768px, 1440px widths.
- **Performance:** Lighthouse mobile performance score ≥ 90, verified with an actual run before Phase 9 sign-off.
- **Dark mode:** loads in dark theme by default; text contrast passes WCAG AA against the dark background.

## 9. Open questions

- **DEFERRED(user):** Confirm Vercel as the deploy target, or specify an alternative — assumed for now, needs confirmation before Phase 8 build/deploy steps.
- **DEFERRED(user):** Whether the P2 design-practice write-up (Feature 9) is attempted at all, decided once the 3 core case studies are done and remaining time/appetite is known.
