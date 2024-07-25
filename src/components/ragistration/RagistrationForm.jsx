import React from "react";
import { useFormik } from "formik";
import { registrationError } from "../../validate/RegistrationValidation";

const RagistrationForm = () => {
  let initialValues = {
    fullName: "",
    email: "",
    password: "",
  };
  const formik = useFormik({
    initialValues,
    validationSchema: registrationError,
    onSubmit: console.log("Subl=mited"),
  });
  let { errors, touched } = formik;
  console.log(formik);
  return (
    <>
      <form onSubmit={formik.handleSubmit} action="">
        <input
          value={formik.values.fullName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          autoComplete="off"
          type="text"
          name="fullName"
          className={`w-full px-5 py-2 outline-none border border-sky-800 rounded-md ${
            errors.fullName ? "mb-1" : "mb-3"
          } text-lg font-sans`}
          placeholder="Enter your name"
        />
        {errors.fullName && touched.fullName && (
          <p className="text-sm text-red-600 mb-3">{errors.fullName}</p>
        )}
        <input
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          autoComplete="off"
          type="email"
          name="email"
          className={`w-full px-5 py-2 outline-none border border-sky-800 rounded-md ${
            errors.email ? "mb-1" : "mb-3"
          } text-lg font-sans`}
          placeholder="Enter your email"
        />
        {errors.email && touched.email && (
          <p className="text-sm text-red-600 mb-3">{errors.email}</p>
        )}
        <input
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          autoComplete="off"
          type="password"
          name="password"
          className={`w-full px-5 py-2 outline-none border border-sky-800 rounded-md ${
            errors.password ? "mb-1" : "mb-3"
          } text-lg font-sans`}
          placeholder="Enter your password"
        />
        {errors.password && touched.password && (
          <p className="text-sm text-red-600 mb-3">{errors.password}</p>
        )}
        <button
          type="submit"
          className="text-white text-lg rounded-md bg-orange-600 px-7 py-3 w-full"
        >
          Sign Up
        </button>
      </form>
    </>
  );
};

export default RagistrationForm;
