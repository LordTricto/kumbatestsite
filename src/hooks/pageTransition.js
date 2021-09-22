const pageTransition = () => {
  const nextPage = {
    animate: {
      opacity: 1,
      visibility: "visible",
      x: "0",
      transition: { duration: 1, ease: "easeInOut" },
    },
    exit: {
      opacity: 0,
      x: "-30vw",
      transition: { duration: 1, ease: "easeOut" },
    },
  };
  return [nextPage];
};

export default pageTransition;
