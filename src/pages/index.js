import React from "react"
import { useTranslation } from 'react-i18next';
// import { I18nextProvider, useTranslation } from 'react-i18next';
// import i18n from '../i18n/i18n';

export default function Home() {
  const {t} = useTranslation();
  return (
    // <I18nextProvider i18n={i18n}>
      <div>{t('hello')}</div>
    // </I18nextProvider>
  );
}
