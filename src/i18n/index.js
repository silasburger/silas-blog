import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import resources from '../locales/translation.json';


export const changeLanguage = (lang, currentLanguage) => {
  if(lang !== currentLanguage) i18n.changeLanguage(lang);
}

i18n
  .use(initReactI18next) 
  .init({
    resources,
    fallbackLng: 'en',
    lng: 'en',
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    }, 
    initImmediate: false,
  }, 
);

  export default i18n;