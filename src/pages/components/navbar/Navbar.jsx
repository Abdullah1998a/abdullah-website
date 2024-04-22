import { motion, AnimatePresence } from "framer-motion";
import darkClose from "../../assets/images/dark-close.svg";
import darkMenu from "../../assets/images/dark-menu.svg";
import darkLogo from "../../assets/images/dark-logo.svg";
import close from "../../assets/images/close.svg";
import menu from "../../assets/images/menu.svg";
import logo from "../../assets/images/logo.svg";
import { Links } from "../links";
import "./navbar.css";

const menuButtonVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};
export default function Navbar({ show, setShow, theme, setTheme }) {
  return (
    <nav className="navbar">
      <a href="#">
        <img src={theme ? darkLogo : logo} className="logo" alt="logo" />
      </a>
      <button className="md:hidden" onClick={() => setShow(!show)}>
        <AnimatePresence mode="wait">
          <motion.img
            variants={menuButtonVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            src={show ? (theme ? darkClose : close) : theme ? darkMenu : menu}
            className={`w-8 relative transition-all ${
              show ? "hover:scale-[0.9] z-[60]" : "hover:scale-[1.1]"
            }`}
            alt="menu button"
          />
        </AnimatePresence>
      </button>
      <Links show={show} setShow={setShow} theme={theme} setTheme={setTheme} />
    </nav>
  );
}
