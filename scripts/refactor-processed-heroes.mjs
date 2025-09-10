#!/usr/bin/env node
/**
 * scripts/refactor-processed-heroes.mjs
 *
 * Safe-ish automated cleanup for processed hero templates:
 * - Replace <img> with Next.js <Image> and add import if needed
 * - Map raw Tailwind brand colors to token classes (primary, border, muted-foreground)
 * - Map bg/border/gradient color utilities to semantic tokens
 *
 * Scope: templates/shadcn-components/processed/heroes/*.tsx
 */
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const heroesDir = path.join(root, 'templates/shadcn-components/processed/heroes');

/** Replace helper with ordered regex rules */
function applyReplacements(src) {
  let out = src;

  // Ensure Image import if we are converting <img>
  const usesImg = /<img(\s|>)/.test(out);
  const hasImageImport = /from\s+"next\/image"/.test(out) || /from\s+'next\/image'/.test(out);

  // Convert <img ...> to <Image ... width={1200} height={800} /> (keep src/alt/className)
  if (usesImg) {
    out = out.replace(/<img([^>]*)\/>/g, (m, attrs) => {
      // Keep src and alt and className if present
      // If width/height not present, add defaults; Next/Image requires width & height (or fill)
      const hasWidth = /\bwidth=/.test(attrs);
      const hasHeight = /\bheight=/.test(attrs);
      const injected = `${attrs}${hasWidth ? '' : ' width={1200}'}${hasHeight ? '' : ' height={800}'}`;
      return `<Image${injected} />`;
    });
    out = out.replace(/<img([^>]*)>/g, (m, attrs) => {
      const hasWidth = /\bwidth=/.test(attrs);
      const hasHeight = /\bheight=/.test(attrs);
      const injected = `${attrs}${hasWidth ? '' : ' width={1200}'}${hasHeight ? '' : ' height={800}'}`;
      return `<Image${injected}>`;
    });
    if (!hasImageImport) {
      // Prefer inserting right after "use client" to avoid splitting multiline imports
      if (/^\"use client\";/.test(out)) {
        out = out.replace(/^\"use client\";\s*/, (m) => `${m}import Image from "next/image";\n`);
      } else {
        out = `import Image from "next/image";\n${out}`;
      }
    }
  }

  // Map color utilities to tokens
  const colorPatterns = [
    [/text-(orange|purple|amber|slate|zinc|gray|neutral)-(50|100|200|300|400|500|600|700|800|900)/g, 'text-primary'],
    [/dark:text-(orange|purple|amber|slate|zinc|gray|neutral)-(50|100|200|300|400|500|600|700|800|900)/g, 'dark:text-primary'],
    [/bg-(orange|purple|amber)-(50|100|200|300|400|500|600|700|800|900)/g, 'bg-primary'],
    [/hover:bg-(orange|purple|amber)-(50|100|200|300|400|500|600|700|800|900)/g, 'hover:bg-primary/90'],
    [/border-(orange|purple|amber|slate|zinc|gray|neutral)-(50|100|200|300|400|500|600|700|800|900)/g, 'border-primary'],
    [/fill-(orange|purple|amber)-(50|100|200|300|400|500|600|700|800|900)/g, 'fill-primary'],
    [/stroke-(orange|purple|amber)-(50|100|200|300|400|500|600|700|800|900)/g, 'stroke-primary'],
    [/text-(slate|zinc|gray|neutral)-[5-9]00/g, 'text-foreground'],
    [/text-(slate|zinc|gray|neutral)-[3-6]00/g, 'text-muted-foreground'],
    [/bg-white(\/\d+)?/g, 'bg-card$1'],
    [/dark:bg-black\/\d+/g, ''],
    [/border-(slate|zinc|gray|neutral)-[2-5]00/g, 'border-border'],
    [/from-(orange|purple|amber)-(50|100|200)/g, 'from-primary/10'],
    [/to-(orange|purple|amber)-(50|100|200)(\/\d+)?/g, 'to-secondary/10'],
  ];
  for (const [re, replacement] of colorPatterns) {
    out = out.replace(re, replacement);
  }

  // Prefer enterprise headline/body for big headings if common patterns found
  out = out.replace(/className=\"([^\"]*?)\btext-5xl\b([^\"]*?)\"/g, (m, a, b) => `className="enterprise-headline ${a}${b}"`);
  out = out.replace(/className=\"([^\"]*?)\btext-4xl\b([^\"]*?)\"/g, (m, a, b) => `className="text-display-2xl ${a}${b}"`);
  out = out.replace(/className=\"([^\"]*?)\btext-(lg|xl)\b([^\"]*?)\"/g, (m, a, size, b) => `className="enterprise-body ${a}${b}"`);

  return out;
}

function processFile(filePath) {
  const src = fs.readFileSync(filePath, 'utf8');
  const out = applyReplacements(src);
  if (out !== src) {
    fs.writeFileSync(filePath, out, 'utf8');
    return true;
  }
  return false;
}

function main() {
  if (!fs.existsSync(heroesDir)) {
    console.error('Heroes directory not found:', heroesDir);
    process.exit(1);
  }
  const files = fs.readdirSync(heroesDir).filter(f => f.endsWith('.tsx'));
  let changed = 0;
  for (const f of files) {
    const fp = path.join(heroesDir, f);
    const did = processFile(fp);
    if (did) {
      changed++;
      console.log('Refactored', path.relative(root, fp));
    }
  }
  console.log(`Done. ${changed} file(s) updated.`);
}

main();

