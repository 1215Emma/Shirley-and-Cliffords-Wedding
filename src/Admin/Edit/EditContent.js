import React from "react";
import "./EditPages.css";
import { updateFirebaseData } from "../../pages/useFirebaseData";
import { Formik, Form, Field, ErrorMessage, FastField } from "formik";
import generateKey from "../../Utilities/generateKey";
import EditTravel from "../../pages/Travel/EditTravel";
const EditContent = ({ data, sectionClicked }) => {
  if (data !== undefined) {
    const sectionEntries = Object.entries(data[sectionClicked])
    console.log("Section Entries", sectionEntries);
    if (sectionClicked === "travel") {
      return (
        <EditTravel />
      )
    } 
  }
  // if (data !== undefined) {
  //   const pageKeys = Object.keys(data[sectionClicked]);
  //   const pageValues = Object.values(data[sectionClicked]);
  //   console.log(pageKeys[1], "pageVal1")
  //   return (
  //     <div className="edit-content-container" key={sectionClicked}>
  //       <h1>{sectionClicked}</h1>
  //       <h2>{pageKeys[1]}</h2>
  //       <>
  //         <Formik
  //           initialValues={pageValues[1]}
  //           onSubmit={(values, { setSubmitting }) => {
  //             setTimeout(() => {
  //               const endpoint = sectionClicked;
  //               console.log(pageValues[1], "in timeout")
  //               console.log(endpoint, "endpoint")
  //               updateFirebaseData(endpoint, pageKeys[1], values);
  //               setSubmitting(false);
  //             }, 400);
  //           }}
  //         >
  //           {({
  //             values,
  //             errors,
  //             touched,
  //             handleChange,
  //             handleBlur,
  //             handleSubmit,
  //             isSubmitting,
  //           }) => (
  //             <Form onSubmit={handleSubmit} className="edit-form">
  //               {Object.entries(pageValues[1]).map((res) => {
  //                 console.log(res, "RES");
  //                 return (
  //                   <FastField
  //                     component="textarea"
  //                     rows="5"
  //                     key={res}
  //                     type="text"
  //                     name={res[0]}
  //                     onChange={handleChange}
  //                     onBlur={handleBlur}
  //                     value={values[res[0]]}
  //                     className="edit-form-input"
  //                   />
  //                 );
  //               })}
  //               <button
  //                 type="submit"
  //                 disabled={isSubmitting}
  //                 className="edit-form-button"
  //               >
  //                 Submit header
  //               </button>
  //             </Form>
  //           )}
  //         </Formik>
  //       </>

  //       <h2>{pageKeys[0]}</h2>

  //       <Formik
  //         initialValues={pageValues[0]}
  //         onSubmit={(values, { setSubmitting }) => {
  //           setTimeout(() => {
  //             const endpoint = sectionClicked;
  //             updateFirebaseData(endpoint, pageKeys[0], values);
  //             setSubmitting(false);
  //           }, 400);
  //         }}
  //       >
  //         {({
  //           values,
  //           errors,
  //           touched,
  //           handleChange,
  //           handleBlur,
  //           handleSubmit,
  //           isSubmitting,
  //         }) => (
  //           <Form onSubmit={handleSubmit} className="edit-form">
  //             {sectionClicked === "registry" ? (
  //               <>
  //                 <button type="submit">+ add another store</button>
  //                 {Object.entries(pageValues[0]).map((res) => {
  //                   return (
  //                     <>
  //                       <h3 key={res[1]["store"]}>{res[1]["store"]}</h3>
  //                       {Object.entries(res[1]).map((stores) => {
  //                         return (
  //                           <>
  //                             <Field
  //                               component="textarea"
  //                               key={generateKey(10)}
  //                               rows="5"
  //                               type="text"
  //                               name={values[res[0]][stores[0]]}
  //                               onChange={handleChange}
  //                               onBlur={handleBlur}
  //                               value={values[res[0]][stores[0]]}
  //                               className="edit-form-input"
  //                             />
  //                           </>
  //                         );
  //                       })}
  //                     </>
  //                   );
  //                 })}
  //               </>
  //             ) : (
  //                 Object.entries(pageValues[0]).map((res) => {
  //                   console.log(res[0])
  //                   return res[0] !== "form_input_value" && res[0] !== "form_attending_status_no" && res[0] !== "form_attending_status_yes"?
  //                       <Field
  //                         component="textarea"
  //                         key={res}
  //                         rows="5"
  //                         type="text"
  //                         name={res[0]}
  //                         onChange={handleChange}
  //                         onBlur={handleBlur}
  //                         value={values[res[0]]}
  //                         className="edit-form-input"
  //                       />
  //                     : <></>
  //                 }
  //               )
  //             )}
  //             <button
  //               type="submit"
  //               disabled={isSubmitting}
  //               className="edit-form-button"
  //             >
  //               Submit body
  //             </button>
  //           </Form>
  //         )}
  //       </Formik>
  //     </div>
  //   );
  // }
};

export default EditContent;
