import React from 'react'
import './Login.css'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from 'yup';

const Login = () => {
  const initialValues = {
    email: "",
    password: "",
  };
  const sch = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required()
  });
  console.log(sch)
  const textErrors = (meta) => ({
    error: meta.touched && Boolean(meta.error),
    helperText: meta.touched && meta.error,
  });
  return (
    <div className="login-wrapper">
      <Formik
        initialValues={initialValues}
        validationSchema={sch}
       
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            console.log(JSON.stringify(values));
            const value = JSON.stringify(values);
            // sectionUpdater(value);
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
            <label>Email</label>
            <Field
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {/* <ErrorMessage name="email" component="div" /> */}
            <label>Password</label>
            <Field
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            {/* <ErrorMessage name="password" component="div" /> */}
            <button type="submit" disabled={isSubmitting}>
              Login
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Login
