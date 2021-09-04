import en from './locale/en'
import ru from './locale/ru'

const isDev = process.env.NODE_ENV === 'development'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Nuxt Initialization Project',

    htmlAttrs: {
      lang: 'ru'
    },

    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    {
      src: '~assets/scss/main.scss',
      lang: 'scss'
    }
  ],
  // For global import of variables
  styleResources: {
    scss: [
      '~assets/scss/variables.scss'
    ]
  },
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vue-unicons', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Turn off telemetry
  telemetry: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://github.com/nuxt-community/style-resources-module
    '@nuxtjs/style-resources'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://i18n.nuxtjs.org/
    '@nuxtjs/i18n'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},
  // i18n module
  i18n: {
    locales: ['ru', 'en'],
    defaultLocale: 'ru',
    detectBrowserLanguage: false,
    vueI18n: {
      fallbackLocale: 'ru',
      messages: {
        ru,
        en
      }
    }
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    /*
     ** You can extend webpack config here
     */
    babel: {
      plugins: [
        '@babel/plugin-proposal-optional-chaining',
        '@babel/plugin-proposal-nullish-coalescing-operator'
      ]
    },
    transpile: ['lodash-es'],
    extend (config, ctx) {},
    // Usage of CSS module
    loaders: {
      scss: { sourceMap: false },
      cssModules: {
        modules: {
          localIdentName: isDev
            ? '[name]__[local]--[hash:base64:5]'
            : '[hash:base64:12]'
        },
        localsConvention: 'camelCaseOnly'
      }
    },
    extractCSS: !isDev ? { ignoreOrder: true } : false
  }
}
