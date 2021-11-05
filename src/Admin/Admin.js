import React, { useState, useEffect } from "react";
import "./Admin.css";
import { authVerification } from "./credentialFunc";
import useAllFirebaseData from "../pages/useAllFirebaseData";
import AdminSidebar from "./Sidebar/AdminSidebar";
import Login from "./Login/Login";


const Admin = ({ showMenu, setShowMenu, sectionClicked, setSectionClicked }) => {
  const data = useAllFirebaseData();
  const [user, setUser] = useState({});


  useEffect(() => {
    authVerification(setUser);
  }, []);

  if (data !== undefined) {
    return (
      <div className="admin-wrapper">
        {!user ? (
          <>
            <h1 className="login-header">#SoInLoveWithCho</h1>
            <Login />
          </>
        ) : (
            <>
          <div className="admin-panel-container">
            <AdminSidebar
              setSectionClicked={setSectionClicked}
              sectionClicked={sectionClicked}
              showMenu={showMenu}
              setShowMenu={setShowMenu}
              data={data}
            />
          </div>
              <h1 style={{ marginTop: "90%", textAlign: "center" }}> #SoInLoveWithCho </h1>
              </>
        )}
      </div>
    );
  } else {
    return <></>;
  }
};

export default Admin;
