import i18next from "i18next";
import {
  initReactI18next,
  useTranslation as useI18nTranslation,
} from "react-i18next";

import en from "./en.json";
import no from "./no.json";

void i18next.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    no: { translation: no },
  },
  lng: "en",
  fallbackLng: "no",
  interpolation: {
    escapeValue: false,
  },
});

export const useTranslation = () => {
  const { t } = useI18nTranslation();
  return { t };
};

const configuredI18n = i18next;
export default configuredI18n;
