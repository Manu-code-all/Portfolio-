import { ExternalLink } from '@/components/ui/ExternalLink';
import { ResumeLink } from '@/components/ui/ResumeLink';
import { profileLinks } from '@/content/profile';

/**
 * Hero section — introduces Manu with a heading, context, calls to action,
 * and profile links. Includes a decorative blueprint-schematic SVG with
 * a one-time signal animation. No photo/headshot.
 *
 * Copy and structure match docs/features/01-hero.md and wireframe/index.html.
 */
export function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container hero-grid">
        <div className="hero-content">
          {/* Eyebrow label */}
          <p className="eyebrow">Manu Gupta — Portfolio</p>

          {/* Primary heading (sole h1 in the page) */}
          <h1>Building thoughtful software, from the system outward.</h1>

          {/* Supporting context */}
          <p className="hero-support">
            Third-year Computer Science student focused on turning ideas into
            clear, reliable applications.
          </p>
          <p className="hero-context">
            Galgotia University · B.Tech Computer Science · 2024–2028
          </p>

          {/* Primary actions: View projects + Download resume */}
          <div className="hero-actions">
            <a href="#projects" className="btn-outline">
              View projects
            </a>
            <ResumeLink className="btn-primary">
              Download resume
            </ResumeLink>
          </div>

          {/* Profile links: GitHub, LinkedIn, LeetCode, GeeksforGeeks */}
          <nav className="hero-links" aria-label="Profiles">
            <ul>
              <li>
                <ExternalLink href={profileLinks.github}>
                  GitHub
                </ExternalLink>
              </li>
              <li>
                <ExternalLink href={profileLinks.linkedin}>
                  LinkedIn
                </ExternalLink>
              </li>
              <li>
                <ExternalLink href={profileLinks.leetcode}>
                  LeetCode
                </ExternalLink>
              </li>
              <li>
                <ExternalLink href={profileLinks.geeksforgeeks}>
                  GeeksforGeeks
                </ExternalLink>
              </li>
            </ul>
          </nav>
        </div>

        {/* Decorative hero graphic: blueprint schematic with signal dot animation.
            aria-hidden because it's purely decorative. The SVG includes:
            - 6 components (boxes)
            - dot-grid pattern
            - orthogonal traces connecting them
            - junction dots
            - one travelling signal dot that moves A→B once on load */}
        <div className="hero-graphic" aria-hidden="true">
          <svg viewBox="0 0 340 360" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="blueprint-grid"
                width="24"
                height="24"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="1" cy="1" r="1" fill="var(--color-border)" opacity="0.4" />
              </pattern>
            </defs>
            <rect
              x="0"
              y="0"
              width="340"
              height="360"
              fill="url(#blueprint-grid)"
            />

            {/* Components — 6 boxes forming an abstract schematic */}
            <rect className="diagram-box" x="24" y="20" width="150" height="70" />
            <rect className="diagram-box" x="214" y="48" width="100" height="56" />
            <rect className="diagram-box" x="60" y="140" width="190" height="82" />
            <rect className="diagram-box" x="278" y="118" width="44" height="150" />
            <rect className="diagram-box" x="20" y="254" width="120" height="58" />
            <rect className="diagram-box" x="176" y="256" width="78" height="46" />

            {/* Traces — orthogonal lines connecting components */}
            <path
              className="diagram-line-bright"
              d="M174,45 L194,45 L194,76 L214,76"
            />
            <line
              className="diagram-line"
              x1="99"
              y1="90"
              x2="99"
              y2="140"
            />
            <line
              className="diagram-line-bright"
              x1="264"
              y1="104"
              x2="264"
              y2="193"
            />
            <line
              className="diagram-line-bright"
              x1="264"
              y1="193"
              x2="278"
              y2="193"
            />
            <line
              className="diagram-line"
              x1="250"
              y1="165"
              x2="278"
              y2="165"
            />
            <line
              className="diagram-line"
              x1="110"
              y1="222"
              x2="110"
              y2="254"
            />
            <line
              className="diagram-line"
              x1="200"
              y1="222"
              x2="200"
              y2="256"
            />

            {/* Junction dots — endpoints and intersections */}
            <circle className="diagram-dot" cx="174" cy="45" r="4" />
            <circle className="diagram-dot" cx="264" cy="193" r="4" />
            <circle
              cx="99"
              cy="140"
              r="3"
              fill="var(--color-text-muted)"
            />
            <circle
              cx="278"
              cy="165"
              r="3"
              fill="var(--color-text-muted)"
            />
            <circle
              cx="110"
              cy="254"
              r="2"
              fill="var(--color-text-muted)"
            />
            <circle
              cx="200"
              cy="256"
              r="2"
              fill="var(--color-text-muted)"
            />

            {/* One-time travelling signal dot (A → B on load, then fades).
                offset-path defines the travel route; @keyframes hero-signal-travel
                controls the animation (2.6s, starts 1s after load, settles and stops). */}
            <circle className="hero-signal" r="3.5" fill="var(--color-accent)" />
          </svg>
        </div>
      </div>
    </section>
  );
}
