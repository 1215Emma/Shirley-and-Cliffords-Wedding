import React from "react";
import "./Home.css";
import Main from "./Main/Main";
import Rsvp from "./Rsvp/Rsvp";
import Registry from "./Registry/Registry";
import Travel from "./Travel/Travel";
import Faq from "./Faq/Faq";
import Sidebar from "../Sidebar/Sidebar";
import useAllFirebaseData from "./useAllFirebaseData";
const Home = () => {
  const data = useAllFirebaseData();
  if (data !== undefined) {
    const pages = Object.keys(data);
    return (
      <>
        <Sidebar />
        <div className="main-container">
          <div className="home-wrapper">
            <div className="home-container main">
              <Main page={pages[1]} />
            </div>
            <div className="home-container travel">
              <Travel page={pages[4]} />
            </div>
            <div className="home-container rsvp">
              <Rsvp page={pages[3]} />
            </div>
            <div className="home-container faq">
              <Faq page={pages[0]} />
            </div>
            <div className="home-container registry">
              <Registry page={pages[2]} />
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return <div className="home-wrapper"></div>;
  }
};

export default Home;
