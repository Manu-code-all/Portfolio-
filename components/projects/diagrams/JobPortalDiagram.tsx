import React from "react";

/**
 * Job Portal Web App Architecture Diagram
 *
 * Renders a project-specific SVG diagram showing the MVC flow:
 * JSP views → servlet controllers → DAO layer → MySQL tables.
 *
 * Desktop layout: horizontal flow with roles/audit shown below.
 * Mobile layout (<640px): stacked vertical blocks in logical order.
 *
 * Content limited to verified facts from docs/evidence/PROJECT_SOURCE_NOTES.md §3.
 */

export default function JobPortalDiagram() {
  return (
    <figure className="diagram-figure">
      <svg
        viewBox="0 0 680 300"
        role="img"
        aria-labelledby="jobportal-diagram-title"
        xmlns="http://www.w3.org/2000/svg"
        className="diagram-svg"
      >
        <title id="jobportal-diagram-title">
          Job Portal MVC request flow: role-specific JSP views route through servlet
          controllers to a DAO layer backed by MySQL (users, jobs, applications, job_audit).
          Admin approval actions run inside explicit commit/rollback with an audit record.
        </title>

        {/* Desktop layout: horizontal flow across the top, roles/audit box below */}
        <g className="diagram-desktop">
          {/* JSP Views box */}
          <rect
            x="16"
            y="16"
            width="140"
            height="56"
            fill="var(--color-surface)"
            stroke="var(--color-border)"
            strokeWidth="2"
            rx="0"
          />
          <text
            x="86"
            y="38"
            textAnchor="middle"
            className="diagram-label-strong"
          >
            JSP views
          </text>
          <text x="86" y="56" textAnchor="middle" className="diagram-label">
            (Admin/Employer/Seeker)
          </text>

          {/* Arrow from JSP to Servlets */}
          <line
            x1="156"
            y1="44"
            x2="192"
            y2="44"
            stroke="var(--color-border)"
            strokeWidth="2"
          />

          {/* Servlet Controllers box */}
          <rect
            x="192"
            y="16"
            width="140"
            height="56"
            fill="var(--color-surface)"
            stroke="var(--color-border)"
            strokeWidth="2"
            rx="0"
          />
          <text x="262" y="44" textAnchor="middle" className="diagram-label-strong">
            Servlet controllers
          </text>

          {/* Arrow from Servlets to DAO */}
          <line
            x1="332"
            y1="44"
            x2="368"
            y2="44"
            stroke="var(--color-border)"
            strokeWidth="2"
          />

          {/* DAO Layer box */}
          <rect
            x="368"
            y="16"
            width="120"
            height="56"
            fill="var(--color-surface)"
            stroke="var(--color-border)"
            strokeWidth="2"
            rx="0"
          />
          <text x="428" y="44" textAnchor="middle" className="diagram-label-strong">
            DAO layer
          </text>

          {/* Arrow from DAO down to MySQL */}
          <line
            x1="428"
            y1="72"
            x2="428"
            y2="104"
            stroke="var(--color-border)"
            strokeWidth="2"
          />

          {/* MySQL box */}
          <rect
            x="320"
            y="104"
            width="216"
            height="64"
            fill="var(--color-surface)"
            stroke="var(--color-border)"
            strokeWidth="2"
            rx="0"
          />
          <text x="428" y="128" textAnchor="middle" className="diagram-label-strong">
            MySQL: users, jobs,
          </text>
          <text x="428" y="148" textAnchor="middle" className="diagram-label-strong">
            applications, job_audit
          </text>

          {/* Roles and audit box (lower left) */}
          <rect
            x="16"
            y="104"
            width="280"
            height="64"
            fill="var(--color-surface)"
            stroke="var(--color-border)"
            strokeWidth="2"
            rx="0"
          />
          <text x="156" y="128" textAnchor="middle" className="diagram-label-strong">
            Roles
          </text>
          <text x="156" y="148" textAnchor="middle" className="diagram-label">
            ADMIN · EMPLOYER · JOBSEEKER
          </text>
          <text
            x="156"
            y="164"
            textAnchor="middle"
            className="diagram-label diagram-audit-note"
          >
            approval + audit via job_audit
          </text>
        </g>

        {/* Mobile layout: stacked vertical arrangement */}
        <g className="diagram-mobile" style={{ display: "none" }}>
          {/* JSP Views - top */}
          <rect
            x="16"
            y="16"
            width="280"
            height="56"
            fill="var(--color-surface)"
            stroke="var(--color-border)"
            strokeWidth="2"
            rx="0"
          />
          <text x="156" y="38" textAnchor="middle" className="diagram-label-strong">
            JSP views
          </text>
          <text x="156" y="56" textAnchor="middle" className="diagram-label">
            (Admin/Employer/Seeker)
          </text>

          {/* Arrow down */}
          <line
            x1="156"
            y1="72"
            x2="156"
            y2="104"
            stroke="var(--color-border)"
            strokeWidth="2"
          />

          {/* Servlet Controllers */}
          <rect
            x="16"
            y="104"
            width="280"
            height="56"
            fill="var(--color-surface)"
            stroke="var(--color-border)"
            strokeWidth="2"
            rx="0"
          />
          <text x="156" y="132" textAnchor="middle" className="diagram-label-strong">
            Servlet controllers
          </text>

          {/* Arrow down */}
          <line
            x1="156"
            y1="160"
            x2="156"
            y2="192"
            stroke="var(--color-border)"
            strokeWidth="2"
          />

          {/* DAO Layer */}
          <rect
            x="16"
            y="192"
            width="280"
            height="56"
            fill="var(--color-surface)"
            stroke="var(--color-border)"
            strokeWidth="2"
            rx="0"
          />
          <text x="156" y="220" textAnchor="middle" className="diagram-label-strong">
            DAO layer
          </text>

          {/* Arrow down */}
          <line
            x1="156"
            y1="248"
            x2="156"
            y2="280"
            stroke="var(--color-border)"
            strokeWidth="2"
          />

          {/* MySQL */}
          <rect
            x="16"
            y="280"
            width="280"
            height="72"
            fill="var(--color-surface)"
            stroke="var(--color-border)"
            strokeWidth="2"
            rx="0"
          />
          <text x="156" y="304" textAnchor="middle" className="diagram-label-strong">
            MySQL
          </text>
          <text x="156" y="324" textAnchor="middle" className="diagram-label">
            users, jobs, applications, job_audit
          </text>

          {/* Roles info (below) */}
          <rect
            x="16"
            y="368"
            width="280"
            height="64"
            fill="var(--color-surface)"
            stroke="var(--color-border)"
            strokeWidth="2"
            rx="0"
          />
          <text x="156" y="388" textAnchor="middle" className="diagram-label-strong">
            Roles
          </text>
          <text x="156" y="408" textAnchor="middle" className="diagram-label">
            ADMIN · EMPLOYER · JOBSEEKER
          </text>
          <text
            x="156"
            y="424"
            textAnchor="middle"
            className="diagram-label diagram-audit-note"
          >
            approval + audit via job_audit
          </text>
        </g>
      </svg>

      <figcaption>
        Role-specific JSP views route through servlet controllers to a DAO layer backed by
        MySQL (<code>users</code>, <code>jobs</code>, <code>applications</code>,{" "}
        <code>job_audit</code>). Admin approval actions run inside explicit commit/rollback
        with an audit record.
      </figcaption>

      <style jsx>{`
        .diagram-figure {
          display: flex;
          flex-direction: column;
          gap: var(--space-3);
          margin-bottom: var(--space-5);
        }

        .diagram-svg {
          max-width: 100%;
          height: auto;
          border-radius: var(--radius-none);
          background: var(--color-surface);
          padding: var(--space-3);
        }

        /* Text styling for diagram labels */
        :global(.diagram-label-strong) {
          font-family: var(--font-body);
          font-size: 0.875rem;
          font-weight: var(--weight-body-medium);
          fill: var(--color-text);
        }

        :global(.diagram-label) {
          font-family: var(--font-body);
          font-size: 0.75rem;
          font-weight: var(--weight-body-regular);
          fill: var(--color-text-muted);
        }

        :global(.diagram-audit-note) {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          font-weight: var(--weight-mono-regular);
        }

        figcaption {
          font-size: var(--font-size-small);
          color: var(--color-text-muted);
          line-height: var(--leading-body);
          font-family: var(--font-body);
        }

        figcaption code {
          font-family: var(--font-mono);
          color: var(--color-text);
          font-weight: var(--weight-mono-medium);
        }

        /* Desktop: show the horizontal flow layout */
        @media (min-width: 640px) {
          .diagram-svg {
            min-height: 200px;
          }

          .diagram-desktop {
            display: block;
          }

          .diagram-mobile {
            display: none !important;
          }
        }

        /* Mobile: show the stacked vertical layout */
        @media (max-width: 639px) {
          .diagram-svg {
            min-height: auto;
          }

          .diagram-desktop {
            display: none;
          }

          .diagram-mobile {
            display: block !important;
          }
        }

        /* Respect prefers-reduced-motion for focus states (if any) */
        @media (prefers-reduced-motion: reduce) {
          .diagram-svg {
            transition: none;
          }
        }
      `}</style>
    </figure>
  );
}
