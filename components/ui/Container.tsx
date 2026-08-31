import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

/**
 * Container constrains content to the site's max-width and applies
 * horizontal padding using design tokens. Used to wrap major sections
 * and maintain consistent horizontal alignment across the page.
 */
export function Container({ children, className = '' }: ContainerProps) {
  return (
    <div className={`container ${className}`}>
      {children}
    </div>
  );
}
