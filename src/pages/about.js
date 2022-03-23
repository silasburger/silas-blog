import React from "react";
import Layout from 'components/Layout';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { graphql } from 'gatsby';

export default function About() {
  const { t } = useTranslation();
  
  return (
    <Layout>
      <p>{ t('about_text') }</p>
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
  }
`;
