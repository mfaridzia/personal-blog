/* eslint-disable prettier/prettier */
import posts from './posts/index.js'
const builtAt = new Date().toISOString()
const path = require('path')
const blogTitle = 'Muhammad Farid Zia • Frontend Developer and Storyteller'
const blogUrl = 'https://muhfaridzia.netlify.com/'
const icon = `${blogUrl}/favicon.png`

const routes = posts.map(post => {
  post = `blog/${post}`
  return post
})

module.exports = {
  // mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: blogTitle,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no' },
      { name: 'msapplication-TileColor', content: '#ffffff' },
      { name: 'msapplication-TileImage', content: icon },
      { name: 'theme-color', content: '#c1c1c1' },
      { name: 'robots', content: 'index, follow' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@muhfaridzia' },
      { property: 'og:type', content: 'profile' },
      { property: 'og:updated_time', content: builtAt }
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
    height: '5px',
    continuous: true
  },

  /*
  ** Global CSS
  */
  css: ['~/assets/main.css'],

  /*
  ** Plugins to load before mounting the App
  */
  // plugins: ['~/plugins/lazyload'],
  plugins: [
    { src: '~/plugins/lazyload', ssr: false }
  ],
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

  generate: {
    routes
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
