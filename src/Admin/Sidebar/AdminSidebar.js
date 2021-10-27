import React, { useState } from "react";
import "./AdminSidebar.css";
import { motion } from "framer-motion";
import { MdEdit, MdLogout } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import { logout } from "../credentialFunc";
const AdminSidebar = ({
  setSectionClicked,
  sectionClicked,
  isSidebarExpanded,
  setIsSidebarExpanded,
  data,
}) => {
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
    } else {
      return (
        <motion.div
          key="modal"
          variants={settingsCloseVariants}
          initial="show"
          animate="hidden"
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
          ></motion.div>
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
        ></motion.div>
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
      },
    },
  };
  const editSections = () => {
    if (isSidebarExpanded && data !== undefined) {
      const sectionKey = Object.keys(data);
      return sectionKey.map((section) => {
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
                setSectionClicked(section);
                setIsSidebarExpanded(false);
              }}
              style={{ color: sectionClicked === section ? "yellow" : "white" }}
            >
              <h2>{section}</h2>
            </button>
          </motion.div>
        );
      });
    }
  };

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
