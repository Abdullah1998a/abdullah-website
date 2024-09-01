import { AnimatePresence, motion } from "framer-motion";
import { LanguageTheme } from "../language-theme";
import { Dispatch, SetStateAction } from "react";
import { useTranslation } from "react-i18next";
import { menuLinksVariants } from "./variants";
import { Link } from "../link";
import "./links.css";

type LinksProbs = {
  show: boolean,
  setShow: Dispatch<SetStateAction<boolean>>
}
export default function Links({ show, setShow }:LinksProbs) {
  const { t } = useTranslation();
  const linksTemplate = t("links", { returnObjects: true }).map((link) => (
    <Link {...link} key={link.id} />
  ));
  return (
    <AnimatePresence>
      <motion.ul
        layout
        variants={menuLinksVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        key={show ? "open": "close"}
        className={`menu-links ${show ? "active" : ""}`}
      >
        {linksTemplate}
        <LanguageTheme setShow={setShow} />
      </motion.ul>
    </AnimatePresence>
  );
}
