import React, { useEffect } from "react";
import tw from "twin.macro";
import Layout from 'components/Layout';
import { changeLanguage } from 'i18n'
import { useTranslation } from "react-i18next";

const Paragraph = tw.p`
  text-red-600
` 

export default function Spanish() {
  const lang='en';
  const {i18n} = useTranslation();
  useEffect(() => {
    changeLanguage(lang, i18n.language); 
  });
  return (
    <Layout lang={lang}>
      <Paragraph>Spanish reading information</Paragraph>
    </Layout>
  );
}