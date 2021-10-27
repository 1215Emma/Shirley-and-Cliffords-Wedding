import React from "react";
import { motion } from "framer-motion";
import './Loader.css'
import { ImHeart } from "react-icons/im";
const loaderVariants = {
  animationOne: {
    scale: [1, 2, 2, 2, 2],
    opacity: 0,
    transition: {
      delay: 0.5,
      repeat: 2,
      duration: 2,
      ease: 'easeOut'
    },
  },
};
const Loader = () => {
  return (
    <>
      <motion.div
        className="loader"
        variants={loaderVariants}
        animate="animationOne"
      >
        <ImHeart className="loader-icon" />
      </motion.div>
      <motion.h2
        className="form-submitted-message"
          initial={{ opacity: 0 }}
          animate={{opacity: 1, transition: {delay: 5.7, duration: 0.5}}}>rsvp form submitted</motion.h2>
    </>
  );
};

export default Loader;
