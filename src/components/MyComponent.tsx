import { Suspense, useState } from "react";
import i18n from "i18next";
import { initReactI18next, useTranslation, Trans } from "react-i18next";

const translationsEn = {
  welcome: "Welcome.",
  bold: {
    italic: "Make me <bold><italics>bold and italic<italics/></bold>.",
  },
  changed: "You have changed languages {{count}} times.",
  changed_one: "You have changed languages {{count}} time.",
};
const translationsJa = {
  welcome: "ようこそ。",
  bold: {
    italic: "俺を<bold><italics>ボールドとイタリック</italics></bold>にしろ。",
  },
  changed: "あんたが{{count}}回言語を変えた。",
};

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: translationsEn },
    ja: { translation: translationsJa },
  },
  lng: "ja",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export const MyComponent = () => {
  const { t } = useTranslation();
  const [count, setCount] = useState(0);

  const handleChange = (e: any) => {
    i18n.changeLanguage(e.target.value);
    setCount(count + 1);
  };

  return (
    <Suspense fallback="...">
      <div className="">
        <p className="pb-2 text-sky-300">{t("welcome")}</p>

        <p className="pb-2 text-sky-300">
          <Trans components={{ bold: <strong />, italics: <em /> }}>
            bold.italic
          </Trans>
        </p>

        <p className="pb-2 text-sky-500">{t("changed", { count })}</p>

        <select name="lang" id="lang" about="" onChange={handleChange}>
          <option value="ja">日本語</option>
          <option value="en">English</option>
        </select>
      </div>
    </Suspense>
  );
};
