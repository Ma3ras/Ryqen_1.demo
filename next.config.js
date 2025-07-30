/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['d22po4pjz3o32e.cloudfront.net'],
  },
  // Memory optimization
  experimental: {
    optimizePackageImports: ['@relume_io/relume-ui', 'framer-motion'],
  },
  // Reduce memory usage
  swcMinify: true,
  compress: true,
  // Performance optimizations
  poweredByHeader: false,
  generateEtags: false,
  // Preload pages for faster navigation
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig 