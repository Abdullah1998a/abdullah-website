import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import arabicLanguage from "../../assets/images/arabic.svg";
import englishLanguage from "../../assets/images/english.svg";
import lightTheme from "../../assets/images/light.svg";
import darkTheme from "../../assets/images/dark.svg";
import "./links.css";

const menuLinksVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};
const menuLinkVariants = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
};
const appearenceButtonVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.7,
    },
  },
};
export default function Links({ show, setShow, theme, setTheme }) {
  const [t, i18n] = useTranslation("global");
  const [lang, setLang] = useState(i18n.language);
  const handleLanguage = (language) => {
    i18n.changeLanguage(language);
    setLang(language);
    setShow(false);
  };
  const handleTheme = () => {
    setTheme(!theme);
    setShow(false);
  };
  useEffect(() => {
    document.body.dir = i18n.dir();
    localStorage.setItem("lang", i18n.language);
  }, [lang]);
  useEffect(() => {
    localStorage.setItem("theme", `${theme ? "dark" : "light"}`);
  }, [theme]);
  return (
    <AnimatePresence>
      <motion.ul
        layout
        variants={menuLinksVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        key={show}
        className={`menu-links ${show ? "active" : null}`}
      >
        {t("links", { returnObjects: true }).map(({ id, name, path }) => (
          <motion.li
            className={`${id === 5 ? "contact" : null}`}
            key={id}
            variants={menuLinkVariants}
          >
            <NavLink className="text-lg dark:text-neutral-200" to={path}>
              {name}
            </NavLink>
          </motion.li>
        ))}
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
            className={`appearence-button ${theme ? "dark" : null}`}
            onClick={handleTheme}
          >
            <motion.span layout>
              <img
                src={theme ? lightTheme : darkTheme}
                alt={theme ? "light theme" : "dark theme"}
              />
            </motion.span>
          </button>
        </motion.li>
      </motion.ul>
    </AnimatePresence>
  );
}
