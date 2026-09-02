import { skills } from '@/content/skills';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';

/**
 * Skills section — renders approved languages and technologies
 * in a two-column grid (collapsing to one column at mobile).
 *
 * Requires:
 * - content/skills.ts: skillGroups data
 * - SectionHeading: for the main h2 and intro text
 * - Container: for max-width and horizontal padding
 * - globals.css: .section-pad, .skills-grid, .skill-group, .tag-list, .tag
 */
export function Skills() {
  return (
    <section id="skills" className="section-pad">
      <Container>
        <SectionHeading
          intro="Tools used across coursework and projects — a capability index, not a proficiency ranking."
        >
          Skills
        </SectionHeading>

        <div className="skills-grid">
          {skills.map((group, index) => (
            <Reveal key={group.groupName} delay={index * 0.1}>
              <div className="skill-group glass-surface">
                <h3>{group.groupName}</h3>
                <ul className="tag-list">
                  {group.skills.map((skill) => (
                    <li key={skill} className="tag">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
