'use client';

import { useEffect } from 'react';

/**
 * MobileNav manages mobile navigation state and interactivity.
 * It attaches event listeners to the toggle button and menu to handle:
 * - Opening/closing the menu on toggle click
 * - Closing the menu when Escape is pressed (restoring focus to toggle)
 * - Closing the menu when any link inside is clicked
 *
 * The markup (toggle button and menu panel) is rendered by SiteHeader.
 * This component enhances that markup with interactivity via useEffect.
 */
export function MobileNav() {
  useEffect(() => {
    const toggle = document.getElementById('navToggle') as HTMLButtonElement;
    const menu = document.getElementById('mobileMenu') as HTMLDivElement;

    if (!toggle || !menu) return;

    const closeMenu = (restoreFocus: boolean) => {
      menu.hidden = true;
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open menu');
      if (restoreFocus) toggle.focus();
    };

    const openMenu = () => {
      menu.hidden = false;
      toggle.setAttribute('aria-expanded', 'true');
      toggle.setAttribute('aria-label', 'Close menu');
    };

    const handleToggleClick = () => {
      const isOpen = toggle.getAttribute('aria-expanded') === 'true';
      if (isOpen) {
        closeMenu(false);
      } else {
        openMenu();
      }
    };

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        closeMenu(true);
      }
    };

    const handleLinkClick = () => {
      closeMenu(false);
    };

    toggle.addEventListener('click', handleToggleClick);
    document.addEventListener('keydown', handleEscape);
    menu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', handleLinkClick);
    });

    return () => {
      toggle.removeEventListener('click', handleToggleClick);
      document.removeEventListener('keydown', handleEscape);
      menu.querySelectorAll('a').forEach((link) => {
        link.removeEventListener('click', handleLinkClick);
      });
    };
  }, []);

  return null;
}
