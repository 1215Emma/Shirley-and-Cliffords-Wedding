import React, { useState } from "react";
import "./MusicPlayerGallery.css";
import images from '../images/ImagesConfig'
import GallerySlider from "../GallerySlider";
import GalleryGrid from '../MusicPlayerGallery/GalleryGrid'
import { wrap } from "popmotion";
import Sidebar from "./Sidebar";
import BackgroundImage from './BackgroundImage'
import FocusedImage from './FocusedImage'
const MusicPlayerGallery = () => {
const [[page, direction], setPage] = useState([0, 0]);

const imageIndex = wrap(0, images.length, page);
const paginate = (newDirection) => {
  setPage([page + newDirection, newDirection]);
};
  return (
    <>
      <BackgroundImage images={images} imageIndex={imageIndex} page={page} direction={direction}/>
      <div className="music-player-container">
        <div className="outer-player-banner">
          <div className="player-banner">
            <h1>Shirley & Clifford</h1>
            <h2>September 2nd, 2021</h2>
          </div>
          <Sidebar />
        </div>
        <FocusedImage
          direction={direction}
          page={page}
          imageIndex={imageIndex}
          paginate={paginate}
        />
        <GallerySlider
          images={images}
          paginate={paginate}
          imageIndex={imageIndex}
        />
        <GalleryGrid imageIndex={imageIndex} images={images} />
      </div>
    </>
  );
};

export default MusicPlayerGallery;
