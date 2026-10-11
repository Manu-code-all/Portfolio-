import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { ExternalLink } from '@/components/ui/ExternalLink';
import { achievements } from '@/content/achievements';

/**
 * Achievements section — renders each verified achievement with title, date, and description.
 * Date is visible as text, not color or position alone.
 * Keeps an understated, semantic item treatment (no trophy icon or celebratory animation).
 */
export function Achievements() {
  if (achievements.length === 0) {
    return null;
  }

  return (
    <section id="achievements" className="section-pad">
      <div className="container">
        <SectionHeading>Achievements</SectionHeading>

        {achievements.map((achievement, index) => (
          <Reveal key={achievement.title} delay={index * 0.08}>
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

              {achievement.link && (
                <p style={{ marginTop: 'var(--space-2)' }}>
                  <ExternalLink href={achievement.link}>View certificate</ExternalLink>
                </p>
              )}
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
