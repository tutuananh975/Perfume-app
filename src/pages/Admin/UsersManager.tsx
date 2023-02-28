import { FC, useEffect } from 'react'
import Loading from '../../components/Loading';
import useFetchAxios from '../../hooks/UseFetchAxios'
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
                    <tr>
                        <th>ID</th>
                        <th>FullName</th>
                        <th>UserName</th>
                        <th>Block</th>
                    </tr>
                </thead>
                <tbody>
            {responses.data.map((value:user)=>(
                    <tr key={value.id}>
                        <td>{value.id}</td>
                        <td>{value.fullName}</td>
                        <td>{value.username}</td>
                        <td><button className=' px-2 bg-red-600 p-1 mr-2 text-white rounded-lg font-medium hover:bg-red-800 text-sm'>BLOCK</button></td>
                    </tr>
            ))}
                </tbody>
            </table>
            </div>)}
        </>
    )
}

export default UsersManager;