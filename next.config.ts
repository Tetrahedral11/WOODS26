// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "plus.unsplash.com",
      "images.unsplash.com", // optional, if you ever use normal Unsplash URLs
    ],
  },
};

module.exports = nextConfig;
