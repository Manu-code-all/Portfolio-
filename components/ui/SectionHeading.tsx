import { ReactNode, CSSProperties } from 'react';

interface SectionHeadingProps {
  /** The primary section heading text. Required. */
  children: ReactNode;
  /** Optional label or subtitle above the heading. */
  label?: string;
  /** Optional introductory text below the heading. */
  intro?: string;
  /** Optional CSS class for additional styling. */
  className?: string;
  /** Semantic heading level. Defaults to 'h2'. */
  as?: 'h1' | 'h2' | 'h3' | 'h4';
}

/**
 * SectionHeading renders a consistently-styled section heading with
 * optional label and intro text. Both label and intro are optional
 * to accommodate sections that use only the main heading.
 */
export function SectionHeading({
  children,
  label,
  intro,
  className = '',
  as: Component = 'h2',
}: SectionHeadingProps) {
  const headingStyle: CSSProperties = {
    fontFamily: 'var(--font-display)',
    fontSize: 'var(--font-size-h2)',
    fontWeight: 'var(--weight-display-bold)',
    letterSpacing: 'var(--tracking-display)',
    lineHeight: 'var(--leading-tight)',
    color: 'var(--color-text)',
    marginBottom: 'var(--space-2)',
  };

  const labelStyle: CSSProperties = {
    display: 'inline-block',
    fontFamily: 'var(--font-mono)',
    fontWeight: 'var(--weight-mono-medium)',
    fontSize: 'var(--font-size-small)',
    color: 'var(--color-text-muted)',
    letterSpacing: '0.04em',
    marginBottom: 'var(--space-3)',
  };

  const introStyle: CSSProperties = {
    fontSize: 'var(--font-size-body)',
    color: 'var(--color-text-muted)',
    lineHeight: 'var(--leading-body)',
    marginTop: 'var(--space-2)',
    maxWidth: 'var(--measure-max)',
  };

  return (
    <div className={className}>
      {label && <p style={labelStyle}>{label}</p>}
      <Component style={headingStyle}>{children}</Component>
      {intro && <p style={introStyle}>{intro}</p>}
    </div>
  );
}
