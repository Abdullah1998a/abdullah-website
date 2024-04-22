import { Platform, University } from "../components";
import { useTranslation } from "react-i18next";
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
    x: "-50vw",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
  },
};
export default function Education() {
  const [t] = useTranslation("global");
  return (
    <motion.section
      variants={pagesVariants}
      initial="hidden"
      animate="visible"
      exit="exit_hidden"
      className="py-10"
    >
      <motion.header variants={appearVariants}>
        <h1 className="text-sky-800 dark:text-[tan] text-2xl font-sora rtl:font-ibmBold">
          {t("education.head.title")}
        </h1>
        <p className="text-slate-800 my-2.5 dark:text-neutral-300">
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
