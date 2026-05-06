/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Tells Next.js to build static HTML files
  images: {
    unoptimized: true, // Required for GitHub Pages since it lacks an image server
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'loremflickr.com',
      },
    ],
  },
  // IMPORTANT: If your GitHub repo is named something like "animal-encyclopedia",
  // you must uncomment the line below and change it to your exact repo name!
  // basePath: '/animal-encyclopedia', 
};

export default nextConfig;