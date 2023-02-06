import { FC } from "react";
import logo from "./icons/logo-main.png";


const SearchBar: FC = () => {

    return(
        <div className="flex">  
            <img className="w-60 h-16" src={logo} alt="logo" />
        </div>
    )
}

export default SearchBar;