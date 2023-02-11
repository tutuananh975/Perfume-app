import { FC } from "react"
import Navbar from "./components/Navbar"
import SearchBar from "./components/SearchBar"
import './Header.css'


const Header: FC = () => {

    return (
        <div className="header p-4">
            <SearchBar />
            <Navbar />
        </div>
    )
}

export default Header