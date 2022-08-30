/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  redirects: async ()=>[{
    source:"/",
    destination:"/home",
    permanent:false
  }]
}

module.exports = nextConfig
