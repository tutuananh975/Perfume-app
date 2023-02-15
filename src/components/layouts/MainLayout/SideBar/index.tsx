import { FC } from "react";
import { FaChevronRight } from "react-icons/fa";
import DropDown from "./Dropdown";

const SideBar: FC = () => {

    return(
        <div className="sidebar p-2">
            <div className="sidebar-desc flex items-center text-xs py-4">
                <span className="mr-2">Home</span>
                <span className="mr-2">
                    <FaChevronRight size={12} />
                </span> 
                <span>Perfume & Cologne Gift Sets</span>
            </div>
            <h2 className="sidebar-title font-semibold text-2xl mb-6">MEN'S PERFUME</h2>
            <h4 className="mb-9">Filter</h4>
            <DropDown />
        </div>
    )
}

export default SideBar;