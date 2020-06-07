/* eslint-disable prettier/prettier */
import posts from './posts/index.js'
const path = require('path')
const pkg = require('./package')
const blogTitle = 'A blog by Muhammad Farid Zia'
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
    title: `${blogTitle}`,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      // { hid: 'description', name: 'description', content: pkg.description },
      // { name: 'author', content: 'Muhammad Farid Zia'},
      { hid: 'keywords', name: 'keywords', content: 'muhfaridzia, mfaridzia, muhammad farid zia, frontend, frontend developer' },

      { name: 'theme-color', content: '#189ad3;' },
      { name: 'mobile-web-app-capable', content: 'yes' },
      { hid: 'apple-mobile-web-app-title', name: 'apple-mobile-web-app-title', content: `${blogTitle}` },

      { hid: 'og:image', property: 'og:image', content: icon },
      { hid: 'og:image:secure_url', property: 'og:image:secure_url', content: icon },
      { hid: 'og:image:width', property: 'og:image:width', content: '512' },
      { hid: 'og:image:height', property: 'og:image:height', content: '512' },
      { hid: 'og:title', property: 'og:title', content: `${blogTitle}` },
      { hid: 'og:description', property: 'og:description', content: pkg.description },
      { hid: 'og:url', property: 'og:url', content: blogUrl },
      { hid: 'og:site_name', property: 'og:site_name', content: 'Muhammad Farid Zia' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'profile:username', property: 'profile:muhfaridzia', content: 'muhfaridzia' },

      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:creator', content: '@Muhfaridzia' },
      { name: 'twitter:site', content: '@Muhfaridzia' },
      { hid: 'twitter:image:src', name: 'twitter:image:src', content: icon },
      { hid: 'twitter:title', name: 'twitter:title', content: `${blogTitle}` },
      { hid: 'twitter:description', name: 'twitter:description', content: pkg.description },
      { hid: 'twitter:url', name: 'twitter:url', content: blogUrl }
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
