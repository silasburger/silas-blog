import React from "react";
import Header from 'components/Header';
import Footer from 'components/Footer';

export default function Layout({ location, children }) {

  return (
    <div>
      <Header location={location} />
        {children}
      <Footer />
    </div>
  )
}
