import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Clarity playback fetches CSS and fonts with User-Agent: Clarity-Bot.
  // https://learn.microsoft.com/en-us/clarity/session-recordings/troubleshooting-recordings
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET, HEAD, OPTIONS" },
        ],
      },
    ];
  },
};

export default nextConfig;
