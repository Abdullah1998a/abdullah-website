import { useThemeContext } from "../../../contexts/ThemeProvider";
import englishLanguage from "../../assets/images/english.svg";
import arabicLanguage from "../../assets/images/arabic.svg";
import lightTheme from "../../assets/images/light.svg";
import { appearenceButtonVariants } from "./variants";
import darkTheme from "../../assets/images/dark.svg";
import { useTranslation } from "react-i18next";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./language-theme.css";

type LanguageThemeProbs = {
  setShow: Dispatch<SetStateAction<boolean>>
}
export default function LanguageTheme({ setShow }:LanguageThemeProbs) {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language);
  const { theme, setTheme } = useThemeContext();
  const handleLanguage = (language:string) => {
    i18n.changeLanguage(language);
    setLang(language);
    setShow(false);
  };
  const handleTheme = (theme:string) => {
    setTheme(theme);
    setShow(false);
  };
  useEffect(() => {
    document.body.dir = i18n.dir();
    localStorage.setItem("lang", i18n.language);
  }, [lang]);
  return (
    <motion.li
      key="appearence"
      variants={appearenceButtonVariants}
      className="flex gap-4"
    >
      <button
        className={`appearence-button ${lang}`}
        onClick={() => handleLanguage(lang === "en" ? "ar" : "en")}
      >
        <motion.span layout>
          <img
            src={lang === "en" ? arabicLanguage : englishLanguage}
            alt={`${lang === "en" ? "english" : "arabic"} language`}
          />
        </motion.span>
      </button>
      <button
        className={`appearence-button ${theme}`}
        onClick={() => handleTheme(theme === "light" ? "dark" : "light")}
      >
        <motion.span layout>
          <img
            src={theme === "dark" ? lightTheme : darkTheme}
            alt={theme === "light" ? "light theme" : "dark theme"}
          />
        </motion.span>
      </button>
    </motion.li>
  );
}
