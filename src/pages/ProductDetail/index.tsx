import {FC} from 'react'

const ProductDetail: FC = () => {
  return (
    <div className='grid-rows-1 '>
        <div className="grid grid-cols-2">
        <img src="https://cdn.shopify.com/s/files/1/0269/7763/2389/files/collection_header_Men_Desktop.jpg" alt="..." className='mb-4'/>

        </div>
        <div className="grid grid-cols-2">
        <div className="productdesc">
                <p className='flex justify-start tracking-normal text-black uppercase font-semibold text-base leading-6'>Name</p>
                <p>Desc</p>
                <b>$39.34-$65.34</b>
                <br/>
        <div>
            Quantity
            
        </div>
            </div>
        </div>
    </div>
  )
}

export default ProductDetail