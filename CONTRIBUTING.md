# Contributing Guidelines

## Quick Rules
- Use the domain-driven structure under `components/domain/*`; reusable UI goes under `components/shared/*`, primitives under `components/ui/*`.
- Component filenames and symbols use PascalCase; `components/ui/*` and `components/icons/*` filenames are lowercase.
- No numbers in component filenames or symbols. Allowed tokens: OAuth2, Web3, 2FA.
- Prefer named exports for components. Reserve default exports for pages/compositions.
- Import via alias + barrels (e.g., `@/components/domain/product`), avoid deep relative paths.
- Cross-domain imports should go through `shared/*` or `ui/*`.
- Keep pages (`app/*`) as thin compositions without heavy logic.

## Pre‑PR Checklist
- Run `npm run deps:cruise` and ensure no new errors.
- Run `npm run enforce:filenames` (no numeric filenames in components).
- Run `npx tsc -p tsconfig.json --noEmit` (typecheck passes).
- If you add a new domain or shared area, include a barrel `index.ts` with explicit exports.

## References
- Day‑1 SaaS Standard: /Users/devin/XYZcode/Project X Files/SAAS-FILE-STRUCTURE-STANDARD.md
- Repo Enterprise Structure: ENTERPRISE-FILE-STRUCTURE.md

