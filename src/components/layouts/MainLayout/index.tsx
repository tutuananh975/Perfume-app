import { FC, useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SideBar from "./SideBar";
import SideBarMobile from "./SideBarMobile";

interface PropOutlet {
    children: any
}

const MainLayout: FC<PropOutlet> = ({ children } ) => {

    const [openSideBarMobile, setOpenSideBarMobile] = useState(false);

    return (
        <div>
            <Header />
            <div className="title-products flex items-center text-xs pb-4">
                <span className="mr-2">Home</span>
                <span className="mr-2">
                    <FaChevronRight size={10} />
                </span> 
                <span>Perfume & Cologne Gift Sets</span>
            </div>
            <div className="px-4">
                <div className="grid grid-cols-4 gap-4">
                    <div className="hidden md:block md:col-span-1">
                        <SideBar />
                    </div>
                    <div className="col-start-1 col-end-5 md:col-span-3">
                        {children}
                    </div>
                </div>
            </div>
            {openSideBarMobile && <SideBarMobile />}    
            <Footer />
        </div>
    )
}

export default MainLayout;