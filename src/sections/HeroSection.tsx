/**
 * HeroSection — Phase 3C
 *
 * Full-height intro with:
 * - Aurora atmosphere
 * - Replayable motion reveals
 * - Hero avatar parallax
 * - User-triggered ShadowFox cinematic experience
 *
 * The cinematic is intentionally mounted outside .hero-inner
 * so it can function as an independent full-screen experience.
 */

import React from 'react';
import { Button } from '../components/Button';
import { Badge } from '../components/Badge';
import Aurora from '../components/effects/Aurora';
import BlurText from '../components/effects/BlurText';
import HeroExperience from '../components/hero/HeroExperience';
import HeroExperienceTrigger from '../components/hero/HeroExperienceTrigger';

export const HeroSection: React.FC = () => {
  const [cinematicActive, setCinematicActive] = React.useState(false);

  const launchCinematic = () => {
    setCinematicActive(true);
  };

  const finishCinematic = () => {
    setCinematicActive(false);
  };

  const skipCinematic = () => {
    setCinematicActive(false);
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <section
      id="hero"
      className="hero-section page-container"
      aria-labelledby="hero-heading"
    >
      {/* Aurora atmosphere */}
      <div className="hero-aurora">
        <Aurora
          colorStops={['#24104a', '#8b4dcc', '#101c45']}
          amplitude={1.2}
          blend={0.85}
          speed={1.2}
        />
      </div>

      {/* Existing parallax atmosphere */}
      <div
        className="hero-atmosphere"
        data-parallax="hero-atmosphere"
        aria-hidden="true"
      />

      {/* Main hero content */}
      <div className="hero-inner">
        {/* Left: Content */}
        <div>
          {/* Eyebrow */}
          <div className="hero-eyebrow">
            <Badge variant="blue">AVAILABLE FOR OPPORTUNITIES</Badge>

            <span
              className="type-code"
              style={{
                fontSize: '11px',
                color: 'var(--color-text-faint)',
              }}
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
          <p
            className="hero-subtitle motion-reveal"
            data-motion-reveal="fade-up"
          >
            You can call me{' '}
            <strong style={{ color: 'var(--color-text-primary)' }}>
              Subu
            </strong>{' '}
            or{' '}
            <strong style={{ color: 'var(--color-text-primary)' }}>
              Nani
            </strong>
            . I&apos;m a Computer Science student and developer focused on
            AI-powered applications, deployment, and building reliable
            software from the ground up.
          </p>

          {/* Primary CTAs */}
          <div
            className="hero-cta-row motion-reveal"
            data-motion-reveal="fade-up"
          >
            <Button
              variant="primary"
              size="lg"
              magnetic
              onClick={() => scrollTo('projects')}
              id="hero-cta-work"
            >
              See My Work →
            </Button>

            <Button
              variant="secondary"
              size="lg"
              magnetic
              onClick={() => scrollTo('contact')}
              id="hero-cta-contact"
            >
              Let&apos;s Connect
            </Button>
          </div>

          {/* Cinematic trigger */}
          <div
            className="hero-experience-trigger-wrap motion-reveal"
            data-motion-reveal="fade-up"
          >
            <HeroExperienceTrigger
              onActivate={launchCinematic}
              disabled={cinematicActive}
            />
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

      {/* ShadowFox cinematic — intentionally outside .hero-inner */}
      <HeroExperience
        isActive={cinematicActive}
        onComplete={finishCinematic}
        onSkip={skipCinematic}
      />

      {/* Scroll indicator */}
      <div
        className="hero-scroll-hint motion-reveal motion-fade-in"
        data-motion-reveal="fade-in"
        aria-hidden="true"
      >
        <div className="hero-scroll-line" />
        <span>SCROLL</span>
      </div>
    </section>
  );
};