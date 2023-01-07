/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.sanity.io"],
    loader: "custom",
    experimental: {
      forceSwcTransforms: true,
    },
  },
};

module.exports = nextConfig;
