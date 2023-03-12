import React from "react";
import "./App.css";
import { MyComponent } from "./components/MyComponent";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

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

function App() {
  return (
    <div className="w-[100%] h-[100vh] flex justify-center items-center">
      <MyComponent />
    </div>
  );
}

export default App;
