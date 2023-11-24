export const getTransition = (
  duration = 0.3,
): { duration: number; type: string; ease: number[] } => ({
  duration,
  type: 'tween',
  ease: [0.25, 0.1, 0.25, 1],
});

export const getFramerProps = (): {
  animate: string;
  initial: string;
  exit: string;
} => ({
  animate: 'animate',
  initial: 'initial',
  exit: 'exit',
});

export const getInViewProps = (
  duration: number,
): {
  initial: {
    opacity: number;
  };
  whileInView: {
    opacity: number;
  };
  transition: {
    duration: number;
    type: string;
    ease: number[];
  };
} => ({
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: { ...getTransition(duration) },
});

export const SHOW_HIDE_CONTENT = {
  hidden: {
    opacity: 0,
    y: '20px',
    display: 'none',
    transition: {
      ...getTransition(0.7),
    },
  },
  visible: {
    display: 'flex',
    y: '0px',
    opacity: 1,
    transition: {
      ...getTransition(0.7),
    },
  },
};

//inView

export const FADE_IN_UP = {
  hidden: {
    opacity: 0,
    y: '20px',
  },
  visible: {
    opacity: 1,
    y: '0px',
    transition: {
      ...getTransition(0.9),
    },
  },
};

export const FADE_IN_RIGHT = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      ...getTransition(),
    },
  },
};

export const FADE_IN_LEFT = {
  hidden: {
    opacity: 0,
    x: 50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      ...getTransition(),
    },
  },
};

export const FADE_IN_OUT = {
  initial: {
    opacity: 0,
    transition: {
      ...getTransition(),
    },
  },
  animate: {
    opacity: 1,
    transition: {
      ...getTransition(),
    },
  },
  exit: {
    opacity: 0,
    transition: {
      ...getTransition(),
    },
  },
};

export const SCALE_VARIANTS = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: {
      ...getTransition(),
    },
  },
};

// orchestration parent & child
export const PARENT_VARIANTS = {
  no: {
    transition: {
      ...getTransition(),
    },
  },
  on: {
    transition: {
      ...getTransition(),
      staggerChildren: 0.1,
    },
  },
};

export const CHILDREN_VARIANTS = {
  no: {
    opacity: 0,
    y: '10px',
    transition: {
      ...getTransition(),
    },
  },
  on: {
    opacity: 1,
    y: '0px',
    transition: {
      ...getTransition(),
    },
  },
};
//----------------------------------------

export const SIDEBAR_MENU_VARIANTS = {
  close: {
    clipPath: 'circle(0% at 0% 0%)',
    transition: {
      ...getTransition(),
    },
  },
  open: {
    clipPath: 'circle(150% at 0% 0%)',
    transition: {
      ...getTransition(),
      duration: 0.5,
      when: 'beforeChildren',
    },
  },
};

export const LIST_ITEM_VARIANTS = {
  exit: {
    opacity: 0,
    y: '10px',
    transition: {
      ...getTransition(),
    },
  },
  enter: {
    opacity: 1,
    y: '0px',
    transition: {
      ...getTransition(),
    },
  },
};
export const BUTTONS_CONTAINER_VARIANTS = {
  exit: {
    opacity: 0,
    y: '30px',
    transition: {
      ...getTransition(),
    },
  },
  enter: {
    opacity: 1,
    y: '0px',
    transition: {
      ...getTransition(),
      delay: 0.4,
    },
  },
};

export const LIST_VARIANTS = {
  exit: {
    transition: {
      ...getTransition(),
    },
  },
  enter: {
    transition: {
      ...getTransition(),
      staggerChildren: 0.05,
    },
  },
};

//Language hover
export const LANGUAGE_MENU_VARIANTS = {
  open: {
    opacity: 1,
    height: 'auto',
  },
  collapsed: { opacity: 0, height: 0 },
};

//Accordion variant

export const ACCORDION_VARIANTS = {
  open: {
    opacity: 1,
    height: 'auto',
    marginTop: '20px',
  },
  collapsed: { opacity: 0, height: 0, marginTop: 0 },
};
