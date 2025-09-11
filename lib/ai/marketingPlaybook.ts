// lib/ai/marketingPlaybook.ts

export type StatVariant = 'ambient' | 'outline' | 'ghost' | 'mono'
export type Energy = 'subtle' | 'balanced' | 'bold'

export const MarketingPlaybook = {
  principles: {
    contrastPacing: '1–2 hero elements with glow/gradient; everything else calm (outline/ghost).',
    layeredDepth: 'Use frosted surfaces, soft borders, subtle shadows, masked grids, radial fades. Avoid loud solids.',
    motionHierarchy: 'Hover micro-interactions (scale 1.02–1.03, 180–220ms). Entrances: fade+translateY(8–12px), 280–360ms, smooth cubic easing. Respect reduced motion.',
    monoFirst: 'Monochrome logos/illustrations; reveal color on hover.',
  },
  guardrails: {
    perSectionAmbientMax: 1,
    perViewportAmbientMax: 2,
    ambientUseCases: ['Hero KPI', 'Featured metric', 'Highlighted integration'],
    defaultVariants: {
      stats: 'outline' as StatVariant,
      logos: 'mono' as const,
      ctas: 'outline' as const,
    },
  },
  taxonomy: {
    variants: ['ambient', 'outline', 'ghost', 'mono'] as StatVariant[],
    energy: ['subtle', 'balanced', 'bold'] as Energy[],
  },
}

export type PageSectionDescriptor = {
  importPath: string
  importName: string
  props?: Record<string, any>
}

export type PageBlueprint = {
  title?: string
  sections: PageSectionDescriptor[]
}

// Ensures each stats block has at most one ambient emphasis based on props.
export function enforceAmbientGuardrails(blueprint: PageBlueprint): PageBlueprint {
  const next: PageBlueprint = { ...blueprint, sections: [] }
  for (const s of blueprint.sections) {
    if (s.importName === 'KPIShowcase') {
      // If variant is ambient but no explicit leadKey, downgrade to outline to prevent blanket glow
      const v = s.props?.variant as StatVariant | undefined
      if (v === 'ambient' && !s.props?.leadKey) {
        next.sections.push({ ...s, props: { ...s.props, variant: 'outline' as StatVariant } })
        continue
      }
    }
    if (s.importName === 'StatsDisplay') {
      // If multiple items intended ambient via leadIndex not provided, keep outline
      const v = s.props?.variant as StatVariant | undefined
      if (v === 'ambient' && (s.props?.leadIndex === undefined || s.props?.leadIndex === null)) {
        next.sections.push({ ...s, props: { ...s.props, variant: 'outline' as StatVariant } })
        continue
      }
    }
    next.sections.push(s)
  }
  return next
}

