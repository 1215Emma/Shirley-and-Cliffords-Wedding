import React from "react";
import "./Registry.css";
import { useFirebaseData } from "../useFirebaseData";
import { motion } from "framer-motion";
import Sidebar from "../../Sidebar/Sidebar";
import { homeVariants, homeCloseVariants } from "../Variants/PageVariants";

const Registry = ({ showSidebar, setShowSidebar }) => {
  const page = "registry"
  const data = useFirebaseData(page);
  const registryRender = (numOfStores) => {
    return (
      <motion.div
        className="registry-wrapper"
        variants={showSidebar ? homeVariants : homeCloseVariants}
        initial={showSidebar ? "show" : "pushed"}
        animate={showSidebar ? "push" : "closed"}
      >
        <motion.div
          className="section-container"
          initial={{ x: 0, opacity: 0 }}
          animate={{ x: 0, opacity: 1, transition: { duration: 0.5 } }}
        >
          <div className="primary-header registry-primary">
            <h1>{data.header.header_primary}</h1>
            <h2>{data.header.header_secondary}</h2>
          </div>
          {/* <img
            id={page}
            className={`img-${page}`}
            src="https://phanes.feralhosting.com/hkscfreak/Shirley-and-Clifford-Wedding/compressed-images-shirley/Shirley_Clifford_Proposal-164.jpg"
            alt="Shirley and Clifford sharing a kiss"
          /> */}
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
        </motion.div>
      </motion.div>
    );
  };
  if (data !== undefined) {
    const numOfStores = Object.values(data.body)
    return (
      <>
        <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        {registryRender(numOfStores)}
      </>
    );
  } else {
    return <></>;
  }
};

export default Registry;
