import React from 'react';
import i18n from 'i18n';
import { I18nextProvider } from 'react-i18next';
import { GlobalStyles } from 'twin.macro'

export const wrapRootElement = ({ element }) => {
  return (
    <I18nextProvider i18n={i18n}>
      <GlobalStyles />
      {element}
    </I18nextProvider>
  );
};