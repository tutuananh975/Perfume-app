import { FC } from "react";

interface PropOrder {
    totalPrice: number,
    savings: number
}

const Order: FC<PropOrder> = ({ totalPrice, savings }) => {

    return (
        <div 
            style={{
                boxShadow: "0 3px 14px #0000010"
            }}
            className="order p-5
                border border-solid border-gray-300 rounded-xl
            ">
            <h2 className="text-xl leading-7 font-bold mb-10">Order</h2>
            <div className="text-lg leading-5">    
                <div className="flex justify-between pb-6 mb-5 border-b border-dashed border-gray-300">
                    <span>Total Item(s)</span>
                    <span className="font-semibold">5</span>
                </div>
                <div className="flex justify-between mb-3 ">
                    <span>Total</span>
                    <span className="font-semibold leading-6">${totalPrice}</span>
                </div>
                <div className="flex justify-between pb-6 mb-3">
                    <span>Savings</span>
                    <span className="font-semibold text-red-600">${savings.toFixed(2)}</span>
                </div>
                <div className="flex justify-between pb-6 mb-3">
                    <span>Shipping</span>
                    <span className="font-normal text-sm">YOU ARE ELIGIBLE FOR FREE SHIPPING!</span>
                </div>
                <div className="flex justify-between pb-6 mb-4 font-bold text-2xl leading-7">
                    <span>Subtotal</span>
                    <span>${totalPrice}</span>
                </div>
            </div>
        </div>
    )
}

export default Order;