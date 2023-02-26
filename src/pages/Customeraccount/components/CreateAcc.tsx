import { FC, useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from 'yup';
import useFetch from "../../../hooks/useFetch";
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";


interface newUser{
    fullname: string,
    username: string,
    password: string,
    email: string,
    phone: string,
    address: string,
}

interface newValueAcc{
    fullname: string,
    username: string,
    password: string,
    email: string,
    phone: string,
    address: string
    cart:[]
}




const CreateAcc:FC = () => {

    const [newValue, setNewValue] = useState<newUser>()
    const [valueAcc, setvaluesAcc] = useState<newValueAcc>()
    const [method, setMethod] = useState<any> ("GET")
    const navigate = useNavigate()
      
    const {data} = useFetch("https://63782c6a5c477765122d0c95.mockapi.io/users",{
        method: method,
        body: valueAcc
      })

    return (
    <div>
        <ToastContainer/>
    <Formik
        initialValues = {{
            fullname:"",
            username: "",
            password: "",
            email: "",
            phone:  "",
            address: ""
        }}
        validationSchema = {Yup.object({
            fullname: Yup.string()
            .max(20, "Name must less than or equal 20 charactes")
            .required("Please fill Full Name field"),
            username: Yup.string()
                .max(20, "UserName must less than or equal 20 charactes")
                .required("Please fill UserName field"),
            password:Yup.string()
                .required("Please fill PassWord field"),
            email: Yup.string()
                .required("Please fill Email field")
                .email("Please fill in the correct email"),
            phone: Yup.string()
                .max(10, "Phone must less than or equal 10 charactes")
                .required("Please fill Phone field"),
            address: Yup.string()
                .required("Please fill Address field"),
                
        })}
        validate={(valueChange:newUser)=>{
            setNewValue(valueChange)
        }}
        validateOnChange={false}
        
        onSubmit={(values:newUser)=>{
            const dataAcc:newValueAcc = ({...values,cart:[]})        
            setvaluesAcc(dataAcc)
            const isExi = data.some((elemen:any)=>{
                if(elemen.username===dataAcc?.username)
                return true
        })
            if(isExi){
               toast.error("Tài khoản đã tồn tại")
            }else{
                setMethod("POST")
                toast.success("Đăng ký tài khoản thành công")
                navigate('/')
            }
        }}
        
    >   
        <Form>
        <div>
            <div className="text-center font-semibold text-2xl mb-4">NEW TO PERFUMANIA?</div>
            <div className="text-center text-sm">By creating an account you will be able to shop faster, be up to date on an order’s status, and keep track of the orders you have previously made.</div>
            <div className="input-container">
                <label htmlFor="FullName" className={newValue?.fullname? "label" : "labels"}>Full Name</label>
                <Field  id='fullname' name="fullname" type="text" className=" w-full border-2 pt-4 pl-2 pb-1  inputAcc"/>
                <ErrorMessage name="fullname" render={msg => <div className="errMessage">{msg}</div>}/>
            </div>
            <div className="input-container">
                <label htmlFor="username" className={newValue?.username? "label" : "labels"}>Username</label>
                <Field  id='username' name="username" type="text" className=" w-full border-2 pt-4 pl-2 pb-1  inputAcc"/>
                <ErrorMessage name="username" render={msg => <div className="errMessage">{msg}</div>}/>
            </div>
            <div className="input-container">
                <label htmlFor="password" className={newValue?.password? "label" : "labels"}>Password</label>
                <Field id='password'  name="password" type="password" className=" w-full border-2 pt-4 pl-2 pb-1  inputAcc"/>
                <ErrorMessage name="password" render={msg => <div className="errMessage">{msg}</div>}/>
            </div>
            <div className="input-container">
                <label htmlFor="email" className={newValue?.email? "label" : "labels"}>Email</label>
                <Field id='email' type="text" name="email" className=" w-full border-2 pt-4 pl-2 pb-1  inputAcc"/>
                <ErrorMessage name="email" render={msg => <div className="errMessage">{msg}</div>}/>
            </div>
            <div className="input-container">
                <label htmlFor="phone" className={newValue?.phone? "label" : "labels"}>Phone</label>
                <Field id='phone' type="number" name="phone" className=" w-full border-2 pt-4 pl-2 pb-1  inputAcc"/>
                <ErrorMessage name="phone" render={msg => <div className="errMessage">{msg}</div>}/>
            </div>
            <div className="input-container">
                <label htmlFor="address" className={newValue?.address? "label" : "labels"}>Address</label>
                <Field id='address' type="address" name="address" className=" w-full border-2 pt-4 pl-2 pb-1  inputAcc"/>
                <ErrorMessage name="address" render={msg => <div className="errMessage">{msg}</div>}/>
            </div>
            <div className='px-4'>
                <button className="bg-black text-white w-full my-4 py-2 rounded-2xl" type="submit" >Create an Account </button>
            </div>     
            <div className="text-center text-xs">By clicking “Create an Account” you acknowledge that you are a U.S. resident and (1) have read Perfumania’s Privacy Policy, (2) agree to the Terms & Conditions and to automatically receive offers and notifications via email or text.</div>    
            </div>         
        </Form>
    </Formik>
    </div>                   
    )
}

export default CreateAcc;