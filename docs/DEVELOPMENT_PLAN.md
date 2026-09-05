# Development Plan

**Status:** Draft v0.1  
**Time constraint:** One month  
**Primary strategy:** Ship a working product early, then harden and enhance it.

## Phase 0 — Product Definition / Planning
**Target:** Day 1

Deliver:
- PRD
- DESIGN
- ARCHITECTURE
- CONTENT
- AI_SPEC
- DEVELOPMENT_PLAN
- DECISIONS
- QA
- SECURITY
- AGENTS.md

Exit condition:
- product direction agreed
- scope controlled
- no unresolved blocking architectural question

## Phase 1 — Design System + Visual Foundation
**Target:** Days 2–4

Build:
- repository setup (Vite + React + TypeScript)
- CSS-first design system & design tokens (colors, typography, spacing, surfaces)
- layout foundation, grid/flex structure, and viewport containers
- shell and responsive navigation structure
- reduced-motion baseline styling

Goal:
A polished, coherent visual foundation and token system established before building content sections.

## Phase 2 — Core Portfolio
**Target:** Days 5–8

Build:
- Hero section with developer positioning
- About section
- Experience section
- Skills section (featuring the primary conservative skillset)
- Selected Projects section with structured cards/links
- Contact section (client validation, form UI, prepared for serverless Resend integration)
- Footer

Goal:
A complete functional portfolio exists before advanced visual effects or external AI services.

## Phase 3 — Signature Experience
**Target:** Days 9–11

Build/refine:
- parallax motion and depth-aware reveals
- GSAP + ScrollTrigger timelines
- dragon transformation sequence with robust fallbacks
- optional Spline 3D proof-of-concept (performance-budget gated)
- audio controls for optional ambient atmosphere (autoplay-safe)
- responsive motion adaptations

Exit condition:
- signature style works without harming usability or small-screen performance

## Phase 4 — Personal AI Assistant
**Target:** Days 12–14

Build:
- chatbot UI (drawer/modal/embedded)
- Vercel serverless function (`/api/chat`)
- Gemini integration using a currently supported Flash-class model
- grounded system prompt based on `docs/CONTENT.md` and `docs/AI_SPEC.md`
- chat state management (submitting, response, error, retry)
- optional ElevenLabs voice output (`/api/tts`) with graceful audio-failure fallback

Exit condition:
- factual grounding strictly enforced
- zero client-side key exposure
- voice can fail without breaking text

## Phase 5 — Production Engineering
**Target:** Days 15–16

Implement/audit:
- semantic HTML and accessibility (ARIA, visible focus, contrast)
- keyboard navigation
- form validation and error/success states (Resend email delivery integration)
- metadata, favicon, Open Graph tags
- image optimization and lazy-loading
- 404 page
- reduced-motion testing
- security review (Vercel env vars, payload sanitization, rate limiting)

## Phase 6 — QA + Deployment
**Target:** Days 17–18

Test:
- desktop, tablet, and mobile viewports
- contact form submission via Resend endpoint
- chatbot grounding and error handling
- audio/visual fallbacks
- Lighthouse performance, accessibility, SEO audits

Deploy:
- production hosting on Vercel (frontend + serverless `/api/*` routes)
- configure production environment variables
- verify final live URL
- update README

## ShadowFox Beginner Submission
**Target:** Immediately following Phase 6

Submit:
- live Vercel portfolio URL
- GitHub repository link
- required submission details

Do not wait until the final week if the required work is already complete.

## Phase 7 — ShadowFox Intermediate
**Target:** Days 17–23

Process:
1. Read requirement brief.
2. Extract requirements.
3. Identify target user.
4. Identify business/conversion goal.
5. Create information architecture.
6. Plan wireframe.
7. Design.
8. Implement.
9. Test.
10. Deploy.
11. Document reasoning.
12. Submit.

## Phase 8 — Advanced Preparation / Assignment
**Target:** Days 24–30

If a case study is provided:
1. Understand problem.
2. Understand user flows.
3. Identify architecture/context.
4. Identify improvement opportunities.
5. Assess technical feasibility.
6. Write case-study response.
7. If shortlisted, inspect provided codebase.
8. Make scoped improvement.
9. Test.
10. Document ownership and reasoning.

## Daily Execution Rhythm

Each feature follows:

```text
Goal
 -> requirement
 -> approach
 -> AI-assisted implementation
 -> local run
 -> inspect
 -> test
 -> fix
 -> document decision
```

## AI Coding Rules

Do not ask the agent to build the entire application blindly.

Prefer small, reviewable increments.

Before major changes:
- read relevant docs
- state proposed approach
- list affected files
- avoid unrelated refactors

After changes:
- run the project
- inspect actual behavior
- test edge cases
- update documentation when architecture changes

## Schedule Protection

If behind schedule:
1. Finish required functionality.
2. Finish production quality.
3. Finish signature features in priority order.
4. Cut optional effects before cutting testing/security/accessibility.
