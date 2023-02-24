import { FC, useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import useFetchTA from "../../hooks/useFetchTA";

import { FiChevronRight } from "react-icons/fi";
import FormCheckOut from "./FormCheckOut";
import ProductsCart from "../../components/ProductsCart.tsx";

const Payment: FC = () => {
  const [dataPut, setDataPut] = useState({});
  const [dataDelete, setDataDelete] = useState({});

  const { data, loading, error } = useFetchTA(
    "https://63782c6a5c477765122d0c95.mockapi.io/users/2"
  );
  const { loading: putLoading, error: putError } = useFetchTA(
    "https://63782c6a5c477765122d0c95.mockapi.io/users/2",
    {
      method: "PUT",
      body: dataPut,
    }
  );
  const { loading: deleteLoading, error: deleteError } = useFetchTA(
    "https://63782c6a5c477765122d0c95.mockapi.io/users/2",
    {
      method: "PUT",
      body: dataDelete,
    }
  );

  const [cartProducts, setCartProducts] = useState<any[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const dataMemo = useMemo(() => {
    return data;
  }, [loading]);

  const handleSetOrder = (cartProducts: any[]) => {
    let newTotalPrice: number = 0;
    cartProducts.forEach((product: any) => {
      newTotalPrice += product.ourPrice * product.amount;
    });
    setTotalPrice(newTotalPrice);
  };

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
    console.log(cartProducts);
    const newCart: any[] = [];
    cartProducts.forEach((product: any) => {
      if (product.id === id) {
        if (product.amount > 1) {
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
    if (dataMemo) {
      setCartProducts(dataMemo.cart);
      handleSetOrder(dataMemo.cart);
    }
  }, [dataMemo]);

  return (
    <div className="px-4 grid grid-cols-2 gap-4">
      <div className="col pt-12 pr-14 flex flex-col">
        <div>
          <Link to="/">
            <h3 className=" text-3xl">Perfume</h3>
          </Link>
          <h5 className="mt-4 flex items-center text-sm">
            <span className="mr-2">Cart</span>
            <span>
              <FiChevronRight className="mr-2 relative mt-1" />
            </span>
            <span>Shipping</span>
          </h5>
        </div>
        <div>
          <FormCheckOut />
        </div>
      </div>
      <div className="col pt-12 pr-14">
        <ProductsCart
          loading={loading}
          putLoading={putLoading}
          deleteLoading={deleteLoading}
          error={error}
          putError={putError}
          deleteError={deleteError}
          cartProducts={cartProducts}
          onCreaseAmout={handleCreaseAmout}
          onDecreaseAmout={handleDecreaseAmout}
          onDeleteCart={handleDeleteCart}
        />
        <div className="mt-4 float-right mr-20 text-3xl font-bold">
            <span className="mr-4">TOTAL:</span>
            ${totalPrice.toFixed(2)}
        </div>
      </div>
    </div>
  );
};

export default Payment;
