import React from "react";
import "./Travel.css";
import { useFirebaseData } from "../useFirebaseData";
import { motion } from "framer-motion";
import Sidebar from "../../Sidebar/Sidebar";
import { homeVariants, homeCloseVariants } from "../Variants/PageVariants";
import HeaderBannerBg from '../images/header-banner.png'
import HawaiiBorder from '../images/hawaii-border2.png'
const Travel = ({ showSidebar, setShowSidebar, height, width }) => {
  const page = "travel";
  const data = useFirebaseData(page);

  const travelRender = () => {
    return (
      <motion.div
        className="wrapper travel-wrapper"
        variants={showSidebar ? homeVariants : homeCloseVariants}
        initial={showSidebar ? "show" : "pushed"}
        animate={showSidebar ? "push" : "closed"}
        style={{ height: `${height}px`, width: `${width}px` }}
      >
        <div className="header-banner-container">
          <img
            src={HeaderBannerBg}
            alt="header banner"
            className="header-banner-bg"
          />
          <div className="primary-header travel-primary">
            <h1>{data.header.header_primary}</h1>
          </div>
        </div>
        <motion.div
          className="section-container"
          initial={{ x: 0, opacity: 0 }}
          animate={{ x: 0, opacity: 1, transition: { duration: 0.5 } }}
        >
          {/* <img
            id={page}
            className={`img-${page}`}
            src="https://phanes.feralhosting.com/hkscfreak/Shirley-and-Clifford-Wedding/compressed-images-shirley/Shirley_Clifford_Proposal-91.jpg"
            alt="Clifford on his knee proposing to Shirley"
          /> */}
          <div className="primary-body travel-body">
            <h2>{data.body.body_primary}</h2>
            <h2>{data.body.body_secondary}</h2>
            <h2>{data.body.body_tertiary}</h2>
          </div>
        </motion.div>
        <img
          src={HawaiiBorder}
          alt="hawaiian themed border"
          className="hawaii-border"
        />
      </motion.div>
    );
  };
  if (data !== undefined) {
    return (
      <>
        <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        {travelRender()}
      </>
    );
  } else {
    return <></>;
  }
};

export default Travel;
