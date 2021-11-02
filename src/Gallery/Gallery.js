import React, { useState, useEffect, useRef } from "react";
import "./Gallery.css";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import imageUrls from "../images/imageUrls.json";
import { BsChevronCompactRight } from "react-icons/bs";
import { useFirebaseData } from "../pages/useFirebaseData";

const Images = ({ image, onExpand }) => {
  return (
    <div className="gallery-img-container">
    <motion.img
      src={`https://phanes.feralhosting.com/hkscfreak/Shirley-and-Clifford-Wedding/compressed-images-shirley/Shirley_Clifford_Proposal-${image}.jpg`}
      alt=""
      onClick={() => { onExpand(image) }}
      className="related-product-image"
      layoutId={`product-${image}`}
      >    
      </motion.img>
      </div>
  );
};
const Gallery = () => {
  const [primaryImage, setPrimaryImage] = useState("15");
  const [allImages, setAllImages] = useState(
    Object.keys(imageUrls).filter((primary) => primary !== primaryImage)
  );
  const timeoutRef = useRef(null)

  function setAsPrimary(image) {
    const currentPrimaryImage = primaryImage;
    const newImages = [
      ...allImages.filter((x) => x !== image),
      currentPrimaryImage,
    ];
    setPrimaryImage(image);
    setAllImages(newImages);
  }
  const page = "main";
  const data = useFirebaseData(page);

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      console.log("timeout")
      setAsPrimary(allImages[0])
    }, 30000)
    return () => {
      resetTimeout();
    }
  }, [allImages])

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  }

  if (data !== undefined) {
    return (
      <motion.div
        className="gallery-wrapper"
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
        exit={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
      >

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
              <div className="main-primary">
              <h1 className="left-header">{data.header.header_primary}</h1>
              <div className="header-secondary">
                <h2 className="left-header">{data.header.header_secondary}</h2>
                <h2> | </h2>
                <h2 className="left-header">{data.header.header_tertiary}</h2>
                </div>
            </div>
            <div className="product-gallery-nav">
              <div className="product-gallery">
                <AnimatePresence>
                  {allImages.map((image) => (
                    <Images image={image} key={image} onExpand={setAsPrimary} />
                    ))}
                </AnimatePresence>
              </div>
              <BsChevronCompactRight className="carousel-arrow" onClick={() => {setAsPrimary(allImages[0])}}/>
              </div>
            </div>
        </AnimateSharedLayout>
      </motion.div>
    );
  } else {
    return <></>;
  }
};

export default Gallery;
