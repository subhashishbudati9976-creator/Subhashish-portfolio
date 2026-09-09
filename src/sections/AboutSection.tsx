/**
 * AboutSection — Phase 2
 *
 * Presents Subhashish's background — academic, technical, and personal.
 * All content verified against docs/CONTENT.md §4, §5, §9, §10.
 */

import React from 'react';

const COURSEWORK = [
  'Data Structures',
  'DBMS',
  'Operating Systems',
  'Software Engineering',
  'Design & Analysis of Algorithms',
  'Computer Networks',
  'Computer Organization & Architecture',
];

const ACADEMIC_WORK = [
  'AI-powered application development',
  'API integration & debugging',
  'Deployment configuration',
  'Containerization & CI/CD',
  'Relational data management',
  'Web-based system development',
  'Software debugging & iterative problem solving',
];

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="portfolio-section page-container"
      aria-labelledby="about-heading"
    >
      {/* Section header */}
      <div style={{ marginBottom: 'var(--space-12)' }}>
        <div className="section-label">
          <span className="type-eyebrow">About</span>
        </div>
        <h2 className="section-title" id="about-heading">
          Engineer. Student. Builder.
        </h2>
      </div>

      <div className="about-grid">
        {/* Left: Bio */}
        <div>
          <p className="about-bio-paragraph">
            I&apos;m pursuing an Integrated B.Tech&nbsp;+&nbsp;M.Tech in
            Computer Science &amp; Engineering at{' '}
            <strong style={{ color: 'var(--color-text-primary)' }}>
              JNTUH — University College of Engineering, Science &amp; Technology
              Hyderabad
            </strong>{' '}
            (2024–2029). My academic and project work spans AI-powered
            applications, software deployment, containerization, and relational
            data management.
          </p>

          <p className="about-bio-paragraph">
            I&apos;m drawn to the intersection of software engineering and
            real-world problem solving — building things that work reliably,
            debugging systematically when they don&apos;t, and always thinking
            about how systems fit together.
          </p>

          <p className="about-bio-paragraph">
            Outside of code, I&apos;m active in the college music community
            with{' '}
            <strong style={{ color: 'var(--color-text-primary)' }}>
              10 years of beatboxing experience
            </strong>{' '}
            and I serve as a 1st Year Coordinator at JNTUH-JAC. The same
            discipline that goes into performing goes into debugging — both
            require precision, patience, and a sense of structure.
          </p>

          {/* Personal dimension tags */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 'var(--space-2)',
              marginTop: 'var(--space-6)',
            }}
          >
            <span className="about-personal-tag">🎵 BEATBOXER · 10 YRS</span>
            <span className="about-personal-tag">🎓 B.TECH + M.TECH · CSE</span>
            <span className="about-personal-tag">📍 HYDERABAD, INDIA</span>
          </div>

          {/* Academic highlights */}
          <div style={{ marginTop: 'var(--space-10)' }}>
            <h3
              className="type-heading-4"
              style={{ marginBottom: 'var(--space-5)', color: 'var(--color-text-primary)' }}
            >
              Academic &amp; Project Work
            </h3>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: 'var(--space-3)',
              }}
            >
              {ACADEMIC_WORK.map(item => (
                <li
                  key={item}
                  style={{
                    display: 'flex',
                    gap: 'var(--space-2)',
                    alignItems: 'flex-start',
                    fontSize: 'var(--text-sm)',
                    color: 'var(--color-text-muted)',
                    lineHeight: 'var(--leading-normal)',
                  }}
                >
                  <span
                    style={{
                      color: 'var(--color-accent-blue-dim)',
                      flexShrink: 0,
                    }}
                  >
                    —
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right: Sidebar card with academic details */}
        <aside className="about-sidebar-card">
          <div className="surface-card">
            <h3
              className="type-eyebrow"
              style={{ marginBottom: 'var(--space-6)' }}
            >
              Education
            </h3>

            <ul className="about-detail-list">
              <li className="about-detail-item">
                <span className="about-detail-label">University</span>
                <span className="about-detail-value">
                  JNTUH-UCESTH
                </span>
              </li>
              <li className="about-detail-item">
                <span className="about-detail-label">Degree</span>
                <span className="about-detail-value">
                  Integrated B.Tech + M.Tech
                </span>
              </li>
              <li className="about-detail-item">
                <span className="about-detail-label">Specialisation</span>
                <span className="about-detail-value">
                  Computer Science &amp; Engineering
                </span>
              </li>
              <li className="about-detail-item">
                <span className="about-detail-label">Timeline</span>
                <span className="about-detail-value">2024 — 2029</span>
              </li>
              <li className="about-detail-item">
                <span className="about-detail-label">CGPA</span>
                <span className="about-detail-value accent">7.93 / 10</span>
              </li>
            </ul>

            <hr
              style={{
                border: 'none',
                height: '1px',
                background: 'var(--border-hairline)',
                margin: 'var(--space-5) 0',
              }}
            />

            <h3
              className="type-eyebrow"
              style={{ marginBottom: 'var(--space-4)' }}
            >
              Core Coursework
            </h3>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-2)',
              }}
            >
              {COURSEWORK.map(c => (
                <li
                  key={c}
                  style={{
                    fontSize: 'var(--text-sm)',
                    color: 'var(--color-text-muted)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-2)',
                  }}
                >
                  <span
                    style={{
                      width: '4px',
                      height: '4px',
                      borderRadius: '50%',
                      background: 'var(--color-accent-blue-dim)',
                      flexShrink: 0,
                    }}
                  />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
};
