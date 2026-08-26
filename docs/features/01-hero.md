# Feature Spec — Hero / Intro

## Purpose

Give an evaluator immediate, honest context: who Manu is, what kind of developer he is becoming, and where to inspect his work. This section is the first viewport on desktop and should establish a polished, systems-minded tone without overstating experience.

## Content

- **Eyebrow:** `MANU GUPTA — PORTFOLIO`
- **Primary heading:** `Building thoughtful software, from the system outward.`
- **Supporting copy:** `Third-year Computer Science student focused on turning ideas into clear, reliable applications.`
- **Context line:** `Galgotia University · B.Tech Computer Science · 2024–2028`
- **Primary action:** `View projects` → `#projects`
- **Secondary action:** `Download resume` → `/resume.pdf`, opens in a new tab.
- **Profile links:** GitHub, LinkedIn, LeetCode, GeeksforGeeks. Use the canonical URLs recorded in `docs/DISCOVERY.md` §9.

Do not add claims about internships, production scale, years of experience, AI/ML specialization, or professional systems-design work.

## Layout and behavior

- Desktop (≥1024px): hero fills at least the initial viewport; name, heading, support copy, and all four profile links are visible without scrolling at 1440px height/width.
- Mobile/tablet: single-column layout; preserve the content order above and keep actions and profile links reachable without a horizontal scroll.
- The main heading is the sole `h1`. Supporting content uses paragraphs; links have visible text labels rather than icon-only controls.
- “View projects” uses smooth in-page scrolling only when motion is not reduced. It must work as an ordinary anchor regardless of JavaScript.
- External profile links open in a new tab and use `rel="noreferrer"` (or `noopener noreferrer`).

## Visual direction

- Dark-first, near-monochrome treatment with a restrained accent only for interaction states.
- Use typographic hierarchy, spacing, and a subtle structural detail (for example, a grid or index mark) rather than a portrait, stock art, cursor effect, or animation spectacle.
- Motion is short and optional; respect `prefers-reduced-motion`.
- Every text/control pairing must meet WCAG AA contrast in default, hover, focus, and disabled states.

## Acceptance criteria

- At 1440px wide, the full hero content listed above is visible before scrolling.
- At 375px wide, no content clips or causes horizontal scrolling; actions remain easy to tap.
- Keyboard users can reach every action/link in a logical order and see a clear focus indicator.
- All destination URLs and the resume asset return valid, intended destinations.
- The section contains no unsupported experience or AI/ML claims.
