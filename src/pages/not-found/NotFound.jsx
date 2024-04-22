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
const fadeVariants = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
  },
};
export default function NotFound() {
  const [t] = useTranslation("global");
  return (
    <motion.section
      variants={pagesVariants}
      initial="hidden"
      animate="visible"
      exit="exit_hidden"
      className="flex flex-col justify-center items-center gap-4"
    >
      <motion.h1 variants={fadeVariants} className="text-9xl text-red-600">
        {t("not_found.head.title")}
      </motion.h1>
      <motion.p variants={pagesVariants} className="text-neutral-600">
        {t("not_found.head.body")}
      </motion.p>
      <Link to="/">
        <motion.button
          variants={fadeVariants}
          className="button bg-white text-neutral-700 hover:bg-neutral-200 border-2 hover:border-sky-700"
        >
          {t("not_found.back_home")}
        </motion.button>
      </Link>
    </motion.section>
  );
}
