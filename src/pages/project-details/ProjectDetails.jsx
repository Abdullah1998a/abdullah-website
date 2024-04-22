import { ProjectBackground } from "../components";
import { SliderControler } from "../components";
import { useTranslation } from "react-i18next";
import { ProjectSummary } from "../components";
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
      delay: 0.25,
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
export default function ProjectDetails() {
  const [t] = useTranslation("global");
  return (
    <motion.section
      variants={pagesVariants}
      initial="hidden"
      animate="visible"
      exit="exit_hidden"
      className="grid gap-10 py-10"
    >
      <Link className="w-fit h-fit" to="/portfolio">
        <motion.button variants={appearVariants} className="simple-link">
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
