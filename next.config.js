/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = {
  images: {
    disableStaticImages: true
},
  webpack: (config, { isServer }) => {
    // Add support for mp4 files
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|mp4)$/i,
      use: {
        loader: 'url-loader',
        
      }
    });

    return config;
  },
};
