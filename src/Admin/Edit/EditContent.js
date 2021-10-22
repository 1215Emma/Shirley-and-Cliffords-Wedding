import React from 'react'
import { Formik,Form, Field, ErrorMessage } from "formik";
import { sectionUpdater } from '../Api/Api'
const EditContent = ({ data }) => {
  
  // const setInitialValues = () => {
  //   data.homeMetadata.map(pages => {

  //   })
  // }
  return (
    <Formik
      initialValues={{
        main_header: data.main_header,
        sub_header: data.sub_header,
      }}
      validate={(values) => {
        const errors = {};
        if (!values.main_header || !values.sub_header) {
          errors.main_header = "Required";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          const value = JSON.stringify(values);
          sectionUpdater(value);
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
          <Field
            type="main_header"
            name="main_header"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.main_header}
          />
          <ErrorMessage name="main_header" component="div" />
          <Field
            type="sub_header"
            name="sub_header"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.sub_header}
          />
          <ErrorMessage name="sub_header" component="div" />
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default EditContent
