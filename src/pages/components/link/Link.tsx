import { menuLinkVariants } from "./variants";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import "./link.css";

type LinkProbs = {
  id: number,
  name: string,
  path: string
}
export default function Link({ id, name, path }:LinkProbs) {
  return (
    <motion.li
      className={`${id === 5 ? "contact" : null}`}
      key={id}
      variants={menuLinkVariants}
    >
      <NavLink className="text-md dark:text-neutral-200 font-medium" to={path}>
        {name}
      </NavLink>
    </motion.li>
  );
}
