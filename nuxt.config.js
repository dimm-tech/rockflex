export default {
  target: 'static',
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    htmlAttrs: {
      lang: 'ru'
    },
    title: 'formlab',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      //      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Vollkorn+SC:wght@400;600;700;900&display=swap' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~assets/css/normalize.css',
    '~assets/css/main.scss',
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/style-resources',
  ],
  styleResources: {
    scss: [
      '~assets/css/mixins.scss',
    ]
  },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    //  extractCSS: true,
  }
}