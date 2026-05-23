# AIHLPR — Content & Build Principles
*Reference for capability page build. Read before writing or shipping any copy / diagram / animation.*

---

## 1. Voice & copy

- **"Enterprise-grade", not "enterprise-only".** AIHLPR serves businesses from ~$10k engagements upward, including SMBs and mid-market. Use:
  - "Enterprise-grade" / "enterprise IT experience" → ✓ (these describe *quality* and *our background*)
  - "Your enterprise" / "for enterprise teams" → ✗ (these *exclude* the mid-market buyer)
  - Default audience terms: *your business*, *your organisation*, *your team*, *your operation*. Use "enterprise" only when the meaning genuinely is enterprise-scale.
- **No em dashes** (— or `&mdash;`). Use commas, full stops, or rewrite the sentence.
- **No negative tone, no complaining, no "horror story" framing.** Don't lead with "Real workflows fail" / "Most AI projects die" / etc. Lead with what holds, what works, what's delivered.
- **Straightforward.** A cold visitor from Google should understand what AIHLPR does within the first paragraph of any capability page.
- **No product-marketing tropes.** Avoid:
  - "Built for safety"
  - "Designed for excellence"
  - "Engineered for trust"
  - "Purpose-built"
  - "Mission-critical"
  - Any "[verb]-for-[abstract noun]" formula
- **No "built".** Period. (Golden rule.)
- **No overused AI-industry vocabulary.** Use these words sparingly, never as filler:
  - audit
  - human in the loop / human review
  - review / approvals (when not specifically warranted)
  - operations / operational (already overused; ration it)
  - production / productionisation
  - built (already banned)
  - guardrails / safety / trust (as abstract claims)
- **We are a services agency, not a product.** Don't oversell capability we haven't delivered for the viewer yet. No "designed for [X]" claims about systems they haven't seen.

## 2. Visual design

- **Stay in touch with the homepage.** Same fonts, type scale, colour tokens, button styles, container widths, spacing rhythm. Capability pages are siblings of the home, not strangers.
- **Allow controlled variation.** Each capability page can break monotony with one signature visual element (e.g. the flow spine on Workflows). One per page. Not several.
- **Use colour consistently.**
  - Each capability gets one accent colour, applied only on its own page.
  - Accent appears in dots, hover states, key lines, active states. Not in backgrounds or large fills.
  - Greys, whites, ink stay from the shared system.

## 3. Animation

- **No LinkedIn / SaaS-marketing animation language.** Banned:
  - Floating cards drifting up on scroll
  - Bouncing pills / chips
  - Spinning isometric boxes
  - Logo marquees with eased acceleration
  - Counter "rolling" numbers
  - Step-by-step "1, 2, 3" reveal animations on a checklist
- **Permitted small motion** (Vercel / Sierra / Linear style):
  - Subtle opacity fade on scroll-into-view (300–500ms, single pass)
  - Gentle hover state transitions on cards / chips (150–220ms)
  - Hairline progress fill on scroll (e.g. the flow spine)
  - Single understated tracer dot along a static diagram path (no glow, no trail)
  - Cursor-following parallax of <8px max amplitude
- **Use motion to communicate, not decorate.** If an animation can be removed without losing meaning, remove it.

## 4. Diagrams & lines

- **Line thickness consistent** — 1px for hairlines, 1.2–1.4px for accented lines. Never thicker without a deliberate reason.
- **No blur, no glow, no bloom on lines.** Crisp vector edges. If a stroke looks fuzzy, fix the SVG (no `filter: blur()`, no large `stroke-width` on small graphics).
- **Dots animating along a path must follow the path exactly.** Use `<animateMotion>` on the literal SVG `<path>` element, not a separate hand-keyed translate. Tracer dot must visibly trace the same geometry the path draws.
- **No floating / drifting tracer dots.** They start at a node, end at a node, and only move along visible lines.
- **Reference: the diagram on the current homepage capabilities section has thick and blurred lines** — do not repeat that. Aim instead for the precision of Linear / Stripe / Vercel diagrams.

## 5. Structure

- **Visitor's first paragraph must answer:** what does AIHLPR do, for whom, and what will they walk away with.
- **No filler sections.** Every section earns its place by answering a specific buyer question.
- **Case sketches use placeholder format until real cases land** — mono labels, anonymised structure. Never fabricate metrics.

## 6. Cross-page consistency

- **Identical sections (How we work / Final CTA / footer) use identical copy** across capability pages.
- **Distinct sections (heroes, sub-services, architecture flavour) are specific to their page** and don't repeat.
- **Sub-services grid uses the same template** on both capability pages: eyebrow → name → 1-line prop → 2 deliverable chips.
