import { FC, useState } from 'react'
import { Formik, Form, Field } from "formik";
// import * as Yup from 'yup';

interface addUser {
id?:any,
name: string,
desc: string,
retailPrice: string ,
ourPrice: string,
sex: string
}

interface ModalType {
  toggle: () => void;
  addUser?: any;
  editProduct?:any
  editPutProduct?:any
  btnEdit?:boolean
}


const Addproduct:FC<ModalType> = ({toggle, addUser,editProduct,editPutProduct,btnEdit}) => {

    const [baseImage, setBaseImage] = useState<any>('')
    const uploadImage = async (e:any)=>{
        const file = e.target.files[0];
        const base64 = await convertToBase64(file);
        setBaseImage(base64);
    }
    const [userEdit, setUserEdit] = useState({
      name: editProduct?.name,
      desc: editProduct?.desc,
      retailPrice: editProduct?.retailPrice ,
      ourPrice: editProduct?.ourPrice,
      sex: editProduct?.sex
    });
    const convertToBase64 = (file:any) => {

        return new Promise((resolve, reject) => {
          const fileReader = new FileReader();
          fileReader.readAsDataURL(file)
          fileReader.onload = () => {
            resolve(fileReader.result)
          }
          fileReader.onerror = (error) => {
            reject(error);
          }
        })}

        const onInputChange = (e:any) => {
          setUserEdit({ ...userEdit, [e.target.name]: e.target.value });
        };
        
   const handleaEditProduct =()=>{
      editPutProduct(userEdit,editProduct?.id)
   }
    
  return (
    <>
      {btnEdit?
      <div>
          <div className="AddInput">
            <label htmlFor="name">Name</label>
            <input name="name" type="text" className="AddInputBox" defaultValue={editProduct?.name} onChange={(e) => onInputChange(e)} />
          </div>
          <div className="AddInput">
            <label htmlFor="desc">Desc</label>
            <input  name="desc" type="text" className="AddInputBox" defaultValue={editProduct?.desc}  onChange={(e) => onInputChange(e)}/>
          </div>
          <div className="AddInput">
            <label htmlFor="retailPrice">Retail Price</label>
            <input   name="retailPrice"  type="text" className="AddInputBox" defaultValue={editProduct?.retailPrice} onChange={(e) => onInputChange(e)}/>
          </div>
          <div className="AddInput">
            <label htmlFor="ourPrice">Our Price</label>
            <input  name="ourPrice" type="text" className="AddInputBox" defaultValue={editProduct?.ourPrice}  onChange={(e) => onInputChange(e)}/>
          </div>
          <div className="AddInput">
            <label htmlFor="sex">Sex</label>
            <select id='sex' name="sex"className="AddInputBox" onChange={(e) => onInputChange(e)}>
              <option value="Men">Men</option>
              <option value="Women">Women</option>
            </select>
          </div>
          <div className='flex justify-end mt-6'>
            <button  className='px-1 border-2 border-black' type='button' onClick={toggle}>CANCEL</button>
            <button className='px-5 bg-black text-white' type='submit' onClick={handleaEditProduct} >SAVE</button>
          </div>
      </div>
      :
      <div>
              <div className="AddInput">
            <label htmlFor="imgSrc">Image</label>
            <input  id='imgSrc' name="imgSrc" type="file" onChange={(e) => {uploadImage(e) }} className="AddInputBox"/>
        </div>
        <Formik
        initialValues = {{
            name: '',
            desc: '',
            retailPrice: '' ,
            ourPrice: '',
            sex: ''
        }}
  
        // validationSchema = {Yup.object({
        //     imgSrc: Yup.mixed()
        //     .required("Please fill Full Name field"),
        //     name: Yup.string()
        //         .max(20, "UserName must less than or equal 20 charactes")
        //         .required("Please fill UserName field"),
        //     desc:Yup.string()
        //         .required("Please fill PassWord field"),
        //     retailPrice: Yup.string()
        //         .required("Please fill Email field")
        //         .email("Please fill in the correct email"),
        //     ourPrice: Yup.string()
        //         .max(10, "Phone must less than or equal 10 charactes")
        //         .required("Please fill Phone field"),
        //     sex: Yup.string()
        //         .required("Please fill Address field"),
                
        // })}
        onSubmit={(value : addUser)=>{
            addUser({...value,imgSrc:baseImage})
        }}   
        >
         {({ handleSubmit, handleChange }) => (
         <Form onSubmit={handleSubmit} onChange={handleChange}>
            <div className="AddInput">
                    <label htmlFor="name">Name</label>
                    <Field  id='name' name="name" type="text" className="AddInputBox" />
            </div>
            <div className="AddInput">
                    <label htmlFor="desc">Desc</label>
                    <Field  id='desc' name="desc" type="text" className="AddInputBox"/>
            </div>
            <div className="AddInput">
                    <label htmlFor="retailPrice">Retail Price</label>
                    <Field  id='retailPrice' name="retailPrice"  type="text" className="AddInputBox"/>
            </div>
            <div className="AddInput">
                    <label htmlFor="ourPrice">Our Price</label>
                    <Field  id='ourPrice' name="ourPrice" type="text" className="AddInputBox"/>
            </div>
            <div className="AddInput">
                    <label htmlFor="sex">Sex</label>
                    <Field as='select' id='sex' name="sex"className="AddInputBox">
                        <option value="Men">Men</option>
                        <option value="Women">Women</option>
                    </Field>
            </div>
            <div className='flex justify-end mt-6'>
                <button  className='px-1 border-2 border-black' type='button' onClick={toggle}>CANCEL</button>
                <button className='px-5 bg-black text-white' type='submit' >ADD</button>
            </div>
         </Form>
        )}
        </Formik>
      </div>}

    </>
  )}

export default Addproduct