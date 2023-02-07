import { FC } from "react";
import logo from "./icons/logo-main.png";
import "./SearchBar.css";
import {
  faCarSide,
  faArrowsSpin,
  faMedal,
} from "@fortawesome/free-solid-svg-icons";
import Optional from "./Optional";

const SearchBar: FC = () => {
  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <img className="w-60 h-16" src={logo} alt="logo" />
        <div className="search relative hidden lg:flex">
          <input
            type="text"
            className="search-input pl-4 pr-10 py-1 border h-full w-full rounded"
            placeholder="Search Value"
          />
          <button className="btn-search bg-9c6711 w-20 h-full p-1 absolute right-0 rounded-r">Search</button>
        </div>
        <div className="optinals flex items-center">
          <Optional icon={faCarSide} textBold="FREE" textLight="SHIPPING" />
          <Optional icon={faArrowsSpin} textBold="100%" textLight="SECURE" />
          <Optional icon={faMedal} textBold="100%" textLight="AUTHENTIC" />
        </div>
      </div>
      <div className="search-mobile px-2 py-4 flex lg:hidden">
        <input
          type="text"
          className="search-input pl-4 pr-10 py-1 border h-full w-full rounded"
          placeholder="Search Value"
        />
        <button className="btn-search bg-9c6711 w-20 p-1 absolute right-4 rounded-r">
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
