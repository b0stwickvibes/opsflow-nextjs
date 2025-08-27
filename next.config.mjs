import bundleAnalyzer from '@next/bundle-analyzer';
const withBundleAnalyzer = bundleAnalyzer({ enabled: process.env.ANALYZE === 'true' });

// merge with your existing config if needed:
export default withBundleAnalyzer({
  reactStrictMode: true,
  // productionBrowserSourceMaps helps with source-map explorers too
  productionBrowserSourceMaps: true,
});
