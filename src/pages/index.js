import React from "react";
import { graphql } from 'gatsby';
import Layout from 'components/Layout';
import { useTranslation } from 'react-i18next';
import tw from "twin.macro";
import BlockLink from 'components/BlockLink';

const ReadingsBlock = tw.div`
  w-64
  h-10
  border-solid
  border-red-500
  border-2
`

const SpanishBlock = tw.div`
  w-64
  h-10
  border-solid
  border-red-500
  border-2
`

const HomeWrapper = tw.div`
  flex
  justify-around
`

export default function Home({ data }) {
  const {t} = useTranslation();

  return (
    <Layout>
      <HomeWrapper>
        {t('hello')}
        <BlockLink link={'/about'}>
          <ReadingsBlock />
        </BlockLink>
        <BlockLink link={'/blog'}>
          <SpanishBlock />        
        </BlockLink>
      </HomeWrapper>
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