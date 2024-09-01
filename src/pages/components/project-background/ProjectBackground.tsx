import { appearVariants, fadeVariants } from "./variants";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { LazyLoad } from "../lazy-load";
import { motion } from "framer-motion";
import { imgs } from "./data";

export default function ProjectBackground() {
  const { t } = useTranslation();
  const { id } = useParams();
  let content = t("portfolio.projects", { returnObjects: true }).find(
    (pro) =>  {
      if (id) {
        return pro.id == parseInt(id)
      }
    }
  )!;
  let img = imgs.find((img) => {
    if (id) {
      return img.id == parseInt(id)
    }
  })?.src!;
  const {
    project_head,
    description,
    previews_head,
    previews: { desktop, mobile },
  } = content.details;
  const responsiveDesktopDesign = {
    src: img.desktop,
    thumbnail: img.desktopThumbnail,
  };
  const responsiveMobileDesign = {
    src: img.mobile,
    thumbnail: img.mobileThumbnail,
  };
  const descriptionTemplate = description.map((item) => (
    <p className="text-neutral-600 dark:text-neutral-300" key={item}>
      {item}
    </p>
  ));
  return (
    <motion.div
      variants={appearVariants}
      initial="hidden"
      animate="visible"
      className="col-span-2 bg-[#f0f0f0] dark:bg-neutral-800 p-4 sm:p-6 rounded-lg flex flex-col gap-3"
    >
      <h2 className="text-sky-800 dark:text-[tan] text-xl rtl:font-ibmBold">
        {project_head}
      </h2>
      {descriptionTemplate}
      <h3 className="rtl:font-ibmBold font-semibold text-lg mb-2 dark:text-neutral-200">
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
          <LazyLoad
            image={responsiveDesktopDesign}
            alt={desktop.alt}
            className="w-full rounded-lg shadow-md"
          />
        </motion.div>
        <motion.div
          variants={fadeVariants}
          className="sm:w-4/5 sm:mx-auto md:w-1/2"
        >
          <LazyLoad
            image={responsiveMobileDesign}
            alt={mobile.alt}
            className="w-full rounded-lg shadow-md"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
