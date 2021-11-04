import React from "react";
import "./Home.css";
import Sidebar from "../Sidebar/Sidebar";
import useAllFirebaseData from "./useAllFirebaseData";
import { motion } from "framer-motion";
import Gallery from "../Gallery/Gallery";
import Travel from './Travel/Travel'
import Faq from './Faq/Faq'
import Rsvp from './Rsvp/Rsvp'
import Registry from './Registry/Registry'
import { homeVariants, homeCloseVariants } from './Variants/PageVariants'
import WeddingParty from "./WeddingParty/WeddingParty";
const Home = ({ showSidebar, setShowSidebar, height, width }) => {

  const data = useAllFirebaseData();
  const homeRender = () => {
    return (
      <motion.div
        // id="home"
        className="home-wrapper"
        style={{ height: `${height}px`, width: `${width}px`, top: 0}}
        variants={showSidebar ? homeVariants : homeCloseVariants}
        initial={showSidebar ? "show" : "pushed"}
        animate={showSidebar ? "push" : "closed"}
      >
        <Gallery />
        <WeddingParty />
        <Travel
          showSidebar={showSidebar}
          setShowSidebar={setShowSidebar}
          height={height}
          width={width}
        /> 
        <Faq
          showSidebar={showSidebar}
          setShowSidebar={setShowSidebar}
          height={height}
          width={width}
        />
        <Rsvp
          showSidebar={showSidebar}
          setShowSidebar={setShowSidebar}
          height={height}
          width={width}
        />
        <Registry
          showSidebar={showSidebar}
          setShowSidebar={setShowSidebar}
          height={height}
          width={width}
        />
      </motion.div>
    );
  }
  if (data !== undefined) {
    return (
      <>
        <img
          src="https://phanes.feralhosting.com/hkscfreak/Shirley-and-Clifford-Wedding/wood-plant-bg-min.jpg"
          alt=""
          className="bg-img"
          style={{
            height: `${height}px`,
            width: `${width}px`,
          }}
        />
        <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        {homeRender()}
      </>
    );
  } else {
    return <div className="home-wrapper"></div>;
  }
};

export default Home;
