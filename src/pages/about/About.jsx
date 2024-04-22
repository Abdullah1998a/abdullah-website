import darkCup from "../assets/images/dark-cup-of-tea.svg";
import cup from "../assets/images/cup-of-tea.svg";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const pagesVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
  exit_hidden: {
    x: "-100vw",
    opacity: 0,
    transition: {
      ease: "easeInOut",
    },
  },
};
const appearVariants = {
  hidden: {
    x: "-100vw",
  },
  visible: {
    x: 0,
  },
};
const fadeVariants = {
  hidden: {
    scale: 0,
  },
  visible: {
    scale: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};
export default function About({ theme }) {
  const [t] = useTranslation("global");
  return (
    <motion.section
      variants={pagesVariants}
      initial="hidden"
      animate="visible"
      exit="exit_hidden"
      className="grid gap-28 lg:gap-0 lg:grid-cols-2 items-center about"
    >
      <motion.div variants={fadeVariants} className="place-self-center">
        <motion.img
          className="mx-auto md:w-1/2 md:pt-16 lg:w-3/4 lg:pt-0"
          variants={fadeVariants}
          src={theme ? darkCup : cup}
          alt={t("about.cup.alt")}
        />
      </motion.div>
      <motion.div variants={appearVariants}>
        <h1 className="text-sky-800 dark:text-[tan] text-2xl font-sora rtl:font-ibmBold">
          {t("about.head")}
        </h1>
        <p className="text-slate-800 my-3 dark:text-neutral-300">
          {t("about.body")}
        </p>
        <div className="mb-5">
          <h3 className="font-sora rtl:font-ibmBold font-semibold text-lg mb-1.5 dark:text-neutral-200">
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
