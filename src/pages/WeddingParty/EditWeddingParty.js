import React from "react";
import "./EditWeddingParty.css";
import { useFirebaseData } from "../useFirebaseData";
import { motion, AnimatePresence } from "framer-motion";
import AdminSidebar from "../../Admin/Sidebar/AdminSidebar";
import { updateFirebaseData } from "../../pages/useFirebaseData";
import { Formik, Form, Field, ErrorMessage, FastField } from "formik";
import { BsChevronCompactDown } from "react-icons/bs";
import { GrFormCheckmark } from "react-icons/gr";
const EditWeddingParty = ({
  showMenu,
  setShowMenu,
  sectionClicked,
  setSectionClicked,
  height,
  width,
}) => {
  const page = "wedding_party";
  const data = useFirebaseData(page);
  if (data !== undefined) {
    const partyEntries = Object.entries(data);
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
        <div className=" wrapper edit-wedding-party-wrapper">
          <AdminSidebar
            showMenu={showMenu}
            setShowMenu={setShowMenu}
            sectionClicked={sectionClicked}
            setSectionClicked={setSectionClicked}
          />
          <div className="inner inner-wrapper-edit-wedding-party">
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
          </div>
        </div>
      </>
    );
  } else {
    return <></>;
  }
};

export default EditWeddingParty;
