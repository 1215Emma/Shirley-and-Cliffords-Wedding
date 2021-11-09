import React from "react";
import "./Faq.css";
import { useFirebaseData } from "../useFirebaseData";
import { motion } from "framer-motion";
import { homeVariants, homeCloseVariants } from "../Variants/PageVariants";

const Faq = ({ showSidebar, width }) => {
  const page = "faq";
  const data = useFirebaseData(page);
  const questions = () => {
    const questionData = Object.entries(data.body);
    return questionData.map((question) => {
      return (
        <div key={question[0]}>
          <div className="primary-body faq-body">
            <h1 className="edit-faq-question">{question[1].question}</h1>
            <h2
              className="edit-faq-answer"
              style={{ paddingBottom: 0, paddingTop: 0 }}
            >
              {question[1].answer}
            </h2>
          </div>
        </div>
      );
    });
  };
  const faqRender = () => {
    return (
      <motion.div
        id="faq"
        className="wrapper faq-wrapper"
        variants={showSidebar ? homeVariants : homeCloseVariants}
        initial={showSidebar ? "show" : "pushed"}
        animate={showSidebar ? "push" : "closed"}
        style={{ height: `auto`, width: `${width}px` }}
      >
        <div className="inner inner-wrapper-faq">
            <div className="primary-header faq-primary">
              <h1>{data.header.header_primary}</h1>
            </div>
          <motion.div
            className="section-container"
            initial={{ x: 0, opacity: 0 }}
            animate={{ x: 0, opacity: 1, transition: { duration: 0.5 } }}
          >
            <div className="primary-body faq-body">
              {questions()}
            </div>
          </motion.div>
          <img
            src="https://phanes.feralhosting.com/hkscfreak/Shirley-and-Clifford-Wedding/surfing-cow.png"
            alt="Wagyu is surfing"
            className="surfing-cow"
          />
        </div>
      </motion.div>
    );
  };
  if (data !== undefined) {
    return (
      <>
        {faqRender()}
      </>
    );
  } else {
    return <></>;
  }
};

export default Faq;
