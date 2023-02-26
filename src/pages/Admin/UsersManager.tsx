import { FC, useEffect } from 'react'
import Loading from '../../components/Loading';
import useFetchAxios from '../../hooks/UseFetchAxios'
import "./usermannager.css"

interface user{
    id:number;
    fullname: string,
    username: string,
    password: string,
    email: string,
    phone: string,
    address: string,
}

const UsersManager: FC = () => {

    const {responses, doFetch} = useFetchAxios("https://63782c6a5c477765122d0c95.mockapi.io/users")
    
    useEffect(()=>{
        doFetch({method:"GET"})
    },[doFetch])


    return (
        <>
        {responses.isLoading && <Loading/>}       
        {responses.data && (
            <div>
            <div className='text-center text-2xl font-semibold m-4 pb-5'>List of accounts</div>
            <table className='w-full'>
                <thead>
                    <th>ID</th>
                    <th>FullName</th>
                    <th>UserName</th>
                    <th>Block</th>
                </thead>
            {responses.data.map((value:user)=>(
                <tbody>
                    <td>{value.id}</td>
                    <td>{value.fullname}</td>
                    <td>{value.username}</td>
                    <td><button className='bg-red-600 p-1 mr-2 text-white rounded-lg font-medium hover:bg-red-800 text-sm'>BLOCK</button></td>
                </tbody>
            ))}
            </table>
            </div>)}
        </>
    )
}

export default UsersManager;