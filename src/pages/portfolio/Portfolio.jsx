import easybankThumbnail from "../assets/images/easybank-project/thumbnails/easybank.jpg";
import huddleThumbnail from "../assets/images/huddle-project/thumbnails/huddle.jpg";
import insureThumbnail from "../assets/images/insure-project/thumbnails/insure.jpg";
import blogrThumbnail from "../assets/images/blogr-project/thumbnails/blogr.jpg";
import easybank from "../assets/images/easybank-project/easybank.jpg";
import huddle from "../assets/images/huddle-project/huddle.jpg";
import insure from "../assets/images/insure-project/insure.jpg";
import blogr from "../assets/images/blogr-project/blogr.jpg";
import { useTranslation } from "react-i18next";
import { Project } from "../components";
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
  },
};
const headerVariants = {
  hidden: {
    x: "-100vw",
  },
  visible: {
    x: 0,
  },
};
const imgs = [
  {
    id: 1,
    src: huddle,
    thumbnail: huddleThumbnail,
  },
  {
    id: 2,
    src: easybank,
    thumbnail: easybankThumbnail,
  },
  {
    id: 3,
    src: blogr,
    thumbnail: blogrThumbnail,
  },
  {
    id: 4,
    src: insure,
    thumbnail: insureThumbnail,
  },
];
export default function Portfolio() {
  const [t] = useTranslation("global");
  return (
    <motion.section
      variants={pagesVariants}
      initial="hidden"
      animate="visible"
      exit="exit_hidden"
      className="py-10"
    >
      <motion.header variants={headerVariants}>
        <h1 className="text-sky-800 dark:text-[tan] text-2xl font-sora rtl:font-ibmBold">
          {t("portfolio.head.title")}
        </h1>
        <p className="text-slate-800 mt-2.5 dark:text-neutral-300">
          {t("portfolio.head.desc")}
        </p>
      </motion.header>
      <div className="xl:w-10/12 xl:mx-auto grid gap-16 lg:pt-20 py-10">
        {t("portfolio.projects", { returnObjects: true }).map((project) => {
          let img = imgs.find((img) => img.id === project.id);
          return (
            <Project
              content={project}
              key={project.id}
              src={img.src}
              thumbnail={img.thumbnail}
            />
          );
        })}
      </div>
    </motion.section>
  );
}
