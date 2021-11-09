import React, { useState } from "react";
import "./EditTravel.css";
import { useFirebaseData } from "../useFirebaseData";
import { AnimatePresence, motion } from "framer-motion";
import AdminSidebar from "../../Admin/Sidebar/AdminSidebar";
import { updateFirebaseData } from "../../pages/useFirebaseData";
import { Formik, Form, Field, ErrorMessage, FastField } from "formik";
import { BsChevronCompactDown } from "react-icons/bs";
import { GrFormCheckmark } from "react-icons/gr";
const EditTravel = ({
  showMenu,
  setShowMenu,
  sectionClicked,
  setSectionClicked,
  height,
  width,
}) => {
  const [isEditing, setIsEditing] = useState([false, ""]);
  const page = "travel";
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
                <GrFormCheckmark className="form-checkmark"/>
              </button>
            </Form>
          )}
        </Formik>
        </motion.div>

      </>
    );
  };
  
  const resorts = () => {
    const resortData = Object.entries(data.body);
    return resortData.map((resort) => {
      return (
        <div key={resort[0]}>
          <div className={`resort-header`}>
            {resort[1].resort_image !== undefined && (
              <img
                src={resort[1].resort_image}
                alt="Sheraton Maui Resort & Spa"
                className="resort"
              />
            )}
            <h1>{resort[1].resort}</h1>
          </div>

          <div className="primary-body travel-body">
            <h2>{resort[1].info_1}</h2>
            <BsChevronCompactDown
              className="down-arrow-editing"
              onClick={() => setIsEditing([!isEditing[0], resort[1].info_1])}
            />
            <AnimatePresence initial={false} exitBeforeEnter>
              {isEditing[0] &&
                isEditing[1] === resort[1].info_1 &&
                editInfo(resort[1], resort[0], isEditing[1])}
            </AnimatePresence>

            <h2>{resort[1].info_2}</h2>
            <BsChevronCompactDown
              className="down-arrow-editing"
              onClick={() => setIsEditing([!isEditing[0], resort[1].info_2])}
            />
            <AnimatePresence initial={false} exitBeforeEnter>
              {isEditing[0] &&
                isEditing[1] === resort[1].info_2 &&
                editInfo(resort[1], resort[0], isEditing[1])}
            </AnimatePresence>

            {resort[1].resort_website !== undefined && (
              <button type="button" className="resort-btn">
                <motion.a
                  whileHover={{ scale: 3 }}
                  whileTap={{ scale: 0.8 }}
                  style={{ x: 100 }}
                  href={resort[1].resort_website}
                  target="_blank"
                  rel="noreferrer"
                  className="resort-link"
                >
                  <h1>{`Visit website`}</h1>
                  </motion.a>
                  <BsChevronCompactDown
                    className="down-arrow-editing"
                    onClick={() =>
                      setIsEditing([!isEditing[0], resort[1].resort_website])
                    }
                  />
                  <AnimatePresence initial={false} exitBeforeEnter>
                    {isEditing[0] &&
                      isEditing[1] === resort[1].resort_website &&
                      editInfo(resort[1], resort[0], isEditing[1])}
                  </AnimatePresence>
                
              </button>
            )}
          </div>
        </div>
      );
    });
  };
  const travelRender = () => {
    return (
      <motion.div
        className="wrapper edit-travel-wrapper"
        style={{ height: "auto", width: `${width}px` }}
      >
        <AdminSidebar
          showMenu={showMenu}
          setShowMenu={setShowMenu}
          sectionClicked={sectionClicked}
          setSectionClicked={setSectionClicked}
        />
        
        <div className="inner inner-wrapper-edit-travel">
          <div className="primary-header travel-primary">
            <h1>{data.header.header_primary}</h1>
          </div>

          <motion.div
            className="section-container travel-container"
            initial={{ x: 0, opacity: 0 }}
            animate={{ x: 0, opacity: 1, transition: { duration: 0.5 } }}
          >
            {resorts()}
          </motion.div>
          <img
            src="https://phanes.feralhosting.com/hkscfreak/Shirley-and-Clifford-Wedding/palm-tree-cow.png"
            alt="wagyu under a palm tree relaxing"
            className="palm-tree-cow"
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
        {travelRender()}
      </>
    );
  } else {
    return <></>;
  }
};

export default EditTravel;
