import React, { useState } from "react";
import { MdOutlineQueueMusic } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import ImageView from "./ImageView";
import DisplayGallery from './DisplayGallery'
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
const Gallery = ({ match }) => {
  let { id } = match.params;
  const imageHasLoaded = true
  return (
    <>
      <DisplayGallery selectedId={id} />
      <AnimatePresence>
        {id && imageHasLoaded && <ImageView id={id} key="image" />}
      </AnimatePresence>
    </>
    
  )
}
function GalleryGrid({ imageIndex, images, selectedImage }) {
  const [showGallery, setShowGallery] = useState(false);


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
              {/* image-grid is card-list and is a ul*/}
              <AnimateSharedLayout type="crossfade">
                <Router>
                  <Route path={['/:id', "/"]} component={Gallery} />
                </Router>
              </AnimateSharedLayout>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default GalleryGrid;
