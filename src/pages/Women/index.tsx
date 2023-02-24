import { FC,useState, useEffect } from "react";
import Banner from "../../components/Banner";
import ProductList from "../../components/ProductList/ProductList";
import axios from "axios";

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

  useEffect(() => {
    getProductList().then((data: Product[]) => {
   

      const womenProducts = data.filter((product) => product.sex === "women");
      setWomenProducts(womenProducts);
      console.log(womenProducts);
      
    });
  }, []);

  async function getProductList() {
    let response = await axios.get(
      "https://63782c6a5c477765122d0c95.mockapi.io/perfume-products"
    );
    let result = response.data;
    console.log(result);
    
    return result;
  }

    return (
        <div className="px-4 pt-2">
      <Banner />
      <ProductList products={womenProducts}/>
    </div>
    )
}

export default Women;