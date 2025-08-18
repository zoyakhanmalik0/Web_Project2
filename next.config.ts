// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ignore ESLint errors during build
  },
  images: {
    unoptimized: true,
  },
  output: 'export',
};

export default nextConfig;
