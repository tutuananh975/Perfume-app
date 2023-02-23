import { FC } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import useFetchTA from "../../hooks/useFetchTA";
import { FiChevronLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

const FormCheckOut: FC = () => {
  const { data } = useFetchTA(
    "https://63782c6a5c477765122d0c95.mockapi.io/users/2"
  );

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
        {( {errors, touched }: any ) => (
            <Form>
            <h3 className=" text-base mt-4">Contact information</h3>
            <div className="relative mt-4">
                <label className="absolute top-1 left-2 text-xs text-gray-400">Email</label>
                <Field name="email" className="w-full px-5 pt-5 pb-1 border h-12 outline-cyan-500 text-xs"/>
                {errors.email && touched.email && <div>{errors.email}</div>}
            </div>
            <div className="relative mt-4">
                <label className="absolute top-1 left-2 text-xs text-gray-400">Country</label>
                <Field name="country"  className="w-full px-5 pt-5 pb-1 border h-12 outline-cyan-500 text-xs"/>
            </div>
            <div className="relative mt-4">
                <label className="absolute top-1 left-2 text-xs text-gray-400">Full Name</label>
                <Field name="fullName" className="w-full px-5 pt-5 pb-1 border h-12 outline-cyan-500 text-xs"/>
            </div>
            <div className="relative mt-4">
                <label className="absolute top-1 left-2 text-xs text-gray-400">Address</label>
                <Field name="address" className="w-full px-5 pt-5 pb-1 border h-12 outline-cyan-500 text-xs"/>
            </div>
            <div className="relative mt-4">
                <label className="absolute top-1 left-2 text-xs text-gray-400">Phone</label>
                <Field name="phone" className="w-full px-5 pt-5 pb-1 border h-12 outline-cyan-500 text-xs"/>
            </div>
            <div className="flex justify-between items-center mt-6">
                <Link to="/cart">
                    <div className="flex items-center cursor-pointer">
                        <FiChevronLeft size={12} className="mr-2 text-teal-500"/>
                        <span className="text-teal-500">Return to Cart</span>
                    </div>
                </Link>
                <button type="submit" className="bg-teal-500 py-5 px-12 rounded-md hover:bg-slate-800 text-white">Continue to shipping</button>
            </div>
        </Form>
        )}
        
    </Formik>
  )
};

export default FormCheckOut;

// {
//     "id": "1",
//     "imgSrc": "https://cdn.shopify.com/s/files/1/0269/7763/2389/products/Calvin-Klein-Obsession-Mens-Eau-de-Toilette-Spray-4-Best-Price-Fragrance-Parfume-FragranceOutlet.com-Details_medium.jpg?v=1580827686",
//     "name": "CALVIN KLEIN",
//     "desc": "Obsession For Men By Calvin Klein Eau De Toilette Spray",
//     "retailPrice": "86.00",
//     "ourPrice": "63.95",
//     "amount": "2"
// },
// {
//     "id": "1",
//     "imgSrc": "https://cdn.shopify.com/s/files/1/0269/7763/2389/products/Calvin-Klein-Obsession-Mens-Eau-de-Toilette-Spray-4-Best-Price-Fragrance-Parfume-FragranceOutlet.com-Details_medium.jpg?v=1580827686",
//     "name": "CALVIN KLEIN",
//     "desc": "Obsession For Men By Calvin Klein Eau De Toilette Spray",
//     "retailPrice": "86.00",
//     "ourPrice": "63.95",
//     "amount": "2"
// },
// {
//     "id": "1",
//     "imgSrc": "https://cdn.shopify.com/s/files/1/0269/7763/2389/products/Calvin-Klein-Obsession-Mens-Eau-de-Toilette-Spray-4-Best-Price-Fragrance-Parfume-FragranceOutlet.com-Details_medium.jpg?v=1580827686",
//     "name": "CALVIN KLEIN",
//     "desc": "Obsession For Men By Calvin Klein Eau De Toilette Spray",
//     "retailPrice": "86.00",
//     "ourPrice": "63.95",
//     "amount": "2"
// },
// {
//     "id": "1",
//     "imgSrc": "https://cdn.shopify.com/s/files/1/0269/7763/2389/products/Calvin-Klein-Obsession-Mens-Eau-de-Toilette-Spray-4-Best-Price-Fragrance-Parfume-FragranceOutlet.com-Details_medium.jpg?v=1580827686",
//     "name": "CALVIN KLEIN",
//     "desc": "Obsession For Men By Calvin Klein Eau De Toilette Spray",
//     "retailPrice": "86.00",
//     "ourPrice": "63.95",
//     "amount": "2"
// },
// {
//     "id": "1",
//     "imgSrc": "https://cdn.shopify.com/s/files/1/0269/7763/2389/products/Calvin-Klein-Obsession-Mens-Eau-de-Toilette-Spray-4-Best-Price-Fragrance-Parfume-FragranceOutlet.com-Details_medium.jpg?v=1580827686",
//     "name": "CALVIN KLEIN",
//     "desc": "Obsession For Men By Calvin Klein Eau De Toilette Spray",
//     "retailPrice": "86.00",
//     "ourPrice": "63.95",
//     "amount": "2"
// }
