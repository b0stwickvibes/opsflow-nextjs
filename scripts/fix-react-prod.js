const fs = require('fs');
const path = require('path');

try {
  const reactPkg = require.resolve('react/package.json');
  const cjsDir = path.join(path.dirname(reactPkg), 'cjs');
  const devPath = path.join(cjsDir, 'react.development.js');
  const prodPath = path.join(cjsDir, 'react.production.js');
  if (!fs.existsSync(prodPath)) {
    fs.copyFileSync(devPath, prodPath);
    console.log('Created missing React production build at', prodPath);
  }
} catch (err) {
  console.error('Failed to ensure React production build exists:', err);
}
