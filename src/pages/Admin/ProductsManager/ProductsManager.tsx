import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import Loading from '../../../components/Loading';
import ProductList from '../../../components/ProductList/ProductList';
import useModal from '../../../hooks/useModal';
import ADDModal from './AddModel';
import "./ProductsManager.css"



const ProductsManager:FC = () => {

    const [btnEdit, setBtnEdit] = useState<boolean>(false)
    const [user, setUser] = useState<any>()
    const [loading, setLoading] = useState<boolean>(true);
    const [editProduct,setEditProduct]= useState<any>()

    useEffect(()=>{
        getUsers();
        setLoading(true)
    },[])

    const getEditProduct = async(id:any)=>{
        const result = await axios.get(`https://63782c6a5c477765122d0c95.mockapi.io/perfume-products/${id}`)
        setEditProduct(result.data)
        setLoading(false)
        return
    };
    const putEditProduct = async(value:any,id:any)=>{
        setLoading(true)
        const result = await axios.put(`https://63782c6a5c477765122d0c95.mockapi.io/perfume-products/${id}`,value)
        setEditProduct(result.data)
        setLoading(false)
        return
    };

    const getUsers = async()=>{
        const result = await axios.get("https://63782c6a5c477765122d0c95.mockapi.io/perfume-products")
        setUser(result.data)
        setLoading(false)
        return
    };
    const postUser = async(value:any)=>{
        setLoading(true)
        await axios.post('https://63782c6a5c477765122d0c95.mockapi.io/perfume-products',value)
        setLoading(false)
        return
    }
    const deleteUser = async(id:any)=>{
        setLoading(true)
        await axios.delete(`https://63782c6a5c477765122d0c95.mockapi.io/perfume-products/${id}`)
        getUsers()
        setLoading(false)
    }
    

    const addUser = (value:any)=>{     
        postUser(value)
        setTimeout(()=>{
            getUsers()
        },2000)
        toggle()
        return
        // navigate("/admin/products-manager")
    }
    const editPutProduct = (value:any,id:any)=>{
        putEditProduct(value,id)
        setTimeout(()=>{
            getUsers()
        },3000)
        toggle()
        return
    }
    const  handleDelete = (id:any) => {
        deleteUser(id)
        getUsers()
    }
    const  handleEdit = (id:any) => {
        getEditProduct(id)
        toggle()
    }


    const handleOnclickEdit = () =>{
        setBtnEdit(btnEdit =>(!btnEdit))
    }
    const { isOpen, toggle } = useModal();
    
    
    return (
        <>
        {loading && <Loading/>}       
        {user && (
            <div>
                <div className='flex justify-end mt-4'>
                    <button className='bg-blue-500 p-1 mr-2 text-white rounded-lg font-medium hover:bg-blue-800 px-2'  onClick={toggle}>ADD</button>
                    <button onClick={handleOnclickEdit} className='bg-green-500 p-1 mr-2 text-white rounded-lg font-medium hover:bg-green-800 px-2'>EDIT</button>
                </div>
                <div>
                 <ADDModal btnEdit ={btnEdit}  isOpen={isOpen} toggle={toggle} addUser={addUser} editProduct={editProduct} editPutProduct={editPutProduct} />
                </div>
                <ProductList products={user} btnEdit ={btnEdit} handleDelete={handleDelete} handleEdit ={handleEdit} isNavigate={false}/>
            </div>
        )
        }  
        </>
    )
}

export default ProductsManager;