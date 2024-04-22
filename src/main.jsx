import global_en from "./translations/en/global.json";
import global_ar from "./translations/ar/global.json";
import { BrowserRouter } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import ReactDOM from "react-dom/client";
import i18next from "i18next";
import App from "./App.jsx";
import React from "react";
import "./index.css";

let currentLang =
  localStorage.getItem("lang") !== null ? localStorage.getItem("lang") : "en";
i18next.init({
  interpolation: { escapeValue: false },
  lng: currentLang,
  resources: {
    en: {
      global: global_en,
    },
    ar: {
      global: global_ar,
    },
  },
});
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </I18nextProvider>
  </React.StrictMode>
);
