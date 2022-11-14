import React from "react";
import { useNavigate } from "react-router-dom";

import logo from "../assets/logo.svg"
import WalletModal from "./WalletModal";



export const NavigationBar = () => {
    const navigate = useNavigate()

    const [show, setShow] = React.useState(false)

    return (
        <div className="flex flex-row items-center justify-between py-6 font-redrose">
                <div className="md:w-60 w-1/3 ml-2">
                    <img src={logo} alt="logo" onClick={() => navigate("/")} />
                </div>

                <div className="md:w-1/3 md:flex md:flex-row text-xl font-normal md:justify-between hidden">
                    <h3 className="cursor-pointer" onClick={() => navigate("/")}>Home</h3>
                    <h3 className="cursor-pointer" onClick={() => navigate("/placetostay")}>Place to stay</h3>
                    <h3>NFTs</h3>
                    <h3>Community</h3>
                </div>

                <button className="mr-2 md:mr-0 font-normal" onClick={() => setShow(true)}>Connect wallet</button>

               {show && <WalletModal isOpen={show} setIsOpen={setShow} />}

        </div>
    )
}


export default NavigationBar
