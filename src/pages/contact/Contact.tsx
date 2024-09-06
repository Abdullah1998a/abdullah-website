import { useThemeContext } from "../../contexts/ThemeProvider";
import { pagesVariants, appearVariants } from "./variants";
import { AnimatePresence, motion } from "framer-motion";
import contact from "../assets/images/contact.svg";
import darkContact from "../assets/images/dark-contact.svg";
import { useTranslation } from "react-i18next";
import { Success } from "../components";
import { Form } from "../components";
import { useState } from "react";

type ThankType = {
  name: string,
  success_message: {
    head: string,
    body: string,
  },
}
export default function Contact() {
  const [thank, setThank] = useState<ThankType | null>(null);
  const { t } = useTranslation();
  const { theme } = useThemeContext();
  return (
    <motion.section
      variants={pagesVariants}
      initial="hidden"
      animate="visible"
      exit="exit_hidden"
      className="grid lg:grid-cols-2 items-center py-10 relative"
    >
      <motion.header variants={appearVariants} className="flex-1">
        <div className="block lg:hidden">
          <h1 className="text-primary dark:text-dark text-2xl rtl:font-ibmBold">
            {t("contact.head.title")}
          </h1>
          <p className="text-neutral-600 my-2.5 dark:text-neutral-300">
            {t("contact.head.desc")}
          </p>
        </div>
        <div className="hidden lg:block">
          <img
            src={theme === "light" ? contact : darkContact}
            alt="contact image"
            className="w-4/5"
          />
        </div>
      </motion.header>
      <Form setThank={setThank} />
      <AnimatePresence mode="wait">
        {thank && <Success thank={thank} setThank={setThank} />}
      </AnimatePresence>
    </motion.section>
  );
}
