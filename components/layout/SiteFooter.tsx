import { ExternalLink } from '@/components/ui/ExternalLink';
import { ResumeLink } from '@/components/ui/ResumeLink';
import { profileLinks } from '@/content/profile';

/**
 * SiteFooter serves as both footer and contact section.
 * Contains email (mailto: link), resume download, and profile links.
 * No separate Contact.tsx component exists — contact is integrated here.
 *
 * Structure and copy match docs/features/07-contact.md and wireframe/index.html.
 */
export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="site-footer">
      {/* Main contact content: heading, email, resume, and profile links */}
      <div className="container footer-grid">
        {/* Left column: heading, email, resume download */}
        <div>
          <h2>Let’s build something thoughtful.</h2>

          {/* Email as visible mailto: link */}
          <p className="footer-email">
            Email:{' '}
            <a href={`mailto:${profileLinks.email}`}>
              {profileLinks.email}
            </a>
          </p>

          {/* Resume download button */}
          <div className="footer-resume">
            <ResumeLink className="btn-primary">
              Download resume
            </ResumeLink>
          </div>
        </div>

        {/* Right column: profile links navigation */}
        <nav className="footer-links" aria-label="Profiles">
          <ul>
            <li>
              <ExternalLink href={profileLinks.github}>
                GitHub
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href={profileLinks.linkedin}>
                LinkedIn
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href={profileLinks.leetcode}>
                LeetCode
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href={profileLinks.geeksforgeeks}>
                GeeksforGeeks
              </ExternalLink>
            </li>
          </ul>
        </nav>
      </div>

      {/* Copyright line */}
      <div className="container">
        <p className="footer-copyright">© {currentYear} Manu Gupta</p>
      </div>
    </footer>
  );
}
