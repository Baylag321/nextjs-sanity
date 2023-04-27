/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["yt3.googleusercontent.com", "cdn.sanity.io"],
  },
};
