
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Bitter' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Merriweather' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    'nuxt-facebook-pixel-module',
    ['nuxt-facebook-pixels-module', {
      /* module options */
      track: 'PageView',
      pixelId: ['2559850577360897', '330609454291424'], // or 'FACEBOOK_PIXEL_ID_1, FACEBOOK_PIXEL_ID_2' useful when process.env.FACEBOOK_PIXELS
      disabled: false
    }]
  ],
  facebook: {
    track: 'PageView',
    pixelId: process.env.id_pixel_facebook,
    disabled: false
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  }
}
