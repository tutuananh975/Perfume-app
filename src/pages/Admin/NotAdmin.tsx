import { FC, useState, useEffect, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Modal from '../../components/Modal';

const NotAdmin: FC = () => {

    const [count, setCount] = useState(5);
    const navigate = useNavigate()
    const intervalId = useRef<any>();
    useEffect(() => {
        if(count === 0) {
            navigate('/')
        }
        intervalId.current = setInterval(() => {
            setCount(count - 1);
          }, 1000);
        
        return function() {
            clearInterval(intervalId.current);
        }
        
    }, [count, navigate])

    return (
        <Modal>
            <h3 className="mt-3">
                Only Admin use this feature, auto navigate to Home Page after <span className=" text-red-500 text-base">{count}</span>{" "}
                second
            </h3>
            <Link to="/">
                <button className='mt-5 ml-5 bg-teal-500 text-white text-base px-2 py-1 rounded hover:bg-teal-300'>Navigate Home!</button>
            </Link>
        </Modal>
    )
}

export default NotAdmin;