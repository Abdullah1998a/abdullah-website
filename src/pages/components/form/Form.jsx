import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./form.css";

const opacityVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};
const scaleVariants = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
  },
};
const errorVariants = {
  hidden: {
    y: -10,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
};
const popupVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
    },
  },
};
export default function Form({ setThank }) {
  const [t] = useTranslation("global");
  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };
  const formik = useFormik({
    initialValues: {
      full_name: "",
      email: "",
      message: "",
    },
    validationSchema: () =>
      Yup.object({
        full_name: Yup.string()
          .trim()
          .min(2, t("contact.form_errors.name.less"))
          .max(20, t("contact.form_errors.name.more"))
          .required(t("contact.form_errors.name.required")),
        email: Yup.string()
          .email(t("contact.form_errors.email.format"))
          .required(t("contact.form_errors.email.required")),
        message: Yup.string()
          .trim()
          .min(2, t("contact.form_errors.message.less"))
          .max(300, t("contact.form_errors.message.more"))
          .required(t("contact.form_errors.message.required")),
      }),
    onSubmit: (values, onSubmitProps) => {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...values }),
      })
        .then(() => {
          setThank({
            name: values.full_name,
            success_message: {
              head: t("contact.success_message.head"),
              body: t("contact.success_message.body"),
            },
          });
        })
        .catch((error) => console.log(error));
      onSubmitProps.resetForm();
      onSubmitProps.setSubmitting(false);
    },
  });
  return (
    <motion.form
      noValidate
      autoComplete="off"
      initial="hidden"
      animate="visible"
      className="contact-form"
      variants={opacityVariants}
      onSubmit={formik.handleSubmit}
    >
      <motion.div
        variants={scaleVariants}
        className="grid relative transition-all"
      >
        <motion.input
          initial={{ marginBottom: 0 }}
          animate={{
            marginBottom:
              formik.touched.full_name && formik.errors.full_name && "0.375rem",
          }}
          className={`contact-field ${
            formik.touched.full_name && formik.errors.full_name
              ? "dark:text-red-500"
              : null
          }`}
          type="text"
          name="full_name"
          autoFocus
          required
          {...formik.getFieldProps("full_name")}
        />
        <label
          className={`contact-label ${
            formik.touched.full_name && formik.errors.full_name
              ? "text-red-600 dark:text-red-500"
              : null
          }`}
        >
          {t("contact.form_labels.name")}
        </label>
        <motion.span
          variants={errorVariants}
          className="text-red-600 dark:text-red-500 text-sm"
        >
          {formik.touched.full_name && formik.errors.full_name
            ? formik.errors.full_name
            : null}
        </motion.span>
      </motion.div>
      <motion.div variants={scaleVariants} className="grid relative">
        <motion.input
          initial={{ marginBottom: 0 }}
          animate={{
            marginBottom:
              formik.touched.email && formik.errors.email && "0.375rem",
          }}
          className={`contact-field font-sen ${
            formik.touched.email && formik.errors.email
              ? "dark:text-red-500"
              : null
          }`}
          type="email"
          name="email"
          required
          {...formik.getFieldProps("email")}
        />
        <label
          className={`contact-label ${
            formik.touched.email && formik.errors.email
              ? "text-red-600 dark:text-red-500"
              : null
          }`}
        >
          {t("contact.form_labels.email")}
        </label>
        <motion.span
          variants={errorVariants}
          className="text-red-600 dark:text-red-500 text-sm"
        >
          {formik.touched.email && formik.errors.email
            ? formik.errors.email
            : null}
        </motion.span>
      </motion.div>
      <motion.div variants={scaleVariants} className="grid relative">
        <motion.textarea
          initial={{ marginBottom: 0 }}
          animate={{
            marginBottom:
              formik.touched.message && formik.errors.message && "0.375rem",
          }}
          className={`min-h-36 resize-none contact-field ${
            formik.touched.message && formik.errors.message
              ? "dark:text-red-500"
              : null
          }`}
          name="message"
          required
          {...formik.getFieldProps("message")}
        ></motion.textarea>
        <label
          className={`contact-label ${
            formik.touched.message && formik.errors.message
              ? "text-red-600 dark:text-red-500"
              : null
          }`}
        >
          {t("contact.form_labels.message")}
        </label>
        <motion.span
          variants={errorVariants}
          className="text-red-600 dark:text-red-500 text-sm"
        >
          {formik.touched.message && formik.errors.message
            ? formik.errors.message
            : null}
        </motion.span>
      </motion.div>
      <motion.button
        variants={popupVariants}
        className="button w-2/3 sm:w-fit mx-auto disabled:bg-gray-200 disabled:text-gray-600 dark:disabled:bg-neutral-300 disabled:shadow-none"
        disabled={!formik.isValid || formik.isSubmitting}
        type="submit"
      >
        {t("contact.form_labels.send_btn")}
      </motion.button>
    </motion.form>
  );
}
