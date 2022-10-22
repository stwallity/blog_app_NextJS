/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};
module.exports = {
  env: {
    POSTS_URL: "https://jsonplaceholder.typicode.com",
  },
};
module.exports = nextConfig;
