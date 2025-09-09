# OpsFlow Enterprise Development Standards

This project follows strict enterprise development standards with automated quality gates.

## Core Standards (Required Reading)
- **Contributing Guidelines**: @CONTRIBUTING.md
- **Enterprise File Structure**: @ENTERPRISE-FILE-STRUCTURE.md
- **Project Standards Overview**: @PROJECT-STANDARDS.md
- **Agent Delegation Rules**: @AGENT-DELEGATION-CHECKLIST.md
- **Systematic Development Guide**: @SYSTEMATIC-PAGE-DEVELOPMENT-GUIDE.md  
- **Restaurant Operations Framework**: @RESTAURANT-OPERATIONS-SYSTEMATIC-GUIDE.md
- **Enterprise Scalability Audit**: @ENTERPRISE-SCALABILITY-AUDIT.md
- **Safety Protocols**: @SCALER-SAFETY-PROTOCOL.md

## Development Rules Framework
The **WARP.md** file contains comprehensive development guidance: @WARP.md

## 🚨 CRITICAL: Automated Verification System

**ALL component modifications are automatically verified by a PostToolUse hook** that runs `.claude/hooks/verify-component.sh`.

### Quality Gate Behavior
- ✅ **Pass**: Proceed with development
- ❌ **Fail**: Agent blocked, errors fed back to Claude
- **Exit Code 2**: Triggers automatic error feedback and blocking

### What Gets Verified
1. CTA symmetry on paired actions: if two CTAs are adjacent, both should include `.cta-equal` (or equivalent width) unless explicitly exempted.
1. **File Existence**: No .bak files, proper extensions
2. **Naming Conventions**: No numeric tokens (FeatureShowcase2 → FeatureShowcaseCompact)
3. **Export Patterns**: Named exports for components, default for pages  
4. **Import Paths**: Proper path aliases (@/lib/hooks/... not hooks/...)
5. **TypeScript Compilation**: Individual file + project-wide checks
6. **Framework Compliance**: Systematic template patterns for solution pages
7. **Content Validation**: No placeholder content, proper sections

### If Verification Fails
The hook will:
- Block execution with exit code 2
- Feed detailed error messages back to Claude
- Provide specific fix suggestions
- Require all critical issues to be resolved before proceeding

## Batch Size Limits
When processing multiple files:
- **Maximum batch size: 3-5 files at once**
- Process in small batches to catch systematic errors early
- Wait for confirmation before proceeding to next batch
- Use explicit batch control in prompts

## Enterprise Context Rules
1. **Always reference standards documents** using @ imports
2. **Follow domain-driven architecture** from ENTERPRISE-FILE-STRUCTURE.md
3. **Use systematic templates** from SYSTEMATIC-PAGE-DEVELOPMENT-GUIDE.md
4. **Maintain enterprise compliance** per PROJECT-STANDARDS.md
5. **Apply restaurant operations focus** from RESTAURANT-OPERATIONS-SYSTEMATIC-GUIDE.md

## 🚨 CRITICAL: Template Component Library Usage

### **57 Processed Template Components Available**
- **Location**: `/templates/shadcn-components/processed/`
- **9+ Hero Types**: ImpactHero, WorkflowHero, SplitScreenHero, CarouselHero, ProductivityHero, BillingHero, etc.
- **14+ Feature Layouts**: FeatureMatrix, FeatureSplit, FeatureBento, FeatureTimeline, FeatureAccordion, FeatureComparison, etc.  
- **Multiple Stats/CTA Options**: KPIShowcase, MetricsDashboard, StatsDisplay, CallToAction, DemoRequest, etc.

### **🎨 VISUAL SELECTION STRATEGY**
**MANDATORY**: Read `VISUAL-COMPONENT-GUIDE.md` before selecting components
- Shows visual differences between components
- Explains component "personalities" and when to use each
- Provides industry-specific selection strategies
- Includes decision trees for avoiding duplicate layouts

### **MANDATORY Page Differentiation Rules**
- ❌ **NEVER copy restaurant page structure for other industries**
- ✅ **ALWAYS use different template combinations per industry**
- ✅ **Select templates based on industry focus** (speed/compliance/ROI/etc.)
- ✅ **Create unique visual hierarchy** for each page type
- ✅ **Match layout to industry decision-making patterns**

### **Import Pattern**
```typescript
// CORRECT: Use diverse templates per industry
import { WorkflowHero } from '@/templates/shadcn-components/processed/heroes';
import { FeatureBento, FeatureTimeline } from '@/templates/shadcn-components/processed/features';
import { KPIShowcase } from '@/templates/shadcn-components/processed/stats';

// WRONG: Creating custom components that duplicate existing templates
import { CoffeeHero, CoffeeFeatures } from '@/components/domain/industries/coffee';
```

### **Quality Gate: Template Diversity Check**
Before any page is complete, verify:
- [ ] Different hero type than other industry pages
- [ ] Different feature layout combination
- [ ] Different stats/metrics presentation  
- [ ] Layout reflects industry-specific workflow

## Quality Assurance Protocol
Reference the **QA-PROTOCOL.md** for detailed testing procedures: @QA-PROTOCOL.md

## Additional Context
- **Route Planning**: @route-map.md
- **Enterprise Implementation Status**: @ENTERPRISE-IMPLEMENTATION-STATUS.md  
- **Development Guidelines**: @DEV.md
- **AI Agent Guidelines**: @AGENTS.md

---

**IMPORTANT**: If you receive a 'Verification failed' error, you MUST correct ALL listed issues before proceeding. The quality gate is non-negotiable and ensures enterprise-grade code quality.
