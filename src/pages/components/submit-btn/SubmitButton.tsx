import { useTranslation } from "react-i18next";
import { popupVariants } from "./variants";
import {FormikContextType} from "formik";
import { motion } from "framer-motion";

type ValuesType = {
  full_name: string,
  email: string,
  message: string,
};
export default function SubmitButton({ formik }: {formik: FormikContextType<ValuesType>}) {
  const { t } = useTranslation();
  const disabled = !formik.isValid;
  return (
    <motion.button
      variants={popupVariants}
      className={`button w-full sm:w-fit mx-auto disabled:bg-red-600 disabled:text-white dark:disabled:bg-red-500 disabled:shadow-none flex justify-center items-center gap-3 ${ formik.isSubmitting ? "text-gray-600 dark:text-neutral-100 bg-gray-300 dark:bg-neutral-800 pointer-events-none" : null }`}
      disabled={disabled}
      type="submit"
    >
    { formik.isSubmitting ? (
        <>
          <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="stroke-white dark:stroke-neutral-600" cx="12" cy="12" r="10" strokeWidth="4"></circle>
            <path className="fill-primary dark:fill-dark" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          {t("contact.form_labels.send_btn.1")}
        </>
      ) : (
        <>
          {t("contact.form_labels.send_btn.0")}{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            className="rtl:rotate-180"
          >
            <path
              className={`fill-white ${disabled ? "dark:fill-white" : "dark:fill-neutral-900"}`}
              fillRule="evenodd"
              d="M3.402 6.673c-.26-2.334 2.143-4.048 4.266-3.042l11.944 5.658c2.288 1.083 2.288 4.339 0 5.422L7.668 20.37c-2.123 1.006-4.525-.708-4.266-3.042L3.882 13H12a1 1 0 1 0 0-2H3.883z"
              clipRule="evenodd"
            />
          </svg>
        </>
      )
    }
    </motion.button>
  );
}
