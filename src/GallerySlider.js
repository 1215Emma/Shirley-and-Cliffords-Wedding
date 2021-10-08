import React from "react";
import { BiSkipNext, BiSkipPrevious, BiPlay } from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion";

const GallerySlider = ({ images, paginate, imageIndex }) => {
  return (
    <div className="gallery-navigation">
        <div className="fake-progress-bar"></div>
        <AnimatePresence>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${(imageIndex / images.length) * 100}%` }}
          transition={{ duration: 1, delay: 0 }}
          className="gallery-slider"
          ></motion.div>
          </AnimatePresence>

        <div className="button-wrapper">
          <button
            type="submit"
            className="gallery-navigation-buttons"
            onClick={() => {
              paginate(-1);
            }}
          >
            <BiSkipPrevious className="previous-button" />
          </button>
          <button className="gallery-navigation-buttons">
            <BiPlay className="play-button"/>
          </button>
          <button
            type="submit"
            className="gallery-navigation-buttons"
            onClick={() => {
              paginate(1);
            }}
          >
            <BiSkipNext className="next-button" />
          </button>
        </div>
      </div>
  );
};

export default GallerySlider;
