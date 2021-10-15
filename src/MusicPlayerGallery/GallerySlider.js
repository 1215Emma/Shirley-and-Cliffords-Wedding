import React, {useState, useEffect} from "react";
import {
  BiSkipNext,
  BiSkipPrevious,
  BiPlay,
  BiPause,
  BiShuffle,
  BiRepeat,
} from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion";

const GallerySlider = ({ images, paginate, imageIndex }) => {
  const [play, setPlay] = useState(false)
  useEffect(() => {
    if (imageIndex + 1 === images.length) {
      setPlay(false)
    }
    if (play) {
      setTimeout(() => {
        paginate(1)
      }, 3000)
      clearTimeout()
    }

  }, [paginate, play, imageIndex, images.length])
  console.log(imageIndex, "imageIndex")
  console.log(images.length, "images length")
  return (
    <div className="gallery-navigation">
      <div className="fake-progress-bar"></div>
      <AnimatePresence>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${(imageIndex / (images.length - 1)) * 75}%` }}
          transition={{ duration: 1, delay: 0 }}
          className="gallery-slider"
        ></motion.div>
      </AnimatePresence>

      <div className="button-wrapper">
        <button type="submit" className="gallery-navigation-buttons">
          <BiRepeat className="repeat-button" />
        </button>
        <button
          type="submit"
          className="gallery-navigation-buttons"
          onClick={() => {
            paginate(-1);
          }}
        >
          <BiSkipPrevious className="previous-button" />
        </button>
        {!play ? 
        <button
        className="gallery-navigation-buttons"
        onClick={() => {
          setPlay(true);
        }}
        >
          <BiPlay className="playPause play-button" />
        </button>
          :
        <button
        className="gallery-navigation-buttons"
        onClick={() => {
          setPlay(false);
        }}
        >
          <BiPause className="playPause pause-button" />
        </button>
        }
        <button
          type="submit"
          className="gallery-navigation-buttons"
          onClick={() => {
            paginate(1);
          }}
        >
          <BiSkipNext className="next-button" />
        </button>
        <button type="submit" className="gallery-navigation-buttons">
          <BiShuffle className="shuffle-button" />
        </button>
      </div>
    </div>
  );
};

export default GallerySlider;
