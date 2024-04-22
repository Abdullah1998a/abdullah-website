import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import done from "../../assets/images/done.svg";
import { useEffect } from "react";
import "./success.css";

const backdropVariants = {
  hidden: { opacity: 0 },
  visibal: { opacity: 1 },
};
const modalVariants = {
  hidden: { scale: 0, opacity: 0 },
  visibal: { scale: 1, opacity: 1 },
};
export default function Success({ thank, setThank }) {
  const navigate = useNavigate();
  const {
    name,
    success_message: { head, body },
  } = thank;

  useEffect(() => {
    let counterID = setInterval(() => {
      setThank(null);
      navigate("/");
      window.scrollTo(0, 0);
    }, 2500);
    return () => clearInterval(counterID);
  }, []);
  return (
    <motion.div
      variants={backdropVariants}
      initial="hidden"
      animate="visibal"
      exit="hidden"
      className="backdrop"
    >
      <motion.div variants={modalVariants} className="success-modal">
        <img src={done} className="w-16 mx-auto" />
        <h1 className="text-lg dark:text-neutral-300">
          {head}{" "}
          <span className="capitalize text-sky-800 dark:text-[tan]">
            {name}
          </span>
        </h1>
        <p className="text-slate-800 mt-3 dark:text-neutral-300">{body}</p>
      </motion.div>
    </motion.div>
  );
}
