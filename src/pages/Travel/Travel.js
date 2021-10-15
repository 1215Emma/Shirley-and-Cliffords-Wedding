import React from 'react'
import './Travel.css'
import PagesImages from "../images/PagesImagesConfig";

const Travel = ({ page, homeMetadata, pages }) => {
  const imageIndex = PagesImages.findIndex(
    (imageArray) => imageArray.id === page
  );
  const pageIndex = pages.indexOf(page);

  return (
    <>
      <img
        id={page}
        className={`img-${page}`}
        src={PagesImages[imageIndex].source}
        alt="Clifford on his knee proposing to Shirley"
      />
      <div className="section-container">
        <div className="primary-header travel-primary">
          <h1>{homeMetadata[pageIndex].main_header}</h1>
          <h2>{homeMetadata[pageIndex].sub_header}</h2>
          
        </div>
      </div>
    </>
  );
}

export default Travel
