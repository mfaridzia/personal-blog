const pkg = require('./package')
const path = require('path')

module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Muhammad Farid Zia',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
      { name: 'theme-color', content: '#ff0000' }
    ],
    link: [ 
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Merriweather|Montserrat|Source+Sans+Pro' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { 
    color: '#189ad3',
    height: '5px' 
  },

  /*
  ** Global CSS
  */
  css: ['~/assets/main.css'],

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
    '@nuxtjs/pwa',
  ],
  /*
  ** Axios module configuration
  */

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
        include: path.resolve(__dirname, 'posts'),
        options: {
          vue: {
            root: 'content-markdown'
          }
        }
      })
    }
  }
}
