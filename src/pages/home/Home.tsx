import { useThemeContext } from "../../contexts/ThemeProvider";
import { SocialIcons } from "../components/social-icons";
import darkHero from "../assets/images/dark-hero.svg";
import { useTranslation } from "react-i18next";
import hero from "../assets/images/hero.svg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  pagesVariants,
  appearVariants,
  fadeVariants,
  nameVariants,
} from "./variants";

export default function Home() {
  const { t } = useTranslation();
  const { theme } = useThemeContext();
  return (
    <motion.header
      variants={pagesVariants}
      initial="hidden"
      animate="visible"
      exit="exit_hidden"
      className="grid gap-6 lg:gap-0 lg:grid-cols-2 items-center"
    >
      <motion.div variants={appearVariants} className="flex-1">
        <h1 className="text-4xl lg:text-5xl rtl:font-ibmBold dark:text-neutral-200">
          {t("home.name.0")}{" "}
          <motion.span
            variants={nameVariants}
            className="text-sky-800 dark:text-[tan] inline-block mt-4 md:mt-8 lg:mt-0"
          >
            {t("home.name.1")}
          </motion.span>
        </h1>
        <p className="lg:w-3/4 my-2 text-neutral-600 dark:text-neutral-300">
          {t("home.goal")}
        </p>
        <Link to="/contact">
          <button className="button">{t("home.hero_btn")}</button>
        </Link>
        <SocialIcons />
      </motion.div>
      <motion.div
        variants={fadeVariants}
        className="lg:flex-1 relative flex justify-center items-center"
      >
        <img
          src={theme === "light" ? hero : darkHero}
          alt={t("home.hero.alt")}
          className="md:w-4/5"
        />
      </motion.div>
    </motion.header>
  );
}
