import React from 'react'
import './Rsvp.css'
import PagesImages from "../images/PagesImagesConfig";
import RsvpForm from './RsvpForm';
import { useFirebaseData } from "../useFirebaseData";
const Rsvp = ({ page }) => {
  // const imageIndex = PagesImages.findIndex(
  //   (imageArray) => imageArray.id === page
  // );
  // const pageIndex = pages.indexOf(page)
    const data = useFirebaseData(page);
    console.log(data);
  if (data !== undefined) {
    return (
      <>
        <div className="section-container">
          <img
            id={page}
            src="https://phanes.feralhosting.com/hkscfreak/Shirley-and-Clifford-Wedding/compressed-images-shirley/Shirley_Clifford_Proposal-198.jpg"
            className={`img-${page}`}
            alt="Shirley and Clifford kissing between streets"
          />
          <div className="section-no-image">
            <div className="primary-header rsvp-primary">
              <h1>{data.header.header_primary}</h1>
              <h2>{data.header.header_secondary}</h2>
              <h2>{data.body.form_header}</h2>
            </div>

            <RsvpForm
              data={data}
            />
          </div>
        </div>
      </>
    );
  } else {
    return <></>;
  } 
}

export default Rsvp