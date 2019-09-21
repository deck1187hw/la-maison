const PrismicConfig = require('./prismic.config')

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'La Maison - Mobile BBQ Service in Sussex',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { innerHTML: '{ window.prismic = { endpoint: "' + PrismicConfig.apiEndpoint + '"} }' },
      { src: '//static.cdn.prismic.io/prismic.min.js' },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js' },
      { src: '/js/flickity.min.js' },
      { src: '/js/granim.min.js' },
      { src: '/js/smooth-scroll.min.js' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:200,300,400,400i,500,600,700' },
      { rel: 'stylesheet', href: '/css/bootstrap.css' },
      { rel: 'stylesheet', href: '/css/theme.css' },
      { rel: 'stylesheet', href: '/css/flickity.css' },
      { rel: 'stylesheet', href: '/css/stack-interface.css' }
    ],
    __dangerouslyDisableSanitizers: ['script'],
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/link-resolver.js',
    '~/plugins/html-serializer.js',
    '~/plugins/prismic-vue.js',
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [

  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    'nuxt-simple-line-icons',
    '@nuxtjs/pwa'
  ],
  bootstrapVue: {
    bootstrapCSS: false, // Or `css: false`
    bootstrapVueCSS: true // Or `bvCSS: false`
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      config.resolve.alias['vue'] = 'vue/dist/vue.common'
    }
  }
}
