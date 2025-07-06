// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // enables static HTML export
  images: {
    unoptimized: true, // disables image optimization for static export
  },
  eslint: {
    ignoreDuringBuilds: true, // ignore ESLint errors during build
  },
};

export default nextConfig;
