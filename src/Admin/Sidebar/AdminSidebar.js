import React, { useState } from "react";
import "./AdminSidebar.css";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { AiOutlineHome, AiOutlineMenu } from "react-icons/ai";
import { MdModeEditOutline, MdLogout } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import useAllFirebaseData from "../../pages/useAllFirebaseData";
import { logout } from "../credentialFunc";
const AdminSidebar = ({
  showMenu,
  setShowMenu,
  sectionClicked,
  setSectionClicked,
}) => {
  const [showEditableContent, setShowEditableContent] = useState(false);
  const [isSettingsClicked, setIsSettingsClicked] = useState(false);
  const data = useAllFirebaseData();
  const editContainerVariants = {
    hidden: {
      opacity: 0,
      y: "-10%",
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      y: "-10%",
      transition: {
        duration: 0.5,
      },
    },
  };
  const AdminSidebarEditLinks = () => {
    if (showEditableContent && data !== undefined) {
      const sectionKey = Object.keys(data);
      return (
        <motion.div
          className="content-link-container"
          variants={editContainerVariants}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          {sectionKey.map((section) => {
            return section !== "wedding_party" ? (
              <Link
                key={section}
                to={`/admin/edit/${section}`}
                activestyle={{ fontWeight: "bold" }}
                className="sidebar-buttons"
                onClick={() => {
                  setShowMenu(!showMenu);
                  setSectionClicked(section);
                }}
              >
                {section}
              </Link>
            ) : (
              <Link
                key={section}
                to={`/admin/edit/wedding-party`}
                activestyle={{ fontWeight: "bold" }}
                className="sidebar-buttons"
                onClick={() => {
                  setShowMenu(!showMenu);
                  setSectionClicked(section);
                }}
              >
                {`wedding party`}
              </Link>
            );
          })}
        </motion.div>
      );
    }
  };

  const containerVariants = {
    hidden: {
      opacity: 0,
      x: "0",
    },
    visible: {
      opacity: 1,
      x: "0",
      transition: {
        type: "sween",
        delay: 0.3,
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      x: 0,
      transition: {
        type: "sween",
        duration: 0.3,
      },
    },
  };

  const blackBoxVariants = {
    hide: {
      y: "-100%",
      opacity: 1,
    },
    slide: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    slideAway: {
      y: "-100%",
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };
  const settingsVariants = {
    hidden: {
      y: 0,
      opacity: 0,
    },
    show: {
      y: "-20%",
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      y: 0,
      opacity: 0,
      transition: { 
        duration: 0.5,
      },
    },
  };
  const settingsMenu = () => {
    return (
      <motion.div
        key="modal"
        variants={settingsVariants}
        initial="hidden"
        animate="show"
        exit="exit"
        className="settings-container-clicked"
      >
        <button className="sign-out-btn" type="submit" onClick={() => logout()}>
          <MdLogout className="sign-out-btn-icon" />
          <h2>Log Out</h2>
        </button>
      </motion.div>
    );
  };

  return (
    <div className="button-and-wrapper">
      <div className="sidebar-button-container">
        <AnimatePresence initial={false} exitBeforeEnter>
          {showMenu && (
            <>
              {/* <motion.div
                className="hamburger"
                variants={hamburgerVariants}
                initial="horizontal"
                animate="vertical"
                exit="exit"
              >
                <GiHamburgerMenu
                  className="hamburger-icon"
                  onClick={() => setShowSidebar(!showSidebar)}
                />
              </motion.div> */}
              <motion.div
                className="black-box-admin"
                variants={blackBoxVariants}
                initial="hide"
                animate="slide"
                exit="slideAway"
                onClick={() => setShowMenu(!showMenu)}
              />
            </>
          )}
        </AnimatePresence>
        <motion.div
          className="hamburger"
          // variants={hamburgerVariants}
          // initial="horizontal"
          // animate="vertical"
          // exit="exit"
        >
          <AiOutlineMenu
            className="hamburger-icon-admin"
            onClick={() => setShowMenu(!showMenu)}
            style={{ color: showMenu ? "white" : "black" }}
          />
        </motion.div>
      </div>
      <AnimatePresence initial={false} exitBeforeEnter>
        {showMenu && (
          <motion.div
            className="sidebar-wrapper"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="sidebar-container">
              {/* <button
                className="hamburger-vertical"
                onClick={() => {
                  setShowSidebar(!showSidebar);
                }}
              ></button> */}
              <div className="sidebar-links-admin">
                <Link
                  to="/#home"
                  activestyle={{ fontWeight: "bold" }}
                  className="sidebar-buttons"
                  onClick={() => {
                    setShowMenu(!showMenu);
                  }}
                >
                  <AiOutlineHome style={{ fontSize: "32px" }} />
                </Link>
                <div
                  className="edit-container"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <div className="sidebar-buttons">
                  <MdModeEditOutline
                    style={{
                      fontSize: "32px",
                      color: showEditableContent ? "orange" : "white",
                    }}
                    onClick={() => setShowEditableContent(!showEditableContent)}
                  />
                  </div>
                </div>
                <AnimatePresence initial={false} exitBeforeEnter>
                  {showEditableContent && AdminSidebarEditLinks()}
                </AnimatePresence>
                <AnimatePresence initial={false} exitBeforeEnter>
                  {isSettingsClicked && settingsMenu()}
                </AnimatePresence>
                  <div className="sidebar-buttons settings-button">
                  <FiSettings
                    onClick={() => setIsSettingsClicked(!isSettingsClicked)}
                    style={{
                      color: isSettingsClicked ? "orange" : "white",
                      fontSize: "32px",
                    }}
                  />
                  </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AdminSidebar;

// import React, { useState } from "react";
// import "./AdminSidebar.css";
// import { motion } from "framer-motion";
// import { MdEdit, MdLogout } from "react-icons/md";
// import { FiSettings } from "react-icons/fi";
// import { logout } from "../credentialFunc";
// const AdminSidebar = ({
//   setSectionClicked,
//   sectionClicked,
//   isSidebarExpanded,
//   setIsSidebarExpanded,
//   data,
// }) => {
//   const [settingsClicked, setSettingsClicked] = useState(false);
//   const settingsVariants = {
//     hidden: {
//       y: 0,
//       opacity: 0,
//     },
//     show: {
//       y: "-20%",
//       opacity: 1,
//       transition: {
//         duration: 0.5,
//       },
//     },
//   };
//   const settingsCloseVariants = {
//     show: {
//       y: 0,
//       opacity: 1,
//     },
//     hidden: {
//       y: 0,
//       opacity: 0,
//       transition: {
//         duration: 0.5,
//       },
//     },
//   };
//   const settingsMenu = () => {
//     if (settingsClicked) {
//       return (
//         <motion.div
//           key="modal"
//           variants={settingsVariants}
//           initial="hidden"
//           animate="show"
//           className="settings-container-clicked"
//         >
//           <button
//             className="sign-out-btn"
//             type="submit"
//             onClick={() => logout()}
//           >
//             <MdLogout className="sign-out-btn-icon" />
//             <h2>Log Out</h2>
//           </button>
//         </motion.div>
//       );
//     } else {
//       return (
//         <motion.div
//           key="modal"
//           variants={settingsCloseVariants}
//           initial="show"
//           animate="hidden"
//           className="settings-container-clicked"
//         >
//           <button
//             className="sign-out-btn"
//             type="submit"
//             onClick={() => logout()}
//           >
//             <MdLogout className="sign-out-btn-icon" />
//             <h2>Log Out</h2>
//           </button>
//         </motion.div>
//       );
//     }
//   };

//   const sidebarVariants = {
//     show: {
//       x: 0,
//     },
//     grow: {
//       x: "-14vw",
//       transition: {
//         duration: 0.5,
//       },
//     },
//   };
//   const expandSidebarVariants = {
//     show: {
//       x: "-14vw",
//     },
//     grow: {
//       x: 0,
//       transition: {
//         duration: 0.5,
//       },
//     },
//   };

//   const sidebar = () => {
//     if (isSidebarExpanded) {
//       return (
//         <>
//           <motion.div
//             key="sidebar"
//             variants={expandSidebarVariants}
//             initial="show"
//             animate="grow"
//             className="admin-sidebar-container"
//           ></motion.div>
//         </>
//       );
//     } else {
//       return (
//         <motion.div
//           key="sidebar"
//           variants={sidebarVariants}
//           initial="show"
//           animate="grow"
//           exit="exit"
//           className="admin-sidebar-container"
//         ></motion.div>
//       );
//     }
//   };
//   const sectionVariants = {
//     hidden: {
//       x: 0,
//       opacity: 0,
//     },
//     showw: {
//       x: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.5,
//       },
//     },
//   };
//   const editSections = () => {
//     if (isSidebarExpanded && data !== undefined) {
//       const sectionKey = Object.keys(data);
//       return sectionKey.map((section) => {
//         return (
//           <motion.div
//             className="sidebar-section"
//             variants={sectionVariants}
//             initial="hidden"
//             animate="showw"
//           >
//             <button
//               className="sidebar-section-btn"
//               onClick={() => {
//                 setSectionClicked(section);
//                 setIsSidebarExpanded(false);
//               }}
//               style={{ color: sectionClicked === section ? "yellow" : "white" }}
//             >
//               <h2>{section}</h2>
//             </button>
//           </motion.div>
//         );
//       });
//     }
//   };

//   return (
//     <>
//       {sidebar()}
//       <div className="inner-sidebar-container">
//         <button
//           type="button"
//           className="edit-btn"
//           onClick={() => {
//             setIsSidebarExpanded(!isSidebarExpanded);
//           }}
//         >
//           <MdEdit
//             className="edit-btn-icon"
//             style={{ color: isSidebarExpanded ? "green" : "white" }}
//           />
//         </button>
//         {editSections()}
//         <div className="settings-container">
//           {settingsMenu()}
//           <button
//             type="button"
//             onClick={() => setSettingsClicked(!settingsClicked)}
//             className="settings-button"
//           >
//             <FiSettings
//               style={{ color: settingsClicked ? "green" : "white" }}
//             />
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default AdminSidebar;
