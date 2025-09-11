# Marketing Playbook (OpsFlow)

Use this playbook to keep enterprise-grade polish consistent across all pages and projects.

## Principles
- Contrast pacing: 1–2 hero elements with glow/gradient; everything else calm (outline/ghost).
- Depth via layers: frosted surfaces, soft borders, subtle shadows, masked grids, radial fades.
- Motion hierarchy: hover scale 1.02–1.03 (180–220ms); entrance fade + translateY(8–12px), 280–360ms, smooth easing; respect reduced motion.
- Monochrome-first: logos and illustrations are mono by default; reveal color on hover.

## Guardrails
- Per section: at most 1 ambient/glow element (hero icon or primary KPI).
- Per viewport: no more than 2 ambient glows visible.
- Ambient is for: Hero KPIs, Featured metric, Highlighted integration.
- Outline/Ghost for secondary stats, lists, tables, testimonials, non-primary CTAs.

## Badge taxonomy
- Variants: ambient | outline | ghost | mono
- Energy: subtle | balanced | bold (controls alpha, blur, elevation, motion)

## Where to use what
- Hero blocks: heading gradient, 1 ambient badge/icon max, primary CTA shimmer OK; secondary CTA = outline.
- KPIShowcase / DemoMetrics: one lead metric ambient (emphasis=true), rest outline/ghost.
- MetricsDashboard: group lead stat ambient, others outline; mono for footnotes.
- Feature tiles/grids: 6‑up at xl only for tight tiles; otherwise 3–4 up. Ambient only for one highlighted tile.
- Integrations: monochrome logos; hover reveals color; featured partner can use ambient border.
- Pricing: avoid ambient except a single “Most popular” tag; CTAs are high-contrast, not glowing.
- Testimonials/About: no ambient; rely on content, subtle borders/shadows.

## Motion specs
- Hover: scale 1.02–1.03, 180–220ms ease-out; add focus-visible ring for a11y.
- Entrance: fade + translateY(8–12px), 280–360ms, ease-[0.2,0.8,0.2,1]; stagger 40–60ms.
- Reduced motion: disable translate/scale; keep fade-only.

## Variety ideas
- Stat types: lead KPI with sparkline, comparative KPI, ring progress, threshold badge flips after target.
- Contextual deltas: weekly/monthly switch toggles deltas and sparkline palette.
- Featured slot: each stat group can elevate one card to ambient; enforce only one at a time.
- Logo grids: 6‑up mono tiles, hover lifts + reveals color, one featured partner ambient border.
- Micro-layouts: two-row KPIs (3+3), dense 6‑up quick facts, vertical stat stacks with mono dividers.

## Code utilities
See lib/ai/marketingPlaybook.ts for types and helper.

## Page generation workflow
1) Build a blueprint in the Template Catalog (UI Sink → Template Catalog).
2) Copy the blueprint JSON (cart at the top).
3) Generate a page file:
   ```bash
   node scripts/page-blueprinter.mjs --input blueprint.json --output app/solutions/draft/page.tsx
   ```
4) Review and integrate; run:
   ```bash
   npm run enforce:all && npx tsc -p tsconfig.json --noEmit
   ```

