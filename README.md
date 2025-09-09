# Opsflow-nextjs

## Project Standards
- Day‑1 SaaS Standard: docs/SAAS-FILE-STRUCTURE-STANDARD.md (symlink)
- Enterprise File Structure (this repo): ENTERPRISE-FILE-STRUCTURE.md
 - Start here: PROJECT-STANDARDS.md
 - Agents/Humans quick guide: docs/ai/AGENTS.md
 - AI Chatbot implementation: docs/AI-CHATBOT-NEXTJS.md
 - Additional AI context: docs/ai/

## Guardrails
- Dependency health: `npm run deps:cruise` (writes `depcruise.json`)
- Filename policy (no digits in component filenames): `npm run enforce:filenames`
- Both: `npm run enforce:all`

## Ask AI / Chatbot Quickstart
- Copy `.env.example` to `.env.local`
- Set AI provider:
  - `AI_PROVIDER=openai` and `OPENAI_API_KEY=...`
  - or `AI_PROVIDER=anthropic` and `ANTHROPIC_API_KEY=...`
- Optional (Vercel AI Gateway on non-Vercel runs): `AI_GATEWAY_API_KEY=...`
- Start dev: `npm install && npm run dev`
- Open any docs page under `/docs/*` and click “Ask AI” in the header
- See full guide: `docs/AI-CHATBOT-NEXTJS.md`

## Contributing
See CONTRIBUTING.md for naming, barrels, and import rules.
