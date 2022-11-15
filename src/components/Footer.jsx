import React from "react";
import { PureComponent } from "react";

import logo from "../assets/logo-white.png"
import CopyRight from "../assets/copyright.svg"

import { ImFacebook, ImTwitter, ImInstagram } from "react-icons/im"

export default class Footer extends PureComponent {

    render() {
        return (
            <div className="bg-[#1D1D1E] mx-auto text-white font-redrose">
                <div className="flex md:flex-row flex-col mx-auto max-w-[80%] items-start text-left justify-between py-20">
                    <div className="md:w-2/5 pb-4 ml-2">
                        <img className="md:pb-28 pb-10" src={logo} alt="logo" />

                        
                        <h3 className="pb-10 flex flex-row space-x-10">
                            <ImFacebook />
                            <ImInstagram />
                            <ImTwitter />
                        </h3>
                        <img src={CopyRight} alt="rights" />
                    </div>

                    <div className="md:w-1/5 pb-6 text-lg font-semibold">
                        <h3>Community</h3>
                        <div className="font-normal md:leading-7 text-sm mt-4 flex-col">
                            <h3>NFT</h3>
                            <h3>Tokens</h3>
                            <h3>Landlords</h3>
                            <h3>Discord</h3>
                        </div>
                    </div>

                    <div className="md:w-1/5 pb-6 text-lg font-semibold">
                        <h3>Places</h3>
                        <div className="font-normal md:leading-7 text-sm mt-4 flex-col">
                            <h3>Castles</h3>
                            <h3>Farms</h3>
                            <h3>Beach</h3>
                            <h3>Learn more</h3>
                        </div>
                    </div>

                    <div className="md:w-1/5 pb-6 text-lg font-semibold">
                        <h3>About Us</h3>
                        <div className="font-normal md:leading-7 text-sm mt-4 flex-col">
                            <h3>Road map</h3>
                            <h3>Creators</h3>
                            <h3>Career</h3>
                            <h3>Contact us</h3>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

