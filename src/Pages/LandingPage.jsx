import React from 'react'
import { IoIosArrowForward, IoMdArrowDropdownCircle } from 'react-icons/io'
import { Link } from 'react-router-dom'
export default function LandingPage() {
    return (
        <>

            <div className="bg-gradient-to-b from-[#288580]  to-[#5764da] min-h-screen">

                <div className="navbar flex justify-between px-4 py-4 bg-[#288580] shadow-xl">
                    <p className="brandname text-white text-3xl font-bold">ETHPay</p>
                    <IoMdArrowDropdownCircle color='white' size={36} />
                </div>

                <div className="main px-4">

                    <p className="text-white border border-white rounded-full w-fit px-5 text-lg py-1 mt-24">Ethereum Payments</p>
                    <p className=" text-white mt-6 text-4xl font-semibold">Empowering the next generation of payments</p>

                    <p className="text-white mt-6 text-lg font-[500]">
                        Ethereum Payments bridges the gap between the crypto users and the shopkeepers around the globe at no extra cost.
                    </p>

                    <Link to={'/signup'} className=" mt-10 px-6 bg-white rounded-xl py-3 text-lg font-[700] flex w-fit">Join ETHPay Payments <IoIosArrowForward size={20} className='ml-1 mt-1' /> </Link>

                </div>


            </div>







        </>
    )
}
