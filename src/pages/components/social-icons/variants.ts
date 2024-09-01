export const socialVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
      delay: 0.5,
    },
  },
};
export const iconVariants = {
  hidden: {
    scale: 0.2,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
  },
};
