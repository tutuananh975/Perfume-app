import { FC } from "react";
import logo from '../../assets/icons/logo-main.png';

const SearchBar: FC = () => {

    return(
        <div className="flex">  
            <img src={logo}></img>
        </div>
    )
}

export default SearchBar;