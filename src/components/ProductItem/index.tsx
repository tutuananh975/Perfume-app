import { FC } from 'react';

interface Prop {
    product: any
}

const ProductItem: FC<Prop> = ({product}) =>{
  return (
    <div className='productItem'>
        <div className="innerProduct">
            <div className="productImg">
                <img src={product.imgUrl} alt="..." className='productImage'/>
            </div>
            <div className="productdesc">
                <p className='title'>{product.title}</p>
                <p>{product.description}</p>
                <b>{product.price}</b>
            </div>
        </div>
    </div>
  )
}

export default ProductItem