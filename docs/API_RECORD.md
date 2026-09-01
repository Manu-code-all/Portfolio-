# Phase 5 — API Record

## Decision

The portfolio v1 exposes **no application API**.

It is a statically generated Next.js site. Its content is stored in local typed source files and rendered at build time. The only public static asset required by the approved feature set is the resume at `/resume.pdf`.

## Consequences

- No API routes, route handlers, server actions, database, authentication, contact-form handler, or external content service are required.
- Project data, profile links, skills, and achievements remain in version-controlled local content modules.
- The contact action uses a `mailto:` link; it does not collect or persist visitor data.
- Vercel serves the static output and resume asset. No environment variables or secrets are needed for v1.

## Boundary

The case-study diagrams describe the architecture of Manu’s separate project repositories. They are explanatory portfolio content, not APIs or services operated by this site.

## Deferred work

If a future version adds a contact form, CMS, analytics, or a blog, record its data flow, privacy implications, environment variables, and API contract in a new decision document before implementation.
