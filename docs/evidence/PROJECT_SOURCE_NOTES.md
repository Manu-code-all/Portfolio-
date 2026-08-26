# Project Source Notes

## Purpose and method

These notes satisfy the verification gate in `docs/features/03-project-case-studies.md`. Each repository was cloned from its canonical GitHub URL on 2026-08-26 at the commit shown below. Only facts visible in the checked source are treated as verified.

## 1. Student Management System

- **Repository:** `https://github.com/Manu-code-all/StudentMarksCGPA-Java.git`
- **Commit examined:** `74ed041e215bd9378aaeaa93926920383301da04`
- **Observed layout:** the repository root contains a ZIP archive, `Student_management_system.zip`; the Java source is inside that archive.
- **Entry point:** `Student_management_system/Main.java` provides a console menu with admin entry, student marksheet view, and exit actions.
- **Data flow:** `AdminService` validates the admission number and five marks, then appends a comma-separated row to `data/students.txt`. `StudentService` reads that file by admission number and passes five marks to `Marksheet`.
- **Calculation:** `Marksheet.calculateCGPA()` maps marks to grade points and averages five grade points. It labels the resulting value as CGPA.
- **Models/utilities:** `Student`, `Marksheet`, and `Validator`; validation accepts marks from 0–100 and a 5–10 digit admission number.
- **Verified stack:** Java, console I/O, file persistence, OOP.
- **Do not claim:** database persistence, web UI, a Java Collections Framework implementation, report export, authentication, a deployed application, or GPA/CGPA semantics beyond the source’s single `calculateCGPA()` routine.
- **Diagram scope:** `Admin input → validation → students.txt` and `Admission number lookup → Marksheet calculation → console output`.

**Repository quality note:** the root `README.md` describes an online job portal rather than this student-management project. Do not use that README as evidence for this case study.

## 2. Medicity

- **Repository:** `https://github.com/Manu-code-all/Medicity.git`
- **Commit examined:** `ee813915371989b4f4b0a269d9c16e0a1a770cb2`
- **Observed layout:** `medcity/` contains static HTML pages, CSS/SCSS assets, jQuery, plugin JavaScript, and PHP mailer files. `vercel.json` rewrites `/` to `/medcity/home-classic.html`.
- **Verified user-facing pages:** healthcare-themed pages for appointments, doctors, departments, services, pharmacy/shop content, contact, and related static navigation.
- **Verified client assets:** `jquery-3.5.1.min.js`, `plugins.js`, and `main.js` are referenced by `medcity/index.html`.
- **Verified deployment configuration:** Vercel performs a root rewrite only; no Node application, React source, Express service, MongoDB configuration, package manifest, or recommendation engine was found in the checked repository.
- **Verified stack:** static HTML, CSS/SCSS, JavaScript/jQuery, and a PHP mailer asset.
- **Do not claim:** React, Node.js, Express, MongoDB, a full-stack MERN architecture, disease prediction, medicine recommendations, pharmacy lookup, AI, or an application data flow. These claims are not supported by this repository.
- **Diagram scope:** static-page navigation and referenced client assets only, unless the owner supplies the separate implementation repository that contains the claimed application.

**Resolution:** the portfolio discovery and case-study specifications were corrected on 2026-08-26 to describe Medicity as the verified static healthcare website. The current resume still contains unsupported MERN/AI wording and must be replaced or corrected before publication.

## 3. Job Portal Web App

- **Repository:** `https://github.com/Manu-code-all/Job-Portal-Webapp-Java-final-project.git`
- **Commit examined:** `8163bd9d1a351b4545962cca3e708aa044b05487`
- **Observed layout:** the repository root contains a ZIP archive, `job portal java project sem 3.zip`; the Maven web application source is inside that archive.
- **Build/runtime:** `pom.xml` packages a WAR named `online-job-portal`; it declares Java 11, Jakarta Servlet/JSP, JSTL, MySQL Connector/J, and HikariCP. The archive contains Docker, Docker Compose, and Tomcat configuration files.
- **MVC/request flow:** JSP pages provide views; servlet controllers include login, logout, employer job management, job-seeker actions, administration, and index routing. DAO classes handle `User`, `Job`, and `Application` persistence via JDBC.
- **Data model:** `schema.sql` defines `users`, `jobs`, `applications`, and `job_audit`. Roles are `ADMIN`, `EMPLOYER`, and `JOBSEEKER`.
- **Verified workflows:** employer job management; job-seeker application submission; login/session routing; admin user management; job approval/rejection. `JobDAO` uses explicit commit/rollback around approval-related operations and audit records.
- **Verified stack:** Java 11, Maven, JSP, Jakarta Servlets, JSTL, JDBC, MySQL, HikariCP, Apache Tomcat, Docker/Docker Compose.
- **Do not claim:** production deployment, real users, secure password handling, generalized notification delivery, performance figures, or scalability. The schema contains a sample account with a plaintext password, so no security-quality claim should be made.
- **Diagram scope:** role-specific JSP views → servlet controllers → DAO layer → MySQL tables; include the administrative approval/audit flow only as a verified detail.

## Portfolio content gate

The Student Management System and Job Portal diagrams can be written from the evidence above. Medicity can be included with the corrected static-site framing above. The current resume remains blocked from publication because its displayed education state says “1st year” while approved portfolio content says “3rd-year,” its Medicity description is unsupported, and its PDF metadata still identifies “John Doe.”
