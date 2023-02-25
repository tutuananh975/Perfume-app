import { FC, useState, useEffect, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Modal from '../Modal';

const NotUser: FC = () => {

    const [count, setCount] = useState(5);
    const navigate = useNavigate()
    const intervalId = useRef<any>();
    useEffect(() => {
        if (count === 0) {
            navigate('/customeraccount')
        }
        intervalId.current = setInterval(() => {
            setCount(count - 1);
        }, 1000);

        return () => {
            clearInterval(intervalId.current)
        }
    }, [count, navigate])

    return (
        <>
            <Modal>
                <h3 className="mt-3">
                    You must be logged in to use this feature, auto navigate to Sign In Page after <span className=" text-red-500 text-base">{count}</span>{" "}
                    second
                </h3>
                <Link to="/customeraccount">
                    <button className='mt-5 ml-5 bg-teal-500 text-white text-base px-2 py-1 rounded hover:bg-teal-300'>Login now</button>
                </Link>
            </Modal>
        </>
    )
}

export default NotUser;