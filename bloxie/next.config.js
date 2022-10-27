/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    reactStrictMode: true, 
    domains: ['raw.githubusercontent.com'],
  },
  
};

module.exports = nextConfig;
