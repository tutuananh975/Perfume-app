import React, { FC, useState, memo } from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import useFetch from '../../../hooks/useFetch';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../featurnes/useSlice';
import Loading from '../../../components/Loading';
import Modal from '../../../components/Modal';
import { useSelector } from 'react-redux';
import { selectUser } from '../featurnes/useSlice';

interface IUser {
    userName: string,
    passWord: string,
}


const Login: FC = () => {
    const [valueOnChange, setValueOnChange] = useState<IUser>()
    const [loginSuccess, setLoginSucces] = useState(false);
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { data, loadding } = useFetch("https://63782c6a5c477765122d0c95.mockapi.io/users", {
        method: "GET",
    })

    const { isAdmin } = useSelector(selectUser)


    return (
        <div>
            {loadding && <Loading />}
            {loginSuccess && <Modal
                modalText={isAdmin 
                    ? 'Congratulations, you have successfully logged in, auto navigate Admin page after' 
                    : 'Congratulations, you have successfully logged in, auto navigate Home page after'}
                navigatePage = {isAdmin ? '/admin' : '/'}
                modalBtn = "Navigate Now!"
            />}

            <Formik
                initialValues={{
                    userName: "",
                    passWord: ""
                }}
                validationSchema={Yup.object({
                    userName: Yup.string()
                        .max(20, "UserName must less than or equal 20 charactes")
                        .required("Please fill UserName field"),
                    passWord: Yup.string()
                        .required("Please fill PassWord field"),
                })}
                validate={(Change: IUser) => {
                    setValueOnChange(Change);
                }}
                onSubmit={(dataAcc: IUser) => {

                    const idUser = data.find((elm: any) => {
                        return elm.username === dataAcc?.userName && elm.password === dataAcc.passWord

                    })

                    if (data[0].username === dataAcc.userName && data[0].password === dataAcc.passWord) {
                        toast.success("Đăng nhập tài khoản admin thành công")
                        dispatch(
                            login(
                                {
                                    idUser: idUser.id,
                                    userName: idUser.username,
                                    isAdmin: true,
                                    isLogin: true
                                })
                        )
                    }
                    if (idUser) {
                        toast.success("Đăng nhập thành công")
                        dispatch(
                            login(
                                {
                                    idUser: idUser.id,
                                    userName: dataAcc.userName,
                                    isAdmin: false,
                                    isLogin: true
                                    
                                })
                        )
                    } else {
                        toast.error("Tài khoản hoặc mật khẩu không chính xác")
                    }
                    setLoginSucces(true)
                }}
            >
                {({ handleSubmit, handleChange }) => (
                    <Form onSubmit={handleSubmit} onChange={handleChange}>
                        <div className="text-center font-semibold text-2xl mb-4">SING IN</div>
                        <div className="text-center text-sm">Already have an account? Sign in for a more personalized experience</div>
                        <div className="input-container">
                            <label className={valueOnChange?.userName ? "label" : "labels"}>Username</label>
                            <Field id="userName" name="userName" type="text" className=" w-full border-2 pt-4 pl-2 pb-1 inputAcc" />
                            <ErrorMessage name='userName' render={msg => <div className="errMessage">{msg}</div>} />
                        </div>
                        <div className="input-container">
                            <label className={valueOnChange?.passWord ? "label" : "labels"}>Password</label>
                            <Field id='passWord' type="password" name="passWord" className="w-full border-2 pt-4 pl-2 pb-1 inputAcc" />
                            <ErrorMessage name='passWord' render={msg => <div className="errMessage">{msg}</div>} />
                        </div>
                        <div className='px-4'>
                            <button className="bg-black text-white w-full mx-auto my-4 py-2 rounded-2xl">Continue</button>
                        </div>
                    </Form>
                )}

            </Formik>
        </div>
    )
}

export default memo(Login)

