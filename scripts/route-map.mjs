const fs = require('fs');
const path = require('path');

const ROOT = path.join(process.cwd(), 'app');
const OUT = [];

function toRoute(p) {
  const rel = path.relative(ROOT, p);
  const parts = rel.split(path.sep);
  parts.pop();
  const segs = parts.map(seg => {
    if (seg === 'app') return '';
    if (seg === '(group)') return '';
    if (seg.startsWith('(') && seg.endsWith(')')) return '';
    if (seg.startsWith('[') && seg.endsWith(']')) return ':' + seg.slice(1, -1);
    return seg;
  }).filter(Boolean);
  const url = '/' + segs.join('/');
  return url === '//' ? '/' : url;
}

function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (['node_modules', '.next', '.git', 'dist', 'build'].includes(e.name)) continue;
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p);
    else {
      if (/page\.(tsx|ts|jsx|js)$/.test(e.name)) {
        OUT.push({ kind: 'page', path: p, route: toRoute(p) });
      }
      if (/route\.(tsx|ts|jsx|js)$/.test(e.name)) {
        let methods = [];
        try {
          const s = fs.readFileSync(p, 'utf8');
          methods = ['GET','POST','PUT','PATCH','DELETE','OPTIONS','HEAD'].filter(m => new RegExp(`\\bexport\\s+const\\s+${m}\\b`).test(s));
        } catch {}
        OUT.push({ kind: 'api', path: p, route: toRoute(p), methods: methods.join(',') || 'GET?' });
      }
      if (/layout\.(tsx|ts|jsx|js)$/.test(e.name)) {
        OUT.push({ kind: 'layout', path: p, route: toRoute(p) });
      }
    }
  }
}

if (fs.existsSync(ROOT)) walk(ROOT);

let md = '# Route Map\n\n';
md += '| Type | Route | File | Methods |\n|---|---|---|---|\n';
for (const row of OUT.sort((a,b)=>a.route.localeCompare(b.route))) {
  md += `| ${row.kind} | ${row.route} | ${path.relative(process.cwd(), row.path)} | ${row.methods||''} |\n`;
}
process.stdout.write(md);
