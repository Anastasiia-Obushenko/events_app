/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify:true,
  images: {
    domains: ['s1.ticketm.net','images.unsplash.com'],
  },
}

module.exports = nextConfig
