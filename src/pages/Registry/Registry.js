import React from "react";
import "./Registry.css";
import { useFirebaseData } from "../useFirebaseData";
import { motion } from "framer-motion";
const Registry = ({ page }) => {

  const data = useFirebaseData(page);

  if (data !== undefined) {
    const numOfStores = Object.values(data.body)
    return (
      <>
        <motion.div
          className="section-container"
          initial={{ x: 0, opacity: 0 }}
          animate={{ x: 0, opacity: 1, transition: { duration: 0.5 } }}
        >
          <img
            id={page}
            className={`img-${page}`}
            src="https://phanes.feralhosting.com/hkscfreak/Shirley-and-Clifford-Wedding/compressed-images-shirley/Shirley_Clifford_Proposal-180.jpg"
            alt="Shirley and Clifford holding hands looking at eachother"
          />
          <div className="section-no-image">
            <div className="primary-header registry-primary">
              <h1>{data.header.header_primary}</h1>
              <h2>{data.header.header_secondary}</h2>
            </div>
            <div className="all-store-container">
              {numOfStores.map((res) => {
                return (
                  <div className="store-container" key={res.store}>
                    <h3>{res.description}</h3>
                    <div className="button-container">
                      <button type="submit" className={`${page}-button`}>
                        <h2>{res.store}</h2>
                      </button>
                    </div>
                    <div className="style-container1" />
                    <div className="style-container2" />
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </>
    );
  } else {
    return <></>;
  }
};

export default Registry;
