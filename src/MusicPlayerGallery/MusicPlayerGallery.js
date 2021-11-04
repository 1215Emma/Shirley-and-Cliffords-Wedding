import React, { useState } from "react";
import "./MusicPlayerGallery.css";
import GallerySlider from "./GallerySlider";
import Sidebar from "../Sidebar/Sidebar";
import FocusedImage from "./FocusedImage";
import { IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion'

const MusicPlayerGallery = () => {

  const [[page, direction], setPage] = useState([1, 0]);
  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };
 
  return (
    <>
      <Sidebar />
      <div className="main-container">
        {/* <BackgroundImage
          page={page}
          direction={direction}
        /> */}
        <motion.div
          className="music-player-container"
          initial={{ x: 0, opacity: 0 }}
          animate={{ x: 0, opacity: 1, transition: { duration: 0.3 } }}
        >
          <div className="outer-player-banner">
            <div className="player-banner">
              <h1>Shirley & Clifford</h1>
              <h2>September 2nd, 2021</h2>
            </div>
          </div>
          <FocusedImage direction={direction} page={page} paginate={paginate} />
          <GallerySlider page={page} paginate={paginate} setPage={setPage} />
          <Link to="/gallery" className="gallery-queue" type="submit">
            <IoIosArrowUp className="gallery-queue-icon" />
          </Link>
        </motion.div>
      </div>
    </>
  );
};

export default MusicPlayerGallery;
