import { appearVariants, credentialsVariants } from "./variants";
import { useTranslation } from "react-i18next";
import { LazyLoad } from "../lazy-load";
import { motion } from "framer-motion";
import { imgs } from "./data";

export default function Platform() {
  const { t } = useTranslation();
  const { head, labels, credentials } = t("education.platform", {
    returnObjects: true,
  });
  const credentialsTemplate = credentials.map(
    ({
      id,
      name,
      logo,
      organization,
      skills,
      link: { text, url },
      date,
      grade,
    }) => (
      <motion.li
        variants={credentialsVariants}
        className="bg-neutral-100 dark:bg-neutral-800 px-6 py-4 rounded-md shadow relative"
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
        <p className="dark:text-neutral-300">
          {Array.isArray(organization) ? (
            <>
              {organization[0]}{" "}
              <i className="font-medium dark:text-neutral-200">
                {organization[1]}
              </i>
            </>
          ) : (
            <>{organization}</>
          )}
        </p>
        <p className="my-1.5 dark:text-neutral-200">{labels.skills}:</p>
        <ul className="flex gap-2 flex-wrap">
          {skills.map((skill) => (
            <li
              className="font-rubik bg-primary text-white dark:bg-dark dark:text-neutral-900 py-1.5 px-2.5 shadow-md rounded-full text-sm"
              key={skill}
            >
              {skill}
            </li>
          ))}
        </ul>
        <p className="my-1.5 dark:text-neutral-300">
          {date[0]} <i className="dark:text-neutral-200">{date[1]}</i>
        </p>
        <p className="mb-1.5 dark:text-neutral-300">
          {labels.grade}:{" "}
          <i className="font-medium dark:text-neutral-200">{grade}</i>
        </p>
        <a
          className="font-medium transition-colors hover:underline decoration-dotted hover:text-primary dark:text-neutral-300 dark:hover:text-dark"
          href={url}
        >
          {text}
        </a>
      </motion.li>
    )
  );
  return (
    <div className="grid gap-6 py-10 relative lg:grid-cols-10 lg:gap-0 xl:grid-cols-9">
      <motion.h2
        variants={appearVariants}
        initial="hidden"
        animate="visible"
        className="text-xl text-primary rtl:font-ibmBold underline self-start lg:col-span-3 xl:col-start-2 xl:col-span-2 dark:text-dark lg:sticky top-2"
      >
        {head}
      </motion.h2>
      <motion.ul
        variants={credentialsVariants}
        initial="hidden"
        animate="visible"
        className="grid gap-16 justify-center items-start pt-16 lg:col-start-6 lg:col-span-5 xl:col-start-5 xl:col-span-4 lg:gap-4 lg:pt-0"
      >
        {credentialsTemplate}
      </motion.ul>
    </div>
  );
}
