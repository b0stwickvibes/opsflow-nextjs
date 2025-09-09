# AGENTS.md — Working With This Repo (Humans & AI)

- Start with `PROJECT-STANDARDS.md`.
- Follow `ENTERPRISE-FILE-STRUCTURE.md` for this repo’s specifics.
- Use domain barrels for imports: `@/components/domain/<domain>` and shared `@/components/shared/<area>`.
- Do not add numeric tokens to component filenames or symbols (exceptions: OAuth2, Web3, 2FA).
- Keep pages thin; place logic in domains or `lib/*`.
- Before opening or updating a PR:
  - `npm run enforce:all`
  - `npx tsc -p tsconfig.json --noEmit`

Helpful paths
- Day‑1 Standard (symlink): `docs/SAAS-FILE-STRUCTURE-STANDARD.md`
- Repo file structure doc: `ENTERPRISE-FILE-STRUCTURE.md`
- Contributing: `CONTRIBUTING.md`

