import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";
import {DisplayGrid} from './DisplayGallery'
import "./GalleryGrid.css";

const containerVariants = {
  hidden: {
    opacity: 0,
    x: 0,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.1,
      duration: 0.3,
    },
  },
  exit: {
    opacity: 0,
    x: 0,
    transition: {
      duration: 0.3,
    },
  },
};

function GalleryGrid({ images, setShowGallery, showGallery }) {
  // const [showGallery, setShowGallery] = useState(false);
  const [expandedImage, setUnexpandedImage] = useState();
  console.log(expandedImage, "expandImage")
  
  return (
    <>
      
      <AnimatePresence initial={false}>
        {showGallery && (
          <motion.div
            className="gallery-wrapper"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="expanded-navigation-bar">
            <motion.button
              className="gallery-queue-x"
              type="submit"
              onClick={() => {
                setShowGallery(false);
              }}
              >
              <AiOutlineClose className="x-icon" />
            </motion.button>
            </div>
            <div className="image-grid-container">
              <div className="image-grid" >
                {images.map((image) => (
                  <DisplayGrid
                    key={image.id}
                    {...image}
                    disabled={
                      expandedImage !== image && expandedImage !== undefined
                    }
                    onExpand={() => setUnexpandedImage(image)}
                    onCollapse={() => setUnexpandedImage()}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default GalleryGrid;
