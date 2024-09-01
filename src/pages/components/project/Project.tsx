import { projectVariants } from "./variants";
import { LazyLoad } from "../lazy-load";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./project.css";

type ProjectProbs = {
  content: {
    id: number,
    project: {
      name: string,
      summary: string,
      preview: { alt: string },
      details_btn: string,
    },
  },
  src: string,
  thumbnail: string
}
export default function Project({ content, src, thumbnail }:ProjectProbs) {
  const {
    id,
    project: {
      name,
      summary,
      preview: { alt },
      details_btn,
    },
  } = content;
  const projectImage = {
    src,
    thumbnail,
  };
  return (
    <motion.div
      layout
      variants={projectVariants}
      initial="hidden"
      whileInView="visible"
      className="project"
    >
      <div className="flex items-center md:w-4/5 col-span-2">
        <LazyLoad image={projectImage} alt={alt} className="rounded-lg" />
      </div>
      <div className="xl:w-4/5 col-span-2">
        <h2 className="font-sora font-semibold text-xl dark:text-neutral-200">
          {name}
        </h2>
        <p className="my-3 text-neutral-600 dark:text-neutral-300">{summary}</p>
        <Link
          to={`/portfolio/projects/${id}`}
          onClick={() => window.scrollTo(0, 0)}
        >
          <button className="button">{details_btn}</button>
        </Link>
      </div>
    </motion.div>
  );
}
