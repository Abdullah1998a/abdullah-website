import { pagesVariants, appearVariants } from "./variants";
import { Platform, University } from "../components";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function Education() {
  const { t } = useTranslation();
  return (
    <motion.section
      variants={pagesVariants}
      initial="hidden"
      animate="visible"
      exit="exit_hidden"
      className="py-10"
    >
      <motion.header variants={appearVariants}>
        <h1 className="text-sky-800 dark:text-[tan] text-2xl rtl:font-ibmBold">
          {t("education.head.title")}
        </h1>
        <p className="text-neutral-600 dark:text-neutral-300 my-2.5">
          {t("education.head.desc")}
        </p>
      </motion.header>
      <div>
        <University />
        <Platform />
      </div>
    </motion.section>
  );
}
