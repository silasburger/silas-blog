import React from "react";
import tw from "twin.macro";
import Header from 'components/Header';
import Footer from 'components/Footer';

const PageLayout = tw.div`
  text-blue-600
  h-full
`

export default function Layout({ children }) {

  return (
    <PageLayout>
      <Header />
        {children}
      <Footer />
    </PageLayout>
  )
}