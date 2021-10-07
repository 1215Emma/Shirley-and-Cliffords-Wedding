import React, { useState } from "react";
import { HiDotsHorizontal, HiDotsVertical } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [variant, setVariant] = useState("hidden")

  return (
    <>
      <button
        className="hamburger-horizontal"
        onClick={() => {
          setShowSidebar(!showSidebar);
        }}
      >
        <HiDotsHorizontal />
      </button>
      {showSidebar ? (
        <AnimatePresence>
          <motion.div
            className="sidebar-wrapper"
            key="sidebar"
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="sidebar-container">
              <button
                className="hamburger-vertical"
                onClick={() => {
                  setShowSidebar(!showSidebar);
                }}
              >
                <HiDotsVertical />
              </button>
              <ul>
                <li>
                  <button className="sidebar-buttons">RSVP</button>
                </li>
                <li>
                  <button className="sidebar-buttons">Registry</button>
                </li>
                <li>
                  <button className="sidebar-buttons">Our Story</button>
                </li>
                <li>
                  <button className="sidebar-buttons">Photo Gallery</button>
                </li>
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>
      ) : (
        <></>
      )}
    </>
  );
};

export default Sidebar;
