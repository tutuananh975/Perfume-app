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
            <div className="container px-2">
                <div className="grid grid-cols-6 gap-6">
                    <div>
                        <SideBar />
                    </div>
                    <div className="col-span-5">
                        {children}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default MainLayout;