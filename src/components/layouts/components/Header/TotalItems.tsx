import { FC, useContext } from 'react';
import { UserContext } from '../../../../App';


const TotalItems: FC= () => {

    const { totalItems } = useContext(UserContext)

    return (
        <div 
            className="absolute w-5 h-5 rounded-md bg-red-500 left-8 flex justify-center items-center"
            style={{top: "-12px"}}    
        >
            <span className='text-white text-sm'>{totalItems}</span>
        </div>
    )
}

export default TotalItems