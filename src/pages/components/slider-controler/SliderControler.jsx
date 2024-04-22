import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import "./slider-controler.css";

const sliderVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};
export default function SliderControler() {
  const [t] = useTranslation("global");
  const projects = t("portfolio.projects", { returnObjects: true });
  const navigate = useNavigate();
  const { id } = useParams();
  const states = {
    next: "next",
    prev: "prev",
  };
  const getPosition = () => {
    let projectsLength = projects.length;
    let currentPosition = id;
    let prevPosition = parseInt(id) - 1;
    let nextPosition = parseInt(id) + 1;
    if (currentPosition == projectsLength) {
      nextPosition = 1;
    }
    if (currentPosition == 1) {
      prevPosition = projectsLength;
    }
    return { prevPosition, nextPosition };
  };
  const handlePosition = (state) => {
    if (state === "next") {
      navigate(`/portfolio/projects/${getPosition().nextPosition}`);
    } else {
      navigate(`/portfolio/projects/${getPosition().prevPosition}`);
    }
  };
  return (
    <div className="flex items-center justify-between">
      <motion.button
        variants={sliderVariants}
        initial="hidden"
        animate="visible"
        className="slider-btn"
        onClick={() => {
          handlePosition(states.prev);
          window.scrollTo(0, 0);
        }}
      >
        <span className="project-name">
          {projects[getPosition().prevPosition - 1].project.name}
        </span>
        <span className="text-sm text-slate-500 dark:text-neutral-300">
          {t("portfolio.slider_btns.prev")}
        </span>
      </motion.button>
      <motion.button
        variants={sliderVariants}
        initial="hidden"
        animate="visible"
        className="slider-btn items-end"
        onClick={() => {
          handlePosition(states.next);
          window.scrollTo(0, 0);
        }}
      >
        <span className="project-name">
          {projects[getPosition().nextPosition - 1].project.name}
        </span>
        <span className="text-sm text-slate-500 dark:text-neutral-300">
          {t("portfolio.slider_btns.next")}
        </span>
      </motion.button>
    </div>
  );
}
