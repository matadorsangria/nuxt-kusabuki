import { Configuration } from '@nuxt/types';

const nuxtConfig: Configuration = {
  mode: 'spa',
  head: {
    title: process.env.npm_package_name,
    htmlAttrs: {
      lang: 'ja',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'robots', content: 'noindex, nofollow' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: `${process.env.npm_package_description}`,
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  styleResources: {
    scss: ['~/assets/css/_variables.scss'],
  },
  css: ['~/assets/css/main.scss'],
  plugins: ['~/plugins/mixin'],
  modules: ['@nuxtjs/style-resources', 'nuxt-webfontloader'],
  webfontloader: {
    google: {
      families: ['Crimson+Pro', 'Noto+Serif+JP:wght@400;700'],
    },
  },
  build: {
    extend(config, { isDev, isClient }) {
      if (config.performance) config.performance.maxAssetSize = 300000;
      if (isDev && isClient) {
        if (config.module) {
          config.module.rules.push({
            enforce: 'pre',
            test: /\.(ts|js|vue)$/,
            loader: 'eslint-loader',
            exclude: /(node_modules)/,
          });
        }
      }
    },
  },
  buildModules: ['@nuxt/typescript-build', '@aceforth/nuxt-optimized-images'],
  optimizedImages: {
    optimizeImages: true,
  },
};

module.exports = nuxtConfig;
