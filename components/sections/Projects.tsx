import { projects } from '@/content/projects';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { SectionHeading } from '@/components/ui/SectionHeading';

// Import all three diagram components
import StudentManagementDiagram from '@/components/projects/diagrams/StudentManagementDiagram';
import MedicityDiagram from '@/components/projects/diagrams/MedicityDiagram';
import JobPortalDiagram from '@/components/projects/diagrams/JobPortalDiagram';

/**
 * Map project slugs to their corresponding diagram components.
 * This is the one place in the codebase where a slug is matched to a diagram.
 */
const diagramMap = {
  'student-management': StudentManagementDiagram,
  'medicity': MedicityDiagram,
  'job-portal': JobPortalDiagram,
} as const;

/**
 * Projects section: renders all three projects as disclosure rows with border-top dividers.
 * Each project is paired with its verified architecture diagram.
 */
export function Projects() {
  // Sort projects by order (1, 2, 3)
  const sortedProjects = [...projects].sort((a, b) => a.order - b.order);

  return (
    <section id="projects" className="section-pad">
      <div className="container">
        <SectionHeading intro="Three real builds, each verified against its source repository — problem, architecture, and outcome, not resume bullet points.">
          Projects
        </SectionHeading>

        <div className="project-list">
          {sortedProjects.map((project) => {
            // Get the diagram component for this project
            const DiagramComponent = diagramMap[project.slug as keyof typeof diagramMap];

            // Render the diagram component
            const diagram = DiagramComponent ? <DiagramComponent /> : null;

            return (
              <ProjectCard
                key={project.slug}
                project={project}
                diagram={diagram}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
