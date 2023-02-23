import { FC, useEffect, useState } from "react";
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


const Men: FC = () => {

  const [menProducts, setMenProducts] = useState<Product[]>([]);


  useEffect(() => {
    getProductList().then((data: Product[]) => {
      const menProducts = data.filter((product) => product.sex === "men");
      setMenProducts(menProducts);
      console.log(menProducts);

     
      
    });
  }, []);

  async function getProductList() {
    let response = await axios.get(
      "https://63782c6a5c477765122d0c95.mockapi.io/perfume-products"
    );
    let result = response.data;
    
    return result;
  }
  

  return (
    <div className="px-4 pt-2">
      <Banner />
      <ProductList products = {menProducts}/>
    </div>

      )}


export default Men;

