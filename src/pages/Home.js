import React from "react";
import "./Home.css";
import Sidebar from "../Sidebar/Sidebar";
import useAllFirebaseData from "./useAllFirebaseData";
import { motion } from "framer-motion";
import Gallery from "../Gallery/Gallery";
import { homeVariants, homeCloseVariants } from './Variants/PageVariants'
const Home = ({ showSidebar, setShowSidebar, height, width }) => {

  const data = useAllFirebaseData();
  const homeRender = () => {
    return (
      <motion.div
        id="home-wrapper"
        className="home-wrapper"
        style={{height: `${height}px`, width: `${width}px`}}
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
