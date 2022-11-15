import NavigationBar from "../components/NavigationBar"
import Footer from "../components/Footer"
import ItemCard from "../components/ItemCard"

import Image1 from "../assets/frame1.png"
import Image2 from "../assets/frame2.png"
import Image3 from "../assets/frame3.png"
import Image4 from "../assets/frame4.png"
import Image5 from "../assets/frame5.png"
import Image6 from "../assets/frame6.png"
import Image7 from "../assets/frame7.png"
import Image8 from "../assets/frame8.png"
import Image9 from "../assets/frame9.png"
import Image10 from "../assets/frame10.png"
import Image11 from "../assets/frame11.png"
import Image12 from "../assets/frame12.png"
import Image13 from "../assets/frame13.png"
import Image14 from "../assets/frame14.png"
import Image15 from "../assets/frame15.png"
import Image16 from "../assets/frame16.png"
import SettingIcon from "../assets/setting-5.svg"

const PlaceToStayPage = () => {

    return (
        <div>
            <div className="container mx-auto max-w-[80%] mt-2" >
                <NavigationBar />



                <div className="font-redrose md:my-20 my-10">
                    <div className="flex lg:flex-row flex-col-reverse text-start items-baseline text-xl lg:gap-14 gap-2">
                        <p>Restaurant</p>
                        <p>Cottage</p>
                        <p>Castle</p>
                        <p>Fantast city</p>
                        <p>beach</p>
                        <p>Carbins</p>
                        <p>Off-grid</p>
                        <p>Farm</p>
                        <span className="flex gap-6 text-lg border-[1px] border-[#A3A3A3] mb-2 py-2 px-4 rounded-[10px]">Location <img src={SettingIcon} alt="settings" /></span>
                    </div>

                    <div className="mt-10 grid lg:grid-cols-4 md:grid-cols-2 gap-8">
                        <ItemCard imageSrc={Image10} />
                        <ItemCard imageSrc={Image11} />
                        <ItemCard imageSrc={Image12} />
                        <ItemCard imageSrc={Image13} />
                        <ItemCard imageSrc={Image14} />
                        <ItemCard imageSrc={Image15} />
                        <ItemCard imageSrc={Image16} />
                        <ItemCard imageSrc={Image1} />
                        <ItemCard imageSrc={Image2} />
                        <ItemCard imageSrc={Image3} />
                        <ItemCard imageSrc={Image4} />
                        <ItemCard imageSrc={Image5} />
                        <ItemCard imageSrc={Image6} />
                        <ItemCard imageSrc={Image7} />
                        <ItemCard imageSrc={Image8} />
                        <ItemCard imageSrc={Image9} />
                    </div>

                </div>


            </div>

            <Footer />

        </div>
    )
}

export default PlaceToStayPage