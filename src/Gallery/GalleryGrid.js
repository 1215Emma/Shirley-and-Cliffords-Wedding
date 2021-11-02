import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";
import {DisplayGrid} from './DisplayGallery'
import "./GalleryGrid.css";
import imageUrls from '../images/imageUrls.json'
const containerVariants = {
  hidden: {
    y: "100%",
    opacity: 1,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "sween",
      duration: 0.3,
    },
  },
  exit: {
    y: "100%",
    opacity: 1,
    transition: {
      type: "sween",
      duration: 0.3,
    },
  },
};

function GalleryGrid({ setShowGallery }) {
  const [expandedImage, setUnexpandedImage] = useState();
  console.log(expandedImage, "expandImage")

  return (

          <motion.div
            key="gallery"
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
              <div className="image-grid">
                {Object.values(imageUrls).map((image) => (
                  <DisplayGrid
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
  );
}

export default GalleryGrid;
