import React from "react";
import { Link } from 'gatsby';
import menuMap from './menuMap';

export default function NavBar() {
  return (
    <nav>
      {menuMap.map(({name, link}) => <Link to={link}>{name}</Link>)}
    </nav>
  );
}