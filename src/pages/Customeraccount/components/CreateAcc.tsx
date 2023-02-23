import { FC, useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from 'yup';
import useFetch from "../../../hooks/useFetch";
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from "react-toastify";


interface newUser{
    FullName: string,
    UserName: string,
    PassWord: string,
    email: string,
    phone: string,
    address: string,
}

interface newValueAcc{
    FullName: string,
    UserName: string,
    PassWord: string,
    email: string,
    phone: string,
    address: string
    cart:[]
}




const CreateAcc:FC = () => {

    const [newValue, setNewValue] = useState<newUser>()
    const [valueAcc, setvaluesAcc] = useState<newValueAcc>()
    const [method, setMethod] = useState<any> ("GET")
      
    const {data} = useFetch("https://6367c751edc85dbc84db8620.mockapi.io/ManagerAccount",{
        method: method,
        body: valueAcc
      })

    console.log(method);

    return (
    <div>
        <ToastContainer/>
    <Formik
        initialValues = {{
            FullName:"",
            UserName: "",
            PassWord: "",
            email: "",
            phone:  "",
            address: ""
        }}
        validationSchema = {Yup.object({
            FullName: Yup.string()
            .max(20, "Name must less than or equal 20 charactes")
            .required("Please fill Full Name field"),
            UserName: Yup.string()
                .max(20, "UserName must less than or equal 20 charactes")
                .required("Please fill UserName field"),
            PassWord:Yup.string()
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
                if(elemen.UserName===dataAcc?.UserName)
                return true
        })
            if(isExi){
               toast.error("Tài khoản đã tồn tại")
            }else{
                setMethod("POST")
                toast.success("Đăng ký tài khoản thành công")

                setTimeout(()=>{
                    setMethod("GET")
                },2000)
            }
        }}
        
    >   
        <Form>
        <div>
            <div className="text-center font-semibold text-2xl mb-4">NEW TO PERFUMANIA?</div>
            <div className="text-center text-sm">By creating an account you will be able to shop faster, be up to date on an order’s status, and keep track of the orders you have previously made.</div>
            <div className="input-container">
                <label htmlFor="FullName" className={newValue?.FullName? "label" : "labels"}>Full Name</label>
                <Field  id='FullName' name="FullName" type="text" className=" w-full border-2 pt-4 pl-2 pb-1  inputAcc"/>
                <ErrorMessage name="FullName" render={msg => <div className="errMessage">{msg}</div>}/>
            </div>
            <div className="input-container">
                <label htmlFor="UserName" className={newValue?.UserName? "label" : "labels"}>Username</label>
                <Field  id='UserName' name="UserName" type="text" className=" w-full border-2 pt-4 pl-2 pb-1  inputAcc"/>
                <ErrorMessage name="UserName" render={msg => <div className="errMessage">{msg}</div>}/>
            </div>
            <div className="input-container">
                <label htmlFor="PassWord" className={newValue?.PassWord? "label" : "labels"}>Password</label>
                <Field id='PassWord'  name="PassWord" type="password" className=" w-full border-2 pt-4 pl-2 pb-1  inputAcc"/>
                <ErrorMessage name="PassWord" render={msg => <div className="errMessage">{msg}</div>}/>
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