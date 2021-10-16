import React, { useState } from "react";
import "./Sidebar.css";
import { HiDotsHorizontal } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import { NavHashLink } from "react-router-hash-link";
const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const containerVariants = {
    hidden: {
      opacity: 1,
      x: "100vw",
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "sween",
        duration: 0.3,
      },
    },
    exit: {
      opacity: 1,
      x: "100vw",
      transition: {
        type: "sween",
        duration: 0.3,
      },
    },
  };

  const svgVariants = {
    horizontal: {
      fontSize: 42,
    },
    vertical: {
      fontSize: 32,
    },
  };

  return (
    <>
      <div className="sidebar-button-container">
        <button
          className="hamburger-horizontal"
          onClick={() => {
            setShowSidebar(!showSidebar);
          }}
        >
          <AnimatePresence initial={false}>
            {showSidebar ? (
              <motion.svg
                className="horizontal-svg"
                variants={svgVariants}
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 20 20"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                initial="horizontal"
                animate="vertical"
              >
                <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
              </motion.svg>
            ) : (
              <HiDotsHorizontal className="horizontal-svg" />
            )}
          </AnimatePresence>
          {/* <HiDotsHorizontal /> */}
        </button>
      </div>
      <AnimatePresence initial={false}>
        {showSidebar && (
          <motion.div
            className="sidebar-wrapper"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="sidebar-container">
              <button
                className="hamburger-vertical"
                onClick={() => {
                  setShowSidebar(!showSidebar);
                }}
              ></button>
              <div className="sidebar-links">
                <NavHashLink
                  smooth
                  className="sidebar-buttons"
                  to={"/"}
                  onClick={() => {
                    setShowSidebar(!showSidebar);
                  }}
                >
                  Home
                </NavHashLink>
                <NavHashLink
                  smooth
                  className="sidebar-buttons"
                  to={"/#rsvp"}
                  onClick={() => {
                    setShowSidebar(!showSidebar);
                  }}
                >
                  RSVP
                </NavHashLink>
                <NavHashLink
                  smooth
                  className="sidebar-buttons"
                  to={"/registry"}
                  onClick={() => {
                    setShowSidebar(!showSidebar);
                  }}
                >
                  Registry
                </NavHashLink>
                <NavHashLink
                  smooth
                  activeStyle={{ fontWeight: "bold" }}
                  className="sidebar-buttons"
                  to={"/galleryplayer"}
                  onClick={() => {
                    setShowSidebar(!showSidebar);
                  }}
                >
                  Gallery Player
                </NavHashLink>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;
