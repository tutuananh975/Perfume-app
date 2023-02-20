import { FC, useState } from "react";
import Order from "./Order";

import ProductCart from "./ProductCart";

const cartProducts = [
  {
    id: 1,
    alt: "Ralph Lauren",
    src: "https://cdn.shopify.com/s/files/1/0269/7763/2389/products/Ralph-Lauren-Polo-Red-Mens-Eau-de-Toilette-Spray-2.5-Best-Price-Fragrance-Parfume-FragranceOutlet.com-Details_medium.jpg?v=1598971348",
    name: "RALPH LAUREN",
    desc: "Polo Red For Men By Ralph Lauren Eau De Toilette Spray",
    size: "2.5 oz.",
    retailPrice: 82.0,
    ourPrice: 69.95,
    amout: 1,
  },
  {
    id: 2,
    alt: "Ralph Lauren",
    src: "https://cdn.shopify.com/s/files/1/0269/7763/2389/products/Ralph-Lauren-Polo-Red-Mens-Eau-de-Toilette-Spray-2.5-Best-Price-Fragrance-Parfume-FragranceOutlet.com-Details_medium.jpg?v=1598971348",
    name: "RALPH LAUREN",
    desc: "Polo Red For Men By Ralph Lauren Eau De Toilette Spray",
    size: "2.5 oz.",
    retailPrice: 82.0,
    ourPrice: 69.95,
    amout: 1,
  },
  {
    id: 3,
    alt: "Ralph Lauren",
    src: "https://cdn.shopify.com/s/files/1/0269/7763/2389/products/Ralph-Lauren-Polo-Red-Mens-Eau-de-Toilette-Spray-2.5-Best-Price-Fragrance-Parfume-FragranceOutlet.com-Details_medium.jpg?v=1598971348",
    name: "RALPH LAUREN",
    desc: "Polo Red For Men By Ralph Lauren Eau De Toilette Spray",
    size: "2.5 oz.",
    retailPrice: 82.0,
    ourPrice: 69.95,
    amout: 1,
  },
  {
    id: 4,
    alt: "Ralph Lauren",
    src: "https://cdn.shopify.com/s/files/1/0269/7763/2389/products/Ralph-Lauren-Polo-Red-Mens-Eau-de-Toilette-Spray-2.5-Best-Price-Fragrance-Parfume-FragranceOutlet.com-Details_medium.jpg?v=1598971348",
    name: "RALPH LAUREN",
    desc: "Polo Red For Men By Ralph Lauren Eau De Toilette Spray",
    size: "2.5 oz.",
    retailPrice: 82.0,
    ourPrice: 69.95,
    amout: 1,
  },
  {
    id: 5,
    alt: "Ralph Lauren",
    src: "https://cdn.shopify.com/s/files/1/0269/7763/2389/products/Ralph-Lauren-Polo-Red-Mens-Eau-de-Toilette-Spray-2.5-Best-Price-Fragrance-Parfume-FragranceOutlet.com-Details_medium.jpg?v=1598971348",
    name: "RALPH LAUREN",
    desc: "Polo Red For Men By Ralph Lauren Eau De Toilette Spray",
    size: "2.5 oz.",
    retailPrice: 82.0,
    ourPrice: 69.95,
    amout: 1,
  },
];

const Cart: FC = () => {    
    const [totalPrice, setTotalPrice] = useState(() => {
        return cartProducts.reduce((total, product) => {
            return total + product.ourPrice*product.amout
        }, 0)
    });

    const [savings, setSavings] = useState(() => {
        return cartProducts.reduce((total, product) => total + (product.retailPrice - product.ourPrice) * product.amout, 0)
    })
  return (
    <div className="cart px-4 pt-9 pb-5">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="col lg:col-span-2">
          <div className="border-b border-solid border-slate-300 font-semibold text-base py-6">
            YOUR CART
            <span className=" text-gray-400"> ( 5 ITEMS )</span>
          </div>
          {cartProducts.map((product) => (
            <ProductCart
              key={product.id}
              alt={product.alt}
              src={product.src}
              name={product.name}
              desc={product.desc}
              size={product.size}
              retailPrice={product.retailPrice}
              ourPrice={product.ourPrice}
              amount={product.amout}
            />
          ))}
        </div>
        <div className="col-span-1">
          <Order totalPrice = { totalPrice } savings = { savings }/>
          
        </div>
      </div>
    </div>
  );
};

export default Cart;
