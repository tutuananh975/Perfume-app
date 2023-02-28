import { FC, useEffect } from 'react';
import Loading from '../../components/Loading';
import useFetchAxios from '../../hooks/UseFetchAxios';

const BillsManager: FC = () => {

    const { responses, doFetch } = useFetchAxios('https://63f7976de40e087c95925720.mockapi.io/order-management')
    const { data, isLoading } = responses;

    useEffect(() => {
        doFetch({ method: "GET" })
    }, [doFetch])

    return (
        <>
            {isLoading && <Loading />}
            <div className='pl-4'>
                <div className='text-center text-red-500 text-2xl font-semibold m-4 pb-5'>Bills Manager</div>
                <table className='w-full'>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Name</th>
                            <th>Total Items</th>
                            <th>Total Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        { data && data.map((bill: any, index: number) => (
                            <tr key={bill.id}>
                                <td>{index + 1}</td>
                                <td>{bill.fullName}</td>
                                <td>{bill.products.reduce((totalItems: number, product:any) => {
                                    return totalItems + product.amount
                                }, 0)}</td>
                                <td>95.95</td>
                                <td><button className=' px-2 bg-red-600 p-1 mr-2 text-white rounded-lg font-medium hover:bg-red-800 text-sm'>View Detail</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default BillsManager;