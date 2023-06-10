import React, { useEffect } from "react";
import { motion } from "framer-motion";
const PageTransition = ({ children }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const variants = {
    initial: {
      x: "-100%",
    },
    animate: {
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      x: "100%",
      transition: {
        duration: 0.5,
      },
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
