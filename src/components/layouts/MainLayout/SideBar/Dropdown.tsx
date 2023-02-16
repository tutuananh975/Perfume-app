import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { FC, useState } from "react";

const DropDown: FC = () => {
  const [openDropDown, setOpenDropDown] = useState<Boolean>(false);

  return (
    <div className="w-full lg:max-w-sm">
      <div
        className="drop-down-title flex justify-between items-center"
        onClick={() => setOpenDropDown(!openDropDown)}
      >
        <h3 className="f font-semibold text-lg">GENDER</h3>
        <FaChevronDown className="mr-20"/>
      </div>
      {openDropDown && (
        <ul className="ml-2 text-sm">
          <li className="mt-6">
            <input className="mr-2" type="checkbox" value="Women" /> Women
          </li>
          <li className="mt-6">
            <input className="mr-2" type="checkbox" value="Men" /> Men
          </li>
          <li className="mt-6">
            <input className="mr-2" type="checkbox" value="Unisex" /> Unisex
          </li>
        </ul>
      )}
    </div>
  );
};

export default DropDown;
