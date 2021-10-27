import React from "react";
import "./Main.css";
import { useFirebaseData } from '../useFirebaseData'
import { motion } from "framer-motion";

const Main = ({ page }) => {

  const data = useFirebaseData(page)
  if (data !== undefined) {

    return (
      <>
        <motion.div
          className="section-container"
          initial={{ x: 0, opacity: 0 }}
          animate={{ x: 0, opacity: 1, transition: { duration: 0.3 } }}
        >
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
            <div className="primary-body main-body">
              <h2>{data.body.body_primary}</h2>
              <h2>{data.body.body_secondary}</h2>
            </div>
          </div>
        </motion.div>
      </>
    );
  } else {
    return (
      <></>
    )
}
};

export default Main;
