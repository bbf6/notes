const ESLintPlugin = require('eslint-webpack-plugin')

const { configure } = require('quasar/wrappers')

module.exports = configure(function (ctx) {
  return {
    supportTS: false,
    boot: [],
    css: [
      'app.sass'
    ],
    extras: [
      'roboto-font',
      'material-icons'
    ],
    build: {
      vueRouterMode: 'hash',
      chainWebpack (chain) {
        chain.plugin('eslint-webpack-plugin')
          .use(ESLintPlugin, [{ extensions: [ 'js', 'vue' ] }])
        chain.module.rule('pug')
          .test(/\.pug$/)
          .use('pug-plain-loader')
          .loader('pug-plain-loader')
      }
    },
    devServer: {
      server: {
        type: 'http'
      },
      port: 8080,
      open: true
    },
    framework: {
      config: {},
      plugins: ['LocalStorage', 'Dialog']
    },
    animations: [],
    ssr: {
      pwa: false,
      prodPort: 3000,
      maxAge: 1000 * 60 * 60 * 24 * 30,
      chainWebpackWebserver (chain) {
        chain.plugin('eslint-webpack-plugin')
          .use(ESLintPlugin, [{ extensions: [ 'js' ] }])
      },
      middlewares: [
        ctx.prod ? 'compression' : '',
        'render'
      ]
    },
    pwa: {
      workboxPluginMode: 'GenerateSW',
      workboxOptions: {},
      chainWebpackCustomSW (chain) {
        chain.plugin('eslint-webpack-plugin')
          .use(ESLintPlugin, [{ extensions: [ 'js' ] }])
      },
      manifest: {
        name: `notes`,
        short_name: `notes`,
        description: `Simple app for notes`,
        display: 'standalone',
        orientation: 'portrait',
        background_color: '#ffffff',
        theme_color: '#027be3',
        icons: [
          {
            src: 'icons/icon-128x128.png',
            sizes: '128x128',
            type: 'image/png'
          },
          {
            src: 'icons/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'icons/icon-256x256.png',
            sizes: '256x256',
            type: 'image/png'
          },
          {
            src: 'icons/icon-384x384.png',
            sizes: '384x384',
            type: 'image/png'
          },
          {
            src: 'icons/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    },
    cordova: {},
    capacitor: {
      hideSplashscreen: true
    },
    bin: {
      linuxAndroidStudio: '/snap/android-studio-canary/current/android-studio/bin/studio.sh'
    },
    electron: {
      bundler: 'packager',
      packager: {},
      builder: {
        appId: 'notes'
      },
      chainWebpackMain (chain) {
        chain.plugin('eslint-webpack-plugin')
          .use(ESLintPlugin, [{ extensions: [ 'js' ] }])
      },
      chainWebpackPreload (chain) {
        chain.plugin('eslint-webpack-plugin')
          .use(ESLintPlugin, [{ extensions: [ 'js' ] }])
      }
    }
  }
})
