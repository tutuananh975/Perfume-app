import { FC } from 'react';
import Overflay from '../overflay/Overflay';

interface PropModal {
    children: any
}

const Modal: FC<PropModal> = ({ children }) => {

    return (
        <>
            <div className='modal-ta'>
                {children}
            </div>
            <Overflay />
        </>
    )
}

export default Modal;