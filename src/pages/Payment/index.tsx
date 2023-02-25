import { FC, useState, useEffect, useMemo, useContext } from "react";
import { Link } from "react-router-dom";
import useFetchTA from "../../hooks/useFetchTA";

import { AuthContext } from "../../App";

import { FiChevronRight } from "react-icons/fi";
import FormCheckOut from "./FormCheckOut";
import ProductsCart from "../../components/ProductsCart.tsx";
import OrderSuccess from "./OrderSuccess";

const Payment: FC = () => {
  const [dataPut, setDataPut] = useState({});
  const [dataDelete, setDataDelete] = useState({});
  const { idUser } = useContext(AuthContext);

  const { data, loading, error } = useFetchTA(
    "https://63782c6a5c477765122d0c95.mockapi.io/users/" + idUser
  );
  const { loading: putLoading, error: putError } = useFetchTA(
    "https://63782c6a5c477765122d0c95.mockapi.io/users/" + idUser,
    {
      method: "PUT",
      body: dataPut,
    }
  );
  const { loading: deleteLoading, error: deleteError } = useFetchTA(
    "https://63782c6a5c477765122d0c95.mockapi.io/users/" + idUser,
    {
      method: "PUT",
      body: dataDelete,
    }
  );

  const [cartProducts, setCartProducts] = useState<any[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isSuccess, setIsSuccess] = useState(false)

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

  const handleResetCartProducts = () => {
    setCartProducts([]);
    setIsSuccess(true);
  };

  useEffect(() => {
    if (dataMemo) {
      setCartProducts(dataMemo.cart);
      handleSetOrder(dataMemo.cart);
    }
  }, [dataMemo]);

  return (
    <div className="px-4 grid grid-cols-3 gap-4">
      <div className="col-span-3 lg:col-span-1 pt-12 xl:pr-14 flex flex-col">
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
          <FormCheckOut
            totalPrice={totalPrice}
            cartProducts={cartProducts}
            onResetCartProducts={handleResetCartProducts}
          />
        </div>
      </div>
      <div className="col-span-3 lg:col-span-2 pt-12 xl:pr-14">
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
        <div className="mt-4 float-right lg:mr-20 text-3xl font-bold">
          <span className="mr-4">TOTAL:</span>${totalPrice.toFixed(2)}
        </div>
      </div>
      {isSuccess && <OrderSuccess />}
    </div>
  );
};

export default Payment;
