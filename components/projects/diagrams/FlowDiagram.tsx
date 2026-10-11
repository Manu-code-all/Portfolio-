import type { ReactNode } from 'react';

/**
 * Shared left-to-right flow diagram (desktop) that stacks vertically on mobile.
 * Each project passes its own steps; boxes are laid out evenly.
 */
export type FlowStep = { label: string; sub?: string };

interface FlowDiagramProps {
  id: string;
  title: string;
  steps: FlowStep[];
  caption: ReactNode;
}

export default function FlowDiagram({ id, title, steps, caption }: FlowDiagramProps) {
  const n = steps.length;
  const gap = 22;
  const pad = 10;
  const boxW = (620 - pad * 2 - gap * (n - 1)) / n;
  const boxH = 56;
  const mobileBoxH = 44;
  const mobileGap = 20;
  const mobileH = n * mobileBoxH + (n - 1) * mobileGap + 20;

  return (
    <figure className="diagram-figure">
      <svg
        className="flow-diagram-desktop"
        viewBox="0 0 620 84"
        role="img"
        aria-labelledby={`${id}-title-desktop`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <title id={`${id}-title-desktop`}>{title}</title>
        {steps.map((s, i) => {
          const x = pad + i * (boxW + gap);
          return (
            <g key={s.label}>
              <rect className="diagram-box" x={x} y={14} width={boxW} height={boxH} />
              <text className="diagram-label-strong" x={x + boxW / 2} y={s.sub ? 38 : 46} textAnchor="middle">
                {s.label}
              </text>
              {s.sub && (
                <text className="diagram-label" x={x + boxW / 2} y={55} textAnchor="middle">
                  {s.sub}
                </text>
              )}
              {i < n - 1 && (
                <line className="diagram-line" x1={x + boxW} y1={42} x2={x + boxW + gap} y2={42} />
              )}
            </g>
          );
        })}
      </svg>

      <svg
        className="flow-diagram-mobile"
        viewBox={`0 0 300 ${mobileH}`}
        role="img"
        aria-labelledby={`${id}-title-mobile`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <title id={`${id}-title-mobile`}>{title}</title>
        {steps.map((s, i) => {
          const y = 10 + i * (mobileBoxH + mobileGap);
          return (
            <g key={s.label}>
              <rect className="diagram-box" x={10} y={y} width={280} height={mobileBoxH} />
              <text className="diagram-label-strong" x={150} y={s.sub ? y + 19 : y + 26} textAnchor="middle">
                {s.label}
              </text>
              {s.sub && (
                <text className="diagram-label" x={150} y={y + 34} textAnchor="middle">
                  {s.sub}
                </text>
              )}
              {i < n - 1 && (
                <line className="diagram-line" x1={150} y1={y + mobileBoxH} x2={150} y2={y + mobileBoxH + mobileGap} />
              )}
            </g>
          );
        })}
      </svg>

      <figcaption>{caption}</figcaption>
    </figure>
  );
}
