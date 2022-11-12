import React from "react";
import { PureComponent } from "react";

import logo from "../assets/logo.svg"



export default class NavigationBar extends PureComponent {

    render() {
        // const { } = this.props;

        return (
            <div className="container mx-auto max-w-78xl mt-2" >
                <div className="flex flex-row items-center justify-between py-6">
                        <div className="md:w-40 w-1/3 ml-2">
                            <img src={logo} alt="logo" />
                        </div>

                        <div className="md:w-1/3 md:flex md:flex-row md:justify-between hidden">
                            <h3>Home</h3>
                            <h3>Place to stay</h3>
                            <h3>NFTs</h3>
                            <h3>Community</h3>
                        </div>

                        <button className="mr-2 md:mr-0">Connect wallet</button>
                </div>
            </div>
        )
    }
}

