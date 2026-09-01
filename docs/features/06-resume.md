# Feature Spec — Resume Download

## Purpose

Let an evaluator obtain Manu’s current resume immediately, without an account, form, or external redirect.

## Asset and behavior

- Store the approved asset as `public/resume.pdf` in the Next.js project.
- Serve it at `/resume.pdf`.
- Use the visible label `Download resume` in the hero and footer/navigation where specified.
- Open the PDF in a new tab so desktop and mobile browsers can display or download it according to user preference.
- The link must include `target="_blank"` and `rel="noreferrer"` (or `noopener noreferrer`).

## Asset preparation gate

- Source only the owner-approved `Manu Resume Edited.pdf`.
- Verify the PDF opens, is complete, contains the intended current version, and has no passwords, corruption, accidental personal data, or stale links.
- Rename only the deployed copy to `resume.pdf`; preserve the original source file separately if it is added to the repository.
- Do not embed the PDF in an iframe or create a gated contact/download flow.

## Accessibility and layout

- Use text plus an optional download/document icon; an icon cannot be the only accessible name.
- Make the control keyboard reachable with a visible focus treatment.
- State that the link opens the resume in a new tab if this is not otherwise obvious from context.

## Acceptance criteria

- `/resume.pdf` returns the approved PDF with a successful response in production.
- The PDF opens/downloads correctly in current Chrome, Edge, Firefox, and Safari on desktop and mobile.
- The hero and footer links point to the same asset.
- No form, login, tracking gate, or broken external redirect appears.
