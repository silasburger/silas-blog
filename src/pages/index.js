import React from "react";
import { graphql } from 'gatsby';
import Layout from 'components/Layout';
import { useTranslation } from 'react-i18next';
import { Link, useI18next} from 'gatsby-plugin-react-i18next';


export default function Home({ data }) {
  const {t} = useTranslation(); 
  const { language } = useI18next();

  const {allMarkdownRemark: { edges }} = data;

  const posts = () => edges.map(post => {
    const {date, title, slug} = post.node.frontmatter;

    return (
      <div key={slug + date} className="post-wrapper">
        <Link language={language} to={slug}>{title}</Link><i>{date}</i>
      </div>
    );
  });

  return (
    <Layout>
      <div>
        <h1>Posts</h1>
        {posts()}
      </div>
    </Layout>
  );
}

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    allMarkdownRemark(
      sort: {order: DESC, fields: [frontmatter___date]}
     limit: 1000
    ) {
      edges {
        node {
          frontmatter {
            date
            title
            slug
          }
        }
      }
    }
  }
`;
