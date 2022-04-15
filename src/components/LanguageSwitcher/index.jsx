import React from "react";
import { Link, useI18next } from "gatsby-plugin-react-i18next";
import { IoGlobeOutline } from "react-icons/io5";

function LanguageSwitcher({ language }) {
  const { originalPath } = useI18next();

  if (language === "en") {
    return (
      <Link to={originalPath} language={'es'}>
        <IoGlobeOutline /> EN
      </Link>
    )
  } else {
    return (
      <Link
        to={originalPath}
        language={'en'}
      >
        <IoGlobeOutline /> ES
      </Link>
    )
  }
}
export default LanguageSwitcher
