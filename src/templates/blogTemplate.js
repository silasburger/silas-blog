import React from "react"
import { graphql } from "gatsby"
import Layout from 'components/Layout';
import { useI18next } from "gatsby-plugin-react-i18next";

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
  location
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;   

  const { language } = useI18next();
  const formattedDate = new Date(frontmatter.date).toLocaleDateString(language);
  return (
    <Layout location={location} >
      <div className="blog-post-wrapper">
        <div className="blog-post">
          <h1>{frontmatter.title}</h1>
          <h2>{formattedDate}</h2>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!, $language: String!) {
    markdownRemark(frontmatter: {slug: {eq: $slug}, lang: {eq: $language}}) {
      html
      frontmatter {
        date
        slug
        title
      }
    }
    locales: allLocale(filter: {language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`
