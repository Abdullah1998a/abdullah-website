import { useThemeContext } from "../../../contexts/ThemeProvider";
import { socialVariants, iconVariants } from "./variants";
import { motion } from "framer-motion";
import { icons } from "./data";

export default function SocialIcons() {
  const { theme } = useThemeContext();
  const iconsTemplate = icons.map(
    ({ name, link, width, svg: { view_box, path } }) => (
      <motion.li variants={iconVariants} className={width} key={name}>
        <a href={link} target="_blank">
          <motion.svg
            initial={{
              fill: theme == "dark" ? "rgb(229 229 229)" : "rgb(28 25 23)",
            }}
            whileHover={{
              fill: theme == "dark" ? "rgb(210 180 140)" : "rgb(7 89 133)",
              scale: 0.9,
            }}
            key={theme}
            xmlns="http://www.w3.org/2000/svg"
            viewBox={view_box}
          >
            <path d={path} />
          </motion.svg>
        </a>
      </motion.li>
    )
  );
  return (
    <motion.ul
      variants={socialVariants}
      initial="hidden"
      animate="visible"
      className="flex mt-2.5 gap-1"
    >
      {iconsTemplate}
    </motion.ul>
  );
}
