import { Container } from '@/components/ui/Container';
import { ResumeLink } from '@/components/ui/ResumeLink';
import { MobileNav } from './MobileNav';

/**
 * SiteHeader renders the fixed/sticky header with wordmark, desktop navigation,
 * and mobile navigation toggle. The header is a server component; mobile nav
 * interactivity is delegated to the MobileNav client component.
 */
export function SiteHeader() {
  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="site-header">
      <Container className="nav-inner">
        <a href="#top" className="wordmark">
          Manu Gupta
        </a>

        <nav className="primary-nav" aria-label="Primary">
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="nav-link">
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <ResumeLink className="btn-primary">
                Download resume
              </ResumeLink>
            </li>
          </ul>
        </nav>

        <button
          id="navToggle"
          className="nav-toggle"
          aria-expanded="false"
          aria-controls="mobileMenu"
          aria-label="Open menu"
        >
          <span className="nav-toggle-bars">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      </Container>

      <div id="mobileMenu" className="mobile-menu" hidden>
        <ul>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="nav-link">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <ResumeLink className="btn-primary">
          Download resume
        </ResumeLink>
      </div>

      <MobileNav />
    </header>
  );
}
