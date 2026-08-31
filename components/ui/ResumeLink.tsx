import { ReactNode } from 'react';
import { ExternalLink } from './ExternalLink';

interface ResumeLinkProps {
  children: ReactNode;
  className?: string;
}

/**
 * ResumeLink is a specialized ExternalLink that hardcodes the resume PDF path.
 * No dependency on content/profile.ts; the path is stable across all uses.
 */
export function ResumeLink({ children, className }: ResumeLinkProps) {
  return (
    <ExternalLink href="/resume.pdf" className={className}>
      {children}
    </ExternalLink>
  );
}
