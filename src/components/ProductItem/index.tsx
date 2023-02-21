import { FC } from 'react';

interface Prop {
    product: any
}

const ProductItem: FC<Prop> = ({product}) =>{
  return (
    <div className=' mr-4 mb-4 border p-4 hover:shadow-lg border-2'>
        <div className="innerProduct">
            <div className="productImg">
                <img src={product.imgUrl} alt="..." className='w-full h-full'/>
            </div>
            <div className="productdesc">
                <p className='flex justify-start tracking-normal text-black uppercase font-semibold text-base leading-6'>{product.title}</p>
                <p>{product.description}</p>
                <b>{product.price}</b>
                <br/>
                <button className='mt-2 px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200'>View details</button>
            </div>
        </div>
    </div>
  )
}

export default ProductItem;
