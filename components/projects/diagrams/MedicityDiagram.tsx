import FlowDiagram from './FlowDiagram';

export default function MedicityDiagram() {
  return (
    <FlowDiagram
      id="medicity-diagram"
      title="Medicity architecture: React frontend on Vercel calls a Spring Boot REST API on Railway, which stores data in PostgreSQL."
      steps={[
        { label: 'React 18 + TS', sub: 'Vercel' },
        { label: 'Spring Boot 3 API', sub: 'JWT · Railway' },
        { label: 'PostgreSQL', sub: 'unique index · audit' },
      ]}
      caption={
        <>
          React frontend → Spring Boot REST API → PostgreSQL. The API also calls
          Claude and Gemini to read handwritten prescription photos.
        </>
      }
    />
  );
}
