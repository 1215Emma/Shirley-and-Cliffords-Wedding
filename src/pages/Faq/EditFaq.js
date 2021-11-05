import React, { useState } from "react";
import "./EditFaq.css";
import { useFirebaseData } from "../useFirebaseData";
import { updateFirebaseData } from "../../pages/useFirebaseData";
import { AnimatePresence, motion } from "framer-motion";
import AdminSidebar from "../../Admin/Sidebar/AdminSidebar";
import { Formik, Form, Field, ErrorMessage, FastField } from "formik";
import { BsChevronCompactDown } from "react-icons/bs";
import { GrFormCheckmark } from "react-icons/gr";

const EditFaq = ({
  showMenu,
  setShowMenu,
  sectionClicked,
  setSectionClicked,
  height,
  width,
}) => {
  const [isEditing, setIsEditing] = useState([false, ""]);
  const page = "faq";
  const data = useFirebaseData(page);
  const editContainerVariants = {
    closed: {
      opacity: 0,
      y: "-10%",
    },
    open: {
      opacity: 1,
      y: "0",
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      y: "-10%",
      transition: {
        duration: 0.5,
      },
    },
  };
  const editInfo = (object, section, value) => {
    function getKeyByValue(object, value) {
      return Object.keys(object).find((key) => object[key] === value);
    }
    const keyOfValue = getKeyByValue(object, value);
    const keysOfData = Object.keys(data)[0];

    return (
      <>
        <motion.div
          key={value}
          variants={editContainerVariants}
          initial="closed"
          animate="open"
          exit="exit"
          className="form-editable-container"
        >
          <Formik
            initialValues={object}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                updateFirebaseData(
                  page,
                  keysOfData,
                  section,
                  values,
                  setIsEditing
                );
                setSubmitting(false);
              }, 400);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <Form onSubmit={handleSubmit} className="form-editable-section">
                <FastField
                  component="textarea"
                  rows="5"
                  type="text"
                  name={keyOfValue}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values[keyOfValue]}
                  className="form-editable-input"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="form-editable-button"
                >
                  <GrFormCheckmark className="form-checkmark" />
                </button>
              </Form>
            )}
          </Formik>
        </motion.div>
      </>
    );
  };
  const questions = () => {
    const questionData = Object.entries(data.body);
    return questionData.map((question) => {
      return (
        <div key={question[0]}>
          <div className="primary-body faq-body">
            <h1 className="edit-faq-question">{question[1].question}</h1>
            <BsChevronCompactDown
              className="down-arrow-editing"
              onClick={() =>
                setIsEditing([!isEditing[0], question[1].question])
              }
            />
            <AnimatePresence initial={false} exitBeforeEnter>
              {isEditing[0] &&
                isEditing[1] === question[1].question &&
                editInfo(question[1], question[0], isEditing[1])}
            </AnimatePresence>

            <h2 className="edit-faq-answer" style={{paddingBottom: 0, paddingTop: 0}}>{question[1].answer}</h2>
            <BsChevronCompactDown
              className="down-arrow-editing"
              onClick={() => setIsEditing([!isEditing[0], question[1].answer])}
            />
            <AnimatePresence initial={false} exitBeforeEnter>
              {isEditing[0] &&
                isEditing[1] === question[1].answer &&
                editInfo(question[1], question[0], isEditing[1])}
            </AnimatePresence>
          </div>
          <div className="question-seperation"/>
        </div>
      );
    });
  }
  const faqRender = () => {
    return (
      <motion.div
        className="wrapper edit-faq-wrapper"
        style={{ height: `auto`, width: `${width}px` }}
      >
        <AdminSidebar
          showMenu={showMenu}
          setShowMenu={setShowMenu}
          sectionClicked={sectionClicked}
          setSectionClicked={setSectionClicked}
        />
        <div className="inner inner-wrapper-edit-faq">
            <div className="primary-header faq-primary">
              <h1>{data.header.header_primary}</h1>
            </div>
          <motion.div
            className="section-container"
            initial={{ x: 0, opacity: 0 }}
            animate={{ x: 0, opacity: 1, transition: { duration: 0.5 } }}
          >
            {/* <div className="primary-body faq-body">
              <h1>{data.body.body_primary}</h1>
              <h2>{data.body.body_secondary}</h2>
              <h1>{data.body.body_tertiary}</h1>
              <h2>{data.body.body_four}</h2>
            </div> */}
            {questions()}
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
        <img
          src="https://phanes.feralhosting.com/hkscfreak/Shirley-and-Clifford-Wedding/wood-plant-bg-min.jpg"
          alt=""
          className="bg-img"
          style={{
            height: `${height}px`,
            width: `${width}px`,
          }}
        />
        {faqRender()}
      </>
    );
  } else {
    return <></>;
  }
};

export default EditFaq;
