import React, { useState, useEffect, useRef } from "react";
import "./EditGallery.css";
import { motion, AnimatePresence } from "framer-motion";
import imageUrls from "../images/imageUrls.json";
// import { BsChevronCompactRight, BsChevronCompactLeft } from "react-icons/bs";
import { useFirebaseData } from "../pages/useFirebaseData";
import AdminSidebar from "../Admin/Sidebar/AdminSidebar";
import { BsChevronCompactDown } from "react-icons/bs";
import { Formik, Form, Field, ErrorMessage, FastField } from "formik";
import { updateFirebaseData } from "../pages/useFirebaseData";
import { GrFormCheckmark } from "react-icons/gr";
const Images = ({ image, onExpand }) => {
  return (
    <div className="gallery-img-container">
      <motion.img
        src={`https://phanes.feralhosting.com/hkscfreak/Shirley-and-Clifford-Wedding/compressed-images-shirley/Shirley_Clifford_Proposal-${image}.jpg`}
        alt=""
        onClick={() => {
          onExpand(image);
        }}
        className={`related-product-image ${image}`}
        layoutId={`product-${image}`}
      ></motion.img>
    </div>
  );
};
const EditGallery = ({
  showMenu,
  setShowMenu,
  sectionClicked,
  setSectionClicked,
  height,
  width,
}) => {
  const [primaryImage, setPrimaryImage] = useState("15");
  const [isEditing, setIsEditing] = useState([false, ""]);
  // const [allImages, setAllImages] = useState(
  //   Object.keys(imageUrls).filter((primary) => primary !== primaryImage)
  // );
  const [allImages, setAllImages] = useState(
    Object.keys(imageUrls).filter((primary) => primary !== primaryImage)
  );
  console.log(isEditing, "isEditing")
  const timeoutRef = useRef(null);
  function setAsPrimary(image) {
    const currentPrimaryImage = primaryImage;
    const newImages = [
      ...allImages.filter((x) => x !== image),
      currentPrimaryImage,
    ];
    setAllImages(newImages);
    setPrimaryImage(image);
  }
  const page = "main";
  const data = useFirebaseData(page);

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      console.log("timeout");
      setAsPrimary(allImages[0]);
    }, 30000);
    return () => {
      resetTimeout();
    };
  }, [allImages]);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };
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
    const keysOfData = Object.keys(data)[1];
 
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
              <Form onSubmit={handleSubmit} className="form-editable-section" >
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
                  style={{}}
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
  const galleryRender = () => {
    return (
      <motion.div
        className="wrapper edit-gallery-wrapper"
        style={{ height: "auto", width: `${width}px` }}
        // initial={{ opacity: 0, y: 0 }}
        // animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
        // exit={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
      >
        <AdminSidebar
          showMenu={showMenu}
          setShowMenu={setShowMenu}
          sectionClicked={sectionClicked}
          setSectionClicked={setSectionClicked}
        />

        <div className="main-primary">
          <h1>{data.header.welcome.header_primary}</h1>
          <BsChevronCompactDown
            className="down-arrow-editing"
            onClick={() =>
              setIsEditing([!isEditing[0], data.header.welcome.header_primary])
            }
          />
          <AnimatePresence initial={false} exitBeforeEnter>
            {isEditing[0] &&
              isEditing[1] === data.header.welcome.header_primary &&
              editInfo(data.header.welcome, "welcome", isEditing[1])}
          </AnimatePresence>

          <div className="header-secondary">
            <div className="main-secondary-container">
              <h2>{data.header.welcome.header_secondary}</h2>
              <BsChevronCompactDown
                className="down-arrow-editing"
                onClick={() =>
                  setIsEditing([
                    !isEditing[0],
                    data.header.welcome.header_secondary,
                  ])
                }
              />
              <AnimatePresence initial={false} exitBeforeEnter>
                {isEditing[0] &&
                  isEditing[1] === data.header.welcome.header_secondary &&
                  editInfo(data.header.welcome, "welcome", isEditing[1])}
              </AnimatePresence>
            </div>

            <h2 className="header-divider"> | </h2>

            <div className="main-secondary-container">
              <h2>{data.header.welcome.header_tertiary}</h2>
              <BsChevronCompactDown
                className="down-arrow-editing"
                onClick={() =>
                  setIsEditing([
                    !isEditing[0],
                    data.header.welcome.header_tertiary,
                  ])
                }
              />
              <AnimatePresence initial={false} exitBeforeEnter>
                {isEditing[0] &&
                  isEditing[1] === data.header.welcome.header_tertiary &&
                  editInfo(data.header.welcome, "welcome", isEditing[1])}
              </AnimatePresence>
            </div>
          </div>
        </div>
        {/* <AnimateSharedLayout type="crossfade"> */}
        <div className="edit-primary-container">
          <div className="hero-image" style={{ height: `${height / 2}px` }}>
            <AnimatePresence initial={false} exitBeforeEnter>
              <motion.img
                key={primaryImage}
                initial={{ opacity: 0, y: 0, transition: { duration: 0.5 } }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
                className="primary-product-image"
                src={`https://phanes.feralhosting.com/hkscfreak/Shirley-and-Clifford-Wedding/compressed-images-shirley/Shirley_Clifford_Proposal-${primaryImage}.jpg`}
                alt=""
              />
            </AnimatePresence>
          </div>

          <div
            className="product-gallery"
            style={{ height: `${height / 2}px` }}
          >
            <AnimatePresence>
              {allImages.map((image) => (
                <Images image={image} key={image} onExpand={setAsPrimary} />
              ))}
            </AnimatePresence>
          </div>
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
        {galleryRender()}
      </>
    );
  } else {
    return <></>;
  }
};

export default EditGallery;
