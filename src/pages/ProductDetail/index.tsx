import axios from 'axios'
import {FC, useState} from 'react'



const ProductDetail: FC = () => {



  return (
    <div className='block md:grid grid-cols-12 px-4'>
        <div className="col-span-6">
        <img src="https://marvel-b1-cdn.bc0a.com/f00000000246772/cdn.shopify.com/s/files/1/0269/7763/2389/products/Azzaro-Chrome-Mens-Eau-de-Toilette-Spray-1-Best-Price-Fragrance-Parfume-FragranceOutlet.com-Details.jpg?v=1579123544&width=1100" alt="..." className='mb-4 w-auto h-auto'/>

        </div>
        <div className="col-span-6 px-4">
        <div className="pt-18">
                <p className='flex justify-start tracking-normal text-black uppercase font-semibold text-base leading-6 text-xl py-8'>AZZARO</p>
                <p className='text-lg pb-8'>Azzaro Chrome For Men By Azzaro Eau De Toilette Spray</p>
                <b className='text-xl'>$39.34-$65.34</b>
                <p className='text-sm pb-8'>Or 4 interest-free payments of $9.23 with Klara </p>
                <br/>
        <div>
            <b className='text-lg pb-20'>Quantity: 1</b>
            
        </div>
        <button className='mt-20 bg-rose-500 py-4 px-12 rounded font-medium text-white'>ADD TO CART</button>
        <button className='mt-20 bg-black py-4 px-12 rounded font-medium text-white ml-4'>BUY IT NOW</button>
            </div>
        </div>
    </div>
  )
}

export default ProductDetail