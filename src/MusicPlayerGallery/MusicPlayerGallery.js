import React, { useState } from "react";
import "./MusicPlayerGallery.css";
import images from '../images/ImagesConfig'
import GallerySlider from "./GallerySlider";
import GalleryGrid from '../GalleryGrid/GalleryGrid'
import { wrap } from "popmotion";
import Sidebar from "../Sidebar/Sidebar";
import BackgroundImage from './BackgroundImage'
import FocusedImage from './FocusedImage'
import { MdOutlineQueueMusic } from "react-icons/md";
const MusicPlayerGallery = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [showGallery, setShowGallery] = useState(false);
const imageIndex = wrap(0, images.length, page);
const paginate = (newDirection) => {
  setPage([page + newDirection, newDirection]);
  };
  console.log(page, "page")
  console.log(direction, "direction")
  return (
    <>
      
        <div className="main-container">
          <BackgroundImage
            images={images}
            imageIndex={imageIndex}
            page={page}
            direction={direction}
          />
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
          <button
            className="gallery-queue"
            type="submit"
            onClick={() => {
              setShowGallery(true);
            }}
          >
            <MdOutlineQueueMusic className="gallery-queue-icon" />
          </button>
          <GalleryGrid
            imageIndex={imageIndex}
            images={images}
            setShowGallery={setShowGallery}
            showGallery={showGallery}
          />
        </div>
          </div>
    </>
      )
  
};

export default MusicPlayerGallery;
