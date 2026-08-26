# Feature Spec — Project Case Studies

## Purpose

Make the portfolio’s three real projects credible and memorable. Each case study should show a concise problem statement, a factual explanation of how the project is assembled, the technologies used, an honest outcome, and a direct repository link. The architecture should do the work of showing systems thinking; do not add a separate system-design portfolio section.

## Scope

Feature exactly these three projects, in this order:

1. **Student Management System**
   - Repository: `https://github.com/Manu-code-all/StudentMarksCGPA-Java.git`
   - Known stack: Java, OOP, Java Collections Framework
   - Known capabilities: records marks, calculates GPA/CGPA, and generates academic reports.
2. **Medicity**
   - Repository: `https://github.com/Manu-code-all/Medicity.git`
   - Known stack: React.js, MongoDB, Express, Node.js
   - Frame as a full-stack MERN application with a recommendation/lookup engine. Do not call it “AI-powered” or position Manu as an AI/ML developer.
3. **Job Portal Web App**
   - Repository: `https://github.com/Manu-code-all/Job-Portal-Webapp-Java-final-project.git`
   - Known stack: Java, JSP, Servlets, JDBC, MySQL, Apache Tomcat, Maven
   - Known capabilities: employers post jobs, seekers apply, and administrators manage the system.

## Required verification gate

Before finalizing any case-study prose or diagram, inspect the relevant source repository and record the evidence used. Do not infer database tables, API endpoints, authentication, deployment, metrics, user roles, or features merely because they are typical for the stack.

Create an internal source note per project that records:

- repository commit/branch examined;
- actual entry points and component/module structure;
- data models or database schema actually present;
- request/data flow actually present;
- libraries/frameworks confirmed from project manifests or source;
- limitations or incomplete features relevant to truthful wording.

If a repository is unavailable, state only the known facts above and use a component/workflow diagram limited to verified details.

## Case-study content template

Each project page/card must contain:

1. **Title and one-line summary** — one factual sentence, plain language.
2. **Problem** — the user or workflow the project addresses.
3. **Architecture** — a diagram and a short explanatory caption.
4. **Key implementation choices** — two to four verified details; describe trade-offs only when backed by the implementation.
5. **Technology stack** — verified, normalized technology tags.
6. **Outcome** — state capabilities delivered, learnings, or constraints; never invent usage metrics, scale, or impact.
7. **Repository link** — clear external link to the canonical GitHub repository; optional live URL only if it exists and is verified.

The listing view should show title, one-line summary, 3–6 stack tags, a small architecture preview, and a clear “Read case study” or in-page expansion control. The expanded/detail view contains the full template above.

## Diagram requirements

- Use a real project-specific diagram, implemented as semantic SVG or a React diagram component—not a stock image.
- Include accessible text: a descriptive `title`/caption and an equivalent short textual architecture explanation near the visual.
- Make diagrams legible at 375px: use a stacked mobile rendering or a simplified view rather than shrinking a dense desktop diagram.
- Keep diagram vocabulary factual: components, flows, classes, database entities, and roles must match verified source evidence.

Suggested diagram form after verification:

| Project | Preferred diagram |
| --- | --- |
| Student Management System | Class/component flow for marks input → calculation → report generation |
| Medicity | Client → API → data/lookup flow, with only verified services and stores |
| Job Portal Web App | MVC request flow plus verified user roles and persistence layer |

## Interaction and accessibility

- Cards and repository links are independently keyboard reachable. Avoid nested interactive elements.
- Expansion controls expose their state with `aria-expanded` and a matching controlled region.
- Hover effects cannot be the only way to reveal content.
- External repository links open in a new tab with `rel="noreferrer"` (or `noopener noreferrer`) and state that they leave the site in accessible text if icon-only presentation is used.
- Respect reduced-motion preferences for expansions and diagram transitions.

## Acceptance criteria

- All three projects appear with the correct canonical repository links.
- Every factual claim, stack tag, and diagram element is traceable to the corresponding repository or the approved discovery record.
- Medicity includes no AI-powered/AI-ML positioning.
- Each project includes a real project-specific, accessible architecture diagram with a mobile-legible presentation.
- No project claims employment, production scale, users, performance metrics, or outcomes that cannot be evidenced.
- The project section remains usable with keyboard-only navigation and has no horizontal overflow at 375px, 768px, or 1440px widths.
