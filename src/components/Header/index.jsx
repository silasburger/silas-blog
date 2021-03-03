import React from "react";
import NavBar from 'components/NavBar';

export default function Header({lang}) {
  return (
    <header>
      <NavBar lang={lang}/>
    </header>
  );
}