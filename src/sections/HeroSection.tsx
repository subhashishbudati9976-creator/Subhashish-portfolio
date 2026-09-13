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
import Aurora from '../components/effects/Aurora';
import BlurText from '../components/effects/BlurText';

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
      <div className="hero-aurora">
        <Aurora
          colorStops={['#24104a', '#8b4dcc', '#101c45']}
          amplitude={1.2}
          blend={0.85}
          speed={1.2}
        />
      </div>
      <div
        className="hero-atmosphere"
        data-parallax="hero-atmosphere"
        aria-hidden="true"
      />
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
          <h1
            className="hero-display motion-reveal"
            data-motion-reveal="fade-up"
            id="hero-heading"
          >
            <BlurText text="Hey amigos —" />
            <br />
            I&apos;m{' '}
            <span className="hero-name-accent">
              <BlurText
              text="Subhashish."
              delay={65}
              />
            </span>
          </h1>

          {/* Subtitle */}
          <p className="hero-subtitle motion-reveal" data-motion-reveal="fade-up">
            You can call me{' '}
            <strong style={{ color: 'var(--color-text-primary)' }}>Subu</strong>{' '}
            or{' '}
            <strong style={{ color: 'var(--color-text-primary)' }}>Nani</strong>
            . I&apos;m a Computer Science student and developer focused on
            AI-powered applications, deployment, and building reliable software
            from the ground up.
          </p>

          {/* CTAs */}
          <div className="hero-cta-row motion-reveal" data-motion-reveal="fade-up">
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

        {/* Right: Portrait */}
        <div
          className="hero-avatar motion-reveal motion-scale-fade"
          data-motion-reveal="scale-fade"
          data-parallax="hero-avatar"
        >
          <img
            className="hero-avatar-image"
            src="/hero/portrait/subhashish-hero.png"
            alt="Portrait of Subhashish Budati"
          />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll-hint motion-reveal motion-fade-in" data-motion-reveal="fade-in" aria-hidden="true">
        <div className="hero-scroll-line" />
        <span>SCROLL</span>
      </div>
    </section>
  );
};
