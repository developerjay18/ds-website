import React from 'react';
import { motion } from 'framer-motion';

const ScaleDiv = ({ children, className }) => {
  // Define the animation variants
  const boxVariants = {
    hover: {
      scaleX: 1.1,
      transition: {
        duration: 0.2,
      },
    },
    rest: {
      scaleX: 1,
    },
  };

  return (
    <motion.div
      className={`box ${className}`}
      variants={boxVariants}
      initial="rest"
      whileHover="hover"
    >
      {children}
    </motion.div>
  );
};

export default ScaleDiv;
