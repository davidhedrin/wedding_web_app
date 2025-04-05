import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: {
    position: 'bottom-right'
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/guest/home',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;