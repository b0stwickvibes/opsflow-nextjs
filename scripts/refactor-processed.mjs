#!/usr/bin/env node
/**
 * scripts/refactor-processed.mjs
 *
 * Batch normalization for processed template folders, preserving brand-specific accents.
 *
 * What it does:
 * - Convert <img> -> Next/Image (adds import if missing)
 * - Normalize surfaces: bg-white -> bg-card, grays -> muted tokens, borders -> border
 * - Normalize body/headings to enterprise-body / text-display-* where obvious
 * - DOES NOT change brand accents like orange/purple/amber classes
 *
 * Usage:
 *   node scripts/refactor-processed.mjs features stats pricing compare bento faqs about logos integration testimonials contact ctas
 */
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const base = path.join(root, 'templates/shadcn-components/processed');

const args = process.argv.slice(2);
if (args.length === 0) {
  console.error('Provide one or more processed subfolders to refactor, e.g. "features stats"');
  process.exit(1);
}

function convertImgs(src) {
  let out = src;
  const usesImg = /<img(\s|>)/.test(out);
  const hasImageImport = /from\s+"next\/image"/.test(out) || /from\s+'next\/image'/.test(out);
  if (usesImg) {
    out = out.replace(/<img([^>]*)\/>/g, (m, attrs) => {
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
      if (/^\"use client\";/.test(out)) {
        out = out.replace(/^\"use client\";\s*/, (m) => `${m}import Image from "next/image";\n`);
      } else {
        out = `import Image from "next/image";\n${out}`;
      }
    }
  }
  return out;
}

function normalizeTokens(src) {
  let out = src;
  // Surfaces and grays
  const rules = [
    [/\bbg-white(\/\d+)?\b/g, 'bg-card$1'],
    [/\bdark:bg-black\/[0-9]{1,2}\b/g, ''],
    [/\bbg-(slate|zinc|gray|neutral)-(50|100)\b/g, 'bg-muted'],
    [/\bbg-(slate|zinc|gray|neutral)-(200|300)\b/g, 'bg-muted/50'],
    [/\btext-(slate|zinc|gray|neutral)-(400|500|600)\b/g, 'text-muted-foreground'],
    [/\btext-(slate|zinc|gray|neutral)-(700|800|900)\b/g, 'text-foreground'],
    [/\bborder-(slate|zinc|gray|neutral)-(200|300|400)\b/g, 'border-border'],
  ];
  for (const [re, rep] of rules) out = out.replace(re, rep);

  // Headings/body helpers (soft mapping to our scales)
  out = out.replace(/className=\"([^\"]*?)\btext-5xl\b([^\"]*?)\"/g, (m, a, b) => `className="enterprise-headline ${a}${b}"`);
  out = out.replace(/className=\"([^\"]*?)\btext-4xl\b([^\"]*?)\"/g, (m, a, b) => `className="text-display-2xl ${a}${b}"`);
  out = out.replace(/className=\"([^\"]*?)\btext-(lg|xl)\b([^\"]*?)\"/g, (m, a, size, b) => `className="enterprise-body ${a}${b}"`);

  return out;
}

function processFile(filePath) {
  const src = fs.readFileSync(filePath, 'utf8');
  let out = src;
  out = convertImgs(out);
  out = normalizeTokens(out);
  if (out !== src) fs.writeFileSync(filePath, out, 'utf8');
  return out !== src;
}

let totalChanged = 0;
for (const dir of args) {
  const target = path.join(base, dir);
  if (!fs.existsSync(target)) {
    console.warn('Skip (not found):', dir);
    continue;
  }
  const files = fs.readdirSync(target).filter(f => f.endsWith('.tsx'));
  for (const f of files) {
    const fp = path.join(target, f);
    const changed = processFile(fp);
    if (changed) {
      totalChanged++;
      console.log('Refactored', path.relative(root, fp));
    }
  }
}

console.log(`Done. ${totalChanged} file(s) updated.`);

