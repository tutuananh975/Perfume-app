import { FC } from 'react';
import CloseBtn from '../../../../overflay/CloseBtn.tsx';
import Overflay from '../../../../overflay/Overflay';
import { FaUserAlt, FaChevronRight } from "react-icons/fa";
import NavbarMoblieRow from './NavbarMobileRow';

interface PropNavbarMobile {
    onCloseNavbarMobile: Function
}

const NavbarMobile: FC<PropNavbarMobile> = ({ onCloseNavbarMobile }) => {

    return (
        <div className='md:hidden'>
            <div 
                className='fixed top-0 bottom-0 left-0 bg-white'
                style={{
                    width: "80%",
                    paddingBottom: "100px",
                    zIndex: "2"
                }}    
            >
                <div className='p-4 pr-2 flex justify-between items-center'>
                    <h3>MENU</h3>
                    <CloseBtn onClose={onCloseNavbarMobile}/>
                </div>
                <div className='flex items-center py-4 pr-2 bg-red-300 cursor-pointer hover:bg-red-500'>
                    <div 
                        style={{
                            width: "43px",
                            height: "43px",
                            borderRadius: "50%",
                            backgroundColor: "grey",
                            display: "flex"
                        }}
                    >
                        <FaUserAlt className='m-auto'/>
                    </div>
                    <p className='ml-4'>My Acount</p>
                    <FaChevronRight className='text-gray-300 mr-6 ml-auto'/>
                </div>
                <NavbarMoblieRow  
                    alt='Women' 
                    src='https://cdn.shopify.com/s/files/1/0269/7763/2389/files/women_icon_47eda231-6206-4341-8b62-dfdce31ca056.png'
                    title="Women's Perfume"
                />
                <NavbarMoblieRow  
                    alt='Men' 
                    src='https://cdn.shopify.com/s/files/1/0269/7763/2389/files/men_icon_3fcd8ed9-2d2f-4dd0-b094-f0f56d3f2160.png'
                    title="Men's Perfume"
                />
                <NavbarMoblieRow  
                    alt='best-sellers' 
                    src='https://cdn.shopify.com/s/files/1/0269/7763/2389/files/clearnace_icon_1136ba11-08b4-46e1-8a54-7b56ef389066.png'
                    title="Best Sellers"
                />
                <NavbarMoblieRow  
                    alt='gift' 
                    src='https://cdn.shopify.com/s/files/1/0269/7763/2389/files/Gifts_menu.png?v=1636382258'
                    title="Gift Sets"
                />
                <NavbarMoblieRow  
                    alt='brands' 
                    src='https://cdn.shopify.com/s/files/1/0269/7763/2389/files/atoz.png'
                    title="Shop by brands"
                />
                <NavbarMoblieRow  
                    alt='fragrance' 
                    src='https://cdn.shopify.com/s/files/1/0269/7763/2389/files/women_icon_47eda231-6206-4341-8b62-dfdce31ca056.png'
                    title="Join Theo Club"
                />
            </div>
            <Overflay onClose={onCloseNavbarMobile}/>
        </div>
    )
}

export default NavbarMobile;