import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "images.unsplash.com",
        protocol: "https",
        port: ""
      },
      {
        hostname: "original-owl-320.convex.cloud",
        protocol: "https",
        port: ""
      }
    ]
  }
};

export default nextConfig;
