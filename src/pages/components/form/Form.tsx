import { Dispatch, SetStateAction } from "react";
import { useTranslation } from "react-i18next";
import { SubmitButton } from "../submit-btn";
import { opacityVariants } from "./variants";
import { motion } from "framer-motion";
import { Textarea } from "../textarea";
import { useFormik } from "formik";
import { Input } from "../input";
import * as Yup from "yup";
import "./form.css";

type ThankType = {
  name: string,
  success_message: {
    head: string,
    body: string,
  },
}
type FormProbs = {
  setThank: Dispatch<SetStateAction<ThankType | null>>
}
export default function Form({ setThank } : FormProbs) {
  const { t } = useTranslation();
  const encode = (data: any) => {
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
          onSubmitProps.resetForm();
          onSubmitProps.setSubmitting(false);
        })
        .catch(() => onSubmitProps.setSubmitting(true));
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
      <Input type="text" name="full_name" formik={formik} />
      <Input type="email" name="email" formik={formik} />
      <Textarea formik={formik} />
      <SubmitButton formik={formik} />
    </motion.form>
  );
}
