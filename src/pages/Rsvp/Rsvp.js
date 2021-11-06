import React, { useState } from "react";
import "./Rsvp.css";
import RsvpForm from "./RsvpForm";
import { useFirebaseData } from "../useFirebaseData";
import { motion } from "framer-motion";
import Loader from "../../Utilities/Loader";
import { homeVariants, homeCloseVariants } from "../Variants/PageVariants";

const Rsvp = ({ showSidebar, setShowSidebar, height, width }) => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const page = "rsvp"
  const data = useFirebaseData(page);
  const rsvpRender = () => {
    return (
      <motion.div
        id="rsvp"
        className="wrapper rsvp-wrapper"
        variants={showSidebar ? homeVariants : homeCloseVariants}
        initial={showSidebar ? "show" : "pushed"}
        animate={showSidebar ? "push" : "closed"}
        style={{ height: `auto`, width: `${width}px` }}
      >
        <div className="inner inner-wrapper-rsvp">
            <div className="primary-header rsvp-primary">
              <h1>{data.header.header_primary}</h1>
            </div>
          <motion.div
            className="section-container"
            initial={{ x: 0, opacity: 0 }}
            animate={{ x: 0, opacity: 1, transition: { duration: 0.5 } }}
          >
            {!isFormSubmitted ? (
              <>
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
        {rsvpRender()}
      </>
    );
  } else {
    return <></>;
  }
};

export default Rsvp;
