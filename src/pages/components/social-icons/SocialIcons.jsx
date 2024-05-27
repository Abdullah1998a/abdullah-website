import { motion } from "framer-motion";

const socialVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
      delay: 0.5,
    },
  },
};
const iconVariants = {
  hidden: {
    scale: 0,
  },
  visible: {
    scale: 1,
  },
};
export default function SocialIcons({ icons, theme }) {
  return (
    <motion.ul
      variants={socialVariants}
      initial="hidden"
      animate="visible"
      className="flex mt-2 gap-1"
    >
      {icons.map(({ name, link, width, svg: { view_box, path } }) => (
        <motion.li variants={iconVariants} className={width} key={name}>
          <a href={link} target="_blank">
            <motion.svg
              initial={{ fill: theme ? "rgb(229 229 229)" : "rgb(28 25 23)" }}
              whileHover={{ fill: theme ? "rgb(210 180 140)" : "rgb(7 89 133)", scale: 0.9 }}
              key={theme}
              xmlns="http://www.w3.org/2000/svg"
              viewBox={view_box}
            >
              <path d={path} />
            </motion.svg>
          </a>
        </motion.li>
      ))}
    </motion.ul>
  );
}
