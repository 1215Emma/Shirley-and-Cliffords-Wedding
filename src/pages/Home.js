import React, { useState, useEffect } from "react";
import "./Home.css";
import Main from "./Main/Main";
import Rsvp from "./Rsvp/Rsvp";
import Registry from "./Registry/Registry";
import Travel from "./Travel/Travel";
import Faq from "./Faq/Faq";
import PagesImages from "./images/PagesImagesConfig";
import { getSectionData } from "../Api/Api";
const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isEditable, setIsEditable] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    getSectionData(setData);
  }, [setData]);
  if (data !== null) {
    console.log(data, "DATA");
    return (
      <div className="home-wrapper">
        <div className="home-container main">
          <Main
            page={data.pages[0]}
            isLoggedIn={isLoggedIn}
            homeMetadata={data.homeMetadata}
            pages={data.pages}
          />
        </div>
        <div className="home-container rsvp">
          <Rsvp
            page={data.pages[1]}
            homeMetadata={data.homeMetadata}
            pages={data.pages}
            rsvpFormMetadata={data.rsvpFormMetadata}
          />
        </div>
        <div className="home-container registry">
          <Registry
            page={data.pages[2]}
            homeMetadata={data.homeMetadata}
            pages={data.pages}
            registryData={data.registryData}
          />
        </div>
        <div className="home-container travel">
          <Travel
            page={data.pages[3]}
            homeMetadata={data.homeMetadata}
            pages={data.pages}
          />
        </div>
        <div className="home-container faq">
          <Faq
            page={data.pages[4]}
            homeMetadata={data.homeMetadata}
            pages={data.pages}
          />
        </div>
      </div>
    );
  } else {
    return <div className="home-wrapper"></div>;
  }
};

export default Home;
