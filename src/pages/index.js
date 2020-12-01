import React from "react";
import Layout from 'components/Layout';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const {t} = useTranslation();
  return (
    <Layout>
      <div>{t('hello')}</div>
    </Layout>
  );
}
