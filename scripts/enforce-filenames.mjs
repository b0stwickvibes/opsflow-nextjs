#!/usr/bin/env node
import { readdirSync, statSync } from 'fs';
import { join, basename } from 'path';

const ROOTS = ['components'];
const ALLOW_NUMERIC_TOKENS = ['OAuth2', 'Web3', '2FA'];
const IGNORED_DIRS = [
  'node_modules',
  '.next',
  '.git',
  'unused-components-backup',
  'templates',
  'Templates-Folder',
];

const IGNORED_GLOBS = [
  /^components\/ui\//,
  /^components\/icons\//,
];

const exts = new Set(['.tsx', '.ts', '.jsx', '.js']);

function walk(dir, acc = []) {
  for (const entry of readdirSync(dir)) {
    if (IGNORED_DIRS.includes(entry)) continue;
    const p = join(dir, entry);
    const s = statSync(p);
    if (s.isDirectory()) walk(p, acc);
    else acc.push(p);
  }
  return acc;
}

function hasDigits(str) {
  return /\d/.test(str);
}

let violations = [];
for (const root of ROOTS) {
  try {
    for (const file of walk(root)) {
      if (!Array.from(exts).some((ext) => file.endsWith(ext))) continue;
      if (IGNORED_GLOBS.some((re) => re.test(file))) continue;
      const name = basename(file).replace(/\.(tsx|ts|jsx|js)$/i, '');
      if (ALLOW_NUMERIC_TOKENS.some((tok) => name.includes(tok))) continue;
      if (hasDigits(name)) {
        violations.push({ file, reason: 'Numeric tokens are not allowed in component filenames.' });
      }
    }
  } catch {}
}

if (violations.length) {
  console.error('Filename policy violations (no numbers in component filenames):');
  for (const v of violations) console.error(` - ${v.file}: ${v.reason}`);
  process.exit(1);
} else {
  console.log('Filename policy OK');
}

