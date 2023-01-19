/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["talent.usedeall.com", "firebasestorage.googleapis.com"],
  },
};

module.exports = nextConfig;
