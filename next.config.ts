import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL('https://www.morningstar.co.uk/static/UploadManager/Assets/**')],
  },
};

export default nextConfig;
