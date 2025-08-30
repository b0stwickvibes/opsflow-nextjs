'use client'

import { useEffect, useState } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

type Palette = 'default' | 'plasma' | 'figma' | 'styleglide-nebula'
const STORAGE_KEY = 'opsflow:palette'
const PRESETS: Palette[] = ['default', 'plasma', 'figma', 'styleglide-nebula']

function applyPalette(palette: Palette) {
  const el = document.documentElement
  const classes = ['theme-plasma', 'theme-figma', 'theme-styleglide-nebula']
  // Avoid redundant reflows
  const has = (c: string) => el.classList.contains(c)
  if (palette === 'default') {
    if (classes.some(has)) el.classList.remove(...classes)
    return
  }
  const target = palette === 'plasma' ? 'theme-plasma' : palette === 'figma' ? 'theme-figma' : 'theme-styleglide-nebula'
  if (!has(target)) {
    el.classList.remove(...classes)
    el.classList.add(target)
  }
}

export function PaletteSelect() {
  const [palette, setPalette] = useState<Palette>('default')

  useEffect(() => {
    const saved = (localStorage.getItem(STORAGE_KEY) as Palette) || 'default'
    setPalette(saved)
    applyPalette(saved)
  }, [])

  return (
    <Select
      value={palette}
      onValueChange={(v: Palette) => {
        setPalette(v)
        applyPalette(v)
        localStorage.setItem(STORAGE_KEY, v)
      }}
    >
      <SelectTrigger className="w-48">
        <SelectValue placeholder="Select palette" />
      </SelectTrigger>
      <SelectContent>
        {PRESETS.map((p) => (
          <SelectItem key={p} value={p}>
            Palette: {p.replace('styleglide-', '')}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

