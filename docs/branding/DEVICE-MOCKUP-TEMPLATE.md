# Device Mockup Template (Figma + Photoshop)

This document describes how to composite OpsFlow UI onto generated device images with consistent, realistic results.

1) Figma Template
- Layers
  - Base Device: neutral frame
  - Screen: rectangle with subtle glare gradient (white to transparent, 10–15% opacity)
  - UI Overlay (Smart Object): exported PNGs from OpsFlow UI
  - Guides: 5–8% bezel-preserve guides on all sides
- Export Preset
  - sRGB, WebP 85 quality; optional AVIF
  - 1x/2x variants if needed

2) Photoshop Template (PSD)
- Layers
  - Background Image (AI-generated)
  - Screen (Smart Object): perspective/transformed to match device angle
  - UI Overlay: blend mode “Screen” or “Linear Dodge (Add)”, masked to screen
  - Glare: subtle white gradient overlay (10–15% opacity)
  - Grain (optional): 1–2% to unify textures
- Workflow
  1. Export OpsFlow UI from Figma as PNG with transparent background
  2. Place into Screen Smart Object
  3. Use Edit > Transform > Distort to align to device corners
  4. Set blend to Screen or Linear Dodge; adjust opacity to fit lighting
  5. Add Glare gradient; keep bezel visible (5–8%)
  6. Apply brand color grading preset; export WebP

3) Screen Content Guidelines
- Temperature dashboards: cool/calm palette, red for hot zones, blue for cold
- Task checklists: green checkmarks, clear typography (AA contrast)
- Compliance reports: clean charts, low-density, legible
- Staff schedules: grid layout, readable at medium distance

4) File Organization
- Masters (non-public): brand-assets/masters/device-mockups/*.psd
- Web exports: public/images/features/*.webp

5) QA Checklist
- [ ] Bezel visible (5–8%)
- [ ] UI aligned to perspective
- [ ] No third-party logos
- [ ] Glare subtle and realistic
- [ ] Color grade matches brand preset
- [ ] Alt text written and added to manifest

