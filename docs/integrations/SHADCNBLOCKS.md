# ShadcnBlocks Integration Guide

This guide documents the authenticated ShadcnBlocks workflow you enabled and the conventions for integrating blocks into our enterprise architecture.

## What We Set Up

1) Environment
- Added SHADCNBLOCKS_API_KEY to .env.local

2) Registry config
- Updated components.json to use the authenticated ShadcnBlocks registry
- Verified auth (no 401/403) and passed Vercel security checkpoint

3) Component install prototype (Hero187)
- Installed and verified a Hero component using Embla Carousel
- Preserved our local button.tsx and utils.ts when prompted
- Created a demo page at /demo/hero to preview quickly

## Quickstart

1. Ensure the API key is set
```bash
# put your real value in .env.local
export SHADCNBLOCKS_API_KEY={{SHADCNBLOCKS_API_KEY}}
```

2. Install a ShadcnBlocks component
```bash
# example: install and accept changes interactively when prompted
npx shadcn@latest add hero187
```

3. Move to domain and update barrels (required by our architecture)
- Relocate generated file(s) under components/domain/marketing/
- Update components/domain/marketing/index.ts exports
- Conform to naming rules (PascalCase, no numerics in exported symbols)

4. Create or update a page demo
- Place a minimal demo under app/demo/<feature>/page.tsx
- Follow route naming and content conventions

5. Replace placeholder content
- Convert text and imagery to our restaurant/hospitality content
- Replace stock images with local or allowed hosts (see next.config.js images.remotePatterns)
- Prefer <Image /> with allowed hosts or local assets

## Architecture Conventions

- Domain-driven placement: components/domain/<domain>
- Shared primitives under components/shared/* and components/ui/*
- Barrel exports per domain; avoid cross-domain imports
- Naming: PascalCase.tsx for components; no numeric tokens (exceptions: OAuth2, Web3, 2FA)

## Lint, Typecheck, and Validation

Before committing:
```bash
npm run enforce:all
npx tsc -p tsconfig.json --noEmit
npm run lint
```

## Demo Page Pattern Example

```tsx path=null start=null
// app/demo/hero/page.tsx
import { MarketingHero } from '@/components/domain/marketing'

export default function Page() {
  return (
    <div className="container py-12">
      <MarketingHero />
    </div>
  )
}
```

## Notes and Best Practices

- Avoid importing or rendering external image URLs from disallowed hosts. Update next.config.js or use local images.
- When a block includes carousel/media, prefer allowed hosts or local assets, and wrap with relative containers if using Image fill.
- Keep pages thin; encapsulate logic in domain components and lib/*.

## Benefits Recap

- Authenticated registry access with API key
- Fast, professional-grade components with shadcn/ui foundation
- Fits our domain-driven architecture with a repeatable workflow
- Scaling path: import → adapt to domain → brand → demo → integrate

