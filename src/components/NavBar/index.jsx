import React from "react";
import { Link, useI18next, useTranslation} from 'gatsby-plugin-react-i18next';
import {menuMap, menuMapHome} from './menuMap';
import LanguageSwitcher from 'components/LanguageSwitcher';
import { IoChevronBackSharp } from "react-icons/io5";

export default function NavBar() {
  const { language } = useI18next();
  const { t } = useTranslation();
  const pathname = typeof window !== undefined ? window.location.pathname : '';
  const menu = /^\/es\/?$|^\/$/.test(pathname) 
        ? menuMapHome 
        : menuMap;

  const renderLinks = () => {
    return menu.map(({name, link}) => {
      let content;
      if (name === 'back') content = <IoChevronBackSharp />;
      else content = t(name);
      return <Link language={language} to={link}>{content}</Link>;
    });
  }

  return (
    <nav>
      {renderLinks()}
      <LanguageSwitcher language={language} />
    </nav>
  );
}


