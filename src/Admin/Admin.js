import React, { useState, useEffect } from "react";
import "./Admin.css";
import { authVerification } from "./credentialFunc";
import useAllFirebaseData from "../pages/useAllFirebaseData";
import AdminSidebar from "./Sidebar/AdminSidebar";
import { motion } from "framer-motion";
import EditContent from "./Edit/EditContent";
import Login from "./Login/Login";
import Sidebar from "../Sidebar/Sidebar";

const Admin = () => {
  // const [isDataLoaded, setIsDataLoaded] = useState(true);
  const data = useAllFirebaseData();
  const [user, setUser] = useState({});
  const [sectionClicked, setSectionClicked] = useState("");
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  useEffect(() => {
    authVerification(setUser);
  }, [])

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
      },
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
      },
    },
  };
  return (
    <div className="main-container">
      <motion.div
        className="portal-wrapper"
        initial={{ x: 0, opacity: 0 }}
        animate={{ x: 0, opacity: 1, transition: { duration: 0.5 } }}
      >
        <Sidebar />
        {!user ? (
          <>
            <h1 className="login-header">
              Shirley and Clifford's secret paradise
            </h1>

            <Login />
          </>
        ) : (
          <div className="admin-panel-container">
            <AdminSidebar
              setSectionClicked={setSectionClicked}
              sectionClicked={sectionClicked}
              isSidebarExpanded={isSidebarExpanded}
              setIsSidebarExpanded={setIsSidebarExpanded}
              data={data}
            />
            {sectionClicked !== "" && !isSidebarExpanded && (
              <motion.div
                className="edit-sections-container"
                variants={contentVariants}
                initial="hidden"
                animate="visible"
              >
                {<EditContent data={data} sectionClicked={sectionClicked} />}
              </motion.div>
            )}
            {sectionClicked !== "" && isSidebarExpanded && (
              <motion.div
                className="edit-sections-container"
                variants={contentVariants}
                initial="visible2"
                animate="visible3"
              >
                {<EditContent data={data} sectionClicked={sectionClicked} />}
              </motion.div>
            )}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Admin;
