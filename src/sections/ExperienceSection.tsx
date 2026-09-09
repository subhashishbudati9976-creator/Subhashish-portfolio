/**
 * ExperienceSection — Phase 2
 *
 * Vertical timeline presenting professional and academic experience
 * plus education. All content verified against docs/CONTENT.md §5, §6.
 */

import React from 'react';
import type { ExperienceItem } from '../types';

const EXPERIENCE: ExperienceItem[] = [
  {
    id: 'shadowfox',
    role: 'Full-Stack Developer Intern',
    organisation: 'ShadowFox',
    timeline: 'September 2026',
    type: 'Internship',
    bullets: [
      'Incoming 1-month virtual internship focused on full-stack development.',
      'Progressive project-based tasks covering practical software development.',
      'Mentorship, self-paced learning, and collaborative problem-solving.',
      'Practical problem-solving challenges with a final project presentation.',
    ],
  },
  {
    id: 'academic-dev',
    role: 'Software Developer',
    organisation: 'Academic Software Development',
    timeline: '2026',
    type: 'Academic',
    bullets: [
      'Developed and debugged an AI-powered virtual assistant using Python and Google Gemini.',
      'Worked with containerization and CI/CD practices.',
      'Troubleshot API integration, deployment, containerization, and CI/CD issues.',
      'Documented implementation decisions systematically.',
      'Improved application reliability through iterative problem solving.',
    ],
  },
  {
    id: 'education',
    role: 'B.Tech + M.Tech — Computer Science & Engineering',
    organisation: 'JNTUH — University College of Engineering, Science & Technology Hyderabad',
    timeline: '2024 — 2029',
    type: 'Education',
    bullets: [
      'Integrated Dual Degree Programme in Computer Science & Engineering.',
      'CGPA: 7.93 / 10.',
      'Coursework: Data Structures, DBMS, OS, Software Engineering, Algorithms, Computer Networks, Computer Organisation & Architecture.',
      '1st Year Coordinator at JNTUH-JAC; Class Representative for three semesters.',
    ],
  },
];
export const ExperienceSection: React.FC = () => {
  return (
    <section
      id="experience"
      className="portfolio-section page-container"
      aria-labelledby="experience-heading"
    >
      {/* Section header */}
      <div className="motion-reveal" data-motion-reveal="fade-up" style={{ marginBottom: 'var(--space-12)' }}>
        <div className="section-label">
          <span className="type-eyebrow">Experience</span>
        </div>
        <h2 className="section-title" id="experience-heading">
          Where I&apos;ve Built
        </h2>
      </div>

      {/* Timeline */}
      <div
        style={{ maxWidth: 'var(--container-narrow)', marginLeft: 0 }}
      >
        <ol className="timeline" aria-label="Career and education timeline">
          {EXPERIENCE.map((item) => {
            const dotVariant =
              item.type === 'Education' ? 'violet' : '';

            return (
              <li key={item.id} className="timeline-item motion-reveal" data-motion-reveal="fade-up">
                <div
                  className={`timeline-dot${dotVariant ? ` ${dotVariant}` : ''}`}
                  aria-hidden="true"
                />

                <div className="timeline-meta">
                  <span className="timeline-date">{item.timeline}</span>
                  <span
                    className={`timeline-type-tag${item.type === 'Education' ? ' violet' : ''}`}
                  >
                    {item.type.toUpperCase()}
                  </span>
                </div>

                <h3 className="timeline-role">{item.role}</h3>
                <p className="timeline-org">{item.organisation}</p>

                <ul className="timeline-bullets" aria-label={`Details for ${item.role}`}>
                  {item.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};
