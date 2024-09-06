import { appearVariants, techVariants, fadeVariants } from "./variants";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { logos } from "./data";

export default function ProjectSummary() {
  const { t, i18n } = useTranslation();
  const { id } = useParams();
  let content = t("portfolio.projects", { returnObjects: true }).find(
    (project) => {
      if (id) {
        return project.id == parseInt(id)
      }
    }
  )!;
  const {
    name,
    summary,
    links: { live, code },
  } = content.project;
  const logosTemplate = logos.map(({ id, img: { src, alt } }) => (
    <motion.li
      variants={techVariants}
      className="bg-slate-200 dark:bg-neutral-800 dark:text-neutral-200 px-1.5 py-1 shadow rounded-sm font-sen"
      key={id}
    >
      <img src={src} alt={alt} />
    </motion.li>
  ));
  return (
    <motion.div
      variants={appearVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col gap-3 py-6"
    >
      <h2 className="text-primary dark:text-dark text-xl rtl:font-rubik">
        {name}
      </h2>
      <p className="text-neutral-600 dark:text-neutral-300">
        {summary}
      </p>
      <motion.ul variants={techVariants} className="flex gap-2 items-center">
        {logosTemplate}
      </motion.ul>
      <div className="flex gap-4 items-center">
        <motion.a
          variants={fadeVariants}
          target="_blank"
          rel="noreferrer"
          href={live.url}
          key="netlify"
        >
          <button className="button">{live.name}</button>
        </motion.a>
        <motion.a
          variants={fadeVariants}
          target="_blank"
          rel="noreferrer"
          href={code.url}
          key="github"
        >
          <button className="simple-link flex gap-1 items-center">
            {code.name}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              className={`w-3 translate-y-3 ${i18n.language === "ar" ? "[transform:rotateY(180deg)]" : "[transform:rotateY(0deg)]"}`}
            >
              <path
                fill="none"
                className="stroke-primary dark:stroke-dark"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M21 3h-6.75M21 3v6.75M21 3l-8.25 8.25M9.4 3c-2.24 0-3.36 0-4.216.436a4 4 0 0 0-1.748 1.748C3 6.04 3 7.16 3 9.4v5.2c0 2.24 0 3.36.436 4.216a4 4 0 0 0 1.748 1.748C6.04 21 7.16 21 9.4 21h5.2c2.24 0 3.36 0 4.216-.436a4 4 0 0 0 1.748-1.748C21 17.96 21 16.84 21 14.6v-1.1"
              />
            </svg>
          </button>
        </motion.a>
      </div>
    </motion.div>
  );
}
