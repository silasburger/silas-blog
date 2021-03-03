import React from "react";
import tw from "twin.macro";
import Header from 'components/Header';
import Footer from 'components/Footer';
// import i18n from 'i18n';

const PageLayout = tw.div`
  text-blue-600
` 

export default function Layout({ children, lang }) {
  // i18n.changeLanguage(lang);

  return (
    <PageLayout>
      <Header lang={lang}/>
        {children}
      <Footer lang={lang}/>
    </PageLayout>
  )
}