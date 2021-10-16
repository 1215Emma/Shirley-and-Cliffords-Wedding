import React, { useState } from "react";
import "./SignUp.css";
import app from "../Utilities/init-firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { useAuth } from "../context/AuthContext";

const SignUp = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)


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
    <div className="sign-up-wrapper">
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
            <Field
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              />
              <label>Email</label>
            {/* <ErrorMessage name="email" component="div" /> */}
            <Field
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              />
              <label>Password</label>
            {/* <ErrorMessage name="password" component="div" /> */}
            
            <button className="form-sign-up-btn" type="submit" disabled={isSubmitting}>
              Sign up
            </button>
          
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignUp;
