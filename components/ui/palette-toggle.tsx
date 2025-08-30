'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'

type Palette = 'default' | 'plasma' | 'figma'

const STORAGE_KEY = 'opsflow:palette'

function applyPalette(p: Palette) {
  const el = document.documentElement
  el.classList.remove('theme-plasma', 'theme-figma')
  if (p === 'plasma') el.classList.add('theme-plasma')
  if (p === 'figma') el.classList.add('theme-figma')
}

export function PaletteToggle() {
  const [palette, setPalette] = useState<Palette>('default')

  useEffect(() => {
    const saved = (localStorage.getItem(STORAGE_KEY) as Palette) || 'default'
    setPalette(saved)
    applyPalette(saved)
  }, [])

  function cycle() {
    const next: Palette = palette === 'default' ? 'plasma' : palette === 'plasma' ? 'figma' : 'default'
    setPalette(next)
    applyPalette(next)
    localStorage.setItem(STORAGE_KEY, next)
  }

  const label = palette === 'default' ? 'Palette: Default' : palette === 'plasma' ? 'Palette: Plasma' : 'Palette: Figma'

  return (
    <Button variant="ghost" size="sm" onClick={cycle} title="Toggle color palette">
      {label}
    </Button>
  )
}

