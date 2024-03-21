/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/hexadash-nextjs',
  async redirects() {
      return [
          {
              source: '/',
              destination: '/hexadash-nextjs',
              basePath: false,
              permanent: false
          }
      ]
  },
  reactStrictMode: true,
  images: {
    domains: ['lh3.googleusercontent.com'],
  },
}

module.exports = nextConfig
