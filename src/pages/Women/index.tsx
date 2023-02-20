import { FC, useState } from "react";
import "./women.css"

const Women: FC = () => {

    const [reading, setReading] = useState<boolean>(false)


    return (
        <>
            <div className="flex h-72">
                <img className="max-w-xl rounded-2xl m-4" src="https://cdn.shopify.com/s/files/1/0269/7763/2389/files/collection_header_BestSellersWomen_Desktop.jpg" alt="" />
                <div className={reading?"text-sm my-4 px-2 text-justify leading-6 text-scroll":"text-sm my-4 px-2 text-justify leading-6"}>Nothing is worse than falling behind, and Perfumania is here to keep you on trend. Our selection of best-selling perfumes for women is packed with the best offers available. What you’ll find here reflects the world’s current fragrance trends, and we guarantee that you’ll love what you find.Whether you’re looking for ideas for your next scent 
                {reading?
                <div>
                    or seeing how your favorite signature scent stacks up to the competition, Perfumania is the place to be. We provide amazing service at an amazing price, and all of our products are shipped directly to you. There’s no annoying middle supplier, and our packers will make sure that your products arrive safely. If you’re ready to see the difference that a new (or old!) scent can make, then it’s time to take a leap! Trust Perfumania for the top perfumes for women, and we know you’ll love the results.
                    <button className="border-b-2 border-black mx-3" onClick={()=>setReading(false)}>Read less</button>
                </div>
                :   
                <div>
                    <button className="border-b-2 border-black mx-3" onClick={()=>setReading(true)}>Read more</button>
                </div>}
                </div>
            </div>
            <div></div>
        </>
    )
}

export default Women;