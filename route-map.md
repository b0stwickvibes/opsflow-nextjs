OpsFlow Route Map (Public vs Protected)

Public Routes
- `/` — Marketing homepage
- `/product/features` — Features showcase
- `/product/demo` — Demo experience (no auth required)
- `/product/integrations` — Integrations overview (if present)
- `/resources/help` — Help Center
- `/resources/templates` — Templates library
- `/resources/case-studies` — Case studies
- `/resources/contact` — Contact Support
- `/pricing` — Pricing page
- Clerk auth routes: `/sign-in`, `/sign-up`, `/sso-callback`, `/oauth`

Protected Routes
- `/dashboard(.*)` — User dashboard
- `/admin(.*)` — Admin console
- `/locations(.*)` — Location management
- `/sensors(.*)` — Sensor management
- `/compliance(.*)` — Compliance center
- `/reports(.*)` — Reporting
- `/settings(.*)` — Account/settings

Middleware Behavior
- Clerk middleware protects only the “Protected Routes” list.
- Auth routes are explicitly bypassed to prevent redirect loops.
- All other routes remain public by default.

Notes
- CTA navigation from public routes should never require auth unless hitting protected pages.
- Demo and resources pages are intentionally public to reduce friction.
