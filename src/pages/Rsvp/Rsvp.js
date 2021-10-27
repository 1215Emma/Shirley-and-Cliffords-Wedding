import React, { useState } from "react";
import "./Rsvp.css";
import RsvpForm from "./RsvpForm";
import { useFirebaseData } from "../useFirebaseData";
import { motion } from "framer-motion";
import Loader from "../../Utilities/Loader";
const Rsvp = ({ page }) => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const data = useFirebaseData(page);

  if (data !== undefined) {
    return (
      <>
        <motion.div
          className="section-container"
          initial={{ x: 0, opacity: 0 }}
          animate={{ x: 0, opacity: 1, transition: { duration: 0.5 } }}
        >
          <img
            id={page}
            src="https://phanes.feralhosting.com/hkscfreak/Shirley-and-Clifford-Wedding/compressed-images-shirley/Shirley_Clifford_Proposal-198.jpg"
            className={`img-${page}`}
            alt="Shirley and Clifford kissing between streets"
          />
          <div className="section-no-image">
            {!isFormSubmitted ? (
              <>
                <div className="primary-header rsvp-primary">
                  <h1>{data.header.header_primary}</h1>
                  <h2>{data.header.header_secondary}</h2>
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
          </div>
        </motion.div>
      </>
    );
  } else {
    return <></>;
  }
};

export default Rsvp;
