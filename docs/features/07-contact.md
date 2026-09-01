# Feature Spec — Contact and Footer

## Purpose

End the portfolio with an unmistakable, low-friction way to contact Manu or inspect his public profiles.

## Approved content

- **Heading:** `Let’s build something thoughtful.`
- **Email:** `manug9868@gmail.com` via `mailto:manug9868@gmail.com`
- **Profiles:** GitHub, LinkedIn, LeetCode, GeeksforGeeks using the canonical URLs in `docs/DISCOVERY.md` §9.
- **Footer line:** `© 2026 Manu Gupta`

## Behavior

- The email address must be a real `mailto:` anchor, visible as text, and optionally accompanied by a “Copy email” control only if it provides a clear success state.
- External profile links open in new tabs with `rel="noreferrer"` (or `noopener noreferrer`).
- The resume link is included here and targets `/resume.pdf` as specified in `06-resume.md`.
- Verify all URLs before launch; dead profile links are a release blocker.

## Layout and accessibility

- Use a semantic footer with a clear contact heading and an accessible list of links.
- On desktop, contact information and profile links may sit side-by-side; stack them on small screens.
- Do not use a contact form in v1.
- Keep text contrast, focus visibility, and tap-target spacing WCAG AA-friendly.

## Acceptance criteria

- The email link opens a new email composition addressed to `manug9868@gmail.com`.
- All four profiles lead to the correct public destination in a new tab.
- The resume remains available from the footer.
- The footer has no clipped or overlapping content at 375px, 768px, or 1440px.
