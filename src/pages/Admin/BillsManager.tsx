import { FC, useEffect, useState } from 'react';
import Loading from '../../components/Loading';
import useFetchAxios from '../../hooks/UseFetchAxios';
import {AiOutlineCheck} from "react-icons/ai";

const BillsManager: FC = () => {

    const { responses, doFetch } = useFetchAxios('https://63f7976de40e087c95925720.mockapi.io/order-management')
    const { data, isLoading } = responses;
    const [bills, setBills] = useState<any>(null);


    useEffect(() => {
        doFetch({ method: "GET" });
    }, [doFetch])

    useEffect(() => {
        setBills(data);
    }, [data])

    const handleSetDone =(bill: any, billId: number, index: number) => {
        fetch('https://63f7976de40e087c95925720.mockapi.io/order-management/' + billId, {
            method:'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                isDone: true
            })
        })
            .then(res => res.json())
            .then(data => console.log(data))
        const newBills = [...bills];
        newBills[index].isDone = true;
        setBills(newBills);
    }

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
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        { bills && bills.map((bill: any, index: number) => (
                            <tr key={bill.id}>
                                <td>{index + 1}</td>
                                <td>{bill.fullName}</td>
                                <td>{bill.totalItems}</td>
                                <td>${bill.totalPrice.toFixed(2)}</td>
                                <td>
                                    <button className='px-2 bg-red-600 p-1 mr-2 text-white rounded-lg font-medium hover:bg-red-400 text-sm'>
                                        View Detail
                                    </button>
                                    <button 
                                        className='px-2 bg-lime-600 p-1 mr-2 text-white rounded-lg font-medium hover:bg-lime-400 text-sm mt-2 sm:mt-0'
                                        onClick={() => handleSetDone(bill, bill.id, index)}
                                    >
                                        <div className='flex items-center'>
                                            <span>DONE</span>
                                            {bill.isDone && <AiOutlineCheck />}
                                        </div>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default BillsManager;