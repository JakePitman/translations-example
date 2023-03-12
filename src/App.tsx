import React from "react";
import "./App.css";
import { MyComponent } from "./components/MyComponent";
import { TRANSLATIONS } from "./translations";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: TRANSLATIONS,
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
