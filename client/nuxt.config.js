module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'wowdb',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'A vanilla 1.12.1 world of warcraft database' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.0.13/css/all.css'},
      { rel: 'stylesheet', href: '/main.css'},
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans'}
    ],

  },
    css: [
    { src: '~/assets/styles.scss', lang: 'scss' },
    { src: 'font-awesome/scss/font-awesome.scss', lang: 'scss' }
  ],
  axios: {
  baseURL: 'http://localhost:8081/'
},
auth: {
  strategies: {
    local: {
      endpoints: {
        login: { url: 'login', method: 'post', propertyName: 'token' },
         user: { url: 'me', method: 'get', propertyName: 'user' },
        logout: false
      }
    }
  }
},
  router: {
  middleware: ['auth']
},
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth'
  ],
  plugins: [
    '~/plugins/wysiwyg.js'
],
postcss: {
      plugins: {
        'postcss-custom-properties': {
          warnings: false
        }
      }
    },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070', height: '10px' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    vendor: ['vuetify'],
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
