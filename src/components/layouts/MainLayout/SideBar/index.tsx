import { FC } from "react";
import DropDown from "./Dropdown";
import { dropdowns } from "../instance"; 

const SideBar: FC = () => {

    return(
        <>
            <h2 className="sidebar-title font-semibold text-2xl mb-6">MEN'S PERFUME</h2>
            <h4 className="mb-9">Filter</h4>
            {dropdowns.map(dropDown => (
                <DropDown dropDowntitle = {dropDown.title} dropdownLinks = { dropDown.links }/>
            ))}

        </>
    )
}

export default SideBar;