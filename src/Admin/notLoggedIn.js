import React from "react";
import Login from "./Login/Login";

const loginButtonLogic = () => {
  return (
    <>
      <h2 className="credential-greeting">Log in to make the giraffe happy</h2>
      <div className="action-form">
        <div className="credentials-container">
          <Login />
        </div>
      </div>
    </>
  );
};

export const NotLoggedIn = () => {
  return (
    <>
      <h1 className="login-header">Shirley and Clifford's secret paradise</h1>
      {loginButtonLogic()}
    </>
  );
};
