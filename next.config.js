const withOffline = require('next-offline')

const nextConfig = {
  exportPathMap: () => ({
    '/': { page: '/Home' },
    '/profile': { page: '/Profile' },
    '/cv': { page: '/Profile' },
  }),
  dontAutoRegisterSw: true,
  workboxOpts: {
    skipWaiting: true,
    swDest: 'static/sw.js',
    globDirectory: '.',
    globPatterns: ['dist/**/*.{js,png,html,css}'],
    runtimeCaching: [
      {
        urlPattern: /\.(?:png|jpg|jpeg|svg)$/,
        handler: 'CacheFirst',
        options: {
          cacheName: 'images',
          expiration: {
            maxEntries: 100,
          },
        },
      },
      {
        urlPattern: /^https?.*/,
        handler: 'StaleWhileRevalidate',
        options: {
          cacheName: 'offlineCache',
          expiration: {
            maxEntries: 100,
            maxAgeSeconds: 30 * 24 * 60 * 60, // 1 month
          },
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },
    ],
  },
}

module.exports = withOffline(nextConfig)
