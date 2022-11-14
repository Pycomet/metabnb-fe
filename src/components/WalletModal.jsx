import { Dialog } from "@headlessui/react";
import Metamask from "../assets/metamask.svg"
import WalletConnect from "../assets/walletconnect.svg"

export const WalletModal = ({ isOpen, setIsOpen }) => {

    return (
        <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="fixed inset-0 bg-black bg-opacity-25 text-left backdrop-blur-sm flex justify-center items-center">
            <Dialog.Panel className="max-w-xl rounded-[10px] font-redrose w-full bg-white">
                <Dialog.Title className="font-bold flex md:text-2xl text-lg text-start justify-between pt-6 px-6">
                    <p>Connect Wallet</p>
                    <p className="cursor-pointer font-light" onClick={() => setIsOpen(false)}>X</p>
                </Dialog.Title>
                
                <Dialog.Description>
                    <hr className="my-2" />
                </Dialog.Description>

                <div className="px-6 py-4 mt-6 mb-2 text-md">
                    <p>Choose your preferred wallet:</p>
                
                    <button className="text-black text-xl font-bold border items-center w-full my-4 flex justify-between bg-transparent hover:bg-gray-100" onClick={() => setIsOpen(false)}>
                        <p className="flex items-center"><img className="pr-4" src={Metamask} alt="" />Metamask</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>

                    </button>
                
                    <button className="text-black text-xl font-redrose font-bold border items-center w-full my-4 flex justify-between bg-transparent hover:bg-gray-100" onClick={() => setIsOpen(false)}>
                        <p className="flex items-center"><img className="pr-4" src={WalletConnect} alt="" />WalletConnect</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>

                    </button>

                </div>
            </Dialog.Panel>
        </Dialog>
    )
    
}


export default WalletModal