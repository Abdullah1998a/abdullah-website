export const scaleVariants = {
  hidden: {
    scale: 0.4,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
  },
};
export const errorVariants = {
  hidden: {
    y: -5,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.25
    }
  },
  exit: {
    y: 5,
    opacity: 0,
  },
};
