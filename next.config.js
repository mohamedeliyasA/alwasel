/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',       // Static export for Cloudflare Pages
  images: {
    unoptimized: true,    // Required for static export
  },
  trailingSlash: true,    // Better compatibility with Cloudflare
}

module.exports = nextConfig
