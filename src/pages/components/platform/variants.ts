export const credentialsVariants = {
  hidden: {
    scale: 0.4,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};
export const appearVariants = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
  },
};
