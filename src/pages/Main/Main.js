import React, { useState, useEffect } from "react";
import "./Main.css";
import PagesImages from '../images/PagesImagesConfig'
import { useDynamicData } from "../../Api/DynamicData";
import Sidebar from '../../Sidebar/Sidebar'
import { useFirebaseData } from '../useFirebaseData'
const Main = ({ page }) => {
  const x = "hello"
  const data = useFirebaseData(page)
  console.log(data)
  if (data !== undefined) {

    return (
      <>
        <Sidebar />
        <div className="section-container">
          <img
            id={page}
            className={`img-${page}`}
            src="https://phanes.feralhosting.com/hkscfreak/Shirley-and-Clifford-Wedding/compressed-images-shirley/Shirley_Clifford_Proposal-159.jpg"
            alt="Clifford kissing Shirley in front of building"
          />
          <div className="section-no-image">
            <div className="primary-header main-primary">
              <h1>{data.header.header_primary}</h1>
              <h2>{data.header.header_secondary}</h2>
              <h2>{data.header.header_tertiary}</h2>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <></>
    )
}
};

export default Main;
