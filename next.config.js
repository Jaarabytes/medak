/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // add images to next
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
