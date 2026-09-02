import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { achievements } from '@/content/achievements';

/**
 * Achievements section — renders a single verified achievement with title, date, and description.
 * Date is visible as text, not color or position alone.
 * Keeps an understated, semantic item treatment (no trophy icon or celebratory animation).
 *
 * Copy and structure match docs/features/05-achievements.md and wireframe/index.html.
 */
export function Achievements() {
  if (achievements.length === 0) {
    return null;
  }

  const achievement = achievements[0];

  return (
    <section id="achievements" className="section-pad">
      <div className="container">
        <SectionHeading>Achievements</SectionHeading>

        <Reveal>
          <article
            className="glass-surface"
            style={{
              marginTop: 'var(--space-5)',
              padding: 'var(--space-5)',
              maxWidth: 'var(--measure-max)',
            }}
          >
            <h3
              style={{
                fontSize: 'var(--font-size-h3)',
                fontWeight: 'var(--weight-display-semibold)',
              }}
            >
              {achievement.title}
            </h3>

            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--font-size-small)',
                color: 'var(--color-text-muted)',
                marginTop: 'var(--space-1)',
              }}
            >
              {achievement.date}
            </p>

            <p
              style={{
                color: 'var(--color-text-muted)',
                marginTop: 'var(--space-2)',
              }}
            >
              {achievement.description}
            </p>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
