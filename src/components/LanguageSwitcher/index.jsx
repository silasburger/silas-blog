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

  if (lang === "en") {
    return (
      <Link to={`/es${window.location.pathname}`} onClick={changeLanguage}>
        ES
      </Link>
    )
  } else {
    return (
      <Link
        to={window.location.pathname.replace("/" + lang + "/", "/")}
        onClick={changeLanguage}
      >
        EN
      </Link>
    )
  }
}
export default LanguageSwitcher