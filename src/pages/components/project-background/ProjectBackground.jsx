import easybankDesktop from "../../assets/images/easybank-project/easybank.jpg";
import easybankMobile from "../../assets/images/easybank-project/mobile.jpg";
import huddleDesktop from "../../assets/images/huddle-project/huddle.jpg";
import insureDesktop from "../../assets/images/insure-project/insure.jpg";
import huddleMobile from "../../assets/images/huddle-project/mobile.jpg";
import insureMobile from "../../assets/images/insure-project/mobile.jpg";
import blogrDesktop from "../../assets/images/blogr-project/blogr.jpg";
import blogrMobile from "../../assets/images/blogr-project/mobile.jpg";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

const imgs = [
  {
    id: 1,
    src: {
      desktop: huddleDesktop,
      mobile: huddleMobile,
    },
  },
  {
    id: 2,
    src: {
      desktop: easybankDesktop,
      mobile: easybankMobile,
    },
  },
  {
    id: 3,
    src: {
      desktop: blogrDesktop,
      mobile: blogrMobile,
    },
  },
  {
    id: 4,
    src: {
      desktop: insureDesktop,
      mobile: insureMobile,
    },
  },
];
const appearVariants = {
  hidden: {
    x: "50vw",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
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
      staggerChildren: 0.25,
    },
  },
};
export default function ProjectBackground() {
  const [t] = useTranslation("global");
  const { id } = useParams();
  let content = t("portfolio.projects", { returnObjects: true }).find(
    (pro) => pro.id == id
  );
  let imgSrc = imgs.find((img) => img.id == id).src;
  const {
    project_head,
    description,
    previews_head,
    previews: { desktop, mobile },
  } = content.details;
  return (
    <motion.div
      variants={appearVariants}
      initial="hidden"
      animate="visible"
      className="col-span-2 bg-[#f0f0f0] dark:bg-neutral-800 p-4 sm:p-6 rounded-lg flex flex-col gap-3"
    >
      <h2 className="text-sky-800 dark:text-[tan] text-xl font-sora rtl:font-ibmBold">
        {project_head}
      </h2>
      {description.map((item, ind) => (
        <p className="text-slate-800 dark:text-neutral-300" key={ind}>
          {item}
        </p>
      ))}
      <h3 className="font-sora rtl:font-ibmBold font-semibold text-lg mb-2 dark:text-neutral-200">
        {previews_head}
      </h3>
      <motion.div
        variants={fadeVariants}
        className="flex gap-4 items-center flex-wrap md:flex-nowrap"
      >
        <motion.div
          variants={fadeVariants}
          className="sm:w-4/5 sm:mx-auto md:w-1/2"
        >
          <img
            className="w-full rounded-lg shadow-md"
            src={imgSrc.desktop}
            alt={desktop.alt}
          />
        </motion.div>
        <motion.div
          variants={fadeVariants}
          className="sm:w-4/5 sm:mx-auto md:w-1/2"
        >
          <img
            className="w-full rounded-lg shadow-md"
            src={imgSrc.mobile}
            alt={mobile.alt}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
