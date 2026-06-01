import type { NextConfig } from "next";

// Content-Security-Policy tuned for this site's actual external origins:
// - Google Analytics / gtag (loaded only when NEXT_PUBLIC_GA_MEASUREMENT_ID is set)
// - Vercel Analytics + Speed Insights
// - Web3Forms (contact form submit endpoint)
// 'unsafe-inline' is required because the app uses inline <style> blocks and an
// inline GA bootstrap script, and Next.js injects inline hydration scripts.
const contentSecurityPolicy = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "frame-ancestors 'none'",
  "img-src 'self' data: blob: https:",
  "font-src 'self' data:",
  "style-src 'self' 'unsafe-inline'",
  "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://va.vercel-scripts.com",
  "connect-src 'self' https://api.web3forms.com https://www.google-analytics.com https://*.google-analytics.com https://www.googletagmanager.com https://va.vercel-scripts.com https://vitals.vercel-insights.com",
  "form-action 'self' https://api.web3forms.com",
  "frame-src 'self'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: contentSecurityPolicy },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains",
  },
];

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    unoptimized:
      process.env.NETLIFY === "true" || process.env.NODE_ENV === "development",
  },
  compress: true,
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
