// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//   module.exports = {
//     images: {
//       remotePatterns: [
//         {
//           protocol: 'https',
//           hostname: 'assets.example.com',
//           port: '',
//           pathname: '/account123/**',
//         },
//       ],
//     },
//   }
// }
// export default nextConfig;



/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media0.giphy.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'media4.giphy.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
