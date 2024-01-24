// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const yaml = require('js-yaml')
const fs   = require('fs')

module.exports = {
  siteName: 'Kusama Practice Course',
  siteDescription: 'Open online course on the everyday usage of Kusama and its parachains, with practical examples and test of knowledge in dapp with the learning management system elements.',
  siteUrl: 'https://kap2fox.github.io/kusama.practice',
  pathPrefix: '',
  titleTemplate: '%s',
    configureWebpack: {
        module: {
            rules: [
                {
                    test: /\.js$/,
                    // test: /node_modules[/\\]@polkadot*.js$/,
                    loader: require.resolve('@open-wc/webpack-import-meta-loader'),
                    // loader: '@open-wc/webpack-import-meta-loader',
                    exclude: /\.vue$/,
                },

                {
                    test: /\.m?js$/,
                    include: [/node_modules[/\\|]@polkadot/i, /node_modules[/\\|]@noble/i],
                    // exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env',
                            ],
                            plugins: [
                                "@babel/plugin-proposal-private-methods",
                                "@babel/plugin-proposal-class-properties",
                                '@babel/plugin-proposal-object-rest-spread',
                            ]
                        }
                    }
                },


            ]
        }
    },

  plugins: [
    {
      use: 'gridsome-plugin-gtm',
      options: {
        id: 'G-Z2T5V575QP',
        enabled: true,
        debug: true
      }
    },
    {
      use: "gridsome-plugin-translateit",
      options: {
        locales: ["en", "ru", "es", "de", "it", "pt"],
        slugifyDefaultLocale: true,
        defaultLocale: "en",
        translations: yaml.load(fs.readFileSync('./src/data/locales/translations.yaml', 'utf8')),
        routes: yaml.load(fs.readFileSync('./src/data/locales/routes.yaml', 'utf8')),
      }
    },
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'Course',
        baseDir: './courses', 
        // pathPrefix: '/online-course',
        template: './src/templates/Course.vue',
        plugins: [
          ['@noxify/gridsome-plugin-remark-embed', {'enabledProviders' : ['Youtube']}],
        ]
      }
    },
    {
      use: "gridsome-plugin-google-sheets-post"
    },
    {
      use: 'gridsome-plugin-seo'
    }
  ],


  chainWebpack: config => {

    // alias for easier access to files 
    config.resolve.alias.set('@imagesCourses', '/courses/images')
    config.resolve.alias.set('@imagesAuthors', '/courses/authors/avatars')

    config.mode('development')
  }


}
