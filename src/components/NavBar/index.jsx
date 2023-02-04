import React from "react";
import { Link, useI18next, useTranslation } from 'gatsby-plugin-react-i18next';
import { menuMap, menuMapHome } from './menuMap';
import LanguageSwitcher from 'components/LanguageSwitcher';
import { IoChevronBackSharp } from "react-icons/io5";
import './styles.scss';

export default function NavBar({ location }) {
  const { language } = useI18next();
  const { t } = useTranslation();
  const pathname = location.pathname;
  const menu = /^\/es\/?$|^\/$/.test(pathname)
    ? menuMapHome
    : menuMap;

  const renderLinks = () => {
    return menu.map(({ name, link, label }) => {
      let content;
      if (name === 'back') content = <IoChevronBackSharp />;
      else content = t(label);
      return <div className={`link-wrapper ${name}`}>
        <Link language={language} to={link}>{content}</Link>
      </div>;
    });
  }

  return (
    <nav>
      {renderLinks()}
      <LanguageSwitcher language={language} />
    </nav>
  );
}


