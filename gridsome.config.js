// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const yaml = require('js-yaml')
const fs   = require('fs')

module.exports = {
  siteName: 'Kusama Practice Course',
  siteDescription: 'Open online course on the everyday usage of Kusama and its parachains, with practical examples and test of knowledge in dapp with the learning management system elements.',
  siteUrl: 'https://kusama.practice',
  pathPrefix: '',
  titleTemplate: '%s',

  plugins: [
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
    },
    {
      use: 'gridsome-plugin-matomo',
      options: {
        host: 'https://matomo.robonomics.network/',
        siteId: 1,
        requireConsent: true,
        trackerFileName: 'unicorn',
        trackerUrl: 'https://matomo.robonomics.network/rainbow.php',
        trackerScriptUrl: 'https://matomo.robonomics.network/unicorn.js'
      }
    }
  ],


  chainWebpack: config => {

    // alias for easier access to files 
    config.resolve.alias.set('@imagesCourses', '/courses/images')
    config.resolve.alias.set('@imagesAuthors', '/courses/authors/avatars')

    config.mode('development')
  }


}
