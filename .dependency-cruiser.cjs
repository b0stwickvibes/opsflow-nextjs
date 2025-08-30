module.exports = {
  options: {
    doNotFollow: { path: 'node_modules' },
    exclude: '(^node_modules|^\\.next|^\\.git|\\.test\\.|\\.stories\\.|/dist/|/build/)',
    tsConfig: { fileName: './tsconfig.json' },
    enhancedResolveOptions: { extensions: ['.ts','.tsx','.js','.jsx'] }
  },
  forbidden: [
    { name: 'no-cycles', severity: 'warn', from: {}, to: { circular: true } },
    {
      name: 'no-orphans',
      severity: 'warn',
      from: {
        orphan: true,
        pathNot: '(^app/.*/(page|layout|error|global-error)\\.tsx$)'
      },
      to: {}
    },
    // Discourage importing from transitional/legacy folders
    { name: 'no-legacy-blocks', severity: 'warn', from: {}, to: { path: '^components/blocks' } },
    { name: 'no-legacy-sections', severity: 'warn', from: {}, to: { path: '^components/sections' } },
    { name: 'no-legacy-marketing-dir', severity: 'warn', from: {}, to: { path: '^components/marketing' } },
    { name: 'no-top-level-layout-imports', severity: 'warn', from: {}, to: { path: '^components/layout/' } }
  ]
};
