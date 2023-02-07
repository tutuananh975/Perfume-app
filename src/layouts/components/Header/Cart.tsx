import { FC } from "react";
import Optional from "./Optional";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
const Cart: FC = () => {
  return <Optional icon={faCartShopping} textLight="CART" />;
};

export default Cart;
