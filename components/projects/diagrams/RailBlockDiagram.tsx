import FlowDiagram from './FlowDiagram';

export default function RailBlockDiagram() {
  return (
    <FlowDiagram
      id="railblock-diagram"
      title="RailBlock flow: department requests and traffic-free windows enter a CP-SAT model, which returns an optimal plan or a minimal conflict set, re-checked by verify and published."
      steps={[
        { label: 'Requests', sub: '3 departments' },
        { label: 'CP-SAT model', sub: 'OR-Tools' },
        { label: 'Result', sub: 'plan/conflict' },
        { label: 'verify()', sub: 'recheck rules' },
        { label: 'Publish', sub: 'SQLite · CSV' },
      ]}
      caption={
        <>
          Requests and windows go into <code>CP-SAT</code>, which returns a proved-optimal
          plan, or the exact set of requests that cannot all fit. <code>verify()</code>{' '}
          re-checks the result before it is published.
        </>
      }
    />
  );
}
