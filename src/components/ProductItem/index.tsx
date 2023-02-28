import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

interface Prop {
    product: any,
    btnEdit?: boolean,
    isNavigate: boolean
}

const ProductItem: FC<Prop> = ({ product, btnEdit, isNavigate }) => {

    const navigate = useNavigate() 

    return (
        <div className=' mr-4 mb-4 border p-4 hover:shadow-lg cursor-pointer' onClick={isNavigate? (() => navigate('/product/' + product.id)) : undefined}>
            <div className="innerProduct">
                <div className="productImg">
                    <img src={product.imgSrc} alt="..." className='w-full h-full' />
                </div>
                <div className="productdesc">
                    <p className='flex justify-start tracking-normal text-black uppercase font-semibold text-base leading-6'>{product.name}</p>
                    <p className='py-2 text-sm h-16'>{product.desc}</p>
                    <b className='line-through text-gray-400 font-normal'>Retail Price: ${product.retailPrice}</b>
                    <br />
                    <b className=' text-red-600'>Our Price: ${product.ourPrice}</b>
                    <br />
                    {(btnEdit) ?
                        <div className='mt-4'>
                            <button className='bg-green-600 p-1 mr-2 text-white rounded-lg font-medium hover:bg-green-800 px-2'>EDIT</button>
                            <button className='bg-red-600 p-1 text-white rounded-lg font-medium hover:bg-red-800'>DELETE</button>
                        </div>
                        :
                        <button
                            className='mt-2 px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 '>
                            <NavLink to={"/product/" + product.id}>
                                <span>View details</span>
                            </NavLink>
                        </button>
                    }


                </div>
            </div>
        </div>
    )
}

export default ProductItem;
