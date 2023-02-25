import { FC } from "react";
import Overflay from "../overflay/Overflay";
import ProductCart from "./ProductCart";

interface PropProductsCart {
    loading: boolean,
    putLoading: boolean,
    deleteLoading: boolean,
    error: any,
    putError: any,
    deleteError: any,
    cartProducts: object[],
    onCreaseAmout: any,
    onDecreaseAmout: any,
    onDeleteCart: any
}

const ProductsCart = ({ 
    loading, 
    putLoading, 
    deleteLoading, 
    error, 
    putError, 
    deleteError, 
    cartProducts, 
    onCreaseAmout,
    onDecreaseAmout,
    onDeleteCart,
} : PropProductsCart) => {
  return (
    <>
      {(loading || putLoading || deleteLoading) && (
        <div className="fixed top-0 left-0 bottom-0 right-0 z-10 flex justify-center items-center">
          <Overflay />
          <div className="loading-spinner z-20"></div>
        </div>
      )}

      {error && (
        <div>
          <h3>Get error: {error.message}</h3>
        </div>
      )}
      {putError && (
        <div>
          <h3>Get error: {putError.message}</h3>
        </div>
      )}
      {deleteError && (
        <div>
          <h3>Get error: {deleteError.message}</h3>
        </div>
      )}

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
              retailPrice={product.retailPrice}
              ourPrice={product.ourPrice}
              amount={product.amount}
              onCrease={() => onCreaseAmout(product.id)}
              onDecrease={() => onDecreaseAmout(product.id)}
              onDelete={() => onDeleteCart(product.id)}
            />
          ))}
        </div>
    </>
  );
};

export default ProductsCart;
