Development Notes

Run locally
- Clean: `rm -rf .next`
- Dev: `NODE_ENV=development npm run dev`
- Build: `npm run build` (lint skipped during build for speed)

Performance tips
- Dynamic imports are used on product pages to reduce initial JS.
- External templates are excluded from TS/lint to keep builds fast.
- Use `ANALYZE=true npm run build` only when profiling bundles.

Clerk route validation
- Public routes: marketing, resources, pricing, demo.
- Auth routes are bypassed in middleware: `/sign-in`, `/sign-up`, `/sso-callback`, `/oauth`.
- Protected routes: `/dashboard(.*)`, `/admin(.*)`, `/locations(.*)`, `/sensors(.*)`, `/compliance(.*)`, `/reports(.*)`, `/settings(.*)`.
- Expected behaviors:
  - Visiting `/sign-in`/`/sign-up` should not loop.
  - Visiting `/dashboard` unauthenticated should redirect to sign-in.
  - Marketing pages remain accessible without auth.

Testing checklist
- Features page: verify full sequence renders quickly; stats animate; reduced-motion honored.
- Demo page: interactive sections mount without hydration warnings.
- Pricing page: billing toggle works; CTA click paths route; ROI calculator validates inputs.

