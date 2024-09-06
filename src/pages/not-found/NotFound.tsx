import { fadeVariants, pagesVariants } from "./variants";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function NotFound() {
  const { t } = useTranslation();
  return (
    <motion.section
      variants={pagesVariants}
      initial="hidden"
      animate="visible"
      exit="exit_hidden"
      className="flex flex-col justify-center items-center gap-4"
    >
      <motion.h1 variants={fadeVariants} className="text-9xl text-red-700 dark:text-red-500">
        {t("not_found.head.title")}
      </motion.h1>
      <motion.p
        variants={pagesVariants}
        className="text-neutral-600 dark:text-neutral-300"
      >
        {t("not_found.head.body")}
      </motion.p>
      <Link to="/">
        <motion.button
          variants={fadeVariants}
          className="button bg-neutral-200 text-neutral-900 hover:bg-neutral-300"
        >
          {t("not_found.back_home")}
        </motion.button>
      </Link>
    </motion.section>
  );
}
