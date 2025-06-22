/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {},
  transpilePackages: ['solito', 'react-native-web', '@dream-app/app'],
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      'react-native$': 'react-native-web',
    }
    config.resolve.extensions = [
      '.web.js',
      '.web.jsx',
      '.web.ts',
      '.web.tsx',
      ...config.resolve.extensions,
    ]
    return config
  },
  experimental: {
    forceSwcTransforms: true,
  },
}

module.exports = nextConfig