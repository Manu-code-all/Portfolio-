# Feature Spec — Skills

## Purpose

Give evaluators a fast, honest view of the tools Manu has used in coursework and projects. This is a capability index, not a proficiency ranking or an exhaustive keyword list.

## Approved content

### Languages

- C
- Java
- SQL
- JavaScript

### Technologies

- React.js
- Express.js
- Node.js
- MongoDB
- Apache Tomcat
- Maven
- Git / GitHub

## Content rules

- List only the technologies approved in `docs/DISCOVERY.md` §6 or evidenced by the resume/project repositories.
- Do not add proficiency percentages, star ratings, “expert” labels, years of experience, or unverified tools.
- Present skills as familiar tools and technologies, not as claims of professional specialization.
- Keep the section concise; detailed evidence belongs in the individual project case studies.

## Layout and accessibility

- Use a semantic `section` headed by an `h2`, with each group represented by a subheading and a list.
- Render tags as ordinary text/list items, not buttons, unless they genuinely filter content.
- Use wrapping rows or a simple two-column desktop layout that collapses cleanly to one column at mobile width.
- Ensure tags and group labels pass WCAG AA contrast; no information may depend on tag color alone.

## Acceptance criteria

- Both groups and every skill listed above are visible and accurately spelled.
- The section has no fabricated skills or proficiency claims.
- It has no horizontal overflow at 375px, 768px, or 1440px.
- Screen readers announce meaningful group headings and individual skill names.
