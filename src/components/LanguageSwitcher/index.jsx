import React from "react"
import { Link, useI18next } from "gatsby-plugin-react-i18next"

function LanguageSwitcher({ language }) {
  const { originalPath } = useI18next();

  if (language === "en") {
    return (
      <Link to={originalPath} language={'es'}>
        ES
      </Link>
    )
  } else {
    return (
      <Link
        to={originalPath}
        language={'en'}
      >
        EN
      </Link>
    )
  }
}
export default LanguageSwitcher