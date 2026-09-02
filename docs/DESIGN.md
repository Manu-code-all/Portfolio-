# Design System — Manu Gupta Portfolio

Source: `docs/DISCOVERY.md` §8, `docs/PRD.md`. Register: **Brand** (a portfolio is the impression, per `impeccable.md`) — but restrained by the user's explicit ask for dark, near-monochrome, restrained motion. This is a "quiet brand," not a maximalist one: the discipline itself is the statement.

## 0. Aesthetic lane

**Machine-Shop Minimal.** The reference point is a precision tool catalog or an engineering field notebook, not a SaaS landing page or a design-agency showcase. Think machined aluminum, matte graphite, a single stamped rust-orange calibration mark — not glass, not gradients, not neon.

Inverse test: a competitor description would read "dark developer portfolio with a green accent and Space Grotesk" — that's the generic-AI default this project explicitly avoids. This project reads instead as "warm graphite, one rust signal color, a type family built for open-source software." Distinct answer, passes.

**AI slop test:**
- First-order (guess the palette from category alone)? A generic "dev portfolio" guess is dark-slate-blue + green or blue accent (shadcn default). This uses warm graphite (not cool slate-blue) + a single rust-amber accent (not the reflex green/blue). Fails the reflexive guess — passes the test.
- Second-order (guess the aesthetic family from category-plus-anti-reference "not SaaS-cream, not editorial-serif")? A second-guess might land on "brutalist/terminal-green hacker aesthetic." This isn't that either — no scanlines, no terminal-green, no all-caps brutalism. It's calmer: an engineering-notebook restraint. Passes.

## 1. Visual theme & atmosphere

A warm-graphite workshop at low light — matte surfaces, one stamped rust-orange calibration mark, everything else quiet. Density is airy (three real projects deserve room to breathe, not a cramped dashboard). Layout carries deliberate asymmetry — nothing is dead-centered, nothing is a plain 3-up card grid. Motion is present but restrained: things settle into place, nothing performs.

- **Density:** 4/10 (Daily-App Balanced, leaning airy — content-first, no clutter)
- **Variance:** 5/10 (Offset Asymmetric — hero and project list break from centered/grid defaults, but nothing chaotic)
- **Motion:** 3/10 (Static Restrained, leaning Fluid — settle-in reveals only, no perpetual loops, no cinematic choreography; matches the user's explicit "restrained/fast" requirement)

## 2. Color palette & roles

Dark-first only (no light mode requirement per discovery). Warm-neutral base — deliberately not the cool slate-blue that's become the default "dark dev portfolio" reflex. Single accent, used sparingly (Restrained color strategy — tinted neutrals + one accent ≤10% of any surface).

| Name | Hex | Role |
|---|---|---|
| **Warm Graphite** | `#18160F` | Page background. Not pure black — warm near-black with a faint brown undertone. |
| **Raised Graphite** | `#211E17` | Card/panel surfaces, one step lighter than background. |
| **Seam** | `#3A352A` | Borders, dividers, structural rules — visible in dark mode, not decorative. |
| **Bone** | `#F2EEE3` | Primary text. Warm off-white, not pure `#FFFFFF`. |
| **Worn Steel** | `#9B9484` | Secondary/muted text — captions, metadata, dates. |
| **Signal Rust** | `#C4692E` | The one accent. Links, primary CTA (résumé download, project repo links), focus rings, active nav state. Saturation kept moderate — a stamped mark, not a glow. |
| **Caution** | `#C74A3E` | Destructive/error semantics only (not expected in v1's static flows, reserved for future form/error states). |
| **On Accent (Ink)** | `#18160F` (= Warm Graphite) | Text/icon color when placed *on top of* a Signal Rust fill (e.g. the primary button). Reuses the background hex deliberately — button text reads as "cut from" the same dark material as the page, and it's the only pairing that clears AA contrast (see note below). |

No pure black, no purple/neon, no gradient fills. Accent never exceeds ~10% of any given surface — used for text links, one button fill, and focus outlines, never as a background wash.

**Contrast note (found in Phase 7 wireframe review, corrected here):** Bone text on a Signal Rust fill measures ~3.35:1 — fails AA for normal-weight/16px text. Ink (On Accent) text on the same fill measures ~4.66:1 — passes. Rule: Signal Rust as *foreground* (links, focus rings on the dark background) pairs with the page's light text tokens as normal; Signal Rust as a *fill* (button backgrounds) always pairs with On Accent (Ink) text, never Bone.

## 3. Typography

**Font selection ritual (per `impeccable.md` — never skip):**
1. Three brand-voice words: **machined, matte, structural.**
2. Reflex fonts I'd reach for by default: Space Grotesk, Inter, IBM Plex Mono — **all three are on the reflex-reject list.** Rejected.
3. Distinctive pick, cross-checked against the reflex: **Red Hat Display / Red Hat Text / Red Hat Mono** — a type system built for Red Hat's open-source software identity. Technical without being a cliché "coder font," humanist enough to stay warm, and not on the reflex-reject list. Doesn't match the original reflex — passes the cross-check.

| Role | Font | Notes |
|---|---|---|
| **Display / Headings** | Red Hat Display, weight 600–800 | Track-tight (`-0.02em` at large sizes), hierarchy through weight and the Signal Rust accent, not raw size. |
| **Body** | Red Hat Text, weight 400–500 | Relaxed leading (1.6), max 65ch measure. |
| **Mono** | Red Hat Mono, weight 400–500 | Stack tags, dates, repo paths, metadata — small, structured data only. |

Google Fonts: `Red Hat Display:wght@500;600;700;800`, `Red Hat Text:wght@400;500`, `Red Hat Mono:wght@400;500`.

**Scale** (fluid via `clamp()`):
- Display (H1, hero name): `clamp(2.5rem, 5vw + 1rem, 4.25rem)` — well under the 6rem ceiling
- H2 (section headings): `clamp(1.75rem, 2.5vw + 1rem, 2.5rem)`
- H3 (project/card titles): `1.25rem`–`1.5rem`
- Body: `1rem` (16px minimum)
- Small/mono (tags, metadata): `0.8125rem`

`text-wrap: balance` on H1–H3; `text-wrap: pretty` on body paragraphs.

## 4. Spacing & layout system

- 8px base spacing rhythm (4px for tight/inline gaps only).
- Section vertical rhythm: `clamp(3rem, 8vw, 6rem)` between major sections, reducing proportionally on mobile.
- Max content width: 1200px, centered, with responsive gutters (16px mobile → 48px+ desktop).
- CSS Grid for 2D layout (project list, skills groups); Flexbox for 1D (nav, button groups). No `calc()` percentage hacks.
- Full-height sections use `min-h-[100dvh]`, never `h-screen`.
- Semantic z-index scale: dropdown(10) → sticky-header(20) → mobile-nav-overlay(40) → toast(60). No `999`/`9999`.

## 5. Component inventory & states

| Component | Shape / treatment | States |
|---|---|---|
| **Primary button** (résumé download) | Flat fill, Signal Rust background, **On Accent (Ink) text** (not Bone — see §2 contrast note), subtly rounded (`0.375rem`) — no pill, no glow | default, hover (−1px translate + slight darken), focus-visible (2px Bone ring offset), active |
| **Text link** (nav, inline, footer) | Signal Rust text, underline on hover only (not permanent) | default, hover, focus-visible, visited (no distinct treatment — not needed) |
| **Project card / row** | No boxed card with drop shadow — use a `border-top: 1px solid Seam` divider between project rows instead (impeccable: "cards are the lazy answer"). Disclosure pattern: click/tap expands the full case study inline. | collapsed, expanded, hover (Seam border brightens slightly), focus-visible |
| **Skill tag** | Small, Red Hat Mono, Seam border, no fill — quiet, not badge-like pills in six colors | static (no interactive states needed) |
| **Mobile nav toggle** | Simple icon button, 44×44px minimum tap target | default, open (icon morphs), focus-visible |
| **Architecture diagram** | Custom SVG per project, Seam-colored lines on Raised Graphite background, Bone/Worn-Steel labels — no stock icon packs | static; mobile gets a simplified stacked layout, not a shrunk desktop version |

No modals, no toasts, no form inputs in v1 (static site, `mailto:` contact — no submission flow to design states for).

## 6. Motion & interaction

- Spring-ish ease-out only: `cubic-bezier(0.16, 1, 0.3, 1)` (ease-out-expo character) for entrances. No bounce, no elastic, no linear.
- Durations: micro-interactions (hover, focus) 150ms; section reveals 300–400ms max.
- One settle-in reveal per section on first scroll into view (fade + 8px translate-up) — staggered by ~40ms per item within a section (project rows, skill tags). Not a "perpetual loop" — everything settles and stops.
- Animate only `transform` and `opacity`. Nothing else.
- Every animation has a `prefers-reduced-motion: reduce` fallback: reveals become an instant appear, no translate.
- No scroll-jacking, no cursor-follow effects, no parallax — the user was explicit about this.

## 7. Page-by-page composition notes

**Hero:** Asymmetric split — name/role/one-line positioning + 4 profile links on the left ~60%, a quiet abstract structural line-graphic (blueprint-style thin Seam-colored lines, not a photo — no headshot in scope) on the right ~40%, stacking below on mobile. One primary CTA maximum (résumé download or "view work" scroll anchor — not both). No "scroll to explore" affordance of any kind.

**About:** Left-aligned text block, generous measure control (65ch max), education/status stated plainly. No stat-card row (would risk fabricated-metric AI slop — PRD explicitly bans invented numbers).

**Projects:** Not a 3-column equal grid (banned pattern). Full-width stacked rows separated by `border-top: Seam`, each row = one-line summary + stack tags, click-to-expand into the full case study (problem → architecture diagram → outcome → links) per `docs/features/03-project-case-studies.md`.

**Skills:** Grouped by category (Languages / Technologies), quiet mono tags, no proficiency bars or percentage claims (nothing to fabricate).

**Achievements:** Single entry (SIH) — treated as a simple dated item, not inflated into a stats section.

**Contact / footer:** Email as visible text + `mailto:` link, four profile links, résumé link repeated here. No contact form (PRD non-goal).

## 8. Banned on this project

From `impeccable.md` absolute bans + `taste-design.md` anti-patterns + project-specific bans:

- Side-stripe colored borders on cards/callouts
- Gradient text
- Glassmorphism
- The hero-metric template (big number + label + gradient accent)
- Identical 3-column equal card grids
- Uppercase tracked "eyebrow" kickers on every section
- Numbered section markers (01/02/03) as default scaffolding
- Pure black backgrounds
- Neon/outer-glow shadows, purple/blue AI-gradient aesthetic
- `Inter`, `Space Grotesk`, `IBM Plex Mono`, and the rest of the reflex-reject font list
- "Scroll to explore" text, bouncing chevrons, scroll arrows
- Any fabricated metric, statistic, or percentage not explicitly provided by the user (per `docs/PRD.md` non-goals)
- A standalone "System Design" portfolio section (per `docs/DISCOVERY.md` — no real track record to show)
- AI/ML branding or framing anywhere (per `docs/DISCOVERY.md`)
- Stock "person coding at laptop" photography — no imagery beyond the project architecture diagrams and, if available later, real project screenshots

**Superseded 2026-09-01 by §9 (Spectacular direction):** the user asked to redesign toward a bolder, more animated treatment inspired by Kokonut UI's component patterns. Glassmorphism and gradient/shimmer text are now in active use (see §9) — struck from this ban list for this project going forward. Everything else above still holds: no purple/blue AI-gradient hue (glow stays in the rust/accent family), no fabricated stats, no AI/ML framing, no stock photography, same font list, same "no System Design section" rule.

## 9. Spectacular direction (added 2026-09-01)

The user reviewed a live side-by-side comparison (two directions built as an artifact: "Restrained" — the original Machine-Shop Minimal polish — vs "Spectacular" — Kokonut-UI-inspired glass/particle/shimmer, re-skinned to this project's own tokens) and chose **Spectacular**. Applied across the real site:

- **Glass surfaces** (`.glass-surface` in `globals.css`): translucent graphite background, rust-tinted border, `backdrop-filter: blur(20px) saturate(150%)`, soft inset highlight, lift-on-hover. Used for: project rows, architecture diagram panels, the hero graphic panel, skill-group cards, the achievement card, the about-facts panel, and the sticky header (lighter blur, no lift).
- **Shimmer text** (`.shimmer-text`): an animated gradient sweep (Bone → warm highlight → Signal Rust → Bone) across the hero `<h1>` only — not used on body text or every heading, to keep it a signature moment rather than noise.
- **Ambient glow** (`.ambient-glow`): a soft rust-colored radial blob, slow drift, positioned behind the hero graphic. Always inside an `overflow: hidden` positioned ancestor — a glow blob bleeding past its section is a real horizontal-scroll bug, not just a visual nitpick (see `docs/memory/MEMORY.md`).
- **Particle buttons** (`components/ui/ParticleButton.tsx`): a canvas overlay that bursts a handful of accent-colored particles on hover. Used on the two hero CTAs. No-ops entirely under `prefers-reduced-motion: reduce`.
- **Scroll reveals** (`components/ui/Reveal.tsx`, using `motion` — motion.dev/Framer Motion's successor): a `whileInView` fade + slide-up, once per element, for About, Projects, Skills, and Achievements content. Falls back to a plain wrapper (no animation) under `prefers-reduced-motion: reduce`, via `useReducedMotion()`.

**Palette discipline preserved:** every glass/glow/shimmer value is built from the existing Warm Graphite / Signal Rust / Bone tokens — never Kokonut's own default purple/neutral-glass look. The accent stays singular; nothing here introduces a second hue.
