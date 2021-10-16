import React from 'react'
import './Rsvp.css'
import PagesImages from "../images/PagesImagesConfig";
import EditPages from '../EditPages'
import RsvpForm from './RsvpForm';
import { EditRsvp } from './EditRsvp'
import { showEditor } from '../../Edit/EditFunctions'
const Rsvp = ({ page, homeMetadata, pages, rsvpFormMetadata }) => {
  const imageIndex = PagesImages.findIndex(
    (imageArray) => imageArray.id === page
  );
  const pageIndex = pages.indexOf(page)

  if (homeMetadata !== null) {
    return (
      <>
        {/* {EditPages(
        isLoggedIn,
        setIsEditable,
        isEditable,
        page
      )} */}
        <div className="section-container">
          <img
            id={page}
            src={PagesImages[imageIndex].source}
            className={`img-${page}`}
            alt="Shirley and Clifford kissing between streets"
          />
          <div className="section-no-image">
            <div className="primary-header rsvp-primary">
              <h1>{homeMetadata[pageIndex].main_header}</h1>
              <h2>{homeMetadata[pageIndex].sub_header}</h2>
              <h2>{homeMetadata[pageIndex].form_header}</h2>
            </div>

            <RsvpForm
              page={page}
              pageIndex={pageIndex}
              homeMetadata={homeMetadata}
              rsvpFormMetadata={rsvpFormMetadata}
            />
          </div>
        </div>
        {/* {isLoggedIn ? 
        showEditor() :
        <></>
      } */}
      </>
    );
  }
}

export default Rsvp