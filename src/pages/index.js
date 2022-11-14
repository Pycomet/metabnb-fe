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
            <div className="container mx-auto max-w-[80%] mt-2" >
                <NavigationBar />

                <HeaderSection />
            </div>

            <div className="flex md:flex-row flex-wrap bg-[#A02276] justify-center py-2 ">
                <img className="md:px-40 py-1" src={MbToken} alt="token" />
                <img className="md:px-40 py-1" src={Meta} alt="token" />
                <img className="md:px-40 py-1" src={Opensea} alt="token" />
            </div>

            <div className="font-redrose md:my-20">
                <div className="container mx-auto md:justify-center max-w-[80%]">
                    <h3 className="font-semibold text-center text-5xl">Inspiration for your next adventure</h3>
                </div>
            </div>


            <div className="bg-[#A02276] py-2 font-redrose">
                <div className="container mx-auto max-w-[80%] md:mt-2 justify-between flex md:flex-row flex-col" >
                    <div className="md:w-2/5 text-left text-[26px] text-white md:text-6xl md:my-40 my-10 font-semibold flex-col">
                        <h2 className="mt-6 py-6">Metabnb NFTs</h2>

                        <p className="md:text-xl text-sm my-4 md:leading-9 font-normal">Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our customer access to loads of our exclusive services.</p>

                        <button className="bg-white text-[#A02276] my-10 font-normal md:text-xl text-sm">Learn More</button>
                    </div>
                    {/* <div className="md:w-1/5"></div> */}
                    <div className="md:w-3/5 md:my-20 md:ml-[6em]">
                        <img className="py-1" src={NftFrame} alt="nft" />
                    </div>
                </div>
            </div>

            <Footer />

        </div>
    )
}

export default IndexPage