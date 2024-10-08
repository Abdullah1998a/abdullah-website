import { scaleVariants, errorVariants } from "./variants";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FormikContextType } from "formik";

type ValuesType = {
  full_name: string,
  email: string,
  message: string,
};
export default function Textarea({ formik }: {formik: FormikContextType<ValuesType>}) {
  const { t } = useTranslation();
  const touchedWithError = formik.touched.message && formik.errors.message;
  return (
    <motion.div variants={scaleVariants} className="grid relative">
      <motion.textarea
        initial={{ marginBottom: 0 }}
        animate={{ marginBottom: touchedWithError ? "0.75rem": 0 }}
        className={`min-h-40 resize-none contact-field ${
          touchedWithError
            ? "text-red-600 border-red-600 dark:text-red-500 dark:border-red-500"
            : null
        }`}
        required
        {...formik.getFieldProps("message")}
      ></motion.textarea>
      <label
        className={`contact-label ${
          touchedWithError
            ? "text-red-600 dark:text-red-500"
            : null
        }`}
      >
        {t("contact.form_labels.message")}
      </label>
      <AnimatePresence mode="wait">
          {touchedWithError && (
            <motion.div
              variants={errorVariants}
              exit="exit"
              className="text-red-600 dark:text-red-500 text-sm flex items-center gap-0.5 absolute -bottom-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 56 56"
                className="-translate-y-[0.75px]"
              >
                <path
                  className="fill-red-600 dark:fill-red-500"
                  d="M9.59 50.207h36.82c3.516 0 5.719-2.531 5.719-5.719a5.56 5.56 0 0 0-.75-2.812l-18.445-33c-1.055-1.899-2.977-2.883-4.922-2.883c-1.922 0-3.89.984-4.946 2.883L4.645 41.699c-.516.89-.774 1.828-.774 2.79c0 3.187 2.227 5.718 5.719 5.718m18.422-16.055c-1.242 0-1.922-.703-1.969-1.968l-.328-11.578c-.047-1.266.937-2.204 2.273-2.204c1.313 0 2.344.961 2.297 2.227l-.351 11.555c-.047 1.289-.727 1.968-1.922 1.968m0 8.649c-1.36 0-2.625-1.078-2.625-2.532c0-1.453 1.242-2.53 2.625-2.53s2.625 1.054 2.625 2.53c0 1.477-1.266 2.532-2.625 2.532"
                />
              </svg>
              {formik.errors.message}
            </motion.div>
          )}
      </AnimatePresence>
    </motion.div>
  );
}
