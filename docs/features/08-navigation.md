# Feature Spec — Navigation and Scroll Structure

## Purpose

Make a long, single-page portfolio easy to scan and navigate without turning it into a complex application.

## Information architecture

The page order is:

1. Hero
2. About
3. Projects
4. Skills
5. Achievements
6. Contact/footer

Resume is a direct asset action, not a content section.

## Desktop navigation

- Fixed or sticky header with a text wordmark/name linking to `#top`.
- Navigation links: About, Projects, Skills, Achievements, Contact.
- A distinct `Resume` action links to `/resume.pdf` and opens in a new tab.
- Highlighting the current section is optional; if added, it must not rely on color alone and must remain accurate during keyboard navigation.

## Mobile navigation

- Below the chosen breakpoint, replace the horizontal links with an accessible menu button.
- The button exposes its state with `aria-expanded` and controls the menu region.
- Opening the menu must keep keyboard focus usable; `Escape` closes it and returns focus to the toggle.
- Every menu item closes the menu after navigation. The Resume action remains present.

## Scroll behavior

- Every in-page destination has a unique ID and works without JavaScript.
- Apply smooth scrolling only when `prefers-reduced-motion` allows it.
- Account for sticky-header height so headings are not hidden after anchor navigation.
- Include a skip-to-content link as the first keyboard-focusable item.

## Acceptance criteria

- Desktop links reach their intended sections and the resume opens correctly.
- At 375px, the header fits without horizontal scrolling; the menu is fully keyboard-operable.
- At 768px and 1440px, navigation does not obscure page content or overlap links.
- Reduced-motion users receive instant anchor navigation.
