import React from "react";
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

export default function Home() {
  // const {t} = useTranslation();



  return (
    <Layout>
      <HomeWrapper>
        <BlockLink link={'/astrology'}>
          <ReadingsBlock />
        </BlockLink>
        <BlockLink link={'/spanish'}>
          <SpanishBlock />        
        </BlockLink>
      </HomeWrapper>
    </Layout>
  );
}
