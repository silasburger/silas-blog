import React from "react";
import { Link, useI18next, useTranslation} from 'gatsby-plugin-react-i18next';
import menuMap from './menuMap';
import LanguageSwitcher from 'components/LanguageSwitcher';

export default function NavBar() {
  const { language } = useI18next();
  const { t } = useTranslation();

  return (
    <nav>
      {menuMap.map(({name, link}) => <Link language={language} to={link}>{t(name)}</Link>)}
      <LanguageSwitcher language={language} />
    </nav>
  );
}
