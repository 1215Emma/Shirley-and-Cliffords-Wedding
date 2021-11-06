import React from "react";
import "./Travel.css";
import { useFirebaseData } from "../useFirebaseData";
import { motion } from "framer-motion";
import { homeVariants, homeCloseVariants } from "../Variants/PageVariants";
import FlowerBorder from "../images/flower-border-vertical.png";

const Travel = ({ showSidebar, setShowSidebar, height, width }) => {
  const page = "travel";
  const data = useFirebaseData(page);
  const resorts = () => {
    const resortData = Object.entries(data.body);
    return resortData.map((resort) => {
      return (
        <div key={resort[0]}>
          <div className={`resort-header`}>
            {resort[1].resort_image !== undefined && (
              <img
                src={resort[1].resort_image}
                alt="Sheraton Maui Resort & Spa"
                className="resort"
              />
            )}
            <h1>{resort[1].resort}</h1>
          </div>
          <div className="primary-body travel-body">
            <h2>{resort[1].info_1}</h2>
            <h2>{resort[1].info_2}</h2>
            {resort[1].resort_website !== undefined && (
              <button type="button" className="resort-btn">
                <motion.a
                  whileHover={{ scale: 3 }}
                  whileTap={{ scale: 0.8 }}
                  style={{ x: 100 }}
                  href={resort[1].resort_website}
                  target="_blank"
                  rel="noreferrer"
                  className="resort-link"
                >
                  <h1>{`Visit website`}</h1>
                </motion.a>
                
              </button>
            )}
          </div>
        </div>
      );
    });
  };
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
        
        
        <div className="inner inner-wrapper-travel">
          <div className="primary-header travel-primary">
            <h1>{data.header.header_primary}</h1>
          </div>

          <motion.div
            className="section-container travel-container"
            initial={{ x: 0, opacity: 0 }}
            animate={{ x: 0, opacity: 1, transition: { duration: 0.5 } }}
          >
            {resorts()}
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
