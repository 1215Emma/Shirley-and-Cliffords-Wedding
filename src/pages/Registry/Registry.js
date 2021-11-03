import React from "react";
import "./Registry.css";
import { useFirebaseData } from "../useFirebaseData";
import { motion } from "framer-motion";
import Sidebar from "../../Sidebar/Sidebar";
import { homeVariants, homeCloseVariants } from "../Variants/PageVariants";
import HeaderBannerBg from "../images/header-banner.png";
import HawaiiBorder from "../images/hawaii-border2.png";
import Pineapple from '../images/pineapple.jpg'
import SevenLionsFooter from '../images/footer.png'
import CrateAndBarrel from '../images/CrateAndBarrel.png'
import FlowerBorder from "../images/flower-border.png";

const Registry = ({ showSidebar, setShowSidebar, height, width }) => {
  const page = "registry"
  const data = useFirebaseData(page);
  const registryRender = (numOfStores) => {
    return (
      <motion.div
        className="registry-wrapper"
        variants={showSidebar ? homeVariants : homeCloseVariants}
        initial={showSidebar ? "show" : "pushed"}
        animate={showSidebar ? "push" : "closed"}
        style={{ height: `auto`, width: `${width}px` }}
      >
        <div className="inner inner-wrapper-registry">
          <div className="header-banner-container">
            {/* <img
            src={HeaderBannerBg}
            alt="header banner"
            className="header-banner-bg"
          /> */}
            <div className="primary-header registry-primary">
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
            src="https://phanes.feralhosting.com/hkscfreak/Shirley-and-Clifford-Wedding/compressed-images-shirley/Shirley_Clifford_Proposal-164.jpg"
            alt="Shirley and Clifford sharing a kiss"
          /> */}
            <div className="all-store-container">
              {numOfStores.map((res) => {
                console.log(res, "RESSSSPDOS");
                return (
                  <div className="store-container" key={res.store}>
                    {/* <h3>{res.description}</h3> */}
                    <div className="button-container">
                      <button type="submit" className={`${page}-button`}>
                        <img
                          src={res.img_url}
                          alt={res.store}
                          className={`registry-img ${res.store}`}
                        />
                      </button>
                      {/* <h2>{res.store}</h2> */}
                    </div>
                    <div className="style-container1" />
                    <div className="style-container2" />
                  </div>
                );
              })}
            </div>
          </motion.div>
          {/* <img
          src={HawaiiBorder}
          alt="hawaiian themed border"
          className="hawaii-border"
        /> */}
          <img src={FlowerBorder} alt="" className="flower-border-registry" />
        </div>
        {/* <img
          src={SevenLionsFooter}
          alt="Footer of a seven lions album art"
          className="footer"
        /> */}
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
