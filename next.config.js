/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    future: {
      webpack5: true,
    },
    webpack(config) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        stream: require.resolve('stream-browserify'),
      };
      return config;
    },
  };
  
  
  
