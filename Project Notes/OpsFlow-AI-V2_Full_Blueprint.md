---
title: OpsFlow AI V2 Website Blueprint (Active MDX Draft)
status: draft
---

import { Callout } from "@/components/ui/callout"

# ⚡ OpsFlow AI V2 — Pages & Rebuild Blueprint

<Callout>
This is an **active MDX draft** for rebuilding **OpsFlow AI V2** using **Next.js 15, React 19, Tailwind 4, shadcn/ui, and shadcnblocks**. It acts as a living reference for developers. Replace `TODO:` markers with real code, integrations, and data.
</Callout>

---

## 🏠 HOME (Landing Page)

- **Hero Block** → `HeroSection.tsx`: Gradient backgrounds, animated elements, CTA.
- **Logos Block** → Logos2
- **Feature Block** → Feature261
- **Stats Block** → Stats9
- **Testimonial Block** → Testimonial3
- **Cta Block** → Cta26
- **Footer Block** → Footer13

---

## 📦 PRODUCT

### Features Page
- Hero218
- Feature249
- Feature202 (Bento layout)
- Stats12
- Cta18

### Demo Page (`DemoTestPage.tsx`)
- Hero222
- Interactive demo environment (manager, bartender, kitchen roles)
  - Real-time metrics
  - Alerts
  - Guided tours
  - Mock data highlights (TODO)
- Feature186
- Cta18

### Integrations Page
- Hero232
- Hero219 (Integration showcase)
- Logos2
- Cta18

### HACCP Compliance (`TemperatureMonitoringPage.tsx`)
- Hero183
- Feature170: Real-time monitoring, IoT sensor data, alerts, analytics
- Stats1
- Testimonial28
- Cta18

### Audit Tools (`AuditSystemPage.tsx`)
- Hero201
- Feature251: Hospitality audits, compliance, corrective actions, dashboard
- Cta18

### Reporting Page
- Hero218
- Stats15
- Feature237
- Cta18

---

## 🎯 SOLUTIONS

### Restaurants (`RestaurantShowcase.tsx`)
- Hero196
- Feature215: AI-powered operations tools, temp monitors, staff metrics, gamification
- Testimonial20
- Stats10
- Cta17

### Bars & Nightlife
- Hero195
- Feature242
- Testimonial20
- Cta17

### Coffee Shops
- Hero206
- Feature227
- Testimonial20
- Cta17

### Hotels
- Hero196
- Feature205
- Testimonial20
- Cta17

### Restaurant Owners
- Hero111
- Feature243
- Testimonial12
- Cta17

### Operations Managers (`OperationsMainPage.tsx`)
- Hero183
- Feature176: Multi-location operational metrics, filters, compliance scores, quick actions
- Testimonial12
- Cta17

### Kitchen Staff
- Hero187
- Feature184
- Testimonial20
- Cta17

### Front of House
- Hero186
- Feature186
- Testimonial12
- Cta17

---

## 💰 PRICING

- Hero159
- Pricing32 & Pricing33
- Feature195
- Faq7
- Cta15

---

## 📚 RESOURCES

Pages include:
- Help Center
- Documentation
- Contact Support
- Blog
- Case Studies
- Templates

Each page uses standard **Hero + Content Blocks** from shadcnblocks.

---

## 🏢 COMPANY

### About Us
- Hero38
- About1
- Team7
- Timeline5
- Cta30

### Other Pages
- **Enterprise** (`EnterpriseShowcase.tsx`): MFA, integrations, mobile support.
- **Settings** (`SettingsMainPage.tsx`): Theme, account, security, notifications.
- **Privacy Policy** (`PrivacyPolicyPage.tsx`): Data collection, GDPR, user rights.
- **Contact + Careers** pages.

---

## 🔧 Project Setup & Dev Protocols

### Project Setup
- Scalar Next.js template (Next.js 15, React 19, Tailwind 4)
- App Router with MDX support
- shadcn/ui + shadcnblocks integration

### Authentication & Multi-Tenant
- Clerk integration (orgs, roles, onboarding)
- PostgreSQL multi-tenant schema
- Prisma ORM (row-level security)

### Hospitality Dashboards
- Admin, Manager, Team Member pages
- Role-specific data and interactions

### HACCP & IoT Sensors
- Sensor schema + Bluetooth device integration (TODO)
- Real-time alerts & corrective actions
- HACCPReport component with PDF/Email export

### Best Practices
- Pre-change grep for duplication
- Tailwind + shadcn conventions
- Accessibility with ARIA
- Env management via `.env.local`
- Deploy on Vercel (NEXT_PUBLIC vars)

---

## 📅 Development Timeline (V2)

- **Week 1:** Setup Scalar template, Clerk, dashboards skeleton, sensor research
- **Week 2:** Build Bluetooth sensor UI, integrate DB, dashboards MVP
- **Week 3:** Test sensor workflows, add HACCP reporting, refine UI
- **Week 4:** Pilot rollout, bugfix, optimize, prep docs + marketing

---

<Callout type="success">
OpsFlow AI V2 rebuild is scaffolded in **MDX format** for Next.js. Use this doc as a dev blueprint to quickly spin up pages and integrate hospitality AI workflows.
</Callout>
