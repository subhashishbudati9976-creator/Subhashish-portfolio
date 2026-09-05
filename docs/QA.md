# Quality Assurance Plan

**Status:** Draft v0.1

## 1. Functional Tests

### Navigation
- [ ] Every nav link points to the correct destination.
- [ ] Mobile menu opens/closes correctly.
- [ ] Current/active state is understandable if used.
- [ ] Keyboard users can navigate controls.

### Hero
- [ ] Primary CTA works.
- [ ] Secondary CTA works.
- [ ] Animation does not block content.
- [ ] Dragon transition has a fallback.

### Projects
- [ ] Project titles/descriptions are accurate.
- [ ] GitHub links work.
- [ ] Live links work.
- [ ] Images load correctly.

### Contact
- [ ] Required fields are validated.
- [ ] Invalid email is rejected.
- [ ] Error messages are clear.
- [ ] Success state is visible.
- [ ] Submission failure is handled gracefully without losing form inputs.
- [ ] Serverless `/api/contact` endpoint securely dispatches email via Resend.


### Chatbot
- [ ] Common questions receive correct answers.
- [ ] Loading state is visible.
- [ ] Errors are recoverable.
- [ ] Unknown facts are not fabricated.
- [ ] Voice can fail without breaking text.
- [ ] Long conversations do not break the UI.

## 2. Responsive Tests

Test at representative:
- desktop viewport
- tablet viewport
- mobile viewport

Check:
- no horizontal overflow
- navigation
- typography
- project cards
- forms
- chatbot
- 3D/media fallbacks
- buttons/targets

## 3. Accessibility

- [ ] semantic headings
- [ ] labels on form controls
- [ ] meaningful alt text
- [ ] keyboard navigation
- [ ] visible focus states
- [ ] sufficient contrast
- [ ] reduced-motion behavior
- [ ] accessible names for icon buttons

## 4. Performance

Measure:
- Lighthouse
- loading performance
- image weight
- animation smoothness
- unnecessary JavaScript
- third-party script impact

Do not optimize based solely on scores; identify the actual bottleneck.

## 5. SEO

Check:
- title
- meta description
- canonical strategy if needed
- Open Graph metadata
- favicon
- robots.txt if appropriate
- sitemap if appropriate
- semantic structure

## 6. Reliability

Test:
- AI provider unavailable
- voice provider unavailable
- slow network
- missing image
- invalid form
- broken navigation target
- 404
- third-party timeout

## 7. Security

Check:
- [ ] No secrets in client bundle (`GEMINI_API_KEY`, `ELEVENLABS_API_KEY`, `RESEND_API_KEY` stored exclusively in Vercel environment variables)
- [ ] Environment variables used correctly via `/api/*` serverless routes
- [ ] User input validated and sanitized (chat and contact forms)
- [ ] External request boundaries understood
- [ ] Rate/abuse controls applied to serverless functions

## 8. Release Gate

Before production release:
- [ ] all ShadowFox Beginner requirements complete
- [ ] critical QA cases pass
- [ ] Vercel production deployment verified
- [ ] links verified
- [ ] mobile checked
- [ ] accessibility checked
- [ ] performance reviewed
- [ ] content approved by owner
