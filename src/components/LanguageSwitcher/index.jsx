import React from "react";
import { Link, useI18next } from "gatsby-plugin-react-i18next";
import { IoGlobeOutline } from "react-icons/io5";
import './styles.scss';

function LanguageSwitcher({ language }) {
  const { originalPath } = useI18next();
  let link;

  if (language === "en") {
    link = (
      <Link to={originalPath} language={'es'}>
        <IoGlobeOutline /> en
      </Link>
    )
  } else {
    link = (
      <Link
        to={originalPath}
        language={'en'}
      >
            <IoGlobeOutline /> es
      </Link>
    )
  }
  return (
    <div className="link-wrapper language-switcher">
      {link}
    </div>
  );
}
export default LanguageSwitcher
