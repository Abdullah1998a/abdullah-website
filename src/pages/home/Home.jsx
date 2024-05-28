import { SocialIcons } from "../components/social-icons";
import badgeThumbnail from "../assets/images/thumbnails/meta.png";
import heroThumbnail from "../assets/images/thumbnails/hero.png";
import { useTranslation } from "react-i18next";
import badge from "../assets/images/meta.png";
import hero from "../assets/images/hero.png";
import { LazyLoad } from "../components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./home.css";

const pagesVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  exit_hidden: {
    x: "-100vw",
    opacity: 0,
    transition: {
      ease: "easeInOut",
    },
  },
};
const appearVariants = {
  hidden: {
    x: "-100vw",
  },
  visible: {
    x: 0,
  },
};
const fadeVariants = {
  hidden: {
    scale: 0,
  },
  visible: {
    scale: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};
const nameVariants = {
  hidden: {
    y: -35,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
    },
  },
};
const socialIcons = [
  {
    name: "facebook",
    link: "https://www.facebook.com/profile.php?id=100010770885105",
    width: "w-10",
    svg: {
      view_box: "0 0 24 24",
      path: "M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95",
    },
  },
  {
    name: "github",
    link: "https://github.com/Abdullah1998a",
    width: "w-10",
    svg: {
      view_box: "0 0 24 24",
      path: "M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2",
    },
  },
  {
    name: "linkedin",
    link: "https://www.linkedin.com/in/abdullah-alnoime-090513246",
    width: "w-9",
    svg: {
      view_box: "0 0 20 20",
      path: "M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6 9.6-4.298 9.6-9.6S15.302.4 10 .4zM7.65 13.979H5.706V7.723H7.65v6.256zm-.984-7.024c-.614 0-1.011-.435-1.011-.973 0-.549.409-.971 1.036-.971s1.011.422 1.023.971c0 .538-.396.973-1.048.973zm8.084 7.024h-1.944v-3.467c0-.807-.282-1.355-.985-1.355-.537 0-.856.371-.997.728-.052.127-.065.307-.065.486v3.607H8.814v-4.26c0-.781-.025-1.434-.051-1.996h1.689l.089.869h.039c.256-.408.883-1.01 1.932-1.01 1.279 0 2.238.857 2.238 2.699v3.699z",
    },
  },
];
const heroImage = {
  src: hero,
  thumbnail: heroThumbnail,
};
const badgeImage = {
  src: badge,
  thumbnail: badgeThumbnail,
};
export default function Home({ theme }) {
  const [t] = useTranslation("global");
  return (
    <motion.header
      variants={pagesVariants}
      initial="hidden"
      animate="visible"
      exit="exit_hidden"
      className="grid gap-28 lg:gap-0 lg:grid-cols-2 items-center"
    >
      <motion.div variants={appearVariants}>
        <h1 className="text-4xl md:text-5xl font-sora rtl:font-ibmBold dark:text-neutral-200">
          {t("home.name.0")}{" "}
          <motion.span
            variants={nameVariants}
            className="text-sky-800 dark:text-[tan] inline-block mt-4 md:mt-0"
          >
            {t("home.name.1")}
          </motion.span>
        </h1>
        <p className="text my-2 text-slate-800 dark:text-neutral-300">
          {t("home.goal.0")}
          <br />
          {t("home.goal.1")}
        </p>
        <Link to="/contact">
          <button className="button">{t("home.hero_btn")}</button>
        </Link>
        <SocialIcons icons={socialIcons} theme={theme} />
      </motion.div>
      <motion.div variants={fadeVariants} className="place-self-center">
        <div className="img-container flex justify-center items-center">
          <motion.div variants={fadeVariants} className="w-60 drop-shadow-2xl">
            <LazyLoad image={heroImage} alt={t("home.hero.alt")} />
          </motion.div>
          <motion.div
            variants={fadeVariants}
            className="w-14 absolute z-10 top-8 -start-4"
          >
            <LazyLoad image={badgeImage} alt={t("home.badge.alt")} />
          </motion.div>
        </div>
      </motion.div>
    </motion.header>
  );
}
