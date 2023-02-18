import React, { FC, useState, memo } from 'react'
import { Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from 'yup';

interface IUser{
    userName: string,
    passWord: string,
}


const Login:FC = () => {
    const [valueOnChange, setValueOnChange] = useState<IUser>()
  return (
    <Formik
    initialValues = {{
        userName: "",
        passWord: ""
    }}
    validationSchema = {Yup.object({
        userName: Yup.string()
            .max(20, "UserName must less than or equal 20 charactes")
            .required("Please fill UserName field"),
        passWord:Yup.string()
            .required("Please fill PassWord field"),
    })}
    validate={(Change:IUser)=>{
        setValueOnChange(Change);  
    }}
    onSubmit={(data:IUser)=>{
        console.log(data);
    }}
    >
    {({handleSubmit,handleChange})=>(
        <Form onSubmit={handleSubmit} onChange={handleChange}>
            <div className="text-center font-semibold text-2xl">SING IN</div>
            <div className="text-center">Already have an account? Sign in for a more personalized experience</div>
            <div className="input-container">
                <label className={valueOnChange?.userName && "label"}>Username</label>
                <Field id="userName" name="userName" type="text" className=" w-full border-2 pt-4 pl-2 pb-1 inputAcc"/>
                <ErrorMessage name='userName' render={msg => <div className="errMessage">{msg}</div>}/>
            </div>
            <div className="input-container">
                <label className={valueOnChange?.passWord && "label"}>Password</label>
                <Field id='passWord' type="password" name="passWord" className="w-full border-2 pt-4 pl-2 pb-1 inputAcc"/>
                <ErrorMessage name='passWord'render={msg => <div className="errMessage">{msg}</div>}/>
            </div>
            <div className='px-4'>
                <button className="bg-black text-white w-full mx-auto my-4 py-2 rounded-2xl">Continue</button>
            </div>
           
        </Form>
    )}

    </Formik>
  )
}

export default memo(Login)