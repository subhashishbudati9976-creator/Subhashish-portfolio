/**
 * SkillsSection — Phase 2
 *
 * Conservative primary skillset as approved in docs/CONTENT.md §7
 * and docs/DECISIONS.md (2026-09-06 — Primary Skills Set).
 *
 * Nginx, Prometheus, Grafana are NOT displayed here.
 * Academic foundations are presented as a separate secondary group.
 */

import React from 'react';
import { SkillBadge } from '../components/SkillBadge';
import type { SkillCategory } from '../types';

/* Primary skill groups — conservative approved set */
const PRIMARY_CATEGORIES: SkillCategory[] = [
  {
    id: 'languages',
    label: 'Languages',
    skills: [
      { label: 'Python', note: 'Primary language for AI & automation' },
      { label: 'Java' },
      { label: 'C' },
      { label: 'HTML' },
      { label: 'CSS' },
    ],
  },
  {
    id: 'tools',
    label: 'Tools & Version Control',
    skills: [
      { label: 'Git' },
      { label: 'GitHub' },
    ],
  },
  {
    id: 'devops',
    label: 'DevOps & Containers',
    skills: [
      { label: 'Docker' },
      { label: 'Docker Compose' },
      { label: 'CI/CD' },
    ],
  },
  {
    id: 'databases',
    label: 'Databases',
    skills: [
      { label: 'SQL' },
      { label: 'SQLite' },
    ],
  },
  {
    id: 'ai',
    label: 'AI & Integration',
    skills: [
      { label: 'Google Gemini' },
      { label: 'API Integration' },
    ],
  },
];

/* Academic & core CS foundations */
const FOUNDATION_SKILLS: SkillCategory[] = [
  {
    id: 'cs-foundations',
    label: 'Academic & Core Foundations',
    skills: [
      { label: 'Data Structures' },
      { label: 'Algorithms' },
      { label: 'DBMS' },
      { label: 'Operating Systems' },
      { label: 'Computer Networks' },
      { label: 'Software Engineering' },
      { label: 'Debugging' },
    ],
  },
];

export const SkillsSection: React.FC = () => {
  return (
    <section
      id="skills"
      className="portfolio-section page-container"
      aria-labelledby="skills-heading"
    >
      {/* Section header */}
      <div className="motion-reveal" data-motion-reveal="fade-up" style={{ marginBottom: 'var(--space-12)' }}>
        <div className="section-label">
          <span className="type-eyebrow">Skills</span>
        </div>
        <h2 className="section-title" id="skills-heading">
          Tools of the Trade
        </h2>
        <p
          className="type-body"
          style={{ maxWidth: '540px', color: 'var(--color-text-muted)' }}
        >
          Technologies I&apos;ve worked with through academic projects, personal
          builds, and hands-on software development.
        </p>
      </div>

      {/* Primary skills grid */}
      <div className="skills-grid motion-reveal" data-motion-reveal="fade-up" style={{ marginBottom: 'var(--space-10)' }}>
        {PRIMARY_CATEGORIES.map(category => (
          <div key={category.id} className="surface-card">
            <h3 className="skills-category-title">{category.label}</h3>
            <div className="skills-chip-row">
              {category.skills.map(skill => (
                <SkillBadge
                  key={skill.label}
                  label={skill.label}
                  variant="primary"
                  note={skill.note}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Academic foundations — presented separately */}
      <div className="motion-reveal" data-motion-reveal="fade-up">
        {FOUNDATION_SKILLS.map(category => (
          <div key={category.id}>
            <h3
              className="skills-category-title"
              style={{ marginBottom: 'var(--space-4)' }}
            >
              {category.label}
            </h3>
            <div className="skills-chip-row">
              {category.skills.map(skill => (
                <SkillBadge
                  key={skill.label}
                  label={skill.label}
                  variant="foundation"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
