import React from "react";
import Header from 'components/Header';
import Footer from 'components/Footer';
import './styles.scss';

export default function Layout({ location, children }) {

  return (
    <div className="layout-wrapper">
      <Header location={location} />
        <div className="page-wrapper" >
          {children}
        </div>
      <Footer />
    </div>
  )
}
