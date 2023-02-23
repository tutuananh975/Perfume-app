import { FC, useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import useFetchTA from "../../hooks/useFetchTA";

const FormCheckOut: FC = () => {
  const { data, loading, error } = useFetchTA(
    "https://63782c6a5c477765122d0c95.mockapi.io/users/2"
  );

  console.log(data)
  return (
    data &&
    <Formik
        initialValues={{
            email: data.email,
            country: "VietNam",
            fullName: data.fullName,
            address: data.address,
            phone: data.phone
        }}
        validationSchema = {Yup.object({
            email: Yup.string()
            .required("Please fill Email field")
            .email("Please fill in the correct email"),
            country: Yup.string()
            .required('Please fill Country field'),
            fullName: Yup.string()
            .required("Please fill full name Field"),
            address: Yup.string()
            .required("Please fill Address field"),
            phone: Yup.number()
            .required("Please fill Phone field")
            .integer("Phone must be an integer")
        })}
        onSubmit = {(value) => {
            console.log(value)
        }}
    >
        <Form>
            <h3>Contact information</h3>
            <div className="relative">
                <label>Email</label>
                <Field name="email" className="w-full px-5 pt-5 pb-1 border"/>
            </div>
            <div className="relative">
                <label>Country</label>
                <Field name="country"/>
            </div>
            <div className="relative">
                <label>Full Name</label>
                <Field name="fullName"/>
            </div>
            <div className="relative">
                <label>Address</label>
                <Field name="address"/>
            </div>
            <div className="relative">
                <label>Phone</label>
                <Field name="phone"/>
            </div>
        </Form>
    </Formik>
  )
};

export default FormCheckOut;
