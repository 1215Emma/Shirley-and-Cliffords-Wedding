import React from 'react'
import './WeddingParty.css'
import { useFirebaseData } from "../useFirebaseData";

const WeddingParty = () => {
  const page = "wedding_party";
  const data = useFirebaseData(page);
  if (data !== undefined) {
    const partyEntries = Object.entries(data)
      return (
        <div className=" wrapper wedding-party-wrapper">
          <h1 className="wedding-party-header">Wedding Party</h1>
      <div className="wedding-party">
            {partyEntries.map(people => {
              return (
              <>
              <h1>{people[0]}</h1>
              <h2>{people[1]}</h2>
              </>
              )
            })}
      </div>
    </div>         
  )
  } else {
    return <></>
}
}

export default WeddingParty
