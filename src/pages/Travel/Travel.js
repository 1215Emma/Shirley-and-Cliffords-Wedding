import React from "react";
import "./Travel.css";
import PagesImages from "../images/PagesImagesConfig";
import { useFirebaseData } from "../useFirebaseData";
const Travel = ({ page, homeMetadata, pages }) => {
  // const imageIndex = PagesImages.findIndex(
  //   (imageArray) => imageArray.id === page
  // );
  // const pageIndex = pages.indexOf(page);
  const data = useFirebaseData(page);
  console.log(data);
  if (data !== undefined) {
    return (
      <>
        <div className="section-container">
          <img
            id={page}
            className={`img-${page}`}
            src="https://phanes.feralhosting.com/hkscfreak/Shirley-and-Clifford-Wedding/compressed-images-shirley/Shirley_Clifford_Proposal-91.jpg"
            alt="Clifford on his knee proposing to Shirley"
          />
          <div className="section-no-image">
            <div className="primary-header travel-primary">
              <h1>{data.header.header_primary}</h1>
              <h2>{data.header.header_secondary}</h2>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return <></>;
  }
};

export default Travel;
