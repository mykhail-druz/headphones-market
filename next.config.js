/* eslint-disable */
/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.sanity.io"],
    loader: "custom",
    experimental: {
      forceSwcTransforms: true,
    },
  },
  webpack: (config) => {
    config.resolve.modules.push(path.resolve("./"));

    return config;
  },
};

module.exports = nextConfig;
