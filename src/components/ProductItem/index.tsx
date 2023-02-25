import { FC } from 'react';
import { NavLink } from 'react-router-dom';

interface Prop {
    product: any
}

const ProductItem: FC<Prop> = ({product}) =>{
  return (
    <div className=' mr-4 mb-4 border p-4 hover:shadow-lg'>
        <div className="innerProduct">
            <div className="productImg">
                <img src={product.imgSrc} alt="..." className='w-full h-full'/>
            </div>
            <div className="productdesc">
                <p className='flex justify-start tracking-normal text-black uppercase font-semibold text-base leading-6'>{product.name}</p>
                <p className='py-2 text-sm'>{product.desc}</p>
                <b>Retail Price: ${product.retailPrice}</b>
                <br/>
                <b>Our Price: ${product.ourPrice}</b>
                <br/>
                <button
                 className='mt-2 px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 '>
                 <NavLink to="/productdetail">
                    <span>View details</span>
                 </NavLink>
                </button>
            </div>
        </div>
    </div>
  )
}

export default ProductItem;
