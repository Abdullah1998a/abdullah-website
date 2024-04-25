import { useTranslation } from "react-i18next";
import { Success } from "../components";
import { AnimatePresence, motion } from "framer-motion";
import { Form } from "../components";
import { useState } from "react";

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
      when:"beforeChildren",
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
export default function Contact() {
  const [thank, setThank] = useState(null);
  const [t] = useTranslation("global");
  return (
    <motion.section
      variants={pagesVariants}
      initial="hidden"
      animate="visible"
      exit="exit_hidden"
      className="grid lg:grid-cols-2 xl:grid-cols-3 items-center py-10 relative"
    >
      <motion.header variants={appearVariants}>
        <h1 className="text-sky-800 dark:text-[tan] text-3xl font-sora rtl:font-ibmBold">
          {t("contact.head.title")}
        </h1>
        <p className="text-slate-800 my-2.5 dark:text-neutral-300">
          {t("contact.head.desc")}
        </p>
      </motion.header>
      <Form setThank={setThank} />
      <AnimatePresence mode="wait">
        {thank && <Success thank={thank} setThank={setThank} />}
      </AnimatePresence>
    </motion.section>
  );
}
