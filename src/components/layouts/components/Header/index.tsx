import { FC, useContext } from "react";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import { UserContext } from "../../../../App";
import './styles/Header.css';


const Header: FC = () => {

    const {cart} = useContext(UserContext);
    let totalItems: number = 0
    if (cart.length > 0) {
        totalItems = cart.reduce((total: number, product: any) => {
            return total + Number(product.amount);
        }, 0);
    }

    return (
        <div className="header p-4">
            <SearchBar totalItems = {totalItems} />
            <Navbar totalItems = {totalItems} />
            {/* <NavbarDC /> */}
        </div>
    )
}

export default Header