import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    slug: "medicity",
    order: 1,
    title: "Medicity",
    oneLiner:
      "A clinic and pharmacy platform where a consultation slot admits exactly one patient, however many tap Book at once.",
    problem:
      "Booking looks trivial until two patients want the same slot. A check-then-insert flow lets both requests see the slot as free and both succeed. Patients also need to keep prescriptions and find a nearby chemist that has the medicine.",
    architectureSummary:
      "A React 18 + TypeScript frontend on Vercel talks to a Spring Boot 3 REST API on Railway, backed by PostgreSQL. Separate workflows serve patients, doctors, chemists and admins, with JWT-secured endpoints and row-level authorization.",
    implementationChoices: [
      "Double booking is prevented by the database, not application code: a PostgreSQL partial unique index makes a second booking for the same slot impossible.",
      "Short-lived JWTs with single-use refresh tokens, login throttling, row-level authorization and a trigger-enforced, append-only audit log secure the API.",
      "Claude and Gemini APIs read handwritten prescription photos; WebSocket video visits and SMS/email login codes round out the patient flow.",
      "Deployed with Docker on Railway and Vercel, with Flyway migrations and Testcontainers integration tests against real PostgreSQL (never H2).",
    ],
    stack: [
      "Java 21",
      "Spring Boot 3",
      "React 18",
      "TypeScript",
      "PostgreSQL",
      "Docker",
      "k6",
    ],
    outcome:
      "A k6 load test with 200 concurrent attempts on 20 slots produced exactly 20 bookings and 180 clean conflicts, with the database checked after every run. About 230 backend integration tests run against real PostgreSQL.",
    repoUrl: "https://github.com/Manu-code-all/Medicity.git",
    liveUrl: "https://medicity-coral.vercel.app",
  },
  {
    slug: "ledgerlens",
    order: 2,
    title: "LedgerLens",
    oneLiner:
      "An explainable AI reconciliation controller that matches payment settlements against bank statements. Razorpay Hackathon, Track 4.",
    problem:
      "A finance team ends the month with two lists that should agree and never do: the bank credit is short by MDR plus GST, money lands one to three days late under T+2 settlement, references are truncated, and one nodal-account credit can cover three settlements.",
    architectureSummary:
      "A three-stage pipeline exposed through a FastAPI service and a React dashboard. Deterministic rules run first, an arithmetic batch detector second, and an LLM agent sees only the unmatched residue. Every decision is written to an audit log.",
    implementationChoices: [
      "Cheap, provable stages come first. Exact reference and amount-plus-date matching, then arithmetic batch detection net of MDR and GST, resolve cases before any AI call is spent.",
      "The AI agent returns a match, a confidence score and a written justification, so each decision is explainable in the dashboard's audit trail.",
      "The batch detector once ran O(n³) across all unmatched settlements and hung beyond 1,000 records. Grouping by settlement date before generating combinations bounded each search to one day's volume.",
      "Fourteen unit tests cover the deterministic stages, and the pipeline was scale-tested to 3,200 records.",
    ],
    stack: ["Python", "FastAPI", "React", "Groq LLM", "Pytest"],
    outcome:
      "On a synthetic 64-settlement batch the rule-based baseline reaches 75% accuracy, and the batch detector plus AI agent lift it to 92.2%. The dashboard reports match rate, accuracy, exceptions and throughput, with near-miss suggestions for every exception.",
    repoUrl: "https://github.com/Manu-code-all/Ledgerlens.git",
  },
  {
    slug: "railblock",
    order: 3,
    title: "RailBlock",
    oneLiner:
      "Automatic block planning for Indian Railways: one conflict-free maintenance plan the solver proves is optimal. SIH 2026.",
    problem:
      "Engineering, Signalling and Telecom, and Traction departments all need traffic-free blocks on the same sections. Planned by hand, requests clash and windows go to waste, and when something cannot fit nobody can say exactly why.",
    architectureSummary:
      "Requests and traffic-free windows are modelled as a constraint problem and solved with Google OR-Tools CP-SAT. The result is re-checked by an independent verify() and stored in SQLite, with a Streamlit app and a React + FastAPI frontend over the same database.",
    implementationChoices: [
      "A constraint solver instead of machine learning: there is no dataset to train on, and a proof of optimality is more useful than a prediction for safety-adjacent scheduling.",
      "When requests cannot all fit, CP-SAT assumptions plus a deletion filter turn \"infeasible\" into the exact, minimal set of requests that are fighting, with the arithmetic.",
      "A priority slider is a real trade-off between finishing sooner with daytime paths and protecting train service, asserted in tests rather than decorative.",
      "Role-based access for each department and the section controller, with an activity log, CSV export and server-side authorization.",
    ],
    stack: [
      "Python",
      "OR-Tools CP-SAT",
      "FastAPI",
      "React",
      "TypeScript",
      "Streamlit",
      "SQLite",
    ],
    outcome:
      "The demo corridor (6 sections, 84 windows, 18 requests) solves to a proven optimum in about 120 ms. A 17-test suite asserts that no plan breaks a rule, that the slider is a real trade-off, and that every returned conflict set is minimal.",
    repoUrl: "https://github.com/Manu-code-all/railblock.git",
  },
];
