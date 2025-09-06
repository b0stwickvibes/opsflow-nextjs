'use client'

import { useEffect } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

// Palette switching disabled - locked to default OKLCH palette for enterprise consistency
function ensureDefaultPalette() {
  const el = document.documentElement
  // Remove any remaining theme classes to ensure default OKLCH palette
  const themeClasses = ['theme-plasma', 'theme-figma', 'theme-styleglide-nebula']
  el.classList.remove(...themeClasses)
}

export function PaletteSelect() {
  useEffect(() => {
    // Always ensure default OKLCH palette on mount
    ensureDefaultPalette()
    // Clear any saved palette preference to prevent conflicts
    localStorage.removeItem('opsflow:palette')
  }, [])

  // Component now shows locked default palette only
  return (
    <Select value="default" disabled>
      <SelectTrigger className="w-48">
        <SelectValue placeholder="Palette: Default (Locked)" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="default">
          Palette: Default (Enterprise OKLCH)
        </SelectItem>
      </SelectContent>
    </Select>
  )
}

