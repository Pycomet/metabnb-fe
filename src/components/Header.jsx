import { PureComponent } from "react";

import Image1 from "../assets/image3.png"
import Image2 from "../assets/image4.png"
import Image3 from "../assets/image5.svg"
import Image4 from "../assets/image6.svg"

export default class HeaderSection extends PureComponent {

    render () {
        return (
            <div className="w-full flex lg:flex-row flex-col mt-10 lg:mt-20 font-redrose text-[#434343]">
                <div className="lg:w-3/5 text-left text-3xl md:text-5xl lg:text-6xl font-semibold flex-col">
                    <h2 className="lg:mt-6 lg:py-6">Rent a <span className="text-[#A02279]">Place</span> away from</h2>
                    <h2 className="pb-6"><span className="text-[#A02279]">Home</span> in the <span className="text-[#A02279]">Metaverse</span></h2>

                    <p className="lg:text-2xl text-sm my-6 lg:mr-[2em] font-normal">we provide you accessto luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>

                    <div className="flex flex-row lg:text-lg lg:mr-[5em] text-sm py-6 font-normal">
                        <input className="w-full border-[1px] border-[#A3A3A3] rounded-[10px] rounded-r-none px-4" placeholder="Search for location" />
                        <button className="rounded-l-none px-[4em]">Search</button>
                    </div>

                </div>

                <div className="lg:w-2/5 lg:ml-[2em] flex flex-row lg:justify-end justify-center">
                    <div className="lg:w-1/2 lg:ml-[2em] lg:pt-[7em] py-10">
                        <img className="pb-4" src={Image2} alt="header" />
                        <img src={Image4} alt="header" />
                    </div>

                    <div className="lg:w-1/2 lg:pb-[7em] px-2">
                        <img className="pb-4" src={Image1} alt="header" />
                        <img src={Image3} alt="header" />
                    </div>
                </div>
            </div>
        )
    }
}