import React, { useState } from "react";
import "./Rsvp.css";
import RsvpForm from "./RsvpForm";
import { useFirebaseData } from "../useFirebaseData";
import { motion } from "framer-motion";
import Loader from "../../Utilities/Loader";
import Sidebar from "../../Sidebar/Sidebar";
import { homeVariants, homeCloseVariants } from "../Variants/PageVariants";
import HeaderBannerBg from "../images/header-banner.png";
import HawaiiBorder from "../images/hawaii-border2.png";
import UmbrellaCow from '../images/umbrella-cow.png'
const Rsvp = ({ showSidebar, setShowSidebar, height, width }) => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const page = "rsvp"
  const data = useFirebaseData(page);
  const rsvpRender = () => {
    return (
      <motion.div
        className="wrapper rsvp-wrapper"
        variants={showSidebar ? homeVariants : homeCloseVariants}
        initial={showSidebar ? "show" : "pushed"}
        animate={showSidebar ? "push" : "closed"}
        style={{ height: `auto`, width: `${width}px` }}
      >
        <div className="inner inner-wrapper-rsvp">
          <div className="header-banner-container">
            <div className="primary-header rsvp-primary">
              <h1>{data.header.header_primary}</h1>
            </div>
          </div>
          <motion.div
            className="section-container"
            initial={{ x: 0, opacity: 0 }}
            animate={{ x: 0, opacity: 1, transition: { duration: 0.5 } }}
          >
            {!isFormSubmitted ? (
              <>
                {/* <img
                id={page}
                src="https://phanes.feralhosting.com/hkscfreak/Shirley-and-Clifford-Wedding/compressed-images-shirley/Shirley_Clifford_Proposal-198.jpg"
                className={`img-${page}`}
                alt="Shirley and Clifford kissing between streets"
              /> */}
                <div className="primary-body rsvp-body">
                  <h2>{data.body.form_header}</h2>
                </div>
                <RsvpForm data={data} setIsFormSubmitted={setIsFormSubmitted} />
              </>
            ) : (
              <>
                <motion.div
                  className="dark-container"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.5 } }}
                >
                  <div className="primary-header form-submitted">
                    <h2>Thanks for RSVPing!</h2>
                    <h3>We're excited to see you</h3>
                  </div>
                </motion.div>
                <Loader />
              </>
            )}
          </motion.div>
          {/* <img
          src={HawaiiBorder}
          alt="hawaiian themed border"
          className="hawaii-border"
        /> */}
          <img
            src="https://phanes.feralhosting.com/hkscfreak/Shirley-and-Clifford-Wedding/umbrella-cow.png"
            alt="Wagyu relaxing under the sun"
            className="umbrella-cow"
          />
        </div>
      </motion.div>
    );
  };
  if (data !== undefined) {
    return (
      <>
        <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        {rsvpRender()}
      </>
    );
  } else {
    return <></>;
  }
};

export default Rsvp;
