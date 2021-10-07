import React from "react";
import { FcNext, FcPrevious } from "react-icons/fc";
import { motion, AnimatePresence } from "framer-motion";

const GallerySlider = ({ setPortraitSelectorIndex, portraitSelectorIndex, galleryImages }) => {
  return (
    <AnimatePresence>
    <div className="gallery-navigation">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${(portraitSelectorIndex/galleryImages.length) * 100}%`}}
          transition={{ duration: 1, delay: 0 }}
          className="gallery-slider"
        ></motion.div>
      <div className="button-wrapper">
        <button
          type="submit"
          className="gallery-navigation-buttons"
          onClick={() => {
            setPortraitSelectorIndex((index) => index - 1);
          }}
          >
          <FcPrevious className="previous-button" />
        </button>
        <button
          type="submit"
          className="gallery-navigation-buttons"
          onClick={() => {
            setPortraitSelectorIndex((index) => index + 1);
          }}
          >
          <FcNext className="next-button" />
        </button>
      </div>
    </div>
    </AnimatePresence>
  );
};

export default GallerySlider;
