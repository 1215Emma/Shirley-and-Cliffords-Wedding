import React, { useState } from "react";
import "./EditPages.css";
import { FiEdit } from "react-icons/fi";
import { BsArrowLeft, BsDashSquareDotted } from "react-icons/bs";
import { motion } from "framer-motion";
// import { openEditor } from '../Edit/EditFunctions'
import { getIndividualSectionData } from "../../Api/Api";
import { updateFirebaseData } from "../../pages/useFirebaseData";
import { AiOutlineRight } from "react-icons/ai";
import { Formik, Form, Field, ErrorMessage, FastField } from "formik";
import generateKey from "../../Utilities/generateKey";

export const EditMain = ({ data }) => {
  if (data !== undefined) {
    const page = "main";
    let sectionValues = Object.values(data.main);
    let bodyValues = Object.values(data.main.body);
    let headerKeys = Object.keys(data.main.header);
    let bodyKeys = Object.keys(data.main.body);
    console.log(sectionValues, "uwu");
    return (
      <div className="edit-content-container">
        <h1>Main</h1>
        {/* <h1><AiOutlineRight /></h1> */}
        <h2>{Object.keys(data.main)[1]}</h2>
        <>
          <Formik
            initialValues={sectionValues[1]}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                const endpoint = Object.keys(data.main)[1];
                updateFirebaseData(page, endpoint, values);
                setSubmitting(false);
              }, 400);
            }}
          >
            {/* {console.log("hello world")} */}
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <Form onSubmit={handleSubmit} className="edit-form">
                {headerKeys.map((res) => {
                  return (
                    // <div className="edit-form-field">
                    <FastField
                      component="textarea"
                      rows="5"
                      key={res}
                      type="text"
                      name={res}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values[res]}
                      className="edit-form-input"
                    />
                    // </div>
                  );
                })}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="edit-form-button"
                >
                  Submit header
                </button>
              </Form>
            )}
          </Formik>
        </>

        <h2>{Object.keys(data.main)[0]}</h2>

        <Formik
          initialValues={sectionValues[0]}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              const endpoint = Object.keys(data.main)[0];
              updateFirebaseData(page, endpoint, values);
              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <Form onSubmit={handleSubmit} className="edit-form">
              {bodyKeys.map((res) => {
                return (
                  <Field
                    component="textarea"
                    rows="5"
                    type="text"
                    name={res}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values[res]}
                    className="edit-form-input"
                  />
                );
              })}
              <button
                type="submit"
                disabled={isSubmitting}
                className="edit-form-button"
              >
                Submit body
              </button>
            </Form>
          )}
        </Formik>
      </div>
    );
  } else {
    return <></>;
  }
};
export const EditRsvp = ({ data }) => {
  if (data !== undefined) {
    let headerValues = Object.values(data.rsvp.header);
    let bodyValues = Object.values(data.rsvp.body);
    return (
      <div className="edit-content-container">
        <h1>Rsvp</h1>
        <h1>
          <AiOutlineRight />
        </h1>
        {/* {headerValues.map((res) => {
          return <h2>{res}</h2>;
        })}
        {bodyValues.map((res) => {
          return <h2>{res}</h2>;
        })} */}
      </div>
    );
  } else {
    return <></>;
  }
};

export const EditTravel = ({ data }) => {
  if (data !== undefined) {
    let headerValues = Object.values(data.travel.header);
    let bodyValues = Object.values(data.travel.body);
    return (
      <div className="edit-content-container">
        <h1>Travel</h1>
        <h1>
          <AiOutlineRight />
        </h1>
        {/* {headerValues.map((res) => {
          return <h2>{res}</h2>;
        })}
        {bodyValues.map((res) => {
          return <h2>{res}</h2>;
        })} */}
      </div>
    );
  } else {
    return <></>;
  }
};

export const EditRegistry = ({ data }) => {
  if (data !== undefined) {
    let headerValues = Object.values(data.registry.header);
    let bodyValues = Object.values(data.registry.body);
    return (
      <div className="edit-content-container">
        <h1>Registry</h1>
        <h1>
          <AiOutlineRight />
        </h1>
        {/* {headerValues.map((res) => {
          return <h2>{res}</h2>;
        })}
        {bodyValues.map((res) => {
          return <h2>{res}</h2>;
        })} */}
      </div>
    );
  } else {
    return <></>;
  }
};

export const EditFaq = ({ data }) => {
  if (data !== undefined) {
    let headerValues = Object.values(data.faq.header);
    let bodyValues = Object.values(data.faq.body);
    return (
      <div className="edit-content-container">
        <h1>Faq</h1>
        <h1>
          <AiOutlineRight />
        </h1>
        {/* {headerValues.map((res) => {
          return <h2>{res}</h2>;
        })}
        {bodyValues.map((res) => {
          return <h2>{res}</h2>;
        })} */}
      </div>
    );
  } else {
    return <></>;
  }
};

// const ShowEditableContent = ({ user, data }) => {
// console.log(data.homeMetadata.main.id, "DATATATA")

// const [showEditOptions, setShowEditOptions] = useState(false);

// const editOptionsVariants = {
//   hidden: {
//     opacity: 0,
//     y: "100vh",
//   },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.5,
//     },
//   },
// };

// const editOptions = () => {
//   if (user && showEditOptions) {
//     return (
//       <motion.div
//         variants={editOptionsVariants}
//         initial="hidden"
//         animate="show"
//         className="edit-subsection-popup-container"
//       >
//         {/* <EditContent  /> */}
//       </motion.div>
//     );
//   }
// };
// const { main_header_container, body_container } = data.homeMetadata.main;
// const sectionMapping = () => {
//   const { page } = data.pages
//   Object.keys(data.homeMetadata).map(results => {
//     console.log(data.homeMetadata.results)
//   })

// };
// const { main_header_container, body_container } = sectionData
// console.log(main_header_container)

// return (
//   <div className="edit-container">
//     <div className="individual-sections">
//      {/* {sectionMapping()} */}
//       {Object.keys(data.homeMetadata).map(res => {
//         return (
//           <h1>{res}</h1>
//         )
//       })
//       }
//     </div>
{
  /* {data.homeMetadata.map(containers => {
          console.log(values, "values")
          console.log(containers, "containers")
          return (
            <div key={containers.id} className="individual-sections">
              <h1>{containers.id}</h1>
              {values.map(results => {
                return (
                  <h2 key={results.main_header}>{results}</h2>
                )
              })}
            </div>
          )
        })} */
}
//   </div>
// );

// const returnButton = () => {
//   if (user && !showEditOptions) {
//     return (
//       <>
//         <button
//           className="close-edit-button"
//           onClick={() => {
//             setIsEditable(false);
//           }}
//         >
//           <BsArrowLeft className="close-edit-icon" />
//         </button>
//         <h1 className="nav-header">{section}</h1>
//       </>
//     );
//   } else {
//     return (
//       <>
//         <button
//           className="cancel-edit-button"
//           onClick={() => {
//             setShowEditOptions(false);
//           }}
//         >
//           <h2>Cancel</h2>
//         </button>

//         <button
//           className="save-edit-button"
//           onClick={() => {
//             setShowEditOptions(false);
//           }}
//         >
//           <h2>Save</h2>
//         </button>
//       </>
//     );
//   }
// };
// return (
//   <>
//     {isEditable ? (
//       <div className="edit-container">
//         <div className="edit-navigation">{returnButton()}</div>

//         <div className="edit edit-main-header">

//         </div>
//         {section === "rsvp" ? (
//           <div className="edit edit-form-container">

//           </div>
//         ) : (
//           <></>
//         )}
//         {editOptions()}
//       </div>
//     ) : (
//       <div className="edit-button-container">
//         <button
//           className="edit-button"
//           type="submit"
//           onClick={() => {

//           }}
//         >
//           <FiEdit />
//         </button>
//       </div>
//     )}
//   </>
// );
// };

// export default ShowEditableContent;
