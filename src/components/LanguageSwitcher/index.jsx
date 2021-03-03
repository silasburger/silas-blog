import PropTypes from "prop-types"
import React, { Component } from "react"
import { Link } from "gatsby"
import i18n from "i18n";

function LanguageSwitcher({lang}) {

  let changeLanguage = () => {
    let nextLanguage; 
    if (lang === 'en') nextLanguage = 'es';
    else nextLanguage = 'en';
    return i18n.changeLanguage(nextLanguage);
  }

  const pathName = typeof window !== 'undefined' ? window.location.pathname : '';

  if (lang === "en") {
    return (
      <Link to={`/es${pathName}`} onClick={changeLanguage}>
        ES
      </Link>
    )
  } else {
    return (
      <Link
        to={pathName.replace("/" + lang + "/", "/")}
        onClick={changeLanguage}
      >
        EN
      </Link>
    )
  }
}
export default LanguageSwitcher