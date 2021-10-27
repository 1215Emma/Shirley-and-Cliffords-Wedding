import React, { useState } from 'react'
import './Gallery.css'
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import imageUrls from '../images/imageUrls.json'
import { BsArrowLeft } from 'react-icons/bs'
import { HashLink } from "react-router-hash-link";



const Images = ({ image, onExpand}) => {
  return (
    <motion.img
      src={`https://phanes.feralhosting.com/hkscfreak/Shirley-and-Clifford-Wedding/compressed-images-shirley/Shirley_Clifford_Proposal-${image}.jpg`}
      alt=""
      onClick={() => onExpand(image)}
      className="related-product-image"
      layoutId={`product-${image}`}
    />
  );
}
const Gallery = () => {
  const [primaryImage, setPrimaryImage] = useState("15")
  const [allImages, setAllImages] = useState(Object.keys(imageUrls).filter(primary => primary !== primaryImage));

  function setAsPrimary(image) {
    const currentPrimaryImage = primaryImage;
    const newImages = [
      ...allImages.filter((x) => x !== image),
      currentPrimaryImage,
    ];

    setPrimaryImage(image);
    setAllImages(newImages);
  }
  return (
    <motion.div
      className="gallery-wrapper"
      initial={{ opacity: 1, y: "100%" }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
      exit={{ opacity: 1, y: "100%", transition: { duration: 0.5 } }}
    >
      <div className="expanded-navigation-bar">
        <HashLink
          smooth
          activeStyle={{ fontWeight: "bold" }}
          className="close-expanded-button"
          to="/galleryplayer"
        >
        <BsArrowLeft className="close-expanded-icon" />

        </HashLink>
      </div>
      <AnimateSharedLayout type="crossfade">
        <div className="primary-container">
          <AnimatePresence>
            <motion.img
              key={primaryImage}
              className="primary-product-image"
              src={`https://phanes.feralhosting.com/hkscfreak/Shirley-and-Clifford-Wedding/compressed-images-shirley/Shirley_Clifford_Proposal-${primaryImage}.jpg`}
              alt=""
              layoutId={`product-${primaryImage}`}
            />
          </AnimatePresence>
        </div>
        <div className="product-gallery">
          <AnimatePresence>
            {allImages.map((image) => (
              <Images image={image} key={image} onExpand={setAsPrimary} />
            ))}
          </AnimatePresence>
        </div>
      </AnimateSharedLayout>
    </motion.div>
  );
};

export default Gallery