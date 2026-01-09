/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
  publicRuntimeConfig: {
    // Will be available on both server and client
  },
  serverRuntimeConfig: {
    // Will only be available on the server side
  },
};

export default nextConfig;
