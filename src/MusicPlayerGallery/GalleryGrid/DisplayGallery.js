import React from 'react'
import images from '../../images/ImagesConfig'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
const ImageCard = ({ category, id, source }) => {
  
  return (
    <li className={`image ${category}`}>
      <div className="image-content-container">
        <motion.div
          className="image-content"
          layoutId={`image-container-${id}`}
        >
          <motion.div
            className="image-card-container"
            layoutId={`card-image-container-${id}`}
          >
            <img className="card-image" src={images[id][source]} alt="" />
          </motion.div>
        </motion.div>
      </div>
      <Link to={id} className={`card-open-link`} />
    </li>
  );
};
const DisplayGallery = ({ selectedId }) => {
  return (
    <ul className="image-list">
      {images.map(card => (
        <ImageCard key={card.id} {...card} isSelected={card.id === selectedId} />
        ))}
    </ul>
  )
}


export default DisplayGallery
