import { SectionHeading } from '@/components/ui/SectionHeading';
import { profile } from '@/content/profile';

/**
 * About section — introduces Manu's background and education.
 * Two-column layout at desktop (narrative + facts), single column on mobile.
 * Copy pulled from content/profile.ts.
 */
export function About() {
  // Split bio into two paragraphs (already formatted with \n\n in profile.ts)
  const paragraphs = profile.bio.split('\n\n');
  const education = profile.education;

  return (
    <section className="section-pad" id="about">
      <div className="container about-grid">
        <div className="about-narrative">
          <SectionHeading label="ABOUT">
            {profile.headline}
          </SectionHeading>
          {paragraphs.map((para, idx) => (
            <p
              key={idx}
              className="measure"
              style={{
                marginTop: idx === 0 ? 'var(--space-4)' : undefined,
                color: 'var(--color-text-muted)',
              }}
            >
              {para}
            </p>
          ))}
        </div>

        <dl className="about-facts">
          <div className="fact-row">
            <dt>Institution</dt>
            <dd>{education.institution}</dd>
          </div>
          <div className="fact-row">
            <dt>Degree</dt>
            <dd>{education.degree}</dd>
          </div>
          <div className="fact-row">
            <dt>Timeline</dt>
            <dd>{education.dates}</dd>
          </div>
          <div className="fact-row">
            <dt>Current CGPA</dt>
            <dd>{education.cgpa}</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
