# Architecture & Product Decisions

**Status:** Living document

## Decision Template

### [Date] — [Decision]
**Context:**  
**Decision:**  
**Why:**  
**Alternatives considered:**  
**Tradeoffs:**  
**Validation:**  

---

## Initial Decisions

### 2026-09-06 — Portfolio is a long-term product
**Decision:** Treat ShadowFox requirements as the minimum acceptance bar rather than the total product scope.

**Why:** The site is intended to remain the owner's real professional portfolio after the internship.

**Tradeoffs:** More work than a minimal internship submission; requires stronger scope management.

---

### 2026-09-06 — AI-assisted implementation
**Decision:** Use Google Antigravity as the development environment and Gemini as the primary AI coding/documentation assistant.

**Why:** The owner wants to learn the purpose and tradeoffs of technologies while using AI to accelerate implementation.

**Tradeoffs:** AI-generated changes must be reviewed, tested, and documented.

---

### 2026-09-06 — Documentation-driven agent workflow
**Decision:** Maintain PRD, design, architecture, content, AI specification, QA, security, and decision documents.

**Why:** Give the coding agent persistent project context and reduce context loss or inconsistent implementation.

**Tradeoffs:** Documentation must be kept current.

---

### 2026-09-06 — Parallax as the primary motion direction
**Decision:** Use selective parallax and cinematic scroll transitions.

**Why:** It matches the desired visual identity while still allowing normal content structure.

**Tradeoffs:** Motion can hurt performance/accessibility if excessive.

**Constraint:** Respect reduced-motion preferences and protect core usability.

---

### 2026-09-06 — Dragon instead of lion transformation
**Decision:** Replace the earlier lion concept with a dragon transformation.

**Why:** The dragon-warrior visual identity is the chosen creative direction.

**Tradeoffs:** Complex media/animation implementation; requires fallback planning.

---

### 2026-09-06 — Optional Spline
**Decision:** Evaluate Spline as an enhancement rather than a core dependency.

**Why:** 3D can create a signature moment but carries performance and device costs.

---

### 2026-09-06 — Audio is optional and controlled
**Decision:** Music and voice should never make the site unusable or unexpectedly noisy.

**Why:** Respect user experience and browser autoplay restrictions.

---

### 2026-09-06 — No unnecessary backend
**Decision:** Introduce server-side infrastructure only when a real requirement exists, especially for protected AI credentials.

**Why:** Architecture should be proportional to product needs.

---

### 2026-09-06 — Factual source of truth
**Decision:** `docs/CONTENT.md` is authoritative for personal facts.

**Why:** AI must not invent portfolio claims.

---

### 2026-09-06 — Target Deployment Platform: Vercel
**Decision:** Deploy both frontend and serverless API functions to Vercel.

**Why:** Unified deployment workflow, free-tier friendly, zero server maintenance, global edge CDN, and built-in HTTPS/environment variable secrets management.

**Alternatives considered:** Render/Railway with a monolithic Node server, GitHub Pages (cannot host protected server-side secrets).

---

### 2026-09-06 — Backend Architecture: Vercel Serverless Functions (`/api/*`)
**Decision:** Use serverless API endpoints (`/api/chat`, `/api/tts`, `/api/contact`) instead of maintaining an always-running Node/Express server, unless proven insufficient later.

**Why:** Solves the core requirement (protecting private API keys for Gemini, ElevenLabs, and Resend) with minimum infrastructure and zero idle runtime costs.

**Tradeoffs:** Cold starts possible on initial invocation; endpoints must remain lightweight and stateless.

---

### 2026-09-06 — Contact Form Delivery: Server-side Resend Integration
**Decision:** Use a serverless endpoint (`/api/contact`) integrating Resend for transactional email dispatch.

**Why:** Reliable delivery to the owner's inbox without exposing email credentials or spamming direct mailto links.

**Tradeoffs:** Requires `RESEND_API_KEY` configured in Vercel environment variables.

---

### 2026-09-06 — Primary Skills Set: Conservative Baseline Prioritized
**Decision:** Feature the confirmed conservative skill set in the primary UI: Python, Java, C, HTML, CSS, Git, GitHub, Docker, Docker Compose, CI/CD, SQL, SQLite, Google Gemini, API integration. Nginx, Prometheus, and Grafana remain secondary and require explicit owner approval before prominent display.

**Why:** Ensures 100% honesty and alignment with the owner's primary academic and project record.

---

### 2026-09-06 — Dynamic Gemini Flash-Class Model Selection
**Decision:** Avoid hard-coding a static model identifier as a permanent requirement; dynamically use a supported Gemini Flash-class model based on API availability, quota, and suitability at implementation.

**Why:** Gemini models and endpoints evolve rapidly; coupling to a single permanent version creates brittle architecture.

---

### 2026-09-06 — Unified 7-Phase Development Roadmap
**Decision:** Realign the development phases across all docs into a single standard sequence:
- Phase 0: Product Definition / Planning
- Phase 1: Design System + Visual Foundation
- Phase 2: Core Portfolio
- Phase 3: Signature Experience
- Phase 4: Personal AI Assistant
- Phase 5: Production Engineering
- Phase 6: QA + Deployment
- ShadowFox Beginner submission follows Phase 6.

