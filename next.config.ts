import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  env: {
    NETWORK_MODE: process.env.NETWORK_MODE || "",

    DAPP_SERVICE_URL: process.env.DAPP_SERVICE_URL || "",
    PYTH_SERVICE_URL: process.env.PYTH_SERVICE_URL || "",
    SOL_PRICE_FEED_ID: process.env.SOL_PRICE_FEED_ID || "",
    RPC_URL: process.env.RPC_URL || "",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*", // Allow images from all domains
      },
      {
        protocol: "http",
        hostname: "*", // Allow images from all domains
      },
    ],
  },

  headers: async () => {
    return [
      {
        // matching all API routes
        source: "/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" }, // replace this your actual origin
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,DELETE,PATCH,POST,PUT,OPTIONS",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization, Accept-Encoding, Content-Encoding",
          },
        ],
      },
    ];
  },

  rewrites: async () => {
    return [
      {
        source: "/dapp-service/:path*",
        destination: `${process.env.DAPP_SERVICE_URL}/:path*`,
      },
    ];
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
