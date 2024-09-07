import { appearVariants, degreesVariants } from "./variants";
import { useTranslation } from "react-i18next";
import { LazyLoad } from "../lazy-load";
import { motion } from "framer-motion";
import { imgs } from "./data";

export default function University() {
  const { t } = useTranslation();
  const { head, labels, degrees } = t("education.university", {
    returnObjects: true,
  });
  const degreesTemplate = degrees.map(
    ({ id, name, logo, organization, skills, date, grade }) => {
      return (
        <motion.li
          variants={degreesVariants}
          className="bg-gray-100 dark:bg-neutral-800 px-6 py-4 rounded-md shadow relative"
          key={id}
        >
          <span
            className="w-[3.25rem] absolute -top-7 lg:top-0 left-0 lg:-left-6 -translate-y-1/2 lg:-translate-y-0 lg:-translate-x-full 
            rtl:right-0 rtl:lg:translate-x-full rtl:lg:-right-6"
          >
            <LazyLoad
              image={imgs[id - 1]}
              alt={logo.alt}
              className="dark:rounded-md dark:bg-neutral-200 dark:p-[2px] aspect-square object-contain"
            />
          </span>
          <h3 className="text-lg rtl:font-ibmBold font-semibold mb-1.5 text-primary dark:text-dark">
            {name}
          </h3>
          <p className="dark:text-neutral-300">{organization}</p>
          {skills && (
            <p className="my-1.5 dark:text-neutral-200">{labels.skills}:</p>
          )}
          {skills && (
            <ul className="flex gap-2 flex-wrap">
              {skills.map((skill) => (
                <li
                  className="bg-primary text-white dark:bg-dark dark:text-neutral-900 py-1.5 px-2.5 shadow-md rounded-full text-sm"
                  key={skill}
                >
                  {skill}
                </li>
              ))}
            </ul>
          )}
          <p className="my-1.5 dark:text-neutral-300">
            {date[0]}{" "}
            <i className="font-medium dark:text-neutral-200">{date[1]}</i>
          </p>
          {grade && (
            <p className="dark:text-neutral-300">
              {labels.grade}:{" "}
              <i className="font-medium dark:text-neutral-200">{grade}</i>
            </p>
          )}
        </motion.li>
      );
    }
  );
  return (
    <div className="grid gap-6 lg:grid-cols-10 lg:gap-0 xl:grid-cols-9 pt-10 relative">
      <motion.h2
        variants={appearVariants}
        initial="hidden"
        animate="visible"
        className="lg:col-span-3 xl:col-start-2 xl:col-span-2 text-primary dark:text-dark text-xl underline self-start lg:sticky top-2 rtl:font-ibmBold"
      >
        {head}
      </motion.h2>
      <motion.ul
        variants={degreesVariants}
        initial="hidden"
        animate="visible"
        className="lg:col-start-6 lg:col-span-5 xl:col-start-5 xl:col-span-4 grid gap-16 lg:gap-4 justify-center items-start pt-16 lg:pt-0"
      >
        {degreesTemplate}
      </motion.ul>
    </div>
  );
}
