import { FC } from "react"
import Navbar from "./Navbar"
import SearchBar from "./SearchBar"


const Header: FC = () => {

    return (
        <div className="header">
            <SearchBar />
            <Navbar />
        </div>
    )
}

export default Header