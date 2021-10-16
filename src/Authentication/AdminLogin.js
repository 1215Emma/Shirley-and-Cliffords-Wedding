import React, { useState } from "react";
import "./AdminLogin.css";
import Login from "./Login";
import SignUp from "./SignUp";
import { motion, AnimatePresence } from "framer-motion";
import cutelilgiraffe from "../pages/images/cute-lil-giraffe.png";
const credentialsVariants = {
  hidden: {
    opacity: 1,
    y: "20%",
  },
  show: {
    y: "6.5%",
    transition: {
      duration: 0.5,
    },
  },
};
const borderStyleVariants = {
  hide: {
    opacity: 0,
  },
  appear: {
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.2,
    },
  },
};
function AdminLogin() {
  const [isLoginPage, setIsLoginPage] = useState(null);

  return (
    <div className="portal-wrapper">
      <h1 className="login-header">Shirley and Clifford's secret paradise</h1>
      <div className="giraffe-container">
        <img
          src={cutelilgiraffe}
          alt="hula giraffe"
          className="cutelilgiraffe"
        />
      </div>
      {isLoginPage == null ? (
        <div className="credentials-container">
          <div className="tab-container login" style={{ marginBottom: "4%" }}>
            <button
              className="login-btn"
              type="button"
              onClick={() => setIsLoginPage(true)}
            >
              Log in
            </button>
          </div>
          <div
            className="tab-container sign-up"
            style={{ marginBottom: "10%" }}
          >
            <div className="button-border">
              <button
                className="sign-up-btn"
                type="button"
                onClick={() => setIsLoginPage(false)}
              >
                Sign up
              </button>
            </div>
          </div>
        </div>
      ) : (
        <>
          {isLoginPage ? (
            <>
              <h2 className="credential-greeting">
                Log in to make the giraffe happy
                </h2>
                <div className="action-form">
                  
              <motion.div
                className="credentials-container"
                variants={credentialsVariants}
                initial="hidden"
                animate="show"
                >
                <Login />
              </motion.div>
              <motion.div
                className="border-style-container"
                variants={borderStyleVariants}
                initial="hide"
                animate="appear"
                >
                <div className="border-style-container">
                  <div className="border-style left" />
                  <h2 className="or-text">or</h2>
                  <div className="border-style right" />
                </div>
              </motion.div>
                </div>

              <div
                className="tab-container sign-up"
                style={{ marginBottom: "10%" }}
              >
                <div className="below-button-border">
                  <button
                    className="below-sign-up-btn"
                    type="button"
                    onClick={() => setIsLoginPage(false)}
                  >
                    Sign up
                  </button>
                </div>
              </div>
            </>
          ) : (
                <>
         

              <h2 className="credential-greeting">
                The giraffe will be sad if you don't sign up
              </h2>
                
              <motion.div
                className="credentials-container"
                variants={credentialsVariants}
                initial="hidden"
                animate="show"
              >
                <SignUp />
              </motion.div>
              <motion.div
                className="border-style-container"
                variants={borderStyleVariants}
                initial="hide"
                animate="appear"
              >
                <div className="border-style-container">
                  <div className="border-style left" />
                  <h2 className="or-text">or</h2>
                  <div className="border-style right" />
                </div>
              </motion.div>
              <div
                className="tab-container login"
                style={{ marginBottom: "10%" }}
              >
                <div className="below-button-border">
                  <button
                    className="below-login-btn"
                    type="button"
                    onClick={() => setIsLoginPage(true)}
                  >
                    Log in
                  </button>
                </div>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default AdminLogin;
