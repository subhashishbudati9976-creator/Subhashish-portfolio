/**
 * ProjectsSection — Phase 2
 *
 * Three projects from docs/CONTENT.md §8.
 * GitHub and live URLs are null (not yet verified) — rendered as
 * visually disabled spans, not fabricated links.
 * ODA-CMS and Railway Reservation are clearly marked as team projects.
 */

import React from 'react';
import { ProjectCard } from '../components/ProjectCard';
import type { ProjectData } from '../types';

const PROJECTS: ProjectData[] = [
  {
    id: 'ai-chatbot',
    year: '2026',
    type: 'solo',
    title: 'Deployment of an AI-Driven Chatbot as a Virtual Assistant Using DevOps',
    summary:
      'An AI-powered virtual assistant developed as academic software, integrating Google Gemini for natural-language conversational responses and deployed using containerisation and CI/CD practices.',
    context:
      'Academic software development project building a working AI assistant with a focus on deployment reliability and engineering discipline.',
    contributions: [
      'Integrated Google Gemini for natural-language conversational responses.',
      'Implemented workflow components covering user interaction and backend communication.',
      'Handled conversation and session-related functionality.',
      'Worked on deployment configuration using containerisation and CI/CD.',
      'Diagnosed and resolved API integration, deployment, and containerisation issues.',
      'Documented implementation decisions throughout development.',
    ],
    technologies: ['Python', 'Google Gemini', 'Docker', 'Docker Compose', 'CI/CD', 'API Integration'],
    github: { label: 'GitHub', href: null },
    live: { label: 'Live Demo', href: null },
    featured: true,
  },
  {
    id: 'oda-cms',
    year: '2026',
    type: 'team',
    title: 'Orbital Debris Avoidance Constellation Management System (ODA-CMS)',
    summary:
      'A full-stack platform for monitoring a simulated satellite constellation, detecting conjunction threats, and supporting avoidance decisions — developed as an academic team project.',
    context:
      'High-complexity systems project combining 3D orbital visualisation, orbit propagation, threat detection, and mission analytics workflows.',
    contributions: [
      'Participated in building the visualisation, threat-analysis, and mission-management workflows as part of the team.',
      'Contributed to 3D orbital visualisation and orbit propagation components.',
      'Worked on conjunction threat detection, alert systems, and mission analytics.',
    ],
    technologies: ['Full-Stack', 'Orbital Mechanics', '3D Visualisation', 'Data Analytics'],
    github: { label: 'GitHub', href: null },
    live: { label: 'Live Demo', href: null },
    featured: false,
  },
  {
    id: 'railway',
    year: '2026',
    type: 'team',
    title: 'Railway Reservation System',
    summary:
      'A web-based railway reservation and management system featuring train search, passenger management, booking, cancellation, schedules, payments, and administration — built as an academic team project.',
    context:
      'Workflow-oriented full-stack system with relational data management designed for a realistic reservation use case.',
    contributions: [
      'Contributed to frontend components, backend services, and relational data-management components as part of the team.',
      'Worked on core reservation flows: search, booking, and cancellation.',
      'Contributed to passenger management and scheduling logic.',
    ],
    technologies: ['HTML', 'CSS', 'SQL', 'SQLite', 'Full-Stack Web'],
    github: { label: 'GitHub', href: null },
    live: { label: 'Live Demo', href: null },
    featured: false,
  },
];

export const ProjectsSection: React.FC = () => {
  return (
    <section
      id="projects"
      className="portfolio-section page-container"
      aria-labelledby="projects-heading"
    >
      {/* Section header */}
      <div style={{ marginBottom: 'var(--space-12)' }}>
        <div className="section-label">
          <span className="type-eyebrow">Selected Work</span>
        </div>
        <h2 className="section-title" id="projects-heading">
          Things I&apos;ve Built
        </h2>
        <p
          className="type-body"
          style={{ maxWidth: '560px', color: 'var(--color-text-muted)' }}
        >
          Academic and personal projects covering AI integration, systems
          engineering, and full-stack web development.
        </p>
      </div>

      {/* Note on placeholder links */}
      <div
        style={{
          marginBottom: 'var(--space-8)',
          padding: 'var(--space-3) var(--space-4)',
          background: 'var(--surface-inset)',
          border: '1px solid var(--border-hairline)',
          borderRadius: 'var(--radius-sm)',
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--space-3)',
        }}
        role="note"
        aria-label="Note about project links"
      >
        <span
          className="type-code"
          style={{ fontSize: '11px', flexShrink: 0 }}
        >
          NOTE
        </span>
        <p
          className="type-body-sm"
          style={{ color: 'var(--color-text-faint)', margin: 0 }}
        >
          GitHub and live demo links are marked pending — URLs will be added
          once verified. Greyed-out buttons indicate links not yet configured.
        </p>
      </div>

      {/* Project list */}
      <div className="projects-list">
        {PROJECTS.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};
