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

6 of 26 tasks done, all committed and pushed individually to `origin/mastermind/portfolio`.

## Next action

T07 (Hero component) is next — start of the walking-skeleton checkpoint (T07 → T08), deliberately narrow/solo by design. After that, T09–T13/T15 (header, footer, about, skills, achievements, project cards) unlock in parallel, and T14/T16–T18 (project content + all 3 diagrams) are already unblocked (only need T02, which is done) and could run alongside T07 in a future session. Check with user each session whether to continue or stop for the day — don't auto-chain an unbounded number of tasks just because they're unblocked.
