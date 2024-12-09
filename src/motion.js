export const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
  },
  animate: (index) => ({
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.1 * index,
    },
  }),
};

export const BottomInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

export const LeftInAnimationVariants = {
  initial: {
    opacity: 0,
    x: -100,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
};

export const CardAnimationVariants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
};
