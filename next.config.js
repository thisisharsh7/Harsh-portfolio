/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },

};