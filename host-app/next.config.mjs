/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/products",
        destination: "http://localhost:3001/products",
      },
      {
        source: "/products/:path*",
        destination: "http://localhost:3001/products/:path*",
      },
    ];
  },
};

export default nextConfig;
