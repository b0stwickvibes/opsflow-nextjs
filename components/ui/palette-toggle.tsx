'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'

// Palette switching disabled - locked to default OKLCH palette for enterprise consistency
function ensureDefaultPalette() {
  const el = document.documentElement
  // Remove any remaining theme classes to ensure default OKLCH palette
  const themeClasses = ['theme-plasma', 'theme-figma', 'theme-styleglide-nebula']
  el.classList.remove(...themeClasses)
}

export function PaletteToggle() {
  useEffect(() => {
    // Always ensure default OKLCH palette on mount
    ensureDefaultPalette()
    // Clear any saved palette preference to prevent conflicts
    localStorage.removeItem('opsflow:palette')
  }, [])

  // Component now shows locked status instead of cycling
  return (
    <Button variant="ghost" size="sm" disabled title="Palette locked to Default OKLCH for consistency">
      Palette: Default (Locked)
    </Button>
  )
}

