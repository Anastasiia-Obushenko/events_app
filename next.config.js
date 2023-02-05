/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify:true,
  images: {
    domains: ['s1.ticketm.net'],
  },
}

module.exports = nextConfig
