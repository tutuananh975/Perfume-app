import { FC } from "react";
import Footer from "../../Footer";
import Header from "../../Header";

interface PropNotSideBarLayOut {
    children: any
}

const NotSideBarLayOut: FC<PropNotSideBarLayOut> = ({ children }) => {

    return (
        <div>
            <Header />
                { children }
            <Footer />
        </div>
    )
}

export default NotSideBarLayOut;