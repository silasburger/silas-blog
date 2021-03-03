import React, { useEffect } from "react";
import Layout from 'components/Layout';
import tw from "twin.macro";
import BlockLink from 'components/BlockLink';
import { changeLanguage } from 'i18n'
import { useTranslation } from "react-i18next";

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
  const lang='es';
  const {i18n} = useTranslation();
  useEffect(() => {
    changeLanguage(lang, i18n.language); 
  });
  return (
    <Layout lang={lang}>
      <HomeWrapper>
        <BlockLink link={'/es/astrology'}>
          <ReadingsBlock />
        </BlockLink>
        <BlockLink link={'/es/spanish'}>
          <SpanishBlock />        
        </BlockLink>
      </HomeWrapper>
    </Layout>
  );
}
