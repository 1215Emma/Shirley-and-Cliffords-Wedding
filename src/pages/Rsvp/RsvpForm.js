import React from "react";
import "./RsvpForm.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { rsvpFormSubmit } from "../../Api/Api";

const RsvpForm = ({ data, setIsFormSubmitted }) => {
  if (data !== undefined) {

    const inputVal = data.body.form_input_value

  return (
    <div className="rsvp-form-container">
      <Formik
        initialValues={inputVal}
        // validate={(values) => {
        //   const errors = {};
        //   if (!values.first_name || !values.last_name || values.email) {
        //     errors.main_header = "Required";
        //   }
        //   return errors;
        // }}
        onSubmit={(values, { setSubmitting }) => {
          setIsFormSubmitted(true)
          setTimeout(() => {
            console.log(JSON.stringify(values));
            const value = JSON.stringify(values);
            console.log(value, "value")
            rsvpFormSubmit(value);
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
          <Form onSubmit={handleSubmit} className="rsvp-form">
            <div className="form-group">
              <label>{data.body.form_name}</label>
              <div className="form-name-group-inner">
                <div className="form-name-group-individual">
                  <Field
                    type="text"
                    name="first_name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.first_name}
                  />
                  <label>{data.body.form_first_name}</label>
                </div>
                <ErrorMessage name="first_name" component="div" />
                <div className="form-name-group-individual">
                  <Field
                    type="text"
                    name="last_name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.last_name}
                  />
                  <label>{data.body.form_last_name}</label>
                  <ErrorMessage name="last_name" component="div" />
                </div>
              </div>
            </div>
            <div className="form-group">
              <label>{data.body.form_email}</label>
              <Field
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />

              <ErrorMessage name="email" component="div" />
            </div>
            <div className="form-group attending-status-group">
              <div className="form-radio-group" />
              <label>{data.body.form_attending_status}</label>
              <div className="form-radio-button-group">
              <div className="form-attending-status-group-individual">
                <Field
                  type="radio"
                  name="attending_status_yes"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value="Yes"
                />
                <label>{data.body.form_attending_status_yes}</label>
              </div>
              <div className="form-attending-status-group-individual">
                <Field
                  type="radio"
                  name="attending_status_no"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value="No"
                />
                <label>{data.body.form_attending_status_no}</label>
              </div>
              </div>
              <ErrorMessage name="attending_status" component="div" />
            </div>
            <div className="form-group guests">
              <label>{data.body.form_guests}</label>
              <Field
                type="text"
                name="guests"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.guests}
              />

              <ErrorMessage name="guests" component="div" />
            </div>
            {/* <div className="form-group food">
              <label>{data.body.form_food_restrictions}</label>
              <Field
                type="text"
                name="food_restrictions"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.food_restrictions}
              />

              <ErrorMessage name="food_restrictions" component="div" />
            </div>
            <div className="form-group questions">
              <label>{data.body.form_questions}</label>
              <Field
                type="text"
                name="questions"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.questions}
              />

              <ErrorMessage name="questions" component="div" />
            </div> */}
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
      
    </div>
  );
  }
};

export default RsvpForm;
