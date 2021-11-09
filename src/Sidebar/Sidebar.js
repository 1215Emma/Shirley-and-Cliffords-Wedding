import React from "react";
import "./Sidebar.css";
import { motion, AnimatePresence } from "framer-motion";
import { HashLink as Link } from "react-router-hash-link";
import { GiHamburgerMenu } from "react-icons/gi";

const Sidebar = ({ showSidebar, setShowSidebar }) => {
  const containerVariants = {
    hidden: {
      opacity: 0,
      x: "0",
    },
    visible: {
      opacity: 1,
      x: "0",
      transition: {
        type: "sween",
        delay: 0.3,
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      x: 0,
      transition: { 
        type: "sween",
        duration: 0.3,
      },
    },
  };

  const blackBoxVariants = {
    hide: {
      y: "-100%",
      opacity: 1,
    },
    slide: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    },
    slideAway: {
      y: "-100%",
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }
  return (
    <div className="button-and-wrapper">
      <div className="sidebar-button-container">
        <AnimatePresence initial={false} exitBeforeEnter>
          {showSidebar && (
            <>
              <motion.div
                className="black-box"
                variants={blackBoxVariants}
                initial="hide"
                animate="slide"
                exit="slideAway"
                onClick={() => setShowSidebar(!showSidebar)}
              />
            </>
          )}
        </AnimatePresence>
        <motion.div
          className="hamburger"
        >
          <GiHamburgerMenu
            className="hamburger-icon"
            onClick={() => setShowSidebar(!showSidebar)}
            style={{ color: showSidebar ? "white" : "black" }}
          />
        </motion.div>
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
              <div className="sidebar-links">
                <Link
                  smooth
                  to="/#home"
                  activeStyle={{ fontWeight: "bold" }}
                  className="sidebar-buttons"
                  onClick={() => {
                    setShowSidebar(!showSidebar);
                  }}
                >
                  Home
                </Link>
                <Link
                  smooth
                  to="/#wedding-party"
                  activeStyle={{ fontWeight: "bold" }}
                  className="sidebar-buttons"
                  onClick={() => {
                    setShowSidebar(!showSidebar);
                  }}
                >
                  Wedding Party
                </Link>
                <Link
                  smooth
                  to="/#travel"
                  activeStyle={{ fontWeight: "bold" }}
                  className="sidebar-buttons"
                  onClick={() => {
                    setShowSidebar(!showSidebar);
                  }}
                >
                  Travel
                </Link>
                <Link
                  smooth
                  to="/#rsvp"
                  activeStyle={{ fontWeight: "bold" }}
                  className="sidebar-buttons"
                  onClick={() => {
                    setShowSidebar(!showSidebar);
                  }}
                >
                  RSVP
                </Link>
                <Link
                  smooth
                  to="/#faq"
                  activeStyle={{ fontWeight: "bold" }}
                  className="sidebar-buttons"
                  onClick={() => {
                    setShowSidebar(!showSidebar);
                  }}
                >
                  FAQ
                </Link>
                <Link
                  smooth
                  to="/#registry"
                  activeStyle={{ fontWeight: "bold" }}
                  className="sidebar-buttons"
                  onClick={() => {
                    setShowSidebar(!showSidebar);
                  }}
                >
                  Registry
                </Link>
                <Link
                  smooth
                  className="sidebar-buttons"
                  to="admin"
                  onClick={() => {
                    setShowSidebar(!showSidebar);
                  }}
                >
                  Admin
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Sidebar;
