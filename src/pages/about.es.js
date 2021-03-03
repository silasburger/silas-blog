import React, { useEffect } from "react";
import tw from "twin.macro";
import Layout from 'components/Layout';
import { useTranslation } from 'react-i18next';
import { changeLanguage } from 'i18n';

const Paragraph = tw.p`
  text-red-600
` 

export default function About() {
  const lang = 'es';
  const {t, i18n} = useTranslation();
  useEffect(() => {
    changeLanguage(lang, i18n.language); 
  });
  return (
    <Layout lang={lang}>
      <Paragraph>{ t('about_text') }</Paragraph>
    </Layout>
  );
}