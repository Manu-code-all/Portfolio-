/**
 * Medicity Architecture Diagram
 *
 * Verified stack (from docs/evidence/PROJECT_SOURCE_NOTES.md §2):
 * - Static HTML pages: home-classic.html + appointment/doctor/department/service/shop/contact
 * - Client assets: jquery-3.5.1.min.js, plugins.js, main.js (referenced from index.html)
 * - Deployment: vercel.json performs root rewrite to /medcity/home-classic.html
 * - No backend, database, API, AI, or recommendation engine.
 *
 * Renders genuinely distinct mobile layout (stacked vertically) below ~640px,
 * not just scaled-down desktop.
 */

export default function MedicityDiagram() {
  return (
    <figure>
      {/* Desktop layout: horizontal flow diagram */}
      <svg
        className="medicity-diagram-desktop"
        viewBox="0 0 580 170"
        role="img"
        aria-labelledby="medicity-diagram-title"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title id="medicity-diagram-title">
          Medicity static-page navigation and referenced client assets, with the
          Vercel root rewrite as deployment context.
        </title>

        {/* Top flow: Pages */}
        <rect
          className="diagram-box"
          x="10"
          y="16"
          width="150"
          height="40"
        />
        <text
          className="diagram-label-strong"
          x="85"
          y="40"
          textAnchor="middle"
        >
          home-classic.html
        </text>

        <line
          className="diagram-line"
          x1="160"
          y1="36"
          x2="200"
          y2="36"
        />

        <rect
          className="diagram-box"
          x="200"
          y="8"
          width="320"
          height="58"
        />
        <text
          className="diagram-label-strong"
          x="360"
          y="28"
          textAnchor="middle"
        >
          Appointment · Doctor · Department ·
        </text>
        <text
          className="diagram-label-strong"
          x="360"
          y="42"
          textAnchor="middle"
        >
          Service · Shop · Contact pages
        </text>
        <text className="diagram-label" x="360" y="56" textAnchor="middle">
          (static HTML, shared nav)
        </text>

        {/* Bottom flow: Assets and deployment */}
        <rect
          className="diagram-box"
          x="10"
          y="100"
          width="230"
          height="52"
        />
        <text
          className="diagram-label-strong"
          x="125"
          y="120"
          textAnchor="middle"
        >
          jquery-3.5.1.min.js ·
        </text>
        <text
          className="diagram-label-strong"
          x="125"
          y="134"
          textAnchor="middle"
        >
          plugins.js · main.js
        </text>

        <line
          className="diagram-line"
          x1="240"
          y1="126"
          x2="280"
          y2="126"
        />

        <rect
          className="diagram-box"
          x="280"
          y="100"
          width="270"
          height="52"
        />
        <text
          className="diagram-label-strong"
          x="415"
          y="120"
          textAnchor="middle"
        >
          vercel.json root rewrite →
        </text>
        <text
          className="diagram-label-strong"
          x="415"
          y="134"
          textAnchor="middle"
        >
          /medcity/home-classic.html
        </text>
      </svg>

      {/* Mobile layout: vertical stacked flow */}
      <svg
        className="medicity-diagram-mobile"
        viewBox="0 0 280 340"
        role="img"
        aria-labelledby="medicity-diagram-title"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title id="medicity-diagram-title">
          Medicity static-page navigation and referenced client assets, with the
          Vercel root rewrite as deployment context.
        </title>

        {/* Vertical stack: entry point */}
        <rect
          className="diagram-box"
          x="40"
          y="8"
          width="200"
          height="36"
        />
        <text
          className="diagram-label-strong"
          x="140"
          y="30"
          textAnchor="middle"
        >
          home-classic.html
        </text>

        {/* Arrow down */}
        <line
          className="diagram-line"
          x1="140"
          y1="44"
          x2="140"
          y2="64"
        />

        {/* Vertical stack: pages */}
        <rect
          className="diagram-box"
          x="20"
          y="64"
          width="240"
          height="68"
        />
        <text
          className="diagram-label-strong"
          x="140"
          y="85"
          textAnchor="middle"
        >
          Appointment · Doctor
        </text>
        <text
          className="diagram-label-strong"
          x="140"
          y="101"
          textAnchor="middle"
        >
          Department · Service
        </text>
        <text
          className="diagram-label-strong"
          x="140"
          y="117"
          textAnchor="middle"
        >
          Shop · Contact pages
        </text>
        <text
          className="diagram-label"
          x="140"
          y="133"
          textAnchor="middle"
        >
          (static HTML, shared nav)
        </text>

        {/* Arrow down */}
        <line
          className="diagram-line"
          x1="140"
          y1="132"
          x2="140"
          y2="152"
        />

        {/* Vertical stack: client assets */}
        <rect
          className="diagram-box"
          x="20"
          y="152"
          width="240"
          height="60"
        />
        <text
          className="diagram-label-strong"
          x="140"
          y="172"
          textAnchor="middle"
        >
          jquery-3.5.1.min.js
        </text>
        <text
          className="diagram-label-strong"
          x="140"
          y="188"
          textAnchor="middle"
        >
          plugins.js · main.js
        </text>
        <text
          className="diagram-label"
          x="140"
          y="204"
          textAnchor="middle"
        >
          (client-side interactivity)
        </text>

        {/* Arrow down */}
        <line
          className="diagram-line"
          x1="140"
          y1="212"
          x2="140"
          y2="232"
        />

        {/* Vertical stack: deployment */}
        <rect
          className="diagram-box"
          x="20"
          y="232"
          width="240"
          height="60"
        />
        <text
          className="diagram-label-strong"
          x="140"
          y="252"
          textAnchor="middle"
        >
          vercel.json root rewrite
        </text>
        <text
          className="diagram-label-strong"
          x="140"
          y="268"
          textAnchor="middle"
        >
          → /medcity/home-classic.html
        </text>
        <text
          className="diagram-label"
          x="140"
          y="284"
          textAnchor="middle"
        >
          (deployment config)
        </text>
      </svg>

      <figcaption>
        Static-page navigation across the healthcare content pages, referenced
        client-side assets, and the verified Vercel root rewrite as deployment
        context. No backend, data store, or recommendation logic is present in
        the source.
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

        .medicity-diagram-desktop {
          display: block;
        }

        .medicity-diagram-mobile {
          display: none;
        }

        @media (max-width: 639px) {
          .medicity-diagram-desktop {
            display: none;
          }

          .medicity-diagram-mobile {
            display: block;
          }
        }

        /* SVG styling — design tokens from globals.css */
        :global(.diagram-box) {
          fill: var(--color-surface);
          stroke: var(--color-border);
          stroke-width: 1;
        }

        :global(.diagram-line) {
          stroke: var(--color-border);
          stroke-width: 1;
          fill: none;
        }

        :global(.diagram-label) {
          fill: var(--color-text-muted);
          font-family: var(--font-mono);
          font-size: 11px;
        }

        :global(.diagram-label-strong) {
          fill: var(--color-text);
          font-family: var(--font-mono);
          font-size: 11px;
        }

        figcaption {
          color: var(--color-text-muted);
          font-family: var(--font-body);
          font-size: var(--font-size-small);
          line-height: var(--leading-body);
          max-width: var(--measure-max);
        }
      `}</style>
    </figure>
  );
}
