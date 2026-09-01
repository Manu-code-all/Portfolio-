'use client';

import { useState, ReactNode } from 'react';
import type { Project } from '@/lib/types';
import { ProjectDetail } from './ProjectDetail';

interface ProjectCardProps {
  project: Project;
  diagram: ReactNode;
}

/**
 * Inline SVG preview icons for each project (84x56, aria-hidden).
 * Simple abstract representations, not tied to source evidence.
 */
function StudentManagementPreview() {
  return (
    <svg viewBox="0 0 84 56" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Input box */}
      <rect x="4" y="6" width="30" height="18" className="diagram-box" />
      {/* Output box */}
      <rect x="50" y="30" width="30" height="18" className="diagram-box" />
      {/* Flow line */}
      <line x1="34" y1="15" x2="50" y2="39" className="diagram-line" />
    </svg>
  );
}

function MedicityPreview() {
  return (
    <svg viewBox="0 0 84 56" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Central page box */}
      <rect x="28" y="10" width="28" height="20" className="diagram-box" />
      {/* Left page */}
      <rect x="6" y="15" width="14" height="12" className="diagram-box" />
      {/* Right page */}
      <rect x="64" y="15" width="14" height="12" className="diagram-box" />
      {/* Lines showing navigation */}
      <line x1="20" y1="21" x2="28" y2="21" className="diagram-line" />
      <line x1="56" y1="21" x2="64" y2="21" className="diagram-line" />
    </svg>
  );
}

function JobPortalPreview() {
  return (
    <svg viewBox="0 0 84 56" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Frontend layer */}
      <rect x="6" y="6" width="72" height="10" className="diagram-box" />
      {/* Middle layer */}
      <rect x="6" y="22" width="72" height="10" className="diagram-box" />
      {/* Data layer */}
      <rect x="6" y="38" width="72" height="10" className="diagram-box" />
      {/* Vertical lines showing flow */}
      <line x1="24" y1="16" x2="24" y2="22" className="diagram-line" />
      <line x1="42" y1="16" x2="42" y2="22" className="diagram-line" />
      <line x1="60" y1="16" x2="60" y2="22" className="diagram-line" />
      <line x1="24" y1="32" x2="24" y2="38" className="diagram-line" />
      <line x1="42" y1="32" x2="42" y2="38" className="diagram-line" />
      <line x1="60" y1="32" x2="60" y2="38" className="diagram-line" />
    </svg>
  );
}

function PreviewIcon({ slug }: { slug: string }) {
  switch (slug) {
    case 'student-management':
      return <StudentManagementPreview />;
    case 'medicity':
      return <MedicityPreview />;
    case 'job-portal':
      return <JobPortalPreview />;
    default:
      return null;
  }
}

export function ProjectCard({ project, diagram }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const detailId = `detail-${project.slug}`;
  const toggleId = `toggle-${project.slug}`;

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="project-row">
      <button
        id={toggleId}
        className="project-toggle"
        aria-expanded={isExpanded}
        aria-controls={detailId}
        onClick={toggleExpanded}
      >
        <span className="project-summary">
          <span className="project-preview">
            <PreviewIcon slug={project.slug} />
          </span>
          <span className="project-summary-text">
            <h3 className="project-title">{project.title}</h3>
            <span className="project-oneliner">{project.oneLiner}</span>
            <span className="tag-list">
              {project.stack.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </span>
          </span>
        </span>
        <span className="disclosure-icon" aria-hidden="true" />
      </button>

      <ProjectDetail
        id={detailId}
        labelledBy={toggleId}
        isHidden={!isExpanded}
        project={project}
        diagram={diagram}
      />
    </div>
  );
}
