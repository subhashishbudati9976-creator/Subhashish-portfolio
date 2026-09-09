import React from 'react';

const FOOTER_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const Footer: React.FC = () => {
  return (
    <footer className="portfolio-footer">
      <div className="page-container footer-inner">
        <div>
          <div className="footer-brand">Subhashish Budati</div>
          <p className="footer-copy">
            Computer Science student and developer based in Hyderabad, India.
          </p>
        </div>

        <nav className="footer-links" aria-label="Footer navigation">
          {FOOTER_LINKS.map(link => (
            <a key={link.href} className="footer-link" href={link.href}>
              {link.label}
            </a>
          ))}
          <a
            className="footer-link"
            href="mailto:subhashishbudati9976@gmail.com"
          >
            Email
          </a>
        </nav>

        <div className="footer-phase-note">
          <span>Built with React, TypeScript &amp; CSS</span>
          <br />
          <span>&copy; 2026 Subhashish Budati</span>
        </div>
      </div>
    </footer>
  );
};