/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [{ protocol: 'http', hostname: 'payload', port: '3000' }],
  },
  env: {
    PAYLOAD_API_URL: process.env.PAYLOAD_API_URL || 'http://payload:3000/api',
  },
};
module.exports = nextConfig;
