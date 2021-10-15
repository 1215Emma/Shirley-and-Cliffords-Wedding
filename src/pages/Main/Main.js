import React from "react";
import "./Main.css";
import PagesImages from '../images/PagesImagesConfig'

import Sidebar from '../../Sidebar/Sidebar'
const Main = ({ page, isLoggedIn, homeMetadata, pages }) => {
  const imageIndex = PagesImages.findIndex(
    (imageArray) => imageArray.id === page
  );
  const pageIndex = pages.indexOf(page);

  return (
    <>
      <Sidebar />
      <img
        id={page}
        className={`img-${page}`}
        src={PagesImages[imageIndex].source}
        alt="Clifford kissing Shirley in front of building"
      />
      <div className="section-container">
        <div className="primary-header main-primary">
          <h1>{homeMetadata[pageIndex].main_header}</h1>
          <h2>{homeMetadata[pageIndex].sub_header}</h2>
          <h2>{homeMetadata[pageIndex].inner_sub_header}</h2>
        </div>
      </div>
    </>
  );
};

export default Main;
