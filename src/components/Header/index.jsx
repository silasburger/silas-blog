import React from "react";
import NavBar from 'components/NavBar';
import './styles.scss';

export default function Header({ location }) {
  return (
    <header>
      <NavBar location={location} />
    </header>
  );
}
