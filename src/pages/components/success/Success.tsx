import { backdropVariants, modalVariants } from "./variants";
import { Dispatch, SetStateAction, useEffect } from "react";
import done from "../../assets/images/done.svg";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./success.css";

type ThankType = {
  name: string,
  success_message: {
    head: string,
    body: string,
  },
}
type SuccessProbs = {
  thank: ThankType
  setThank: Dispatch<SetStateAction<ThankType | null>>
}
export default function Success({ thank, setThank }: SuccessProbs) {
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
          <span className="capitalize text-primary dark:text-dark rtl:font-ibmBold">
           {name}
          </span>
        </h1>
        <p className="text-slate-800 mt-3 dark:text-neutral-300 rtl:font-ibmRegular">
          {body}
        </p>
      </motion.div>
    </motion.div>
  );
}
