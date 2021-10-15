import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import images from '../images/ImagesConfig'

const ImageView = ({ id, category }) => {
  
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.15 } }}
        transition={{ duration: 0.2, delay: 0.15 }}
        className="overlay"
      >
        <Link to="/" />
      </motion.div>
      <div className="image-content-container open">
        <motion.div
          className="image-content"
          layoutId={`image-container-${id}`}
        >
          <motion.div
            className="image-card-container"
            layoutId={`image-card-container-${id}`}
          >
            <img className="card-image" src={images[id - 1].source} alt="" />
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}

export default ImageView;

// `../../images/${category}${id}.jpg`;