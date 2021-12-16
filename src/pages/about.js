import React from "react";
import tw from "twin.macro";
import Layout from 'components/Layout';
import { useTranslation } from 'gatsby-plugin-react-i18next';

const Paragraph = tw.p`
  text-red-600
` 

export default function About() {
  const { t } = useTranslation();
  
  return (
    <Layout>
      <Paragraph>{ t('about_text') }</Paragraph>
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