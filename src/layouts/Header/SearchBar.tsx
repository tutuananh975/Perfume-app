import { FC } from "react";
import logo from '../../assets/icons/logo-main.png';

const SearchBar: FC = () => {

    return(
        <div className="flex">  
            <img className="w-60 h-16 " src={logo}></img>
        </div>
    )
}

export default SearchBar;