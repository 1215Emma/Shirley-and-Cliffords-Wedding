import React from "react";
import "./Travel.css";
import { useFirebaseData } from "../useFirebaseData";
import { motion } from "framer-motion";
import Sidebar from "../../Sidebar/Sidebar";
import { homeVariants, homeCloseVariants } from "../Variants/PageVariants";
import FlowerBorder from '../images/flower-border-vertical.png'

const Travel = ({ showSidebar, setShowSidebar, height, width }) => {
  const page = "travel";
  const data = useFirebaseData(page);

  const travelRender = () => {
    return (
      <motion.div
        id="travel"
        className="wrapper travel-wrapper"
        variants={showSidebar ? homeVariants : homeCloseVariants}
        // initial={showSidebar ? "show" : "pushed"}
        // animate={showSidebar ? "push" : "closed"}
        style={{ height: "auto", width: `${width}px` }}
      >
        <img src={FlowerBorder} alt="" className="flower-border" />
        <div className="inner inner-wrapper-travel">
          <div className="header-banner-container">
            <div className="primary-header travel-primary">
              <h1>{data.header.header_primary}</h1>
            </div>
          </div>
          <motion.div
            className="section-container travel-container"
            initial={{ x: 0, opacity: 0 }}
            animate={{ x: 0, opacity: 1, transition: { duration: 0.5 } }}
          >
            <div className="sheraton-container">
              <img
                src="https://phanes.feralhosting.com/hkscfreak/Shirley-and-Clifford-Wedding/Sharaton-Maui.jpg"
                alt="Sheraton Maui Resort & Spa"
                className="sheraton"
              />
              <h1>SHERATON MAUI RESORT & SPA</h1>
            </div>
            {/* <img
            id={page}
            className={`img-${page}`}
            src="https://phanes.feralhosting.com/hkscfreak/Shirley-and-Clifford-Wedding/compressed-images-shirley/Shirley_Clifford_Proposal-91.jpg"
            alt="Clifford on his knee proposing to Shirley"
          /> */}
            <div className="primary-body travel-body">
              <h2>{data.body.body_primary}</h2>
              <h2>{data.body.body_secondary}</h2>
              <button type="button" className="sheraton-btn">
                <a
                  href="https://www.marriott.com/hotels/hotel-information/hnmsi-sheraton-maui-resort-and-spa/"
                  target="_blank"
                  rel="noreferrer"
                  className="sheraton-link"
                >
                  Sheraton Maui Website
                </a>
              </button>
              <h1>{data.body.body_tertiary}</h1>
              <h2>{data.body.body_four}</h2>
              <h2>{data.body.body_five}</h2>
            </div>
          </motion.div>
          <img
            src="https://phanes.feralhosting.com/hkscfreak/Shirley-and-Clifford-Wedding/palm-tree-cow.png"
            alt="wagyu under a palm tree relaxing"
            className="palm-tree-cow"
          />
          {/* <img
          src={HawaiiBorder}
          alt="hawaiian themed border"
          className="hawaii-border"
        /> */}
        </div>
      </motion.div>
    );
  };
  if (data !== undefined) {
    return (
      <>
        {/* <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} /> */}
        {travelRender()}
      </>
    );
  } else {
    return <></>;
  }
};

export default Travel;
