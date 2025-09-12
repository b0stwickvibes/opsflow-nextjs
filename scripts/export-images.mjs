#!/usr/bin/env node
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'

/*
Usage:
  node scripts/export-images.mjs brand-assets/masters public/images \
    --quality=85 --format=webp --width=1920 --height=auto

Notes:
  - Preserves directory structure under destination
  - Converts to WebP (or AVIF with --format=avif)
  - Skips files that already exist unless --force is provided
*/

const args = process.argv.slice(2)
if (args.length < 2) {
  console.error('Usage: node scripts/export-images.mjs <srcDir> <destDir> [--quality=85] [--format=webp|avif] [--force]')
  process.exit(1)
}

const [srcDir, destDir] = args
const quality = parseInt((args.find(a => a.startsWith('--quality=')) || '--quality=85').split('=')[1], 10)
const format = (args.find(a => a.startsWith('--format=')) || '--format=webp').split('=')[1]
const force = args.includes('--force')

const validExt = new Set(['.png', '.jpg', '.jpeg', '.tif', '.tiff'])

async function processFile(srcPath) {
  const rel = path.relative(srcDir, srcPath)
  const base = rel.replace(path.extname(rel), `.${format}`)
  const outPath = path.join(destDir, base)
  await fs.promises.mkdir(path.dirname(outPath), { recursive: true })

  if (!force && fs.existsSync(outPath)) {
    console.log(`[skip] ${outPath} exists`)
    return
  }

  const img = sharp(srcPath)
  if (format === 'webp') {
    await img.webp({ quality }).toFile(outPath)
  } else if (format === 'avif') {
    await img.avif({ quality }).toFile(outPath)
  } else {
    throw new Error(`Unsupported format: ${format}`)
  }
  console.log(`[ok] ${rel} -> ${path.relative(process.cwd(), outPath)}`)
}

async function walk(dir) {
  const entries = await fs.promises.readdir(dir, { withFileTypes: true })
  for (const e of entries) {
    const p = path.join(dir, e.name)
    if (e.isDirectory()) await walk(p)
    else if (validExt.has(path.extname(e.name).toLowerCase())) await processFile(p)
  }
}

walk(srcDir).catch(err => {
  console.error(err)
  process.exit(1)
})

