module.exports = {
  mode: 'spa',
  head: {
    title: 'kusabuki',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'robots', content: 'noindex , nofollow' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  styleResources: {
    scss: ['~/assets/css/_variables.scss']
  },
  css: ['~/assets/css/main.scss'],
  plugins: ['~/plugins/mixin.js'],
  modules: ['@nuxtjs/style-resources', 'nuxt-webfontloader', 'nuxt-lazy-load'],
  webfontloader: {
    google: {
      families: ['Crimson+Pro', 'Noto+Serif+JP:wght@400;700']
    }
  },
  server: {
    host: '0.0.0.0' // default: localhost
  },
  build: {
    extend(config, { isDev, isClient }) {
      config.performance.maxAssetSize = 300000;
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }
    }
  },
  buildModules: ['@bazzite/nuxt-optimized-images'],
  optimizedImages: {
    optimizeImages: true
  }
};
