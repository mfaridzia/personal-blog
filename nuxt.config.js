const pkg = require('./package')
const path = require('path')
const blogTitle = 'Muhammad Farid Zia'
const productionUrl = 'https://muhfaridzia.netlify.com'

module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: `${blogTitle}`,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },

      { name: 'theme-color', content: '#ff0000' },

      { property: 'og:image', content: '/icon.png' },
      { property: 'og:title', content: `${blogTitle}` },
      { property: 'og:description', content: pkg.description },
      { property: 'og:url', content: productionUrl },

      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:image:src', content: '/icon.png' },
      { name: 'twitter:title', content: `${blogTitle}` },
      { name: 'twitter:description', content: pkg.description },
      { name: 'twitter:url', content: productionUrl }
    ],
    link: [ 
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [],

  /*
  ** Plugins to load before mounting the App
  */
  // plugins: [
  //   { src: '~/plugins/lazyload', ssr: false }
  // ],

  plugins: ['~/plugins/lazyload'],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }

      config.module.rules.push({
        test: /\.md$/,
        loader: 'frontmatter-markdown-loader',
        include: path.resolve(__dirname, 'contents'),
        options: {
          vue: {
            root: 'content-markdown'
          }
        }
      })
    }
  }
}
