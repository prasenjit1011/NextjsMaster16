import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  devIndicators: false,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fakestoreapi.com",
      },
      {
        protocol: "https",
        hostname: "fakestoreapi.in",
      },
      {
        protocol: "https",
        hostname: "cdn.dummyjson.com"
      }
    ],
  },
};

export default withNextIntl(nextConfig);