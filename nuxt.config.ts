import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  app: {
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
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "~/assets/css/_variables.scss";',
        },
      },
    },
  },
  css: ['~/assets/css/main.scss'],
  modules: [
    '@nuxt/image',
    ['@nuxtjs/google-fonts', {
      families: {
        'Crimson Pro': true,
        'Noto+Serif JP': {
          wght: [400, 700],
        },
      }
    }],
  ],
});
