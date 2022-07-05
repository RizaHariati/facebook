/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  nextConfig,
  images: {
    domains: [
      "source.unsplash.com",
      "links.papareact.com",
      "platform-lookaside.fbsbx.com",
      "firebasestorage.googlelapis.com",
    ],
  },
};
