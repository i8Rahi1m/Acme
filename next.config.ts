import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    ppr: 'incremental',
  },
};

export default nextConfig;

module.exports = {
  experimental: { 
    turbo: false,
  },
};
