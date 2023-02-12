import {FC} from 'react'

const Categories:FC = () => {
  return (
    <div className='flex gap-3 mx-4'>
        <div className=''>
            <img src="https://cdn.shopify.com/s/files/1/0269/7763/2389/files/shop_womens_HP_banner.jpg?v=1668002960" alt="" className='rounded-xl' />
            <ul className='flex justify-center gap-2 p-2 mt-2'>
                <li className='p-3 border-2 border-gray-200 rounded-xl shadow-lg shadow-gray-500/50'>Shop all Women</li>
                <li className='p-3 border-2 border-gray-200 rounded-xl shadow-lg shadow-gray-500/50'>Best Sellers</li>
                <li className='p-3 border-2 border-gray-200 rounded-xl shadow-lg shadow-gray-500/50'>New Arrivals</li>
                <li className='p-3 border-2 border-gray-200 rounded-xl shadow-lg shadow-gray-500/50'>Gift Sets</li>
                <li className='p-3 border-2 border-gray-200 rounded-xl shadow-lg shadow-gray-500/50'>Clearance</li>
            </ul>
        </div>
        <div className=''>
            <img src="https://cdn.shopify.com/s/files/1/0269/7763/2389/files/shop_mens_HP_banner.jpg?v=1668002960" alt="" className='rounded-xl' />
            <ul className='flex justify-center gap-2 p-2 mt-2'>
                <li className='p-3 border-2 border-gray-200 rounded-xl shadow-lg shadow-gray-500/50'>Shop all Men</li>
                <li className='p-3 border-2 border-gray-200 rounded-xl shadow-lg shadow-gray-500/50'>Best Sellers</li>
                <li className='p-3 border-2 border-gray-200 rounded-xl shadow-lg shadow-gray-500/50'>New Arrivals</li>
                <li className='p-3 border-2 border-gray-200 rounded-xl shadow-lg shadow-gray-500/50'>Gift Sets</li>
                <li className='p-3 border-2 border-gray-200 rounded-xl shadow-lg shadow-gray-500/50'>Clearance</li>
            </ul>
        </div>
    </div>
  )
}

export default Categories