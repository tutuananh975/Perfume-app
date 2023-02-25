import { FC, useContext } from "react";
import { AuthContext } from "../../../../App";
import Optional from "./Optional";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
const CartItem: FC = () => {

  const auth = useContext(AuthContext);

  return <Optional icon={faCartShopping} />;
};

export default CartItem;
