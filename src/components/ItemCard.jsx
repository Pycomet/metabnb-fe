
import Star from "../assets/star.svg"

export const ItemCard = (props) => {
    return (
        <div className="w-90 h-full border-[1px] border-[#A3A3A3] box-border rounded-[15px] font-redrose">
            <div className="relative p-[1em]">
               <img className="w-full h-[280px]" src={props.imageSrc} alt="data" />
            </div>
            <div className="flex flex-row px-[2em] py-2 text-xs font-redrose">
                <div className="w-1/2 flex-col text-left">
                    <p className="pb-2">Desert king</p>
                    <p className="pb-4">2345km away</p>
                    <p className="pb-2 grid grid-cols-7 text-md gap-2">
                        <img src={Star} alt="star" />
                        <img src={Star} alt="star" />
                        <img src={Star} alt="star" />
                        <img src={Star} alt="star" />
                        <img src={Star} alt="star" />
                    </p>
                </div>

                <div className="w-1/2 text-right">
                    <p className="pb-2 font-bold">IMBT per night</p>
                    <p className="pb-2">available for 2weeks stay</p>
                </div>
            </div>
        </div>
    )
}



export default ItemCard