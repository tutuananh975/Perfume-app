import { FC } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import BrandList from "./components/BrandList/BrandList";
import ProductList from "./components/ProductList/ProductList";
import { BestSallers } from "./data/BestSallers";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const HomePage: FC = () => {
    return (
        <div>
            <img src="https://cdn.shopify.com/s/files/1/0269/7763/2389/files/Perfumania_02-06-2023_VDAY_GuideWeb_Banner_1500x.jpg?v=1675690297" alt="" />
            <div className="flex justify-between my-6">
                <div className="text-2xl">OUR FRAGRANCE BRANDS</div>
                <div className="flex my-auto">Shop by brand <AiOutlineArrowRight className="text-2xl mx-1 pt-1 text-center"/></div>
            </div>
            <BrandList/>
            <div className="text-center mt-12 pt-10">
                <div className="text-3xl">BEST SELLERS</div>
                <div className="p-3">Explore the best selling perfumes of all times</div>
            </div>
            <ProductList data={BestSallers}/>
            <div>Sản phẩm</div>
        </div>
    )
}

export default HomePage;