import { FC } from "react";
import { FaChevronRight } from "react-icons/fa";
import DropDown from "./Dropdown";

const dropdowns = [
    {
        title: "Gender",
        links: ["Women", "Men", "Unisex"]
    },
    {
        title: "Brand",
        links: ["4711", "Abercrombie and fitch", "Acqua di parma", "Adam levine", "Adrienme vittadini", "Al haramain" ]
    },
    {
        title: "Price",
        links: ["$25 to $50", "$50 to $75", "$75 to $100", "$100 to $150", "Over $150"]
    },
    {
        title: "Type",
        links: ["Eau de toilette", "Eau de parfum", "Cologne", "Gift set", "Beauty", "Deodorant"]
    }
]

const SideBar: FC = () => {

    return(
        <div className="sidebar p-2">
            <div className="sidebar-desc flex items-center text-xs pb-4">
                <span className="mr-2">Home</span>
                <span className="mr-2">
                    <FaChevronRight size={10gi} />
                </span> 
                <span>Perfume & Cologne Gift Sets</span>
            </div>
            <h2 className="sidebar-title font-semibold text-2xl mb-6">MEN'S PERFUME</h2>
            <h4 className="mb-9">Filter</h4>
            {dropdowns.map(dropDown => (
                <DropDown dropDowntitle = {dropDown.title} dropdownLinks = { dropDown.links }/>
            ))}

        </div>
    )
}

export default SideBar;