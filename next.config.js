const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const withMarkdoc = require('@markdoc/next.js');

// Markdoc configuration
const markdocConfig = {
  mode: 'static',
  schemaPath: './markdoc.config.js'
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Performance optimizations for scale
  experimental: {
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
  },
  
  // Bundle analysis + optimizations
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Optimize for production
    if (!dev && !isServer) {
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              priority: 10,
              reuseExistingChunk: true,
            },
            common: {
              name: 'common',
              minChunks: 2,
              priority: 5,
              reuseExistingChunk: true,
            },
          },
        },
      };
    }

    return config;
  },

  // Image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Re-enable optimizer; remotePatterns configured below
    unoptimized: false,
    remotePatterns: [
      { protocol: 'https', hostname: 'logo.clearbit.com', pathname: '/**' },
      { protocol: 'https', hostname: 'seeklogo.com', pathname: '/**' },
      { protocol: 'https', hostname: 'upload.wikimedia.org', pathname: '/**' },
      { protocol: 'https', hostname: 'cdn.jsdelivr.net', pathname: '/**' },
      { protocol: 'https', hostname: 'images.ctfassets.net', pathname: '/**' },
      { protocol: 'https', hostname: 'deifkwefumgah.cloudfront.net', pathname: '/**' },
      { protocol: 'https', hostname: 'html.tailus.io', pathname: '/**' },
      { protocol: 'https', hostname: 'ik.imagekit.io', pathname: '/**' },
    ],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  // Speed up CI/builds when lint is not critical
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Security headers for production
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains',
          },
        ],
      },
    ];
  },

  // Redirects for SEO - Enterprise unified docs system
  async redirects() {
    return [
      // Legacy pricing redirect
      {
        source: '/pricing-old',
        destination: '/pricing',
        permanent: true,
      },
      
      // Unified documentation system redirects
      // Support center redirects
      {
        source: '/support',
        destination: '/docs/support/help-center',
        permanent: true,
      },
      {
        source: '/support/:path*',
        destination: '/docs/support/:path*',
        permanent: true,
      },
      
      // Documentation redirects
      {
        source: '/resources/docs',
        destination: '/docs/getting-started/introduction',
        permanent: true,
      },
      {
        source: '/resources/docs/:path*',
        destination: '/docs/:path*',
        permanent: true,
      },
      
      // Help center redirects
      {
        source: '/resources/help',
        destination: '/docs/support/help-center',
        permanent: true,
      },
      {
        source: '/resources/help/:path*',
        destination: '/docs/support/:path*',
        permanent: true,
      },
      
      // Specific common documentation paths
      {
        source: '/docs/quickstart',
        destination: '/docs/getting-started/introduction',
        permanent: true,
      },
      {
        source: '/docs/api-reference',
        destination: '/docs/api/authentication',
        permanent: true,
      },
    ];
  },

  // Performance monitoring
  env: {
    CUSTOM_KEY: process.env.NODE_ENV,
  },

  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Static page generation
  output: 'standalone',
  
  // Powered by header removal for security
  poweredByHeader: false,
};

module.exports = withBundleAnalyzer(withMarkdoc(markdocConfig)(nextConfig));
