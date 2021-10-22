import React, { useState, useEffect } from "react";
import "./Home.css";
import Main from "./Main/Main";
import Rsvp from "./Rsvp/Rsvp";
import Registry from "./Registry/Registry";
import Travel from "./Travel/Travel";
import Faq from "./Faq/Faq";
const Home = () => {
  const [data, setData] = useState()
  const pages = ["main", "rsvp", "registry", "travel", "faq"];
  
  
  if (data !== null) {
    return (
      <div className="home-wrapper">
        <div className="home-container main">
          <Main
            page={pages[0]}
          />
        </div>
        <div className="home-container rsvp">
          <Rsvp
            page={pages[1]}
            // homeMetadata={data.homeMetadata}
            // pages={data.pages}
            // rsvpFormMetadata={data.rsvpFormMetadata}
          />
        </div>
        <div className="home-container registry">
          <Registry
            page={pages[2]}
            // homeMetadata={data.homeMetadata}
            // pages={data.pages}
            // registryData={data.registryData}
          />
        </div>
        <div className="home-container travel">
          <Travel
            page={pages[3]}
            // homeMetadata={data.homeMetadata}
            // pages={data.pages}
          />
        </div>
        <div className="home-container faq">
          <Faq
            page={pages[4]}
            // homeMetadata={data.homeMetadata}
            // pages={data.pages}
          />
        </div>
      </div>
    );
  } else {
    return <div className="home-wrapper"></div>;
  }
};

export default Home;
