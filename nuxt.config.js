export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-tailwind-portfolio',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: ''
      },
      {
        name: 'format-detection',
        content: 'telephone=no'
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{
    src: "~/plugins/vue-country-flag.js",
  }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode'
  ],

  tailwindcss: {
    jit: true,
    // add '~tailwind.config` alias
    exposeConfig: true
  },
  colorMode: {
    classSuffix: ""
  },
  toast: {
    position: 'top-right',
    duration : 3000
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/toast',
    'nuxt-i18n',
    [
      'nuxt-fontawesome', {
        imports: [{
            set: '@fortawesome/free-solid-svg-icons',
            icons: ['fas']
          },
          {
            set: '@fortawesome/free-brands-svg-icons',
            icons: ['fab']
          }
        ]
      }
    ]
  ],

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  i18n: {
    // baseUrl: "https://acarmonabelmonte.github.io/",
    noPrefixDefaultLocale: true,
    vueI18n: {
      fallbackLocale: "es",
    },
    detectBrowserLanguage: false,
    parsePages: false,
    seo: true,
    locales: [{
        name: "Español",
        code: "es",
        iso: "es-ES",
        file: "es-ES.js",
        flag: 'es'
      },
      {
        name: "English",
        code: "en",
        iso: "en-GB",
        file: "en-GB.js",
        flag: 'gb'
      },
    ],
    pages: {
      "projects/index": {
        es: "/proyectos",
        en: "/projects",
      },
      "about-me/index": {
        es: "/sobre-mi",
        en: "/about-me",
      },
      "contact/index": {
        es: "/contacto",
        en: "/contact",
      },
    },
    lazy: true,
    langDir: "lang/",
    defaultLocale: "es",
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}
