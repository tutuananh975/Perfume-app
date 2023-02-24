import { FC, useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

import Modal from "../../components/Modal";

const OrderSuccess: FC = () => {

    const [count, setCount] = useState(5);
    const navigate = useNavigate()
    const intervalId = useRef<NodeJS.Timeout | null>(null);
    useEffect(() => {
        if(count === 0) {
            navigate('/')
        }
        intervalId.current = setInterval(() => {
            setCount(count - 1);
          }, 1000);
        
    }, [count])

    return (
        <Modal>
            <h3 className="mt-3">
                Order Success, auto navigate to Home Page after <span className=" text-red-500 text-base">{count}</span>{" "}
                second
            </h3>
            <Link to="/">
                <button className="mt-5 ml-5 bg-teal-500 text-white text-base px-2 py-1 rounded hover:bg-teal-300">Navigate now</button>
            </Link>
        </Modal>
    );
};

export default OrderSuccess;
