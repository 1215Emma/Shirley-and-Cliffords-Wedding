import React from "react";
import "./Faq.css";
import PagesImages from "../images/PagesImagesConfig";
import { useFirebaseData } from "../useFirebaseData";
const Faq = ({ page }) => {
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
            src="https://phanes.feralhosting.com/hkscfreak/Shirley-and-Clifford-Wedding/compressed-images-shirley/Shirley_Clifford_Proposal-132.jpg"
            alt="Clifford on his knee proposing to Shirley"
          />
          <div className="section-no-image">
            <div className="primary-header faq-primary">
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

export default Faq;
