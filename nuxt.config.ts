// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxt/content',
    '@nuxt/icon',
    '@nuxt/ui',
    '@nuxt/content',
    '@nuxt/image'
  ],
  css: ['~/assets/css/main.css'],
  content: {
  },
})