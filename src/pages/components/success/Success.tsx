import { backdropVariants, modalVariants } from "./variants";
import { Dispatch, SetStateAction, useEffect } from "react";
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
    }, 2000);
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
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-20 mx-auto">
          <path className="fill-green-800 dark:fill-green-500" fillRule="evenodd" d="M12 21a9 9 0 0 0 7.51-13.961l-7.155 7.95a2 2 0 0 1-2.687.262L6.4 12.8a1 1 0 0 1 1.2-1.6l3.268 2.451l7.346-8.161A9 9 0 1 0 12 21" clipRule="evenodd"/>
        </svg>
        <h1 className="text-lg dark:text-neutral-300">
          {head}{" "}
          <span className="capitalize text-primary dark:text-dark rtl:font-ibmBold">
           {name}
          </span>
        </h1>
        <p className="text-slate-800 dark:text-neutral-300 rtl:font-ibmRegular">
          {body}
        </p>
      </motion.div>
    </motion.div>
  );
}
