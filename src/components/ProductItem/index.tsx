import { FC } from 'react';

interface Prop {
    product: any
}

const ProductItem: FC<Prop> = ({product}) =>{
  return (
    <div className=' mr-4 mb-4 flex-[0_0_25%] max-w-[23%] border p-4'>
        <div className="innerProduct">
            <div className="productImg">
                <img src={product.imgUrl} alt="..." className='w-full h-full object-fill object-center'/>
            </div>
            <div className="productdesc">
                <p className='flex justify-start tracking-normal text-black uppercase font-semibold text-base leading-6'>{product.title}</p>
                <p>{product.description}</p>
                <b>{product.price}</b>
            </div>
        </div>
    </div>
  )
}

export default ProductItem