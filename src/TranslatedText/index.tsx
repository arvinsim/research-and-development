import React from "react";

// the hook
import { useTranslation } from "react-i18next";

export function TranslatedText() {
  const { t, i18n } = useTranslation();
  return <h1>{t("Welcome to React")}</h1>;
}
