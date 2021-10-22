import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { login } from "../credentialFunc";

const Login = () => {
  const initialValues = {
    email: "",
    password: "",
  };
  const sch = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
  });
  console.log(sch);
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
            login(values);
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
          <Form onSubmit={handleSubmit} className="auth-form">
            <Field
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            <label className="admin-label">Email</label>
            {/* <ErrorMessage name="email" component="div" /> */}
            <Field
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            <label className="admin-label">Password</label>
            {/* <ErrorMessage name="password" component="div" /> */}
            <button
              className="form-login-btn"
              type="submit"
              disabled={isSubmitting}
            >
              Log in
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
