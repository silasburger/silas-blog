/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Lisa Ortega',
    menuLink: [
      {
        name: 'Home',
        link: '/',
      },
      {
        name: 'Language Course',
        link: '/courses' 
      },
      {
        name: 'Astrology Readings',
        link: '/readings' 
      },
      {
        name: 'Blog',
        link: '/blog',
      },
      {
        name: 'Contact', 
        link: '/contact',
      },
    ],
  }, 
  plugins: [
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/blog`,
      },
    },
    `gatsby-transformer-remark`,
    ],
}
