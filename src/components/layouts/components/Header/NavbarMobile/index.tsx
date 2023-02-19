import { FC } from 'react';
import CloseBtn from '../../../../overflay/CloseBtn.tsx';
import Overflay from '../../../../overflay/Overflay';
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
                <NavbarMoblieRow  
                    alt='Women' 
                    src='https://cdn.shopify.com/s/files/1/0269/7763/2389/files/women_icon_47eda231-6206-4341-8b62-dfdce31ca056.png'
                    title="Women's Perfume"
                />
            </div>
            <Overflay onClose={onCloseNavbarMobile}/>
        </div>
    )
}

export default NavbarMobile;