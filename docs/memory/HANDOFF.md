# Handoff — Portfolio project

## Current state (as of 2026-09-01)

- **Phase 0 (Setup):** Done. Git repo initialized, branch `mastermind/portfolio`, `docs/` scaffolded. Remote: https://github.com/Manu-code-all/Portfolio- (`main` = default branch, `mastermind/portfolio` = feature branch).
- **Phase 1 (Discovery):** `docs/DISCOVERY.md` drafted and **approved** by user.
- **Phase 2 (PRD):** `docs/PRD.md` drafted and **approved** by user on 2026-08-26. Vercel confirmed as deployment target; P2 stretch feature 9 approved if time permits.
- **PR:** https://github.com/Manu-code-all/Portfolio-/pull/1 (mastermind/portfolio → main) open, contains Discovery + PRD commits.
- **Phase 3 (Feature Breakdown):** Done. All nine feature specifications are present in `docs/features/`.
- **Phase 4 (Implementation Plan):** Done. `docs/IMPLEMENTATION_PLAN.md` defines architecture, build order, quality checks, and the Vercel release handoff.
- **Phase 5 (API Record):** Done. `docs/API_RECORD.md` records the static v1’s no-API architecture. Source evidence is in `docs/evidence/PROJECT_SOURCE_NOTES.md`.

## Key facts carried forward

- Owner: Manu Gupta, 3rd-year CS student, Galgotia University, CGPA 7.7, no work experience — purely academic + project-based. Portfolio must not overstate experience level.
- Stack: Next.js + React + Tailwind, deploy target: Vercel (confirmed).
- Look and feel: dark mode default, minimal/near-monochrome palette, restrained/fast motion.
- 3 real projects to turn into case studies (repos in DISCOVERY.md §7): Student Management System, Medicity (verified static healthcare website), Job-Portal-Web-App.
- No system-design portfolio section — explicitly excluded (no real track record); systems thinking shows through in project case-study architecture diagrams instead.
- Profile links: GitHub github.com/Manu-code-all, LinkedIn, LeetCode, GeeksforGeeks (all in DISCOVERY.md §9).

## Pacing constraint (hard rule — set 2026-08-24)

User wants this built gradually, NOT in one sitting: small commits spread across real days so the GitHub history looks like natural incremental human work, target completion **2026-09-15**. Do not rush multiple phases/days of work into a single session unless the user explicitly asks to catch up or accelerate. Cadence plan:
- Aug 24–26: Phase 1–2 gates (Done!)
- Aug 27–30: Phase 3 feature docs (~3 per session)
- Aug 31–Sep 1: Phase 4 implementation plan
- Sep 2: Phase 5 API record
- Sep 3–4: Phase 6 design
- Sep 7–13: Phase 8 build (task-by-task, few small commits/day)
- Sep 14: Phase 9 wrap
- Sep 15: deploy

## Resume status — RESOLVED 2026-08-29

Approved final resume: `assets/resume/Manu_Gupta_Resume.pdf` (generator: `assets/resume/create_resume.py`). 3rd-year education state, verified-only project claims (see `docs/evidence/PROJECT_SOURCE_NOTES.md` for the full resolution). Unblocks `docs/features/06-resume.md`.

**Note:** user supplied an interim resume draft (`Manu_Gupta_3rd_year_resume.pdf`) claiming unbuilt features for Medicity (Google Maps, symptom/disease lookup, medicine recommendations) and Student Management System (Collections-based O(1) lookup). Repos were re-verified — neither has changed since the original check. User's decision: build those features into the real repos **after** the portfolio ships, not before. Do not add these claims to portfolio content or resume until re-verified as actually present in the code.

## Phase 6 (Design)

Done and **approved** by user (2026-08-29). `docs/DESIGN.md`: "Machine-Shop Minimal" lane, warm-graphite near-monochrome palette with a single rust accent (Signal Rust #C4692E), Red Hat Display/Text/Mono typography, restrained settle-in-only motion, disclosure-pattern project rows (not card grids).

## Phase 7 (Wireframes)

Done and **approved** by user (2026-09-01), after two rounds of real fixes: (1) Sonnet review round 1 FAIL — primary-button contrast ~3.35:1, a stray comment, a preventive nav-state note — all fixed (see MEMORY), verified via grep + recomputed contrast (~4.66:1, passes); (2) user feedback on the hero graphic ("looks thin/not good") — replaced 3 sparse boxes with a denser 6-component blueprint schematic + one-time signal animation; (3) user caught SVG text overflowing its boxes in all 3 project diagrams — rebuilt geometry for all three, verified with a headless `getBBox()` measurement (not eyeballed) showing zero overflow. Final files: `wireframe/index.html` + `index-states.html` + `tokens.css`.

## Phase 8 (Build) — IN PROGRESS

`docs/IMPLEMENTATION_PLAN.md` now has the full atomic task list (`## Tasks`, T01–T26, walking-skeleton-first order) designed via a Plan agent from PRD/DESIGN/features/evidence/wireframe. Three structural corrections baked in: no separate `Contact.tsx` (folded into `SiteFooter.tsx`), collapsed-state project preview icons stay inline (not separate files), and the 3 diagram components must build genuinely-stacked mobile layouts (the wireframe itself only scales down, which the feature spec forbids).

Environment verified ready: Node v24.12.0, npm 11.6.2, npx present, clean repo (no existing package.json/node_modules anywhere).

**T01 done (2026-09-01).** Next.js 16.3.3 + React 19.2.8 + Tailwind v4 + TypeScript scaffolded, non-interactively, into the existing repo (worked around create-next-app's non-empty-dir refusal via temp-dir + merge). `npm run build` verified twice independently (once by the reviewer, once by the orchestrator) — passes. Review round 1: FAIL on two small findings — orchestrator's own stray scratch files inside `docs/memory/reviews/` (deleted) and `package.json`'s `"name"` field inheriting the temp scaffold dir's name (fixed to `"portfolio"`) — both fixed directly, re-verified, no second review round needed for such small fixes.

**T02–T06 also done (2026-09-01, same session, user asked to continue).** Content types (+ a missing `SitePerson` type caught and fixed, plan doc too), design tokens/global styles (+ 3 real bugs caught and fixed: wrong Tailwind v4 `@theme` key namespace silently producing zero color utilities, disconnected next/font CSS vars silently falling back to system-ui, wrong scroll-margin token), resume asset (fully verified live via real HTTP fetch), UI primitives (+ a wireframe-fidelity bug in `SectionHeading` caught and fixed — used valid-but-wrong tokens), and profile/skills/achievements content (+ a curly-vs-straight-apostrophe verbatim-copy bug caught and fixed). Every task went through coder → Sonnet review → fix-if-needed → commit; several review rounds caught real, independently-verified bugs, not nitpicks. Pattern worth knowing: the `nextjs-dev` specialist self-commits its own work before review runs, unlike the general-purpose+haiku coders used for T01/T04.

**T07 and T08 also done (2026-09-01, same session).** T07 (Hero component) passed review clean, first try — no findings. T08 (walking-skeleton checkpoint) also passed clean: independently reproduced by the reviewer — real production build, real `npm start` server, live fetch confirming Hero content renders and `/resume.pdf` returns 200. **The site is now genuinely running end-to-end**, not just individually-passing pieces. Showed it to the user running locally at this point.

**T14 + T16–T18 also done (2026-09-01, same session, user asked to continue).** Project content data and all 3 architecture diagrams. This batch caught the most real bugs yet: T14 had 4 unverified capability claims (Medicity "appointment booking" implied backend functionality the static site doesn't have; job-portal "track status"/"search and apply" weren't in the verified workflow list) — all reworded to only what's evidenced. T16/T18 (and proactively T17 too) had a systemic duplicate-`<title id>` bug across their desktop/mobile SVG pairs (both render simultaneously via CSS toggle — invalid HTML, breaks `aria-labelledby`). T16 also had an unnecessary `'use client'` violating the plan's own component-boundary table, plus dead markup. T18 was the worst: a single shared SVG viewBox for both layouts caused real content (the Roles/audit box) to be clipped off entirely on mobile — rewrote to the two-svg-per-breakpoint pattern the other two diagrams already used correctly.

**T09, T10, T11, T12, T13, T15 also done (2026-09-01, same session, user asked to continue).** Header/mobile nav, footer/contact, about, skills, achievements, and the project card/detail disclosure components — every remaining section component except the Projects wrapper itself. Dispatched as 6 parallel coder agents; this caused real environment corruption (not just review-time nitpicks) — one build silently pulled a mismatched Next.js version via a corrupted native SWC binary from concurrent npm cache writes. Caught it, did a full `node_modules` wipe + reinstall, and independently verified with a clean sequential `npm run build` + project-wide `npx tsc --noEmit` before trusting any individual task's self-report. See MEMORY for the full gotcha — **future sessions should avoid dispatching many parallel coder agents that each run npm install/build against the same working tree**, or isolate them in worktrees.

Review findings (all fixed): T10 had the same straight-vs-curly-apostrophe bug as T06 (third occurrence of this exact class — worth calling out explicitly in future coder prompts); T13 was missing `className="section-pad"` (would've collapsed vertical spacing once wired up); T09's CSS port had one harmless duplicate rule (deduped). T11, T12, T15 passed clean first try.

**T19 done (2026-09-01, new session).** Projects section wrapper — maps each project's slug to its diagram component and renders the sorted project list. Review caught one invented-copy issue: an `label="Case Studies"` prop on `SectionHeading` that wasn't in the wireframe — removed.

**T20 done (2026-09-01, same session).** Full page composition — `app/layout.tsx` now wraps every page with `SiteHeader`/`SiteFooter`, `app/page.tsx` composes Hero/About/Projects/Skills/Achievements. **This is the first point the entire site is wired together and viewable**, not just Hero. The coder added `'use client'` to all 3 diagram components for styled-jsx support — verified as genuinely necessary (not a band-aid) by reverting it and watching the build fail with a real Server/Client boundary error; T16-T18 had passed earlier only because those components were still unimported orphans at that point, so the bundler never enforced the boundary on them.

Sonnet review then found 2 more real bugs, both fixed and independently re-verified: (1) heading hierarchy skipped a level (`<h2>Projects</h2>` → `<h4>Problem</h4>` with project titles as plain `<span>`s, no `<h3>` between) — fixed by promoting project titles to `<h3>`; (2) mounting all 3 diagrams' `<style jsx>` blocks simultaneously produced a reproducible React key-prop console warning — confirmed dev-mode-only (absent from production build) but fixed properly anyway by migrating all 3 diagrams' styles into `app/globals.css` as static classes and removing `'use client'` entirely, restoring them to proper server components. Verified: `tsc --noEmit` clean, `npm run build` clean, fresh browser console clean, `curl`-checked heading sequence h1→h2→h2→h3→h4 correct.

**20 of 26 tasks done.** Remaining: T21-T26 (metadata/sitemap/robots, OG image/favicon, optional content-link tests, accessibility/responsive/QA pass, Lighthouse, Vercel deployment).

## Next action

Show the user the running site (was mid-request when the last session's context ran out). Then, per the pacing constraint, check with the user whether to continue with T21+ this session or stop for the day — do not auto-chain into T21-T26 without checking in first.

## Session resume prompt

To resume in a fresh session, paste:

"Continue the Manu Gupta Portfolio project in C:\Users\manug\Downloads\claud (mastermind workflow). Read docs/memory/HANDOFF.md and docs/memory/MEMORY.md first, then continue with T21 onward per docs/IMPLEMENTATION_PLAN.md."
