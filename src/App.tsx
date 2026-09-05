import React, { useState, useEffect } from 'react';
import { TokenVisualizer } from './playground/TokenVisualizer';
import { SurfaceGallery } from './playground/SurfaceGallery';
import { InteractiveShowcase } from './playground/InteractiveShowcase';
import { ResponsiveLayoutTest } from './playground/ResponsiveLayoutTest';
import { Badge } from './components/Badge';
import { Button } from './components/Button';

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'tokens' | 'surfaces' | 'primitives' | 'layout'>('all');
  const [reducedMotion, setReducedMotion] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getViewportLabel = () => {
    if (viewportWidth < 768) return 'Mobile (<768px)';
    if (viewportWidth <= 1024) return 'Tablet (768px–1024px)';
    return 'Desktop (>1024px)';
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: 'var(--color-bg-base)',
        color: 'var(--color-text-secondary)',
        ...(reducedMotion
          ? ({
              '--duration-fast': '0.01ms',
              '--duration-base': '0.01ms',
              '--duration-smooth': '0.01ms',
              '--motion-lift-y': '0px',
            } as React.CSSProperties)
          : {}),
      }}
    >
      {/* Sticky Header / Floating Playground Bar */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          background: 'var(--color-bg-base)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: '1px solid var(--border-subtle)',
          padding: 'var(--space-3) var(--gutter-desktop)',
        }}
      >
        <div
          style={{
            maxWidth: 'var(--container-max)',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 'var(--space-3)',
          }}
        >
          {/* Brand / Title */}
          <div className="flex-row gap-3" style={{ alignItems: 'center' }}>
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: 'var(--radius-sm)',
                background: 'linear-gradient(135deg, var(--color-accent-blue), var(--color-accent-violet))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 800,
                color: '#fff',
                fontFamily: 'var(--font-display)',
                fontSize: '16px',
                boxShadow: 'var(--glow-blue-sm)',
              }}
            >
              S
            </div>
            <div>
              <div className="type-heading-4" style={{ fontSize: '1rem', lineHeight: 1.2 }}>
                Design System Playground
              </div>
              <div className="type-body-sm" style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>
                Subhashish Portfolio &bull; Phase 1 Foundation
              </div>
            </div>
          </div>

          {/* Quick Filter Navigation */}
          <nav className="nav-bar" aria-label="Playground Section Selector">
            <button
              className={`nav-link ${activeTab === 'all' ? 'active' : ''}`}
              onClick={() => setActiveTab('all')}
            >
              All Sections
            </button>
            <button
              className={`nav-link ${activeTab === 'tokens' ? 'active' : ''}`}
              onClick={() => setActiveTab('tokens')}
            >
              Tokens
            </button>
            <button
              className={`nav-link ${activeTab === 'surfaces' ? 'active' : ''}`}
              onClick={() => setActiveTab('surfaces')}
            >
              Surfaces
            </button>
            <button
              className={`nav-link ${activeTab === 'primitives' ? 'active' : ''}`}
              onClick={() => setActiveTab('primitives')}
            >
              Primitives
            </button>
            <button
              className={`nav-link ${activeTab === 'layout' ? 'active' : ''}`}
              onClick={() => setActiveTab('layout')}
            >
              Layout
            </button>
          </nav>

          {/* Viewport Indicator & Reduced Motion Toggle */}
          <div className="flex-row gap-2" style={{ alignItems: 'center' }}>
            <Badge variant="blue">{getViewportLabel()}</Badge>
            <Button
              variant={reducedMotion ? 'accent' : 'secondary'}
              size="sm"
              onClick={() => setReducedMotion(!reducedMotion)}
              title="Toggle prefers-reduced-motion simulation"
            >
              {reducedMotion ? 'Reduced Motion: ON' : 'Motion: Active'}
            </Button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="page-container" style={{ paddingBottom: 'var(--space-24)' }}>
        {/* Intro Hero Panel */}
        <section className="section-wrapper" style={{ paddingBottom: 'var(--space-10)' }}>
          <div className="surface-card surface-rule-top" style={{ padding: 'var(--space-10) var(--space-8)' }}>
            <div className="flex-col gap-4">
              <div className="flex-row gap-2" style={{ flexWrap: 'wrap' }}>
                <Badge variant="blue">PHASE_01_VISUAL_FOUNDATION</Badge>
                <Badge variant="violet">DRAGON_WARRIOR_SYSTEM</Badge>
                <Badge variant="success">CSS_FIRST_TOKENS</Badge>
              </div>

              <h1 className="type-display" style={{ marginTop: 'var(--space-2)' }}>
                Visual Architecture &amp; Foundation Playground
              </h1>

              <p className="type-body-lg" style={{ maxWidth: '820px' }}>
                This standalone environment validates the CSS design tokens, typography scale, obsidian surface depths, interactive form primitives, and responsive layout foundations before constructing the actual personal portfolio.
              </p>

              <div
                style={{
                  display: 'flex',
                  gap: 'var(--space-6)',
                  flexWrap: 'wrap',
                  marginTop: 'var(--space-4)',
                  paddingTop: 'var(--space-6)',
                  borderTop: '1px solid var(--border-subtle)',
                }}
              >
                <div>
                  <span className="type-eyebrow">Aesthetic North Star</span>
                  <div className="type-body" style={{ fontWeight: 600, marginTop: 'var(--space-1)' }}>
                    Dark Cinematic Editorial
                  </div>
                </div>
                <div>
                  <span className="type-eyebrow">Font Stack</span>
                  <div className="type-body" style={{ fontWeight: 600, marginTop: 'var(--space-1)' }}>
                    Syne + Plus Jakarta Sans + JetBrains Mono
                  </div>
                </div>
                <div>
                  <span className="type-eyebrow">Color Core</span>
                  <div className="type-body" style={{ fontWeight: 600, marginTop: 'var(--space-1)' }}>
                    Obsidian Base / Atmospheric Cool Blue / Dragon Violet
                  </div>
                </div>
                <div>
                  <span className="type-eyebrow">Dependencies</span>
                  <div className="type-body" style={{ fontWeight: 600, marginTop: 'var(--space-1)' }}>
                    React 18 + Vite + Pure Vanilla CSS (Zero Frameworks)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 1: Design Tokens & Visual Hierarchy */}
        {(activeTab === 'all' || activeTab === 'tokens') && (
          <section className="section-wrapper">
            <TokenVisualizer />
          </section>
        )}

        {/* Section 2: Surfaces & Glow System */}
        {(activeTab === 'all' || activeTab === 'surfaces') && (
          <section className="section-wrapper">
            <SurfaceGallery />
          </section>
        )}

        {/* Section 3: Interactive Primitives & Form Controls */}
        {(activeTab === 'all' || activeTab === 'primitives') && (
          <section className="section-wrapper">
            <InteractiveShowcase />
          </section>
        )}

        {/* Section 4: Responsive Layout & Grid Behavior */}
        {(activeTab === 'all' || activeTab === 'layout') && (
          <section className="section-wrapper">
            <ResponsiveLayoutTest />
          </section>
        )}
      </main>

      {/* Footer */}
      <footer
        style={{
          borderTop: '1px solid var(--border-subtle)',
          padding: 'var(--space-10) var(--gutter-desktop)',
          background: 'var(--color-bg-base)',
        }}
      >
        <div
          style={{
            maxWidth: 'var(--container-max)',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 'var(--space-4)',
          }}
        >
          <div className="type-body-sm">
            &copy; 2026 Subhashish Budati &bull; Phase 1 Design System Foundation
          </div>
          <div className="flex-row gap-4" style={{ alignItems: 'center' }}>
            <span className="type-code" style={{ fontSize: '12px' }}>
              WCAG AAA Dark Contrast &bull; Responsive 320px–1920px
            </span>
            <span className="badge badge-blue">PHASE 1 COMPLETE</span>
          </div>
        </div>
      </footer>
    </div>
  );
};
