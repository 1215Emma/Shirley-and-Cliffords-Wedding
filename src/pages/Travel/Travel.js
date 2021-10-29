import React from "react";
import "./Travel.css";
import { useFirebaseData } from "../useFirebaseData";
import { motion } from "framer-motion";
import Sidebar from "../../Sidebar/Sidebar";
import { homeVariants, homeCloseVariants } from "../Variants/PageVariants";

const Travel = ({ showSidebar, setShowSidebar }) => {
  const page = "travel";
  const data = useFirebaseData(page);

  const travelRender = () => {
    return (
      <motion.div
        className="travel-wrapper"
        variants={showSidebar ? homeVariants : homeCloseVariants}
        initial={showSidebar ? "show" : "pushed"}
        animate={showSidebar ? "push" : "closed"}
      >
        <motion.div
          className="section-container"
          initial={{ x: 0, opacity: 0 }}
          animate={{ x: 0, opacity: 1, transition: { duration: 0.5 } }}
        >
          <div className="primary-header travel-primary">
            <h1>{data.header.header_primary}</h1>
            <h2>{data.header.header_secondary}</h2>
          </div>
          <img
            id={page}
            className={`img-${page}`}
            src="https://phanes.feralhosting.com/hkscfreak/Shirley-and-Clifford-Wedding/compressed-images-shirley/Shirley_Clifford_Proposal-91.jpg"
            alt="Clifford on his knee proposing to Shirley"
          />
          <div className="primary-body travel-body">
            <h2>{data.body.body_primary}</h2>
            <h2>{data.body.body_secondary}</h2>
          </div>
        </motion.div>
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
