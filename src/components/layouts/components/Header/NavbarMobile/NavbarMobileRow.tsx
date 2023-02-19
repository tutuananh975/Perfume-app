import { FC } from 'react';
import Image from '../../../../Image';
import { FaChevronRight } from "react-icons/fa";


interface PropNavbarMobileRow {
    alt: string,
    src: string,
    title: string
}

const NavbarMoblieRow: FC<PropNavbarMobileRow> = ({ alt, src, title }) => {

    return (
        <div className='py-4 pr-2 flex justify-between items-center bg-slate-100'>
            <div className='flex items-center'>
                <Image alt={alt} src={src} w="43px" h="43px"/>
                <h4 className='ml-4'>{title}</h4>
            </div>
            <FaChevronRight className='text-gray-300 mr-6'/>
        </div>
    )
}

export default NavbarMoblieRow;