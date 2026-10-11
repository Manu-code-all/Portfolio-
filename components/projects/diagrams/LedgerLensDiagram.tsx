import FlowDiagram from './FlowDiagram';

export default function LedgerLensDiagram() {
  return (
    <FlowDiagram
      id="ledgerlens-diagram"
      title="LedgerLens pipeline: settlement and bank CSVs go through rule matching, arithmetic batch detection and an AI agent, then to an audit log and React dashboard."
      steps={[
        { label: 'CSV upload', sub: 'settle + bank' },
        { label: 'Stage 1', sub: 'rules' },
        { label: 'Stage 1.5', sub: 'batch math' },
        { label: 'Stage 2', sub: 'AI agent' },
        { label: 'Dashboard', sub: 'audit trail' },
      ]}
      caption={
        <>
          Cheap deterministic stages resolve what they can; only the residue
          escalates to the AI agent. Every decision is written to an audit log.
        </>
      }
    />
  );
}
