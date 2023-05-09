const nextTranslate = require("next-translate");
/** @type {import('next').NextConfig} */

const nextConfig = nextTranslate({
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
});

module.exports = nextConfig;
