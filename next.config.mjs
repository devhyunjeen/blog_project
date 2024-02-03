import path from "node:path";
import withMDX from "@next/mdx"

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['tsx', 'mdx', 'md'],
  webpack(config, options) {
    config.module.rules.push({
      resourceQuery: /prop/,
      use: [{
        loader: path.resolve("webpack/version-loader.mjs")
      }]
    })
    return config
  }
};

export default nextConfig;

