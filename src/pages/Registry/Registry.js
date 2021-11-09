import React from "react";
import "./Registry.css";
import { useFirebaseData } from "../useFirebaseData";
import { motion } from "framer-motion";
import { homeVariants, homeCloseVariants } from "../Variants/PageVariants";


const Registry = ({ showSidebar, setShowSidebar, height, width }) => {
  const page = "registry"
  const data = useFirebaseData(page);
  const registryRender = (numOfStores) => {
    return (
      <motion.div
        id="registry"
        className="registry-wrapper"
        variants={showSidebar ? homeVariants : homeCloseVariants}
        initial={showSidebar ? "show" : "pushed"}
        animate={showSidebar ? "push" : "closed"}
        style={{ height: `auto`, width: `${width}px` }}
      >
        <div className="inner inner-wrapper-registry">
          <div className="header-banner-container">
            <div className="primary-header registry-primary">
              <h1>{data.header.header_primary}</h1>
            </div>
          </div>
          <motion.div
            className="section-container"
            initial={{ x: 0, opacity: 0 }}
            animate={{ x: 0, opacity: 1, transition: { duration: 0.5 } }}
          >
            <div className="all-store-container">
              {numOfStores.map((res) => {
                return (
                  <div className="store-container" key={res.store}>
                    
                      <button type="submit" className={`${page}-button`}>
                        <img
                          src={res.img_url}
                          alt={res.store}
                          className={`registry-img ${res.store}`}
                        />
                      </button>
                  
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </motion.div>
    );
  };
  if (data !== undefined) {
    const numOfStores = Object.values(data.body)
    return (
      <>
        {registryRender(numOfStores)}
      </>
    );
  } else {
    return <></>;
  }
};

export default Registry;
