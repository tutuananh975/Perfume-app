import { removeListener } from "process";
import { FC, useState } from "react";
import { GrClose } from "react-icons/gr";

const Customeraccount: FC = () => {

    const [hide, setHide] = useState<boolean>(true)



    return (
        <div className="p-4">
            <div className="flex justify-end"><GrClose className="text-2xl border-2 border-black"/></div>
            <div className="flex p-4">
                <div className="w-full px-6 my-auto">
                    <div className="text-center font-semibold text-2xl">SING IN</div>
                    <div className="text-center">Already have an account? Sign in for a more personalized experience</div>
                    <div className="">
                        <label className={hide?"relative top-8 left-2 text-gray-400":'none'}>Username</label>
                        <input type="text" className=" w-full border-2 p-2" onClick={()=>setHide(hide=>!hide)}/>
                    </div>
                    <div className="">
                        <label className="relative top-8 left-2 text-gray-400 focus:bg-black">Password</label>
                        <input type="text" className=" w-full border-2 p-2"/>
                    </div>
                    <button className="bg-black text-white w-full my-4 py-2 rounded-2xl">Continue</button>
                </div>
                <div className="px-6 border-l-2 border-gray-400">
                    <div className="text-center font-semibold text-2xl">NEW TO PERFUMANIA?</div>
                    <div>By creating an account you will be able to shop faster, be up to date on an order’s status, and keep track of the orders you have previously made.</div>
                    <div className="">
                        <label className="relative top-8 left-2 text-gray-400">Username</label>
                        <input type="text" className=" w-full border-2 p-2"/>
                    </div>
                    <div className="">
                        <label className="relative top-8 left-2 text-gray-400">Password</label>
                        <input type="text" className=" w-full border-2 p-2"/>
                    </div>
                    <div className="">
                        <label className="relative top-8 left-2 text-gray-400">Email</label>
                        <input type="text" className=" w-full border-2 p-2"/>
                    </div>
                    <button className="bg-black text-white w-full my-4 py-2 rounded-2xl">Create an Account </button>
                </div>
            </div>
        </div>
    )
}

export default Customeraccount;