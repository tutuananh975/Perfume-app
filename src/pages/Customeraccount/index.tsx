import { FC } from "react";
import { GrClose } from "react-icons/gr";
import { NavLink } from "react-router-dom"; 
import CreateAcc from "./components/CreateAcc";
import LoginAcc from "./components/LoginAcc";

import './Acccount.css' 



const Customeraccount:FC = () => {
    return(
    <div className="p-4" >
    <NavLink to={"/"} className="flex justify-end"><GrClose className="text-2xl border-2 border-black"/></NavLink>
        <div className="block p-4 lg:flex">
        <div className="w-full px-8 my-auto">
            <LoginAcc/>
        </div>
        <div className="px-8 lg:border-l-2 lg:border-gray-400">
            <CreateAcc/>
        </div>
        </div>
    </div>           
    )
}

export default Customeraccount;