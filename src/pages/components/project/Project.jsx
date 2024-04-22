import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./project.css";

const projectVariants = {
  hidden: {
    y: 250,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
};
export default function Project({ content, src }) {
  const {
    id,
    project: {
      name,
      summary,
      preview: { alt },
      details_btn,
    },
  } = content;
  return (
    <motion.div
      layout
      variants={projectVariants}
      initial="hidden"
      whileInView="visible"
      className="project"
    >
      <div className="md:w-4/5 col-span-2">
        <img className="rounded-lg" src={src} alt={alt} />
      </div>
      <div className="xl:w-4/5 col-span-2">
        <h2 className="font-sora font-semibold text-xl dark:text-neutral-200">
          {name}
        </h2>
        <p className="my-3 dark:text-neutral-300">{summary}</p>
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
