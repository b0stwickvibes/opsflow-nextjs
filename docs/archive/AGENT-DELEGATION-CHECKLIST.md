# Agent Delegation Checklist

## ⚠️ CRITICAL: Use This Before ANY Agent Delegation

### Mandatory Agent Prompt Template

```
ENTERPRISE REQUIREMENTS (NON-NEGOTIABLE):
✅ Export: Named exports only (export { ComponentName })
✅ Imports: @/lib/hooks/restaurant-pages for all analytics
✅ Structure: Follow ENTERPRISE-FILE-STRUCTURE.md patterns
✅ TypeScript: Full interfaces and type safety
✅ Content: Restaurant operations terminology integration
✅ Verification: Run `npx tsc --noEmit` before completion report

PROJECT CONTEXT:
- Working on: opsflow-nextjs v3 enterprise SaaS platform
- Standards: Read PROJECT-STANDARDS.md and CONTRIBUTING.md first
- Domain: Restaurant operations (HACCP, food safety, multi-location)
- Architecture: Domain-driven component structure

VERIFICATION REQUIREMENTS:
- Process max 10 components per batch
- TypeScript compilation check after each batch
- Export pattern audit before declaring done
- Report specific files processed and verification results
```

### Pre-Delegation Checklist

- [ ] Agent prompt includes ALL enterprise requirements above
- [ ] Batch size limited to ≤10 items maximum
- [ ] Verification protocol specified in prompt
- [ ] Project context clearly defined
- [ ] Standards documents referenced

### Post-Delegation Checklist

- [ ] Run `npx tsc --noEmit` immediately
- [ ] Verify export patterns manually
- [ ] Check import paths compliance
- [ ] Audit file structure placement
- [ ] Test sample component integration

## 🚫 NEVER DO:
- Rush agent processing under time pressure
- Assume agents inherit project context
- Skip verification between batches
- Declare completion without TypeScript check

## ✅ LEARNED FROM OPSFLOW INCIDENT:
The "self-audit saved the project" scenario where 52 components had systematic compliance violations that would have broken Phase 4 deployment.

---
**Use this checklist for ALL future projects, not just opsflow-nextjs.**