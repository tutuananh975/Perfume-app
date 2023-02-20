import { FC, useState, useEffect, useMemo } from "react";
import useFetchTA from "../../hooks/useFetchTA";
import Order from "./Order";

import ProductCart from "./ProductCart";

const Cart: FC = () => {

  const [dataPut, setDataPut] = useState({});
  const [dataDelete, setDataDelete] = useState({});
  const { data, loading, error } = useFetchTA('https://63782c6a5c477765122d0c95.mockapi.io/users/2');
  const { data: putData, loading: putLoading, error: putError } = useFetchTA('https://63782c6a5c477765122d0c95.mockapi.io/users/2', {
    method: 'PUT',  
    body: dataPut
  })
  const {data: deleteData, loading: deleteLoading, error: deleteError} = useFetchTA('https://63782c6a5c477765122d0c95.mockapi.io/users/2', {
    method: 'PUT',
    body: dataDelete
  })

  const [cartProducts, setCartProducts] = useState<any[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const [savings, setSavings] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useMemo(() => {
    return data;
  }, [loading])

  const handleCreaseAmout = (id: string) => {
    const newCart: any[] = [];
    cartProducts.forEach((product: any) => {
      if(product.id === id) {
        newCart.push({...product, amount: Number(product.amount) + 1})
      } else {
        newCart.push(product)
      }
    })
    setCartProducts(newCart);
    setDataPut({cart: newCart});
  }

  
  const handleDecreaseAmout = (id: string) => {
    const newCart: any[] = [];
    cartProducts.forEach((product: any) => {
      if(product.id === id) {
        newCart.push({...product, amount: Number(product.amount) - 1})
      } else {
        newCart.push(product)
      }
    })
    setCartProducts(newCart);
    console.log(newCart);
    setDataPut({cart: newCart})
  }

  const handleDeleteCart = (id: string) => {
    const newCart = cartProducts.filter((product) => {
      return product.id !== id;
    })
    setCartProducts(newCart);
    console.log(newCart);
    setDataDelete({cart: newCart});
  }

  useEffect(() => {
    if(data) {
      setCartProducts(data.cart)
      let newTotalPrice: number = 0;
      let newSavingPrice: number = 0;
      let newTotalItem: number = 0;
      data.cart.forEach((product: any) => {
        newTotalPrice += product.ourPrice * product.amount;
        newSavingPrice += (product.retailPrice - product.ourPrice)*product.amount;
        newTotalItem += product.amount;
      })
      setTotalPrice(newTotalPrice);
      setSavings(newSavingPrice);
      setTotalItems(newTotalItem);
    }
  }, [data]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="cart px-4 pt-9 pb-5">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="col lg:col-span-2">
          <div className="border-b border-solid border-slate-300 font-semibold text-base py-6">
            YOUR CART
            <span className=" text-gray-400"> ( 5 ITEMS )</span>
          </div>
          {cartProducts.map((product: any) => (
            <ProductCart
              key={product.id}
              alt={product.name}
              src={product.imgSrc}
              name={product.name}
              desc={product.desc}
              size={product.size}
              retailPrice={product.retailPrice}
              ourPrice={product.ourPrice}
              amount={product.amount}
              onCrease = {() => handleCreaseAmout(product.id)}
              onDecrease = {() => handleDecreaseAmout(product.id)}
              onDelete = {() => handleDeleteCart(product.id)}
            />
          ))}
        </div>
        <div className="col-span-1">
          <Order totalPrice = {totalPrice} savings = { savings } totalItems = {totalItems}/>   
        </div>
      </div>
    </div>
  );
};

export default Cart;
