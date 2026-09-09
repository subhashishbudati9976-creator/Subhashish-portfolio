/**
 * Nav — Portfolio floating navigation
 *
 * Desktop: glassmorphic pill centered at top.
 * Mobile: hamburger icon + full-screen overlay menu.
 * Active section is highlighted via IntersectionObserver.
 */

import React, { useState, useEffect, useCallback, useRef } from 'react';

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Work', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const SECTION_IDS = NAV_ITEMS.map(item => item.href.slice(1));

export const Nav: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  /* Track active section via IntersectionObserver */
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    SECTION_IDS.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach(obs => obs.disconnect());
  }, []);

  /* Smooth-scroll + close mobile overlay */
  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      setMobileOpen(false);
      if (mobileOpen) {
        hamburgerRef.current?.focus();
      }
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    },
    [mobileOpen]
  );

  /* Return focus to the menu trigger when the mobile menu closes. */
  useEffect(() => {
    if (!mobileOpen) return;

    closeButtonRef.current?.focus();

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileOpen(false);
        hamburgerRef.current?.focus();
      }
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <>
      {/* Floating pill nav */}
      <nav
        className="portfolio-nav"
        aria-label="Primary navigation"
        role="navigation"
      >
        {/* Brand */}
        <span className="portfolio-nav-brand">SB</span>

        {/* Desktop links */}
        <div className="portfolio-nav-links" role="list">
          {NAV_ITEMS.map(item => (
            <a
              key={item.href}
              href={item.href}
              className={`portfolio-nav-link${activeSection === item.href.slice(1) ? ' active' : ''}`}
              onClick={(e) => handleNavClick(e, item.href)}
              aria-current={activeSection === item.href.slice(1) ? 'true' : undefined}
              role="listitem"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          ref={hamburgerRef}
          className="nav-mobile-toggle"
          aria-label="Open navigation menu"
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav-overlay"
          onClick={() => setMobileOpen(true)}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <rect y="3" width="20" height="1.5" rx="0.75" fill="currentColor" />
            <rect y="9.25" width="20" height="1.5" rx="0.75" fill="currentColor" />
            <rect y="15.5" width="20" height="1.5" rx="0.75" fill="currentColor" />
          </svg>
        </button>
      </nav>

      {/* Mobile overlay */}
      <div
        id="mobile-nav-overlay"
        className={`nav-mobile-overlay${mobileOpen ? ' open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <button
          ref={closeButtonRef}
          className="nav-mobile-close"
          aria-label="Close navigation menu"
          onClick={() => {
            setMobileOpen(false);
            hamburgerRef.current?.focus();
          }}
        >
          ✕
        </button>

        <nav aria-label="Mobile navigation" role="list">
          {NAV_ITEMS.map(item => (
            <a
              key={item.href}
              href={item.href}
              className={`nav-mobile-link${activeSection === item.href.slice(1) ? ' active' : ''}`}
              onClick={(e) => handleNavClick(e, item.href)}
              role="listitem"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
};
