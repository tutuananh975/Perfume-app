import { FC, useEffect, useState } from 'react';
import Loading from '../../components/Loading';
import ProductList from '../../components/ProductList/ProductList';
import useFetchAxios from '../../hooks/UseFetchAxios';


const ProductsManager:FC = () => {

    const [btnEdit, setBtnEdit] = useState<boolean>(false)

    const {responses, doFetch} = useFetchAxios("https://63782c6a5c477765122d0c95.mockapi.io/perfume-products?fbclid=IwAR2IskciiJR77Nii8p5tuAu0t9B6TrOvHf8_OCo7KsdXgt04ZurDnsXk9ys");
    useEffect(()=>{
        doFetch({method:"GET"})
    },[doFetch])

    const handleOnclickEdit = () =>{
        setBtnEdit(btnEdit =>(!btnEdit))
    }
    
    return (
        <div className='pl-4'>
        {responses.isLoading && <Loading/>}       
        {responses.data && (
            <div>
                <div className='flex justify-end mt-4'>
                    <button className='bg-blue-500 p-1 mr-2 text-white rounded-lg font-medium hover:bg-blue-800 px-2'>ADD</button>
                    <button onClick={handleOnclickEdit} className='bg-green-500 p-1 mr-2 text-white rounded-lg font-medium hover:bg-green-800 px-2'>EDIT</button>
                </div>
                <ProductList products={responses.data} btnEdit ={btnEdit} isNavigate={false}/>
            </div>
        )}  
        </div>
    )
}

export default ProductsManager;