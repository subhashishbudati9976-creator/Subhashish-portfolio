/**
 * HeroSection — Phase 2
 *
 * Full-height intro. Communicates identity, developer positioning,
 * personality, and primary CTAs. SB monogram avatar used as portrait
 * placeholder until an approved photo is supplied (CONTENT.md §15).
 *
 * Content source: docs/CONTENT.md §2, §3, §12
 */

import React from 'react';
import { Button } from '../components/Button';
import { Badge } from '../components/Badge';

export const HeroSection: React.FC = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      id="hero"
      className="hero-section page-container"
      aria-labelledby="hero-heading"
    >
      <div className="hero-inner">
        {/* Left: Content */}
        <div>
          {/* Eyebrow */}
          <div className="hero-eyebrow">
            <Badge variant="blue">AVAILABLE FOR OPPORTUNITIES</Badge>
            <span
              className="type-code"
              style={{ fontSize: '11px', color: 'var(--color-text-faint)' }}
            >
              Hyderabad, India
            </span>
          </div>

          {/* Display heading */}
          <h1 className="hero-display" id="hero-heading">
            Hey amigos —<br />
            I&apos;m{' '}
            <span className="hero-name-accent">Subhashish.</span>
          </h1>

          {/* Subtitle */}
          <p className="hero-subtitle">
            You can call me{' '}
            <strong style={{ color: 'var(--color-text-primary)' }}>Subu</strong>{' '}
            or{' '}
            <strong style={{ color: 'var(--color-text-primary)' }}>Nani</strong>
            . I&apos;m a Computer Science student and developer focused on
            AI-powered applications, deployment, and building reliable software
            from the ground up.
          </p>

          {/* CTAs */}
          <div className="hero-cta-row">
            <Button
              variant="primary"
              size="lg"
              onClick={() => scrollTo('projects')}
              id="hero-cta-work"
            >
              See My Work →
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => scrollTo('contact')}
              id="hero-cta-contact"
            >
              Let&apos;s Connect
            </Button>
          </div>
        </div>

        {/* Right: Avatar placeholder */}
        <div
          className="hero-avatar"
          role="img"
          aria-label="Subhashish Budati — portrait placeholder, photo coming soon"
        >
          <span className="hero-avatar-initials" aria-hidden="true">SB</span>
          <span className="hero-avatar-placeholder-note" aria-hidden="true">
            PHOTO_PENDING
          </span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll-hint" aria-hidden="true">
        <div className="hero-scroll-line" />
        <span>SCROLL</span>
      </div>
    </section>
  );
};
