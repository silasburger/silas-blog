import React from "react";
import { Link } from 'gatsby';
import menuMap from './menuMap';
import LanguageSwitcher from 'components/LanguageSwitcher';

export default function NavBar({lang}) {
  return (
    <nav>
      {menuMap.map(({name, link}) => <Link to={link}>{name}</Link>)}
      <LanguageSwitcher lang={lang}/>
    </nav>
  );
}