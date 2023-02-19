import { FC, useState } from "react";
import { Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from 'yup';


interface newUser{
    newName: string,
    newUserName: string,
    newPassWord: string,
    email: string,
}


const CreateAcc:FC = () => {

    const [newValue, setNewValue] = useState<newUser>()
    
    return (
        <div>
    <Formik
        initialValues = {{
            newName:"",
            newUserName: "",
            newPassWord: "",
            email: "",
        }}
        validationSchema = {Yup.object({
            newName: Yup.string()
            .max(20, "Name must less than or equal 20 charactes")
            .required("Please fill Full Name field"),
            newUserName: Yup.string()
                .max(20, "UserName must less than or equal 20 charactes")
                .required("Please fill UserName field"),
            newPassWord:Yup.string()
                .required("Please fill PassWord field"),
            email: Yup.string()
                .required("Please fill Email field")
                .email("Please fill in the correct email"),
        })}
        validate={(valueChange:newUser)=>{
            setNewValue(valueChange)
        }}
        validateOnChange={false}
        
        onSubmit={(values:newUser)=>{
            // alert(JSON.stringify(values))
            console.log(values);
            
        }}
    >   
        <Form>
        <div>
            <div className="text-center font-semibold text-2xl mb-4">NEW TO PERFUMANIA?</div>
            <div className="text-center text-sm">By creating an account you will be able to shop faster, be up to date on an order’s status, and keep track of the orders you have previously made.</div>
            <div className="input-container">
                <label htmlFor="newName" className={newValue?.newName && "label"}>Full Name</label>
                <Field  id='newName' name="newName" type="text" className=" w-full border-2 pt-4 pl-2 pb-1  inputAcc"/>
                <ErrorMessage name="newName" render={msg => <div className="errMessage">{msg}</div>}/>
            </div>
            <div className="input-container">
                <label htmlFor="newUserName" className={newValue?.newUserName && "label"}>Username</label>
                <Field  id='newUserName' name="newUserName" type="text" className=" w-full border-2 pt-4 pl-2 pb-1  inputAcc"/>
                <ErrorMessage name="newUserName" render={msg => <div className="errMessage">{msg}</div>}/>
            </div>
            <div className="input-container">
                <label htmlFor="newPassWord" className={newValue?.newPassWord && "label"}>Password</label>
                <Field id='newPassWord'  name="newPassWord" type="password" className=" w-full border-2 pt-4 pl-2 pb-1  inputAcc"/>
                <ErrorMessage name="newPassWord" render={msg => <div className="errMessage">{msg}</div>}/>
            </div>
            <div className="input-container">
                <label htmlFor="email" className={newValue?.email && "label"}>Email</label>
                <Field id='email' type="text" name="email" className=" w-full border-2 pt-4 pl-2 pb-1  inputAcc"/>
                <ErrorMessage name="email" render={msg => <div className="errMessage">{msg}</div>}/>
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