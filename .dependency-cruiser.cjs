module.exports = {
  options: {
    doNotFollow: { path: 'node_modules' },
    exclude: '(^node_modules|^\\.next|^\\.git|\\.test\\.|\\.stories\\.|/dist/|/build/)',
    tsConfig: { fileName: './tsconfig.json' },
    enhancedResolveOptions: { extensions: ['.ts','.tsx','.js','.jsx'] }
  },
  forbidden: [
    { name: 'no-cycles', severity: 'warn', from: {}, to: { circular: true } },
    { name: 'no-orphans', severity: 'warn', from: { orphan: true }, to: {} }
  ]
};
