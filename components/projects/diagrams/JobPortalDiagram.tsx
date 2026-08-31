/**
 * Job Portal Web App Architecture Diagram
 *
 * Verified stack (from docs/evidence/PROJECT_SOURCE_NOTES.md §3):
 * - Flow: role-specific JSP views → servlet controllers → DAO layer → MySQL
 *   (users, jobs, applications, job_audit)
 * - Roles: ADMIN, EMPLOYER, JOBSEEKER
 * - Admin approval actions run inside explicit commit/rollback with an audit record
 *
 * Two separate <svg> elements, each sized to its own content, toggled by
 * @media breakpoint — avoids clipping a shared viewBox (a single-svg
 * dual-layout approach was tried first and clipped the mobile content;
 * see docs/memory/MEMORY.md).
 */

export default function JobPortalDiagram() {
  return (
    <figure>
      {/* Desktop layout: horizontal flow, roles/audit box below */}
      <svg
        className="jobportal-diagram-desktop"
        viewBox="0 0 560 190"
        role="img"
        aria-labelledby="jobportal-diagram-title-desktop"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title id="jobportal-diagram-title-desktop">
          Job Portal MVC request flow: role-specific JSP views through servlet
          controllers and a DAO layer to MySQL tables.
        </title>

        <rect className="diagram-box" x="16" y="16" width="140" height="56" />
        <text className="diagram-label-strong" x="86" y="40" textAnchor="middle">
          JSP views
        </text>
        <text className="diagram-label" x="86" y="55" textAnchor="middle">
          (Admin/Employer/Seeker)
        </text>

        <line className="diagram-line" x1="156" y1="44" x2="192" y2="44" />

        <rect className="diagram-box" x="192" y="16" width="140" height="56" />
        <text className="diagram-label-strong" x="262" y="48" textAnchor="middle">
          Servlet controllers
        </text>

        <line className="diagram-line" x1="332" y1="44" x2="368" y2="44" />

        <rect className="diagram-box" x="368" y="16" width="120" height="56" />
        <text className="diagram-label-strong" x="428" y="48" textAnchor="middle">
          DAO layer
        </text>

        <line className="diagram-line" x1="428" y1="72" x2="428" y2="104" />

        <rect className="diagram-box" x="320" y="104" width="216" height="64" />
        <text className="diagram-label-strong" x="428" y="128" textAnchor="middle">
          MySQL: users, jobs,
        </text>
        <text className="diagram-label-strong" x="428" y="144" textAnchor="middle">
          applications, job_audit
        </text>

        <rect className="diagram-box" x="16" y="104" width="280" height="64" />
        <text className="diagram-label-strong" x="156" y="126" textAnchor="middle">
          Roles
        </text>
        <text className="diagram-label" x="156" y="142" textAnchor="middle">
          ADMIN &middot; EMPLOYER &middot; JOBSEEKER
        </text>
        <text className="diagram-label" x="156" y="158" textAnchor="middle">
          approval + audit via job_audit
        </text>
      </svg>

      {/* Mobile layout: vertical stacked flow */}
      <svg
        className="jobportal-diagram-mobile"
        viewBox="0 0 312 460"
        role="img"
        aria-labelledby="jobportal-diagram-title-mobile"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title id="jobportal-diagram-title-mobile">
          Job Portal MVC request flow: role-specific JSP views through servlet
          controllers and a DAO layer to MySQL tables.
        </title>

        <rect className="diagram-box" x="16" y="16" width="280" height="56" />
        <text className="diagram-label-strong" x="156" y="40" textAnchor="middle">
          JSP views
        </text>
        <text className="diagram-label" x="156" y="55" textAnchor="middle">
          (Admin/Employer/Seeker)
        </text>

        <line className="diagram-line" x1="156" y1="72" x2="156" y2="104" />

        <rect className="diagram-box" x="16" y="104" width="280" height="56" />
        <text className="diagram-label-strong" x="156" y="136" textAnchor="middle">
          Servlet controllers
        </text>

        <line className="diagram-line" x1="156" y1="160" x2="156" y2="192" />

        <rect className="diagram-box" x="16" y="192" width="280" height="56" />
        <text className="diagram-label-strong" x="156" y="224" textAnchor="middle">
          DAO layer
        </text>

        <line className="diagram-line" x1="156" y1="248" x2="156" y2="280" />

        <rect className="diagram-box" x="16" y="280" width="280" height="72" />
        <text className="diagram-label-strong" x="156" y="304" textAnchor="middle">
          MySQL
        </text>
        <text className="diagram-label" x="156" y="322" textAnchor="middle">
          users, jobs, applications, job_audit
        </text>

        <line className="diagram-line" x1="156" y1="352" x2="156" y2="384" />

        <rect className="diagram-box" x="16" y="384" width="280" height="64" />
        <text className="diagram-label-strong" x="156" y="406" textAnchor="middle">
          Roles
        </text>
        <text className="diagram-label" x="156" y="422" textAnchor="middle">
          ADMIN &middot; EMPLOYER &middot; JOBSEEKER
        </text>
        <text className="diagram-label" x="156" y="438" textAnchor="middle">
          approval + audit via job_audit
        </text>
      </svg>

      <figcaption>
        Role-specific JSP views route through servlet controllers to a DAO layer
        backed by MySQL (<code>users</code>, <code>jobs</code>, <code>applications</code>,{" "}
        <code>job_audit</code>). Admin approval actions run inside explicit
        commit/rollback with an audit record.
      </figcaption>

      <style jsx>{`
        figure {
          margin: 0;
        }

        svg {
          width: 100%;
          height: auto;
          display: block;
          margin-bottom: var(--space-3);
        }

        .jobportal-diagram-desktop {
          display: block;
        }

        .jobportal-diagram-mobile {
          display: none;
        }

        @media (max-width: 639px) {
          .jobportal-diagram-desktop {
            display: none;
          }

          .jobportal-diagram-mobile {
            display: block;
          }
        }

        figcaption {
          font-size: var(--font-size-small);
          color: var(--color-text-muted);
          line-height: var(--leading-body);
          font-family: var(--font-body);
        }

        figcaption :global(code) {
          font-family: var(--font-mono);
          color: var(--color-text);
          font-weight: var(--weight-mono-medium);
        }
      `}</style>
    </figure>
  );
}
