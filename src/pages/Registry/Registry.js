import React from "react";
import "./Registry.css";
import PagesImages from "../images/PagesImagesConfig";
const Registry = ({ page, homeMetadata, pages, registryData }) => {
  const imageIndex = PagesImages.findIndex(
    (imageArray) => imageArray.id === page
  );
  const pageIndex = pages.indexOf(page);
  if (homeMetadata !== null) {
    return (
      <>
        <div className="section-container">
          <img
            id={page}
            className={`img-${page}`}
            src={PagesImages[imageIndex].source}
            alt="Shirley and Clifford holding hands looking at eachother"
          />
          <div className="section-no-image">
            <div className="primary-header registry-primary">
              <h1>{homeMetadata[pageIndex].main_header}</h1>
              <h2>{homeMetadata[pageIndex].sub_header}</h2>
            </div>
            <div className="all-store-container">
              {registryData.map((stores) => {
                return (
                  <div key={stores.id} className="store-container">
                    <h3>{stores.description}</h3>
                    <div className="button-container">
                      <button type="submit" className={`${page}-button`}>
                        <h2>{stores.store}</h2>
                      </button>
                    </div>
                    <div className="style-container1" />
                    <div className="style-container2" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default Registry;
