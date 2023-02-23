import { FC } from "react";
import { Link } from "react-router-dom";

import { FiChevronRight } from 'react-icons/fi';
import FormCheckOut from "./FormCheckOut";
 
const Payment: FC = () => {

    return (
        <div className="px-4 grid grid-cols-2 gap-4">
            <div className="col pt-12 pr-14 flex flex-col">
                <div>
                    <Link to="/">
                        <h3 className=" text-3xl">Perfume</h3>
                    </Link>
                    <h5 className="mt-4 flex items-center text-sm">
                        <span className="mr-2">Cart</span> 
                        <span>
                            <FiChevronRight className="mr-2 relative mt-1"/>
                        </span> 
                        <span>
                            Shipping
                        </span>
                    </h5>
                </div>
                <div>
                    <FormCheckOut />
                </div>
            </div>
            <div className="col pt-12 pr-14">
                
            </div>
        </div>

    )
}

export default Payment;