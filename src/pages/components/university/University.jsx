import damascus from "../../assets/images/education/damascus-logo.jpeg";
import svu from "../../assets/images/education/svu-logo.png";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const degreesVariants = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
};
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
const imgs = [svu, damascus];
export default function University() {
  const [t] = useTranslation("global");
  const { head, labels, degrees } = t("education.university", {
    returnObjects: true,
  });
  return (
    <div className="grid gap-6 lg:grid-cols-10 lg:gap-0 xl:grid-cols-9 pt-10 relative">
      <motion.h2
        variants={appearVariants}
        initial="hidden"
        animate="visible"
        className="lg:col-span-3 xl:col-start-2 xl:col-span-2 text-sky-800 dark:text-[tan] text-xl underline self-start lg:sticky top-2 font-sen rtl:font-ibmBold"
      >
        {head}
      </motion.h2>
      <motion.ul
        variants={degreesVariants}
        initial="hidden"
        animate="visible"
        className="lg:col-start-6 lg:col-span-5 xl:col-start-5 xl:col-span-4 grid gap-16 lg:gap-4 justify-center items-start pt-16 lg:pt-0"
      >
        {degrees.map(
          ({ id, name, logo, organization, skills, date, grade }, ind) => {
            return (
              <motion.li
                variants={degreesVariants}
                className="bg-gray-100 dark:bg-neutral-800 px-6 py-4 rounded-md shadow relative"
                key={id}
              >
                <img
                  className="w-[3.25rem] aspect-square object-contain absolute -top-8 lg:top-0 left-0 lg:-left-6 -translate-y-1/2 lg:-translate-y-0 lg:-translate-x-full 
                  rtl:right-0 rtl:lg:translate-x-full rtl:lg:-right-6 dark:rounded-md dark:bg-neutral-200 dark:p-[2px]"
                  src={imgs[ind]}
                  alt={logo.alt}
                />
                <h3 className="font-sora rtl:font-ibmBold font-semibold mb-1.5 text-balance dark:text-neutral-200">
                  {name}
                </h3>
                <p className="dark:text-neutral-300">{organization}</p>
                {skills && (
                  <p className="my-1.5 dark:text-neutral-200">
                    {labels.skills}:
                  </p>
                )}
                {skills && (
                  <ul className="flex gap-2 flex-wrap">
                    {skills.map((skill) => (
                      <li
                        className="bg-sky-800 text-white dark:bg-[tan] dark:text-neutral-900 py-1.5 px-2.5 shadow-md rounded-full text-sm"
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
        )}
      </motion.ul>
    </div>
  );
}
