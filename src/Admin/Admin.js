import React, { useState } from "react";
import "./Admin.css";
import { authVerification } from "./credentialFunc";
import { NotLoggedIn } from "./notLoggedIn";
import {
  EditMain,
  EditRsvp,
  EditTravel,
  EditRegistry,
  EditFaq,
} from "./Edit/ShowEditableContent";
import useAllFirebaseData from "../pages/useAllFirebaseData";
import AdminSidebar from "./Sidebar/AdminSidebar";
import { motion } from 'framer-motion'
const Admin = () => {
  const [isDataLoaded, setIsDataLoaded] = useState(true);
  const data = useAllFirebaseData();
  const [isLoginPage, setIsLoginPage] = useState(null);
  const [user, setUser] = useState({});
  const [sectionClicked, setSectionClicked] = useState("");
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  authVerification(setUser);
  const showSection = () => {
    if (sectionClicked === "main") {
      return (
        <EditMain data={data} />
        )
    }
    if (sectionClicked === "rsvp") {
      return (
        <EditRsvp data={data} />
        )
    }
    if (sectionClicked === "travel") {
      return (
        <EditTravel data={data} />
        )
    }
    if (sectionClicked === "registry") {
      return (
        <EditRegistry data={data} />
        )
    }
    if (sectionClicked === "faq") {
      return (
        <EditFaq data={data} />
        )
    }
  }
  const contentVariants = {
    hidden: {
      x: "0",
      opacity: 1,
    },
    visible: {
      x: "-14vw",
      opacity: 1,
      transition: {
        duration: 0.5,
      }
    },
    visible2: {
      x: "-14vw",
      opacity: 1,
    },
    visible3: {
      x: "0",
      opacity: 1,
      transition: {
        duration: 0.5,
      }
    }
  }
  return (
    <div className="portal-wrapper">
      {user ? (
        <div className="admin-panel-container">
          {/* <EditContent data={data}/> */}
          {/* <div className="logged-in-credentials-container">
            <h4>{user?.email}</h4>
          </div> */}
          <AdminSidebar
            setSectionClicked={setSectionClicked}
            sectionClicked={sectionClicked}
            isSidebarExpanded={isSidebarExpanded}
            setIsSidebarExpanded={setIsSidebarExpanded}
          />
          {sectionClicked !== "" && !isSidebarExpanded && (
            <motion.div
              className="edit-sections-container"
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              // style={{ width: !isSidebarExpanded ? "150vw" : "100%" }}
            >
              {showSection()}
            </motion.div>
          )}
          {sectionClicked !== "" && isSidebarExpanded && (
            <motion.div
              className="edit-sections-container"
              variants={contentVariants}
              initial="visible2"
              animate="visible3"
            >
              {showSection()}
            </motion.div>
          )}
        </div>
      ) : (
        <NotLoggedIn
          isLoginPage={isLoginPage}
          setIsLoginPage={setIsLoginPage}
        />
      )}
    </div>
  );
};

export default Admin;
