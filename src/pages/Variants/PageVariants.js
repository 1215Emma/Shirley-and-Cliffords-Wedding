export const homeVariants = {
  show: {
    opacity: 1
  },
  push: {
    opacity: 1,
    y: 0,
    transition: {
      type: "sween",
      duration: 0.5,
    },
  },
};

export const homeCloseVariants = {
  pushed: {
    opacity: 1
  },
  closed: {
    y: 0,
    transition: {
      type: "sween", duration: 0.5
    }
  },
};

export const fadeInVariants = {
  
}