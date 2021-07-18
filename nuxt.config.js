export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  loading: {
    color: "#3B82F6",
    height: "3px"
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "",
    titleTemplate: "Adrián Carmona - Frontend Developer | %s",
    meta: [{
        charset: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, user-scalable=no"
      },
      {
        hid: "theme-color",
        name: "theme-color",
        content: "#3B82F6"
      },
      {
        hid: "og:site_name",
        name: "og:site_name",
        content: "Adrián Carmona - Frontend Dev"
      },
      {
        hid: "apple-mobile-web-app-title",
        name: "apple-mobile-web-app-title",
        content: "Adrián Carmona - Frontend Dev"
      },
      {
        hid: "keywords",
        name: "keywords",
        content: "adrian, carmona, belmonte, Adrián Carmona Belmonte, acarmona, frotend, acarmona.dev, acarmonabelmonte, mallorca, desarrollo web, seo, adrian carmona belmonte."
      },
      {
        hid: "publisher",
        name: "publisher",
        content: "Adrián Carmona Belmonte"
      },
      {
        hid: "robots",
        name: "robots",
        content: "index, follow"
      },
      {
        name: "twitter:site",
        content: "@adriancarbel"
      }
    ],
    link: [{
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico"
      },
      {
        rel: "shortcut icon",
        type: "image/x-icon",
        href: "/favicon.ico"
      },
      {
        rel: "apple-touch-icon",
        type: "image/x-icon",
        href: "/favicon.ico"
      }
    ]
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
    exposeConfig: true
  },
  colorMode: {
    classSuffix: "",
    preference: 'light', // default value of $colorMode.preference,
    storageKey: 'nuxt-color-mode'
  },
  toast: {
    position: 'top-right',
    duration: 3000
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
