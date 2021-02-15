const path = require('path')

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const blogPostTemplate = require.resolve(`./src/templates/blogTemplate.js`)

  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.slug,
      component: blogPostTemplate,
      context: {
        // additional data can be passed via context
        slug: node.frontmatter.slug,
      },
    })
  })
}

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
    },
  })
}

// creating language urls for each page

// const config = require('./gatsby-config');
// /**
//  * Makes sure to create localized paths for each file in the /pages folder.
//  * For example, pages/404.js will be converted to /en/404.js and /el/404.js and
//  * it will be accessible from https:// .../en/404/ and https:// .../el/404/
//  */
// exports.onCreatePage = async ({ page, actions: { createPage, deletePage } }) => {

//   // Delete the original page (since we are gonna create localized versions of it)
//   await deletePage(page);

//   // Create one page for each locale
//   await Promise.all(
//     config.siteMetadata.supportedLanguages.map(async lang => {
//       const originalPath = page.path;
//       const localizedPath = `/${lang}${page.path}`;

//       await createPage({
//         ...page,
//         path: localizedPath,
//         context: {
//           ...page.context,
//           originalPath,
//           lang,
//         },
//       });
//     })
//   );
// };



/// pageContext.js

// import React from 'react';
// import { useTranslation } from 'react-i18next';

// const PageContext = React.createContext({});

// export const PageContextProvider = ({ pageContext, children }) => {
//   const { i18n } = useTranslation();
//   i18n.changeLanguage(pageContext.lang);

//   return <PageContext.Provider value={pageContext}>{children}</PageContext.Provider>;
// };

// export const usePageContext = () => React.useContext(PageContext);


//ssr

/**
 * Wrap all pages with a Translation provider and set the language on SSR time
 */
// export const wrapPageElement = ({ element, props }) => {
//   return <PageContextProvider value={props.pageContext}>{element}</PageContextProvider>;
// };



// gatsby-browser.js
// export { wrapPageElement, wrapRootElement } from './gatsby-ssr';