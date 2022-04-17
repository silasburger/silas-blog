/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "silas.blog",
    supportedLanguages: ['en', 'es'],
    defaultLanguage: 'en',
  }, 
  plugins: [
    `gatsby-plugin-netlify-cms`,
    'gatsby-plugin-netlify',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/locales`,
        name: `locale`
      }
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locale`, // name given to `gatsby-source-filesystem`
        languages: [`en`, `es`],
        defaultLanguage: `en`,
        // if you are using Helmet, you must include siteUrl, and make sure you add http:https
        siteUrl: `https://silas.blog`,
        // you can pass any i18next options
        // pass following options to allow message content as a key
        i18nextOptions: {
          interpolation: {
            escapeValue: false // not needed for react as it escapes by default
          },
          keySeparator: false,
          nsSeparator: false,
          debug: true,
        },
        pages: [
          // {
          //   matchPath: '/:lang?/about',
          //   getLanguageFromPath: true,
          //   languages: ['es', 'en']
          // },
          {
            matchPath: '/:lang?/post/:uid',
            getLanguageFromPath: true,
            languages: ['es', 'en'],
          },
          // {
          //   matchPath: '/',
          //   getLanguageFromPath: true,
          //   languages: ['es', 'en'],
          // },
        ]
      }
    }
  ],
}
