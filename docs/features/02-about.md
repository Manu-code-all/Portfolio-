# Feature Spec — About

## Purpose

Add the concise context that a résumé alone often misses: Manu is a third-year CS student building academic and personal projects, with a deliberate interest in application architecture and fundamentals. It should make the portfolio feel personal without reading as a long biography.

## Approved copy

### Section label

`ABOUT`

### Heading

`I like understanding how the pieces fit together.`

### Body

`I’m Manu Gupta, a third-year B.Tech Computer Science student at Galgotia University. I build academic and personal projects across Java and the web, with an interest in the decisions that make an application clear to use, easier to maintain, and dependable as it grows.`

`Right now, I’m strengthening my foundations in data structures and algorithms, database systems, computer organization, and Java while continuing to build full-stack projects.`

### Education facts

- Galgotia University
- B.Tech, Computer Science
- September 2024–2028
- Current CGPA: 7.7 / 10.0

## Content rules

- Keep this section to two short paragraphs plus the education facts; do not repeat the hero verbatim.
- Describe systems thinking as an interest expressed through project work, not as professional system-design experience.
- Do not imply employment, internship experience, shipped commercial products, AI/ML specialization, or a degree already completed.
- Avoid buzzword lists and generic claims such as “passionate,” “innovative,” or “results-driven” unless supported by a concrete project detail elsewhere.

## Layout and accessibility

- Use a semantic `section` with an `h2`; the education facts should be a definition list or clearly labeled compact information block.
- Desktop may use a two-column editorial layout: narrative at left, education facts at right. Collapse to a single column below tablet width.
- Do not render the CGPA as a progress bar or score visualization; it is factual metadata, not a performance claim.
- Preserve readable line length and WCAG AA text contrast.

## Acceptance criteria

- The section clearly states third-year status, Galgotia University, and current technical focus.
- It accurately states the 2024–2028 education timeframe and 7.7 / 10.0 CGPA.
- It remains readable and unclipped at 375px, 768px, and 1440px viewport widths.
- It makes no claims excluded by `docs/DISCOVERY.md` §3 and §10.
