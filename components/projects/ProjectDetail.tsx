import { ReactNode } from 'react';
import type { Project } from '@/lib/types';
import { ExternalLink } from '@/components/ui/ExternalLink';

interface ProjectDetailProps {
  id: string;
  labelledBy: string;
  isHidden: boolean;
  project: Project;
  diagram: ReactNode;
}

export function ProjectDetail({
  id,
  labelledBy,
  isHidden,
  project,
  diagram,
}: ProjectDetailProps) {
  return (
    <div
      id={id}
      className="project-detail"
      role="region"
      aria-labelledby={labelledBy}
      hidden={isHidden}
    >
      <h4>Problem</h4>
      <p>{project.problem}</p>

      <h4>Architecture</h4>
      {diagram}

      <h4>Implementation Choices</h4>
      <ul className="detail-list">
        {project.implementationChoices.map((choice, index) => (
          <li key={index}>{choice}</li>
        ))}
      </ul>

      <h4>Stack</h4>
      <p>{project.stack.join(', ')}</p>

      <h4>Outcome</h4>
      <p>{project.outcome}</p>

      <h4>Repository</h4>
      <p>
        <ExternalLink href={project.repoUrl}>View on GitHub</ExternalLink>
      </p>
      {project.liveUrl && (
        <p>
          <ExternalLink href={project.liveUrl}>View Live</ExternalLink>
        </p>
      )}
    </div>
  );
}
