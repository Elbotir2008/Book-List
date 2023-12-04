"use client";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import "./signIn.scss";
import { json } from "stream/consumers";
import { toast } from "react-toastify";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  username: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required"),
});

const Page = () => {
  const [serverError, setServerError] = useState("");
  const [submited, setSubmited] = useState(false);

  let getFormInf = JSON.parse(localStorage.getItem("formInf")!);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      username: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        if (
          getFormInf.name == values.name &&
          getFormInf.email == values.email &&
          getFormInf.username == values.username
        ) {
          setSubmited(true);
          toast.success("You have successfully");
        } else {
          toast.error("Your information in the registry did not match");
        }
      } catch (error) {
        setServerError("An error occurred while submitting the form");
      }
    },
  });

  return (
    <div className="signUp">
      <div className="signUp-box">
        <h1>Sign In</h1>
        <form onSubmit={formik.handleSubmit}>
          <div className="input1 input">
            <h4>Your Name</h4>
            <input
              type="text"
              id="name"
              placeholder="Enter Your Name"
              {...formik.getFieldProps("name")}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="error">{formik.errors.name}</div>
            ) : null}
          </div>
          <div className="input2 input">
            <h4>Your Email</h4>
            <input
              type="email"
              id="email"
              placeholder="Enter Your Email"
              {...formik.getFieldProps("email")}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="error">{formik.errors.email}</div>
            ) : null}
          </div>
          <div className="input3 input">
            <h4>Your Username</h4>
            <input
              type="text"
              id="username"
              placeholder="Enter Your Username"
              {...formik.getFieldProps("username")}
            />
            {formik.touched.username && formik.errors.username ? (
              <div className="error">{formik.errors.username}</div>
            ) : null}
          </div>
          <div className="input4 input">
            <h4>Your Password</h4>
            <input
              type="password"
              id="password"
              placeholder="Enter Your Password"
              {...formik.getFieldProps("password")}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="error">{formik.errors.password}</div>
            ) : null}
          </div>
          {serverError && <div className="error">{serverError}</div>}
          <Link href="/bookList">
            <button type="submit" className="signUp-submit">
              Submit
            </button>
          </Link>
        </form>
        <p>
          Already signed up? <Link href="/">Go to sign up.</Link>
        </p>
      </div>
    </div>
  );
};

export default Page;
