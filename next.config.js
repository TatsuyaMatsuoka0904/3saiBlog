/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['storage.googleapis.com'],
      },
      webpack: (config) => {
        const path = require('path');
        config.resolve.alias['~fonts'] = path.resolve(__dirname, 'public/fonts');
        return config;
      },
}

module.exports = nextConfig
