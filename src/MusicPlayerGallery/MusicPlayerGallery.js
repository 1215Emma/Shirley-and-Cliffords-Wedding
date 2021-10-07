import React, { useState } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import "./MusicPlayerGallery.css";
import lookingAtEachother from "../images/lookingAtEachother.jpg";
import onTopOfTheWorld from "../images/onTopOfTheWorld.jpg";
import landingCompressed from "../images/landingCompressed.jpg";
import hawaiiBackground1 from "../images/hawaiiBackground1.jpg";
import GallerySlider from "../GallerySlider";
import { motion, AnimatePresence } from "framer-motion";
import Sidebar from "./Sidebar";
const MusicPlayerGallery = () => {
  const [portraitSelectorIndex, setPortraitSelectorIndex] = useState(0);

  const galleryImages = [
    onTopOfTheWorld,
    landingCompressed,
    lookingAtEachother,
  ];

  return (
    <>
      <div className="music-player-container">
        <AnimatePresence initial={false}>
          {/* <img src={hawaiiBackground1} alt="" className="gallery-images-background" /> */}
          <motion.img
            key={galleryImages[portraitSelectorIndex]}
            src={galleryImages[portraitSelectorIndex]}
            // src={galleryImages[portraitSelectorIndex]}
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 0.3 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.5 }}
            alt="bg"
            className="gallery-images-background"
          />
        </AnimatePresence>
        <div className="music-player-container-data">
          <div className="outer-player-banner">
            <div className="player-banner">
              <h1>Shirley & Clifford</h1>
              <h2>September 2nd, 2021</h2>
            </div>
            <Sidebar />
          </div>
          <motion.div className="image-container">
            <AnimatePresence exitBeforeEnter initial={false}>
              <motion.img
                key={galleryImages[portraitSelectorIndex]}
                src={galleryImages[portraitSelectorIndex]}
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -300, opacity: 0 }}
                transition={{ duration: 0.5 }}
                alt=""
                className="gallery-images"
              />
            </AnimatePresence>
          </motion.div>
          <GallerySlider
            setPortraitSelectorIndex={setPortraitSelectorIndex}
            portraitSelectorIndex={portraitSelectorIndex}
            galleryImages={galleryImages}
          />
        </div>
      </div>
    </>
  );
};

export default MusicPlayerGallery;
