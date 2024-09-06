import { pagesVariants, appearVariants, fadeVariants } from "./variants";
import { useThemeContext } from "../../contexts/ThemeProvider";
import darkAbout from "../assets/images/dark-about.svg";
import about from "../assets/images/about.svg";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function About() {
  const { t } = useTranslation();
  const { theme } = useThemeContext();
  return (
    <motion.section
      variants={pagesVariants}
      initial="hidden"
      animate="visible"
      exit="exit_hidden"
      className="grid gap-6 lg:gap-0 lg:grid-cols-2 items-center about"
    >
      <motion.div
        variants={fadeVariants}
        className="flex-1 relative flex justify-center items-center"
      >
        <img
          src={theme === "light" ? about : darkAbout}
          key={theme}
          alt={t("about.about_img.alt")}
          className="w-5/6"
        />
      </motion.div>
      <motion.div variants={appearVariants} className="flex-1">
        <h1 className="text-primary dark:text-dark text-2xl rtl:font-ibmBold">
          {t("about.head")}
        </h1>
        <div className="my-3">
          {t("about.body", { returnObjects: true }).map((sentence) => (
            <p
              key={sentence}
              className="text-neutral-600 dark:text-neutral-300"
            >
              {sentence}
            </p>
          ))}
        </div>
        <div className="mb-5">
          <h3 className="rtl:font-ibmBold font-semibold text-lg mb-1.5 dark:text-neutral-200">
            {t("about.quotation.head")}
          </h3>
          <p className="bg-gray-200 dark:bg-neutral-800 dark:text-neutral-300 p-4 rounded-md shadow-md">
            {t("about.quotation.quote")}
          </p>
        </div>
        <Link to="/portfolio" onClick={() => window.scrollTo(0, 0)}>
          <button className="button">{t("about.works_btn")}</button>
        </Link>
      </motion.div>
    </motion.section>
  );
}
