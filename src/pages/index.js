import React from "react";
import { graphql } from 'gatsby';
import Layout from 'components/Layout';
import { useTranslation } from 'react-i18next';
import BlockLink from 'components/BlockLink';


export default function Home({ data }) {
  const {t} = useTranslation();

  return (
    <Layout>
      <div>
        {t('hello')}
        <BlockLink link={'/about'}>
          <div />
        </BlockLink>
        <BlockLink link={'/blog'}>
          <div />        
        </BlockLink>
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
  }
`;
