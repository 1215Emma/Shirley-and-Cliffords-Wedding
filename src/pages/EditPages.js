import React, { useState } from "react";
import "./EditPages.css";
import { FiEdit } from "react-icons/fi";
import { BsArrowLeft } from "react-icons/bs";
import { motion } from "framer-motion";
import { sectionUpdater } from "./Rsvp/Rsvp";
// import { openEditor } from '../Edit/EditFunctions'
import EditContent from "../Edit/EditContent";
// import { EditRsvp } from './Rsvp/EditRsvp'
const EditPages = (
  isLoggedIn,
  setIsEditable,
  isEditable,
  section
) => {
  const [showEditOptions, setShowEditOptions] = useState(false);

  // openEditor(isLoggedIn, setIsEditable, isEditable)
  
  const editOptionsVariants = {
    hidden: {
      opacity: 0,
      y: "100vh",
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const editOptions = () => {
    if (isLoggedIn && showEditOptions) {
      return (
        <motion.div
          variants={editOptionsVariants}
          initial="hidden"
          animate="show"
          className="edit-subsection-popup-container"
        >
          <EditContent section={section}  />
        </motion.div>
      );
    }
  };

  const returnButton = () => {
    if (!showEditOptions) {
      return (
        <>
          <button
            className="close-edit-button"
            onClick={() => {
              setIsEditable(false);
            }}
          >
            <BsArrowLeft className="close-edit-icon" />
          </button>
          <h1 className="nav-header">{section}</h1>
        </>
      );
    } else {
      return (
        <>
          <button
            className="cancel-edit-button"
            onClick={() => {
              setShowEditOptions(false);
            }}
          >
            <h2>Cancel</h2>
          </button>

          <button
            className="save-edit-button"
            onClick={() => {
              setShowEditOptions(false);
            }}
          >
            <h2>Save</h2>
          </button>
        </>
      );
    }
  };
  return (
    <>
      {isEditable ? (
        <div className="edit-container">
          <div className="edit-navigation">{returnButton()}</div>

          <div className="edit edit-main-header">
            {/* {subsectionContainer(
              "Section Details",
              "main_header",
              "sub_header"
            )} */}
          </div>
          {section === "rsvp" ? (
            <div className="edit edit-form-container">
              {/* {subsectionContainer(
                "Form Details",
                "main_header",
                "sub_header",
                "form_header",
                "form_name",
                "form_email",
                "form_attending_status",
                "form_extra1",
                "form_extra2",
                "form_extra3",
                true
              )} */}
            </div>
          ) : (
            <></>
          )}
          {editOptions()}
        </div>
      ) : (
        <div className="edit-button-container">
          <button
            className="edit-button"
            type="submit"
            onClick={() => {
              // openEditor();
            }}
          >
            <FiEdit />
          </button>
        </div>
      )}
    </>
  );
};

export default EditPages;
