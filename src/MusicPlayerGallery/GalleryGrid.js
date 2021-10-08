import React, { useState } from "react";
import { MdOutlineQueueMusic } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";
import { GridExpandButton } from "./GridExpandButton";
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


function GalleryGrid({ imageIndex, images }) {
  const [showGallery, setShowGallery] = useState(false);
  const [expandedImage, setUnexpandedImage] = useState();
  return (
    <>
      <button
        className="gallery-queue"
        type="submit"
        onClick={() => {
          setShowGallery(true);
        }}
      >
        <MdOutlineQueueMusic className="gallery-queue-icon" />
      </button>
      <AnimatePresence initial={false}>
        {showGallery && (
          <motion.div
            className="gallery-wrapper"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.button
              className="gallery-queue-x"
              type="submit"
              onClick={() => {
                setShowGallery(false);
              }}
            >
              <AiOutlineClose className="x-icon" />
            </motion.button>
            <div className="image-grid-container">
              <div className="image-grid">
                {images.map((image) => (
                  <GridExpandButton
                    key={image}
                    image={image}
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
