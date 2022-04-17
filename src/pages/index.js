import React from "react";
import { graphql } from 'gatsby';
import Layout from 'components/Layout';
import { useTranslation } from 'react-i18next';
import { useI18next, Link} from 'gatsby-plugin-react-i18next';
import './index.scss';


export default function Home({ location, data }) {
  const {t} = useTranslation(); 
  const { language } = useI18next();

  const {allMarkdownRemark: { edges }} = data;

  const posts = () => edges.map(post => {
    const {date, title, slug} = post.node.frontmatter;

    return (
      <div key={slug + date} className="post-wrapper">
        <Link language={language} to={slug}>
            {title}<br></ br><i>{date}</i>
        </Link>
      </div>
    );
  });

  return (
    <Layout location={location} >
      <div className="home-wrapper">
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
      limit: 1000
      sort: {order: DESC, fields: frontmatter___date}
      filter: {frontmatter: {lang: {eq: $language}}}
    ) {
      edges {
        node {
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            slug
          }
        }
      }
    }
  }
`;
