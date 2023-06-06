/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    webpack(config) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        stream: require.resolve('stream-browserify'),
      };
      return config;
    },
  };
  
  
  
