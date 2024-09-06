import { pagesVariants, appearVariants } from "./variants";
import { ProjectBackground } from "../components";
import { SliderControler } from "../components";
import { useTranslation } from "react-i18next";
import { ProjectSummary } from "../components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function ProjectDetails() {
  const { t, i18n } = useTranslation();
  return (
    <motion.section
      variants={pagesVariants}
      initial="hidden"
      animate="visible"
      exit="exit_hidden"
      className="grid gap-10 py-10"
    >
      <Link className="w-fit h-fit" to="/portfolio">
        <motion.button
          variants={appearVariants}
          className="simple-link flex gap-0.5 items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            className={`w-4 ${i18n.language === "en" ? "rotate-180" : null}`}
          >
            <path
              className="fill-primary dark:fill-dark"
              fillRule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
            />
          </svg>
          {t("portfolio.return_btn")}
        </motion.button>
      </Link>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
        <ProjectSummary />
        <ProjectBackground />
      </div>
      <SliderControler />
    </motion.section>
  );
}
