import { FC, useState, useEffect } from "react";
import ProductList from "../../components/ProductList/ProductList";
import axios from "axios";
import { useLocation } from "react-router-dom";
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

const Search: FC = () => {

    const { state } = useLocation();
    const [loading, setLoading] = useState(false);

    const searchValue = state?.searchValue ?? '';
    console.log(searchValue);
    

    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
      setLoading(true)
      getProductList().then((data: Product[]) => {
        const bestSellersProducts = data.filter((product) => product.name.toLowerCase().includes(searchValue))
        setProducts(bestSellersProducts);
        setLoading(false)
        
      });
    }, [searchValue]);
  
    async function getProductList() {
      let response = await axios.get(
        "https://63782c6a5c477765122d0c95.mockapi.io/perfume-products"
      );
      let result = response.data;
      
      return result;
    }
  
      return (
          <div className="px-4 pt-2">
            {loading && <Loading/>}
        <ProductList products={products} isNavigate={true}/>
      </div>
      )
}

export default Search;