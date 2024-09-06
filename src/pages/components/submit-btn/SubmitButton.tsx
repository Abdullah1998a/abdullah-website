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
  return (
    <motion.button
      variants={popupVariants}
      className="button w-full sm:w-fit mx-auto disabled:bg-gray-200 disabled:text-gray-600 dark:disabled:bg-neutral-300 disabled:shadow-none flex justify-center items-center gap-2"
      disabled={!formik.isValid || formik.isSubmitting}
      type="submit"
    >
      {t("contact.form_labels.send_btn")}{" "}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        className="rtl:rotate-180"
      >
        <path
          className={
            !formik.isValid || formik.isSubmitting
              ? "fill-gray-600"
              : "fill-white dark:fill-neutral-900"
          }
          fillRule="evenodd"
          d="M3.402 6.673c-.26-2.334 2.143-4.048 4.266-3.042l11.944 5.658c2.288 1.083 2.288 4.339 0 5.422L7.668 20.37c-2.123 1.006-4.525-.708-4.266-3.042L3.882 13H12a1 1 0 1 0 0-2H3.883z"
          clipRule="evenodd"
        />
      </svg>
    </motion.button>
  );
}
