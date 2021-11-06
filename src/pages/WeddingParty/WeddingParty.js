import React from "react";
import "./WeddingParty.css";
import { useFirebaseData } from "../useFirebaseData";
import FlowerBorder from "../images/flower-border.png";

const WeddingParty = () => {
  const page = "wedding_party";
  const data = useFirebaseData(page);
  if (data !== undefined) {
    const partyEntries = Object.entries(data);
    return (
      <>
        <div id="wedding-party" className=" wrapper wedding-party-wrapper">
          <h1 className="wedding-party-header">Wedding Party</h1>
          <div className="wedding-party">
            {partyEntries.map((people) => {
              return (
                <>
                  <h1>{people[0]}</h1>
                  <h2>{people[1]}</h2>
                </>
              );
            })}
          </div>
        <img src={FlowerBorder} alt="" className="flower-border-left" />
        </div>
      </>
    );
  } else {
    return <></>;
  }
};

export default WeddingParty;
