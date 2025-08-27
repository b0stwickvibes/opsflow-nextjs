# OpsFlow AI — Claude Coding Protocol (Stripe-Level Quality)

**Purpose:** Establish a strict, repeatable protocol for Claude (and all contributors) to debug, replace, create, or enhance code only in ways that move the product toward a premium Stripe.com-level experience: pixel-perfect UI, consistent design tokens, robust tests, and production reliability.

---

## 17) Scaler Template Integration Safety (NEW - Post-Disaster Protocol)

### Pre-Integration Checklist
- [ ] Current layout system analyzed (check app/layout.tsx)
- [ ] Existing components tested and working
- [ ] Mobile viewport (375px) tested
- [ ] No horizontal scroll verified

### NEVER Copy These Scaler Patterns:
- ❌ `bordered-div-padding` with viewport extensions
- ❌ `border-x` classes beyond container width
- ❌ Absolute positioned overflow elements
- ❌ Full-width layouts without container awareness
- ❌ Custom CSS conflicting with global tokens

### ALWAYS Use OpsFlow Patterns:
- ✅ `container mx-auto px-4 sm:px-6` for containment
- ✅ Existing Button component with proper variants
- ✅ Responsive grids: `sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4`
- ✅ `overflow-x-hidden` to prevent horizontal scroll
- ✅ Global design tokens only (`text-primary`, `bg-muted`)

### Component Creation Template:
```typescript
'use client';

import { useEffect } from 'react';
import { registerComponentLayout } from '@/lib/style-system/layout-differentiation';

export function NewRestaurantComponent() {
  useEffect(() => {
    registerComponentLayout('NewRestaurantComponent', 'marketing');
  }, []);

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Content ALWAYS within container */}
      </div>
    </section>
  );
}
```

### Mandatory Testing for Each Component:
1. Mobile (375px) - No horizontal scroll
2. Tablet (768px) - Proper responsive layout
3. Desktop (1200px+) - Full feature display
4. Navbar functionality preserved
5. Build passes without errors
6. Component auditor passes all checks

### Emergency Rollback Protocol:
If ANY component breaks layout:
1. Immediate revert to last working state
2. Isolate problem - test component separately
3. Apply safety template - rebuild using safe patterns
4. Progressive re-integration - add features incrementally

---

## 1) Non-Negotiables ("Golden Standard")

- **Uniform styling**: Use global tokens for color, spacing, radii, shadows, z-index, and typography. No inline styles or ad-hoc hex values.
- **Component discipline**: Prefer Shadcn/UI components; extend via local wrappers only. Do not fork styles per page.
- **Accessibility**: Meet WCAG AA; keyboard navigation first-class; proper roles, labels, focus order, and visible focus states.
- **Performance budgets**: TTI < 2s on modern laptop, LCP < 2.5s on 3G Fast, CLS < 0.1. Avoid layout shift; lazy-load heavy assets.
- **Observability**: Meaningful logs, metrics, error boundaries with user-friendly states; no silent failures.
- **Security**: Respect auth boundaries, never log secrets or PII; validate inputs server-side; follow least privilege.
- **Docs & tests**: Merge requires updated docs + tests; no green tests → no merge.

---

## 2) Decision Tree — Replace, Refactor, or Create

### Bug or gap detected?

**File exists?**
- **Yes** → Refactor if style/quality inconsistent; Replace only if architecture prevents compliance with the Golden Standard.
- **No** → Create the file (see §5 Scaffolding).

### Enhancement request?
Draft spec → confirm UX, tokens, states, errors → implement → test → document.

**Always leave codebase more uniform than you found it.**

---

## 3) Debugging Protocol (Before Any Change)

1. **Reproduce**: Capture exact steps, inputs, env, expected vs actual.
2. **Isolate**: Min repro; disable non-essentials; confirm root cause.
3. **Trace**: Add temporary logging/console only in local dev; remove before commit.
4. **Hypothesize**: List causes; rank by likelihood; test sequentially.
5. **Fix**: Small, reversible commits. Prefer targeted refactors over band-aids.
6. **Verify**: Unit + integration + visual checks + a11y scan.
7. **Regressions**: Add tests that would have caught the issue.

---

## 4) Enhancement Protocol (Premium UX)

1. **Spec first** (one-pager): goals, acceptance criteria, states (idle, loading, success, error, empty), a11y, analytics events.
2. **Design parity**: Match Stripe-level micro-interactions (hover/press/focus), motion curves, and density.
3. **Copy & empty states**: Clear, empathic, actionable. Provide recovery paths.
4. **Internationalization-ready**: No hardcoded strings; wrap copy for future i18n.

---

## 5) File Creation & Scaffolding (If Not Found → Create)

### Naming
- PascalCase.tsx for components; colocate styles and tests.

### Locations (examples; adapt to project structure)
- `src/features/<domain>/components/ComponentName.tsx`
- `src/features/<domain>/pages/PageName.tsx`
- `src/shared/ui/*` for design-system wrappers

### Scaffold template (React + TS + Shadcn)

```typescript
import * as React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/shared/ui/card";

type Props = {
  title: string;
  children?: React.ReactNode;
};

export default function ComponentName({ title, children }: Props) {
  return (
    <Card className="rounded-2xl">
      <CardHeader>
        <CardTitle className="text-balance">{title}</CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}
```

### Test scaffold (Vitest/RTL)

```typescript
import { render, screen } from "@testing-library/react";
import ComponentName from "./ComponentName";

it("renders title", () => {
  render(<ComponentName title="Hello" />);
  expect(screen.getByText("Hello")).toBeInTheDocument();
});
```

---

## 6) Styling Protocol (Stripe-Level Uniformity)

- **Tokens only** (colors, space, radii, shadows, durations). Update tokens in one place; never inline override.
- **Layouts**: Grid-based, responsive, no content jumps; respect spacing scale (4/8/12/16…).
- **Motion**: Subtle, purposeful; use shared duration/easing tokens; prefer opacity/transform.
- **Theming**: Light/Dark parity; contrast safe; no theme-specific hacks.

---

## 7) API/Data Protocol

- Typed clients; strict schemas (Zod/TypeScript) at boundaries.
- Handle: loading, error, empty, partial data; show skeletons.
- No blocking UI for network unless required; optimistic updates where safe.
- Emit analytics events for critical actions.

---

## 8) Error Handling & Empty States

- **Error boundaries**: Friendly message, retry, diagnostic ID.
- **Empty states**: Educative, with primary CTA; never blank screens.

---

## 9) Accessibility & Keyboard Support

- Tab order deterministic; escape closes modals; ARIA where needed.
- Visible focus rings; color contrasts verified; screen-reader labels on controls.
- No keyboard traps; test with keyboard only.

---

## 10) Performance & Bundling

- Code-split by route + heavy components; avoid large vendor spikes.
- Lazy-load images/video; use responsive images.
- Audit bundle weekly; track LCP/CLS/TTI metrics in CI dashboards.

---

## 11) Observability & Logging

- Central logger; levels (debug/info/warn/error); PII-safe.
- Attach correlation/request IDs; include feature flag snapshots.
- Report front-end errors to monitoring (e.g., Sentry) with user consent.

---

## 12) Security

- Authz on server; client hints only.
- Sanitize/validate inputs; hardened dependency policies.
- Secrets in env, never in code; rotate regularly.

---

## 13) Branch, PR, and Review Discipline

### Branches
`feat/*`, `fix/*`, `chore/*`

### PR template must include:
- Problem statement + screenshots/GIFs
- Before/After (visual diffs)
- Tests added/updated
- A11y checklist checked
- Performance notes (if UI heavy)
- Docs updated

### Definition of Done:
- Passes lint + typecheck + tests
- Meets style tokens, motion, a11y, performance budgets
- Docs + story/demo updated
- No TODOs left behind

---

## 14) Claude Execution Prompt (Drop-in)

**ROLE:** You are a senior front-end engineer. Follow the OpsFlow Claude Protocol.

**GOAL:** Deliver Stripe-level UI/UX with uniform styling and strong tests.

**INSTRUCTIONS:**
1. If a referenced file is missing, create it using the scaffold in §5 and place it in the correct folder.
2. When fixing bugs, follow §3 Debugging Protocol. Include a minimal repro and add a regression test.
3. For enhancements, draft a mini-spec and acceptance criteria before coding (states, a11y, analytics).
4. Use only global design tokens and Shadcn primitives; no inline styles or ad-hoc hex codes.
5. Implement loading/error/empty states. Ensure keyboard/a11y compliance.
6. Keep commits small; open a PR with Before/After screenshots, tests, and docs.
7. If anything conflicts with the Golden Standard, propose a refactor rather than patching around it.

---

## 15) Acceptance Criteria Template

- [ ] Follows global tokens; no inline color/spacing overrides.
- [ ] Uses Shadcn primitives; extends via local wrapper (no one-off CSS).
- [ ] States implemented: loading, success, error, empty.
- [ ] Keyboard navigable; ARIA labels present; WCAG AA contrast.
- [ ] LCP/CLS/TTI within budgets; no layout shift.
- [ ] Tests: unit + integration + visual snapshot (critical views).
- [ ] Logs + analytics events wired (if applicable).
- [ ] Docs/story updated; screenshots added to PR.

---

## 16) Escalation & Exceptions

If a standard blocks delivery, document the constraint, propose an alternative that preserves uniformity, and request approval.

**Never merge code that lowers the bar on consistency, accessibility, or performance.**

---

## OpsFlow AI Specific Additions

### Hospitality UX Patterns
- **Touch-First Design**: Minimum 44px touch targets for kitchen tablets
- **Glanceable Data**: Critical metrics visible without scrolling
- **Error Recovery**: Always provide path back to main workflow
- **Multi-Language Ready**: Wrap all user-facing strings for i18n

### Scale-Specific Performance Budgets
- **Multi-tenant**: Query response < 100ms (thousands of orgs)
- **Mobile Kitchen**: Works on 3G with 2GB RAM devices
- **Offline-First**: Core tasks functional without network
- **Real-time Updates**: WebSocket reconnection with exponential backoff

### API Integration Standards
- **Clerk Auth**: Always pass org context in headers (`x-org-id`)
- **Error Handling**: Map API errors to user-friendly messages
- **Optimistic Updates**: For task completion, status changes
- **Data Validation**: Zod schemas at all API boundaries

### Component Standards
- **Loading States**: Use Shadcn skeleton components
- **Empty States**: Include relevant CTA and helpful messaging
- **Error Boundaries**: Show fallback UI with retry option
- **Form Validation**: Real-time validation with clear error messages

---

## Quick Reference Card

### Common Claude Commands
```
Follow OpsFlow Claude Protocol:
✅ Global tokens only (no inline styles)
✅ Shadcn primitives + local wrappers
✅ Loading/error/empty states
✅ Keyboard accessible + ARIA labels
✅ Tests + docs updated
```

### File Creation Checklist
```
1. Use PascalCase.tsx naming
2. Place in correct feature folder
3. Start with scaffold template
4. Add PropTypes/TypeScript interfaces
5. Include accessibility attributes
6. Write corresponding test file
```

### Quality Gate Checklist
```
- [ ] No console.log or TODO comments
- [ ] All imports organized and used
- [ ] TypeScript strict mode compliance
- [ ] Responsive design (mobile-first)
- [ ] Dark/light theme support
- [ ] Error states handled gracefully
```

---

*Version: 1.0 | Last Updated: [Current Date] | For: OpsFlow AI Development Team*