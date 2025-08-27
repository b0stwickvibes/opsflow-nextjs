const fs = require('fs');
const path = require('path');

function safeRead(p){ try{ return fs.readFileSync(p,'utf8'); }catch{ return null; } }

const depJsonPath = path.join(process.cwd(), 'depcruise.json');
const dep = JSON.parse(safeRead(depJsonPath) || '{"modules": [], "summary": {"violations":[]}}');

const mods = dep.modules || [];
const edges = [];
const nodes = new Set();

for(const m of mods){
  const from = m.source;
  nodes.add(from);
  for(const d of (m.dependencies||[])){
    if (d.resolved){
      nodes.add(d.resolved);
      edges.push([from, d.resolved]);
    }
  }
}

const outDeg = new Map();
const inDeg  = new Map();
for(const n of nodes){ outDeg.set(n,0); inDeg.set(n,0); }
for(const [a,b] of edges){ outDeg.set(a, outDeg.get(a)+1); inDeg.set(b, inDeg.get(b)+1); }

function top(map, k=15){
  return Array.from(map.entries()).sort((a,b)=>b[1]-a[1]).slice(0,k);
}

const hubsOut = top(outDeg);
const hubsIn  = top(inDeg);

const violations = (dep.summary && dep.summary.violations) ? dep.summary.violations : [];
const cycles = violations.filter(v => (v.rule && v.rule.name==='no-cycles'));
const orphans = violations.filter(v => (v.rule && v.rule.name==='no-orphans'));

function rel(p){ return p.replace(process.cwd()+path.sep,''); }

const ROUTE_ROOT = path.join(process.cwd(),'app');
const routes = [];
function toRoute(p){
  const relp = path.relative(ROUTE_ROOT, p);
  const parts = relp.split(path.sep);
  parts.pop();
  const segs = parts.filter(Boolean).map(seg=>{
    if (/^\(.*\)$/.test(seg)) return '';
    if (/^\[.*\]$/.test(seg)) return ':'+seg.slice(1,-1);
    return seg;
  }).filter(Boolean);
  const url = '/'+segs.join('/');
  return url==='/'?'/':url.replace(/\/+/g,'/');
}
function walk(dir){
  if(!fs.existsSync(dir)) return;
  for(const e of fs.readdirSync(dir, { withFileTypes:true })){
    if(['node_modules','.next','.git','dist','build'].includes(e.name)) continue;
    const p = path.join(dir, e.name);
    if(e.isDirectory()){ walk(p); continue; }
    if(/page\.(tsx|ts|jsx|js)$/.test(e.name)){ routes.push({type:'page', route: toRoute(p), file: rel(p) }); }
    if(/layout\.(tsx|ts|jsx|js)$/.test(e.name)){ routes.push({type:'layout', route: toRoute(p), file: rel(p) }); }
    if(/route\.(tsx|ts|jsx|js)$/.test(e.name)){
      const s = safeRead(p) || '';
      const methods = ['GET','POST','PUT','PATCH','DELETE','OPTIONS','HEAD'].filter(m => new RegExp(`\\bexport\\s+const\\s+${m}\\b`).test(s));
      routes.push({type:'api', route: toRoute(p), file: rel(p), methods: methods.join(',') || 'GET?' });
    }
  }
}
walk(ROUTE_ROOT);

let md = '';
md += '# Repo Cartography Report\n\n';
md += '## Artifacts\n';
md += '- dep-graph.svg (madge dependency graph)\n';
md += '- depcruise-graph.svg (dependency-cruiser graph)\n';
md += '- depcruise.json (raw data)\n\n';

md += '## Top Import Hubs (Outgoing)\n';
md += '| File | Outgoing |\n|---|---:|\n';
for(const [f,c] of hubsOut){ md += `| ${rel(f)} | ${c} |\n`; }
md += '\n';

md += '## Top Referenced Modules (Incoming)\n';
md += '| File | Incoming |\n|---|---:|\n';
for(const [f,c] of hubsIn){ md += `| ${rel(f)} | ${c} |\n`; }
md += '\n';

md += '## Cycles (from dependency-cruiser)\n';
if(cycles.length===0){ md += '_None detected by rule no-cycles_\n\n'; }
else{
  md += '| From | To | Cycle |\n|---|---|---|\n';
  for(const v of cycles){
    const f = v.from || {};
    const t = v.to || {};
    md += `| ${rel(f.source||'')} | ${rel(t.resolved||'')} | ${Array.isArray(v.cycle)?v.cycle.map(rel).join(' → '):''} |\n`;
  }
  md += '\n';
}

md += '## Orphans (from dependency-cruiser)\n';
if(orphans.length===0){ md += '_None flagged by rule no-orphans_\n\n'; }
else{
  md += '| File |\n|---|\n';
  for(const v of orphans){ const f=v.from||{}; md += `| ${rel(f.source||'')} |\n`; }
  md += '\n';
}

md += '## Route Map (App Router)\n';
md += '| Type | Route | File | Methods |\n|---|---|---|---|\n';
for(const r of routes.sort((a,b)=>a.route.localeCompare(b.route))){
  md += `| ${r.type} | ${r.route} | ${r.file} | ${r.methods||''} |\n`;
}
md += '\n';

fs.writeFileSync('repo-cartography.md', md, 'utf8');
console.log('Wrote repo-cartography.md');
