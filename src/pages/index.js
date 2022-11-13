import HeaderSection from "../components/Header"
import NavigationBar from "../components/NavigationBar"

import MbToken from "../assets/mbtoken.svg"
import Meta from "../assets/metamask-white.svg"
import Opensea from "../assets/opensea.svg"
import NftFrame from "../assets/nft-frame.svg"
import Footer from "../components/Footer"

const IndexPage = () => {

    return (
        <div>
            <div className="container mx-auto max-w-[85%] mt-2" >
                <NavigationBar />


                <HeaderSection />
            </div>

            <div className="flex md:flex-row flex-wrap bg-[#A02276] justify-center py-2 ">
                <img className="md:px-40 py-1" src={MbToken} alt="token" />
                <img className="md:px-40 py-1" src={Meta} alt="token" />
                <img className="md:px-40 py-1" src={Opensea} alt="token" />
            </div>

            <HeaderSection />


            <div className="bg-[#A02276] justify-center py-2">
                <div className="container mx-auto max-w-[85%] md:mt-2 flex md:flex-row flex-col" >
                    <div className="md:w-2/5 text-left text-[26px] text-white md:text-6xl md:my-40 my-10 font-semibold flex-col">
                        <h2 className="mt-6 py-6">Metabnb NFTs</h2>

                        <p className="md:text-xl text-sm my-6 md:mr-40 font-normal">Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our customer access to loads of our exclusive services.</p>

                        <button className="bg-white text-[#A02276] font-normal text-sm">Learn More</button>
                    </div>

                    <div className="md:w-3/5 md:my-20 align-middle ml-10">
                        <img className="md:px-5 py-1" src={NftFrame} alt="nft" />
                    </div>
                </div>
            </div>

            <Footer />

        </div>
    )
}

export default IndexPage