# Opsflow-nextjs

## Project Standards
- Day‑1 SaaS Standard: docs/SAAS-FILE-STRUCTURE-STANDARD.md (symlink)
- Enterprise File Structure (this repo): ENTERPRISE-FILE-STRUCTURE.md
 - Start here: PROJECT-STANDARDS.md
 - Agents/Humans quick guide: AGENTS.md

## Guardrails
- Dependency health: `npm run deps:cruise` (writes `depcruise.json`)
- Filename policy (no digits in component filenames): `npm run enforce:filenames`
- Both: `npm run enforce:all`

## Contributing
See CONTRIBUTING.md for naming, barrels, and import rules.
