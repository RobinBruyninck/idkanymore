import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    unoptimized:
      process.env.NETLIFY === "true" || process.env.NODE_ENV === "development",
  },
  compress: true,
  poweredByHeader: false,
};

export default nextConfig;
