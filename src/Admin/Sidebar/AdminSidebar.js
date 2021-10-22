import React, { useState } from "react";
import "./AdminSidebar.css";
import { motion, AnimatePresence } from "framer-motion";
import { MdEdit, MdLogout } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import { AiOutlineRight } from "react-icons/ai";
import { logout } from "../credentialFunc";
const AdminSidebar = ({ setSectionClicked, sectionClicked, isSidebarExpanded, setIsSidebarExpanded }) => {
  const [settingsClicked, setSettingsClicked] = useState(false);

  const settingsVariants = {
    hidden: {
      y: 0,
      opacity: 0,
    },
    show: {
      y: "-20%",
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };
  const settingsCloseVariants = {
    show: {
      y: 0,
      opacity: 1,
    },
    hidden: {
      y: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
  };
  const settingsMenu = () => {
    if (settingsClicked) {
      return (
        <motion.div
          key="modal"
          variants={settingsVariants}
          initial="hidden"
          animate="show"
          className="settings-container-clicked"
        >
          <button
            className="sign-out-btn"
            type="submit"
            onClick={() => logout()}
          >
            <MdLogout className="sign-out-btn-icon" />
            <h2>Log Out</h2>
          </button>
        </motion.div>
      );
    }
    // if (settingsClicked && isSidebarExpanded) {
    //   return (
    //       <motion.div
    //         key="modal"
    //       variants={settingsVariants}
    //       initial="hidden"
    //       animate="show"
    //       className="settings-clicked-container">
    //       style={{width: isSidebarExpanded ? "70%"}}
    //     <button className="sign-out-btn" type="submit" onClick={() => logout()}>
    //         Log Out
    //         <MdLogout className="sign-out-btn-icon"/>
    //     </button>
    //     </motion.div>
    //   );
    // }
    else {
      return (
        <motion.div
          key="modal"
          variants={settingsCloseVariants}
          initial="show"
          animate="hidden"
          className="settings-container-clicked"
          
          //   marginLeft: isSidebarExpanded ? "30vw" : "15vw",
          // }}
        >
          <button
            className="sign-out-btn"
            type="submit"
            onClick={() => logout()}
          >
            <MdLogout className="sign-out-btn-icon" />
            <h2>Log Out</h2>
          </button>
        </motion.div>
      );
    }
  };

  const sidebarVariants = {
    show: {
      x: 0,
    },
    grow: {
      x: "-14vw",
      transition: {
        duration: 0.5,
      },
    },
  };
  const expandSidebarVariants = {
    show: {
      x: "-14vw",
    },
    grow: {
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };
  
  const sidebar = () => {
    if (isSidebarExpanded) {
      return (
        <>
          <motion.div
            key="sidebar"
            variants={expandSidebarVariants}
            initial="show"
            animate="grow"
            className="admin-sidebar-container"
            >
          </motion.div>
        </>
      );
    } else {
      return (
        <motion.div
        key="sidebar"
        variants={sidebarVariants}
        initial="show"
        animate="grow"
        exit="exit"
        className="admin-sidebar-container"
        >
        </motion.div>
      );
    }
  };
  const sectionVariants = {
    hidden: {
      x: 0,
      opacity: 0,

    },
    showw: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      }
    },
  };
  const editSections = () => {
    if (isSidebarExpanded) {

      return (
        <motion.div
          className="sidebar-section"
          variants={sectionVariants}
          initial="hidden"
          animate="showw"
        >
          <button
            className="sidebar-section-btn"
            onClick={() => {
              setSectionClicked("main");
              setIsSidebarExpanded(false);
            }}
            style={{ color: sectionClicked === "main" ? "yellow" : "white" }}
          >
            <h2>Main</h2>
          </button>
          <button
            className="sidebar-section-btn"
            onClick={() => {
              setSectionClicked("rsvp");
              setIsSidebarExpanded(false);
            }}
            style={{ color: sectionClicked === "rsvp" ? "yellow" : "white" }}
          >
            <h2>Rsvp</h2>
          </button>
          <button
            className="sidebar-section-btn"
            onClick={() => {
              setSectionClicked("travel");
              setIsSidebarExpanded(false);
            }}
            style={{ color: sectionClicked === "travel" ? "yellow" : "white" }}
          >
            <h2>Travel</h2>
          </button>
          <button
            className="sidebar-section-btn"
            onClick={() => {
              setSectionClicked("registry");
              setIsSidebarExpanded(false);
            }}
            style={{ color: sectionClicked === "registry" ? "yellow" : "white" }}
          >
            <h2>Registry</h2>
          </button>
          <button
            className="sidebar-section-btn"
            onClick={() => {
              setSectionClicked("faq");
              setIsSidebarExpanded(false);
            }}
            style={{ color: sectionClicked === "faq" ? "yellow" : "white" }}
          >
            <h2>Faq</h2>
          </button>
        </motion.div>
      );
    }
  }
  return (
    <>
      {sidebar()}
      <div className="inner-sidebar-container">
        <button
          type="button"
          className="edit-btn"
          onClick={() => {
            setIsSidebarExpanded(!isSidebarExpanded);
          }}
        >
          <MdEdit
            className="edit-btn-icon"
            style={{ color: isSidebarExpanded ? "green" : "white" }}
          />
        </button>
        {editSections()}
        <div className="settings-container">
          {settingsMenu()}
          <button
            type="button"
            onClick={() => setSettingsClicked(!settingsClicked)}
            className="settings-button"
          >
            <FiSettings
              style={{ color: settingsClicked ? "green" : "white" }}
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default AdminSidebar;
