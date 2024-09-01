import { pagesVariants, headerVariants } from "./variants";
import { useTranslation } from "react-i18next";
import { Project } from "../components";
import { motion } from "framer-motion";
import { imgs } from "./data";

export default function Portfolio() {
  const { t } = useTranslation();
  const projectTemplate = t("portfolio.projects", { returnObjects: true }).map(
    (project) => {
      let img = imgs.find((img) => img.id === project.id)!;
      return (
        <Project
          content={project}
          key={project.id}
          src={img?.src}
          thumbnail={img?.thumbnail}
        />
      );
    }
  );
  return (
    <motion.section
      variants={pagesVariants}
      initial="hidden"
      animate="visible"
      exit="exit_hidden"
      className="py-10"
    >
      <motion.header variants={headerVariants}>
        <h1 className="text-sky-800 dark:text-[tan] text-2xl rtl:font-ibmBold">
          {t("portfolio.head.title")}
        </h1>
        <p className="text-neutral-600 dark:text-neutral-300 mt-2.5">
          {t("portfolio.head.desc")}
        </p>
      </motion.header>
      <div className="xl:w-10/12 xl:mx-auto grid gap-16 lg:pt-20 py-10">
        {projectTemplate}
      </div>
    </motion.section>
  );
}
