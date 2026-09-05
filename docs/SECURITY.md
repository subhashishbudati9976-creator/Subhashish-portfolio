# Security & Privacy Plan

**Status:** Draft v0.1

## 1. Core Principle

The portfolio is public-facing. Treat everything public as public and every secret as a secret.

## 2. API Credentials

Never place:
- LLM API keys (`GEMINI_API_KEY`)
- ElevenLabs API keys (`ELEVENLABS_API_KEY`)
- Email delivery credentials (`RESEND_API_KEY`)
- other private service credentials

in frontend source code, client-side bundles, or public repositories.

Use Vercel Project Environment Variables in production and `.env.local` during local development. All calls requiring credentials must originate from serverless API functions under `/api/*`.

## 3. User Input

Chatbot and contact inputs are untrusted.

Apply:
- sensible length limits
- validation
- normalization where needed
- safe rendering
- provider/API request constraints

## 4. AI-Specific Risks

Risks:
- prompt injection
- excessive request usage
- fabricated personal claims
- malicious input
- provider errors

Mitigations:
- constrained system instructions
- approved knowledge source
- response limits
- request limits
- error handling
- never expose internal instructions

## 5. Contact Form

The form must:
- validate on the client for responsive UX
- validate again on the server in the Vercel `/api/contact` serverless handler
- send emails safely using Resend API without exposing credentials or internal recipients to the client
- apply rate/abuse limits to prevent spam
- avoid exposing private infrastructure details in error responses

## 6. Third-Party Services

Track all external services used, for example:
- Gemini (conversational LLM)
- ElevenLabs (optional text-to-speech)
- Resend (transactional contact email delivery)
- Spline (optional 3D visual enhancement)
- Vercel (hosting & serverless API runtime)
- analytics, if later added

For each service record:
- purpose
- data sent
- credential type
- failure behavior
- privacy implications

## 7. Privacy

Do not collect visitor data unless there is a clear reason.

If analytics/cookies are later added:
- document the purpose
- review applicable requirements
- provide the appropriate user controls where needed

## 8. Production Review

Before release:
- inspect environment variables
- inspect built client assets for accidental secrets
- review network calls
- review third-party scripts
- test invalid inputs
- confirm error messages do not reveal sensitive internals
