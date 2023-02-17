import { FC } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SideBar from "./SideBar";

interface PropOutlet {
    children: any
}

const MainLayout: FC<PropOutlet> = ({ children } ) => {

    return (
        <div>
            <Header />
            <div className="title-products"></div>
            <div className="px-2">
                <div className="grid grid-cols-12 gap-4 justify-between">
                    <div className="col-span-3">
                        <SideBar />
                    </div>
                    <div className="col-span-9">
                        {children}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default MainLayout;