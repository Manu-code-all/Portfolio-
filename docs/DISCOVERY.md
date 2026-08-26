# Discovery — Manu Gupta Portfolio

## 1. Purpose & audience

A personal portfolio site for Manu Gupta to show when asked "let me see your work" — meant to impress and back up conversations with recruiters, interviewers, or peers. Not a marketing site, not a company site — a personal engineering showcase.

## 2. Who this is for (the owner)

- **Name:** Manu Gupta
- **Status:** 3rd-year B.Tech Computer Science student, Galgotia University, India (started Sept 2024)
- **CGPA:** 7.7/10.0 (current)
- **Experience:** Purely academic + personal/course projects. No internship or professional work experience yet.
- **Field framing:** Developer with a systems-design interest. Explicitly **not** positioned as AI/ML-focused.
- **Coursework:** DSA, Computer Organization and Architecture, DBMS, Advanced Java

## 3. Positioning (important constraint)

Do not overstate experience level. This is a student portfolio, not a "5+ years, done his internship" senior-engineer portfolio. The goal is to look **highly polished and intentional** — strong visual/technical execution signaling "serious about engineering" — without any claim (work history, system-design track record, AI expertise) that isn't true. Execution quality carries the impression; content stays honest.

## 4. Reference / inspiration

No specific reference sites given — take inspiration broadly from best-in-class modern developer portfolios (the kind that show up on Awwwards / portfolio-inspiration roundups): strong typography, restrained color, confident whitespace, fast load, no generic template look. Synthesized into `docs/DESIGN.md` in Phase 6.

## 5. Tech stack

**Next.js + React + Tailwind CSS.** Explicitly not plain HTML/CSS — needs to read as a modern, capable build, consistent with someone job-ready. Deployment target: Vercel (default assumption, cheap/free, standard for Next.js — confirm at build time if a different host is preferred).

## 6. Sections / feature census

1. **Hero / intro** — name, one-line positioning (developer, systems-minded), links out (GitHub, LinkedIn, LeetCode, GfG)
2. **About** — background, education, what he's focused on learning/building
3. **Education / timeline** — Galgotia University (current), prior schooling only if it adds signal (likely condensed/omitted — no work history to timeline instead)
4. **Featured Projects — 3 case studies** (see §7)
5. **Skills** — grouped: Languages (C, Java, SQL, JavaScript), Technologies (React.js, Express.js, Node.js, MongoDB, SQL, Apache Tomcat, Maven, Git/GitHub)
6. **Achievements** — Smart India Hackathon (SIH) Sept 2025, qualified/ranked top 130 of 500+ teams
7. **Resume** — downloadable PDF
8. **Contact** — email (manug9868@gmail.com), links to GitHub/LinkedIn/LeetCode/GeeksforGeeks

Explicitly **excluded**: standalone "System Design" portfolio section (no real track record to show — would be fabricated). Systems-design interest instead comes through in how the 3 project case studies are documented (see §7).

## 7. Featured projects (case-study treatment)

Each gets a real case study: problem → architecture (with an actual diagram: DB schema / request flow / component breakdown) → stack → outcome → links. Built from the real repos, not just resume bullet points.

1. **Student Management System**
   - Repo: https://github.com/Manu-code-all/StudentMarksCGPA-Java.git
   - Java, OOP, Java Collections Framework
   - Records marks, calculates GPA/CGPA, generates academic reports

2. **Medicity** — static healthcare website
   - Repo: https://github.com/Manu-code-all/Medicity.git
   - HTML, CSS/SCSS, JavaScript/jQuery, PHP mailer asset
   - Present as: a multi-page healthcare interface with appointment, doctor, department, service, shop, and contact pages. The site’s front-end structure and deployment configuration are the story; do not claim a backend, data store, AI, or recommendation engine.

3. **Job-Portal-Web-App**
   - Repo: https://github.com/Manu-code-all/Job-Portal-Webapp-Java-final-project.git
   - Java, JSP, Servlets, JDBC, MySQL, Apache Tomcat, Maven, MVC architecture
   - Employers post jobs, seekers apply, admins manage — full-stack Java web app

Stretch goal (not committed): 1-2 short "design practice" write-ups (e.g. URL shortener, rate limiter) worked through during the build, clearly labeled as self-study/practice — only if time allows after the core 3 case studies are solid.

## 8. Look and feel

- **Theme:** Dark mode as default (no forced toggle requirement, but dark-first design)
- **Color:** Minimal / near-monochrome palette — not a bright multi-color "personal brand" look
- **Motion:** Restrained and fast — no heavy scroll-jacking or cursor-effect animation; snappy load and interaction over spectacle

## 9. Content sources

- Resume: `Manu Resume Edited.pdf` (parsed — text + all hyperlinks extracted)
- Profile links: GitHub (https://github.com/Manu-code-all), LinkedIn (https://www.linkedin.com/in/manu-gupta-176ba91b8/), LeetCode (https://leetcode.com/u/manug9868/), GeeksforGeeks (https://www.geeksforgeeks.org/user/manug9868/)
- Project repos: linked in §7
- Resume PDF itself will be hosted for direct download from the site

## 10. Non-goals

- No AI/ML branding or positioning
- No fabricated system-design track record or work experience
- No plain HTML/CSS — must read as a modern build
- No generic template look (default Awwwards-adjacent AI-slop aesthetic to be explicitly avoided per Phase 6 design rules)
