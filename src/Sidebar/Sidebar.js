import React, { useState } from "react";
import "./Sidebar.css";
import { HiDotsHorizontal } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import { HashLink } from "react-router-hash-link";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const containerVariants = 
     {
        hidden: {
          opacity: 1,
          x: "100%",
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
          x: "100%",
          transition: {
            type: "sween",
            duration: 0.3,
          },
        },
      }

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
                <HashLink
                  smooth to="/#main"
                  activeStyle={{ fontWeight: "bold" }}
                  className="sidebar-buttons"
                  onClick={() => {
                    setShowSidebar(!showSidebar);
                  }}
                >
                  Home
                </HashLink>
                <HashLink
                  smooth
                  to="/#travel"
                  activeStyle={{ fontWeight: "bold" }}
                  className="sidebar-buttons"
                  onClick={() => {
                    setShowSidebar(!showSidebar);
                  }}
                >
                  Travel
                </HashLink>
                <HashLink
                  smooth
                  to="/#rsvp"
                  activeStyle={{ fontWeight: "bold" }}
                  className="sidebar-buttons"
                  onClick={() => {
                    setShowSidebar(!showSidebar);
                  }}
                >
                  RSVP
                </HashLink>
                <HashLink
                  smooth
                  to="/#faq"
                  activeStyle={{ fontWeight: "bold" }}
                  className="sidebar-buttons"
                  onClick={() => {
                    setShowSidebar(!showSidebar);
                  }}
                >
                  Faq
                </HashLink>
                <HashLink
                  smooth
                  to="/#registry"
                  activeStyle={{ fontWeight: "bold" }}
                  className="sidebar-buttons"
                  onClick={() => {
                    setShowSidebar(!showSidebar);
                  }}
                >
                  Registry
                </HashLink>
                <NavLink
                  smooth
                  to="/gallery-player"
                  activeStyle={{ fontWeight: "bold" }}
                  className="sidebar-buttons"
                  onClick={() => {
                    setShowSidebar(!showSidebar);
                  }}
                >
                  Gallery Player
                </NavLink>
                <NavLink
                  smooth
                  activeStyle={{ fontWeight: "bold" }}
                  className="sidebar-buttons"
                  to="/gallery"
                  onClick={() => {
                    setShowSidebar(!showSidebar);
                  }}
                >
                  Gallery
                </NavLink>
                <NavLink
                  smooth
                  className="sidebar-buttons"
                  to="/admin"
                  onClick={() => {
                    setShowSidebar(!showSidebar);
                  }}
                >
                  Admin
                </NavLink>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;
