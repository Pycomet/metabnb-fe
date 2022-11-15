import React from "react";
import { useNavigate } from "react-router-dom";

import logo from "../assets/logo.png"
import WalletModal from "./WalletModal";



export const NavigationBar = () => {
    const navigate = useNavigate()

    const [showModal, setShowModal] = React.useState(false)
    const [showMenu, setShowMenu] = React.useState(false)

    return (
        <div className="flex flex-row items-center justify-between py-6 font-redrose">
                <div className="md:w-60 w-1/3 ml-2">
                    <img src={logo} alt="logo" onClick={() => navigate("/")} />


                    {showMenu && (
                        <div className="relative w-60 mt-10 lg:hidden flex-col text-left text-xl font-normal md:justify-end">
                            <h3 className="cursor-pointer mt-1" onClick={() => navigate("/")}>Home</h3>
                            <h3 className="cursor-pointer mt-1" onClick={() => navigate("/placetostay")}>Place to stay</h3>
                            <h3 className="cursor-pointer mt-1">NFTs</h3>
                            <h3 className="cursor-pointer mt-1">Community</h3>
                            <button className="font-normal text-sm mt-2" onClick={() => setShowModal(true)}>Connect wallet</button>
                        </div>
                    )}
                </div>

                <div className="md:w-1/3 lg:flex lg:flex-row text-xl font-normal md:justify-between hidden">
                    <h3 className="cursor-pointer" onClick={() => navigate("/")}>Home</h3>
                    <h3 className="cursor-pointer" onClick={() => navigate("/placetostay")}>Place to stay</h3>
                    <h3>NFTs</h3>
                    <h3>Community</h3>
                </div>

                <div className="mr-2 md:mr-0">
                    <button className="font-normal lg:flex hidden" onClick={() => setShowModal(true)}>Connect wallet</button>
                    <button className="absolute right-20 top-4 font-normal bg-transparent text-black lg:hidden" onClick={() => setShowMenu(!showMenu)}>
                        {!showMenu ? (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#565645" className="md:w-10 md:h-10 w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        ) : <p className="md:text-3xl md:mr-2 text-lg font-redrose font-semibold">X</p>}

                    </button>
                </div>

               {showModal && <WalletModal isOpen={showModal} setIsOpen={setShowModal} />}

        </div>
    )
}


export default NavigationBar
