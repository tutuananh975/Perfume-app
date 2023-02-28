import axios from 'axios';
import { FC, useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Loading from '../../../components/Loading';
import useFetch from '../../../hooks/useFetch';
import "./usermannager.css"

interface user{
    id:number;
    fullName: string,
    username: string,
    password: string,
    email: string,
    phone: string,
    address: string,
}

const UsersManager: FC = () => {

    const [user, setUser] = useState<any>()
    const [loadding, setLoading] = useState<boolean>(true);

    useEffect(()=>{
        getUsers();
        setLoading(true)
    },[])

    const getUsers = async()=>{
        const result = await axios.get("https://63782c6a5c477765122d0c95.mockapi.io/users")
        setUser(result.data)
        setLoading(false)
        return
    };
    const deleteUser = async(id:any)=>{
        setLoading(true)
        await axios.delete(`https://63782c6a5c477765122d0c95.mockapi.io/users/${id}`)
        getUsers()
        setLoading(false)
    }

    const  handleDelete = (id:any) => {
        deleteUser(id)
    }

    return (
        <>
        {(loadding) && <Loading/>}       
        {user && (
            <div>
            <div className='text-center text-2xl font-semibold m-4 pb-5'>List of accounts</div>
            <table className='w-full'>
                <thead>
                    <th>ID</th>
                    <th>FullName</th>
                    <th>UserName</th>
                    <th>Block</th>
                </thead>
            {user.map((value:user)=>(
                <tbody>
                    <td>{value.id}</td>
                    <td>{value.fullName}</td>
                    <td>{value.username}</td>
                    <td><button onClick={()=>handleDelete(value.id)} className=' px-2 bg-red-600 p-1 mr-2 text-white rounded-lg font-medium hover:bg-red-800 text-sm'>BLOCK</button></td>
                </tbody>
            ))}
            </table>
            </div>)}
        </>
    )
}

export default UsersManager;