import React, { FC, useState, memo } from 'react'
import { Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from 'yup';
import useFetch from '../../../hooks/useFetch';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../featurnes/useSlice';

interface IUser{
    userName: string,
    passWord: string,
}


const Login:FC = () => {
    const [valueOnChange, setValueOnChange] = useState<IUser>()
    const [idUser, setIdUser] = useState()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {data} = useFetch("https://6367c751edc85dbc84db8620.mockapi.io/ManagerAccount",{
        method: "GET",
      })
      
      
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
    onSubmit={(dataAcc:IUser)=>{

        const idUser = data.find((elm:any)=>{
            if(elm.UserName===dataAcc?.userName && elm.PassWord===dataAcc.passWord)
            return elm.id
        })
        

        if(data[0].UserName===dataAcc.userName && data[0].PassWord===dataAcc.passWord){
            toast.success("Đăng nhập tài khoản admin thành công")
                setTimeout(()=>{
                    navigate("/men")
                },2000)
                localStorage.setItem("accessToken", data[0].id)
            return 
        }
        const isExi = data.some((elemen:any)=>{
            if(elemen.UserName===dataAcc?.userName && elemen.PassWord===dataAcc.passWord){ 
            return true
        }

        return false 
    })
        if(isExi){
            toast.success("Đăng nhập thành công")
            dispatch(
                login(
                    {
                     UserName: dataAcc.userName,
                     IdUser : idUser.id,
                     loggetIn : true,
                    })
            )
            setTimeout(()=>{
                navigate("/")
            },2000)
        }else{
            toast.error("Tài khoản hoặc mật khẩu không chính xác")
        }
    }}
    >
    {({handleSubmit,handleChange})=>(
        <Form onSubmit={handleSubmit} onChange={handleChange}>
            <div className="text-center font-semibold text-2xl mb-4">SING IN</div>
            <div className="text-center text-sm">Already have an account? Sign in for a more personalized experience</div>
            <div className="input-container">
                <label className={valueOnChange?.userName? "label" : "labels"}>Username</label>
                <Field id="userName" name="userName" type="text" className=" w-full border-2 pt-4 pl-2 pb-1 inputAcc"/>
                <ErrorMessage name='userName' render={msg => <div className="errMessage">{msg}</div>}/>
            </div>
            <div className="input-container">
                <label className={valueOnChange?.passWord? "label" : "labels"}>Password</label>
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