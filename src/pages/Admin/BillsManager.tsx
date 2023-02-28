import { FC } from 'react';

const BillsManager: FC = () => {

    return (
        <div className='pl-4'>
            <div className='text-center text-2xl font-semibold m-4 pb-5'>List of accounts</div>
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
                    <tr>
                        <td>1</td>
                        <td>Tuấn Anh</td>
                        <td>7</td>
                        <td>95.95</td>
                        <td><button className=' px-2 bg-red-600 p-1 mr-2 text-white rounded-lg font-medium hover:bg-red-800 text-sm'>View Detail</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default BillsManager;