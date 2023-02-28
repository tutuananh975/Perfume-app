import { FC, useState, useEffect } from "react";
import Banner from "../../components/Banner";
import ProductList from "../../components/ProductList/ProductList";
import axios from "axios";
import Loading from "../../components/Loading";

interface Product {
  imgSrc: string;
  name: string;
  desc: string;
  sex: string;
  retailPrice: number;
  ourPrice: number;
  id: any;
}


const Women: FC = () => {

  const [womenProducts, setWomenProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getProductList().then((data: Product[]) => {


      const womenProducts = data.filter((product) => product.sex === "women");
      setWomenProducts(womenProducts);

    });
  }, []);

  async function getProductList() {
    setIsLoading(true);
    let response = await axios.get(
      "https://63782c6a5c477765122d0c95.mockapi.io/perfume-products"
    );
    let result = response.data;
    setIsLoading(false)
    return result;
  }

  return (
    <div className="px-4 pt-2">
      {isLoading && <Loading />}
      <Banner imgBanner="https://cdn.shopify.com/s/files/1/0269/7763/2389/files/collection_header_BestSellersWomen_Desktop.jpg"/>
      <ProductList products={womenProducts} isNavigate={true}/>
    </div>
  )
}

export default Women;