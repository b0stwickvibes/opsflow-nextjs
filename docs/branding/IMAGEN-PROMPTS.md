# Imagen 4 Prompt Pack (OpsFlow)

Use this pack to generate a cohesive, brand-consistent image set with Google AI Studio (Imagen 4).

Always include the Brand Style Card and Negative Block first, then choose a Shot Recipe and a Scene. Keep the brand tokens identical across a set for consistency.

## Brand Style Card (paste into every prompt)
```text path=null start=null
Brand imaging style:
- Color palette: deep blue #1e40af accents, steel blue #475569, stainless gray #94a3b8, clean white #ffffff, warm gray #64748b; subtle, modern, slightly desaturated.
- Lighting: soft diffused, commercial 5500–6500K; minimal harsh shadows; clean specular highlights on stainless steel.
- Lenses & aperture: environments 24–35mm f/5.6; portraits 50–85mm f/2.0–2.8; device close-ups 50mm macro f/4.
- Composition: heroes include negative space on the left or right third for headlines; cards centered with 10–12% safe margins; device screens show 5–8% bezel.
- Environment: spotless, organized commercial kitchens with professional stainless equipment; modern, tech-forward but realistic; diverse staff in clean uniforms.
- Devices: unbranded tablets/monitors; generic operational UI implied (charts, temperature logs, checklists) — no third‑party logos.
- Tone: professional, documentary realism, premium SaaS aesthetic; cohesive series and consistent color grading across the set.
```

## Negative Block (paste into every prompt)
```text path=null start=null
Avoid: logos, brand marks, watermarks, text/typography, numerals, deformed hands, extra fingers, duplicated faces, motion blur on faces, home kitchen props, messy or cluttered environments, branded equipment, embedded or readable UI, floating/cutout devices, solid color slabs.
```

## Shot Recipes

Choose ONE per prompt after the Style Card + Negative Block.

### Hero A (in‑scene gradient negative space)
```text path=null start=null
Shot recipe (hero 16:9): camera eye‑level, 35mm, f/5.6, soft diffused commercial light, shallow background separation. Composition: reserve the left 35% as empty in‑scene space — smooth brand‑blue gradient (#1e40af → #0f2a6d) subtly blending into the stainless environment; absolutely no objects, no phones, no tablets, no people in the left third. Leading lines from the prep counter into the team on the right. No typography anywhere.
```

### Hero B (add overlay later)
```text path=null start=null
Shot recipe (hero 16:9): 35mm, f/5.6. Keep the left 30–35% visually simple and object‑free (blank wall or soft depth) so a brand‑blue overlay can be added later; stagger team depth on the right; counter provides leading lines. Neutral/blurred device screens only.
```

### Device Close‑Up (card)
```text path=null start=null
Shot recipe (device close‑up 1:1): 50mm macro f/4, crisp details on tablet, stainless bokeh, 5–8% bezel, neutral screen for later UI overlay, professional product photography.
```

### Compliance Feature
```text path=null start=null
Shot recipe (feature 4:3): 50–85mm f/2.8, focused subject with organized background, documentary lighting, shows temperature monitoring/compliance context.
```

### Staff Portrait
```text path=null start=null
Shot recipe (portrait 4:3): 85mm f/2.8, confident restaurant manager, soft portrait key + fill, modern commercial environment in background, clean uniform.
```

## Scene Blocks (append after a Shot Recipe)

### Restaurant Ops Hero
```text path=null start=null
Scene: modern commercial kitchen, stainless steel, diverse chef team actively working (temperature probe use, tablet reference with neutral blurred screen; prepping), organized workstations, spotless surfaces, documentary realism. --aspect 16:9
```

### Tablet Interaction (card)
```text path=null start=null
Scene: close‑up of hands using a mounted tablet in a commercial kitchen, focusing on touch interaction; technology‑in‑workflow; clean, professional. --aspect 1:1
```

### HACCP Cold Storage (feature)
```text path=null start=null
Scene: staff member checking walk‑in cooler temperature with a digital thermometer; labeled containers; visible wall thermometer; clipboard checklist implied; calm, professional execution. --aspect 4:3
```

### Team Meeting / Scheduling (card)
```text path=null start=null
Scene: restaurant manager discussing schedule on a tablet with staff; neutral screen; organized stainless environment; confident, collaborative. --aspect 1:1
```

### Compliance Reporting (feature)
```text path=null start=null
Scene: manager reviewing compliance status with team near the line; clean charts implied on a neutral screen; documentary realism. --aspect 4:3
```

### Restaurant Overview (hero alternative)
```text path=null start=null
Scene: wide organized kitchen during prep; staggered depth; leading lines from counter; tech integrated but subtle; spotless stainless. --aspect 16:9
```

## Minimum Set for Launch

Generate these 12 images (keepers), each from 4–8 variations:
- Heroes (16:9, 3 images)
  1. Restaurant Ops Hero (Hero A)
  2. Restaurant Overview (Hero B)
  3. Compliance/Team Hero (Hero B)
- Cards (1:1, 6 images)
  4. Tablet Interaction (checklist)
  5. Temperature Probe close‑up
  6. Team Meeting / Scheduling
  7. Inventory glance (neutral tablet)
  8. Chef hands plating (tech nearby, subtle)
  9. Manager portrait (4:3 allowed if needed; otherwise 1:1 tight portrait)
- Features (4:3, 3 images)
  10. HACCP Cold Storage
  11. Compliance Reporting discussion
  12. Staff Scheduling board (neutral device)

## Save Locations (WebP exports)
- public/images/marketing/heroes/
  - restaurant-ops-hero-01.webp
  - restaurant-overview-hero-01.webp
  - compliance-team-hero-01.webp
- public/images/marketing/cards/
  - tablet-checklist-card-01.webp
  - temperature-probe-card-01.webp
  - team-meeting-card-01.webp
  - inventory-glance-card-01.webp
  - plating-hands-card-01.webp
  - manager-portrait-card-01.webp
- public/images/marketing/carousels/
  - slide-1.webp, slide-2.webp, slide-3.webp (optional crops of heroes or features)
- public/images/features/
  - haccp-cold-storage-feature-01.webp
  - compliance-reporting-feature-01.webp
  - staff-scheduling-feature-01.webp

Masters (TIFF/PNG) keep outside repo: brand-assets/masters/**
Then convert:
```bash path=null start=null
npm run images:export
# or with AVIF
node scripts/export-images.mjs brand-assets/masters public/images --format=avif --quality=60
```

## Manifest Updates
Update lib/assets/marketing.ts with the new paths and alt text:
```ts path=null start=null
// Example
heroAssets.restaurantOperations.src = '/images/marketing/heroes/restaurant-ops-hero-01.webp'
heroAssets.restaurantOperations.alt = 'Restaurant team coordinating in a modern commercial kitchen with tablet-driven workflows'
```

## Tips for Consistency
- Reuse the same Brand Style Card + Negative Block across the whole set.
- If AI Studio supports image style refs, reuse the same 2–3 style refs for the entire set.
- Generate 4–8 variations per shot; select 1 keeper; apply a single Lightroom/PS preset to all.
- Device screens must be neutral/blurred; overlay OpsFlow UI later using the device template (see docs/branding/DEVICE-MOCKUP-TEMPLATE.md).

