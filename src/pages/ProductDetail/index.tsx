
import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../../components/Loading';
import useFetchAxios from '../../hooks/UseFetchAxios';
import Image from '../../components/Image';
import { selectUser } from '../Customeraccount/featurnes/useSlice';
import { useSelector } from 'react-redux';



const ProductDetail: FC = () => {
  const user = useSelector(selectUser); 
  const [cartProducts, setCartProducts] = useState([]);
  const [quantity, setQuantity] = useState(1)
  const params = useParams();
  const { responses, doFetch } = useFetchAxios('https://63782c6a5c477765122d0c95.mockapi.io/perfume-products/' + params.id);
  const { responses: addCartResponses, doFetch: addCart } = useFetchAxios('https://63782c6a5c477765122d0c95.mockapi.io/users/2');
  const { responses: fetchCartResponses, doFetch: fetchCart } = useFetchAxios('https://63782c6a5c477765122d0c95.mockapi.io/users/2' );
  const { data, isLoading } = responses;
  const { data: dataCart } = fetchCartResponses;
  const { isLoading: isLoadingAddCart } = addCartResponses;

  console.log(user)

  const onDecrease = () => {
    if(quantity > 1) {
      setQuantity(quantity-1)
    }
  }

  const onCrease = () => {
    setQuantity(quantity+1)
  }

  const handleAddCart = () => {
    
    addCart({
      method: "PUT",
      data :{}
    })
  }

  useEffect(() => {
    fetchCart({method: "GET"});
    setCartProducts(dataCart);
    doFetch({
      method: "GET"
    })
  }, [fetchCart, doFetch, dataCart])

  return (
    <>
      {(isLoading || isLoadingAddCart) && <Loading />}
      {
        data &&
        (<div className='block md:grid grid-cols-12 px-4'>
          <div className="col-span-6">
            <Image w="75%" h="auto" alt={data.name} src={data.imgSrc} />
          </div>
          <div className="col-span-6 px-4 pt-36">
            <div className="pt-18">
              <p className='flex justify-start tracking-normal text-black uppercase font-semiboldleading-6 text-xl font-bold py-8'>{data.name}</p>
              <p className='text-base pb-8 font-light'>{data.desc}</p>
              <b className='text-base line-through text-gray-400'>{data.retailPrice}</b>
              <span className='text-xl font-bold ml-4 text-red-600'>{data.ourPrice}</span>
              <br />
              <div>
                <b className='text-lg flex items-cente mt-4'>
                  <span className='mr-4'>Quantity</span>
                  <div
                    onClick={onDecrease}
                    className="flex justify-center items-center w-7 h-7 cursor-pointer border border-slate-300 mr-3 hover:bg-black hover:text-white"
                    style={{
                      borderRadius: "50%",
                    }}
                  >
                    <span
                      style={{
                        position: "relative",
                        top: "-2px",
                      }}
                    >
                      -
                    </span>
                  </div>
                  <span>{quantity}</span>
                  <div
                    onClick={onCrease}
                    className="flex justify-center items-center w-7 h-7 cursor-pointer border border-slate-300 ml-3 bg-black hover:opacity-60"
                    style={{
                      borderRadius: "50%",
                    }}
                  >
                    <span
                      className="text-white relative"
                      style={{
                        top: "-2px",
                      }}
                    >
                      +
                    </span>
                  </div>
                </b>
                <div className='mt-4'>For: <span className='uppercase font-semibold'>{data.sex}</span></div>
              </div>
              <button className='mt-20 bg-rose-500 hover:bg-rose-400  py-4 px-12 rounded font-medium text-white' onClick={handleAddCart}>ADD TO CART</button>
              <button className='mt-20 bg-black hover:bg-slate-800 py-4 px-12 rounded font-medium text-white ml-4'>BUY IT NOW</button>
            </div>
          </div>
        </div>)
      }
    </>
  )
}

export default ProductDetail