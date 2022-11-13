import React from "react";
import { PureComponent } from "react";

import logo from "../assets/logo-white.svg"
import CopyRight from "../assets/copyright.svg"

export default class Footer extends PureComponent {

    render() {
        return (
            <div className="bg-[#1D1D1E] mx-auto text-white">
                <div className="flex flex-row mx-auto max-w-[85%] items-start text-left justify-between py-20">
                    <div className="w-2/5 ml-2">
                        <img className="pb-28" src={logo} alt="logo" />

                        
                        <h3 className="pb-10">icons</h3>
                        <img src={CopyRight} alt="rights" />
                    </div>

                    <div className="w-1/5 text-xl font-semibold">
                        <h3>Community</h3>
                        <div className="font-normal text-lg mt-4 flex-col">
                            <h3>NFT</h3>
                            <h3>Tokens</h3>
                            <h3>Landlords</h3>
                            <h3>Discord</h3>
                        </div>
                    </div>

                    <div className="w-1/5 text-xl font-semibold">
                        <h3>Places</h3>
                        <div className="font-normal text-lg mt-4 flex-col">
                            <h3>Castles</h3>
                            <h3>Farms</h3>
                            <h3>Beach</h3>
                            <h3>Learn more</h3>
                        </div>
                    </div>

                    <div className="w-1/5 text-xl font-semibold">
                        <h3>About Us</h3>
                        <div className="font-normal text-lg mt-4 flex-col">
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

