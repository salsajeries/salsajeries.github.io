/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disables Next.js image optimization for static exports
    domains: ["firebasestorage.googleapis.com"],  // image host
  },
};

export default nextConfig;
