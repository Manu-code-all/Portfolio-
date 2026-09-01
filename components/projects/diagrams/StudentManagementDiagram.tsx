/**
 * Student Management System Architecture Diagram
 *
 * Shows two data flows with distinct desktop and mobile layouts:
 * 1. Admin input → validation → students.txt (file persistence)
 * 2. Admission number lookup → Marksheet.calculateCGPA() → console output
 *
 * Desktop: Two horizontal flows side by side
 * Mobile (<640px): Vertical stacked layout with simplified boxes
 */

export default function StudentManagementDiagram() {
  return (
    <figure className="diagram-figure">
      {/* Desktop layout — two horizontal flows */}
      <svg
        className="sms-diagram-desktop"
        viewBox="0 0 620 180"
        role="img"
        aria-labelledby="sms-diagram-title-desktop"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title id="sms-diagram-title-desktop">
          Student Management System data flow: admin input through validation to file storage, and lookup through calculation to console output.
        </title>

        {/* Flow 1: Admin input → Validator → students.txt */}
        <rect className="diagram-box" x="10" y="20" width="130" height="48" />
        <text className="diagram-label-strong" x="75" y="48" textAnchor="middle">
          Admin input
        </text>

        <line className="diagram-line" x1="140" y1="44" x2="180" y2="44" />

        <rect className="diagram-box" x="180" y="20" width="130" height="48" />
        <text className="diagram-label-strong" x="245" y="48" textAnchor="middle">
          Validator
        </text>

        <line className="diagram-line" x1="310" y1="44" x2="350" y2="44" />

        <rect className="diagram-box" x="350" y="20" width="250" height="48" />
        <text className="diagram-label-strong" x="475" y="41" textAnchor="middle">
          data/students.txt
        </text>
        <text className="diagram-label" x="475" y="56" textAnchor="middle">
          (flat-file persistence)
        </text>

        {/* Flow 2: Admission lookup → Marksheet.calculateCGPA() → Console output */}
        <rect className="diagram-box" x="10" y="104" width="170" height="48" />
        <text className="diagram-label-strong" x="95" y="125" textAnchor="middle">
          Admission no.
        </text>
        <text className="diagram-label" x="95" y="140" textAnchor="middle">
          lookup
        </text>

        <line className="diagram-line" x1="180" y1="128" x2="210" y2="128" />

        <rect className="diagram-box" x="210" y="104" width="250" height="48" />
        <text className="diagram-label-strong" x="335" y="132" textAnchor="middle">
          Marksheet.calculateCGPA()
        </text>

        <line className="diagram-line" x1="460" y1="128" x2="490" y2="128" />

        <rect className="diagram-box" x="490" y="104" width="120" height="48" />
        <text className="diagram-label-strong" x="550" y="132" textAnchor="middle">
          Console output
        </text>
      </svg>

      {/* Mobile layout — stacked flows */}
      <svg
        className="sms-diagram-mobile"
        viewBox="0 0 300 340"
        role="img"
        aria-labelledby="sms-diagram-title-mobile"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title id="sms-diagram-title-mobile">
          Student Management System data flow: admin input through validation to file storage, and lookup through calculation to console output.
        </title>

        {/* Flow 1: Admin input → Validator → students.txt (stacked vertically) */}
        <rect className="diagram-box" x="10" y="10" width="280" height="36" />
        <text className="diagram-label-strong" x="150" y="32" textAnchor="middle">
          Admin input
        </text>

        <line className="diagram-line" x1="150" y1="46" x2="150" y2="66" />

        <rect className="diagram-box" x="10" y="66" width="280" height="36" />
        <text className="diagram-label-strong" x="150" y="88" textAnchor="middle">
          Validator
        </text>

        <line className="diagram-line" x1="150" y1="102" x2="150" y2="122" />

        <rect className="diagram-box" x="10" y="122" width="280" height="44" />
        <text className="diagram-label-strong" x="150" y="141" textAnchor="middle">
          data/students.txt
        </text>
        <text className="diagram-label" x="150" y="159" textAnchor="middle">
          (flat-file persistence)
        </text>

        {/* Flow 2: Admission lookup → Marksheet.calculateCGPA() → Console output (stacked vertically) */}
        <line className="diagram-line-bright" x1="150" y1="166" x2="150" y2="186" strokeWidth="1.5" />

        <rect className="diagram-box" x="10" y="186" width="280" height="44" />
        <text className="diagram-label-strong" x="150" y="213" textAnchor="middle">
          Admission no. lookup
        </text>

        <line className="diagram-line" x1="150" y1="230" x2="150" y2="250" />

        <rect className="diagram-box" x="10" y="250" width="280" height="36" />
        <text className="diagram-label-strong" x="150" y="272" textAnchor="middle">
          Marksheet.calculateCGPA()
        </text>

        <line className="diagram-line" x1="150" y1="286" x2="150" y2="306" />

        <rect className="diagram-box" x="10" y="306" width="280" height="36" />
        <text className="diagram-label-strong" x="150" y="328" textAnchor="middle">
          Console output
        </text>
      </svg>

      <figcaption>
        Admin input → validation → <code>students.txt</code>, and admission-number
        lookup → <code>Marksheet</code> calculation → console output.
      </figcaption>
    </figure>
  );
}
