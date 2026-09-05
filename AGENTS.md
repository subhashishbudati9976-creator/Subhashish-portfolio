# AI Coding Agent Instructions

## Project Identity

This repository is the personal portfolio of Subhashish.

It is a real long-term product, not merely an internship demo.

## Source of Truth

Before making major changes, read:
- `docs/PRD.md`
- `docs/DESIGN.md`
- `docs/ARCHITECTURE.md`
- `docs/CONTENT.md`
- `docs/AI_SPEC.md`
- `docs/DEVELOPMENT_PLAN.md`
- `docs/DECISIONS.md`
- `docs/QA.md`
- `docs/SECURITY.md`

## Non-Negotiable Rules

1. Do not invent personal facts.
2. Do not invent project details.
3. Do not add libraries without a reason.
4. Do not perform unrelated refactors.
5. Preserve existing design-system decisions.
6. Keep responsive behavior intentional.
7. Respect reduced-motion preferences.
8. Never expose private API credentials.
9. Keep core content usable if optional effects fail.
10. Test changes before declaring them complete.

## Change Workflow

Before a major implementation:
1. State the goal.
2. Identify affected files.
3. Explain the approach.
4. Note important tradeoffs.

After implementation:
1. Run the project.
2. Inspect actual behavior.
3. Check console/network errors.
4. Test relevant responsive states.
5. Update documentation if architecture or decisions changed.

## Code Quality

Prefer:
- clear names
- small reusable components/functions where useful
- minimal duplication
- accessible HTML
- maintainable CSS
- predictable state
- defensive error handling

Avoid:
- giant monolithic files
- magic numbers without explanation
- duplicate components with tiny differences
- premature abstractions

## Visual Quality

Do not:
- add random gradients
- animate everything
- copy a component-library aesthetic without adaptation
- reduce usability for visual spectacle

The visual target is dark, cinematic, dragon-warrior inspired, editorial, and premium.

## AI Chatbot

Treat `docs/CONTENT.md` as the factual authority.

The chatbot may rephrase approved facts but must not fabricate unsupported information.

## Performance

Do not add expensive animation/3D/media without considering:
- load cost
- runtime cost
- mobile
- fallback
- reduced motion

## Security

Never commit secrets.

Use approved environment-variable patterns and server-side secret handling where applicable.
