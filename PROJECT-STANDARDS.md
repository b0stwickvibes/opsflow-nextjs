# Project Standards — Start Here

- Day‑1 SaaS Standard (symlink): `docs/SAAS-FILE-STRUCTURE-STANDARD.md`
- Enterprise File Structure for this repo: `ENTERPRISE-FILE-STRUCTURE.md`
- Contributing rules & pre‑PR checks: `CONTRIBUTING.md`

Guardrails
- Dependency health: `npm run deps:cruise`
- No numeric component filenames: `npm run enforce:filenames`
- Both: `npm run enforce:all`

Tip for AI agents
- Read this file first, then follow the linked standards.
- Use domain barrels for imports and avoid cross‑domain internals.

