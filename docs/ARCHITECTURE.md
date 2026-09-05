# System Architecture

**Status:** Locked for Phase 0 / v0.2  
**Project:** Subhashish — Personal Developer Portfolio

---

## 1. Architecture Philosophy

This portfolio is a real long-term product.

The system should be:
- visually ambitious
- maintainable
- performant
- accessible
- secure where external services are involved
- easy for an AI coding agent to understand
- simple where simplicity is the correct engineering decision

**Rule:** Every technology and dependency must solve a real problem.

Do not add infrastructure merely to make the stack look advanced.

---

# 2. Technology Stack

## Frontend

### React
Used for:
- component architecture
- reusable UI
- interactive sections
- chatbot UI
- application state where required

### Vite
Used for:
- local development
- production build
- fast bundling/development workflow

### TypeScript
Used for:
- typed component props
- application state
- API contracts
- service responses
- safer integration code

---

## Styling

### Custom CSS / CSS-first design system

The visual language will be implemented with a controlled CSS system rather than relying on a generic component-library aesthetic.

Responsibilities:
- design tokens
- typography
- spacing
- layout
- responsive rules
- surfaces
- borders
- shadows
- visual effects
- transitions

A CSS utility system may be introduced later only if it provides a concrete maintainability benefit.

---

## Motion

### CSS Motion
Use for:
- simple transitions
- hover states
- basic reveals
- lightweight interaction

### GSAP + ScrollTrigger
Use selectively for:
- cinematic section transitions
- parallax
- timeline-based sequences
- advanced scroll-linked motion

**Rule:** Do not use GSAP for interactions that CSS can handle cleanly.

---

## 3D

### Spline

Use as an optional visual enhancement.

Potential roles:
- hero visual
- atmospheric background
- selected project visual
- transition scene

The core portfolio must remain functional if Spline is unavailable.

---

## Backend / Serverless Layer

### Vercel Serverless Functions (Node.js + TypeScript)

The backend layer is implemented as serverless API routes under `/api/*` on Vercel rather than an always-running Node/Express server, unless a later requirement proves this insufficient.

Responsibilities:
- AI gateway (`/api/chat`)
- protected external API calls (Gemini, ElevenLabs, Resend)
- contact form email delivery (`/api/contact` using Resend)
- input validation and sanitization
- request constraints and abuse control
- provider error handling
- optional voice-generation orchestration (`/api/tts`)

The backend exists strictly where server-side secret handling and external service orchestration are required.

---

# 3. External Services

## Gemini

Primary LLM:
- A currently supported Google Gemini Flash-class model suitable for conversational and reasoning workloads.
- Model selection is determined dynamically at implementation time based on the owner's API access, quota, availability, and task suitability, rather than hardcoding a permanent version into the architecture.

Use:
- portfolio chatbot reasoning
- natural-language responses
- grounded answers strictly from approved portfolio information (`docs/CONTENT.md`)

Do not expose the provider key in client-side code.

---

## ElevenLabs

Use:
- text-to-speech for the portfolio assistant
- approved voice output

Voice is optional at runtime.

Text responses must continue to work when voice generation fails.

---

## Resend

Use:
- transactional email delivery for the contact form via the serverless `/api/contact` route.

The Resend API key is kept server-side in Vercel environment variables.

---

## Spline

Use:
- interactive 3D visuals only where they materially improve the experience

---

# 4. Runtime Architecture

```text
                         VISITOR
                            |
                            v
                 +--------------------+
                 |   React Frontend   |
                 |  Vite + TS on CDN  |
                 +---------+----------+
                            |
           +----------------+----------------+
           |                |                |
           v                v                v
        CONTENT           MOTION        API REQUESTS
           |                |                |
           |          CSS / GSAP             |
           |                |                v
           |             Spline    +---------------------+
           |                       | Vercel Serverless   |
           |                       | API Routes (/api/*) |
           |                       +----------+----------+
           |                                  |
           |            +---------------------+---------------------+
           |            |                     |                     |
           v            v                     v                     v
     Portfolio UI     Gemini              ElevenLabs             Resend
                        |                     |                     |
                        v                     v                     v
                 grounded text          optional audio         email dispatch
                        |                     |
                        +----------+----------+
                                   |
                                   v
                                Visitor
```

---

# 5. Frontend Architecture

Proposed logical structure:

```text
src/
├── components/
├── sections/
├── animations/
├── hooks/
├── lib/
├── services/
├── styles/
├── types/
├── App.tsx
└── main.tsx
```

### `components/`
Reusable interface elements:
- buttons
- navigation
- cards
- chatbot controls
- audio controls
- reusable UI primitives

### `sections/`
Major portfolio sections:
- hero
- about
- experience
- skills
- projects
- engineering mindset
- chatbot
- contact
- footer

### `animations/`
Motion-specific code:
- parallax configuration
- GSAP timelines
- reusable motion utilities

### `hooks/`
Reusable React logic when repeated state/effect behavior justifies a hook.

### `lib/`
Small framework-independent utilities.

### `services/`
API/service clients:
- chatbot API
- optional voice API integration

### `styles/`
Design system and global styles.

### `types/`
Shared TypeScript types.

---

# 6. Backend / Serverless Architecture

Target structure: Vercel Serverless API routes under `api/`:

```text
api/
├── chat.ts          # AI gateway (Gemini Flash)
├── tts.ts           # Voice orchestration (ElevenLabs)
├── contact.ts       # Contact form email delivery (Resend)
└── _lib/            # Shared server-side helpers, validation schemas, rate limiting
```

### Endpoints
- `POST /api/chat`: Validates visitor question, builds grounded model request using approved portfolio content and persona instructions, calls Gemini Flash model, returns text answer.
- `POST /api/tts`: Validates text, requests speech synthesis from ElevenLabs, returns audio stream/URL. Decoupled from chat so voice failure never breaks text.
- `POST /api/contact`: Validates contact form submission, delivers email via Resend API, returns success/error status.

### Security & Middleware
- Input validation (length constraints, required fields, payload sanitization)
- Basic rate limiting and abuse controls
- Centralized error handling that prevents leakage of provider keys or stack traces

---

# 7. Chatbot Data Flow

```text
Visitor enters question
        |
        v
Frontend validation
        |
        v
POST /api/chat
        |
        v
Server validates request
        |
        +----> request limits / abuse controls
        |
        v
Build grounded model request
        |
        +----> persona rules
        +----> approved portfolio content
        |
        v
Gemini
        |
        v
Validated response
        |
        +--------------------+
        |                    |
        v                    v
Display text          Optional TTS request
                             |
                             v
                         ElevenLabs
                             |
                             v
                          Play audio
```

---

# 8. Knowledge Architecture

The chatbot uses two separate sources:

### Facts
`docs/CONTENT.md`

### Behavior/persona
`docs/AI_SPEC.md`

This separation is deliberate.

```text
CONTENT
   =
"What is true?"

AI_SPEC
   =
"How should it be said?"
```

The model may summarize or rephrase approved facts.

It must not treat its general world knowledge as evidence about the owner.

---

# 9. Dragon Transformation Architecture

The intro experience is an enhancement layered over the core site.

Conceptual flow:

```text
Initial load
    |
    v
Loading / preflight
    |
    v
Owner portrait
    |
    v
Dragon transformation sequence
    |
    +----> visual effect
    +----> optional roar
    |
    v
Transition
    |
    v
Main portfolio
```

Requirements:
- do not prevent access to content indefinitely
- provide a fallback
- support reduced-motion preferences
- prevent unnecessary repeated asset loading
- handle media failure gracefully

---

# 10. Audio Architecture

### Background music

```text
User sees portfolio
      |
      v
Audio control available
      |
      v
User enables sound
      |
      v
Music playback
```

Rules:
- no unexpected loud autoplay
- visible play/pause/mute controls
- gracefully handle browsers that restrict autoplay
- stop/reduce playback when appropriate

### Dragon sound

Play only as part of the intentional transformation experience and only when browser/user permissions allow.

### Chatbot voice

Audio is generated only when requested/appropriate.

---

# 11. Performance Architecture

High-cost media is treated as non-core.

Priority order:

```text
HTML/content
   >
critical CSS/UI
   >
essential JS
   >
motion
   >
3D
   >
nonessential audio
```

Strategies:
- compressed images
- modern image formats where appropriate
- lazy/deferred loading
- code splitting where justified
- avoid unnecessary animation calculations
- defer Spline until needed
- avoid unnecessary third-party scripts

---

# 12. Responsive Architecture

The experience is designed intentionally for:

```text
Desktop
Tablet
Mobile
```

Not simply desktop CSS scaled down.

Mobile may use:
- simplified motion
- reduced 3D
- altered section composition
- different navigation
- different interaction density

---

# 13. Accessibility Architecture

Core content cannot depend on visual effects.

Requirements:
- semantic HTML
- keyboard-accessible controls
- visible focus states
- accessible names
- labelled forms
- useful alt text
- sufficient contrast
- reduced-motion support

Optional enhancements must degrade without destroying access to information.

---

# 14. Security Architecture

Secrets stay server-side.

```text
Frontend
   |
   | public request
   v
Backend
   |
   | secret credential
   v
External provider
```

Never:

```text
Frontend
   |
   +---- exposed API key ----> provider
```

User-controlled chatbot/contact input is untrusted.

Apply:
- length limits
- validation
- safe rendering
- request limits
- provider error handling

---

# 15. Reliability / Failure Model

## Gemini unavailable
- show error state
- preserve previous messages
- allow retry
- optionally provide static navigation shortcuts

## ElevenLabs unavailable
- retain text answer
- show voice failure discreetly

## Spline unavailable
- show fallback visual

## Music unavailable
- continue site silently

## Dragon animation unavailable
- continue directly to the main portfolio

## Contact submission fails
- show understandable error
- do not lose entered data when practical

---

# 16. Deployment Architecture

Target production platform: **Vercel**

```text
GitHub
   |
   v
Vercel CI/CD Build
   |
   +---------------------------------------+
   |                                       |
   v                                       v
Vercel Edge Network / CDN           Vercel Serverless Functions
(React + Vite static bundle)        (/api/chat, /api/tts, /api/contact)
   |                                       |
   |                                       +----> Gemini API
   |                                       +----> ElevenLabs API
   |                                       +----> Resend API
   v
Public Portfolio URL (HTTPS)
```

Key characteristics:
- Unified repository deployment without maintaining a separate always-running server.
- Built-in HTTPS, edge caching, and global CDN distribution.
- Zero idle hosting costs on free tier.
- Seamless environment variable management for production secrets (`GEMINI_API_KEY`, `ELEVENLABS_API_KEY`, `RESEND_API_KEY`).

---

# 17. Environment Configuration

Secrets and environment configurations are managed via Vercel Project Settings in production and `.env.local` for local development.

Required environment variables:

```text
GEMINI_API_KEY
ELEVENLABS_API_KEY
RESEND_API_KEY
```

Never commit `.env` or `.env.local` containing secrets.

A public `.env.example` documents required variable names without values.

---

# 18. Observability

For the first production version:
- browser console checks
- deployment logs
- API/provider errors
- basic request/error logging
- Lighthouse audits

Do not build a Prometheus/Grafana-style observability stack unless the product later has a real reason to need it.

---

# 19. Scaling Philosophy

The current portfolio is not expected to require:
- a database cluster
- microservices
- Redis
- Kubernetes
- distributed tracing

Scale only when a concrete bottleneck exists.

The engineering objective is:
**appropriate architecture, not maximum infrastructure.**

---

# 20. Architectural Quality Gate

Before a major feature is accepted, ask:

1. Does it provide real user value?
2. Is the implementation appropriate to the feature?
3. Does it preserve responsive behavior?
4. Does it preserve accessibility?
5. What is the performance cost?
6. What happens when it fails?
7. Are secrets protected?
8. Can another developer/AI agent understand the implementation?
9. Does the feature justify its dependencies?
