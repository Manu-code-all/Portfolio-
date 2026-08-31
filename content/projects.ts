import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    slug: "student-management",
    order: 1,
    title: "Student Management System",
    oneLiner: "A console application for recording student marks and calculating cumulative GPA.",
    problem:
      "Academic programs need a reliable way to record student test scores and compute final grades, providing both administrative data entry and student-facing result lookup.",
    architectureSummary:
      "A two-flow console application: administrators input admission numbers and five marks (validated for range), which persist to a flat file; students query by admission number, retrieve their stored marks, and receive a calculated CGPA.",
    implementationChoices: [
      "Flat-file data persistence using comma-separated records in `students.txt`, avoiding the overhead of a database system for a simple academic dataset.",
      "Separation of concerns across `AdminService` (input validation), `StudentService` (record lookup), and `Marksheet` (grade-point averaging), with a `Validator` utility for input bounds checking.",
      "Console-driven menu interface with discrete exit points for admin and student workflows.",
    ],
    stack: ["Java", "OOP", "File I/O"],
    outcome:
      "Delivers a working marks-recording and GPA-calculation system suitable for academic coursework. The `Marksheet.calculateCGPA()` method implements the core averaging logic, and flat-file storage demonstrates data persistence in a constrained environment.",
    repoUrl: "https://github.com/Manu-code-all/StudentMarksCGPA-Java.git",
  },
  {
    slug: "medicity",
    order: 2,
    title: "Medicity",
    oneLiner: "A static multi-page healthcare website with appointment booking, doctor profiles, and service information.",
    problem:
      "Healthcare providers and patients need a professional online presence to browse services, view staff, and access contact information without the complexity of a full application backend.",
    architectureSummary:
      "A static site built with semantic HTML pages (home, appointments, doctor profiles, departments, services, pharmacy, and contact), styled with CSS/SCSS, and enhanced with jQuery for lightweight interactivity. A Vercel configuration rewrites the site root to a specific landing page.",
    implementationChoices: [
      "Static HTML architecture, avoiding database and backend logic while maintaining a professional multi-page structure for healthcare content.",
      "jQuery and a suite of client-side JavaScript libraries (plugins.js, main.js) to handle interactive elements without a server-side framework.",
      "PHP mailer integration for contact form submissions, providing email delivery without a full application stack.",
    ],
    stack: ["HTML", "CSS/SCSS", "JavaScript/jQuery", "PHP mailer"],
    outcome:
      "A fully functional static healthcare website that serves as a professional online presence. Patients can browse services, contact staff, and view appointment information through an accessible, maintainable HTML-based structure.",
    repoUrl: "https://github.com/Manu-code-all/Medicity.git",
  },
  {
    slug: "job-portal",
    order: 3,
    title: "Job Portal Web App",
    oneLiner: "A full-stack web application for job postings, applications, and administrative workflows.",
    problem:
      "Organizations need a platform where employers can post job openings, job seekers can search and apply, and administrators can manage the workflow—matching candidates with opportunities and tracking application progress.",
    architectureSummary:
      "A Maven-based Java web application following the MVC pattern: JSP pages provide the user interface, servlet controllers route requests and manage sessions, and a DAO layer handles data persistence via JDBC to MySQL. Role-based access controls (ADMIN, EMPLOYER, JOBSEEKER) govern workflows, and an audit log tracks administrative approvals.",
    implementationChoices: [
      "Maven for dependency and build management, with a WAR package deployed on Apache Tomcat—a standard enterprise deployment approach.",
      "JDBC-based data access objects for direct database communication and explicit transaction handling (commit/rollback) around approval workflows, ensuring data consistency.",
      "Role-based authorization at the servlet level, separating employer job management, job-seeker application submission, and administrative approvals into distinct controllers.",
    ],
    stack: [
      "Java",
      "JSP",
      "Servlets",
      "JDBC",
      "MySQL",
      "Apache Tomcat",
      "Maven",
    ],
    outcome:
      "A working job portal that demonstrates multi-role web application design. Employers can post jobs, seekers can apply and track status, and administrators can review and approve or reject applications. The audit log shows all approvals tied to administrative actions.",
    repoUrl: "https://github.com/Manu-code-all/Job-Portal-Webapp-Java-final-project.git",
  },
];
