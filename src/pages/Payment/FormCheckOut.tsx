import { FC, useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from 'yup';
import axios from 'axios';
import useFetchTA from '../../hooks/useFetchTA';

const FormCheckOut: FC = () => {
    const {data, loading, error} = useFetchTA('https://63782c6a5c477765122d0c95.mockapi.io/users/2');

    return (
        <div>
            {/* <Formik
                initialValues={{
                    fullName: data.fullName,
                    address: data.address,
                    phone: data.phone,
                    email: data.email
                }}
                validationSchema = {Yup.object({
                    fullName: Yup.string()
                    .
                })}
            >

            </Formik> */}
        </div>
    )
}

export default FormCheckOut;