import imageminMozjpeg from 'imagemin-mozjpeg';

module.exports = {
  mode: 'spa',
  head: {
    title: 'kusabuki',
    meta: [
      { charset: 'utf-8' },
      { name: 'robots', content: 'noindex , nofollow' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  css: ['~/assets/css/main.scss'],
  plugins: ['~/plugins/mixin.js'],
  modules: [
    [
      'nuxt-imagemin',
      {
        plugins: [imageminMozjpeg({ quality: 80 })]
      }
    ],
    ['nuxt-webfontloader']
  ],
  webfontloader: {
    google: {
      families: ['Crimson+Pro', 'Noto+Serif+JP:wght@400;700']
    }
  },
  loading: { color: '#3B8070' },
  server: {
    host: '0.0.0.0' // default: localhost
  },
  build: {
    extend(config, { isDev, isClient }) {
      config.performance.maxAssetSize = 400000;
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }
    }
  }
};
