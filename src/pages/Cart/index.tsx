import { FC, useState, useEffect } from "react";
import useFetchTA from "../../hooks/useFetchTA";

import Order from "./Order";
import ProductsCart from "../../components/ProductsCart.tsx";

const Cart: FC = () => {
  const [dataPut, setDataPut] = useState({});
  
  const [dataDelete, setDataDelete] = useState({});
 
  const { data, loading, error } = useFetchTA(
    "https://63782c6a5c477765122d0c95.mockapi.io/users/2" 
  );
  const {
    loading: putLoading,
    error: putError,
  } = useFetchTA("https://63782c6a5c477765122d0c95.mockapi.io/users/2", {
    method: "PUT",
    body: dataPut,
  });
  const {
    loading: deleteLoading,
    error: deleteError,
  } = useFetchTA("https://63782c6a5c477765122d0c95.mockapi.io/users/2", {
    method: "PUT",
    body: dataDelete,
  });

  const [cartProducts, setCartProducts] = useState<any[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const [savings, setSavings] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  const handleSetOrder = (cartProducts: any[]) => {
    let newTotalPrice: number = 0;
    let newSavingPrice: number = 0;
    let newTotalItem: number = 0;
    cartProducts.forEach((product: any) => {
      newTotalPrice += product.ourPrice * product.amount;
      newSavingPrice +=
        (product.retailPrice - product.ourPrice) * product.amount;
      newTotalItem += Number(product.amount);
    });
    setTotalPrice(newTotalPrice);
    setSavings(newSavingPrice);
    setTotalItems(newTotalItem);
  };

  console.log(data);

  const handleCreaseAmout = (id: string) => {
    const newCart: any[] = [];
    cartProducts.forEach((product: any) => {
      if (product.id === id) {
        newCart.push({ ...product, amount: Number(product.amount) + 1 });
      } else {
        newCart.push(product);
      }
    });
    setCartProducts(newCart);
    setDataPut({ cart: newCart });
    handleSetOrder(newCart);
  };

  const handleDecreaseAmout = (id: string) => {
    console.log(cartProducts)
    const newCart: any[] = [];
    cartProducts.forEach((product: any) => {
      if (product.id === id) {
        if(product.amount > 1) {
          newCart.push({ ...product, amount: Number(product.amount) - 1 });
        }
      } else {
        newCart.push(product);
      }
    });
    setCartProducts(newCart);
    setDataPut({ cart: newCart });
    handleSetOrder(newCart);
  };

  const handleDeleteCart = (id: string) => {
    const newCart = cartProducts.filter((product) => {
      return product.id !== id;
    });
    setCartProducts(newCart);
    console.log(newCart);
    setDataDelete({ cart: newCart });
    handleSetOrder(newCart);
  };

  useEffect(() => {
    if (data) {
      setCartProducts(data.cart);
      handleSetOrder(data.cart);
    }
  }, [loading, data]);

  return (
    <div className="cart px-4 pt-9 pb-5">
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <ProductsCart 
          loading = {loading}
          putLoading = {putLoading}
          deleteLoading = {deleteLoading}
          error = {error}
          putError = {putError}
          deleteError = {deleteError}
          cartProducts = {cartProducts}
          onCreaseAmout = {handleCreaseAmout}
          onDecreaseAmout = {handleDecreaseAmout}
          onDeleteCart = {handleDeleteCart}
        />
        <div className="col-span-1">
          <Order
            totalPrice={totalPrice}
            savings={savings}
            totalItems={totalItems}
          />
        </div>
      </div>
    </div>
  );
};

export default Cart;
