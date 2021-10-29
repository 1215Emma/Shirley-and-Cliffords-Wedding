import React, { useState } from "react";
import "./Home.css";
import Rsvp from "./Rsvp/Rsvp";
import Registry from "./Registry/Registry";
import Travel from "./Travel/Travel";
import Faq from "./Faq/Faq";
import Sidebar from "../Sidebar/Sidebar";
import useAllFirebaseData from "./useAllFirebaseData";
import { motion, AnimatePresence } from "framer-motion";
import Canvas from "../Canvas";
import SidebarNav from "../sidebarNav/SidebarNav";
import Gallery from "../Gallery/Gallery";
import { homeVariants, homeCloseVariants } from './Variants/PageVariants'
const Home = ({ showSidebar, setShowSidebar }) => {


  const data = useAllFirebaseData();
  const homeRender = () => {
    return (
      <motion.div
        className="home-wrapper"
        variants={showSidebar ? homeVariants : homeCloseVariants}
        initial={showSidebar ? "show" : "pushed"}
        animate={showSidebar ? "push" : "closed"}
      >
        <Gallery />
      </motion.div>
    );
  }
  if (data !== undefined) {
    return (
      <>
        <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        {homeRender()}
      </>
    );
  } else {
    return <div className="home-wrapper"></div>;
  }
};

export default Home;
