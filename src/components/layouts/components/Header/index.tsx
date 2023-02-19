import { FC } from "react"
import Navbar from "./Navbar"
import SearchBar from "./SearchBar"
import './styles/Header.css'


const Header: FC = () => {

    return (
        <div className="header p-4">
            <SearchBar />
            <Navbar />
        </div>
    )
}

export default Header