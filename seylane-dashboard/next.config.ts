/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    cacheComponents: true,   // replaces old ppr
    serverActions: {
      allowedOrigins: ["*"],
    },
  },
  reactStrictMode: true,
};

export default nextConfig;