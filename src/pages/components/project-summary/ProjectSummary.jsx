import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import reactJSLogo from "../../assets/images/reactjs.svg";
import framerMotionLogo from "../../assets/images/framer-motion.svg";
import tailwindCSSLogo from "../../assets/images/tailwind-css.svg";

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
const techVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.15,
    },
  },
};
const fadeVariants = {
  hidden: {
    scale: 0,
  },
  visible: {
    scale: 1,
    transition: {
      delay: 0.1,
    },
  },
};
const logos = [
  {
    id: 1,
    img: {
      src: reactJSLogo,
      alt: "reactJS logo",
    },
  },
  {
    id: 2,
    img: {
      src: tailwindCSSLogo,
      alt: "tailwind css logo",
    },
  },
  {
    id: 3,
    img: {
      src: framerMotionLogo,
      alt: "framer motion logo",
    },
  },
];
export default function ProjectSummary() {
  const [t] = useTranslation("global");
  const { id } = useParams();
  let content = t("portfolio.projects", { returnObjects: true }).find(
    (project) => project.id == id
  );
  const {
    name,
    summary,
    links: { live, code },
  } = content.project;
  return (
    <motion.div
      variants={appearVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col gap-3 py-6"
    >
      <h2 className="text-sky-800 dark:text-[tan] text-xl font-sora rtl:font-sen">
        {name}
      </h2>
      <p className="text-slate-800 text-balance dark:text-neutral-300">
        {summary}
      </p>
      <motion.ul variants={techVariants} className="flex gap-2 items-center">
        {logos.map(({ id, img: { src, alt } }) => (
          <motion.li
            variants={techVariants}
            className="bg-slate-200 dark:bg-neutral-800 dark:text-neutral-200 px-1.5 py-1 shadow rounded-sm font-sen"
            key={id}
          >
            <img src={src} alt={alt} />
          </motion.li>
        ))}
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
          <button className="simple-link">{code.name}</button>
        </motion.a>
      </div>
    </motion.div>
  );
}
