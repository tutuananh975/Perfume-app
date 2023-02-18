import { FC } from "react";
import SideBar from "../SideBar";

const SideBarMobile: FC = () => {

    return (
        <div 
            className="fixed top-0 left-0 bottom-0 bg-white px-4"
            style={{
                width: "80%",
                overflow: "scroll"
            }}
        >
            <SideBar />
        </div>
    )
}

export default SideBarMobile;