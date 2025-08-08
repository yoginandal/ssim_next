/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove output: "standalone" for Azure App Services
  images: {
    remotePatterns: [
      // Main YouTube thumbnails
      {
        protocol: "https",
        hostname: "img.youtube.com",
        port: "",
        pathname: "/vi/**",
      },
      // Alternative YouTube thumbnail domains
      {
        protocol: "https",
        hostname: "i.ytimg.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "yt3.ggpht.com",
        port: "",
        pathname: "/**",
      },
      // YouTube thumbnails with different paths
      {
        protocol: "https",
        hostname: "img.youtube.com",
        port: "",
        pathname: "/**",
      },
    ],
    // Add these additional options for better compatibility
    minimumCacheTTL: 60,
    formats: ["image/webp", "image/avif"],
  },
};

export default nextConfig;
