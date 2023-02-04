import React from "react";
import Header from 'components/Header';
import Footer from 'components/Footer';
import './styles.scss';

export default function Layout({ location, children }) {

  return (
    <div className="container-fluid ">
      <Header location={location} />
      <div className="container" >
        {children}
      </div>
      <Footer />
    </div>
  )
}
