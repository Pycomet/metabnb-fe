import { PureComponent } from "react";

import Image1 from "../assets/image3.png"
import Image2 from "../assets/image4.png"
import Image3 from "../assets/image5.svg"
import Image4 from "../assets/image6.svg"

export default class HeaderSection extends PureComponent {

    render () {
        return (
            <div className="w-full flex md:flex-row flex-col mt-10 md:mt-20">
                <div className="md:w-1/2 text-left text-[26px] md:text-6xl font-semibold flex-col">
                    <h2 className="mt-6 py-6">Rent a <span className="text-[#A02279]">Place</span> away from</h2>
                    <h2 className="pb-6"><span className="text-[#A02279]">Home</span> in the <span className="text-[#A02279]">Metaverse</span></h2>

                    <p className="md:text-xl text-sm my-6 md:mr-40 font-normal">we provide you accessto luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>

                    <div className="flex flex-row md:text-lg text-sm py-6 md:mr-20 font-normal">
                        <input className="w-full border-[1px] border-[#A3A3A3] rounded-[10px] rounded-r-none px-4" placeholder="Search for location" />
                        <button className="rounded-l-none px-[4em]">Search</button>
                    </div>

                </div>

                <div className="md:w-1/2 md:pl-[10vw] flex flex-row justify-end">
                    <div className="md:w-1/2 md:pt-[7em] py-10 mr-[1em]">
                        <img className="pb-4" src={Image2} alt="header" />
                        <img src={Image4} alt="header" />
                    </div>

                    <div className="md:w-1/2 md:pb-[7em] md:mr-10">
                        <img className="pb-4" src={Image1} alt="header" />
                        <img src={Image3} alt="header" />
                    </div>
                </div>
            </div>
        )
    }
}