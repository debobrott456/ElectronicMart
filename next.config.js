/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: [
      'via.placeholder.com', 
      'images.unsplash.com',
      'tse4.mm.bing.net',
      'th.bing.com',
      'nuranium-electronic.myshopify.com',
      'cdn.simpleicons.org',
      'ui-avatars.com'
    ],
  },
}

module.exports = nextConfig