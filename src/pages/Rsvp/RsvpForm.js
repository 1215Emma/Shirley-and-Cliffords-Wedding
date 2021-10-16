import React from "react";
import "./RsvpForm.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { rsvpFormSubmit } from "../../Api/Api";
// import { rsvpFormMetadata } from "../Metadata";
const RsvpForm = ({ page, pageIndex, homeMetadata, rsvpFormMetadata }) => {
  console.log(rsvpFormMetadata, "RSVPFORMMETADATA")
  return (
    <div className="rsvp-form-container">
      <Formik
        initialValues={rsvpFormMetadata}
        validate={(values) => {
          const errors = {};
          if (!values.first_name || !values.last_name || values.email) {
            errors.main_header = "Required";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            console.log(JSON.stringify(values));
            const value = JSON.stringify(values);
            rsvpFormSubmit(value, page);
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
          <Form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>{homeMetadata[pageIndex].form_name}</label>
              <div className="form-name-group-inner">
                <div className="form-name-group-individual">
                  <Field
                    type="text"
                    name={rsvpFormMetadata.first_name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.first_name}
                  />
                  <label>{homeMetadata[pageIndex].form_first_name}</label>
                </div>
                <ErrorMessage name="first_name" component="div" />
                <div className="form-name-group-individual">
                  <Field
                    type="text"
                    name={rsvpFormMetadata.last_name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.last_name}
                  />
                  <label>{homeMetadata[pageIndex].form_last_name}</label>
                  <ErrorMessage name="last_name" component="div" />
                </div>
              </div>
            </div>
            <div className="form-group">
              <label>{homeMetadata[pageIndex].form_email}</label>
              <Field
                type="email"
                name={rsvpFormMetadata.email}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />

              <ErrorMessage name="email" component="div" />
            </div>
            <div className="form-group attending-status-group">
              <div className="form-radio-group" />
              <label>{homeMetadata[pageIndex].form_attending_status}</label>
              <div className="form-attending-status-group-individual">
                <Field
                  type="radio"
                  name={rsvpFormMetadata.attending_status}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value="Yes"
                />
                <label>
                  {homeMetadata[pageIndex].form_attending_status_yes}
                </label>
              </div>
              <div className="form-attending-status-group-individual">
                <Field
                  type="radio"
                  name={rsvpFormMetadata.attending_status}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value="No"
                />
                <label>
                  {homeMetadata[pageIndex].form_attending_status_no}
                </label>
              </div>
              <ErrorMessage name="attending_status" component="div" />
            </div>
            <div className="form-group">
              <label>{homeMetadata[pageIndex].form_extra1}</label>
              <Field
                type="text"
                name={rsvpFormMetadata.guests}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.guests}
              />

              <ErrorMessage name="guests" component="div" />
            </div>
            <div className="form-group">
              <label>{homeMetadata[pageIndex].form_extra2}</label>
              <Field
                type="text"
                name={rsvpFormMetadata.food_restrictions}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.food_restrictions}
              />

              <ErrorMessage name="food_restrictions" component="div" />
            </div>
            <div className="form-group">
              <label>{homeMetadata[pageIndex].form_extra3}</label>
              <Field
                type="text"
                name={rsvpFormMetadata.questions}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.questions}
              />

              <ErrorMessage name="questions" component="div" />
            </div>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
   </div>
  );
};

export default RsvpForm;
