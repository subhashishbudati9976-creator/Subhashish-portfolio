# Design System & Experience Direction

**Status:** Draft v0.1

## 1. Design North Star

**Dark cinematic dragon-warrior + modern engineering editorial.**

The site should feel like a crafted digital experience rather than a prebuilt developer template.

Desired qualities:
- dramatic
- restrained
- atmospheric
- sharp
- premium
- readable
- technically modern
- personal

## 2. Visual Inspiration

Primary reference:
- user's dragon-warrior visual reference
- parallax portfolio direction
- Kage repository/site reference supplied by the owner:
  https://github.com/kage-core/Kage

The references are inspiration, not templates.

## 3. Color Direction

Initial direction:
- near-black background
- deep navy / indigo secondary surfaces
- cool blue atmospheric tones
- violet/magenta accent
- restrained light text
- one high-contrast action accent

Do not lock exact hex values until the dragon reference is reviewed during the visual-design pass.

## 4. Typography

Direction:
- strong display type for major statements
- highly readable sans-serif for body/UI
- limited type families
- deliberate scale hierarchy

Typography must remain readable on mobile.

## 5. Layout Language

Use:
- generous negative space
- strong vertical rhythm
- asymmetry where useful
- layered sections
- large type
- editorial compositions
- controlled overlap

Avoid:
- excessive cards
- every section looking like a dashboard
- uniform three-column grids everywhere
- ornamental UI with no information value

## 6. Morphism

Glassmorphism or related morphic treatments may be used selectively for:
- navigation
- chatbot panel
- important controls
- selected project panels

Rules:
- preserve text contrast
- avoid excessive blur
- keep the effect subtle enough to remain premium
- do not rely on transparency to communicate structure

## 7. Motion Language

Motion must feel like one coherent system.

### Entrance
- opacity + small displacement
- depth-aware reveal
- avoid aggressive zooms

### Scroll
- selective parallax
- layered movement
- section transitions

### Hover
- small scale/translation
- subtle lighting or border response

### Page/section transitions
- cinematic but short
- never block navigation

### Reduced motion
Respect `prefers-reduced-motion`.

When reduced motion is requested:
- disable/reduce parallax
- remove nonessential looping motion
- keep content and interaction intact

## 8. Dragon Transformation

Concept:
1. Begin with owner's portrait.
2. Establish atmosphere.
3. Transform toward dragon-warrior visual.
4. Use synchronized visual/audio impact.
5. Transition into the main portfolio.

The transformation must be optional/fallback-safe and never make the site unusable.

## 9. Spline / 3D

Use only for a high-value visual moment.

Potential locations:
- hero
- selected project section
- transition/atmospheric background

Do not use 3D merely because it is available.

## 10. Audio

Background music direction:
- dark/phonk-inspired atmosphere
- loopable
- optional
- visible play/pause/mute controls

Default behavior should respect browser autoplay restrictions and avoid surprising users.

Dragon/transformation sound should be synchronized where practical.

Voice chatbot:
- spoken response generated through an approved ElevenLabs voice
- user should be able to choose whether to hear the response

## 11. Navigation

Desktop:
- compact, visually integrated navigation

Mobile:
- explicit menu control
- keyboard/focus accessibility
- closing behavior should be predictable

## 12. Accessibility

Design must account for:
- color contrast
- focus visibility
- keyboard navigation
- form labels
- descriptive image alt text
- motion sensitivity
- readable font sizing
- interactive controls with accessible names

## 13. Responsive Philosophy

Do not design desktop first and then shrink it blindly.

Design three intentional experiences:
- desktop
- tablet
- mobile

Motion intensity and 3D complexity can be reduced on smaller/less capable devices.

## 14. Design Quality Gate

Before implementation is considered visually complete:
- no accidental horizontal scroll
- spacing is consistent
- typography hierarchy is obvious
- animations feel coordinated
- mobile layout looks intentional
- important content remains visible without interaction
- visual effects never overwhelm the content
