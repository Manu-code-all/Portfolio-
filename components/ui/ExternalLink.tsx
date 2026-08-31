import { ReactNode } from 'react';

interface ExternalLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

/**
 * ExternalLink ensures safe, consistent external link behavior with
 * target="_blank" + rel="noreferrer" and a visually-hidden label.
 * Used for profile links, repository links, and any href pointing off-site.
 */
export function ExternalLink({
  href,
  children,
  className,
}: ExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={className}
    >
      {children}
      <span className="sr-only">(opens in a new tab)</span>
    </a>
  );
}
