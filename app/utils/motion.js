export const scaleUpText = {};

export const toggleBetweenSidebar = {
  open: {
    clipPath: "circle(1200px at 25px 30px)",
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  closed: {
    clipPath: "circle(15px at 25px 30px)",
    transition: {
      delay: 0.3,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};
