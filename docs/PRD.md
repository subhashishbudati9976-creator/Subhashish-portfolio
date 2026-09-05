# Portfolio Product Requirements Document

**Project:** Subhashish — Personal Developer Portfolio  
**Status:** Draft v0.1  
**Owner:** Subhashish  
**Primary purpose:** Long-term professional portfolio; also fulfills ShadowFox Full Stack Developer Beginner requirements and supports progression into Intermediate/Advanced work.

---

## 1. Product Vision

Build a distinctive, production-minded personal portfolio that presents Subhashish as a developer and builder, while demonstrating thoughtful frontend engineering, product thinking, performance awareness, accessibility, and AI-assisted development.

The site should feel:
- dark
- cinematic
- premium
- personal
- technically credible
- intentionally designed
- expressive without looking like a generic AI-generated template

The visual direction is inspired by a dragon-warrior aesthetic, with controlled parallax, motion, atmospheric depth, and optional 3D/Spline elements.

## 2. Core Product Goals

1. Create a memorable first impression.
2. Clearly communicate who Subhashish is and what he builds.
3. Make projects easy to understand and explore.
4. Provide a direct contact path.
5. Include a personal AI assistant that answers questions about Subhashish.
6. Make the experience responsive across desktop, tablet, and mobile.
7. Engineer the site so that visual complexity does not compromise usability or performance.
8. Maintain a codebase that an AI coding agent can understand and modify safely.
9. Deploy a stable public version.
10. Produce a portfolio that remains useful after the internship ends.

## 3. ShadowFox Beginner Requirements

The Beginner task requires:
- home/introduction section
- about section
- skills/tools section (featuring conservative skill set)
- projects section
- contact form with proper validation (with serverless email delivery planned via Resend)
- responsive desktop/tablet/mobile layout
- deployment with a live link on Vercel
- ability to explain design, layout, responsiveness, and frontend structure

These are the minimum acceptance requirements, not the maximum scope.

## 4. Experience Direction

Primary experience:
- editorial/cinematic dark portfolio
- parallax scrolling
- smooth, restrained motion
- dragon-warrior visual language
- strong typography and depth
- selective glassmorphism/morphism where it supports the theme
- optional Spline/3D visual layer
- dragon transformation sequence using the owner's approved visual asset
- optional ambient music with explicit user control
- personal AI chatbot with text and voice responses

The visual system must avoid:
- random component-library styling
- excessive gradients
- animation on every element
- fake technical jargon
- unnecessary features added only to appear advanced

## 5. Information Architecture

Initial structure:

1. Intro / Hero
2. About
3. Experience
4. Skills / Tools
5. Selected Projects
6. How I Build / Engineering Mindset
7. Personal AI Assistant
8. Let's Connect
9. Footer

Additional pages/utility views may include:
- custom 404
- thank-you state/page if useful for the contact flow

The final information architecture is subject to iteration after visual exploration.

## 6. Signature Features

### 6.1 Dragon Transformation
Opening experience may transform the owner's portrait into a dragon-themed visual with synchronized sound.

Requirements:
- must not block access to the main portfolio
- must have a loading/fallback strategy
- must account for reduced-motion preferences
- mobile experience must remain practical
- sound must be user-controlled / browser-policy compatible

### 6.2 Parallax Motion
Use layered motion to create depth during scrolling.

Requirements:
- motion should support storytelling
- no excessive continuous animation
- protect scrolling performance
- provide reduced-motion behavior

### 6.3 Spline / 3D
Optional enhancement for selected sections.

Requirements:
- only if the visual benefit justifies its performance cost
- lazy-load/defer where appropriate
- provide a fallback
- avoid making core information dependent on 3D

### 6.4 Personal AI Assistant
The chatbot answers questions about Subhashish using an approved knowledge source and a defined persona.

It may support:
- text responses
- spoken responses
- ElevenLabs voice output
- portfolio/project questions
- contact guidance
- current learning/experience information present in the approved knowledge base

It must not invent facts.

## 7. Content Principles

All personal facts must originate from `docs/CONTENT.md` or another explicitly approved source.

The AI must not fabricate:
- jobs
- internships
- skills
- companies
- awards
- project ownership
- experience duration
- academic claims

## 8. UX Principles

- Visitor understands the identity/value proposition quickly.
- Primary actions are obvious.
- Navigation remains usable during and after motion effects.
- Every interaction has a sensible response.
- Errors are understandable.
- Success states are visible.
- Important information is never hidden behind a gimmick.
- The site remains usable on small screens.

## 9. Non-Goals

At the initial stage, do not add:
- unnecessary authentication
- a database unless a real product requirement emerges
- an always-running dedicated Node/Express server (use Vercel serverless routes instead)
- microservices
- Kubernetes
- complex analytics infrastructure
- fake scalability features
- unnecessary dashboards
- arbitrary UI libraries solely for appearance
- features that increase complexity without improving the portfolio

Engineering complexity must be justified by the actual product.

## 10. Success Criteria

The portfolio is successful when:
- all ShadowFox Beginner requirements are satisfied
- the site feels unmistakably personal
- the design system is coherent
- major interactions work on desktop and mobile
- chatbot behavior is reliable and grounded
- important failures are handled gracefully
- performance and accessibility have been measured
- the repository is understandable by both a human and an AI coding agent
- deployment is stable
- Subhashish can explain the important technical/product decisions

## 11. Future Evolution

After Beginner is stable, use the same engineering discipline for:
- ShadowFox Intermediate client-style landing page
- ShadowFox Advanced case-study assessment
- future portfolio improvements

The portfolio itself is a long-term product and may continue evolving after the internship.
