import React, { useState } from "react";
import "./EditRegistry.css";
import { useFirebaseData } from "../useFirebaseData";
import { motion, AnimatePresence } from "framer-motion";
import { homeVariants, homeCloseVariants } from "../Variants/PageVariants";
import AdminSidebar from "../../Admin/Sidebar/AdminSidebar";
import { updateFirebaseData } from "../../pages/useFirebaseData";
import { Formik, Form, Field, ErrorMessage, FastField } from "formik";
import { BsChevronCompactDown } from "react-icons/bs";
import { GrFormCheckmark } from "react-icons/gr";
const EditRegistry = ({
  showMenu,
  setShowMenu,
  sectionClicked,
  setSectionClicked,
  height,
  width,
}) => {
    const [isEditing, setIsEditing] = useState([false, ""]);
  const page = "registry";
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
    console.log("hello")
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
  console.log(isEditing)
  const registryRender = () => {
    const registryData = Object.entries(data.body);
    return (
      <motion.div
        className="edit-registry-wrapper"
        style={{ height: `auto`, width: `${width}px` }}
      >
        <AdminSidebar
          showMenu={showMenu}
          setShowMenu={setShowMenu}
          sectionClicked={sectionClicked}
          setSectionClicked={setSectionClicked}
        />
        <div className="inner inner-wrapper-edit-registry">
          <div className="primary-header registry-primary">
            <h1>{data.header.header_primary}</h1>
          </div>
          <motion.div
            className="section-container"
            initial={{ x: 0, opacity: 0 }}
            animate={{ x: 0, opacity: 1, transition: { duration: 0.5 } }}
          >
            <div className="edit-all-store-container">
              {registryData.map((store) => {
                console.log(store)
                return (
                  <>
                    <div className="edit-store-container" key={store[1].store}>
                      <button type="submit" className={`${page}-button`}>
                        <img
                          src={store[1].img_url}
                          alt={store[1].store}
                          className={`registry-img ${store[1].store}`}
                        />
                      </button>
                    <BsChevronCompactDown
                      className="down-arrow-editing"
                      onClick={() =>
                        setIsEditing([!isEditing[0], store[1].source])
                      }
                    />
                    <AnimatePresence initial={false} exitBeforeEnter>
                      {isEditing[0] &&
                        isEditing[1] === store[1].source &&
                        editInfo(store[1], store[0], isEditing[1])}
                    </AnimatePresence>
                    </div>
                  </>
                );
              })}
            </div>
          </motion.div>
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
        {registryRender()}
      </>
    );
  } else {
    return <></>;
  }
};

export default EditRegistry;
