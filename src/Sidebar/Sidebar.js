import React from "react";
import "./Sidebar.css";
import { motion, AnimatePresence } from "framer-motion";

import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from 'react-icons/gi'


const Sidebar = ({ showSidebar, setShowSidebar }) => {
  
  
  const containerVariants = 
     {
        hidden: {
          opacity: 1,
          x: "100%",
        },
        visible: {
          opacity: 1,
          x: "20%",
          transition: {
            type: "sween",
            duration: 0.5,
          },
        },
        exit: {
          opacity: 0,
          x: "100%",
          transition: {
            type: "sween",
            duration: 0.5,
          },
        },
      }

  const hamburgerVariants = {
    horizontal: {
      x: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      }
    },
    vertical: {
      rotate: "45deg",
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      x: 0,
      transition: {
        duration: 1,
      }
    }
  };

  return (
    <>
      <div className="sidebar-button-container">
        <AnimatePresence initial={false}>
          {showSidebar ? (
            <motion.div
              className="hamburger"
              variants={hamburgerVariants}
              initial="horizontal"
              animate="vertical"
              exit="exit"
            >
              <GiHamburgerMenu
                className="hamburger-icon"
                onClick={() => setShowSidebar(!showSidebar)}
              />
            </motion.div>
          ) : (
            <motion.div className="hamburger" whileHover={{ scale: 1.2 }}>
              <GiHamburgerMenu
                className="hamburger-icon"
                onClick={() => setShowSidebar(!showSidebar)}
              />
            </motion.div>
          )}
        </AnimatePresence>
        {/* <HiDotsHorizontal /> */}
      </div>
      <AnimatePresence initial={false} exitBeforeEnter>
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
                <NavLink
                  to="/"
                  activeStyle={{ fontWeight: "bold" }}
                  className="sidebar-buttons"
                  onClick={() => {
                    setShowSidebar(!showSidebar);
                  }}
                >
                  Home
                </NavLink>
                <NavLink
                  to="/travel"
                  activeStyle={{ fontWeight: "bold" }}
                  className="sidebar-buttons"
                  onClick={() => {
                    setShowSidebar(!showSidebar);
                  }}
                >
                  Travel
                </NavLink>
                <NavLink
                  to="/rsvp"
                  activeStyle={{ fontWeight: "bold" }}
                  className="sidebar-buttons"
                  onClick={() => {
                    setShowSidebar(!showSidebar);
                  }}
                >
                  RSVP
                </NavLink>
                <NavLink
                  to="/faq"
                  activeStyle={{ fontWeight: "bold" }}
                  className="sidebar-buttons"
                  onClick={() => {
                    setShowSidebar(!showSidebar);
                  }}
                >
                  Faq
                </NavLink>
                <NavLink
                  to="/registry"
                  activeStyle={{ fontWeight: "bold" }}
                  className="sidebar-buttons"
                  onClick={() => {
                    setShowSidebar(!showSidebar);
                  }}
                >
                  Registry
                </NavLink>
                {/* <NavLink
                  to="/gallery-player"
                  activeStyle={{ fontWeight: "bold" }}
                  className="sidebar-buttons"
                  onClick={() => {
                    setShowSidebar(!showSidebar);
                  }}
                >
                  Gallery Player
                </NavLink> */}
                <NavLink
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
